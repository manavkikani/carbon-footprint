import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCarbonStore } from '../store/useCarbonStore';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 64;

const FootprintCanvas: React.FC<{ blurMap?: boolean }> = ({ blurMap = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { animationMode, emissions, burstTriggerId } = useCarbonStore();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameRef = useRef({ frame: 0 });
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/carbon-frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        loadedImages[i - 1] = img;
        if (loadedCount === TOTAL_FRAMES) {
          setImages([...loadedImages]);
        }
      };
      img.onerror = (e) => {
        console.error('Failed to load image', img.src, e);
        loadedCount++; // pretend it loaded to avoid hanging
        if (loadedCount === TOTAL_FRAMES) {
          setImages([...loadedImages].filter(Boolean));
        }
      };
    }
  }, []);

  const renderFrame = (index: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = imgs[Math.round(index)];
    if (!img || !img.width || !img.height) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Maintain aspect ratio while covering
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    
    // Add color overlay for accent based on emissions
    const hue = emissions < 30 ? 150 : emissions > 70 ? 10 : 45; // Green, red/orange, yellow
    
    // Base tint
    ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${emissions > 70 ? 0.3 : 0.15})`;
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (emissions > 70) {
      // Add 'polluted' dark fog effect
      ctx.fillStyle = `rgba(15, 10, 10, 0.5)`;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (emissions < 30) {
      // Clean, bright glow effect
      ctx.fillStyle = `rgba(16, 185, 129, 0.1)`;
      ctx.globalCompositeOperation = 'screen';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.globalCompositeOperation = 'source-over';
  };

  useEffect(() => {
    if (images.length === TOTAL_FRAMES) {
      renderFrame(frameRef.current.frame, images);
    }
  }, [images]);

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        renderFrame(frameRef.current.frame);
      }
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, emissions]);

  useEffect(() => {
    if (images.length === 0) return;

    let rafId: number;
    let st: ScrollTrigger | null = null;
    
    if (animationMode === 'scroll') {
      // Setup timeline for scroll
      st = ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const targetFrame = self.progress * (TOTAL_FRAMES - 1);
          frameRef.current.frame = targetFrame;
          renderFrame(targetFrame);
        }
      });
      
    } else if (animationMode === 'loop' || animationMode === 'burst') {
      // Loop over frames (slowed down significantly to match 4-6s loop duration)
      let speed = emissions > 70 ? 0.25 : emissions < 30 ? 0.08 : 0.15;
      
      const loop = () => {
        frameRef.current.frame += speed;
        if (frameRef.current.frame >= TOTAL_FRAMES) {
          frameRef.current.frame = 0;
        }
        renderFrame(frameRef.current.frame);
        rafId = requestAnimationFrame(loop);
      };
      loop();
    }
    
    return () => {
      if (st) st.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [animationMode, images, emissions]);
  
  // Burst effect triggered via burstTriggerId
  useEffect(() => {
    if (burstTriggerId === 0 || images.length === 0) return;
    
    gsap.fromTo(canvasRef.current, {
      filter: 'brightness(1.5) blur(4px) saturate(2)'
    }, {
      filter: 'brightness(1) blur(0px) saturate(1)',
      duration: 1.5,
      ease: 'power3.out'
    });
  }, [burstTriggerId, images]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        objectFit: 'cover',
        opacity: 0.6,
        filter: blurMap ? 'blur(10px)' : 'none',
        transition: 'filter 0.5s ease',
      }}
    />
  );
};

export default FootprintCanvas;
