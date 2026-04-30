const fs = require('fs');
const path = require('path');

const indianNames = ["Rahul", "Priya", "Amit", "Neha", "Rohit", "Sneha", "Aditya", "Pooja", "Vikram", "Anjali", "Suresh", "Ramesh", "Karan", "Kavya", "Arjun", "Ananya", "Ravi", "Megha", "Siddharth", "Divya", "Akash", "Swati", "Manish", "Ishita"];
const internationalNames = ["John", "Emma", "Liam", "Olivia", "Noah", "Sophia", "Wei", "Chen", "Yuki", "Hiro", "Mateo", "Isabella", "Luka", "Mia", "Hans", "Greta", "Ali", "Fatima"];
const lastVerb = ["A.", "B.", "C.", "D.", "K.", "M.", "P.", "R.", "S.", "T.", "V.", "W.", "Y.", "Z."];

const guildsData = [
  { id: 'g1', name: 'Eco Warriors', motto: 'Saving the planet one step at a time.' },
  { id: 'g2', name: 'Green Haven', motto: 'Harmony with nature.' },
  { id: 'g3', name: 'Carbon Crusaders', motto: 'Aggressive carbon reduction.' },
  { id: 'g4', name: 'Earth Defenders', motto: 'Protecting our home.' },
  { id: 'g5', name: 'Solar Knights', motto: 'Harnessing the sun.' },
  { id: 'g6', name: 'Ocean Protectors', motto: 'Keeping the seas clean.' },
  { id: 'g7', name: 'Forest Rangers', motto: 'Planting trees every day.' },
  { id: 'g8', name: 'Zero Waste Heroes', motto: 'Reuse, reduce, recycle.' },
  { id: 'g9', name: 'Wind Walkers', motto: 'Powered by the wind.' },
  { id: 'g10', name: 'Global Greens', motto: 'A united worldwide effort.' }
];

const getRandomName = () => {
    const isIndian = Math.random() < 0.8;
    const firstList = isIndian ? indianNames : internationalNames;
    const first = firstList[Math.floor(Math.random() * firstList.length)];
    const last = lastVerb[Math.floor(Math.random() * lastVerb.length)];
    return `${first} ${last}`;
};

const users = [];
for (let i = 0; i < 5000; i++) {
    const guild = guildsData[Math.floor(Math.random() * guildsData.length)];
    const score = parseFloat(((Math.random() * 140) + 10).toFixed(2)); // Random footprint between 10 and 150
    users.push({
        id: `u${i}`,
        name: getRandomName(),
        score,
        guildId: guild.id
    });
}

const fileContent = `
export interface MockUser {
  id: string;
  name: string;
  score: number;
  guildId: string | null;
}

export interface MockGuild {
  id: string;
  name: string;
  motto: string;
}

export const mockGuilds: MockGuild[] = ${JSON.stringify(guildsData, null, 2)};
export const mockUsers: MockUser[] = ${JSON.stringify(users, null, 2)};
`;

const dirPath = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath, { recursive: true });
}

fs.writeFileSync(path.join(dirPath, 'mockCommunity.ts'), fileContent);
console.log("Mock data generated.");
