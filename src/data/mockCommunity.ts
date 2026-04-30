
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

export const mockGuilds: MockGuild[] = [
  {
    "id": "g1",
    "name": "Eco Warriors",
    "motto": "Saving the planet one step at a time."
  },
  {
    "id": "g2",
    "name": "Green Haven",
    "motto": "Harmony with nature."
  },
  {
    "id": "g3",
    "name": "Carbon Crusaders",
    "motto": "Aggressive carbon reduction."
  },
  {
    "id": "g4",
    "name": "Earth Defenders",
    "motto": "Protecting our home."
  },
  {
    "id": "g5",
    "name": "Solar Knights",
    "motto": "Harnessing the sun."
  },
  {
    "id": "g6",
    "name": "Ocean Protectors",
    "motto": "Keeping the seas clean."
  },
  {
    "id": "g7",
    "name": "Forest Rangers",
    "motto": "Planting trees every day."
  },
  {
    "id": "g8",
    "name": "Zero Waste Heroes",
    "motto": "Reuse, reduce, recycle."
  },
  {
    "id": "g9",
    "name": "Wind Walkers",
    "motto": "Powered by the wind."
  },
  {
    "id": "g10",
    "name": "Global Greens",
    "motto": "A united worldwide effort."
  }
];
export const mockUsers: MockUser[] = [
  {
    "id": "u0",
    "name": "Arjun R.",
    "score": 41.25,
    "guildId": "g3"
  },
  {
    "id": "u1",
    "name": "Neha Y.",
    "score": 122.61,
    "guildId": "g9"
  },
  {
    "id": "u2",
    "name": "Kavya K.",
    "score": 77.83,
    "guildId": "g3"
  },
  {
    "id": "u3",
    "name": "Divya D.",
    "score": 136.57,
    "guildId": "g2"
  },
  {
    "id": "u4",
    "name": "Anjali T.",
    "score": 38.76,
    "guildId": "g1"
  },
  {
    "id": "u5",
    "name": "Chen B.",
    "score": 39.82,
    "guildId": "g2"
  },
  {
    "id": "u6",
    "name": "Neha T.",
    "score": 62.2,
    "guildId": "g7"
  },
  {
    "id": "u7",
    "name": "Ravi B.",
    "score": 25.36,
    "guildId": "g3"
  },
  {
    "id": "u8",
    "name": "Sneha P.",
    "score": 85.19,
    "guildId": "g1"
  },
  {
    "id": "u9",
    "name": "Aditya B.",
    "score": 60.7,
    "guildId": "g2"
  },
  {
    "id": "u10",
    "name": "Karan K.",
    "score": 37.13,
    "guildId": "g2"
  },
  {
    "id": "u11",
    "name": "Ramesh S.",
    "score": 52.36,
    "guildId": "g1"
  },
  {
    "id": "u12",
    "name": "Emma A.",
    "score": 58.4,
    "guildId": "g9"
  },
  {
    "id": "u13",
    "name": "Noah Y.",
    "score": 45.36,
    "guildId": "g6"
  },
  {
    "id": "u14",
    "name": "Vikram A.",
    "score": 108.21,
    "guildId": "g9"
  },
  {
    "id": "u15",
    "name": "Ali D.",
    "score": 19.67,
    "guildId": "g4"
  },
  {
    "id": "u16",
    "name": "Vikram P.",
    "score": 15.04,
    "guildId": "g6"
  },
  {
    "id": "u17",
    "name": "Siddharth V.",
    "score": 72.61,
    "guildId": "g8"
  },
  {
    "id": "u18",
    "name": "Rohit W.",
    "score": 49.03,
    "guildId": "g1"
  },
  {
    "id": "u19",
    "name": "Rohit B.",
    "score": 142.83,
    "guildId": "g10"
  },
  {
    "id": "u20",
    "name": "Manish A.",
    "score": 90.72,
    "guildId": "g9"
  },
  {
    "id": "u21",
    "name": "Arjun W.",
    "score": 73.44,
    "guildId": "g8"
  },
  {
    "id": "u22",
    "name": "Greta R.",
    "score": 44.48,
    "guildId": "g5"
  },
  {
    "id": "u23",
    "name": "Rahul M.",
    "score": 66.66,
    "guildId": "g10"
  },
  {
    "id": "u24",
    "name": "Swati V.",
    "score": 11.41,
    "guildId": "g4"
  },
  {
    "id": "u25",
    "name": "Ramesh K.",
    "score": 97.59,
    "guildId": "g6"
  },
  {
    "id": "u26",
    "name": "Pooja K.",
    "score": 56.53,
    "guildId": "g1"
  },
  {
    "id": "u27",
    "name": "Arjun A.",
    "score": 31.34,
    "guildId": "g6"
  },
  {
    "id": "u28",
    "name": "Pooja V.",
    "score": 104.9,
    "guildId": "g3"
  },
  {
    "id": "u29",
    "name": "Sneha D.",
    "score": 106.14,
    "guildId": "g5"
  },
  {
    "id": "u30",
    "name": "Aditya D.",
    "score": 51.43,
    "guildId": "g2"
  },
  {
    "id": "u31",
    "name": "Priya S.",
    "score": 128.81,
    "guildId": "g2"
  },
  {
    "id": "u32",
    "name": "Anjali S.",
    "score": 71.79,
    "guildId": "g10"
  },
  {
    "id": "u33",
    "name": "Mia P.",
    "score": 46.38,
    "guildId": "g9"
  },
  {
    "id": "u34",
    "name": "Akash C.",
    "score": 126.08,
    "guildId": "g6"
  },
  {
    "id": "u35",
    "name": "Mia A.",
    "score": 57.48,
    "guildId": "g10"
  },
  {
    "id": "u36",
    "name": "Priya B.",
    "score": 68.14,
    "guildId": "g3"
  },
  {
    "id": "u37",
    "name": "Priya Z.",
    "score": 50.32,
    "guildId": "g6"
  },
  {
    "id": "u38",
    "name": "Ravi P.",
    "score": 63.3,
    "guildId": "g4"
  },
  {
    "id": "u39",
    "name": "Yuki D.",
    "score": 72.01,
    "guildId": "g10"
  },
  {
    "id": "u40",
    "name": "Anjali W.",
    "score": 70.69,
    "guildId": "g10"
  },
  {
    "id": "u41",
    "name": "Divya T.",
    "score": 104.77,
    "guildId": "g8"
  },
  {
    "id": "u42",
    "name": "Neha A.",
    "score": 69.09,
    "guildId": "g4"
  },
  {
    "id": "u43",
    "name": "Amit T.",
    "score": 65.2,
    "guildId": "g1"
  },
  {
    "id": "u44",
    "name": "Anjali S.",
    "score": 126.47,
    "guildId": "g1"
  },
  {
    "id": "u45",
    "name": "Karan R.",
    "score": 146.78,
    "guildId": "g5"
  },
  {
    "id": "u46",
    "name": "Hans R.",
    "score": 131.78,
    "guildId": "g6"
  },
  {
    "id": "u47",
    "name": "Akash C.",
    "score": 74.24,
    "guildId": "g8"
  },
  {
    "id": "u48",
    "name": "Ravi V.",
    "score": 73.94,
    "guildId": "g5"
  },
  {
    "id": "u49",
    "name": "Siddharth D.",
    "score": 75.99,
    "guildId": "g5"
  },
  {
    "id": "u50",
    "name": "Divya V.",
    "score": 105.66,
    "guildId": "g2"
  },
  {
    "id": "u51",
    "name": "Amit C.",
    "score": 130.28,
    "guildId": "g1"
  },
  {
    "id": "u52",
    "name": "Mia Z.",
    "score": 52.56,
    "guildId": "g9"
  },
  {
    "id": "u53",
    "name": "Noah R.",
    "score": 86.65,
    "guildId": "g1"
  },
  {
    "id": "u54",
    "name": "Karan A.",
    "score": 23.03,
    "guildId": "g5"
  },
  {
    "id": "u55",
    "name": "Olivia M.",
    "score": 49.52,
    "guildId": "g5"
  },
  {
    "id": "u56",
    "name": "Sneha M.",
    "score": 11.46,
    "guildId": "g2"
  },
  {
    "id": "u57",
    "name": "Akash C.",
    "score": 81.63,
    "guildId": "g1"
  },
  {
    "id": "u58",
    "name": "Anjali A.",
    "score": 22.75,
    "guildId": "g9"
  },
  {
    "id": "u59",
    "name": "Manish D.",
    "score": 127.63,
    "guildId": "g3"
  },
  {
    "id": "u60",
    "name": "Karan A.",
    "score": 72.09,
    "guildId": "g7"
  },
  {
    "id": "u61",
    "name": "Manish A.",
    "score": 115.91,
    "guildId": "g4"
  },
  {
    "id": "u62",
    "name": "Ramesh V.",
    "score": 100.23,
    "guildId": "g1"
  },
  {
    "id": "u63",
    "name": "Sneha T.",
    "score": 79.25,
    "guildId": "g3"
  },
  {
    "id": "u64",
    "name": "Divya A.",
    "score": 94.56,
    "guildId": "g1"
  },
  {
    "id": "u65",
    "name": "Neha Y.",
    "score": 68.8,
    "guildId": "g10"
  },
  {
    "id": "u66",
    "name": "Hiro K.",
    "score": 11.48,
    "guildId": "g10"
  },
  {
    "id": "u67",
    "name": "Swati K.",
    "score": 109.92,
    "guildId": "g6"
  },
  {
    "id": "u68",
    "name": "Swati B.",
    "score": 29.55,
    "guildId": "g9"
  },
  {
    "id": "u69",
    "name": "Anjali K.",
    "score": 98.91,
    "guildId": "g1"
  },
  {
    "id": "u70",
    "name": "Wei P.",
    "score": 79.37,
    "guildId": "g2"
  },
  {
    "id": "u71",
    "name": "Karan Z.",
    "score": 125.78,
    "guildId": "g4"
  },
  {
    "id": "u72",
    "name": "Akash K.",
    "score": 104.72,
    "guildId": "g9"
  },
  {
    "id": "u73",
    "name": "Mateo S.",
    "score": 40.41,
    "guildId": "g6"
  },
  {
    "id": "u74",
    "name": "Olivia B.",
    "score": 26.38,
    "guildId": "g2"
  },
  {
    "id": "u75",
    "name": "Neha K.",
    "score": 23.42,
    "guildId": "g8"
  },
  {
    "id": "u76",
    "name": "Olivia T.",
    "score": 62.62,
    "guildId": "g8"
  },
  {
    "id": "u77",
    "name": "Ramesh S.",
    "score": 81.59,
    "guildId": "g7"
  },
  {
    "id": "u78",
    "name": "Karan Z.",
    "score": 72.1,
    "guildId": "g4"
  },
  {
    "id": "u79",
    "name": "Rahul P.",
    "score": 110.41,
    "guildId": "g4"
  },
  {
    "id": "u80",
    "name": "Mateo W.",
    "score": 55.61,
    "guildId": "g10"
  },
  {
    "id": "u81",
    "name": "Divya D.",
    "score": 137.29,
    "guildId": "g9"
  },
  {
    "id": "u82",
    "name": "Sophia T.",
    "score": 119.78,
    "guildId": "g9"
  },
  {
    "id": "u83",
    "name": "Ananya Y.",
    "score": 84.08,
    "guildId": "g1"
  },
  {
    "id": "u84",
    "name": "Priya D.",
    "score": 90.17,
    "guildId": "g8"
  },
  {
    "id": "u85",
    "name": "Ananya T.",
    "score": 78.52,
    "guildId": "g6"
  },
  {
    "id": "u86",
    "name": "Fatima M.",
    "score": 51.52,
    "guildId": "g5"
  },
  {
    "id": "u87",
    "name": "Arjun M.",
    "score": 22.82,
    "guildId": "g1"
  },
  {
    "id": "u88",
    "name": "Pooja B.",
    "score": 132.97,
    "guildId": "g1"
  },
  {
    "id": "u89",
    "name": "Siddharth K.",
    "score": 46.84,
    "guildId": "g3"
  },
  {
    "id": "u90",
    "name": "Aditya B.",
    "score": 61.75,
    "guildId": "g6"
  },
  {
    "id": "u91",
    "name": "Neha D.",
    "score": 53.19,
    "guildId": "g1"
  },
  {
    "id": "u92",
    "name": "Priya C.",
    "score": 123.77,
    "guildId": "g6"
  },
  {
    "id": "u93",
    "name": "Rohit A.",
    "score": 54.38,
    "guildId": "g6"
  },
  {
    "id": "u94",
    "name": "Suresh A.",
    "score": 29.91,
    "guildId": "g10"
  },
  {
    "id": "u95",
    "name": "Swati S.",
    "score": 37.63,
    "guildId": "g3"
  },
  {
    "id": "u96",
    "name": "Amit A.",
    "score": 27.39,
    "guildId": "g5"
  },
  {
    "id": "u97",
    "name": "Ishita V.",
    "score": 148.07,
    "guildId": "g10"
  },
  {
    "id": "u98",
    "name": "Ishita A.",
    "score": 29.69,
    "guildId": "g8"
  },
  {
    "id": "u99",
    "name": "Suresh Z.",
    "score": 42.31,
    "guildId": "g6"
  },
  {
    "id": "u100",
    "name": "Sneha D.",
    "score": 74.42,
    "guildId": "g2"
  },
  {
    "id": "u101",
    "name": "John P.",
    "score": 137.43,
    "guildId": "g1"
  },
  {
    "id": "u102",
    "name": "Ishita V.",
    "score": 70.08,
    "guildId": "g9"
  },
  {
    "id": "u103",
    "name": "Arjun C.",
    "score": 110.36,
    "guildId": "g3"
  },
  {
    "id": "u104",
    "name": "Ravi Z.",
    "score": 49.74,
    "guildId": "g3"
  },
  {
    "id": "u105",
    "name": "Swati C.",
    "score": 54.4,
    "guildId": "g3"
  },
  {
    "id": "u106",
    "name": "Megha K.",
    "score": 67.35,
    "guildId": "g5"
  },
  {
    "id": "u107",
    "name": "Swati Z.",
    "score": 119.93,
    "guildId": "g1"
  },
  {
    "id": "u108",
    "name": "Ali M.",
    "score": 33.51,
    "guildId": "g4"
  },
  {
    "id": "u109",
    "name": "Neha Z.",
    "score": 146.44,
    "guildId": "g8"
  },
  {
    "id": "u110",
    "name": "Arjun A.",
    "score": 32.97,
    "guildId": "g6"
  },
  {
    "id": "u111",
    "name": "Siddharth C.",
    "score": 118.32,
    "guildId": "g3"
  },
  {
    "id": "u112",
    "name": "Megha D.",
    "score": 78.99,
    "guildId": "g9"
  },
  {
    "id": "u113",
    "name": "Ravi W.",
    "score": 138.42,
    "guildId": "g7"
  },
  {
    "id": "u114",
    "name": "Ramesh P.",
    "score": 59.49,
    "guildId": "g7"
  },
  {
    "id": "u115",
    "name": "Akash T.",
    "score": 107.36,
    "guildId": "g4"
  },
  {
    "id": "u116",
    "name": "Ishita Y.",
    "score": 24.09,
    "guildId": "g7"
  },
  {
    "id": "u117",
    "name": "Suresh B.",
    "score": 43.09,
    "guildId": "g3"
  },
  {
    "id": "u118",
    "name": "Suresh R.",
    "score": 131.86,
    "guildId": "g2"
  },
  {
    "id": "u119",
    "name": "Rahul Z.",
    "score": 52.57,
    "guildId": "g10"
  },
  {
    "id": "u120",
    "name": "Liam S.",
    "score": 116.35,
    "guildId": "g8"
  },
  {
    "id": "u121",
    "name": "Chen Y.",
    "score": 137.72,
    "guildId": "g2"
  },
  {
    "id": "u122",
    "name": "Siddharth V.",
    "score": 54.8,
    "guildId": "g7"
  },
  {
    "id": "u123",
    "name": "Ishita R.",
    "score": 137.22,
    "guildId": "g4"
  },
  {
    "id": "u124",
    "name": "Akash S.",
    "score": 74.57,
    "guildId": "g5"
  },
  {
    "id": "u125",
    "name": "Ananya A.",
    "score": 132.28,
    "guildId": "g6"
  },
  {
    "id": "u126",
    "name": "Sneha W.",
    "score": 65.77,
    "guildId": "g2"
  },
  {
    "id": "u127",
    "name": "Rahul P.",
    "score": 18.67,
    "guildId": "g9"
  },
  {
    "id": "u128",
    "name": "Arjun T.",
    "score": 49.86,
    "guildId": "g6"
  },
  {
    "id": "u129",
    "name": "Aditya Z.",
    "score": 23.96,
    "guildId": "g10"
  },
  {
    "id": "u130",
    "name": "Aditya W.",
    "score": 80.21,
    "guildId": "g9"
  },
  {
    "id": "u131",
    "name": "Arjun K.",
    "score": 60.25,
    "guildId": "g1"
  },
  {
    "id": "u132",
    "name": "Megha M.",
    "score": 64.75,
    "guildId": "g3"
  },
  {
    "id": "u133",
    "name": "Wei V.",
    "score": 65.29,
    "guildId": "g3"
  },
  {
    "id": "u134",
    "name": "Ramesh P.",
    "score": 99.95,
    "guildId": "g1"
  },
  {
    "id": "u135",
    "name": "Ramesh T.",
    "score": 33.71,
    "guildId": "g4"
  },
  {
    "id": "u136",
    "name": "Sneha Y.",
    "score": 64.63,
    "guildId": "g9"
  },
  {
    "id": "u137",
    "name": "Priya R.",
    "score": 149.76,
    "guildId": "g10"
  },
  {
    "id": "u138",
    "name": "Liam A.",
    "score": 136.6,
    "guildId": "g1"
  },
  {
    "id": "u139",
    "name": "Greta S.",
    "score": 95.76,
    "guildId": "g10"
  },
  {
    "id": "u140",
    "name": "Rahul T.",
    "score": 45.67,
    "guildId": "g9"
  },
  {
    "id": "u141",
    "name": "Divya T.",
    "score": 99.03,
    "guildId": "g8"
  },
  {
    "id": "u142",
    "name": "Rahul C.",
    "score": 132.12,
    "guildId": "g7"
  },
  {
    "id": "u143",
    "name": "Liam W.",
    "score": 18.52,
    "guildId": "g9"
  },
  {
    "id": "u144",
    "name": "Mateo S.",
    "score": 88.35,
    "guildId": "g6"
  },
  {
    "id": "u145",
    "name": "Ananya M.",
    "score": 53.28,
    "guildId": "g1"
  },
  {
    "id": "u146",
    "name": "Rahul B.",
    "score": 69.24,
    "guildId": "g5"
  },
  {
    "id": "u147",
    "name": "Hiro B.",
    "score": 123.03,
    "guildId": "g8"
  },
  {
    "id": "u148",
    "name": "Anjali Y.",
    "score": 77.84,
    "guildId": "g5"
  },
  {
    "id": "u149",
    "name": "Ali K.",
    "score": 140,
    "guildId": "g4"
  },
  {
    "id": "u150",
    "name": "Chen C.",
    "score": 13.08,
    "guildId": "g7"
  },
  {
    "id": "u151",
    "name": "Divya M.",
    "score": 12.69,
    "guildId": "g3"
  },
  {
    "id": "u152",
    "name": "Akash M.",
    "score": 128.02,
    "guildId": "g5"
  },
  {
    "id": "u153",
    "name": "Chen R.",
    "score": 114.08,
    "guildId": "g5"
  },
  {
    "id": "u154",
    "name": "Kavya Z.",
    "score": 12.25,
    "guildId": "g4"
  },
  {
    "id": "u155",
    "name": "Suresh S.",
    "score": 128.08,
    "guildId": "g6"
  },
  {
    "id": "u156",
    "name": "Pooja M.",
    "score": 69.86,
    "guildId": "g6"
  },
  {
    "id": "u157",
    "name": "Siddharth B.",
    "score": 12.03,
    "guildId": "g1"
  },
  {
    "id": "u158",
    "name": "Mia Y.",
    "score": 114.64,
    "guildId": "g7"
  },
  {
    "id": "u159",
    "name": "Rahul K.",
    "score": 43.78,
    "guildId": "g2"
  },
  {
    "id": "u160",
    "name": "Sneha V.",
    "score": 101.09,
    "guildId": "g4"
  },
  {
    "id": "u161",
    "name": "Ravi Z.",
    "score": 125,
    "guildId": "g7"
  },
  {
    "id": "u162",
    "name": "Swati Y.",
    "score": 19.64,
    "guildId": "g10"
  },
  {
    "id": "u163",
    "name": "Amit S.",
    "score": 46.04,
    "guildId": "g8"
  },
  {
    "id": "u164",
    "name": "Liam Y.",
    "score": 98.93,
    "guildId": "g10"
  },
  {
    "id": "u165",
    "name": "Amit R.",
    "score": 61.24,
    "guildId": "g9"
  },
  {
    "id": "u166",
    "name": "Ananya Z.",
    "score": 58.32,
    "guildId": "g3"
  },
  {
    "id": "u167",
    "name": "Ananya D.",
    "score": 34.38,
    "guildId": "g5"
  },
  {
    "id": "u168",
    "name": "Siddharth A.",
    "score": 119.66,
    "guildId": "g1"
  },
  {
    "id": "u169",
    "name": "Manish K.",
    "score": 16.08,
    "guildId": "g6"
  },
  {
    "id": "u170",
    "name": "Neha D.",
    "score": 60.37,
    "guildId": "g1"
  },
  {
    "id": "u171",
    "name": "Anjali T.",
    "score": 138.39,
    "guildId": "g1"
  },
  {
    "id": "u172",
    "name": "Pooja T.",
    "score": 112.1,
    "guildId": "g1"
  },
  {
    "id": "u173",
    "name": "Neha B.",
    "score": 43.35,
    "guildId": "g3"
  },
  {
    "id": "u174",
    "name": "Hans A.",
    "score": 111.77,
    "guildId": "g8"
  },
  {
    "id": "u175",
    "name": "Luka R.",
    "score": 26.18,
    "guildId": "g8"
  },
  {
    "id": "u176",
    "name": "Aditya T.",
    "score": 23.68,
    "guildId": "g5"
  },
  {
    "id": "u177",
    "name": "Aditya B.",
    "score": 136.64,
    "guildId": "g4"
  },
  {
    "id": "u178",
    "name": "John R.",
    "score": 70.45,
    "guildId": "g10"
  },
  {
    "id": "u179",
    "name": "Divya Z.",
    "score": 146.92,
    "guildId": "g7"
  },
  {
    "id": "u180",
    "name": "Arjun C.",
    "score": 118.29,
    "guildId": "g6"
  },
  {
    "id": "u181",
    "name": "Swati S.",
    "score": 136.99,
    "guildId": "g4"
  },
  {
    "id": "u182",
    "name": "Pooja C.",
    "score": 56.64,
    "guildId": "g9"
  },
  {
    "id": "u183",
    "name": "Akash K.",
    "score": 113.38,
    "guildId": "g4"
  },
  {
    "id": "u184",
    "name": "Neha V.",
    "score": 136.16,
    "guildId": "g6"
  },
  {
    "id": "u185",
    "name": "Rahul B.",
    "score": 142.57,
    "guildId": "g6"
  },
  {
    "id": "u186",
    "name": "Rohit R.",
    "score": 65.87,
    "guildId": "g4"
  },
  {
    "id": "u187",
    "name": "Siddharth R.",
    "score": 34.91,
    "guildId": "g1"
  },
  {
    "id": "u188",
    "name": "Ravi T.",
    "score": 142.93,
    "guildId": "g9"
  },
  {
    "id": "u189",
    "name": "Manish T.",
    "score": 115.33,
    "guildId": "g7"
  },
  {
    "id": "u190",
    "name": "Liam T.",
    "score": 58.87,
    "guildId": "g7"
  },
  {
    "id": "u191",
    "name": "Aditya D.",
    "score": 79.42,
    "guildId": "g9"
  },
  {
    "id": "u192",
    "name": "Karan R.",
    "score": 62.85,
    "guildId": "g7"
  },
  {
    "id": "u193",
    "name": "Swati Z.",
    "score": 91.17,
    "guildId": "g4"
  },
  {
    "id": "u194",
    "name": "Luka K.",
    "score": 143.68,
    "guildId": "g9"
  },
  {
    "id": "u195",
    "name": "Chen R.",
    "score": 59.6,
    "guildId": "g7"
  },
  {
    "id": "u196",
    "name": "Ali P.",
    "score": 16.78,
    "guildId": "g8"
  },
  {
    "id": "u197",
    "name": "Ananya Z.",
    "score": 119.33,
    "guildId": "g6"
  },
  {
    "id": "u198",
    "name": "Kavya W.",
    "score": 71.44,
    "guildId": "g10"
  },
  {
    "id": "u199",
    "name": "Ramesh C.",
    "score": 68.88,
    "guildId": "g6"
  },
  {
    "id": "u200",
    "name": "Priya S.",
    "score": 37.99,
    "guildId": "g9"
  },
  {
    "id": "u201",
    "name": "Megha C.",
    "score": 22.63,
    "guildId": "g5"
  },
  {
    "id": "u202",
    "name": "Ishita T.",
    "score": 18.95,
    "guildId": "g5"
  },
  {
    "id": "u203",
    "name": "Mia M.",
    "score": 149.09,
    "guildId": "g7"
  },
  {
    "id": "u204",
    "name": "Ramesh W.",
    "score": 54.15,
    "guildId": "g5"
  },
  {
    "id": "u205",
    "name": "Sneha P.",
    "score": 32.31,
    "guildId": "g1"
  },
  {
    "id": "u206",
    "name": "Akash Z.",
    "score": 99.3,
    "guildId": "g6"
  },
  {
    "id": "u207",
    "name": "Arjun W.",
    "score": 135.19,
    "guildId": "g2"
  },
  {
    "id": "u208",
    "name": "Pooja V.",
    "score": 17.89,
    "guildId": "g5"
  },
  {
    "id": "u209",
    "name": "Aditya D.",
    "score": 38.86,
    "guildId": "g7"
  },
  {
    "id": "u210",
    "name": "Arjun M.",
    "score": 70.23,
    "guildId": "g1"
  },
  {
    "id": "u211",
    "name": "Amit V.",
    "score": 18.87,
    "guildId": "g10"
  },
  {
    "id": "u212",
    "name": "Divya V.",
    "score": 113.92,
    "guildId": "g8"
  },
  {
    "id": "u213",
    "name": "Anjali A.",
    "score": 145.21,
    "guildId": "g6"
  },
  {
    "id": "u214",
    "name": "Priya T.",
    "score": 105.75,
    "guildId": "g1"
  },
  {
    "id": "u215",
    "name": "Ananya P.",
    "score": 76.98,
    "guildId": "g9"
  },
  {
    "id": "u216",
    "name": "Luka M.",
    "score": 81.29,
    "guildId": "g7"
  },
  {
    "id": "u217",
    "name": "Sneha Z.",
    "score": 98.68,
    "guildId": "g5"
  },
  {
    "id": "u218",
    "name": "Aditya Z.",
    "score": 111.92,
    "guildId": "g3"
  },
  {
    "id": "u219",
    "name": "Anjali P.",
    "score": 68.9,
    "guildId": "g9"
  },
  {
    "id": "u220",
    "name": "Ananya V.",
    "score": 30.17,
    "guildId": "g10"
  },
  {
    "id": "u221",
    "name": "Akash P.",
    "score": 80.62,
    "guildId": "g9"
  },
  {
    "id": "u222",
    "name": "Pooja T.",
    "score": 86.81,
    "guildId": "g1"
  },
  {
    "id": "u223",
    "name": "Akash W.",
    "score": 16.11,
    "guildId": "g4"
  },
  {
    "id": "u224",
    "name": "Megha R.",
    "score": 108.9,
    "guildId": "g6"
  },
  {
    "id": "u225",
    "name": "Pooja Y.",
    "score": 129.25,
    "guildId": "g1"
  },
  {
    "id": "u226",
    "name": "Ramesh B.",
    "score": 15.83,
    "guildId": "g5"
  },
  {
    "id": "u227",
    "name": "Karan C.",
    "score": 94.06,
    "guildId": "g3"
  },
  {
    "id": "u228",
    "name": "Divya Y.",
    "score": 136.41,
    "guildId": "g1"
  },
  {
    "id": "u229",
    "name": "Ananya M.",
    "score": 67.58,
    "guildId": "g3"
  },
  {
    "id": "u230",
    "name": "Swati V.",
    "score": 65.2,
    "guildId": "g5"
  },
  {
    "id": "u231",
    "name": "Akash S.",
    "score": 25.43,
    "guildId": "g6"
  },
  {
    "id": "u232",
    "name": "Ramesh B.",
    "score": 91.33,
    "guildId": "g4"
  },
  {
    "id": "u233",
    "name": "Suresh C.",
    "score": 83.35,
    "guildId": "g7"
  },
  {
    "id": "u234",
    "name": "Sneha D.",
    "score": 37.39,
    "guildId": "g10"
  },
  {
    "id": "u235",
    "name": "Sneha D.",
    "score": 135.98,
    "guildId": "g3"
  },
  {
    "id": "u236",
    "name": "Neha P.",
    "score": 75.27,
    "guildId": "g1"
  },
  {
    "id": "u237",
    "name": "Amit Z.",
    "score": 119.22,
    "guildId": "g9"
  },
  {
    "id": "u238",
    "name": "Noah S.",
    "score": 96.89,
    "guildId": "g7"
  },
  {
    "id": "u239",
    "name": "Hiro B.",
    "score": 86.33,
    "guildId": "g10"
  },
  {
    "id": "u240",
    "name": "Olivia D.",
    "score": 128.2,
    "guildId": "g9"
  },
  {
    "id": "u241",
    "name": "Fatima S.",
    "score": 118.51,
    "guildId": "g7"
  },
  {
    "id": "u242",
    "name": "Vikram Y.",
    "score": 86.26,
    "guildId": "g4"
  },
  {
    "id": "u243",
    "name": "Rohit S.",
    "score": 13.94,
    "guildId": "g6"
  },
  {
    "id": "u244",
    "name": "Ali C.",
    "score": 32.77,
    "guildId": "g3"
  },
  {
    "id": "u245",
    "name": "Anjali M.",
    "score": 50.85,
    "guildId": "g3"
  },
  {
    "id": "u246",
    "name": "Yuki A.",
    "score": 31.1,
    "guildId": "g2"
  },
  {
    "id": "u247",
    "name": "Swati M.",
    "score": 81.58,
    "guildId": "g6"
  },
  {
    "id": "u248",
    "name": "Wei Y.",
    "score": 70.57,
    "guildId": "g1"
  },
  {
    "id": "u249",
    "name": "Neha T.",
    "score": 131.82,
    "guildId": "g5"
  },
  {
    "id": "u250",
    "name": "Suresh B.",
    "score": 35.25,
    "guildId": "g8"
  },
  {
    "id": "u251",
    "name": "Mateo A.",
    "score": 23.84,
    "guildId": "g7"
  },
  {
    "id": "u252",
    "name": "Ali P.",
    "score": 92.08,
    "guildId": "g6"
  },
  {
    "id": "u253",
    "name": "Chen K.",
    "score": 33.92,
    "guildId": "g6"
  },
  {
    "id": "u254",
    "name": "Megha M.",
    "score": 25.24,
    "guildId": "g8"
  },
  {
    "id": "u255",
    "name": "Kavya B.",
    "score": 93.18,
    "guildId": "g9"
  },
  {
    "id": "u256",
    "name": "Akash R.",
    "score": 131.33,
    "guildId": "g10"
  },
  {
    "id": "u257",
    "name": "Isabella K.",
    "score": 141.98,
    "guildId": "g10"
  },
  {
    "id": "u258",
    "name": "Aditya B.",
    "score": 14.14,
    "guildId": "g6"
  },
  {
    "id": "u259",
    "name": "Ravi P.",
    "score": 105.37,
    "guildId": "g10"
  },
  {
    "id": "u260",
    "name": "Manish Y.",
    "score": 36.43,
    "guildId": "g7"
  },
  {
    "id": "u261",
    "name": "Ananya C.",
    "score": 125.57,
    "guildId": "g2"
  },
  {
    "id": "u262",
    "name": "Ravi C.",
    "score": 124.12,
    "guildId": "g10"
  },
  {
    "id": "u263",
    "name": "Priya V.",
    "score": 55.84,
    "guildId": "g10"
  },
  {
    "id": "u264",
    "name": "Manish Z.",
    "score": 15.35,
    "guildId": "g2"
  },
  {
    "id": "u265",
    "name": "Liam D.",
    "score": 34.36,
    "guildId": "g10"
  },
  {
    "id": "u266",
    "name": "Vikram W.",
    "score": 133.36,
    "guildId": "g7"
  },
  {
    "id": "u267",
    "name": "Swati W.",
    "score": 36.25,
    "guildId": "g6"
  },
  {
    "id": "u268",
    "name": "John R.",
    "score": 137.33,
    "guildId": "g5"
  },
  {
    "id": "u269",
    "name": "Fatima M.",
    "score": 23.09,
    "guildId": "g9"
  },
  {
    "id": "u270",
    "name": "Ramesh B.",
    "score": 31.28,
    "guildId": "g8"
  },
  {
    "id": "u271",
    "name": "Anjali M.",
    "score": 123.44,
    "guildId": "g1"
  },
  {
    "id": "u272",
    "name": "Ishita R.",
    "score": 63.75,
    "guildId": "g1"
  },
  {
    "id": "u273",
    "name": "Luka V.",
    "score": 102.76,
    "guildId": "g5"
  },
  {
    "id": "u274",
    "name": "Arjun W.",
    "score": 148.74,
    "guildId": "g2"
  },
  {
    "id": "u275",
    "name": "Anjali R.",
    "score": 132.49,
    "guildId": "g6"
  },
  {
    "id": "u276",
    "name": "Megha V.",
    "score": 41.2,
    "guildId": "g4"
  },
  {
    "id": "u277",
    "name": "Pooja R.",
    "score": 40.01,
    "guildId": "g5"
  },
  {
    "id": "u278",
    "name": "Sophia S.",
    "score": 60.47,
    "guildId": "g2"
  },
  {
    "id": "u279",
    "name": "Suresh B.",
    "score": 77.42,
    "guildId": "g2"
  },
  {
    "id": "u280",
    "name": "Megha D.",
    "score": 87.47,
    "guildId": "g5"
  },
  {
    "id": "u281",
    "name": "Priya C.",
    "score": 11.16,
    "guildId": "g2"
  },
  {
    "id": "u282",
    "name": "Hiro Y.",
    "score": 112.09,
    "guildId": "g6"
  },
  {
    "id": "u283",
    "name": "Ramesh D.",
    "score": 52.84,
    "guildId": "g2"
  },
  {
    "id": "u284",
    "name": "Ishita V.",
    "score": 121.76,
    "guildId": "g10"
  },
  {
    "id": "u285",
    "name": "Swati B.",
    "score": 58.51,
    "guildId": "g2"
  },
  {
    "id": "u286",
    "name": "Ananya W.",
    "score": 61.84,
    "guildId": "g1"
  },
  {
    "id": "u287",
    "name": "Siddharth K.",
    "score": 15.04,
    "guildId": "g8"
  },
  {
    "id": "u288",
    "name": "Amit M.",
    "score": 65.37,
    "guildId": "g9"
  },
  {
    "id": "u289",
    "name": "Ishita D.",
    "score": 30.69,
    "guildId": "g3"
  },
  {
    "id": "u290",
    "name": "Siddharth B.",
    "score": 31.85,
    "guildId": "g4"
  },
  {
    "id": "u291",
    "name": "Akash T.",
    "score": 147.15,
    "guildId": "g6"
  },
  {
    "id": "u292",
    "name": "Siddharth Y.",
    "score": 75.34,
    "guildId": "g3"
  },
  {
    "id": "u293",
    "name": "Pooja P.",
    "score": 58.99,
    "guildId": "g5"
  },
  {
    "id": "u294",
    "name": "Swati K.",
    "score": 10.31,
    "guildId": "g5"
  },
  {
    "id": "u295",
    "name": "Rahul T.",
    "score": 139.69,
    "guildId": "g5"
  },
  {
    "id": "u296",
    "name": "Aditya C.",
    "score": 95.39,
    "guildId": "g4"
  },
  {
    "id": "u297",
    "name": "Suresh R.",
    "score": 116.95,
    "guildId": "g8"
  },
  {
    "id": "u298",
    "name": "Akash A.",
    "score": 98.58,
    "guildId": "g3"
  },
  {
    "id": "u299",
    "name": "Vikram W.",
    "score": 32.31,
    "guildId": "g9"
  },
  {
    "id": "u300",
    "name": "Arjun W.",
    "score": 55.17,
    "guildId": "g9"
  },
  {
    "id": "u301",
    "name": "Ramesh D.",
    "score": 116.61,
    "guildId": "g4"
  },
  {
    "id": "u302",
    "name": "Karan P.",
    "score": 48.16,
    "guildId": "g6"
  },
  {
    "id": "u303",
    "name": "Manish D.",
    "score": 82.12,
    "guildId": "g7"
  },
  {
    "id": "u304",
    "name": "John K.",
    "score": 143.6,
    "guildId": "g8"
  },
  {
    "id": "u305",
    "name": "Aditya M.",
    "score": 48.72,
    "guildId": "g9"
  },
  {
    "id": "u306",
    "name": "Karan D.",
    "score": 148.73,
    "guildId": "g7"
  },
  {
    "id": "u307",
    "name": "Ramesh Z.",
    "score": 112.3,
    "guildId": "g2"
  },
  {
    "id": "u308",
    "name": "Pooja K.",
    "score": 143.98,
    "guildId": "g7"
  },
  {
    "id": "u309",
    "name": "Ishita M.",
    "score": 82.84,
    "guildId": "g7"
  },
  {
    "id": "u310",
    "name": "Hiro D.",
    "score": 95.09,
    "guildId": "g9"
  },
  {
    "id": "u311",
    "name": "Rohit S.",
    "score": 133.77,
    "guildId": "g2"
  },
  {
    "id": "u312",
    "name": "Kavya S.",
    "score": 28.04,
    "guildId": "g10"
  },
  {
    "id": "u313",
    "name": "Sneha P.",
    "score": 140.56,
    "guildId": "g2"
  },
  {
    "id": "u314",
    "name": "Luka M.",
    "score": 43.53,
    "guildId": "g10"
  },
  {
    "id": "u315",
    "name": "Rohit T.",
    "score": 124.61,
    "guildId": "g6"
  },
  {
    "id": "u316",
    "name": "Divya R.",
    "score": 108.25,
    "guildId": "g6"
  },
  {
    "id": "u317",
    "name": "Neha B.",
    "score": 91.55,
    "guildId": "g7"
  },
  {
    "id": "u318",
    "name": "Yuki S.",
    "score": 38.45,
    "guildId": "g5"
  },
  {
    "id": "u319",
    "name": "Divya P.",
    "score": 116.68,
    "guildId": "g6"
  },
  {
    "id": "u320",
    "name": "Siddharth P.",
    "score": 54.87,
    "guildId": "g1"
  },
  {
    "id": "u321",
    "name": "Aditya R.",
    "score": 13.41,
    "guildId": "g1"
  },
  {
    "id": "u322",
    "name": "Aditya Y.",
    "score": 124.74,
    "guildId": "g1"
  },
  {
    "id": "u323",
    "name": "Vikram W.",
    "score": 28.92,
    "guildId": "g5"
  },
  {
    "id": "u324",
    "name": "Anjali Y.",
    "score": 100.72,
    "guildId": "g1"
  },
  {
    "id": "u325",
    "name": "Ananya A.",
    "score": 13.72,
    "guildId": "g7"
  },
  {
    "id": "u326",
    "name": "Ravi C.",
    "score": 109.57,
    "guildId": "g2"
  },
  {
    "id": "u327",
    "name": "Rahul K.",
    "score": 51.16,
    "guildId": "g7"
  },
  {
    "id": "u328",
    "name": "John K.",
    "score": 103.65,
    "guildId": "g9"
  },
  {
    "id": "u329",
    "name": "Karan W.",
    "score": 98.23,
    "guildId": "g10"
  },
  {
    "id": "u330",
    "name": "Akash W.",
    "score": 116.99,
    "guildId": "g3"
  },
  {
    "id": "u331",
    "name": "Megha C.",
    "score": 71.5,
    "guildId": "g6"
  },
  {
    "id": "u332",
    "name": "Ishita D.",
    "score": 34.32,
    "guildId": "g1"
  },
  {
    "id": "u333",
    "name": "Divya S.",
    "score": 49.61,
    "guildId": "g8"
  },
  {
    "id": "u334",
    "name": "Ramesh S.",
    "score": 145.98,
    "guildId": "g7"
  },
  {
    "id": "u335",
    "name": "Pooja Y.",
    "score": 18.01,
    "guildId": "g10"
  },
  {
    "id": "u336",
    "name": "Chen V.",
    "score": 132.1,
    "guildId": "g8"
  },
  {
    "id": "u337",
    "name": "Arjun K.",
    "score": 40.21,
    "guildId": "g10"
  },
  {
    "id": "u338",
    "name": "Akash S.",
    "score": 83.74,
    "guildId": "g3"
  },
  {
    "id": "u339",
    "name": "Ishita V.",
    "score": 128.88,
    "guildId": "g5"
  },
  {
    "id": "u340",
    "name": "Priya P.",
    "score": 44.39,
    "guildId": "g7"
  },
  {
    "id": "u341",
    "name": "Kavya Z.",
    "score": 98.69,
    "guildId": "g3"
  },
  {
    "id": "u342",
    "name": "Priya Z.",
    "score": 27.27,
    "guildId": "g3"
  },
  {
    "id": "u343",
    "name": "Rahul S.",
    "score": 69.62,
    "guildId": "g5"
  },
  {
    "id": "u344",
    "name": "Anjali Y.",
    "score": 19.05,
    "guildId": "g8"
  },
  {
    "id": "u345",
    "name": "Amit B.",
    "score": 55.6,
    "guildId": "g9"
  },
  {
    "id": "u346",
    "name": "Emma W.",
    "score": 78.48,
    "guildId": "g1"
  },
  {
    "id": "u347",
    "name": "Rahul K.",
    "score": 138.01,
    "guildId": "g1"
  },
  {
    "id": "u348",
    "name": "Ishita B.",
    "score": 53.03,
    "guildId": "g8"
  },
  {
    "id": "u349",
    "name": "Arjun P.",
    "score": 112.77,
    "guildId": "g7"
  },
  {
    "id": "u350",
    "name": "Karan P.",
    "score": 100.65,
    "guildId": "g10"
  },
  {
    "id": "u351",
    "name": "Mateo S.",
    "score": 77.25,
    "guildId": "g7"
  },
  {
    "id": "u352",
    "name": "Divya T.",
    "score": 61.12,
    "guildId": "g3"
  },
  {
    "id": "u353",
    "name": "Rohit Z.",
    "score": 24.25,
    "guildId": "g3"
  },
  {
    "id": "u354",
    "name": "Manish K.",
    "score": 29.48,
    "guildId": "g1"
  },
  {
    "id": "u355",
    "name": "Sneha B.",
    "score": 63.88,
    "guildId": "g9"
  },
  {
    "id": "u356",
    "name": "Megha A.",
    "score": 24.87,
    "guildId": "g9"
  },
  {
    "id": "u357",
    "name": "Ishita Z.",
    "score": 79.99,
    "guildId": "g6"
  },
  {
    "id": "u358",
    "name": "Suresh R.",
    "score": 15.75,
    "guildId": "g4"
  },
  {
    "id": "u359",
    "name": "Arjun K.",
    "score": 97.6,
    "guildId": "g3"
  },
  {
    "id": "u360",
    "name": "Ravi C.",
    "score": 91.48,
    "guildId": "g6"
  },
  {
    "id": "u361",
    "name": "Rohit T.",
    "score": 105.63,
    "guildId": "g4"
  },
  {
    "id": "u362",
    "name": "Wei R.",
    "score": 149.63,
    "guildId": "g7"
  },
  {
    "id": "u363",
    "name": "Neha A.",
    "score": 148.05,
    "guildId": "g5"
  },
  {
    "id": "u364",
    "name": "Noah R.",
    "score": 15.78,
    "guildId": "g2"
  },
  {
    "id": "u365",
    "name": "Yuki S.",
    "score": 51.85,
    "guildId": "g3"
  },
  {
    "id": "u366",
    "name": "Ramesh D.",
    "score": 59.7,
    "guildId": "g3"
  },
  {
    "id": "u367",
    "name": "Akash B.",
    "score": 96.59,
    "guildId": "g6"
  },
  {
    "id": "u368",
    "name": "Kavya Z.",
    "score": 148.51,
    "guildId": "g9"
  },
  {
    "id": "u369",
    "name": "Arjun T.",
    "score": 31.56,
    "guildId": "g2"
  },
  {
    "id": "u370",
    "name": "Priya B.",
    "score": 75.21,
    "guildId": "g1"
  },
  {
    "id": "u371",
    "name": "Priya M.",
    "score": 120.82,
    "guildId": "g4"
  },
  {
    "id": "u372",
    "name": "Divya S.",
    "score": 131.57,
    "guildId": "g4"
  },
  {
    "id": "u373",
    "name": "Suresh V.",
    "score": 52.91,
    "guildId": "g8"
  },
  {
    "id": "u374",
    "name": "Ananya A.",
    "score": 91.34,
    "guildId": "g1"
  },
  {
    "id": "u375",
    "name": "Aditya P.",
    "score": 146.69,
    "guildId": "g3"
  },
  {
    "id": "u376",
    "name": "Swati D.",
    "score": 141.05,
    "guildId": "g9"
  },
  {
    "id": "u377",
    "name": "Aditya M.",
    "score": 138.26,
    "guildId": "g7"
  },
  {
    "id": "u378",
    "name": "Priya A.",
    "score": 14.93,
    "guildId": "g1"
  },
  {
    "id": "u379",
    "name": "Aditya B.",
    "score": 123.08,
    "guildId": "g4"
  },
  {
    "id": "u380",
    "name": "Rahul T.",
    "score": 41.62,
    "guildId": "g6"
  },
  {
    "id": "u381",
    "name": "Neha S.",
    "score": 19.95,
    "guildId": "g10"
  },
  {
    "id": "u382",
    "name": "Hans P.",
    "score": 94.06,
    "guildId": "g4"
  },
  {
    "id": "u383",
    "name": "Rohit Z.",
    "score": 51.05,
    "guildId": "g5"
  },
  {
    "id": "u384",
    "name": "Emma W.",
    "score": 121.72,
    "guildId": "g7"
  },
  {
    "id": "u385",
    "name": "Anjali B.",
    "score": 117.94,
    "guildId": "g1"
  },
  {
    "id": "u386",
    "name": "Pooja M.",
    "score": 55.78,
    "guildId": "g1"
  },
  {
    "id": "u387",
    "name": "Ravi V.",
    "score": 100.39,
    "guildId": "g9"
  },
  {
    "id": "u388",
    "name": "Priya T.",
    "score": 139.24,
    "guildId": "g1"
  },
  {
    "id": "u389",
    "name": "Anjali C.",
    "score": 129.9,
    "guildId": "g9"
  },
  {
    "id": "u390",
    "name": "Aditya D.",
    "score": 60.36,
    "guildId": "g2"
  },
  {
    "id": "u391",
    "name": "Kavya C.",
    "score": 120.23,
    "guildId": "g8"
  },
  {
    "id": "u392",
    "name": "Divya P.",
    "score": 88.65,
    "guildId": "g5"
  },
  {
    "id": "u393",
    "name": "Kavya C.",
    "score": 13.14,
    "guildId": "g10"
  },
  {
    "id": "u394",
    "name": "Ananya P.",
    "score": 18.19,
    "guildId": "g7"
  },
  {
    "id": "u395",
    "name": "Greta W.",
    "score": 74.95,
    "guildId": "g6"
  },
  {
    "id": "u396",
    "name": "Suresh V.",
    "score": 51.59,
    "guildId": "g10"
  },
  {
    "id": "u397",
    "name": "Yuki P.",
    "score": 103.88,
    "guildId": "g2"
  },
  {
    "id": "u398",
    "name": "Swati T.",
    "score": 65.63,
    "guildId": "g2"
  },
  {
    "id": "u399",
    "name": "Neha D.",
    "score": 15.88,
    "guildId": "g7"
  },
  {
    "id": "u400",
    "name": "Swati Z.",
    "score": 112.67,
    "guildId": "g6"
  },
  {
    "id": "u401",
    "name": "Anjali D.",
    "score": 140.77,
    "guildId": "g5"
  },
  {
    "id": "u402",
    "name": "Manish T.",
    "score": 129.35,
    "guildId": "g9"
  },
  {
    "id": "u403",
    "name": "Karan A.",
    "score": 137.26,
    "guildId": "g9"
  },
  {
    "id": "u404",
    "name": "Ramesh W.",
    "score": 35.12,
    "guildId": "g5"
  },
  {
    "id": "u405",
    "name": "Siddharth Z.",
    "score": 24.08,
    "guildId": "g10"
  },
  {
    "id": "u406",
    "name": "Mateo V.",
    "score": 79.67,
    "guildId": "g5"
  },
  {
    "id": "u407",
    "name": "Isabella Z.",
    "score": 114.79,
    "guildId": "g7"
  },
  {
    "id": "u408",
    "name": "Ananya Y.",
    "score": 121.47,
    "guildId": "g5"
  },
  {
    "id": "u409",
    "name": "Divya B.",
    "score": 113.35,
    "guildId": "g9"
  },
  {
    "id": "u410",
    "name": "Ishita V.",
    "score": 54.09,
    "guildId": "g10"
  },
  {
    "id": "u411",
    "name": "Emma K.",
    "score": 136.18,
    "guildId": "g7"
  },
  {
    "id": "u412",
    "name": "Rahul B.",
    "score": 96.33,
    "guildId": "g1"
  },
  {
    "id": "u413",
    "name": "Yuki V.",
    "score": 68.93,
    "guildId": "g6"
  },
  {
    "id": "u414",
    "name": "Siddharth B.",
    "score": 111.95,
    "guildId": "g4"
  },
  {
    "id": "u415",
    "name": "Ravi C.",
    "score": 91.15,
    "guildId": "g1"
  },
  {
    "id": "u416",
    "name": "Olivia Z.",
    "score": 86.34,
    "guildId": "g8"
  },
  {
    "id": "u417",
    "name": "Rohit Y.",
    "score": 67.09,
    "guildId": "g8"
  },
  {
    "id": "u418",
    "name": "Karan D.",
    "score": 55.59,
    "guildId": "g5"
  },
  {
    "id": "u419",
    "name": "Chen Y.",
    "score": 20.67,
    "guildId": "g4"
  },
  {
    "id": "u420",
    "name": "Karan V.",
    "score": 92.16,
    "guildId": "g8"
  },
  {
    "id": "u421",
    "name": "Fatima C.",
    "score": 59.89,
    "guildId": "g9"
  },
  {
    "id": "u422",
    "name": "Manish V.",
    "score": 112.01,
    "guildId": "g9"
  },
  {
    "id": "u423",
    "name": "Rahul M.",
    "score": 100.73,
    "guildId": "g3"
  },
  {
    "id": "u424",
    "name": "Mia S.",
    "score": 145.78,
    "guildId": "g2"
  },
  {
    "id": "u425",
    "name": "Mateo A.",
    "score": 62.56,
    "guildId": "g1"
  },
  {
    "id": "u426",
    "name": "Ravi A.",
    "score": 73.33,
    "guildId": "g3"
  },
  {
    "id": "u427",
    "name": "Sneha R.",
    "score": 85.91,
    "guildId": "g4"
  },
  {
    "id": "u428",
    "name": "Sneha W.",
    "score": 129.97,
    "guildId": "g8"
  },
  {
    "id": "u429",
    "name": "Sneha B.",
    "score": 78.95,
    "guildId": "g10"
  },
  {
    "id": "u430",
    "name": "Ali A.",
    "score": 129.84,
    "guildId": "g8"
  },
  {
    "id": "u431",
    "name": "Karan T.",
    "score": 88.31,
    "guildId": "g2"
  },
  {
    "id": "u432",
    "name": "Swati C.",
    "score": 54.44,
    "guildId": "g3"
  },
  {
    "id": "u433",
    "name": "Aditya M.",
    "score": 141.38,
    "guildId": "g10"
  },
  {
    "id": "u434",
    "name": "Akash K.",
    "score": 148.94,
    "guildId": "g6"
  },
  {
    "id": "u435",
    "name": "Ravi B.",
    "score": 14.41,
    "guildId": "g7"
  },
  {
    "id": "u436",
    "name": "Sneha V.",
    "score": 52.69,
    "guildId": "g4"
  },
  {
    "id": "u437",
    "name": "Akash P.",
    "score": 59.46,
    "guildId": "g8"
  },
  {
    "id": "u438",
    "name": "Pooja B.",
    "score": 68.5,
    "guildId": "g7"
  },
  {
    "id": "u439",
    "name": "Karan B.",
    "score": 24.39,
    "guildId": "g5"
  },
  {
    "id": "u440",
    "name": "Luka V.",
    "score": 101.1,
    "guildId": "g3"
  },
  {
    "id": "u441",
    "name": "Ali D.",
    "score": 60.09,
    "guildId": "g5"
  },
  {
    "id": "u442",
    "name": "Pooja P.",
    "score": 121.07,
    "guildId": "g9"
  },
  {
    "id": "u443",
    "name": "Ravi P.",
    "score": 122.17,
    "guildId": "g4"
  },
  {
    "id": "u444",
    "name": "Suresh V.",
    "score": 114.56,
    "guildId": "g10"
  },
  {
    "id": "u445",
    "name": "Vikram D.",
    "score": 31.66,
    "guildId": "g3"
  },
  {
    "id": "u446",
    "name": "Arjun P.",
    "score": 132.9,
    "guildId": "g5"
  },
  {
    "id": "u447",
    "name": "Ananya C.",
    "score": 142.95,
    "guildId": "g7"
  },
  {
    "id": "u448",
    "name": "Rohit M.",
    "score": 140.91,
    "guildId": "g6"
  },
  {
    "id": "u449",
    "name": "Rohit P.",
    "score": 48.46,
    "guildId": "g7"
  },
  {
    "id": "u450",
    "name": "Aditya K.",
    "score": 24.65,
    "guildId": "g8"
  },
  {
    "id": "u451",
    "name": "Isabella Y.",
    "score": 140.05,
    "guildId": "g8"
  },
  {
    "id": "u452",
    "name": "Megha B.",
    "score": 121.16,
    "guildId": "g2"
  },
  {
    "id": "u453",
    "name": "Divya P.",
    "score": 44.44,
    "guildId": "g2"
  },
  {
    "id": "u454",
    "name": "Manish V.",
    "score": 13.27,
    "guildId": "g9"
  },
  {
    "id": "u455",
    "name": "Rahul B.",
    "score": 56.36,
    "guildId": "g4"
  },
  {
    "id": "u456",
    "name": "Pooja Y.",
    "score": 104.45,
    "guildId": "g4"
  },
  {
    "id": "u457",
    "name": "Isabella W.",
    "score": 108.82,
    "guildId": "g6"
  },
  {
    "id": "u458",
    "name": "Akash T.",
    "score": 114.91,
    "guildId": "g5"
  },
  {
    "id": "u459",
    "name": "Megha V.",
    "score": 134.86,
    "guildId": "g9"
  },
  {
    "id": "u460",
    "name": "Rahul W.",
    "score": 119.46,
    "guildId": "g4"
  },
  {
    "id": "u461",
    "name": "Vikram A.",
    "score": 11.98,
    "guildId": "g8"
  },
  {
    "id": "u462",
    "name": "Anjali S.",
    "score": 65.65,
    "guildId": "g3"
  },
  {
    "id": "u463",
    "name": "Rohit T.",
    "score": 91.87,
    "guildId": "g5"
  },
  {
    "id": "u464",
    "name": "Isabella C.",
    "score": 24.28,
    "guildId": "g2"
  },
  {
    "id": "u465",
    "name": "Wei M.",
    "score": 26.33,
    "guildId": "g7"
  },
  {
    "id": "u466",
    "name": "Divya K.",
    "score": 126.42,
    "guildId": "g5"
  },
  {
    "id": "u467",
    "name": "Hiro A.",
    "score": 146.41,
    "guildId": "g3"
  },
  {
    "id": "u468",
    "name": "Hans D.",
    "score": 125.47,
    "guildId": "g4"
  },
  {
    "id": "u469",
    "name": "Rohit D.",
    "score": 35.76,
    "guildId": "g2"
  },
  {
    "id": "u470",
    "name": "Ishita V.",
    "score": 137.29,
    "guildId": "g9"
  },
  {
    "id": "u471",
    "name": "Olivia C.",
    "score": 134.25,
    "guildId": "g5"
  },
  {
    "id": "u472",
    "name": "Kavya Y.",
    "score": 28.09,
    "guildId": "g4"
  },
  {
    "id": "u473",
    "name": "Ishita W.",
    "score": 146.31,
    "guildId": "g9"
  },
  {
    "id": "u474",
    "name": "Siddharth Z.",
    "score": 30.05,
    "guildId": "g3"
  },
  {
    "id": "u475",
    "name": "Ananya B.",
    "score": 124.28,
    "guildId": "g8"
  },
  {
    "id": "u476",
    "name": "Amit Z.",
    "score": 46.14,
    "guildId": "g3"
  },
  {
    "id": "u477",
    "name": "Aditya B.",
    "score": 49.65,
    "guildId": "g5"
  },
  {
    "id": "u478",
    "name": "Vikram R.",
    "score": 137.28,
    "guildId": "g8"
  },
  {
    "id": "u479",
    "name": "Rohit V.",
    "score": 74.03,
    "guildId": "g9"
  },
  {
    "id": "u480",
    "name": "Megha P.",
    "score": 138.92,
    "guildId": "g6"
  },
  {
    "id": "u481",
    "name": "Ishita P.",
    "score": 107.31,
    "guildId": "g4"
  },
  {
    "id": "u482",
    "name": "Pooja V.",
    "score": 100.01,
    "guildId": "g4"
  },
  {
    "id": "u483",
    "name": "Akash A.",
    "score": 131.9,
    "guildId": "g7"
  },
  {
    "id": "u484",
    "name": "Divya W.",
    "score": 47.88,
    "guildId": "g7"
  },
  {
    "id": "u485",
    "name": "Aditya A.",
    "score": 44.59,
    "guildId": "g4"
  },
  {
    "id": "u486",
    "name": "Emma K.",
    "score": 146.8,
    "guildId": "g10"
  },
  {
    "id": "u487",
    "name": "Ishita S.",
    "score": 146.13,
    "guildId": "g10"
  },
  {
    "id": "u488",
    "name": "Sneha B.",
    "score": 136.02,
    "guildId": "g10"
  },
  {
    "id": "u489",
    "name": "Arjun R.",
    "score": 146.61,
    "guildId": "g9"
  },
  {
    "id": "u490",
    "name": "Akash R.",
    "score": 58.29,
    "guildId": "g10"
  },
  {
    "id": "u491",
    "name": "Divya P.",
    "score": 27.04,
    "guildId": "g5"
  },
  {
    "id": "u492",
    "name": "Amit D.",
    "score": 128.86,
    "guildId": "g6"
  },
  {
    "id": "u493",
    "name": "Mateo W.",
    "score": 50.24,
    "guildId": "g10"
  },
  {
    "id": "u494",
    "name": "Neha W.",
    "score": 149.84,
    "guildId": "g5"
  },
  {
    "id": "u495",
    "name": "Suresh Z.",
    "score": 94.93,
    "guildId": "g1"
  },
  {
    "id": "u496",
    "name": "Akash P.",
    "score": 142.85,
    "guildId": "g10"
  },
  {
    "id": "u497",
    "name": "Ravi R.",
    "score": 137.66,
    "guildId": "g2"
  },
  {
    "id": "u498",
    "name": "Swati P.",
    "score": 56.59,
    "guildId": "g5"
  },
  {
    "id": "u499",
    "name": "Noah T.",
    "score": 91.79,
    "guildId": "g1"
  },
  {
    "id": "u500",
    "name": "Swati P.",
    "score": 109.15,
    "guildId": "g1"
  },
  {
    "id": "u501",
    "name": "Ananya Z.",
    "score": 31,
    "guildId": "g3"
  },
  {
    "id": "u502",
    "name": "Ravi M.",
    "score": 30.64,
    "guildId": "g5"
  },
  {
    "id": "u503",
    "name": "Siddharth Z.",
    "score": 74.06,
    "guildId": "g9"
  },
  {
    "id": "u504",
    "name": "Suresh K.",
    "score": 20.36,
    "guildId": "g9"
  },
  {
    "id": "u505",
    "name": "Chen Y.",
    "score": 118.18,
    "guildId": "g6"
  },
  {
    "id": "u506",
    "name": "Anjali R.",
    "score": 82.42,
    "guildId": "g4"
  },
  {
    "id": "u507",
    "name": "Liam Y.",
    "score": 15,
    "guildId": "g6"
  },
  {
    "id": "u508",
    "name": "Yuki S.",
    "score": 131.83,
    "guildId": "g3"
  },
  {
    "id": "u509",
    "name": "John P.",
    "score": 110.95,
    "guildId": "g8"
  },
  {
    "id": "u510",
    "name": "Suresh T.",
    "score": 81.61,
    "guildId": "g7"
  },
  {
    "id": "u511",
    "name": "Mia K.",
    "score": 89.37,
    "guildId": "g10"
  },
  {
    "id": "u512",
    "name": "Luka V.",
    "score": 46.01,
    "guildId": "g8"
  },
  {
    "id": "u513",
    "name": "Priya P.",
    "score": 11.85,
    "guildId": "g9"
  },
  {
    "id": "u514",
    "name": "Megha A.",
    "score": 73.89,
    "guildId": "g5"
  },
  {
    "id": "u515",
    "name": "Suresh C.",
    "score": 43.59,
    "guildId": "g10"
  },
  {
    "id": "u516",
    "name": "Kavya M.",
    "score": 20.39,
    "guildId": "g6"
  },
  {
    "id": "u517",
    "name": "Ananya Y.",
    "score": 131.74,
    "guildId": "g8"
  },
  {
    "id": "u518",
    "name": "Ramesh C.",
    "score": 88.22,
    "guildId": "g5"
  },
  {
    "id": "u519",
    "name": "Chen Z.",
    "score": 106.61,
    "guildId": "g9"
  },
  {
    "id": "u520",
    "name": "Vikram C.",
    "score": 136.99,
    "guildId": "g2"
  },
  {
    "id": "u521",
    "name": "Amit A.",
    "score": 115.47,
    "guildId": "g9"
  },
  {
    "id": "u522",
    "name": "Emma S.",
    "score": 115.08,
    "guildId": "g3"
  },
  {
    "id": "u523",
    "name": "Yuki P.",
    "score": 116.1,
    "guildId": "g5"
  },
  {
    "id": "u524",
    "name": "Siddharth C.",
    "score": 119.44,
    "guildId": "g8"
  },
  {
    "id": "u525",
    "name": "Priya A.",
    "score": 44.69,
    "guildId": "g10"
  },
  {
    "id": "u526",
    "name": "Suresh P.",
    "score": 67.31,
    "guildId": "g4"
  },
  {
    "id": "u527",
    "name": "Ramesh T.",
    "score": 31.26,
    "guildId": "g4"
  },
  {
    "id": "u528",
    "name": "Akash C.",
    "score": 45.13,
    "guildId": "g5"
  },
  {
    "id": "u529",
    "name": "Ishita V.",
    "score": 109.73,
    "guildId": "g5"
  },
  {
    "id": "u530",
    "name": "Yuki P.",
    "score": 51.95,
    "guildId": "g6"
  },
  {
    "id": "u531",
    "name": "Siddharth T.",
    "score": 67.75,
    "guildId": "g2"
  },
  {
    "id": "u532",
    "name": "John T.",
    "score": 28.29,
    "guildId": "g7"
  },
  {
    "id": "u533",
    "name": "Pooja K.",
    "score": 67.42,
    "guildId": "g6"
  },
  {
    "id": "u534",
    "name": "Siddharth A.",
    "score": 148.95,
    "guildId": "g1"
  },
  {
    "id": "u535",
    "name": "Pooja T.",
    "score": 43.16,
    "guildId": "g10"
  },
  {
    "id": "u536",
    "name": "John V.",
    "score": 111.35,
    "guildId": "g1"
  },
  {
    "id": "u537",
    "name": "Vikram A.",
    "score": 109.34,
    "guildId": "g3"
  },
  {
    "id": "u538",
    "name": "Liam Y.",
    "score": 140.26,
    "guildId": "g7"
  },
  {
    "id": "u539",
    "name": "Karan S.",
    "score": 90.23,
    "guildId": "g1"
  },
  {
    "id": "u540",
    "name": "Sneha W.",
    "score": 112.8,
    "guildId": "g3"
  },
  {
    "id": "u541",
    "name": "Ananya V.",
    "score": 25.67,
    "guildId": "g5"
  },
  {
    "id": "u542",
    "name": "Sneha Z.",
    "score": 137.19,
    "guildId": "g7"
  },
  {
    "id": "u543",
    "name": "Neha R.",
    "score": 28.97,
    "guildId": "g2"
  },
  {
    "id": "u544",
    "name": "Aditya D.",
    "score": 118.54,
    "guildId": "g6"
  },
  {
    "id": "u545",
    "name": "Swati Z.",
    "score": 118.84,
    "guildId": "g8"
  },
  {
    "id": "u546",
    "name": "Kavya M.",
    "score": 83.39,
    "guildId": "g2"
  },
  {
    "id": "u547",
    "name": "Suresh T.",
    "score": 115.67,
    "guildId": "g3"
  },
  {
    "id": "u548",
    "name": "Arjun Y.",
    "score": 138.74,
    "guildId": "g2"
  },
  {
    "id": "u549",
    "name": "Vikram R.",
    "score": 49.11,
    "guildId": "g1"
  },
  {
    "id": "u550",
    "name": "Sneha P.",
    "score": 45.04,
    "guildId": "g10"
  },
  {
    "id": "u551",
    "name": "Aditya W.",
    "score": 24.1,
    "guildId": "g10"
  },
  {
    "id": "u552",
    "name": "Amit C.",
    "score": 82.18,
    "guildId": "g1"
  },
  {
    "id": "u553",
    "name": "Swati W.",
    "score": 45.05,
    "guildId": "g2"
  },
  {
    "id": "u554",
    "name": "Divya B.",
    "score": 57.93,
    "guildId": "g2"
  },
  {
    "id": "u555",
    "name": "Swati S.",
    "score": 23.69,
    "guildId": "g2"
  },
  {
    "id": "u556",
    "name": "John D.",
    "score": 23.56,
    "guildId": "g5"
  },
  {
    "id": "u557",
    "name": "Mia M.",
    "score": 29.88,
    "guildId": "g9"
  },
  {
    "id": "u558",
    "name": "Pooja M.",
    "score": 73.77,
    "guildId": "g9"
  },
  {
    "id": "u559",
    "name": "Luka W.",
    "score": 147.97,
    "guildId": "g4"
  },
  {
    "id": "u560",
    "name": "Ananya P.",
    "score": 141.3,
    "guildId": "g5"
  },
  {
    "id": "u561",
    "name": "Amit S.",
    "score": 64.61,
    "guildId": "g5"
  },
  {
    "id": "u562",
    "name": "Pooja A.",
    "score": 48.24,
    "guildId": "g3"
  },
  {
    "id": "u563",
    "name": "Isabella C.",
    "score": 13.61,
    "guildId": "g4"
  },
  {
    "id": "u564",
    "name": "Sneha M.",
    "score": 48.7,
    "guildId": "g2"
  },
  {
    "id": "u565",
    "name": "Amit C.",
    "score": 43.48,
    "guildId": "g7"
  },
  {
    "id": "u566",
    "name": "Sneha B.",
    "score": 100.09,
    "guildId": "g10"
  },
  {
    "id": "u567",
    "name": "Akash Z.",
    "score": 14.68,
    "guildId": "g10"
  },
  {
    "id": "u568",
    "name": "Ananya D.",
    "score": 68.69,
    "guildId": "g2"
  },
  {
    "id": "u569",
    "name": "Megha V.",
    "score": 115.67,
    "guildId": "g8"
  },
  {
    "id": "u570",
    "name": "Arjun P.",
    "score": 92.09,
    "guildId": "g4"
  },
  {
    "id": "u571",
    "name": "Yuki V.",
    "score": 22.09,
    "guildId": "g8"
  },
  {
    "id": "u572",
    "name": "Noah C.",
    "score": 71.59,
    "guildId": "g6"
  },
  {
    "id": "u573",
    "name": "Manish A.",
    "score": 21.6,
    "guildId": "g9"
  },
  {
    "id": "u574",
    "name": "Sneha T.",
    "score": 127.74,
    "guildId": "g6"
  },
  {
    "id": "u575",
    "name": "Rahul R.",
    "score": 67.64,
    "guildId": "g3"
  },
  {
    "id": "u576",
    "name": "Suresh W.",
    "score": 114.68,
    "guildId": "g6"
  },
  {
    "id": "u577",
    "name": "Ramesh T.",
    "score": 93.23,
    "guildId": "g7"
  },
  {
    "id": "u578",
    "name": "Pooja D.",
    "score": 95.3,
    "guildId": "g1"
  },
  {
    "id": "u579",
    "name": "Aditya S.",
    "score": 46.55,
    "guildId": "g8"
  },
  {
    "id": "u580",
    "name": "Anjali Z.",
    "score": 55.85,
    "guildId": "g6"
  },
  {
    "id": "u581",
    "name": "Ravi C.",
    "score": 44.26,
    "guildId": "g2"
  },
  {
    "id": "u582",
    "name": "Siddharth Z.",
    "score": 114.96,
    "guildId": "g2"
  },
  {
    "id": "u583",
    "name": "Neha S.",
    "score": 26.54,
    "guildId": "g9"
  },
  {
    "id": "u584",
    "name": "Akash P.",
    "score": 93.09,
    "guildId": "g2"
  },
  {
    "id": "u585",
    "name": "Mia B.",
    "score": 116.96,
    "guildId": "g2"
  },
  {
    "id": "u586",
    "name": "Megha R.",
    "score": 12.89,
    "guildId": "g1"
  },
  {
    "id": "u587",
    "name": "Vikram A.",
    "score": 107.44,
    "guildId": "g8"
  },
  {
    "id": "u588",
    "name": "Vikram T.",
    "score": 41.95,
    "guildId": "g9"
  },
  {
    "id": "u589",
    "name": "Divya M.",
    "score": 25.19,
    "guildId": "g1"
  },
  {
    "id": "u590",
    "name": "Suresh T.",
    "score": 87.29,
    "guildId": "g6"
  },
  {
    "id": "u591",
    "name": "Karan Y.",
    "score": 53.25,
    "guildId": "g1"
  },
  {
    "id": "u592",
    "name": "Wei M.",
    "score": 78.46,
    "guildId": "g3"
  },
  {
    "id": "u593",
    "name": "Vikram P.",
    "score": 132.79,
    "guildId": "g9"
  },
  {
    "id": "u594",
    "name": "Greta Y.",
    "score": 101.33,
    "guildId": "g10"
  },
  {
    "id": "u595",
    "name": "Ramesh Y.",
    "score": 20.48,
    "guildId": "g10"
  },
  {
    "id": "u596",
    "name": "Divya W.",
    "score": 29.07,
    "guildId": "g3"
  },
  {
    "id": "u597",
    "name": "Ramesh D.",
    "score": 106.81,
    "guildId": "g8"
  },
  {
    "id": "u598",
    "name": "Sneha V.",
    "score": 17.11,
    "guildId": "g10"
  },
  {
    "id": "u599",
    "name": "Akash C.",
    "score": 84.5,
    "guildId": "g5"
  },
  {
    "id": "u600",
    "name": "Emma C.",
    "score": 139.71,
    "guildId": "g4"
  },
  {
    "id": "u601",
    "name": "Kavya V.",
    "score": 78.72,
    "guildId": "g10"
  },
  {
    "id": "u602",
    "name": "Rohit D.",
    "score": 38.85,
    "guildId": "g2"
  },
  {
    "id": "u603",
    "name": "Luka M.",
    "score": 132.07,
    "guildId": "g1"
  },
  {
    "id": "u604",
    "name": "Rohit C.",
    "score": 120.44,
    "guildId": "g8"
  },
  {
    "id": "u605",
    "name": "Amit C.",
    "score": 71.71,
    "guildId": "g9"
  },
  {
    "id": "u606",
    "name": "Mia M.",
    "score": 137.48,
    "guildId": "g7"
  },
  {
    "id": "u607",
    "name": "Rohit W.",
    "score": 82.99,
    "guildId": "g10"
  },
  {
    "id": "u608",
    "name": "Ramesh B.",
    "score": 98.04,
    "guildId": "g4"
  },
  {
    "id": "u609",
    "name": "Divya R.",
    "score": 40.78,
    "guildId": "g1"
  },
  {
    "id": "u610",
    "name": "Swati C.",
    "score": 135.26,
    "guildId": "g4"
  },
  {
    "id": "u611",
    "name": "Aditya Y.",
    "score": 13.88,
    "guildId": "g5"
  },
  {
    "id": "u612",
    "name": "Karan B.",
    "score": 24.55,
    "guildId": "g5"
  },
  {
    "id": "u613",
    "name": "Divya V.",
    "score": 34.03,
    "guildId": "g9"
  },
  {
    "id": "u614",
    "name": "Megha C.",
    "score": 65.4,
    "guildId": "g2"
  },
  {
    "id": "u615",
    "name": "Mia D.",
    "score": 24.85,
    "guildId": "g2"
  },
  {
    "id": "u616",
    "name": "Isabella M.",
    "score": 43.24,
    "guildId": "g6"
  },
  {
    "id": "u617",
    "name": "Rahul W.",
    "score": 114.8,
    "guildId": "g7"
  },
  {
    "id": "u618",
    "name": "Ishita Y.",
    "score": 38.71,
    "guildId": "g10"
  },
  {
    "id": "u619",
    "name": "Ishita P.",
    "score": 49.66,
    "guildId": "g3"
  },
  {
    "id": "u620",
    "name": "Kavya M.",
    "score": 36.51,
    "guildId": "g1"
  },
  {
    "id": "u621",
    "name": "Yuki C.",
    "score": 124.09,
    "guildId": "g2"
  },
  {
    "id": "u622",
    "name": "Sneha Y.",
    "score": 122.45,
    "guildId": "g8"
  },
  {
    "id": "u623",
    "name": "Priya K.",
    "score": 118.12,
    "guildId": "g2"
  },
  {
    "id": "u624",
    "name": "Amit V.",
    "score": 119.71,
    "guildId": "g7"
  },
  {
    "id": "u625",
    "name": "Olivia V.",
    "score": 104.05,
    "guildId": "g7"
  },
  {
    "id": "u626",
    "name": "Chen T.",
    "score": 14.99,
    "guildId": "g8"
  },
  {
    "id": "u627",
    "name": "Amit Y.",
    "score": 40.82,
    "guildId": "g5"
  },
  {
    "id": "u628",
    "name": "Emma Z.",
    "score": 71.79,
    "guildId": "g4"
  },
  {
    "id": "u629",
    "name": "Siddharth K.",
    "score": 84.11,
    "guildId": "g10"
  },
  {
    "id": "u630",
    "name": "Ravi P.",
    "score": 23.96,
    "guildId": "g10"
  },
  {
    "id": "u631",
    "name": "Rohit T.",
    "score": 97.87,
    "guildId": "g1"
  },
  {
    "id": "u632",
    "name": "Akash V.",
    "score": 61.74,
    "guildId": "g5"
  },
  {
    "id": "u633",
    "name": "Ishita W.",
    "score": 103.9,
    "guildId": "g1"
  },
  {
    "id": "u634",
    "name": "Ananya C.",
    "score": 134.73,
    "guildId": "g10"
  },
  {
    "id": "u635",
    "name": "Kavya Z.",
    "score": 34.06,
    "guildId": "g7"
  },
  {
    "id": "u636",
    "name": "Megha Y.",
    "score": 77.98,
    "guildId": "g8"
  },
  {
    "id": "u637",
    "name": "Ravi K.",
    "score": 79.81,
    "guildId": "g10"
  },
  {
    "id": "u638",
    "name": "Ishita W.",
    "score": 69.98,
    "guildId": "g2"
  },
  {
    "id": "u639",
    "name": "Isabella Z.",
    "score": 118.9,
    "guildId": "g9"
  },
  {
    "id": "u640",
    "name": "Ananya V.",
    "score": 92.63,
    "guildId": "g8"
  },
  {
    "id": "u641",
    "name": "Fatima Y.",
    "score": 28.41,
    "guildId": "g3"
  },
  {
    "id": "u642",
    "name": "Arjun K.",
    "score": 35.99,
    "guildId": "g10"
  },
  {
    "id": "u643",
    "name": "Karan P.",
    "score": 14.64,
    "guildId": "g9"
  },
  {
    "id": "u644",
    "name": "Megha A.",
    "score": 11.55,
    "guildId": "g5"
  },
  {
    "id": "u645",
    "name": "Chen P.",
    "score": 138.16,
    "guildId": "g10"
  },
  {
    "id": "u646",
    "name": "Vikram K.",
    "score": 54,
    "guildId": "g4"
  },
  {
    "id": "u647",
    "name": "Ramesh P.",
    "score": 31.76,
    "guildId": "g5"
  },
  {
    "id": "u648",
    "name": "Olivia A.",
    "score": 46,
    "guildId": "g4"
  },
  {
    "id": "u649",
    "name": "Rohit M.",
    "score": 27.93,
    "guildId": "g6"
  },
  {
    "id": "u650",
    "name": "Liam D.",
    "score": 119.26,
    "guildId": "g10"
  },
  {
    "id": "u651",
    "name": "Ramesh T.",
    "score": 116.88,
    "guildId": "g10"
  },
  {
    "id": "u652",
    "name": "Divya P.",
    "score": 33.7,
    "guildId": "g1"
  },
  {
    "id": "u653",
    "name": "Mateo W.",
    "score": 19.72,
    "guildId": "g8"
  },
  {
    "id": "u654",
    "name": "Ananya P.",
    "score": 100.42,
    "guildId": "g10"
  },
  {
    "id": "u655",
    "name": "Akash K.",
    "score": 13.97,
    "guildId": "g2"
  },
  {
    "id": "u656",
    "name": "Swati W.",
    "score": 122.8,
    "guildId": "g8"
  },
  {
    "id": "u657",
    "name": "Kavya Y.",
    "score": 122.89,
    "guildId": "g3"
  },
  {
    "id": "u658",
    "name": "Luka W.",
    "score": 126.78,
    "guildId": "g5"
  },
  {
    "id": "u659",
    "name": "Ravi P.",
    "score": 112.23,
    "guildId": "g1"
  },
  {
    "id": "u660",
    "name": "Priya B.",
    "score": 114.09,
    "guildId": "g6"
  },
  {
    "id": "u661",
    "name": "Hiro S.",
    "score": 65.85,
    "guildId": "g9"
  },
  {
    "id": "u662",
    "name": "Ravi M.",
    "score": 125.14,
    "guildId": "g5"
  },
  {
    "id": "u663",
    "name": "Siddharth M.",
    "score": 86.06,
    "guildId": "g9"
  },
  {
    "id": "u664",
    "name": "Siddharth M.",
    "score": 99.76,
    "guildId": "g7"
  },
  {
    "id": "u665",
    "name": "Siddharth M.",
    "score": 26.52,
    "guildId": "g9"
  },
  {
    "id": "u666",
    "name": "Akash M.",
    "score": 31.92,
    "guildId": "g5"
  },
  {
    "id": "u667",
    "name": "Vikram S.",
    "score": 15.68,
    "guildId": "g10"
  },
  {
    "id": "u668",
    "name": "Siddharth R.",
    "score": 96.59,
    "guildId": "g2"
  },
  {
    "id": "u669",
    "name": "Noah B.",
    "score": 144.98,
    "guildId": "g4"
  },
  {
    "id": "u670",
    "name": "Anjali W.",
    "score": 36.61,
    "guildId": "g9"
  },
  {
    "id": "u671",
    "name": "Kavya P.",
    "score": 124.03,
    "guildId": "g2"
  },
  {
    "id": "u672",
    "name": "Arjun S.",
    "score": 127.82,
    "guildId": "g10"
  },
  {
    "id": "u673",
    "name": "Ravi R.",
    "score": 87.31,
    "guildId": "g9"
  },
  {
    "id": "u674",
    "name": "Siddharth Y.",
    "score": 141.02,
    "guildId": "g3"
  },
  {
    "id": "u675",
    "name": "Pooja K.",
    "score": 147.59,
    "guildId": "g3"
  },
  {
    "id": "u676",
    "name": "Ravi D.",
    "score": 76.66,
    "guildId": "g3"
  },
  {
    "id": "u677",
    "name": "Vikram B.",
    "score": 42.72,
    "guildId": "g2"
  },
  {
    "id": "u678",
    "name": "Rahul B.",
    "score": 96.85,
    "guildId": "g7"
  },
  {
    "id": "u679",
    "name": "Arjun R.",
    "score": 97.85,
    "guildId": "g2"
  },
  {
    "id": "u680",
    "name": "Rahul M.",
    "score": 104.29,
    "guildId": "g10"
  },
  {
    "id": "u681",
    "name": "Mia Z.",
    "score": 42.31,
    "guildId": "g4"
  },
  {
    "id": "u682",
    "name": "Rahul P.",
    "score": 42.43,
    "guildId": "g3"
  },
  {
    "id": "u683",
    "name": "Rahul A.",
    "score": 120.63,
    "guildId": "g2"
  },
  {
    "id": "u684",
    "name": "Vikram Z.",
    "score": 25.54,
    "guildId": "g8"
  },
  {
    "id": "u685",
    "name": "John B.",
    "score": 70.97,
    "guildId": "g8"
  },
  {
    "id": "u686",
    "name": "Liam W.",
    "score": 116.53,
    "guildId": "g3"
  },
  {
    "id": "u687",
    "name": "Ananya R.",
    "score": 14.44,
    "guildId": "g3"
  },
  {
    "id": "u688",
    "name": "Aditya V.",
    "score": 55.14,
    "guildId": "g10"
  },
  {
    "id": "u689",
    "name": "Kavya P.",
    "score": 12.94,
    "guildId": "g6"
  },
  {
    "id": "u690",
    "name": "Rahul P.",
    "score": 44.83,
    "guildId": "g6"
  },
  {
    "id": "u691",
    "name": "Manish B.",
    "score": 91.56,
    "guildId": "g8"
  },
  {
    "id": "u692",
    "name": "Noah V.",
    "score": 92.85,
    "guildId": "g2"
  },
  {
    "id": "u693",
    "name": "Fatima A.",
    "score": 73.91,
    "guildId": "g10"
  },
  {
    "id": "u694",
    "name": "Karan P.",
    "score": 52.09,
    "guildId": "g1"
  },
  {
    "id": "u695",
    "name": "Olivia C.",
    "score": 29.39,
    "guildId": "g10"
  },
  {
    "id": "u696",
    "name": "Megha S.",
    "score": 25.07,
    "guildId": "g2"
  },
  {
    "id": "u697",
    "name": "Amit C.",
    "score": 49.67,
    "guildId": "g8"
  },
  {
    "id": "u698",
    "name": "Suresh W.",
    "score": 16.28,
    "guildId": "g9"
  },
  {
    "id": "u699",
    "name": "Swati V.",
    "score": 124.67,
    "guildId": "g2"
  },
  {
    "id": "u700",
    "name": "Kavya M.",
    "score": 98.69,
    "guildId": "g9"
  },
  {
    "id": "u701",
    "name": "Kavya P.",
    "score": 120.23,
    "guildId": "g2"
  },
  {
    "id": "u702",
    "name": "Vikram T.",
    "score": 107.17,
    "guildId": "g4"
  },
  {
    "id": "u703",
    "name": "Rahul D.",
    "score": 138.93,
    "guildId": "g10"
  },
  {
    "id": "u704",
    "name": "Divya M.",
    "score": 12.06,
    "guildId": "g6"
  },
  {
    "id": "u705",
    "name": "Rahul P.",
    "score": 120.71,
    "guildId": "g8"
  },
  {
    "id": "u706",
    "name": "Rahul B.",
    "score": 75.37,
    "guildId": "g3"
  },
  {
    "id": "u707",
    "name": "Divya R.",
    "score": 10.97,
    "guildId": "g6"
  },
  {
    "id": "u708",
    "name": "Rahul Y.",
    "score": 17.11,
    "guildId": "g4"
  },
  {
    "id": "u709",
    "name": "Amit C.",
    "score": 94,
    "guildId": "g5"
  },
  {
    "id": "u710",
    "name": "Vikram B.",
    "score": 15.64,
    "guildId": "g3"
  },
  {
    "id": "u711",
    "name": "Ananya C.",
    "score": 85.13,
    "guildId": "g10"
  },
  {
    "id": "u712",
    "name": "Karan W.",
    "score": 136.64,
    "guildId": "g3"
  },
  {
    "id": "u713",
    "name": "Divya R.",
    "score": 112.31,
    "guildId": "g6"
  },
  {
    "id": "u714",
    "name": "Pooja R.",
    "score": 100.14,
    "guildId": "g9"
  },
  {
    "id": "u715",
    "name": "Manish T.",
    "score": 87.89,
    "guildId": "g9"
  },
  {
    "id": "u716",
    "name": "Anjali D.",
    "score": 121.69,
    "guildId": "g6"
  },
  {
    "id": "u717",
    "name": "Noah K.",
    "score": 100.03,
    "guildId": "g2"
  },
  {
    "id": "u718",
    "name": "Kavya A.",
    "score": 43.92,
    "guildId": "g6"
  },
  {
    "id": "u719",
    "name": "Yuki S.",
    "score": 28.61,
    "guildId": "g9"
  },
  {
    "id": "u720",
    "name": "Megha R.",
    "score": 11.13,
    "guildId": "g5"
  },
  {
    "id": "u721",
    "name": "Ravi T.",
    "score": 32.99,
    "guildId": "g8"
  },
  {
    "id": "u722",
    "name": "Neha T.",
    "score": 34.12,
    "guildId": "g1"
  },
  {
    "id": "u723",
    "name": "Ravi D.",
    "score": 100.55,
    "guildId": "g7"
  },
  {
    "id": "u724",
    "name": "Chen W.",
    "score": 46.5,
    "guildId": "g4"
  },
  {
    "id": "u725",
    "name": "Karan K.",
    "score": 54.77,
    "guildId": "g9"
  },
  {
    "id": "u726",
    "name": "Anjali P.",
    "score": 77.8,
    "guildId": "g6"
  },
  {
    "id": "u727",
    "name": "Priya B.",
    "score": 81.09,
    "guildId": "g7"
  },
  {
    "id": "u728",
    "name": "Siddharth S.",
    "score": 75.38,
    "guildId": "g10"
  },
  {
    "id": "u729",
    "name": "Megha D.",
    "score": 14.28,
    "guildId": "g6"
  },
  {
    "id": "u730",
    "name": "Isabella A.",
    "score": 72.33,
    "guildId": "g7"
  },
  {
    "id": "u731",
    "name": "Sneha Z.",
    "score": 19.45,
    "guildId": "g2"
  },
  {
    "id": "u732",
    "name": "Swati D.",
    "score": 46.17,
    "guildId": "g4"
  },
  {
    "id": "u733",
    "name": "Ramesh B.",
    "score": 47.36,
    "guildId": "g6"
  },
  {
    "id": "u734",
    "name": "Sneha R.",
    "score": 90.76,
    "guildId": "g8"
  },
  {
    "id": "u735",
    "name": "Ramesh B.",
    "score": 107.8,
    "guildId": "g8"
  },
  {
    "id": "u736",
    "name": "Sneha R.",
    "score": 113.48,
    "guildId": "g1"
  },
  {
    "id": "u737",
    "name": "Divya B.",
    "score": 47.24,
    "guildId": "g9"
  },
  {
    "id": "u738",
    "name": "Siddharth K.",
    "score": 77.37,
    "guildId": "g1"
  },
  {
    "id": "u739",
    "name": "Ali W.",
    "score": 131.21,
    "guildId": "g2"
  },
  {
    "id": "u740",
    "name": "Akash Y.",
    "score": 68.52,
    "guildId": "g9"
  },
  {
    "id": "u741",
    "name": "Pooja K.",
    "score": 61.3,
    "guildId": "g4"
  },
  {
    "id": "u742",
    "name": "Aditya M.",
    "score": 149.68,
    "guildId": "g8"
  },
  {
    "id": "u743",
    "name": "Rahul D.",
    "score": 12.06,
    "guildId": "g7"
  },
  {
    "id": "u744",
    "name": "Neha Z.",
    "score": 56.98,
    "guildId": "g9"
  },
  {
    "id": "u745",
    "name": "Ananya S.",
    "score": 148.29,
    "guildId": "g3"
  },
  {
    "id": "u746",
    "name": "Divya V.",
    "score": 22.2,
    "guildId": "g1"
  },
  {
    "id": "u747",
    "name": "Divya R.",
    "score": 148.77,
    "guildId": "g5"
  },
  {
    "id": "u748",
    "name": "Ramesh S.",
    "score": 14.26,
    "guildId": "g2"
  },
  {
    "id": "u749",
    "name": "Rohit D.",
    "score": 25.4,
    "guildId": "g4"
  },
  {
    "id": "u750",
    "name": "Arjun Z.",
    "score": 30.77,
    "guildId": "g9"
  },
  {
    "id": "u751",
    "name": "Divya W.",
    "score": 62.9,
    "guildId": "g5"
  },
  {
    "id": "u752",
    "name": "Neha B.",
    "score": 97.49,
    "guildId": "g5"
  },
  {
    "id": "u753",
    "name": "Rohit Y.",
    "score": 76.45,
    "guildId": "g7"
  },
  {
    "id": "u754",
    "name": "Arjun P.",
    "score": 114.15,
    "guildId": "g6"
  },
  {
    "id": "u755",
    "name": "Priya Y.",
    "score": 25.85,
    "guildId": "g1"
  },
  {
    "id": "u756",
    "name": "Sneha T.",
    "score": 79.53,
    "guildId": "g1"
  },
  {
    "id": "u757",
    "name": "Siddharth P.",
    "score": 73.32,
    "guildId": "g3"
  },
  {
    "id": "u758",
    "name": "Hiro R.",
    "score": 107.51,
    "guildId": "g6"
  },
  {
    "id": "u759",
    "name": "Ishita B.",
    "score": 72.09,
    "guildId": "g3"
  },
  {
    "id": "u760",
    "name": "Amit B.",
    "score": 54.82,
    "guildId": "g2"
  },
  {
    "id": "u761",
    "name": "Anjali R.",
    "score": 64.59,
    "guildId": "g4"
  },
  {
    "id": "u762",
    "name": "Rohit Y.",
    "score": 136.62,
    "guildId": "g7"
  },
  {
    "id": "u763",
    "name": "Divya A.",
    "score": 129.85,
    "guildId": "g8"
  },
  {
    "id": "u764",
    "name": "Megha M.",
    "score": 34.07,
    "guildId": "g4"
  },
  {
    "id": "u765",
    "name": "Aditya Z.",
    "score": 107.44,
    "guildId": "g2"
  },
  {
    "id": "u766",
    "name": "Ishita V.",
    "score": 20.67,
    "guildId": "g7"
  },
  {
    "id": "u767",
    "name": "Neha W.",
    "score": 88.85,
    "guildId": "g5"
  },
  {
    "id": "u768",
    "name": "John W.",
    "score": 107.84,
    "guildId": "g2"
  },
  {
    "id": "u769",
    "name": "Amit M.",
    "score": 120.79,
    "guildId": "g5"
  },
  {
    "id": "u770",
    "name": "Siddharth R.",
    "score": 63.16,
    "guildId": "g1"
  },
  {
    "id": "u771",
    "name": "Karan D.",
    "score": 27.17,
    "guildId": "g4"
  },
  {
    "id": "u772",
    "name": "Chen R.",
    "score": 21.88,
    "guildId": "g6"
  },
  {
    "id": "u773",
    "name": "Vikram W.",
    "score": 136.47,
    "guildId": "g2"
  },
  {
    "id": "u774",
    "name": "Arjun S.",
    "score": 62.98,
    "guildId": "g1"
  },
  {
    "id": "u775",
    "name": "Manish W.",
    "score": 36.23,
    "guildId": "g4"
  },
  {
    "id": "u776",
    "name": "Rahul Y.",
    "score": 119.29,
    "guildId": "g5"
  },
  {
    "id": "u777",
    "name": "Arjun B.",
    "score": 29,
    "guildId": "g5"
  },
  {
    "id": "u778",
    "name": "Manish M.",
    "score": 60.61,
    "guildId": "g1"
  },
  {
    "id": "u779",
    "name": "Pooja D.",
    "score": 112.36,
    "guildId": "g8"
  },
  {
    "id": "u780",
    "name": "Ravi D.",
    "score": 18.76,
    "guildId": "g8"
  },
  {
    "id": "u781",
    "name": "Manish K.",
    "score": 76.4,
    "guildId": "g1"
  },
  {
    "id": "u782",
    "name": "Priya D.",
    "score": 72.07,
    "guildId": "g6"
  },
  {
    "id": "u783",
    "name": "Aditya S.",
    "score": 17.52,
    "guildId": "g4"
  },
  {
    "id": "u784",
    "name": "Sneha Z.",
    "score": 19.05,
    "guildId": "g10"
  },
  {
    "id": "u785",
    "name": "Anjali S.",
    "score": 12.46,
    "guildId": "g10"
  },
  {
    "id": "u786",
    "name": "Priya S.",
    "score": 90.84,
    "guildId": "g9"
  },
  {
    "id": "u787",
    "name": "Arjun D.",
    "score": 63.54,
    "guildId": "g5"
  },
  {
    "id": "u788",
    "name": "Ananya Z.",
    "score": 134.32,
    "guildId": "g3"
  },
  {
    "id": "u789",
    "name": "Akash R.",
    "score": 11.13,
    "guildId": "g5"
  },
  {
    "id": "u790",
    "name": "Aditya C.",
    "score": 36.78,
    "guildId": "g6"
  },
  {
    "id": "u791",
    "name": "Wei Y.",
    "score": 144.99,
    "guildId": "g1"
  },
  {
    "id": "u792",
    "name": "Priya M.",
    "score": 95.82,
    "guildId": "g8"
  },
  {
    "id": "u793",
    "name": "Chen M.",
    "score": 137.1,
    "guildId": "g6"
  },
  {
    "id": "u794",
    "name": "Sneha S.",
    "score": 50.32,
    "guildId": "g2"
  },
  {
    "id": "u795",
    "name": "Megha Z.",
    "score": 34.21,
    "guildId": "g9"
  },
  {
    "id": "u796",
    "name": "Yuki Y.",
    "score": 135.08,
    "guildId": "g10"
  },
  {
    "id": "u797",
    "name": "Hiro D.",
    "score": 111.74,
    "guildId": "g2"
  },
  {
    "id": "u798",
    "name": "Ravi K.",
    "score": 22.93,
    "guildId": "g9"
  },
  {
    "id": "u799",
    "name": "Ramesh T.",
    "score": 132.62,
    "guildId": "g6"
  },
  {
    "id": "u800",
    "name": "Amit K.",
    "score": 142.22,
    "guildId": "g8"
  },
  {
    "id": "u801",
    "name": "Amit B.",
    "score": 51.96,
    "guildId": "g5"
  },
  {
    "id": "u802",
    "name": "Rahul T.",
    "score": 126.2,
    "guildId": "g6"
  },
  {
    "id": "u803",
    "name": "Luka B.",
    "score": 50.45,
    "guildId": "g1"
  },
  {
    "id": "u804",
    "name": "Yuki P.",
    "score": 80.95,
    "guildId": "g5"
  },
  {
    "id": "u805",
    "name": "Karan B.",
    "score": 18.1,
    "guildId": "g7"
  },
  {
    "id": "u806",
    "name": "Ramesh A.",
    "score": 142.68,
    "guildId": "g8"
  },
  {
    "id": "u807",
    "name": "Divya P.",
    "score": 36.9,
    "guildId": "g8"
  },
  {
    "id": "u808",
    "name": "Manish A.",
    "score": 131.25,
    "guildId": "g8"
  },
  {
    "id": "u809",
    "name": "Swati A.",
    "score": 73.96,
    "guildId": "g6"
  },
  {
    "id": "u810",
    "name": "Rohit W.",
    "score": 77.02,
    "guildId": "g4"
  },
  {
    "id": "u811",
    "name": "Hiro M.",
    "score": 70.16,
    "guildId": "g6"
  },
  {
    "id": "u812",
    "name": "Olivia D.",
    "score": 119.97,
    "guildId": "g7"
  },
  {
    "id": "u813",
    "name": "Neha T.",
    "score": 118.31,
    "guildId": "g2"
  },
  {
    "id": "u814",
    "name": "Rahul W.",
    "score": 69.57,
    "guildId": "g2"
  },
  {
    "id": "u815",
    "name": "Pooja K.",
    "score": 148.97,
    "guildId": "g4"
  },
  {
    "id": "u816",
    "name": "John Z.",
    "score": 117.83,
    "guildId": "g6"
  },
  {
    "id": "u817",
    "name": "Ramesh W.",
    "score": 63.85,
    "guildId": "g9"
  },
  {
    "id": "u818",
    "name": "Siddharth K.",
    "score": 69.55,
    "guildId": "g5"
  },
  {
    "id": "u819",
    "name": "Suresh B.",
    "score": 30.69,
    "guildId": "g8"
  },
  {
    "id": "u820",
    "name": "Wei C.",
    "score": 69.91,
    "guildId": "g3"
  },
  {
    "id": "u821",
    "name": "Pooja P.",
    "score": 107.98,
    "guildId": "g4"
  },
  {
    "id": "u822",
    "name": "Arjun B.",
    "score": 148.45,
    "guildId": "g5"
  },
  {
    "id": "u823",
    "name": "Emma K.",
    "score": 101.16,
    "guildId": "g1"
  },
  {
    "id": "u824",
    "name": "Anjali Z.",
    "score": 39.08,
    "guildId": "g6"
  },
  {
    "id": "u825",
    "name": "Ravi K.",
    "score": 57.92,
    "guildId": "g7"
  },
  {
    "id": "u826",
    "name": "Akash C.",
    "score": 39.41,
    "guildId": "g8"
  },
  {
    "id": "u827",
    "name": "Ali T.",
    "score": 125.58,
    "guildId": "g10"
  },
  {
    "id": "u828",
    "name": "Pooja C.",
    "score": 126.1,
    "guildId": "g1"
  },
  {
    "id": "u829",
    "name": "Amit K.",
    "score": 29.05,
    "guildId": "g10"
  },
  {
    "id": "u830",
    "name": "Megha S.",
    "score": 20.28,
    "guildId": "g1"
  },
  {
    "id": "u831",
    "name": "Swati C.",
    "score": 20.45,
    "guildId": "g4"
  },
  {
    "id": "u832",
    "name": "Sneha P.",
    "score": 12.96,
    "guildId": "g6"
  },
  {
    "id": "u833",
    "name": "Neha C.",
    "score": 114.16,
    "guildId": "g6"
  },
  {
    "id": "u834",
    "name": "Priya V.",
    "score": 73.15,
    "guildId": "g7"
  },
  {
    "id": "u835",
    "name": "Kavya T.",
    "score": 15.11,
    "guildId": "g7"
  },
  {
    "id": "u836",
    "name": "Akash V.",
    "score": 92.46,
    "guildId": "g5"
  },
  {
    "id": "u837",
    "name": "Rahul A.",
    "score": 116.86,
    "guildId": "g5"
  },
  {
    "id": "u838",
    "name": "Ravi W.",
    "score": 55.88,
    "guildId": "g2"
  },
  {
    "id": "u839",
    "name": "Rohit K.",
    "score": 120.25,
    "guildId": "g9"
  },
  {
    "id": "u840",
    "name": "Akash M.",
    "score": 143.05,
    "guildId": "g1"
  },
  {
    "id": "u841",
    "name": "Yuki Y.",
    "score": 114.94,
    "guildId": "g7"
  },
  {
    "id": "u842",
    "name": "Megha M.",
    "score": 125.29,
    "guildId": "g1"
  },
  {
    "id": "u843",
    "name": "Sneha Y.",
    "score": 128.77,
    "guildId": "g6"
  },
  {
    "id": "u844",
    "name": "Swati M.",
    "score": 89.49,
    "guildId": "g3"
  },
  {
    "id": "u845",
    "name": "Hiro V.",
    "score": 43.74,
    "guildId": "g5"
  },
  {
    "id": "u846",
    "name": "Priya W.",
    "score": 101.53,
    "guildId": "g4"
  },
  {
    "id": "u847",
    "name": "Karan Y.",
    "score": 126.62,
    "guildId": "g3"
  },
  {
    "id": "u848",
    "name": "Akash Z.",
    "score": 15.18,
    "guildId": "g9"
  },
  {
    "id": "u849",
    "name": "Anjali A.",
    "score": 135.21,
    "guildId": "g8"
  },
  {
    "id": "u850",
    "name": "Liam V.",
    "score": 81.45,
    "guildId": "g7"
  },
  {
    "id": "u851",
    "name": "Ishita Z.",
    "score": 105.58,
    "guildId": "g3"
  },
  {
    "id": "u852",
    "name": "Anjali S.",
    "score": 58.19,
    "guildId": "g7"
  },
  {
    "id": "u853",
    "name": "Rahul Z.",
    "score": 13.18,
    "guildId": "g7"
  },
  {
    "id": "u854",
    "name": "Priya C.",
    "score": 111.45,
    "guildId": "g6"
  },
  {
    "id": "u855",
    "name": "Manish Y.",
    "score": 126.78,
    "guildId": "g10"
  },
  {
    "id": "u856",
    "name": "Divya A.",
    "score": 73.45,
    "guildId": "g4"
  },
  {
    "id": "u857",
    "name": "Sophia B.",
    "score": 66.07,
    "guildId": "g4"
  },
  {
    "id": "u858",
    "name": "Siddharth V.",
    "score": 79.51,
    "guildId": "g7"
  },
  {
    "id": "u859",
    "name": "Ishita B.",
    "score": 53.71,
    "guildId": "g6"
  },
  {
    "id": "u860",
    "name": "Ramesh Y.",
    "score": 56.3,
    "guildId": "g1"
  },
  {
    "id": "u861",
    "name": "Anjali R.",
    "score": 20.22,
    "guildId": "g5"
  },
  {
    "id": "u862",
    "name": "Yuki V.",
    "score": 121.53,
    "guildId": "g4"
  },
  {
    "id": "u863",
    "name": "Ramesh M.",
    "score": 134.1,
    "guildId": "g1"
  },
  {
    "id": "u864",
    "name": "Sneha R.",
    "score": 130.88,
    "guildId": "g7"
  },
  {
    "id": "u865",
    "name": "Amit S.",
    "score": 16.49,
    "guildId": "g1"
  },
  {
    "id": "u866",
    "name": "Pooja D.",
    "score": 91.78,
    "guildId": "g9"
  },
  {
    "id": "u867",
    "name": "Akash A.",
    "score": 139.73,
    "guildId": "g4"
  },
  {
    "id": "u868",
    "name": "Amit W.",
    "score": 88.53,
    "guildId": "g6"
  },
  {
    "id": "u869",
    "name": "Chen S.",
    "score": 47.81,
    "guildId": "g1"
  },
  {
    "id": "u870",
    "name": "Aditya A.",
    "score": 77.02,
    "guildId": "g3"
  },
  {
    "id": "u871",
    "name": "Noah T.",
    "score": 17.98,
    "guildId": "g7"
  },
  {
    "id": "u872",
    "name": "Kavya S.",
    "score": 52.65,
    "guildId": "g2"
  },
  {
    "id": "u873",
    "name": "Ravi M.",
    "score": 107.36,
    "guildId": "g3"
  },
  {
    "id": "u874",
    "name": "Ravi P.",
    "score": 47.28,
    "guildId": "g9"
  },
  {
    "id": "u875",
    "name": "Ishita T.",
    "score": 121.85,
    "guildId": "g8"
  },
  {
    "id": "u876",
    "name": "Anjali R.",
    "score": 41.94,
    "guildId": "g1"
  },
  {
    "id": "u877",
    "name": "Priya V.",
    "score": 73.06,
    "guildId": "g10"
  },
  {
    "id": "u878",
    "name": "Vikram S.",
    "score": 105.78,
    "guildId": "g1"
  },
  {
    "id": "u879",
    "name": "Ishita M.",
    "score": 39.67,
    "guildId": "g1"
  },
  {
    "id": "u880",
    "name": "Rohit P.",
    "score": 145.06,
    "guildId": "g10"
  },
  {
    "id": "u881",
    "name": "Akash A.",
    "score": 41.46,
    "guildId": "g2"
  },
  {
    "id": "u882",
    "name": "Olivia S.",
    "score": 89.41,
    "guildId": "g3"
  },
  {
    "id": "u883",
    "name": "Ishita A.",
    "score": 35.96,
    "guildId": "g9"
  },
  {
    "id": "u884",
    "name": "Mia K.",
    "score": 130.14,
    "guildId": "g3"
  },
  {
    "id": "u885",
    "name": "Neha R.",
    "score": 115.54,
    "guildId": "g6"
  },
  {
    "id": "u886",
    "name": "Sophia S.",
    "score": 33.49,
    "guildId": "g1"
  },
  {
    "id": "u887",
    "name": "Rohit R.",
    "score": 29.98,
    "guildId": "g5"
  },
  {
    "id": "u888",
    "name": "Amit S.",
    "score": 71.49,
    "guildId": "g4"
  },
  {
    "id": "u889",
    "name": "Megha S.",
    "score": 143.71,
    "guildId": "g3"
  },
  {
    "id": "u890",
    "name": "Greta A.",
    "score": 146.42,
    "guildId": "g9"
  },
  {
    "id": "u891",
    "name": "Priya A.",
    "score": 72.09,
    "guildId": "g10"
  },
  {
    "id": "u892",
    "name": "Wei V.",
    "score": 48.53,
    "guildId": "g6"
  },
  {
    "id": "u893",
    "name": "Ananya Y.",
    "score": 147.24,
    "guildId": "g3"
  },
  {
    "id": "u894",
    "name": "Fatima B.",
    "score": 47.92,
    "guildId": "g7"
  },
  {
    "id": "u895",
    "name": "Chen K.",
    "score": 17.5,
    "guildId": "g3"
  },
  {
    "id": "u896",
    "name": "Sneha S.",
    "score": 96.27,
    "guildId": "g4"
  },
  {
    "id": "u897",
    "name": "Divya B.",
    "score": 133.27,
    "guildId": "g3"
  },
  {
    "id": "u898",
    "name": "Ishita Y.",
    "score": 124.38,
    "guildId": "g9"
  },
  {
    "id": "u899",
    "name": "Divya B.",
    "score": 59.44,
    "guildId": "g9"
  },
  {
    "id": "u900",
    "name": "Rahul T.",
    "score": 144.96,
    "guildId": "g2"
  },
  {
    "id": "u901",
    "name": "Ramesh K.",
    "score": 34.68,
    "guildId": "g2"
  },
  {
    "id": "u902",
    "name": "Isabella R.",
    "score": 137.9,
    "guildId": "g3"
  },
  {
    "id": "u903",
    "name": "Megha Z.",
    "score": 71.38,
    "guildId": "g10"
  },
  {
    "id": "u904",
    "name": "Akash C.",
    "score": 109.53,
    "guildId": "g2"
  },
  {
    "id": "u905",
    "name": "Rohit Z.",
    "score": 146.07,
    "guildId": "g5"
  },
  {
    "id": "u906",
    "name": "Karan Y.",
    "score": 65.77,
    "guildId": "g1"
  },
  {
    "id": "u907",
    "name": "Hiro R.",
    "score": 92.07,
    "guildId": "g5"
  },
  {
    "id": "u908",
    "name": "Siddharth D.",
    "score": 37.17,
    "guildId": "g5"
  },
  {
    "id": "u909",
    "name": "Amit Z.",
    "score": 148.44,
    "guildId": "g3"
  },
  {
    "id": "u910",
    "name": "Vikram W.",
    "score": 92.93,
    "guildId": "g3"
  },
  {
    "id": "u911",
    "name": "Divya M.",
    "score": 57.72,
    "guildId": "g1"
  },
  {
    "id": "u912",
    "name": "Neha S.",
    "score": 148.48,
    "guildId": "g1"
  },
  {
    "id": "u913",
    "name": "Ali P.",
    "score": 135.76,
    "guildId": "g1"
  },
  {
    "id": "u914",
    "name": "Wei M.",
    "score": 144.45,
    "guildId": "g3"
  },
  {
    "id": "u915",
    "name": "Amit B.",
    "score": 141.55,
    "guildId": "g1"
  },
  {
    "id": "u916",
    "name": "Amit D.",
    "score": 141.87,
    "guildId": "g3"
  },
  {
    "id": "u917",
    "name": "Kavya M.",
    "score": 140.94,
    "guildId": "g6"
  },
  {
    "id": "u918",
    "name": "Karan Y.",
    "score": 54.35,
    "guildId": "g5"
  },
  {
    "id": "u919",
    "name": "Anjali P.",
    "score": 112.49,
    "guildId": "g8"
  },
  {
    "id": "u920",
    "name": "Olivia M.",
    "score": 15.28,
    "guildId": "g4"
  },
  {
    "id": "u921",
    "name": "Swati T.",
    "score": 16.43,
    "guildId": "g8"
  },
  {
    "id": "u922",
    "name": "Vikram Z.",
    "score": 139.32,
    "guildId": "g10"
  },
  {
    "id": "u923",
    "name": "Karan P.",
    "score": 94.89,
    "guildId": "g6"
  },
  {
    "id": "u924",
    "name": "Akash W.",
    "score": 73.97,
    "guildId": "g5"
  },
  {
    "id": "u925",
    "name": "Aditya W.",
    "score": 130.05,
    "guildId": "g8"
  },
  {
    "id": "u926",
    "name": "Aditya S.",
    "score": 125.96,
    "guildId": "g10"
  },
  {
    "id": "u927",
    "name": "Kavya M.",
    "score": 149.81,
    "guildId": "g6"
  },
  {
    "id": "u928",
    "name": "Pooja K.",
    "score": 59.27,
    "guildId": "g1"
  },
  {
    "id": "u929",
    "name": "Sneha R.",
    "score": 119.38,
    "guildId": "g5"
  },
  {
    "id": "u930",
    "name": "Ravi W.",
    "score": 100.28,
    "guildId": "g9"
  },
  {
    "id": "u931",
    "name": "Isabella R.",
    "score": 121.06,
    "guildId": "g1"
  },
  {
    "id": "u932",
    "name": "Emma A.",
    "score": 16.95,
    "guildId": "g9"
  },
  {
    "id": "u933",
    "name": "Karan A.",
    "score": 87.08,
    "guildId": "g4"
  },
  {
    "id": "u934",
    "name": "Divya R.",
    "score": 102.32,
    "guildId": "g6"
  },
  {
    "id": "u935",
    "name": "Ananya V.",
    "score": 141.34,
    "guildId": "g3"
  },
  {
    "id": "u936",
    "name": "Siddharth P.",
    "score": 61.78,
    "guildId": "g2"
  },
  {
    "id": "u937",
    "name": "Chen B.",
    "score": 29.92,
    "guildId": "g9"
  },
  {
    "id": "u938",
    "name": "Pooja A.",
    "score": 138.43,
    "guildId": "g2"
  },
  {
    "id": "u939",
    "name": "Rohit Y.",
    "score": 71.71,
    "guildId": "g6"
  },
  {
    "id": "u940",
    "name": "Emma T.",
    "score": 135.46,
    "guildId": "g10"
  },
  {
    "id": "u941",
    "name": "Ravi P.",
    "score": 124.75,
    "guildId": "g1"
  },
  {
    "id": "u942",
    "name": "Divya T.",
    "score": 65.62,
    "guildId": "g10"
  },
  {
    "id": "u943",
    "name": "Pooja M.",
    "score": 59.48,
    "guildId": "g10"
  },
  {
    "id": "u944",
    "name": "Rohit M.",
    "score": 55.69,
    "guildId": "g8"
  },
  {
    "id": "u945",
    "name": "Suresh K.",
    "score": 114.99,
    "guildId": "g9"
  },
  {
    "id": "u946",
    "name": "Sneha R.",
    "score": 47.02,
    "guildId": "g3"
  },
  {
    "id": "u947",
    "name": "Manish W.",
    "score": 19.14,
    "guildId": "g9"
  },
  {
    "id": "u948",
    "name": "Ravi D.",
    "score": 57.32,
    "guildId": "g6"
  },
  {
    "id": "u949",
    "name": "Manish W.",
    "score": 91.72,
    "guildId": "g7"
  },
  {
    "id": "u950",
    "name": "Manish D.",
    "score": 148.37,
    "guildId": "g6"
  },
  {
    "id": "u951",
    "name": "Ramesh V.",
    "score": 23.5,
    "guildId": "g2"
  },
  {
    "id": "u952",
    "name": "Rahul C.",
    "score": 87.57,
    "guildId": "g6"
  },
  {
    "id": "u953",
    "name": "Karan W.",
    "score": 128.15,
    "guildId": "g8"
  },
  {
    "id": "u954",
    "name": "Neha Y.",
    "score": 141.23,
    "guildId": "g10"
  },
  {
    "id": "u955",
    "name": "Karan Y.",
    "score": 132.3,
    "guildId": "g4"
  },
  {
    "id": "u956",
    "name": "Ananya K.",
    "score": 95.63,
    "guildId": "g9"
  },
  {
    "id": "u957",
    "name": "Sneha K.",
    "score": 30.87,
    "guildId": "g6"
  },
  {
    "id": "u958",
    "name": "John Y.",
    "score": 14.89,
    "guildId": "g1"
  },
  {
    "id": "u959",
    "name": "Pooja S.",
    "score": 57.46,
    "guildId": "g10"
  },
  {
    "id": "u960",
    "name": "John A.",
    "score": 146.72,
    "guildId": "g8"
  },
  {
    "id": "u961",
    "name": "Ananya Y.",
    "score": 131.26,
    "guildId": "g2"
  },
  {
    "id": "u962",
    "name": "Ananya A.",
    "score": 72.34,
    "guildId": "g7"
  },
  {
    "id": "u963",
    "name": "Ravi A.",
    "score": 37.32,
    "guildId": "g7"
  },
  {
    "id": "u964",
    "name": "Manish D.",
    "score": 71.69,
    "guildId": "g4"
  },
  {
    "id": "u965",
    "name": "Ananya S.",
    "score": 19.34,
    "guildId": "g1"
  },
  {
    "id": "u966",
    "name": "Ramesh A.",
    "score": 21.07,
    "guildId": "g8"
  },
  {
    "id": "u967",
    "name": "Siddharth C.",
    "score": 49.02,
    "guildId": "g3"
  },
  {
    "id": "u968",
    "name": "Karan M.",
    "score": 130.08,
    "guildId": "g3"
  },
  {
    "id": "u969",
    "name": "Vikram V.",
    "score": 41.55,
    "guildId": "g1"
  },
  {
    "id": "u970",
    "name": "Karan B.",
    "score": 70.86,
    "guildId": "g2"
  },
  {
    "id": "u971",
    "name": "Amit W.",
    "score": 135.83,
    "guildId": "g5"
  },
  {
    "id": "u972",
    "name": "Mia C.",
    "score": 139.38,
    "guildId": "g5"
  },
  {
    "id": "u973",
    "name": "Kavya R.",
    "score": 104.89,
    "guildId": "g8"
  },
  {
    "id": "u974",
    "name": "Vikram V.",
    "score": 86.45,
    "guildId": "g3"
  },
  {
    "id": "u975",
    "name": "Megha Z.",
    "score": 12.35,
    "guildId": "g6"
  },
  {
    "id": "u976",
    "name": "Kavya T.",
    "score": 28.7,
    "guildId": "g8"
  },
  {
    "id": "u977",
    "name": "Siddharth C.",
    "score": 103.83,
    "guildId": "g9"
  },
  {
    "id": "u978",
    "name": "Ravi A.",
    "score": 39.51,
    "guildId": "g4"
  },
  {
    "id": "u979",
    "name": "Neha D.",
    "score": 72.41,
    "guildId": "g5"
  },
  {
    "id": "u980",
    "name": "Akash S.",
    "score": 108.91,
    "guildId": "g10"
  },
  {
    "id": "u981",
    "name": "John Z.",
    "score": 141.74,
    "guildId": "g8"
  },
  {
    "id": "u982",
    "name": "Siddharth C.",
    "score": 103.78,
    "guildId": "g3"
  },
  {
    "id": "u983",
    "name": "Siddharth M.",
    "score": 30.49,
    "guildId": "g2"
  },
  {
    "id": "u984",
    "name": "Divya K.",
    "score": 103.54,
    "guildId": "g9"
  },
  {
    "id": "u985",
    "name": "Emma C.",
    "score": 145.17,
    "guildId": "g10"
  },
  {
    "id": "u986",
    "name": "Suresh K.",
    "score": 142.89,
    "guildId": "g8"
  },
  {
    "id": "u987",
    "name": "Kavya W.",
    "score": 36.63,
    "guildId": "g6"
  },
  {
    "id": "u988",
    "name": "Rohit D.",
    "score": 139.41,
    "guildId": "g8"
  },
  {
    "id": "u989",
    "name": "Chen A.",
    "score": 48.72,
    "guildId": "g4"
  },
  {
    "id": "u990",
    "name": "Ravi V.",
    "score": 114.98,
    "guildId": "g9"
  },
  {
    "id": "u991",
    "name": "Kavya M.",
    "score": 60.42,
    "guildId": "g8"
  },
  {
    "id": "u992",
    "name": "Pooja T.",
    "score": 114.16,
    "guildId": "g7"
  },
  {
    "id": "u993",
    "name": "Vikram D.",
    "score": 76.79,
    "guildId": "g4"
  },
  {
    "id": "u994",
    "name": "Akash Z.",
    "score": 79.21,
    "guildId": "g4"
  },
  {
    "id": "u995",
    "name": "Pooja P.",
    "score": 137.69,
    "guildId": "g1"
  },
  {
    "id": "u996",
    "name": "Liam D.",
    "score": 72.59,
    "guildId": "g3"
  },
  {
    "id": "u997",
    "name": "Sneha P.",
    "score": 139.18,
    "guildId": "g6"
  },
  {
    "id": "u998",
    "name": "John V.",
    "score": 66.54,
    "guildId": "g6"
  },
  {
    "id": "u999",
    "name": "Swati P.",
    "score": 56.46,
    "guildId": "g1"
  },
  {
    "id": "u1000",
    "name": "Neha T.",
    "score": 50.38,
    "guildId": "g7"
  },
  {
    "id": "u1001",
    "name": "Luka B.",
    "score": 124.76,
    "guildId": "g5"
  },
  {
    "id": "u1002",
    "name": "Hiro M.",
    "score": 77.04,
    "guildId": "g6"
  },
  {
    "id": "u1003",
    "name": "Ananya D.",
    "score": 81.34,
    "guildId": "g10"
  },
  {
    "id": "u1004",
    "name": "Arjun V.",
    "score": 148.74,
    "guildId": "g10"
  },
  {
    "id": "u1005",
    "name": "Ramesh D.",
    "score": 38.79,
    "guildId": "g5"
  },
  {
    "id": "u1006",
    "name": "Neha Z.",
    "score": 80.8,
    "guildId": "g8"
  },
  {
    "id": "u1007",
    "name": "Siddharth D.",
    "score": 57.76,
    "guildId": "g9"
  },
  {
    "id": "u1008",
    "name": "Mia P.",
    "score": 126.61,
    "guildId": "g1"
  },
  {
    "id": "u1009",
    "name": "Ramesh M.",
    "score": 94.44,
    "guildId": "g5"
  },
  {
    "id": "u1010",
    "name": "Manish K.",
    "score": 24.2,
    "guildId": "g5"
  },
  {
    "id": "u1011",
    "name": "Neha K.",
    "score": 40.46,
    "guildId": "g2"
  },
  {
    "id": "u1012",
    "name": "Karan A.",
    "score": 82.26,
    "guildId": "g7"
  },
  {
    "id": "u1013",
    "name": "Rohit D.",
    "score": 45.45,
    "guildId": "g8"
  },
  {
    "id": "u1014",
    "name": "Aditya K.",
    "score": 120.99,
    "guildId": "g2"
  },
  {
    "id": "u1015",
    "name": "Karan P.",
    "score": 26.23,
    "guildId": "g2"
  },
  {
    "id": "u1016",
    "name": "Ravi R.",
    "score": 68.77,
    "guildId": "g8"
  },
  {
    "id": "u1017",
    "name": "Hiro Y.",
    "score": 120.3,
    "guildId": "g5"
  },
  {
    "id": "u1018",
    "name": "Rohit Y.",
    "score": 79.75,
    "guildId": "g3"
  },
  {
    "id": "u1019",
    "name": "Siddharth V.",
    "score": 133.7,
    "guildId": "g5"
  },
  {
    "id": "u1020",
    "name": "Hans T.",
    "score": 35.36,
    "guildId": "g8"
  },
  {
    "id": "u1021",
    "name": "Manish M.",
    "score": 108.44,
    "guildId": "g10"
  },
  {
    "id": "u1022",
    "name": "Neha A.",
    "score": 26.04,
    "guildId": "g5"
  },
  {
    "id": "u1023",
    "name": "Rahul C.",
    "score": 116.27,
    "guildId": "g9"
  },
  {
    "id": "u1024",
    "name": "Akash Z.",
    "score": 109.56,
    "guildId": "g10"
  },
  {
    "id": "u1025",
    "name": "Ramesh V.",
    "score": 58.43,
    "guildId": "g9"
  },
  {
    "id": "u1026",
    "name": "Vikram C.",
    "score": 30.51,
    "guildId": "g6"
  },
  {
    "id": "u1027",
    "name": "Vikram B.",
    "score": 119.36,
    "guildId": "g2"
  },
  {
    "id": "u1028",
    "name": "Rohit S.",
    "score": 61.45,
    "guildId": "g7"
  },
  {
    "id": "u1029",
    "name": "Anjali R.",
    "score": 26.68,
    "guildId": "g10"
  },
  {
    "id": "u1030",
    "name": "Amit V.",
    "score": 98.27,
    "guildId": "g10"
  },
  {
    "id": "u1031",
    "name": "Siddharth P.",
    "score": 142.58,
    "guildId": "g8"
  },
  {
    "id": "u1032",
    "name": "Sophia M.",
    "score": 55.47,
    "guildId": "g5"
  },
  {
    "id": "u1033",
    "name": "Fatima R.",
    "score": 116.74,
    "guildId": "g6"
  },
  {
    "id": "u1034",
    "name": "Arjun C.",
    "score": 132.18,
    "guildId": "g4"
  },
  {
    "id": "u1035",
    "name": "Luka M.",
    "score": 70.51,
    "guildId": "g6"
  },
  {
    "id": "u1036",
    "name": "Neha R.",
    "score": 21.42,
    "guildId": "g1"
  },
  {
    "id": "u1037",
    "name": "Karan M.",
    "score": 119.18,
    "guildId": "g1"
  },
  {
    "id": "u1038",
    "name": "Ali Z.",
    "score": 36.53,
    "guildId": "g6"
  },
  {
    "id": "u1039",
    "name": "Sneha Z.",
    "score": 30.47,
    "guildId": "g6"
  },
  {
    "id": "u1040",
    "name": "Karan M.",
    "score": 57.91,
    "guildId": "g7"
  },
  {
    "id": "u1041",
    "name": "Arjun Z.",
    "score": 132.87,
    "guildId": "g7"
  },
  {
    "id": "u1042",
    "name": "Neha A.",
    "score": 43.63,
    "guildId": "g6"
  },
  {
    "id": "u1043",
    "name": "Divya D.",
    "score": 16,
    "guildId": "g2"
  },
  {
    "id": "u1044",
    "name": "Neha D.",
    "score": 106.25,
    "guildId": "g8"
  },
  {
    "id": "u1045",
    "name": "Hiro Z.",
    "score": 113.94,
    "guildId": "g1"
  },
  {
    "id": "u1046",
    "name": "Pooja R.",
    "score": 89.8,
    "guildId": "g8"
  },
  {
    "id": "u1047",
    "name": "Ananya Z.",
    "score": 35.68,
    "guildId": "g1"
  },
  {
    "id": "u1048",
    "name": "Neha W.",
    "score": 74.61,
    "guildId": "g10"
  },
  {
    "id": "u1049",
    "name": "Kavya S.",
    "score": 57.89,
    "guildId": "g9"
  },
  {
    "id": "u1050",
    "name": "Vikram R.",
    "score": 123.16,
    "guildId": "g6"
  },
  {
    "id": "u1051",
    "name": "Siddharth K.",
    "score": 58.33,
    "guildId": "g5"
  },
  {
    "id": "u1052",
    "name": "Ananya R.",
    "score": 138.53,
    "guildId": "g5"
  },
  {
    "id": "u1053",
    "name": "Amit Z.",
    "score": 102.68,
    "guildId": "g2"
  },
  {
    "id": "u1054",
    "name": "Amit R.",
    "score": 42.88,
    "guildId": "g3"
  },
  {
    "id": "u1055",
    "name": "Arjun M.",
    "score": 69.6,
    "guildId": "g5"
  },
  {
    "id": "u1056",
    "name": "Divya P.",
    "score": 25.5,
    "guildId": "g4"
  },
  {
    "id": "u1057",
    "name": "Chen D.",
    "score": 13.26,
    "guildId": "g9"
  },
  {
    "id": "u1058",
    "name": "Arjun T.",
    "score": 82.85,
    "guildId": "g7"
  },
  {
    "id": "u1059",
    "name": "Greta D.",
    "score": 61,
    "guildId": "g1"
  },
  {
    "id": "u1060",
    "name": "Suresh D.",
    "score": 58.04,
    "guildId": "g7"
  },
  {
    "id": "u1061",
    "name": "Megha K.",
    "score": 27.84,
    "guildId": "g5"
  },
  {
    "id": "u1062",
    "name": "Megha M.",
    "score": 126.62,
    "guildId": "g8"
  },
  {
    "id": "u1063",
    "name": "Vikram R.",
    "score": 116.15,
    "guildId": "g5"
  },
  {
    "id": "u1064",
    "name": "Ali Y.",
    "score": 45.1,
    "guildId": "g8"
  },
  {
    "id": "u1065",
    "name": "Neha W.",
    "score": 52.66,
    "guildId": "g10"
  },
  {
    "id": "u1066",
    "name": "Sneha K.",
    "score": 97.41,
    "guildId": "g9"
  },
  {
    "id": "u1067",
    "name": "Akash Z.",
    "score": 112.87,
    "guildId": "g6"
  },
  {
    "id": "u1068",
    "name": "Ravi S.",
    "score": 62.16,
    "guildId": "g9"
  },
  {
    "id": "u1069",
    "name": "Priya M.",
    "score": 138.12,
    "guildId": "g7"
  },
  {
    "id": "u1070",
    "name": "Liam K.",
    "score": 66.4,
    "guildId": "g5"
  },
  {
    "id": "u1071",
    "name": "Amit T.",
    "score": 122.46,
    "guildId": "g7"
  },
  {
    "id": "u1072",
    "name": "Sneha K.",
    "score": 75.44,
    "guildId": "g10"
  },
  {
    "id": "u1073",
    "name": "Swati B.",
    "score": 86.3,
    "guildId": "g2"
  },
  {
    "id": "u1074",
    "name": "Priya K.",
    "score": 32.56,
    "guildId": "g4"
  },
  {
    "id": "u1075",
    "name": "Amit S.",
    "score": 48.25,
    "guildId": "g6"
  },
  {
    "id": "u1076",
    "name": "Ananya B.",
    "score": 49.76,
    "guildId": "g4"
  },
  {
    "id": "u1077",
    "name": "John T.",
    "score": 108.04,
    "guildId": "g10"
  },
  {
    "id": "u1078",
    "name": "Pooja S.",
    "score": 122.34,
    "guildId": "g2"
  },
  {
    "id": "u1079",
    "name": "Chen R.",
    "score": 119.33,
    "guildId": "g8"
  },
  {
    "id": "u1080",
    "name": "Akash T.",
    "score": 79.83,
    "guildId": "g9"
  },
  {
    "id": "u1081",
    "name": "Karan D.",
    "score": 94.44,
    "guildId": "g9"
  },
  {
    "id": "u1082",
    "name": "Kavya W.",
    "score": 93.31,
    "guildId": "g1"
  },
  {
    "id": "u1083",
    "name": "Siddharth T.",
    "score": 135.56,
    "guildId": "g9"
  },
  {
    "id": "u1084",
    "name": "Pooja C.",
    "score": 85,
    "guildId": "g3"
  },
  {
    "id": "u1085",
    "name": "Swati C.",
    "score": 112.92,
    "guildId": "g8"
  },
  {
    "id": "u1086",
    "name": "Karan Y.",
    "score": 30.73,
    "guildId": "g4"
  },
  {
    "id": "u1087",
    "name": "Ramesh P.",
    "score": 36.76,
    "guildId": "g7"
  },
  {
    "id": "u1088",
    "name": "Emma W.",
    "score": 114.43,
    "guildId": "g2"
  },
  {
    "id": "u1089",
    "name": "Anjali A.",
    "score": 61.09,
    "guildId": "g4"
  },
  {
    "id": "u1090",
    "name": "Ravi P.",
    "score": 14,
    "guildId": "g2"
  },
  {
    "id": "u1091",
    "name": "Ramesh W.",
    "score": 115.09,
    "guildId": "g2"
  },
  {
    "id": "u1092",
    "name": "Vikram Y.",
    "score": 51.98,
    "guildId": "g5"
  },
  {
    "id": "u1093",
    "name": "Ravi D.",
    "score": 79,
    "guildId": "g6"
  },
  {
    "id": "u1094",
    "name": "Amit K.",
    "score": 141.83,
    "guildId": "g3"
  },
  {
    "id": "u1095",
    "name": "Ravi A.",
    "score": 47.31,
    "guildId": "g1"
  },
  {
    "id": "u1096",
    "name": "Pooja T.",
    "score": 144.52,
    "guildId": "g8"
  },
  {
    "id": "u1097",
    "name": "Suresh P.",
    "score": 40.63,
    "guildId": "g7"
  },
  {
    "id": "u1098",
    "name": "Megha C.",
    "score": 11.01,
    "guildId": "g1"
  },
  {
    "id": "u1099",
    "name": "Rahul W.",
    "score": 129.34,
    "guildId": "g2"
  },
  {
    "id": "u1100",
    "name": "Anjali R.",
    "score": 77.62,
    "guildId": "g3"
  },
  {
    "id": "u1101",
    "name": "Greta A.",
    "score": 107.25,
    "guildId": "g5"
  },
  {
    "id": "u1102",
    "name": "Ishita R.",
    "score": 109,
    "guildId": "g1"
  },
  {
    "id": "u1103",
    "name": "Ramesh T.",
    "score": 140.49,
    "guildId": "g8"
  },
  {
    "id": "u1104",
    "name": "Kavya W.",
    "score": 107.87,
    "guildId": "g9"
  },
  {
    "id": "u1105",
    "name": "Akash A.",
    "score": 86.14,
    "guildId": "g1"
  },
  {
    "id": "u1106",
    "name": "Neha W.",
    "score": 104.66,
    "guildId": "g7"
  },
  {
    "id": "u1107",
    "name": "Sneha Z.",
    "score": 77.32,
    "guildId": "g4"
  },
  {
    "id": "u1108",
    "name": "Akash B.",
    "score": 79.15,
    "guildId": "g7"
  },
  {
    "id": "u1109",
    "name": "Rahul Z.",
    "score": 118.21,
    "guildId": "g3"
  },
  {
    "id": "u1110",
    "name": "Hiro P.",
    "score": 64.52,
    "guildId": "g3"
  },
  {
    "id": "u1111",
    "name": "Pooja R.",
    "score": 121.96,
    "guildId": "g4"
  },
  {
    "id": "u1112",
    "name": "Ali T.",
    "score": 126.94,
    "guildId": "g6"
  },
  {
    "id": "u1113",
    "name": "Divya W.",
    "score": 52.92,
    "guildId": "g3"
  },
  {
    "id": "u1114",
    "name": "Priya B.",
    "score": 136.06,
    "guildId": "g5"
  },
  {
    "id": "u1115",
    "name": "Karan A.",
    "score": 130.05,
    "guildId": "g3"
  },
  {
    "id": "u1116",
    "name": "Anjali P.",
    "score": 119.74,
    "guildId": "g8"
  },
  {
    "id": "u1117",
    "name": "Swati R.",
    "score": 14.69,
    "guildId": "g8"
  },
  {
    "id": "u1118",
    "name": "Aditya V.",
    "score": 136.97,
    "guildId": "g6"
  },
  {
    "id": "u1119",
    "name": "Suresh C.",
    "score": 12.23,
    "guildId": "g2"
  },
  {
    "id": "u1120",
    "name": "Priya Y.",
    "score": 143.46,
    "guildId": "g1"
  },
  {
    "id": "u1121",
    "name": "Noah A.",
    "score": 95.95,
    "guildId": "g1"
  },
  {
    "id": "u1122",
    "name": "Swati C.",
    "score": 116.16,
    "guildId": "g10"
  },
  {
    "id": "u1123",
    "name": "Ramesh K.",
    "score": 67.4,
    "guildId": "g2"
  },
  {
    "id": "u1124",
    "name": "Sneha W.",
    "score": 137.12,
    "guildId": "g5"
  },
  {
    "id": "u1125",
    "name": "Kavya C.",
    "score": 89.35,
    "guildId": "g10"
  },
  {
    "id": "u1126",
    "name": "Rohit S.",
    "score": 23.7,
    "guildId": "g6"
  },
  {
    "id": "u1127",
    "name": "Siddharth K.",
    "score": 48.68,
    "guildId": "g10"
  },
  {
    "id": "u1128",
    "name": "Hans P.",
    "score": 30.13,
    "guildId": "g3"
  },
  {
    "id": "u1129",
    "name": "Vikram A.",
    "score": 69.22,
    "guildId": "g10"
  },
  {
    "id": "u1130",
    "name": "Megha K.",
    "score": 45.53,
    "guildId": "g7"
  },
  {
    "id": "u1131",
    "name": "Suresh C.",
    "score": 118.69,
    "guildId": "g9"
  },
  {
    "id": "u1132",
    "name": "Megha S.",
    "score": 149.12,
    "guildId": "g4"
  },
  {
    "id": "u1133",
    "name": "Kavya S.",
    "score": 58.73,
    "guildId": "g6"
  },
  {
    "id": "u1134",
    "name": "Manish M.",
    "score": 46.85,
    "guildId": "g10"
  },
  {
    "id": "u1135",
    "name": "Rahul D.",
    "score": 136.09,
    "guildId": "g3"
  },
  {
    "id": "u1136",
    "name": "Pooja K.",
    "score": 85,
    "guildId": "g3"
  },
  {
    "id": "u1137",
    "name": "Swati P.",
    "score": 37.67,
    "guildId": "g1"
  },
  {
    "id": "u1138",
    "name": "Fatima C.",
    "score": 115.34,
    "guildId": "g8"
  },
  {
    "id": "u1139",
    "name": "Suresh D.",
    "score": 148.04,
    "guildId": "g7"
  },
  {
    "id": "u1140",
    "name": "Aditya C.",
    "score": 67.12,
    "guildId": "g9"
  },
  {
    "id": "u1141",
    "name": "Hiro A.",
    "score": 28.69,
    "guildId": "g5"
  },
  {
    "id": "u1142",
    "name": "Neha P.",
    "score": 37.52,
    "guildId": "g5"
  },
  {
    "id": "u1143",
    "name": "Priya T.",
    "score": 51.35,
    "guildId": "g9"
  },
  {
    "id": "u1144",
    "name": "Ramesh Y.",
    "score": 132.82,
    "guildId": "g10"
  },
  {
    "id": "u1145",
    "name": "Arjun P.",
    "score": 146.33,
    "guildId": "g5"
  },
  {
    "id": "u1146",
    "name": "Ishita P.",
    "score": 53.79,
    "guildId": "g8"
  },
  {
    "id": "u1147",
    "name": "Akash W.",
    "score": 131.57,
    "guildId": "g1"
  },
  {
    "id": "u1148",
    "name": "Sneha S.",
    "score": 127.88,
    "guildId": "g9"
  },
  {
    "id": "u1149",
    "name": "Aditya Y.",
    "score": 125.46,
    "guildId": "g5"
  },
  {
    "id": "u1150",
    "name": "Sophia C.",
    "score": 20.49,
    "guildId": "g2"
  },
  {
    "id": "u1151",
    "name": "Amit V.",
    "score": 25.13,
    "guildId": "g5"
  },
  {
    "id": "u1152",
    "name": "Siddharth W.",
    "score": 144.65,
    "guildId": "g4"
  },
  {
    "id": "u1153",
    "name": "Aditya A.",
    "score": 129.83,
    "guildId": "g4"
  },
  {
    "id": "u1154",
    "name": "Neha T.",
    "score": 47.82,
    "guildId": "g1"
  },
  {
    "id": "u1155",
    "name": "Neha K.",
    "score": 55.46,
    "guildId": "g4"
  },
  {
    "id": "u1156",
    "name": "Anjali Y.",
    "score": 113.52,
    "guildId": "g4"
  },
  {
    "id": "u1157",
    "name": "Anjali W.",
    "score": 106.84,
    "guildId": "g5"
  },
  {
    "id": "u1158",
    "name": "Ananya A.",
    "score": 83.28,
    "guildId": "g3"
  },
  {
    "id": "u1159",
    "name": "Swati V.",
    "score": 103.5,
    "guildId": "g10"
  },
  {
    "id": "u1160",
    "name": "Arjun T.",
    "score": 104.9,
    "guildId": "g1"
  },
  {
    "id": "u1161",
    "name": "Akash P.",
    "score": 64.25,
    "guildId": "g6"
  },
  {
    "id": "u1162",
    "name": "Karan R.",
    "score": 30.5,
    "guildId": "g8"
  },
  {
    "id": "u1163",
    "name": "Rahul Y.",
    "score": 81.68,
    "guildId": "g2"
  },
  {
    "id": "u1164",
    "name": "Hiro V.",
    "score": 87.29,
    "guildId": "g10"
  },
  {
    "id": "u1165",
    "name": "John Y.",
    "score": 44.22,
    "guildId": "g2"
  },
  {
    "id": "u1166",
    "name": "Rahul A.",
    "score": 54.64,
    "guildId": "g4"
  },
  {
    "id": "u1167",
    "name": "Sneha D.",
    "score": 132.63,
    "guildId": "g4"
  },
  {
    "id": "u1168",
    "name": "Neha P.",
    "score": 78,
    "guildId": "g3"
  },
  {
    "id": "u1169",
    "name": "Chen S.",
    "score": 14.84,
    "guildId": "g5"
  },
  {
    "id": "u1170",
    "name": "Divya T.",
    "score": 131.03,
    "guildId": "g6"
  },
  {
    "id": "u1171",
    "name": "Siddharth R.",
    "score": 141.69,
    "guildId": "g5"
  },
  {
    "id": "u1172",
    "name": "Karan W.",
    "score": 67.82,
    "guildId": "g6"
  },
  {
    "id": "u1173",
    "name": "Ravi A.",
    "score": 149.2,
    "guildId": "g6"
  },
  {
    "id": "u1174",
    "name": "Kavya A.",
    "score": 91.88,
    "guildId": "g6"
  },
  {
    "id": "u1175",
    "name": "Vikram Y.",
    "score": 60.85,
    "guildId": "g2"
  },
  {
    "id": "u1176",
    "name": "Amit T.",
    "score": 111.88,
    "guildId": "g3"
  },
  {
    "id": "u1177",
    "name": "Vikram P.",
    "score": 129.3,
    "guildId": "g2"
  },
  {
    "id": "u1178",
    "name": "Mia R.",
    "score": 136.76,
    "guildId": "g5"
  },
  {
    "id": "u1179",
    "name": "Neha P.",
    "score": 129.97,
    "guildId": "g5"
  },
  {
    "id": "u1180",
    "name": "Wei S.",
    "score": 23.34,
    "guildId": "g2"
  },
  {
    "id": "u1181",
    "name": "Akash D.",
    "score": 77.61,
    "guildId": "g6"
  },
  {
    "id": "u1182",
    "name": "Hans B.",
    "score": 127.58,
    "guildId": "g2"
  },
  {
    "id": "u1183",
    "name": "Emma Y.",
    "score": 136.55,
    "guildId": "g6"
  },
  {
    "id": "u1184",
    "name": "Akash V.",
    "score": 38.56,
    "guildId": "g9"
  },
  {
    "id": "u1185",
    "name": "Karan Z.",
    "score": 122.69,
    "guildId": "g4"
  },
  {
    "id": "u1186",
    "name": "Priya P.",
    "score": 26.12,
    "guildId": "g6"
  },
  {
    "id": "u1187",
    "name": "Kavya V.",
    "score": 105.19,
    "guildId": "g2"
  },
  {
    "id": "u1188",
    "name": "Ananya P.",
    "score": 120.07,
    "guildId": "g9"
  },
  {
    "id": "u1189",
    "name": "Rohit A.",
    "score": 127.13,
    "guildId": "g10"
  },
  {
    "id": "u1190",
    "name": "Liam P.",
    "score": 92.68,
    "guildId": "g1"
  },
  {
    "id": "u1191",
    "name": "Arjun M.",
    "score": 44.98,
    "guildId": "g1"
  },
  {
    "id": "u1192",
    "name": "Suresh A.",
    "score": 149.36,
    "guildId": "g8"
  },
  {
    "id": "u1193",
    "name": "Greta R.",
    "score": 100.58,
    "guildId": "g1"
  },
  {
    "id": "u1194",
    "name": "Rohit D.",
    "score": 45.59,
    "guildId": "g10"
  },
  {
    "id": "u1195",
    "name": "Priya P.",
    "score": 134.68,
    "guildId": "g10"
  },
  {
    "id": "u1196",
    "name": "Pooja V.",
    "score": 63.12,
    "guildId": "g2"
  },
  {
    "id": "u1197",
    "name": "Divya R.",
    "score": 40.71,
    "guildId": "g4"
  },
  {
    "id": "u1198",
    "name": "Greta R.",
    "score": 43,
    "guildId": "g2"
  },
  {
    "id": "u1199",
    "name": "Liam V.",
    "score": 72.77,
    "guildId": "g1"
  },
  {
    "id": "u1200",
    "name": "Arjun P.",
    "score": 41.42,
    "guildId": "g9"
  },
  {
    "id": "u1201",
    "name": "Mateo R.",
    "score": 16.03,
    "guildId": "g7"
  },
  {
    "id": "u1202",
    "name": "Akash A.",
    "score": 111.76,
    "guildId": "g8"
  },
  {
    "id": "u1203",
    "name": "Megha B.",
    "score": 96.87,
    "guildId": "g2"
  },
  {
    "id": "u1204",
    "name": "Ananya D.",
    "score": 121.63,
    "guildId": "g5"
  },
  {
    "id": "u1205",
    "name": "Anjali W.",
    "score": 63.09,
    "guildId": "g4"
  },
  {
    "id": "u1206",
    "name": "Vikram V.",
    "score": 22.76,
    "guildId": "g1"
  },
  {
    "id": "u1207",
    "name": "Siddharth Y.",
    "score": 116.44,
    "guildId": "g8"
  },
  {
    "id": "u1208",
    "name": "Olivia Y.",
    "score": 138.68,
    "guildId": "g9"
  },
  {
    "id": "u1209",
    "name": "Ishita V.",
    "score": 74.06,
    "guildId": "g3"
  },
  {
    "id": "u1210",
    "name": "Priya K.",
    "score": 144.98,
    "guildId": "g2"
  },
  {
    "id": "u1211",
    "name": "Megha P.",
    "score": 149.8,
    "guildId": "g9"
  },
  {
    "id": "u1212",
    "name": "Yuki Z.",
    "score": 39.29,
    "guildId": "g5"
  },
  {
    "id": "u1213",
    "name": "Hiro Y.",
    "score": 144.08,
    "guildId": "g3"
  },
  {
    "id": "u1214",
    "name": "Mia B.",
    "score": 111.25,
    "guildId": "g10"
  },
  {
    "id": "u1215",
    "name": "Mateo C.",
    "score": 127.65,
    "guildId": "g9"
  },
  {
    "id": "u1216",
    "name": "Rohit R.",
    "score": 111.06,
    "guildId": "g4"
  },
  {
    "id": "u1217",
    "name": "Kavya C.",
    "score": 76.12,
    "guildId": "g5"
  },
  {
    "id": "u1218",
    "name": "Sneha A.",
    "score": 22.44,
    "guildId": "g5"
  },
  {
    "id": "u1219",
    "name": "Akash Y.",
    "score": 122.81,
    "guildId": "g10"
  },
  {
    "id": "u1220",
    "name": "Aditya S.",
    "score": 26.32,
    "guildId": "g2"
  },
  {
    "id": "u1221",
    "name": "Swati C.",
    "score": 114.41,
    "guildId": "g6"
  },
  {
    "id": "u1222",
    "name": "Kavya Y.",
    "score": 51.62,
    "guildId": "g4"
  },
  {
    "id": "u1223",
    "name": "Megha K.",
    "score": 65.43,
    "guildId": "g4"
  },
  {
    "id": "u1224",
    "name": "Neha W.",
    "score": 60.36,
    "guildId": "g2"
  },
  {
    "id": "u1225",
    "name": "Aditya Z.",
    "score": 54.92,
    "guildId": "g8"
  },
  {
    "id": "u1226",
    "name": "Ravi B.",
    "score": 36.86,
    "guildId": "g2"
  },
  {
    "id": "u1227",
    "name": "Olivia C.",
    "score": 66.04,
    "guildId": "g9"
  },
  {
    "id": "u1228",
    "name": "Olivia Y.",
    "score": 147.45,
    "guildId": "g3"
  },
  {
    "id": "u1229",
    "name": "Ravi V.",
    "score": 59.84,
    "guildId": "g4"
  },
  {
    "id": "u1230",
    "name": "Anjali M.",
    "score": 83.9,
    "guildId": "g7"
  },
  {
    "id": "u1231",
    "name": "Neha R.",
    "score": 119.82,
    "guildId": "g7"
  },
  {
    "id": "u1232",
    "name": "Swati W.",
    "score": 132.36,
    "guildId": "g6"
  },
  {
    "id": "u1233",
    "name": "Yuki T.",
    "score": 63.2,
    "guildId": "g8"
  },
  {
    "id": "u1234",
    "name": "Mateo V.",
    "score": 66.46,
    "guildId": "g2"
  },
  {
    "id": "u1235",
    "name": "Amit P.",
    "score": 27.31,
    "guildId": "g5"
  },
  {
    "id": "u1236",
    "name": "Swati W.",
    "score": 37.42,
    "guildId": "g8"
  },
  {
    "id": "u1237",
    "name": "Sophia T.",
    "score": 54.74,
    "guildId": "g5"
  },
  {
    "id": "u1238",
    "name": "Pooja D.",
    "score": 138.94,
    "guildId": "g8"
  },
  {
    "id": "u1239",
    "name": "Ishita V.",
    "score": 79.21,
    "guildId": "g1"
  },
  {
    "id": "u1240",
    "name": "Liam M.",
    "score": 39.56,
    "guildId": "g4"
  },
  {
    "id": "u1241",
    "name": "Swati D.",
    "score": 59.96,
    "guildId": "g6"
  },
  {
    "id": "u1242",
    "name": "Divya S.",
    "score": 107.46,
    "guildId": "g1"
  },
  {
    "id": "u1243",
    "name": "Anjali D.",
    "score": 69.29,
    "guildId": "g2"
  },
  {
    "id": "u1244",
    "name": "Siddharth W.",
    "score": 111.88,
    "guildId": "g4"
  },
  {
    "id": "u1245",
    "name": "Noah T.",
    "score": 69.68,
    "guildId": "g6"
  },
  {
    "id": "u1246",
    "name": "Ravi R.",
    "score": 85.69,
    "guildId": "g7"
  },
  {
    "id": "u1247",
    "name": "Liam T.",
    "score": 144,
    "guildId": "g1"
  },
  {
    "id": "u1248",
    "name": "Mateo D.",
    "score": 22.14,
    "guildId": "g3"
  },
  {
    "id": "u1249",
    "name": "Ravi T.",
    "score": 135.22,
    "guildId": "g7"
  },
  {
    "id": "u1250",
    "name": "Swati K.",
    "score": 12.31,
    "guildId": "g2"
  },
  {
    "id": "u1251",
    "name": "Rahul V.",
    "score": 86.54,
    "guildId": "g7"
  },
  {
    "id": "u1252",
    "name": "Swati D.",
    "score": 17.11,
    "guildId": "g2"
  },
  {
    "id": "u1253",
    "name": "Karan M.",
    "score": 103.51,
    "guildId": "g9"
  },
  {
    "id": "u1254",
    "name": "Siddharth C.",
    "score": 69.37,
    "guildId": "g4"
  },
  {
    "id": "u1255",
    "name": "Olivia D.",
    "score": 131.29,
    "guildId": "g9"
  },
  {
    "id": "u1256",
    "name": "Megha K.",
    "score": 44.4,
    "guildId": "g1"
  },
  {
    "id": "u1257",
    "name": "Priya D.",
    "score": 21.35,
    "guildId": "g6"
  },
  {
    "id": "u1258",
    "name": "Wei K.",
    "score": 60.24,
    "guildId": "g1"
  },
  {
    "id": "u1259",
    "name": "Liam V.",
    "score": 77.58,
    "guildId": "g5"
  },
  {
    "id": "u1260",
    "name": "Sophia S.",
    "score": 85.33,
    "guildId": "g9"
  },
  {
    "id": "u1261",
    "name": "Divya M.",
    "score": 132.7,
    "guildId": "g3"
  },
  {
    "id": "u1262",
    "name": "Yuki W.",
    "score": 98.16,
    "guildId": "g1"
  },
  {
    "id": "u1263",
    "name": "Manish S.",
    "score": 79.26,
    "guildId": "g10"
  },
  {
    "id": "u1264",
    "name": "Suresh P.",
    "score": 70.63,
    "guildId": "g6"
  },
  {
    "id": "u1265",
    "name": "Priya Y.",
    "score": 46.43,
    "guildId": "g2"
  },
  {
    "id": "u1266",
    "name": "Mia M.",
    "score": 98.26,
    "guildId": "g8"
  },
  {
    "id": "u1267",
    "name": "Swati C.",
    "score": 91.2,
    "guildId": "g5"
  },
  {
    "id": "u1268",
    "name": "Liam S.",
    "score": 149.79,
    "guildId": "g2"
  },
  {
    "id": "u1269",
    "name": "Hiro C.",
    "score": 135.29,
    "guildId": "g4"
  },
  {
    "id": "u1270",
    "name": "John V.",
    "score": 51.88,
    "guildId": "g10"
  },
  {
    "id": "u1271",
    "name": "Yuki R.",
    "score": 137.13,
    "guildId": "g9"
  },
  {
    "id": "u1272",
    "name": "Isabella Y.",
    "score": 23.84,
    "guildId": "g4"
  },
  {
    "id": "u1273",
    "name": "Pooja B.",
    "score": 39.93,
    "guildId": "g8"
  },
  {
    "id": "u1274",
    "name": "Hans R.",
    "score": 99.94,
    "guildId": "g5"
  },
  {
    "id": "u1275",
    "name": "Ramesh W.",
    "score": 140.38,
    "guildId": "g2"
  },
  {
    "id": "u1276",
    "name": "Pooja A.",
    "score": 84.48,
    "guildId": "g8"
  },
  {
    "id": "u1277",
    "name": "Siddharth Z.",
    "score": 82.92,
    "guildId": "g2"
  },
  {
    "id": "u1278",
    "name": "Sophia S.",
    "score": 40.59,
    "guildId": "g7"
  },
  {
    "id": "u1279",
    "name": "Karan W.",
    "score": 85.44,
    "guildId": "g7"
  },
  {
    "id": "u1280",
    "name": "Manish B.",
    "score": 85.19,
    "guildId": "g4"
  },
  {
    "id": "u1281",
    "name": "Manish M.",
    "score": 104.63,
    "guildId": "g1"
  },
  {
    "id": "u1282",
    "name": "Ishita D.",
    "score": 104.42,
    "guildId": "g8"
  },
  {
    "id": "u1283",
    "name": "Swati M.",
    "score": 20.88,
    "guildId": "g4"
  },
  {
    "id": "u1284",
    "name": "Ravi W.",
    "score": 101.05,
    "guildId": "g3"
  },
  {
    "id": "u1285",
    "name": "Neha D.",
    "score": 100.47,
    "guildId": "g4"
  },
  {
    "id": "u1286",
    "name": "Swati A.",
    "score": 28.66,
    "guildId": "g6"
  },
  {
    "id": "u1287",
    "name": "Sneha T.",
    "score": 139.25,
    "guildId": "g2"
  },
  {
    "id": "u1288",
    "name": "Amit R.",
    "score": 97.41,
    "guildId": "g9"
  },
  {
    "id": "u1289",
    "name": "Kavya C.",
    "score": 52.48,
    "guildId": "g6"
  },
  {
    "id": "u1290",
    "name": "Vikram W.",
    "score": 30.53,
    "guildId": "g9"
  },
  {
    "id": "u1291",
    "name": "Olivia P.",
    "score": 49.83,
    "guildId": "g9"
  },
  {
    "id": "u1292",
    "name": "Arjun V.",
    "score": 116.66,
    "guildId": "g4"
  },
  {
    "id": "u1293",
    "name": "Yuki P.",
    "score": 46.29,
    "guildId": "g9"
  },
  {
    "id": "u1294",
    "name": "Rahul P.",
    "score": 23.67,
    "guildId": "g5"
  },
  {
    "id": "u1295",
    "name": "Sneha C.",
    "score": 128.6,
    "guildId": "g1"
  },
  {
    "id": "u1296",
    "name": "Ishita M.",
    "score": 38.71,
    "guildId": "g4"
  },
  {
    "id": "u1297",
    "name": "Chen C.",
    "score": 58,
    "guildId": "g8"
  },
  {
    "id": "u1298",
    "name": "Priya D.",
    "score": 98.53,
    "guildId": "g10"
  },
  {
    "id": "u1299",
    "name": "Vikram A.",
    "score": 26.22,
    "guildId": "g5"
  },
  {
    "id": "u1300",
    "name": "Anjali B.",
    "score": 130.34,
    "guildId": "g10"
  },
  {
    "id": "u1301",
    "name": "Ishita M.",
    "score": 126.82,
    "guildId": "g8"
  },
  {
    "id": "u1302",
    "name": "Olivia Y.",
    "score": 97.47,
    "guildId": "g1"
  },
  {
    "id": "u1303",
    "name": "Priya R.",
    "score": 52.58,
    "guildId": "g4"
  },
  {
    "id": "u1304",
    "name": "Sneha Y.",
    "score": 112.68,
    "guildId": "g3"
  },
  {
    "id": "u1305",
    "name": "Pooja Y.",
    "score": 116.25,
    "guildId": "g2"
  },
  {
    "id": "u1306",
    "name": "Arjun B.",
    "score": 86.01,
    "guildId": "g4"
  },
  {
    "id": "u1307",
    "name": "Suresh P.",
    "score": 31.96,
    "guildId": "g8"
  },
  {
    "id": "u1308",
    "name": "Arjun M.",
    "score": 127.79,
    "guildId": "g1"
  },
  {
    "id": "u1309",
    "name": "Liam B.",
    "score": 34.72,
    "guildId": "g5"
  },
  {
    "id": "u1310",
    "name": "Megha Z.",
    "score": 87.93,
    "guildId": "g3"
  },
  {
    "id": "u1311",
    "name": "Ishita B.",
    "score": 102.57,
    "guildId": "g10"
  },
  {
    "id": "u1312",
    "name": "Suresh V.",
    "score": 14.48,
    "guildId": "g2"
  },
  {
    "id": "u1313",
    "name": "Swati C.",
    "score": 52.71,
    "guildId": "g10"
  },
  {
    "id": "u1314",
    "name": "Megha D.",
    "score": 104.58,
    "guildId": "g9"
  },
  {
    "id": "u1315",
    "name": "Ramesh K.",
    "score": 21.14,
    "guildId": "g10"
  },
  {
    "id": "u1316",
    "name": "Ravi D.",
    "score": 47.14,
    "guildId": "g5"
  },
  {
    "id": "u1317",
    "name": "Yuki R.",
    "score": 102.17,
    "guildId": "g2"
  },
  {
    "id": "u1318",
    "name": "Priya P.",
    "score": 84.9,
    "guildId": "g9"
  },
  {
    "id": "u1319",
    "name": "Ramesh S.",
    "score": 75.7,
    "guildId": "g8"
  },
  {
    "id": "u1320",
    "name": "Mateo V.",
    "score": 98.56,
    "guildId": "g2"
  },
  {
    "id": "u1321",
    "name": "Neha C.",
    "score": 116.73,
    "guildId": "g5"
  },
  {
    "id": "u1322",
    "name": "Aditya W.",
    "score": 71.33,
    "guildId": "g3"
  },
  {
    "id": "u1323",
    "name": "Siddharth Z.",
    "score": 139.99,
    "guildId": "g5"
  },
  {
    "id": "u1324",
    "name": "Aditya V.",
    "score": 44.26,
    "guildId": "g10"
  },
  {
    "id": "u1325",
    "name": "Rohit D.",
    "score": 49.59,
    "guildId": "g7"
  },
  {
    "id": "u1326",
    "name": "Akash W.",
    "score": 48.02,
    "guildId": "g8"
  },
  {
    "id": "u1327",
    "name": "Ishita M.",
    "score": 16.92,
    "guildId": "g3"
  },
  {
    "id": "u1328",
    "name": "Anjali M.",
    "score": 37.48,
    "guildId": "g3"
  },
  {
    "id": "u1329",
    "name": "Pooja R.",
    "score": 131.4,
    "guildId": "g8"
  },
  {
    "id": "u1330",
    "name": "Suresh M.",
    "score": 64.97,
    "guildId": "g9"
  },
  {
    "id": "u1331",
    "name": "Siddharth Y.",
    "score": 10.83,
    "guildId": "g5"
  },
  {
    "id": "u1332",
    "name": "Rahul M.",
    "score": 20.59,
    "guildId": "g2"
  },
  {
    "id": "u1333",
    "name": "Swati C.",
    "score": 126.91,
    "guildId": "g9"
  },
  {
    "id": "u1334",
    "name": "Vikram A.",
    "score": 20.32,
    "guildId": "g7"
  },
  {
    "id": "u1335",
    "name": "Ravi B.",
    "score": 119.31,
    "guildId": "g2"
  },
  {
    "id": "u1336",
    "name": "Ishita P.",
    "score": 73.5,
    "guildId": "g5"
  },
  {
    "id": "u1337",
    "name": "Yuki R.",
    "score": 117.96,
    "guildId": "g10"
  },
  {
    "id": "u1338",
    "name": "Siddharth B.",
    "score": 118.29,
    "guildId": "g2"
  },
  {
    "id": "u1339",
    "name": "Rahul Z.",
    "score": 112.28,
    "guildId": "g6"
  },
  {
    "id": "u1340",
    "name": "Sneha Y.",
    "score": 103.98,
    "guildId": "g2"
  },
  {
    "id": "u1341",
    "name": "Ravi K.",
    "score": 54.02,
    "guildId": "g3"
  },
  {
    "id": "u1342",
    "name": "Divya S.",
    "score": 92.75,
    "guildId": "g7"
  },
  {
    "id": "u1343",
    "name": "Olivia Y.",
    "score": 74.19,
    "guildId": "g3"
  },
  {
    "id": "u1344",
    "name": "Akash P.",
    "score": 58.75,
    "guildId": "g7"
  },
  {
    "id": "u1345",
    "name": "Ravi Z.",
    "score": 137.18,
    "guildId": "g9"
  },
  {
    "id": "u1346",
    "name": "Ishita D.",
    "score": 28.23,
    "guildId": "g6"
  },
  {
    "id": "u1347",
    "name": "Greta V.",
    "score": 106.92,
    "guildId": "g9"
  },
  {
    "id": "u1348",
    "name": "Priya B.",
    "score": 133.71,
    "guildId": "g3"
  },
  {
    "id": "u1349",
    "name": "Hiro M.",
    "score": 41.44,
    "guildId": "g10"
  },
  {
    "id": "u1350",
    "name": "Akash Z.",
    "score": 19.35,
    "guildId": "g4"
  },
  {
    "id": "u1351",
    "name": "Arjun V.",
    "score": 141.29,
    "guildId": "g6"
  },
  {
    "id": "u1352",
    "name": "Olivia T.",
    "score": 82.65,
    "guildId": "g8"
  },
  {
    "id": "u1353",
    "name": "Swati K.",
    "score": 98.86,
    "guildId": "g10"
  },
  {
    "id": "u1354",
    "name": "Ramesh Z.",
    "score": 14.01,
    "guildId": "g9"
  },
  {
    "id": "u1355",
    "name": "Luka V.",
    "score": 74.13,
    "guildId": "g8"
  },
  {
    "id": "u1356",
    "name": "Divya W.",
    "score": 97.84,
    "guildId": "g1"
  },
  {
    "id": "u1357",
    "name": "Megha W.",
    "score": 55.63,
    "guildId": "g3"
  },
  {
    "id": "u1358",
    "name": "Sneha P.",
    "score": 133.53,
    "guildId": "g10"
  },
  {
    "id": "u1359",
    "name": "Greta A.",
    "score": 33.03,
    "guildId": "g2"
  },
  {
    "id": "u1360",
    "name": "Mia A.",
    "score": 50.09,
    "guildId": "g6"
  },
  {
    "id": "u1361",
    "name": "Manish S.",
    "score": 65.63,
    "guildId": "g2"
  },
  {
    "id": "u1362",
    "name": "Arjun P.",
    "score": 93,
    "guildId": "g4"
  },
  {
    "id": "u1363",
    "name": "Aditya T.",
    "score": 26.09,
    "guildId": "g9"
  },
  {
    "id": "u1364",
    "name": "Karan C.",
    "score": 142.5,
    "guildId": "g4"
  },
  {
    "id": "u1365",
    "name": "Sneha W.",
    "score": 62.71,
    "guildId": "g7"
  },
  {
    "id": "u1366",
    "name": "Ananya Z.",
    "score": 147.07,
    "guildId": "g2"
  },
  {
    "id": "u1367",
    "name": "Kavya Z.",
    "score": 89.13,
    "guildId": "g10"
  },
  {
    "id": "u1368",
    "name": "Arjun S.",
    "score": 145.15,
    "guildId": "g3"
  },
  {
    "id": "u1369",
    "name": "Aditya C.",
    "score": 13.51,
    "guildId": "g3"
  },
  {
    "id": "u1370",
    "name": "Mateo K.",
    "score": 137.49,
    "guildId": "g8"
  },
  {
    "id": "u1371",
    "name": "Megha M.",
    "score": 93.57,
    "guildId": "g7"
  },
  {
    "id": "u1372",
    "name": "Ishita Z.",
    "score": 35.73,
    "guildId": "g6"
  },
  {
    "id": "u1373",
    "name": "Kavya R.",
    "score": 147.85,
    "guildId": "g4"
  },
  {
    "id": "u1374",
    "name": "Vikram V.",
    "score": 119.2,
    "guildId": "g6"
  },
  {
    "id": "u1375",
    "name": "Rohit S.",
    "score": 86.05,
    "guildId": "g2"
  },
  {
    "id": "u1376",
    "name": "Isabella T.",
    "score": 74.2,
    "guildId": "g9"
  },
  {
    "id": "u1377",
    "name": "Emma P.",
    "score": 45.12,
    "guildId": "g7"
  },
  {
    "id": "u1378",
    "name": "Ananya W.",
    "score": 101.08,
    "guildId": "g1"
  },
  {
    "id": "u1379",
    "name": "Priya B.",
    "score": 105.04,
    "guildId": "g2"
  },
  {
    "id": "u1380",
    "name": "Arjun V.",
    "score": 86.77,
    "guildId": "g4"
  },
  {
    "id": "u1381",
    "name": "Ishita T.",
    "score": 110.71,
    "guildId": "g1"
  },
  {
    "id": "u1382",
    "name": "Isabella R.",
    "score": 85.97,
    "guildId": "g6"
  },
  {
    "id": "u1383",
    "name": "Olivia Y.",
    "score": 104.77,
    "guildId": "g4"
  },
  {
    "id": "u1384",
    "name": "Sneha S.",
    "score": 43.82,
    "guildId": "g9"
  },
  {
    "id": "u1385",
    "name": "Rohit R.",
    "score": 129.17,
    "guildId": "g8"
  },
  {
    "id": "u1386",
    "name": "Neha Y.",
    "score": 62.06,
    "guildId": "g6"
  },
  {
    "id": "u1387",
    "name": "Priya Y.",
    "score": 31.53,
    "guildId": "g3"
  },
  {
    "id": "u1388",
    "name": "Suresh B.",
    "score": 60.4,
    "guildId": "g5"
  },
  {
    "id": "u1389",
    "name": "Ramesh C.",
    "score": 37.33,
    "guildId": "g8"
  },
  {
    "id": "u1390",
    "name": "Neha C.",
    "score": 20,
    "guildId": "g8"
  },
  {
    "id": "u1391",
    "name": "Fatima P.",
    "score": 96.08,
    "guildId": "g7"
  },
  {
    "id": "u1392",
    "name": "Sophia R.",
    "score": 114.12,
    "guildId": "g9"
  },
  {
    "id": "u1393",
    "name": "Pooja A.",
    "score": 107.95,
    "guildId": "g8"
  },
  {
    "id": "u1394",
    "name": "Liam W.",
    "score": 79.02,
    "guildId": "g10"
  },
  {
    "id": "u1395",
    "name": "Divya K.",
    "score": 136.06,
    "guildId": "g3"
  },
  {
    "id": "u1396",
    "name": "Ramesh S.",
    "score": 76.01,
    "guildId": "g2"
  },
  {
    "id": "u1397",
    "name": "Arjun B.",
    "score": 23.75,
    "guildId": "g8"
  },
  {
    "id": "u1398",
    "name": "Anjali T.",
    "score": 77.51,
    "guildId": "g1"
  },
  {
    "id": "u1399",
    "name": "Isabella D.",
    "score": 119.06,
    "guildId": "g9"
  },
  {
    "id": "u1400",
    "name": "Hans T.",
    "score": 24.94,
    "guildId": "g4"
  },
  {
    "id": "u1401",
    "name": "Manish D.",
    "score": 96.21,
    "guildId": "g8"
  },
  {
    "id": "u1402",
    "name": "Divya C.",
    "score": 113.4,
    "guildId": "g3"
  },
  {
    "id": "u1403",
    "name": "Mia C.",
    "score": 44.19,
    "guildId": "g4"
  },
  {
    "id": "u1404",
    "name": "Pooja R.",
    "score": 113.08,
    "guildId": "g4"
  },
  {
    "id": "u1405",
    "name": "Priya A.",
    "score": 104.49,
    "guildId": "g5"
  },
  {
    "id": "u1406",
    "name": "Kavya M.",
    "score": 56.66,
    "guildId": "g1"
  },
  {
    "id": "u1407",
    "name": "Vikram M.",
    "score": 127.63,
    "guildId": "g4"
  },
  {
    "id": "u1408",
    "name": "Ananya K.",
    "score": 88.71,
    "guildId": "g3"
  },
  {
    "id": "u1409",
    "name": "Kavya V.",
    "score": 141.43,
    "guildId": "g9"
  },
  {
    "id": "u1410",
    "name": "Liam T.",
    "score": 35.41,
    "guildId": "g6"
  },
  {
    "id": "u1411",
    "name": "Suresh V.",
    "score": 74.42,
    "guildId": "g7"
  },
  {
    "id": "u1412",
    "name": "Ramesh M.",
    "score": 50.87,
    "guildId": "g1"
  },
  {
    "id": "u1413",
    "name": "Divya V.",
    "score": 141.57,
    "guildId": "g3"
  },
  {
    "id": "u1414",
    "name": "Hans D.",
    "score": 71.43,
    "guildId": "g10"
  },
  {
    "id": "u1415",
    "name": "Yuki D.",
    "score": 34.82,
    "guildId": "g5"
  },
  {
    "id": "u1416",
    "name": "Ananya P.",
    "score": 16.27,
    "guildId": "g9"
  },
  {
    "id": "u1417",
    "name": "Rohit S.",
    "score": 20.58,
    "guildId": "g4"
  },
  {
    "id": "u1418",
    "name": "Ananya M.",
    "score": 33.61,
    "guildId": "g4"
  },
  {
    "id": "u1419",
    "name": "Chen P.",
    "score": 44.02,
    "guildId": "g7"
  },
  {
    "id": "u1420",
    "name": "Isabella V.",
    "score": 36.12,
    "guildId": "g5"
  },
  {
    "id": "u1421",
    "name": "Aditya K.",
    "score": 129.89,
    "guildId": "g6"
  },
  {
    "id": "u1422",
    "name": "Neha C.",
    "score": 94.43,
    "guildId": "g5"
  },
  {
    "id": "u1423",
    "name": "Olivia C.",
    "score": 31.25,
    "guildId": "g5"
  },
  {
    "id": "u1424",
    "name": "Pooja W.",
    "score": 78,
    "guildId": "g7"
  },
  {
    "id": "u1425",
    "name": "Neha Y.",
    "score": 101.24,
    "guildId": "g3"
  },
  {
    "id": "u1426",
    "name": "Yuki P.",
    "score": 72.97,
    "guildId": "g8"
  },
  {
    "id": "u1427",
    "name": "Ishita M.",
    "score": 100,
    "guildId": "g3"
  },
  {
    "id": "u1428",
    "name": "Amit V.",
    "score": 57.21,
    "guildId": "g9"
  },
  {
    "id": "u1429",
    "name": "Akash R.",
    "score": 90.63,
    "guildId": "g9"
  },
  {
    "id": "u1430",
    "name": "Ishita C.",
    "score": 57.65,
    "guildId": "g8"
  },
  {
    "id": "u1431",
    "name": "Emma M.",
    "score": 86.61,
    "guildId": "g8"
  },
  {
    "id": "u1432",
    "name": "Ramesh S.",
    "score": 37.5,
    "guildId": "g2"
  },
  {
    "id": "u1433",
    "name": "Vikram B.",
    "score": 121.43,
    "guildId": "g8"
  },
  {
    "id": "u1434",
    "name": "Pooja C.",
    "score": 139.06,
    "guildId": "g6"
  },
  {
    "id": "u1435",
    "name": "Ishita M.",
    "score": 20.69,
    "guildId": "g9"
  },
  {
    "id": "u1436",
    "name": "Karan V.",
    "score": 76.71,
    "guildId": "g3"
  },
  {
    "id": "u1437",
    "name": "Ramesh A.",
    "score": 148,
    "guildId": "g7"
  },
  {
    "id": "u1438",
    "name": "Rahul W.",
    "score": 146.37,
    "guildId": "g3"
  },
  {
    "id": "u1439",
    "name": "Swati S.",
    "score": 84.13,
    "guildId": "g2"
  },
  {
    "id": "u1440",
    "name": "Akash D.",
    "score": 52.97,
    "guildId": "g10"
  },
  {
    "id": "u1441",
    "name": "Luka B.",
    "score": 65,
    "guildId": "g4"
  },
  {
    "id": "u1442",
    "name": "Neha A.",
    "score": 23.59,
    "guildId": "g8"
  },
  {
    "id": "u1443",
    "name": "Sneha C.",
    "score": 124.94,
    "guildId": "g2"
  },
  {
    "id": "u1444",
    "name": "Aditya Z.",
    "score": 144.53,
    "guildId": "g1"
  },
  {
    "id": "u1445",
    "name": "Amit K.",
    "score": 71.9,
    "guildId": "g2"
  },
  {
    "id": "u1446",
    "name": "Ananya P.",
    "score": 64.83,
    "guildId": "g2"
  },
  {
    "id": "u1447",
    "name": "Karan W.",
    "score": 68.56,
    "guildId": "g10"
  },
  {
    "id": "u1448",
    "name": "Rohit K.",
    "score": 89.8,
    "guildId": "g3"
  },
  {
    "id": "u1449",
    "name": "Manish P.",
    "score": 80.05,
    "guildId": "g1"
  },
  {
    "id": "u1450",
    "name": "Aditya Z.",
    "score": 26.6,
    "guildId": "g9"
  },
  {
    "id": "u1451",
    "name": "Amit A.",
    "score": 37.49,
    "guildId": "g3"
  },
  {
    "id": "u1452",
    "name": "Karan W.",
    "score": 117.72,
    "guildId": "g10"
  },
  {
    "id": "u1453",
    "name": "Sneha V.",
    "score": 114.61,
    "guildId": "g1"
  },
  {
    "id": "u1454",
    "name": "Swati M.",
    "score": 124.68,
    "guildId": "g6"
  },
  {
    "id": "u1455",
    "name": "Neha P.",
    "score": 48.28,
    "guildId": "g4"
  },
  {
    "id": "u1456",
    "name": "Kavya S.",
    "score": 27.6,
    "guildId": "g10"
  },
  {
    "id": "u1457",
    "name": "Kavya Z.",
    "score": 89.58,
    "guildId": "g7"
  },
  {
    "id": "u1458",
    "name": "Arjun D.",
    "score": 47.27,
    "guildId": "g7"
  },
  {
    "id": "u1459",
    "name": "Sophia V.",
    "score": 121.12,
    "guildId": "g10"
  },
  {
    "id": "u1460",
    "name": "Emma B.",
    "score": 128.47,
    "guildId": "g7"
  },
  {
    "id": "u1461",
    "name": "Vikram M.",
    "score": 61.95,
    "guildId": "g6"
  },
  {
    "id": "u1462",
    "name": "Swati P.",
    "score": 125.48,
    "guildId": "g7"
  },
  {
    "id": "u1463",
    "name": "Karan Y.",
    "score": 98.01,
    "guildId": "g9"
  },
  {
    "id": "u1464",
    "name": "Luka M.",
    "score": 58.4,
    "guildId": "g5"
  },
  {
    "id": "u1465",
    "name": "Pooja Y.",
    "score": 41.68,
    "guildId": "g9"
  },
  {
    "id": "u1466",
    "name": "Sneha A.",
    "score": 100.8,
    "guildId": "g5"
  },
  {
    "id": "u1467",
    "name": "Rohit S.",
    "score": 135.58,
    "guildId": "g5"
  },
  {
    "id": "u1468",
    "name": "Arjun M.",
    "score": 121.23,
    "guildId": "g7"
  },
  {
    "id": "u1469",
    "name": "Ishita A.",
    "score": 58.15,
    "guildId": "g9"
  },
  {
    "id": "u1470",
    "name": "Fatima T.",
    "score": 99.11,
    "guildId": "g2"
  },
  {
    "id": "u1471",
    "name": "Priya B.",
    "score": 31.63,
    "guildId": "g7"
  },
  {
    "id": "u1472",
    "name": "Amit S.",
    "score": 141.95,
    "guildId": "g9"
  },
  {
    "id": "u1473",
    "name": "Ananya V.",
    "score": 108.46,
    "guildId": "g9"
  },
  {
    "id": "u1474",
    "name": "Siddharth T.",
    "score": 113.01,
    "guildId": "g2"
  },
  {
    "id": "u1475",
    "name": "Ishita Z.",
    "score": 127.12,
    "guildId": "g4"
  },
  {
    "id": "u1476",
    "name": "Akash P.",
    "score": 33.29,
    "guildId": "g10"
  },
  {
    "id": "u1477",
    "name": "Rohit Y.",
    "score": 87.4,
    "guildId": "g8"
  },
  {
    "id": "u1478",
    "name": "Luka Z.",
    "score": 82.14,
    "guildId": "g5"
  },
  {
    "id": "u1479",
    "name": "Mateo T.",
    "score": 78.68,
    "guildId": "g10"
  },
  {
    "id": "u1480",
    "name": "Ishita S.",
    "score": 110.25,
    "guildId": "g8"
  },
  {
    "id": "u1481",
    "name": "Yuki C.",
    "score": 111.25,
    "guildId": "g7"
  },
  {
    "id": "u1482",
    "name": "Ravi W.",
    "score": 17.68,
    "guildId": "g8"
  },
  {
    "id": "u1483",
    "name": "Greta V.",
    "score": 60.97,
    "guildId": "g8"
  },
  {
    "id": "u1484",
    "name": "Rahul V.",
    "score": 55.74,
    "guildId": "g7"
  },
  {
    "id": "u1485",
    "name": "Hiro W.",
    "score": 47.78,
    "guildId": "g2"
  },
  {
    "id": "u1486",
    "name": "Megha M.",
    "score": 10.1,
    "guildId": "g3"
  },
  {
    "id": "u1487",
    "name": "Rohit K.",
    "score": 142.35,
    "guildId": "g8"
  },
  {
    "id": "u1488",
    "name": "Ravi S.",
    "score": 86.62,
    "guildId": "g7"
  },
  {
    "id": "u1489",
    "name": "Akash B.",
    "score": 88.75,
    "guildId": "g7"
  },
  {
    "id": "u1490",
    "name": "Siddharth W.",
    "score": 16.88,
    "guildId": "g1"
  },
  {
    "id": "u1491",
    "name": "Manish Z.",
    "score": 19.83,
    "guildId": "g9"
  },
  {
    "id": "u1492",
    "name": "Siddharth V.",
    "score": 34.03,
    "guildId": "g9"
  },
  {
    "id": "u1493",
    "name": "Suresh W.",
    "score": 121.89,
    "guildId": "g5"
  },
  {
    "id": "u1494",
    "name": "Arjun M.",
    "score": 46.02,
    "guildId": "g7"
  },
  {
    "id": "u1495",
    "name": "Liam B.",
    "score": 124.83,
    "guildId": "g1"
  },
  {
    "id": "u1496",
    "name": "Fatima Y.",
    "score": 68.21,
    "guildId": "g5"
  },
  {
    "id": "u1497",
    "name": "Neha R.",
    "score": 149.15,
    "guildId": "g10"
  },
  {
    "id": "u1498",
    "name": "John V.",
    "score": 71.56,
    "guildId": "g6"
  },
  {
    "id": "u1499",
    "name": "Vikram C.",
    "score": 64.45,
    "guildId": "g7"
  },
  {
    "id": "u1500",
    "name": "Amit S.",
    "score": 55.28,
    "guildId": "g10"
  },
  {
    "id": "u1501",
    "name": "Ramesh T.",
    "score": 39.32,
    "guildId": "g2"
  },
  {
    "id": "u1502",
    "name": "Ananya W.",
    "score": 111.78,
    "guildId": "g7"
  },
  {
    "id": "u1503",
    "name": "Suresh W.",
    "score": 111.19,
    "guildId": "g2"
  },
  {
    "id": "u1504",
    "name": "Rahul B.",
    "score": 64.08,
    "guildId": "g2"
  },
  {
    "id": "u1505",
    "name": "Chen R.",
    "score": 20.09,
    "guildId": "g7"
  },
  {
    "id": "u1506",
    "name": "Chen Y.",
    "score": 131.97,
    "guildId": "g10"
  },
  {
    "id": "u1507",
    "name": "Mateo P.",
    "score": 143.04,
    "guildId": "g6"
  },
  {
    "id": "u1508",
    "name": "Anjali Z.",
    "score": 134.75,
    "guildId": "g8"
  },
  {
    "id": "u1509",
    "name": "Akash W.",
    "score": 111.16,
    "guildId": "g9"
  },
  {
    "id": "u1510",
    "name": "Manish P.",
    "score": 124.19,
    "guildId": "g1"
  },
  {
    "id": "u1511",
    "name": "Greta P.",
    "score": 23.55,
    "guildId": "g2"
  },
  {
    "id": "u1512",
    "name": "Amit V.",
    "score": 79.25,
    "guildId": "g5"
  },
  {
    "id": "u1513",
    "name": "Sneha M.",
    "score": 113.46,
    "guildId": "g8"
  },
  {
    "id": "u1514",
    "name": "Anjali W.",
    "score": 55.57,
    "guildId": "g7"
  },
  {
    "id": "u1515",
    "name": "Anjali S.",
    "score": 46.06,
    "guildId": "g7"
  },
  {
    "id": "u1516",
    "name": "Aditya C.",
    "score": 96.75,
    "guildId": "g7"
  },
  {
    "id": "u1517",
    "name": "Arjun A.",
    "score": 21.15,
    "guildId": "g4"
  },
  {
    "id": "u1518",
    "name": "Megha D.",
    "score": 41.71,
    "guildId": "g5"
  },
  {
    "id": "u1519",
    "name": "Sophia Z.",
    "score": 83.31,
    "guildId": "g6"
  },
  {
    "id": "u1520",
    "name": "Akash V.",
    "score": 46.18,
    "guildId": "g1"
  },
  {
    "id": "u1521",
    "name": "Rahul D.",
    "score": 89.31,
    "guildId": "g1"
  },
  {
    "id": "u1522",
    "name": "Kavya P.",
    "score": 41.79,
    "guildId": "g9"
  },
  {
    "id": "u1523",
    "name": "Ananya W.",
    "score": 71.63,
    "guildId": "g8"
  },
  {
    "id": "u1524",
    "name": "Greta A.",
    "score": 96.63,
    "guildId": "g9"
  },
  {
    "id": "u1525",
    "name": "Vikram R.",
    "score": 99.23,
    "guildId": "g4"
  },
  {
    "id": "u1526",
    "name": "Pooja Y.",
    "score": 119.48,
    "guildId": "g1"
  },
  {
    "id": "u1527",
    "name": "Vikram S.",
    "score": 118.16,
    "guildId": "g4"
  },
  {
    "id": "u1528",
    "name": "Kavya K.",
    "score": 91.64,
    "guildId": "g4"
  },
  {
    "id": "u1529",
    "name": "Vikram R.",
    "score": 68.2,
    "guildId": "g1"
  },
  {
    "id": "u1530",
    "name": "Olivia A.",
    "score": 148.14,
    "guildId": "g8"
  },
  {
    "id": "u1531",
    "name": "Priya K.",
    "score": 125.37,
    "guildId": "g2"
  },
  {
    "id": "u1532",
    "name": "Kavya Z.",
    "score": 52.63,
    "guildId": "g6"
  },
  {
    "id": "u1533",
    "name": "Swati Y.",
    "score": 21.78,
    "guildId": "g9"
  },
  {
    "id": "u1534",
    "name": "Akash Z.",
    "score": 16.92,
    "guildId": "g1"
  },
  {
    "id": "u1535",
    "name": "Manish Z.",
    "score": 39.85,
    "guildId": "g7"
  },
  {
    "id": "u1536",
    "name": "Rohit A.",
    "score": 128.39,
    "guildId": "g7"
  },
  {
    "id": "u1537",
    "name": "Arjun P.",
    "score": 49.09,
    "guildId": "g9"
  },
  {
    "id": "u1538",
    "name": "Anjali Z.",
    "score": 39,
    "guildId": "g3"
  },
  {
    "id": "u1539",
    "name": "Ananya P.",
    "score": 45.15,
    "guildId": "g1"
  },
  {
    "id": "u1540",
    "name": "Chen D.",
    "score": 83.56,
    "guildId": "g10"
  },
  {
    "id": "u1541",
    "name": "Priya A.",
    "score": 79.99,
    "guildId": "g1"
  },
  {
    "id": "u1542",
    "name": "Kavya P.",
    "score": 11.43,
    "guildId": "g5"
  },
  {
    "id": "u1543",
    "name": "Divya M.",
    "score": 44.14,
    "guildId": "g5"
  },
  {
    "id": "u1544",
    "name": "Amit A.",
    "score": 16.42,
    "guildId": "g1"
  },
  {
    "id": "u1545",
    "name": "Noah T.",
    "score": 44.25,
    "guildId": "g1"
  },
  {
    "id": "u1546",
    "name": "Rahul Z.",
    "score": 15.05,
    "guildId": "g6"
  },
  {
    "id": "u1547",
    "name": "Noah Y.",
    "score": 40.64,
    "guildId": "g10"
  },
  {
    "id": "u1548",
    "name": "Vikram W.",
    "score": 57.29,
    "guildId": "g7"
  },
  {
    "id": "u1549",
    "name": "Olivia R.",
    "score": 28.61,
    "guildId": "g10"
  },
  {
    "id": "u1550",
    "name": "Luka Z.",
    "score": 91.25,
    "guildId": "g6"
  },
  {
    "id": "u1551",
    "name": "Sneha Y.",
    "score": 39.72,
    "guildId": "g4"
  },
  {
    "id": "u1552",
    "name": "Priya D.",
    "score": 132.27,
    "guildId": "g2"
  },
  {
    "id": "u1553",
    "name": "Akash D.",
    "score": 110.92,
    "guildId": "g8"
  },
  {
    "id": "u1554",
    "name": "Rahul W.",
    "score": 55.03,
    "guildId": "g3"
  },
  {
    "id": "u1555",
    "name": "Amit V.",
    "score": 13.87,
    "guildId": "g9"
  },
  {
    "id": "u1556",
    "name": "Rohit V.",
    "score": 59.94,
    "guildId": "g9"
  },
  {
    "id": "u1557",
    "name": "Ravi C.",
    "score": 83.98,
    "guildId": "g4"
  },
  {
    "id": "u1558",
    "name": "Anjali P.",
    "score": 128.4,
    "guildId": "g1"
  },
  {
    "id": "u1559",
    "name": "Ravi Z.",
    "score": 108.61,
    "guildId": "g3"
  },
  {
    "id": "u1560",
    "name": "Suresh P.",
    "score": 39.13,
    "guildId": "g10"
  },
  {
    "id": "u1561",
    "name": "Suresh R.",
    "score": 82.33,
    "guildId": "g8"
  },
  {
    "id": "u1562",
    "name": "Akash S.",
    "score": 39.68,
    "guildId": "g10"
  },
  {
    "id": "u1563",
    "name": "Arjun K.",
    "score": 119.25,
    "guildId": "g9"
  },
  {
    "id": "u1564",
    "name": "Vikram T.",
    "score": 145.84,
    "guildId": "g6"
  },
  {
    "id": "u1565",
    "name": "Kavya K.",
    "score": 21.6,
    "guildId": "g8"
  },
  {
    "id": "u1566",
    "name": "Ramesh A.",
    "score": 57.19,
    "guildId": "g4"
  },
  {
    "id": "u1567",
    "name": "Olivia P.",
    "score": 17.51,
    "guildId": "g6"
  },
  {
    "id": "u1568",
    "name": "Akash B.",
    "score": 106.38,
    "guildId": "g5"
  },
  {
    "id": "u1569",
    "name": "Priya D.",
    "score": 26.82,
    "guildId": "g6"
  },
  {
    "id": "u1570",
    "name": "Arjun R.",
    "score": 79.6,
    "guildId": "g2"
  },
  {
    "id": "u1571",
    "name": "Ramesh W.",
    "score": 44.94,
    "guildId": "g5"
  },
  {
    "id": "u1572",
    "name": "Vikram R.",
    "score": 11.3,
    "guildId": "g5"
  },
  {
    "id": "u1573",
    "name": "Arjun D.",
    "score": 82.33,
    "guildId": "g8"
  },
  {
    "id": "u1574",
    "name": "Rohit Y.",
    "score": 29.8,
    "guildId": "g3"
  },
  {
    "id": "u1575",
    "name": "Arjun K.",
    "score": 67.49,
    "guildId": "g4"
  },
  {
    "id": "u1576",
    "name": "Ananya Y.",
    "score": 136.31,
    "guildId": "g10"
  },
  {
    "id": "u1577",
    "name": "Vikram B.",
    "score": 41.91,
    "guildId": "g1"
  },
  {
    "id": "u1578",
    "name": "Fatima W.",
    "score": 146.95,
    "guildId": "g4"
  },
  {
    "id": "u1579",
    "name": "Vikram V.",
    "score": 95.47,
    "guildId": "g3"
  },
  {
    "id": "u1580",
    "name": "Pooja K.",
    "score": 117.71,
    "guildId": "g10"
  },
  {
    "id": "u1581",
    "name": "Divya Z.",
    "score": 10.41,
    "guildId": "g7"
  },
  {
    "id": "u1582",
    "name": "Ishita B.",
    "score": 28.95,
    "guildId": "g1"
  },
  {
    "id": "u1583",
    "name": "Ravi C.",
    "score": 146.92,
    "guildId": "g9"
  },
  {
    "id": "u1584",
    "name": "Arjun T.",
    "score": 49.85,
    "guildId": "g1"
  },
  {
    "id": "u1585",
    "name": "Arjun A.",
    "score": 146.68,
    "guildId": "g6"
  },
  {
    "id": "u1586",
    "name": "Arjun R.",
    "score": 105.94,
    "guildId": "g5"
  },
  {
    "id": "u1587",
    "name": "Pooja C.",
    "score": 86.23,
    "guildId": "g5"
  },
  {
    "id": "u1588",
    "name": "Ananya Y.",
    "score": 22.92,
    "guildId": "g6"
  },
  {
    "id": "u1589",
    "name": "Hans C.",
    "score": 16.08,
    "guildId": "g4"
  },
  {
    "id": "u1590",
    "name": "Divya P.",
    "score": 128.09,
    "guildId": "g6"
  },
  {
    "id": "u1591",
    "name": "Swati V.",
    "score": 115.39,
    "guildId": "g2"
  },
  {
    "id": "u1592",
    "name": "Kavya D.",
    "score": 14.52,
    "guildId": "g4"
  },
  {
    "id": "u1593",
    "name": "Ishita V.",
    "score": 20.07,
    "guildId": "g3"
  },
  {
    "id": "u1594",
    "name": "Kavya B.",
    "score": 145.73,
    "guildId": "g4"
  },
  {
    "id": "u1595",
    "name": "Karan T.",
    "score": 80.53,
    "guildId": "g4"
  },
  {
    "id": "u1596",
    "name": "Neha C.",
    "score": 83.54,
    "guildId": "g4"
  },
  {
    "id": "u1597",
    "name": "Suresh K.",
    "score": 79.61,
    "guildId": "g3"
  },
  {
    "id": "u1598",
    "name": "Aditya Z.",
    "score": 12.56,
    "guildId": "g4"
  },
  {
    "id": "u1599",
    "name": "Ishita R.",
    "score": 119.71,
    "guildId": "g8"
  },
  {
    "id": "u1600",
    "name": "Kavya C.",
    "score": 12.61,
    "guildId": "g3"
  },
  {
    "id": "u1601",
    "name": "Manish C.",
    "score": 103.72,
    "guildId": "g8"
  },
  {
    "id": "u1602",
    "name": "Neha Y.",
    "score": 87.63,
    "guildId": "g9"
  },
  {
    "id": "u1603",
    "name": "Rahul T.",
    "score": 94.45,
    "guildId": "g2"
  },
  {
    "id": "u1604",
    "name": "Sophia R.",
    "score": 19.32,
    "guildId": "g2"
  },
  {
    "id": "u1605",
    "name": "Anjali K.",
    "score": 94.02,
    "guildId": "g2"
  },
  {
    "id": "u1606",
    "name": "Ananya P.",
    "score": 67.56,
    "guildId": "g7"
  },
  {
    "id": "u1607",
    "name": "Arjun W.",
    "score": 42.87,
    "guildId": "g5"
  },
  {
    "id": "u1608",
    "name": "Aditya M.",
    "score": 42.3,
    "guildId": "g6"
  },
  {
    "id": "u1609",
    "name": "Priya C.",
    "score": 47.03,
    "guildId": "g5"
  },
  {
    "id": "u1610",
    "name": "Amit R.",
    "score": 79.63,
    "guildId": "g6"
  },
  {
    "id": "u1611",
    "name": "Chen D.",
    "score": 35.31,
    "guildId": "g8"
  },
  {
    "id": "u1612",
    "name": "Kavya W.",
    "score": 96.97,
    "guildId": "g7"
  },
  {
    "id": "u1613",
    "name": "Swati V.",
    "score": 123.96,
    "guildId": "g6"
  },
  {
    "id": "u1614",
    "name": "Anjali Z.",
    "score": 122.76,
    "guildId": "g7"
  },
  {
    "id": "u1615",
    "name": "Liam D.",
    "score": 145.59,
    "guildId": "g10"
  },
  {
    "id": "u1616",
    "name": "Ananya Z.",
    "score": 139.44,
    "guildId": "g2"
  },
  {
    "id": "u1617",
    "name": "Swati B.",
    "score": 125.63,
    "guildId": "g8"
  },
  {
    "id": "u1618",
    "name": "Ishita A.",
    "score": 27.89,
    "guildId": "g3"
  },
  {
    "id": "u1619",
    "name": "Olivia P.",
    "score": 63.39,
    "guildId": "g10"
  },
  {
    "id": "u1620",
    "name": "Megha R.",
    "score": 66.55,
    "guildId": "g8"
  },
  {
    "id": "u1621",
    "name": "Rahul B.",
    "score": 87.94,
    "guildId": "g4"
  },
  {
    "id": "u1622",
    "name": "Suresh W.",
    "score": 88.6,
    "guildId": "g9"
  },
  {
    "id": "u1623",
    "name": "Ananya C.",
    "score": 18.57,
    "guildId": "g5"
  },
  {
    "id": "u1624",
    "name": "Arjun R.",
    "score": 71.27,
    "guildId": "g9"
  },
  {
    "id": "u1625",
    "name": "Ramesh C.",
    "score": 140.64,
    "guildId": "g3"
  },
  {
    "id": "u1626",
    "name": "Kavya S.",
    "score": 11.78,
    "guildId": "g10"
  },
  {
    "id": "u1627",
    "name": "Anjali W.",
    "score": 24.31,
    "guildId": "g2"
  },
  {
    "id": "u1628",
    "name": "Amit D.",
    "score": 79.61,
    "guildId": "g7"
  },
  {
    "id": "u1629",
    "name": "Aditya B.",
    "score": 113.73,
    "guildId": "g1"
  },
  {
    "id": "u1630",
    "name": "Neha D.",
    "score": 10.44,
    "guildId": "g3"
  },
  {
    "id": "u1631",
    "name": "Amit M.",
    "score": 129.31,
    "guildId": "g8"
  },
  {
    "id": "u1632",
    "name": "Noah C.",
    "score": 30.51,
    "guildId": "g10"
  },
  {
    "id": "u1633",
    "name": "Rohit D.",
    "score": 20.74,
    "guildId": "g7"
  },
  {
    "id": "u1634",
    "name": "Swati W.",
    "score": 129.02,
    "guildId": "g3"
  },
  {
    "id": "u1635",
    "name": "Olivia M.",
    "score": 109.04,
    "guildId": "g6"
  },
  {
    "id": "u1636",
    "name": "Rahul S.",
    "score": 124.35,
    "guildId": "g2"
  },
  {
    "id": "u1637",
    "name": "Kavya P.",
    "score": 122.37,
    "guildId": "g4"
  },
  {
    "id": "u1638",
    "name": "Neha K.",
    "score": 41.21,
    "guildId": "g3"
  },
  {
    "id": "u1639",
    "name": "Priya R.",
    "score": 81.15,
    "guildId": "g6"
  },
  {
    "id": "u1640",
    "name": "Pooja R.",
    "score": 52,
    "guildId": "g7"
  },
  {
    "id": "u1641",
    "name": "Kavya Y.",
    "score": 84.5,
    "guildId": "g2"
  },
  {
    "id": "u1642",
    "name": "Aditya R.",
    "score": 60,
    "guildId": "g3"
  },
  {
    "id": "u1643",
    "name": "Yuki C.",
    "score": 54.17,
    "guildId": "g10"
  },
  {
    "id": "u1644",
    "name": "Fatima C.",
    "score": 33.03,
    "guildId": "g5"
  },
  {
    "id": "u1645",
    "name": "Divya C.",
    "score": 80.5,
    "guildId": "g5"
  },
  {
    "id": "u1646",
    "name": "Anjali W.",
    "score": 34.1,
    "guildId": "g4"
  },
  {
    "id": "u1647",
    "name": "Rahul A.",
    "score": 129.71,
    "guildId": "g6"
  },
  {
    "id": "u1648",
    "name": "Siddharth C.",
    "score": 132.89,
    "guildId": "g4"
  },
  {
    "id": "u1649",
    "name": "Kavya T.",
    "score": 106.54,
    "guildId": "g7"
  },
  {
    "id": "u1650",
    "name": "John D.",
    "score": 117.66,
    "guildId": "g5"
  },
  {
    "id": "u1651",
    "name": "Manish C.",
    "score": 113.3,
    "guildId": "g10"
  },
  {
    "id": "u1652",
    "name": "Ananya D.",
    "score": 12.98,
    "guildId": "g10"
  },
  {
    "id": "u1653",
    "name": "Siddharth K.",
    "score": 28.23,
    "guildId": "g2"
  },
  {
    "id": "u1654",
    "name": "Rohit K.",
    "score": 125.66,
    "guildId": "g2"
  },
  {
    "id": "u1655",
    "name": "Ananya Y.",
    "score": 36.08,
    "guildId": "g9"
  },
  {
    "id": "u1656",
    "name": "Mateo T.",
    "score": 99.15,
    "guildId": "g1"
  },
  {
    "id": "u1657",
    "name": "Manish K.",
    "score": 10.23,
    "guildId": "g3"
  },
  {
    "id": "u1658",
    "name": "Mateo D.",
    "score": 52.69,
    "guildId": "g7"
  },
  {
    "id": "u1659",
    "name": "Pooja D.",
    "score": 138.12,
    "guildId": "g4"
  },
  {
    "id": "u1660",
    "name": "Aditya V.",
    "score": 102.47,
    "guildId": "g8"
  },
  {
    "id": "u1661",
    "name": "Priya T.",
    "score": 15.02,
    "guildId": "g9"
  },
  {
    "id": "u1662",
    "name": "Manish D.",
    "score": 63.6,
    "guildId": "g9"
  },
  {
    "id": "u1663",
    "name": "Kavya T.",
    "score": 147.38,
    "guildId": "g9"
  },
  {
    "id": "u1664",
    "name": "Anjali A.",
    "score": 79.97,
    "guildId": "g6"
  },
  {
    "id": "u1665",
    "name": "Priya M.",
    "score": 91.88,
    "guildId": "g8"
  },
  {
    "id": "u1666",
    "name": "Anjali D.",
    "score": 54.63,
    "guildId": "g2"
  },
  {
    "id": "u1667",
    "name": "Fatima T.",
    "score": 140.36,
    "guildId": "g9"
  },
  {
    "id": "u1668",
    "name": "Wei A.",
    "score": 60.86,
    "guildId": "g2"
  },
  {
    "id": "u1669",
    "name": "Vikram K.",
    "score": 110.17,
    "guildId": "g1"
  },
  {
    "id": "u1670",
    "name": "Anjali D.",
    "score": 60.92,
    "guildId": "g4"
  },
  {
    "id": "u1671",
    "name": "Divya A.",
    "score": 62.01,
    "guildId": "g4"
  },
  {
    "id": "u1672",
    "name": "Swati P.",
    "score": 42.72,
    "guildId": "g7"
  },
  {
    "id": "u1673",
    "name": "Megha R.",
    "score": 105.04,
    "guildId": "g10"
  },
  {
    "id": "u1674",
    "name": "Manish V.",
    "score": 143.83,
    "guildId": "g10"
  },
  {
    "id": "u1675",
    "name": "Kavya V.",
    "score": 12.22,
    "guildId": "g7"
  },
  {
    "id": "u1676",
    "name": "Divya B.",
    "score": 57.85,
    "guildId": "g7"
  },
  {
    "id": "u1677",
    "name": "Akash P.",
    "score": 112.52,
    "guildId": "g1"
  },
  {
    "id": "u1678",
    "name": "Divya B.",
    "score": 16.21,
    "guildId": "g7"
  },
  {
    "id": "u1679",
    "name": "Vikram W.",
    "score": 83.99,
    "guildId": "g1"
  },
  {
    "id": "u1680",
    "name": "Ramesh D.",
    "score": 71.3,
    "guildId": "g3"
  },
  {
    "id": "u1681",
    "name": "Priya B.",
    "score": 128.93,
    "guildId": "g2"
  },
  {
    "id": "u1682",
    "name": "Siddharth C.",
    "score": 116.85,
    "guildId": "g8"
  },
  {
    "id": "u1683",
    "name": "Kavya Z.",
    "score": 43,
    "guildId": "g7"
  },
  {
    "id": "u1684",
    "name": "Rohit Z.",
    "score": 132.44,
    "guildId": "g3"
  },
  {
    "id": "u1685",
    "name": "Kavya S.",
    "score": 102.22,
    "guildId": "g7"
  },
  {
    "id": "u1686",
    "name": "Arjun Y.",
    "score": 136.7,
    "guildId": "g3"
  },
  {
    "id": "u1687",
    "name": "Manish V.",
    "score": 36.89,
    "guildId": "g9"
  },
  {
    "id": "u1688",
    "name": "Rohit Y.",
    "score": 94.67,
    "guildId": "g5"
  },
  {
    "id": "u1689",
    "name": "Manish T.",
    "score": 126.59,
    "guildId": "g2"
  },
  {
    "id": "u1690",
    "name": "Anjali C.",
    "score": 110.18,
    "guildId": "g1"
  },
  {
    "id": "u1691",
    "name": "Arjun S.",
    "score": 71.7,
    "guildId": "g2"
  },
  {
    "id": "u1692",
    "name": "Ali Z.",
    "score": 88.95,
    "guildId": "g9"
  },
  {
    "id": "u1693",
    "name": "Vikram S.",
    "score": 139.5,
    "guildId": "g3"
  },
  {
    "id": "u1694",
    "name": "Aditya Z.",
    "score": 44.19,
    "guildId": "g8"
  },
  {
    "id": "u1695",
    "name": "Divya Z.",
    "score": 29.31,
    "guildId": "g4"
  },
  {
    "id": "u1696",
    "name": "Ravi K.",
    "score": 35.77,
    "guildId": "g9"
  },
  {
    "id": "u1697",
    "name": "Kavya P.",
    "score": 99.34,
    "guildId": "g4"
  },
  {
    "id": "u1698",
    "name": "Rahul Y.",
    "score": 68.5,
    "guildId": "g6"
  },
  {
    "id": "u1699",
    "name": "Kavya V.",
    "score": 23.73,
    "guildId": "g4"
  },
  {
    "id": "u1700",
    "name": "Noah S.",
    "score": 42.54,
    "guildId": "g5"
  },
  {
    "id": "u1701",
    "name": "Priya S.",
    "score": 128.47,
    "guildId": "g4"
  },
  {
    "id": "u1702",
    "name": "Pooja W.",
    "score": 12.1,
    "guildId": "g3"
  },
  {
    "id": "u1703",
    "name": "Amit D.",
    "score": 16.06,
    "guildId": "g1"
  },
  {
    "id": "u1704",
    "name": "Priya C.",
    "score": 72.07,
    "guildId": "g2"
  },
  {
    "id": "u1705",
    "name": "Suresh D.",
    "score": 77.91,
    "guildId": "g7"
  },
  {
    "id": "u1706",
    "name": "Chen S.",
    "score": 35.54,
    "guildId": "g9"
  },
  {
    "id": "u1707",
    "name": "Liam D.",
    "score": 105.84,
    "guildId": "g6"
  },
  {
    "id": "u1708",
    "name": "John W.",
    "score": 126.79,
    "guildId": "g8"
  },
  {
    "id": "u1709",
    "name": "Akash Y.",
    "score": 147.08,
    "guildId": "g5"
  },
  {
    "id": "u1710",
    "name": "Vikram D.",
    "score": 59.06,
    "guildId": "g4"
  },
  {
    "id": "u1711",
    "name": "Priya Y.",
    "score": 83.82,
    "guildId": "g4"
  },
  {
    "id": "u1712",
    "name": "Ravi P.",
    "score": 134.62,
    "guildId": "g3"
  },
  {
    "id": "u1713",
    "name": "Amit T.",
    "score": 70.62,
    "guildId": "g2"
  },
  {
    "id": "u1714",
    "name": "Megha P.",
    "score": 40.37,
    "guildId": "g6"
  },
  {
    "id": "u1715",
    "name": "Mateo T.",
    "score": 138.45,
    "guildId": "g10"
  },
  {
    "id": "u1716",
    "name": "Ramesh V.",
    "score": 32.27,
    "guildId": "g3"
  },
  {
    "id": "u1717",
    "name": "Pooja R.",
    "score": 85.79,
    "guildId": "g7"
  },
  {
    "id": "u1718",
    "name": "Suresh B.",
    "score": 16.35,
    "guildId": "g9"
  },
  {
    "id": "u1719",
    "name": "Karan M.",
    "score": 19.14,
    "guildId": "g3"
  },
  {
    "id": "u1720",
    "name": "Swati W.",
    "score": 56.1,
    "guildId": "g9"
  },
  {
    "id": "u1721",
    "name": "Neha P.",
    "score": 62.14,
    "guildId": "g5"
  },
  {
    "id": "u1722",
    "name": "Neha W.",
    "score": 143.89,
    "guildId": "g10"
  },
  {
    "id": "u1723",
    "name": "Ishita R.",
    "score": 108.96,
    "guildId": "g6"
  },
  {
    "id": "u1724",
    "name": "Vikram R.",
    "score": 36.51,
    "guildId": "g4"
  },
  {
    "id": "u1725",
    "name": "Chen V.",
    "score": 127.12,
    "guildId": "g7"
  },
  {
    "id": "u1726",
    "name": "Chen V.",
    "score": 86.17,
    "guildId": "g9"
  },
  {
    "id": "u1727",
    "name": "Suresh R.",
    "score": 115.24,
    "guildId": "g4"
  },
  {
    "id": "u1728",
    "name": "Megha M.",
    "score": 74.4,
    "guildId": "g10"
  },
  {
    "id": "u1729",
    "name": "Ishita K.",
    "score": 101.23,
    "guildId": "g3"
  },
  {
    "id": "u1730",
    "name": "Aditya A.",
    "score": 53.91,
    "guildId": "g1"
  },
  {
    "id": "u1731",
    "name": "Manish M.",
    "score": 98.97,
    "guildId": "g10"
  },
  {
    "id": "u1732",
    "name": "Ramesh S.",
    "score": 43.12,
    "guildId": "g6"
  },
  {
    "id": "u1733",
    "name": "Arjun R.",
    "score": 94.24,
    "guildId": "g3"
  },
  {
    "id": "u1734",
    "name": "Ali K.",
    "score": 60.79,
    "guildId": "g6"
  },
  {
    "id": "u1735",
    "name": "Neha Z.",
    "score": 36.34,
    "guildId": "g10"
  },
  {
    "id": "u1736",
    "name": "Ravi A.",
    "score": 117.17,
    "guildId": "g6"
  },
  {
    "id": "u1737",
    "name": "Karan T.",
    "score": 24,
    "guildId": "g1"
  },
  {
    "id": "u1738",
    "name": "Vikram C.",
    "score": 99,
    "guildId": "g10"
  },
  {
    "id": "u1739",
    "name": "Manish Z.",
    "score": 142.02,
    "guildId": "g10"
  },
  {
    "id": "u1740",
    "name": "Amit Y.",
    "score": 80.88,
    "guildId": "g2"
  },
  {
    "id": "u1741",
    "name": "Suresh A.",
    "score": 138.81,
    "guildId": "g8"
  },
  {
    "id": "u1742",
    "name": "Suresh B.",
    "score": 76.58,
    "guildId": "g10"
  },
  {
    "id": "u1743",
    "name": "Anjali D.",
    "score": 91.15,
    "guildId": "g2"
  },
  {
    "id": "u1744",
    "name": "Akash P.",
    "score": 65.33,
    "guildId": "g3"
  },
  {
    "id": "u1745",
    "name": "Arjun B.",
    "score": 95.32,
    "guildId": "g7"
  },
  {
    "id": "u1746",
    "name": "Priya V.",
    "score": 83.3,
    "guildId": "g8"
  },
  {
    "id": "u1747",
    "name": "Pooja K.",
    "score": 109.13,
    "guildId": "g7"
  },
  {
    "id": "u1748",
    "name": "Swati Y.",
    "score": 137.96,
    "guildId": "g5"
  },
  {
    "id": "u1749",
    "name": "Ishita P.",
    "score": 47.18,
    "guildId": "g9"
  },
  {
    "id": "u1750",
    "name": "Pooja V.",
    "score": 59.92,
    "guildId": "g8"
  },
  {
    "id": "u1751",
    "name": "Priya K.",
    "score": 76.04,
    "guildId": "g6"
  },
  {
    "id": "u1752",
    "name": "Ramesh D.",
    "score": 83.76,
    "guildId": "g9"
  },
  {
    "id": "u1753",
    "name": "Aditya R.",
    "score": 71.05,
    "guildId": "g1"
  },
  {
    "id": "u1754",
    "name": "Pooja D.",
    "score": 117.29,
    "guildId": "g9"
  },
  {
    "id": "u1755",
    "name": "Neha A.",
    "score": 123.45,
    "guildId": "g7"
  },
  {
    "id": "u1756",
    "name": "Ramesh M.",
    "score": 47.67,
    "guildId": "g1"
  },
  {
    "id": "u1757",
    "name": "Vikram Z.",
    "score": 113.47,
    "guildId": "g9"
  },
  {
    "id": "u1758",
    "name": "Karan S.",
    "score": 93.31,
    "guildId": "g9"
  },
  {
    "id": "u1759",
    "name": "Mia P.",
    "score": 30.44,
    "guildId": "g4"
  },
  {
    "id": "u1760",
    "name": "Olivia V.",
    "score": 149.41,
    "guildId": "g8"
  },
  {
    "id": "u1761",
    "name": "Akash T.",
    "score": 46.47,
    "guildId": "g9"
  },
  {
    "id": "u1762",
    "name": "Pooja Z.",
    "score": 30.35,
    "guildId": "g2"
  },
  {
    "id": "u1763",
    "name": "Kavya M.",
    "score": 73.99,
    "guildId": "g7"
  },
  {
    "id": "u1764",
    "name": "Isabella W.",
    "score": 25.38,
    "guildId": "g5"
  },
  {
    "id": "u1765",
    "name": "Ramesh C.",
    "score": 111.84,
    "guildId": "g3"
  },
  {
    "id": "u1766",
    "name": "Ramesh P.",
    "score": 60.97,
    "guildId": "g10"
  },
  {
    "id": "u1767",
    "name": "Priya P.",
    "score": 73.84,
    "guildId": "g7"
  },
  {
    "id": "u1768",
    "name": "Suresh C.",
    "score": 130.28,
    "guildId": "g10"
  },
  {
    "id": "u1769",
    "name": "Sneha C.",
    "score": 71.96,
    "guildId": "g10"
  },
  {
    "id": "u1770",
    "name": "Amit T.",
    "score": 110.74,
    "guildId": "g10"
  },
  {
    "id": "u1771",
    "name": "Karan Z.",
    "score": 46.38,
    "guildId": "g10"
  },
  {
    "id": "u1772",
    "name": "Ishita P.",
    "score": 33.46,
    "guildId": "g7"
  },
  {
    "id": "u1773",
    "name": "Megha M.",
    "score": 134.94,
    "guildId": "g9"
  },
  {
    "id": "u1774",
    "name": "Ishita D.",
    "score": 47.06,
    "guildId": "g9"
  },
  {
    "id": "u1775",
    "name": "Ananya V.",
    "score": 54.7,
    "guildId": "g8"
  },
  {
    "id": "u1776",
    "name": "Anjali S.",
    "score": 149.72,
    "guildId": "g6"
  },
  {
    "id": "u1777",
    "name": "Ramesh A.",
    "score": 145.99,
    "guildId": "g3"
  },
  {
    "id": "u1778",
    "name": "Megha A.",
    "score": 108.01,
    "guildId": "g9"
  },
  {
    "id": "u1779",
    "name": "Ramesh S.",
    "score": 98,
    "guildId": "g1"
  },
  {
    "id": "u1780",
    "name": "Sophia M.",
    "score": 121.08,
    "guildId": "g4"
  },
  {
    "id": "u1781",
    "name": "Olivia W.",
    "score": 125.88,
    "guildId": "g5"
  },
  {
    "id": "u1782",
    "name": "Sneha P.",
    "score": 19.81,
    "guildId": "g4"
  },
  {
    "id": "u1783",
    "name": "Ishita D.",
    "score": 26.95,
    "guildId": "g1"
  },
  {
    "id": "u1784",
    "name": "Siddharth A.",
    "score": 146.78,
    "guildId": "g5"
  },
  {
    "id": "u1785",
    "name": "Aditya T.",
    "score": 55.24,
    "guildId": "g1"
  },
  {
    "id": "u1786",
    "name": "Fatima K.",
    "score": 87.26,
    "guildId": "g3"
  },
  {
    "id": "u1787",
    "name": "Rahul V.",
    "score": 91.11,
    "guildId": "g6"
  },
  {
    "id": "u1788",
    "name": "Swati R.",
    "score": 121.49,
    "guildId": "g2"
  },
  {
    "id": "u1789",
    "name": "Rohit B.",
    "score": 14.44,
    "guildId": "g7"
  },
  {
    "id": "u1790",
    "name": "Vikram Z.",
    "score": 144.9,
    "guildId": "g6"
  },
  {
    "id": "u1791",
    "name": "Pooja W.",
    "score": 27.18,
    "guildId": "g3"
  },
  {
    "id": "u1792",
    "name": "Manish S.",
    "score": 87.82,
    "guildId": "g8"
  },
  {
    "id": "u1793",
    "name": "Karan R.",
    "score": 47.15,
    "guildId": "g3"
  },
  {
    "id": "u1794",
    "name": "Priya Y.",
    "score": 126.13,
    "guildId": "g1"
  },
  {
    "id": "u1795",
    "name": "Ishita M.",
    "score": 40.36,
    "guildId": "g5"
  },
  {
    "id": "u1796",
    "name": "Megha W.",
    "score": 31.55,
    "guildId": "g6"
  },
  {
    "id": "u1797",
    "name": "Divya M.",
    "score": 59.45,
    "guildId": "g9"
  },
  {
    "id": "u1798",
    "name": "Akash V.",
    "score": 42.93,
    "guildId": "g4"
  },
  {
    "id": "u1799",
    "name": "Hans R.",
    "score": 24.59,
    "guildId": "g5"
  },
  {
    "id": "u1800",
    "name": "Kavya V.",
    "score": 128.46,
    "guildId": "g6"
  },
  {
    "id": "u1801",
    "name": "John T.",
    "score": 134.98,
    "guildId": "g5"
  },
  {
    "id": "u1802",
    "name": "Anjali A.",
    "score": 113.81,
    "guildId": "g7"
  },
  {
    "id": "u1803",
    "name": "Pooja S.",
    "score": 148.32,
    "guildId": "g6"
  },
  {
    "id": "u1804",
    "name": "Ali T.",
    "score": 50.97,
    "guildId": "g10"
  },
  {
    "id": "u1805",
    "name": "Vikram T.",
    "score": 70,
    "guildId": "g10"
  },
  {
    "id": "u1806",
    "name": "Divya B.",
    "score": 38.51,
    "guildId": "g7"
  },
  {
    "id": "u1807",
    "name": "Karan M.",
    "score": 26.62,
    "guildId": "g2"
  },
  {
    "id": "u1808",
    "name": "Ishita R.",
    "score": 33.92,
    "guildId": "g10"
  },
  {
    "id": "u1809",
    "name": "Ananya M.",
    "score": 149.9,
    "guildId": "g9"
  },
  {
    "id": "u1810",
    "name": "Megha P.",
    "score": 36.79,
    "guildId": "g4"
  },
  {
    "id": "u1811",
    "name": "Isabella W.",
    "score": 33.76,
    "guildId": "g6"
  },
  {
    "id": "u1812",
    "name": "Swati Z.",
    "score": 18.53,
    "guildId": "g6"
  },
  {
    "id": "u1813",
    "name": "Arjun M.",
    "score": 104.59,
    "guildId": "g3"
  },
  {
    "id": "u1814",
    "name": "Luka C.",
    "score": 115.73,
    "guildId": "g10"
  },
  {
    "id": "u1815",
    "name": "Ravi S.",
    "score": 14.52,
    "guildId": "g5"
  },
  {
    "id": "u1816",
    "name": "Divya S.",
    "score": 14.53,
    "guildId": "g6"
  },
  {
    "id": "u1817",
    "name": "Ravi R.",
    "score": 76,
    "guildId": "g2"
  },
  {
    "id": "u1818",
    "name": "Aditya V.",
    "score": 149.51,
    "guildId": "g10"
  },
  {
    "id": "u1819",
    "name": "Vikram R.",
    "score": 146.08,
    "guildId": "g4"
  },
  {
    "id": "u1820",
    "name": "Manish D.",
    "score": 145.94,
    "guildId": "g9"
  },
  {
    "id": "u1821",
    "name": "Manish T.",
    "score": 121.67,
    "guildId": "g6"
  },
  {
    "id": "u1822",
    "name": "Divya C.",
    "score": 93.71,
    "guildId": "g8"
  },
  {
    "id": "u1823",
    "name": "Pooja B.",
    "score": 25.98,
    "guildId": "g8"
  },
  {
    "id": "u1824",
    "name": "Rohit Y.",
    "score": 77.39,
    "guildId": "g3"
  },
  {
    "id": "u1825",
    "name": "Mateo P.",
    "score": 13.08,
    "guildId": "g1"
  },
  {
    "id": "u1826",
    "name": "Ravi T.",
    "score": 136.47,
    "guildId": "g4"
  },
  {
    "id": "u1827",
    "name": "Ravi S.",
    "score": 92.57,
    "guildId": "g4"
  },
  {
    "id": "u1828",
    "name": "Greta Z.",
    "score": 119.93,
    "guildId": "g1"
  },
  {
    "id": "u1829",
    "name": "Mateo Y.",
    "score": 134.43,
    "guildId": "g10"
  },
  {
    "id": "u1830",
    "name": "Isabella S.",
    "score": 141.13,
    "guildId": "g4"
  },
  {
    "id": "u1831",
    "name": "Noah M.",
    "score": 131.51,
    "guildId": "g5"
  },
  {
    "id": "u1832",
    "name": "Anjali S.",
    "score": 116.63,
    "guildId": "g4"
  },
  {
    "id": "u1833",
    "name": "Pooja W.",
    "score": 62.81,
    "guildId": "g1"
  },
  {
    "id": "u1834",
    "name": "Yuki V.",
    "score": 14.93,
    "guildId": "g3"
  },
  {
    "id": "u1835",
    "name": "Rohit R.",
    "score": 131.29,
    "guildId": "g5"
  },
  {
    "id": "u1836",
    "name": "Sneha Z.",
    "score": 14.35,
    "guildId": "g1"
  },
  {
    "id": "u1837",
    "name": "Rahul B.",
    "score": 104.43,
    "guildId": "g10"
  },
  {
    "id": "u1838",
    "name": "John Z.",
    "score": 15.97,
    "guildId": "g5"
  },
  {
    "id": "u1839",
    "name": "Neha K.",
    "score": 25.34,
    "guildId": "g3"
  },
  {
    "id": "u1840",
    "name": "Neha D.",
    "score": 144.32,
    "guildId": "g4"
  },
  {
    "id": "u1841",
    "name": "Megha S.",
    "score": 56.84,
    "guildId": "g3"
  },
  {
    "id": "u1842",
    "name": "Wei B.",
    "score": 140.89,
    "guildId": "g9"
  },
  {
    "id": "u1843",
    "name": "Ali Y.",
    "score": 54.22,
    "guildId": "g1"
  },
  {
    "id": "u1844",
    "name": "Karan P.",
    "score": 118.02,
    "guildId": "g9"
  },
  {
    "id": "u1845",
    "name": "Kavya M.",
    "score": 65.88,
    "guildId": "g7"
  },
  {
    "id": "u1846",
    "name": "Liam V.",
    "score": 11.14,
    "guildId": "g1"
  },
  {
    "id": "u1847",
    "name": "Amit D.",
    "score": 115.46,
    "guildId": "g1"
  },
  {
    "id": "u1848",
    "name": "Kavya W.",
    "score": 46.77,
    "guildId": "g8"
  },
  {
    "id": "u1849",
    "name": "Olivia T.",
    "score": 66.2,
    "guildId": "g2"
  },
  {
    "id": "u1850",
    "name": "Karan S.",
    "score": 59.6,
    "guildId": "g2"
  },
  {
    "id": "u1851",
    "name": "Sneha Y.",
    "score": 139.34,
    "guildId": "g6"
  },
  {
    "id": "u1852",
    "name": "Swati K.",
    "score": 65.68,
    "guildId": "g1"
  },
  {
    "id": "u1853",
    "name": "Isabella V.",
    "score": 15.39,
    "guildId": "g3"
  },
  {
    "id": "u1854",
    "name": "Akash B.",
    "score": 62.23,
    "guildId": "g9"
  },
  {
    "id": "u1855",
    "name": "Aditya W.",
    "score": 65.08,
    "guildId": "g10"
  },
  {
    "id": "u1856",
    "name": "Aditya S.",
    "score": 111.36,
    "guildId": "g3"
  },
  {
    "id": "u1857",
    "name": "Pooja P.",
    "score": 144.25,
    "guildId": "g9"
  },
  {
    "id": "u1858",
    "name": "Pooja K.",
    "score": 63.41,
    "guildId": "g4"
  },
  {
    "id": "u1859",
    "name": "Mia S.",
    "score": 134.29,
    "guildId": "g1"
  },
  {
    "id": "u1860",
    "name": "Rahul K.",
    "score": 137.02,
    "guildId": "g2"
  },
  {
    "id": "u1861",
    "name": "Rohit M.",
    "score": 50.1,
    "guildId": "g1"
  },
  {
    "id": "u1862",
    "name": "Emma M.",
    "score": 138.82,
    "guildId": "g10"
  },
  {
    "id": "u1863",
    "name": "Anjali S.",
    "score": 46.01,
    "guildId": "g8"
  },
  {
    "id": "u1864",
    "name": "Sophia A.",
    "score": 148.51,
    "guildId": "g5"
  },
  {
    "id": "u1865",
    "name": "Rahul R.",
    "score": 113.17,
    "guildId": "g3"
  },
  {
    "id": "u1866",
    "name": "Amit Y.",
    "score": 60.74,
    "guildId": "g10"
  },
  {
    "id": "u1867",
    "name": "Arjun T.",
    "score": 140.19,
    "guildId": "g8"
  },
  {
    "id": "u1868",
    "name": "Akash W.",
    "score": 50.32,
    "guildId": "g7"
  },
  {
    "id": "u1869",
    "name": "Swati V.",
    "score": 102.47,
    "guildId": "g8"
  },
  {
    "id": "u1870",
    "name": "Vikram M.",
    "score": 27.92,
    "guildId": "g7"
  },
  {
    "id": "u1871",
    "name": "Ramesh R.",
    "score": 149.74,
    "guildId": "g3"
  },
  {
    "id": "u1872",
    "name": "Rahul M.",
    "score": 62.31,
    "guildId": "g3"
  },
  {
    "id": "u1873",
    "name": "Mia D.",
    "score": 40.66,
    "guildId": "g8"
  },
  {
    "id": "u1874",
    "name": "Ramesh D.",
    "score": 112.15,
    "guildId": "g4"
  },
  {
    "id": "u1875",
    "name": "Karan K.",
    "score": 86.71,
    "guildId": "g3"
  },
  {
    "id": "u1876",
    "name": "Manish R.",
    "score": 63.14,
    "guildId": "g8"
  },
  {
    "id": "u1877",
    "name": "Karan V.",
    "score": 64.17,
    "guildId": "g1"
  },
  {
    "id": "u1878",
    "name": "Olivia V.",
    "score": 138.03,
    "guildId": "g8"
  },
  {
    "id": "u1879",
    "name": "Yuki Z.",
    "score": 123.5,
    "guildId": "g10"
  },
  {
    "id": "u1880",
    "name": "John Y.",
    "score": 146.01,
    "guildId": "g8"
  },
  {
    "id": "u1881",
    "name": "Hans D.",
    "score": 117.63,
    "guildId": "g2"
  },
  {
    "id": "u1882",
    "name": "Pooja D.",
    "score": 70.4,
    "guildId": "g3"
  },
  {
    "id": "u1883",
    "name": "Swati S.",
    "score": 29.6,
    "guildId": "g10"
  },
  {
    "id": "u1884",
    "name": "Ravi B.",
    "score": 15.8,
    "guildId": "g6"
  },
  {
    "id": "u1885",
    "name": "Ravi Y.",
    "score": 66.15,
    "guildId": "g4"
  },
  {
    "id": "u1886",
    "name": "Amit V.",
    "score": 14.21,
    "guildId": "g3"
  },
  {
    "id": "u1887",
    "name": "Ravi P.",
    "score": 87.29,
    "guildId": "g4"
  },
  {
    "id": "u1888",
    "name": "Liam P.",
    "score": 71.69,
    "guildId": "g5"
  },
  {
    "id": "u1889",
    "name": "Akash S.",
    "score": 50.26,
    "guildId": "g10"
  },
  {
    "id": "u1890",
    "name": "Ravi B.",
    "score": 149.59,
    "guildId": "g7"
  },
  {
    "id": "u1891",
    "name": "Ramesh B.",
    "score": 86.5,
    "guildId": "g6"
  },
  {
    "id": "u1892",
    "name": "Liam P.",
    "score": 148.6,
    "guildId": "g10"
  },
  {
    "id": "u1893",
    "name": "Sneha Y.",
    "score": 131.06,
    "guildId": "g9"
  },
  {
    "id": "u1894",
    "name": "Pooja K.",
    "score": 62.47,
    "guildId": "g8"
  },
  {
    "id": "u1895",
    "name": "Rahul A.",
    "score": 118.61,
    "guildId": "g6"
  },
  {
    "id": "u1896",
    "name": "Suresh Y.",
    "score": 140.22,
    "guildId": "g10"
  },
  {
    "id": "u1897",
    "name": "Swati V.",
    "score": 23.66,
    "guildId": "g7"
  },
  {
    "id": "u1898",
    "name": "Akash M.",
    "score": 56.49,
    "guildId": "g1"
  },
  {
    "id": "u1899",
    "name": "Suresh Y.",
    "score": 116.11,
    "guildId": "g2"
  },
  {
    "id": "u1900",
    "name": "Ravi C.",
    "score": 110.13,
    "guildId": "g3"
  },
  {
    "id": "u1901",
    "name": "Akash D.",
    "score": 76.26,
    "guildId": "g7"
  },
  {
    "id": "u1902",
    "name": "Vikram P.",
    "score": 132.21,
    "guildId": "g2"
  },
  {
    "id": "u1903",
    "name": "Vikram A.",
    "score": 110.81,
    "guildId": "g1"
  },
  {
    "id": "u1904",
    "name": "Priya M.",
    "score": 125.66,
    "guildId": "g9"
  },
  {
    "id": "u1905",
    "name": "Priya W.",
    "score": 85.49,
    "guildId": "g9"
  },
  {
    "id": "u1906",
    "name": "Neha Y.",
    "score": 133.42,
    "guildId": "g10"
  },
  {
    "id": "u1907",
    "name": "Aditya K.",
    "score": 138.84,
    "guildId": "g5"
  },
  {
    "id": "u1908",
    "name": "Ramesh V.",
    "score": 97.56,
    "guildId": "g8"
  },
  {
    "id": "u1909",
    "name": "Sneha B.",
    "score": 20.2,
    "guildId": "g1"
  },
  {
    "id": "u1910",
    "name": "Priya V.",
    "score": 30.58,
    "guildId": "g3"
  },
  {
    "id": "u1911",
    "name": "Rahul D.",
    "score": 124.28,
    "guildId": "g6"
  },
  {
    "id": "u1912",
    "name": "Vikram P.",
    "score": 124.11,
    "guildId": "g9"
  },
  {
    "id": "u1913",
    "name": "Sneha S.",
    "score": 12.28,
    "guildId": "g3"
  },
  {
    "id": "u1914",
    "name": "Neha Y.",
    "score": 91.12,
    "guildId": "g3"
  },
  {
    "id": "u1915",
    "name": "Vikram B.",
    "score": 148.19,
    "guildId": "g4"
  },
  {
    "id": "u1916",
    "name": "Suresh R.",
    "score": 41.44,
    "guildId": "g10"
  },
  {
    "id": "u1917",
    "name": "Neha Z.",
    "score": 20.95,
    "guildId": "g3"
  },
  {
    "id": "u1918",
    "name": "Ramesh C.",
    "score": 74.2,
    "guildId": "g6"
  },
  {
    "id": "u1919",
    "name": "Neha D.",
    "score": 142.32,
    "guildId": "g2"
  },
  {
    "id": "u1920",
    "name": "Ishita W.",
    "score": 65.36,
    "guildId": "g4"
  },
  {
    "id": "u1921",
    "name": "Priya M.",
    "score": 57.35,
    "guildId": "g7"
  },
  {
    "id": "u1922",
    "name": "Anjali Y.",
    "score": 28.68,
    "guildId": "g8"
  },
  {
    "id": "u1923",
    "name": "Suresh W.",
    "score": 114.89,
    "guildId": "g8"
  },
  {
    "id": "u1924",
    "name": "Noah D.",
    "score": 139.36,
    "guildId": "g9"
  },
  {
    "id": "u1925",
    "name": "Akash K.",
    "score": 74.6,
    "guildId": "g4"
  },
  {
    "id": "u1926",
    "name": "Yuki M.",
    "score": 101.89,
    "guildId": "g2"
  },
  {
    "id": "u1927",
    "name": "Manish W.",
    "score": 102.54,
    "guildId": "g2"
  },
  {
    "id": "u1928",
    "name": "Rohit B.",
    "score": 54.13,
    "guildId": "g2"
  },
  {
    "id": "u1929",
    "name": "Priya Y.",
    "score": 22.9,
    "guildId": "g8"
  },
  {
    "id": "u1930",
    "name": "Manish M.",
    "score": 10.62,
    "guildId": "g3"
  },
  {
    "id": "u1931",
    "name": "Mateo V.",
    "score": 104.37,
    "guildId": "g6"
  },
  {
    "id": "u1932",
    "name": "Ramesh Z.",
    "score": 20.92,
    "guildId": "g3"
  },
  {
    "id": "u1933",
    "name": "Pooja W.",
    "score": 38.11,
    "guildId": "g2"
  },
  {
    "id": "u1934",
    "name": "Karan Z.",
    "score": 49.17,
    "guildId": "g1"
  },
  {
    "id": "u1935",
    "name": "Divya T.",
    "score": 11.91,
    "guildId": "g1"
  },
  {
    "id": "u1936",
    "name": "Hans K.",
    "score": 86.72,
    "guildId": "g9"
  },
  {
    "id": "u1937",
    "name": "Swati Y.",
    "score": 110.84,
    "guildId": "g3"
  },
  {
    "id": "u1938",
    "name": "Karan B.",
    "score": 87.93,
    "guildId": "g3"
  },
  {
    "id": "u1939",
    "name": "Aditya P.",
    "score": 117.43,
    "guildId": "g4"
  },
  {
    "id": "u1940",
    "name": "Aditya C.",
    "score": 136.6,
    "guildId": "g1"
  },
  {
    "id": "u1941",
    "name": "Akash S.",
    "score": 37.08,
    "guildId": "g9"
  },
  {
    "id": "u1942",
    "name": "Priya K.",
    "score": 59.5,
    "guildId": "g2"
  },
  {
    "id": "u1943",
    "name": "Rahul C.",
    "score": 95.96,
    "guildId": "g10"
  },
  {
    "id": "u1944",
    "name": "Anjali A.",
    "score": 66.61,
    "guildId": "g8"
  },
  {
    "id": "u1945",
    "name": "Swati D.",
    "score": 134.52,
    "guildId": "g6"
  },
  {
    "id": "u1946",
    "name": "Aditya Y.",
    "score": 121.95,
    "guildId": "g9"
  },
  {
    "id": "u1947",
    "name": "Sneha C.",
    "score": 78.87,
    "guildId": "g3"
  },
  {
    "id": "u1948",
    "name": "Swati K.",
    "score": 67.84,
    "guildId": "g7"
  },
  {
    "id": "u1949",
    "name": "Kavya W.",
    "score": 45.21,
    "guildId": "g3"
  },
  {
    "id": "u1950",
    "name": "Ananya R.",
    "score": 40.56,
    "guildId": "g8"
  },
  {
    "id": "u1951",
    "name": "John T.",
    "score": 16.35,
    "guildId": "g8"
  },
  {
    "id": "u1952",
    "name": "Liam M.",
    "score": 106.59,
    "guildId": "g4"
  },
  {
    "id": "u1953",
    "name": "Ishita Z.",
    "score": 103.55,
    "guildId": "g3"
  },
  {
    "id": "u1954",
    "name": "Kavya C.",
    "score": 106.88,
    "guildId": "g4"
  },
  {
    "id": "u1955",
    "name": "Priya P.",
    "score": 56.75,
    "guildId": "g6"
  },
  {
    "id": "u1956",
    "name": "Amit M.",
    "score": 136.89,
    "guildId": "g9"
  },
  {
    "id": "u1957",
    "name": "Ramesh T.",
    "score": 10.29,
    "guildId": "g8"
  },
  {
    "id": "u1958",
    "name": "Karan Y.",
    "score": 149.18,
    "guildId": "g4"
  },
  {
    "id": "u1959",
    "name": "Neha B.",
    "score": 64.84,
    "guildId": "g4"
  },
  {
    "id": "u1960",
    "name": "Ananya V.",
    "score": 137.72,
    "guildId": "g2"
  },
  {
    "id": "u1961",
    "name": "Fatima C.",
    "score": 66.15,
    "guildId": "g6"
  },
  {
    "id": "u1962",
    "name": "Sneha A.",
    "score": 62.17,
    "guildId": "g4"
  },
  {
    "id": "u1963",
    "name": "Ramesh D.",
    "score": 50.1,
    "guildId": "g8"
  },
  {
    "id": "u1964",
    "name": "Hans K.",
    "score": 50.82,
    "guildId": "g6"
  },
  {
    "id": "u1965",
    "name": "Manish B.",
    "score": 108.62,
    "guildId": "g10"
  },
  {
    "id": "u1966",
    "name": "Sneha P.",
    "score": 19.28,
    "guildId": "g4"
  },
  {
    "id": "u1967",
    "name": "Divya C.",
    "score": 99.88,
    "guildId": "g7"
  },
  {
    "id": "u1968",
    "name": "Manish Z.",
    "score": 128.2,
    "guildId": "g5"
  },
  {
    "id": "u1969",
    "name": "Vikram P.",
    "score": 66.62,
    "guildId": "g5"
  },
  {
    "id": "u1970",
    "name": "Ravi D.",
    "score": 17.63,
    "guildId": "g4"
  },
  {
    "id": "u1971",
    "name": "Megha C.",
    "score": 58.14,
    "guildId": "g2"
  },
  {
    "id": "u1972",
    "name": "Anjali V.",
    "score": 21.59,
    "guildId": "g10"
  },
  {
    "id": "u1973",
    "name": "Isabella K.",
    "score": 110.22,
    "guildId": "g8"
  },
  {
    "id": "u1974",
    "name": "Vikram M.",
    "score": 51.18,
    "guildId": "g9"
  },
  {
    "id": "u1975",
    "name": "Ananya D.",
    "score": 62.26,
    "guildId": "g2"
  },
  {
    "id": "u1976",
    "name": "Pooja D.",
    "score": 19.35,
    "guildId": "g1"
  },
  {
    "id": "u1977",
    "name": "Divya C.",
    "score": 120.54,
    "guildId": "g5"
  },
  {
    "id": "u1978",
    "name": "Ramesh V.",
    "score": 117.92,
    "guildId": "g7"
  },
  {
    "id": "u1979",
    "name": "Ravi C.",
    "score": 67.92,
    "guildId": "g7"
  },
  {
    "id": "u1980",
    "name": "Priya D.",
    "score": 54.59,
    "guildId": "g4"
  },
  {
    "id": "u1981",
    "name": "Fatima A.",
    "score": 76.43,
    "guildId": "g3"
  },
  {
    "id": "u1982",
    "name": "Ramesh M.",
    "score": 127.57,
    "guildId": "g9"
  },
  {
    "id": "u1983",
    "name": "Ramesh P.",
    "score": 147.08,
    "guildId": "g9"
  },
  {
    "id": "u1984",
    "name": "Amit Y.",
    "score": 112.8,
    "guildId": "g1"
  },
  {
    "id": "u1985",
    "name": "Divya D.",
    "score": 86.16,
    "guildId": "g7"
  },
  {
    "id": "u1986",
    "name": "Rahul D.",
    "score": 120.2,
    "guildId": "g8"
  },
  {
    "id": "u1987",
    "name": "Ishita Y.",
    "score": 43.02,
    "guildId": "g5"
  },
  {
    "id": "u1988",
    "name": "Aditya K.",
    "score": 105.47,
    "guildId": "g4"
  },
  {
    "id": "u1989",
    "name": "Akash B.",
    "score": 148.36,
    "guildId": "g9"
  },
  {
    "id": "u1990",
    "name": "Ishita Y.",
    "score": 124.38,
    "guildId": "g4"
  },
  {
    "id": "u1991",
    "name": "Ramesh Z.",
    "score": 131.01,
    "guildId": "g9"
  },
  {
    "id": "u1992",
    "name": "Sneha D.",
    "score": 17.44,
    "guildId": "g4"
  },
  {
    "id": "u1993",
    "name": "Ishita W.",
    "score": 40.52,
    "guildId": "g2"
  },
  {
    "id": "u1994",
    "name": "Siddharth Y.",
    "score": 118.96,
    "guildId": "g2"
  },
  {
    "id": "u1995",
    "name": "Ramesh T.",
    "score": 132.76,
    "guildId": "g1"
  },
  {
    "id": "u1996",
    "name": "Akash W.",
    "score": 97.93,
    "guildId": "g10"
  },
  {
    "id": "u1997",
    "name": "Ravi B.",
    "score": 143.89,
    "guildId": "g2"
  },
  {
    "id": "u1998",
    "name": "Luka C.",
    "score": 136.49,
    "guildId": "g7"
  },
  {
    "id": "u1999",
    "name": "Aditya S.",
    "score": 58.26,
    "guildId": "g10"
  },
  {
    "id": "u2000",
    "name": "Vikram P.",
    "score": 28.04,
    "guildId": "g9"
  },
  {
    "id": "u2001",
    "name": "Aditya Z.",
    "score": 119.94,
    "guildId": "g9"
  },
  {
    "id": "u2002",
    "name": "Arjun T.",
    "score": 48.73,
    "guildId": "g3"
  },
  {
    "id": "u2003",
    "name": "Ravi R.",
    "score": 43.89,
    "guildId": "g6"
  },
  {
    "id": "u2004",
    "name": "Priya W.",
    "score": 29.43,
    "guildId": "g3"
  },
  {
    "id": "u2005",
    "name": "Akash Z.",
    "score": 88.29,
    "guildId": "g2"
  },
  {
    "id": "u2006",
    "name": "Divya W.",
    "score": 66.19,
    "guildId": "g6"
  },
  {
    "id": "u2007",
    "name": "Sneha V.",
    "score": 17.9,
    "guildId": "g3"
  },
  {
    "id": "u2008",
    "name": "Sneha P.",
    "score": 32.57,
    "guildId": "g10"
  },
  {
    "id": "u2009",
    "name": "Vikram R.",
    "score": 66.6,
    "guildId": "g8"
  },
  {
    "id": "u2010",
    "name": "Manish Y.",
    "score": 115.91,
    "guildId": "g6"
  },
  {
    "id": "u2011",
    "name": "Pooja B.",
    "score": 104.54,
    "guildId": "g8"
  },
  {
    "id": "u2012",
    "name": "Swati T.",
    "score": 88.12,
    "guildId": "g1"
  },
  {
    "id": "u2013",
    "name": "Swati K.",
    "score": 89.43,
    "guildId": "g3"
  },
  {
    "id": "u2014",
    "name": "Amit S.",
    "score": 43.77,
    "guildId": "g6"
  },
  {
    "id": "u2015",
    "name": "Hans B.",
    "score": 133.16,
    "guildId": "g6"
  },
  {
    "id": "u2016",
    "name": "Divya T.",
    "score": 104.58,
    "guildId": "g1"
  },
  {
    "id": "u2017",
    "name": "Wei Z.",
    "score": 108.94,
    "guildId": "g7"
  },
  {
    "id": "u2018",
    "name": "Akash V.",
    "score": 31.13,
    "guildId": "g8"
  },
  {
    "id": "u2019",
    "name": "Isabella D.",
    "score": 42.61,
    "guildId": "g10"
  },
  {
    "id": "u2020",
    "name": "Kavya C.",
    "score": 69.2,
    "guildId": "g9"
  },
  {
    "id": "u2021",
    "name": "Manish D.",
    "score": 90.92,
    "guildId": "g9"
  },
  {
    "id": "u2022",
    "name": "Isabella C.",
    "score": 38.23,
    "guildId": "g6"
  },
  {
    "id": "u2023",
    "name": "Akash B.",
    "score": 49.71,
    "guildId": "g1"
  },
  {
    "id": "u2024",
    "name": "Arjun T.",
    "score": 116.48,
    "guildId": "g8"
  },
  {
    "id": "u2025",
    "name": "Isabella P.",
    "score": 40.3,
    "guildId": "g3"
  },
  {
    "id": "u2026",
    "name": "Megha W.",
    "score": 74.23,
    "guildId": "g7"
  },
  {
    "id": "u2027",
    "name": "Rahul C.",
    "score": 70.71,
    "guildId": "g3"
  },
  {
    "id": "u2028",
    "name": "Neha A.",
    "score": 22.55,
    "guildId": "g3"
  },
  {
    "id": "u2029",
    "name": "Rahul W.",
    "score": 83.43,
    "guildId": "g2"
  },
  {
    "id": "u2030",
    "name": "Ali Y.",
    "score": 16.36,
    "guildId": "g5"
  },
  {
    "id": "u2031",
    "name": "Ravi S.",
    "score": 94.2,
    "guildId": "g3"
  },
  {
    "id": "u2032",
    "name": "Ramesh K.",
    "score": 84.78,
    "guildId": "g5"
  },
  {
    "id": "u2033",
    "name": "Olivia R.",
    "score": 39.27,
    "guildId": "g8"
  },
  {
    "id": "u2034",
    "name": "Suresh D.",
    "score": 57.2,
    "guildId": "g4"
  },
  {
    "id": "u2035",
    "name": "Yuki R.",
    "score": 127.88,
    "guildId": "g6"
  },
  {
    "id": "u2036",
    "name": "Ramesh A.",
    "score": 15.76,
    "guildId": "g1"
  },
  {
    "id": "u2037",
    "name": "Amit V.",
    "score": 97.67,
    "guildId": "g8"
  },
  {
    "id": "u2038",
    "name": "Ravi R.",
    "score": 85.19,
    "guildId": "g10"
  },
  {
    "id": "u2039",
    "name": "Ishita K.",
    "score": 47.96,
    "guildId": "g2"
  },
  {
    "id": "u2040",
    "name": "Divya S.",
    "score": 109.62,
    "guildId": "g4"
  },
  {
    "id": "u2041",
    "name": "Rahul M.",
    "score": 144.56,
    "guildId": "g3"
  },
  {
    "id": "u2042",
    "name": "Mia W.",
    "score": 97.24,
    "guildId": "g9"
  },
  {
    "id": "u2043",
    "name": "Megha Y.",
    "score": 110.58,
    "guildId": "g3"
  },
  {
    "id": "u2044",
    "name": "Karan K.",
    "score": 128.2,
    "guildId": "g9"
  },
  {
    "id": "u2045",
    "name": "Ramesh B.",
    "score": 89.9,
    "guildId": "g5"
  },
  {
    "id": "u2046",
    "name": "Ananya S.",
    "score": 102.01,
    "guildId": "g1"
  },
  {
    "id": "u2047",
    "name": "Vikram C.",
    "score": 124.8,
    "guildId": "g9"
  },
  {
    "id": "u2048",
    "name": "Siddharth B.",
    "score": 67.47,
    "guildId": "g2"
  },
  {
    "id": "u2049",
    "name": "Priya T.",
    "score": 11.31,
    "guildId": "g7"
  },
  {
    "id": "u2050",
    "name": "Arjun A.",
    "score": 17.84,
    "guildId": "g7"
  },
  {
    "id": "u2051",
    "name": "Olivia P.",
    "score": 57.05,
    "guildId": "g10"
  },
  {
    "id": "u2052",
    "name": "Divya T.",
    "score": 69.28,
    "guildId": "g3"
  },
  {
    "id": "u2053",
    "name": "Priya B.",
    "score": 120.15,
    "guildId": "g2"
  },
  {
    "id": "u2054",
    "name": "Swati P.",
    "score": 138.63,
    "guildId": "g5"
  },
  {
    "id": "u2055",
    "name": "Chen B.",
    "score": 145.14,
    "guildId": "g2"
  },
  {
    "id": "u2056",
    "name": "Sneha K.",
    "score": 29.9,
    "guildId": "g5"
  },
  {
    "id": "u2057",
    "name": "Rohit Z.",
    "score": 95.62,
    "guildId": "g8"
  },
  {
    "id": "u2058",
    "name": "Pooja P.",
    "score": 56.83,
    "guildId": "g3"
  },
  {
    "id": "u2059",
    "name": "Ali W.",
    "score": 91.09,
    "guildId": "g5"
  },
  {
    "id": "u2060",
    "name": "Swati C.",
    "score": 64.17,
    "guildId": "g1"
  },
  {
    "id": "u2061",
    "name": "Akash A.",
    "score": 15.25,
    "guildId": "g3"
  },
  {
    "id": "u2062",
    "name": "Ishita Z.",
    "score": 19.2,
    "guildId": "g4"
  },
  {
    "id": "u2063",
    "name": "Sneha S.",
    "score": 132,
    "guildId": "g9"
  },
  {
    "id": "u2064",
    "name": "John A.",
    "score": 108.46,
    "guildId": "g5"
  },
  {
    "id": "u2065",
    "name": "Amit T.",
    "score": 44.21,
    "guildId": "g10"
  },
  {
    "id": "u2066",
    "name": "Ishita T.",
    "score": 67.98,
    "guildId": "g9"
  },
  {
    "id": "u2067",
    "name": "Karan D.",
    "score": 94.22,
    "guildId": "g10"
  },
  {
    "id": "u2068",
    "name": "Noah Z.",
    "score": 49.31,
    "guildId": "g2"
  },
  {
    "id": "u2069",
    "name": "Arjun A.",
    "score": 29.8,
    "guildId": "g7"
  },
  {
    "id": "u2070",
    "name": "Ali D.",
    "score": 79.73,
    "guildId": "g3"
  },
  {
    "id": "u2071",
    "name": "Ravi Y.",
    "score": 23.75,
    "guildId": "g7"
  },
  {
    "id": "u2072",
    "name": "Ananya T.",
    "score": 123.97,
    "guildId": "g6"
  },
  {
    "id": "u2073",
    "name": "Anjali D.",
    "score": 103.55,
    "guildId": "g3"
  },
  {
    "id": "u2074",
    "name": "Swati B.",
    "score": 39.44,
    "guildId": "g1"
  },
  {
    "id": "u2075",
    "name": "Vikram W.",
    "score": 78.6,
    "guildId": "g5"
  },
  {
    "id": "u2076",
    "name": "Manish S.",
    "score": 104.46,
    "guildId": "g7"
  },
  {
    "id": "u2077",
    "name": "Rohit V.",
    "score": 44.21,
    "guildId": "g9"
  },
  {
    "id": "u2078",
    "name": "Liam W.",
    "score": 129.21,
    "guildId": "g9"
  },
  {
    "id": "u2079",
    "name": "Ravi K.",
    "score": 146.58,
    "guildId": "g5"
  },
  {
    "id": "u2080",
    "name": "Ananya P.",
    "score": 84.9,
    "guildId": "g4"
  },
  {
    "id": "u2081",
    "name": "Kavya B.",
    "score": 12.86,
    "guildId": "g8"
  },
  {
    "id": "u2082",
    "name": "John B.",
    "score": 63.66,
    "guildId": "g6"
  },
  {
    "id": "u2083",
    "name": "Neha A.",
    "score": 23.36,
    "guildId": "g6"
  },
  {
    "id": "u2084",
    "name": "Noah P.",
    "score": 34.17,
    "guildId": "g4"
  },
  {
    "id": "u2085",
    "name": "Akash K.",
    "score": 112.04,
    "guildId": "g6"
  },
  {
    "id": "u2086",
    "name": "Mateo Y.",
    "score": 100.91,
    "guildId": "g3"
  },
  {
    "id": "u2087",
    "name": "Aditya K.",
    "score": 77.81,
    "guildId": "g7"
  },
  {
    "id": "u2088",
    "name": "Fatima K.",
    "score": 75.19,
    "guildId": "g1"
  },
  {
    "id": "u2089",
    "name": "Sneha R.",
    "score": 95.19,
    "guildId": "g2"
  },
  {
    "id": "u2090",
    "name": "Megha S.",
    "score": 46.1,
    "guildId": "g10"
  },
  {
    "id": "u2091",
    "name": "Aditya V.",
    "score": 130.3,
    "guildId": "g7"
  },
  {
    "id": "u2092",
    "name": "Ishita P.",
    "score": 17.46,
    "guildId": "g1"
  },
  {
    "id": "u2093",
    "name": "Neha K.",
    "score": 91.63,
    "guildId": "g1"
  },
  {
    "id": "u2094",
    "name": "Ali D.",
    "score": 117.78,
    "guildId": "g8"
  },
  {
    "id": "u2095",
    "name": "Suresh A.",
    "score": 71.1,
    "guildId": "g5"
  },
  {
    "id": "u2096",
    "name": "Suresh Z.",
    "score": 121.2,
    "guildId": "g9"
  },
  {
    "id": "u2097",
    "name": "Megha Y.",
    "score": 143.8,
    "guildId": "g9"
  },
  {
    "id": "u2098",
    "name": "Pooja A.",
    "score": 108.21,
    "guildId": "g1"
  },
  {
    "id": "u2099",
    "name": "Vikram T.",
    "score": 86.24,
    "guildId": "g10"
  },
  {
    "id": "u2100",
    "name": "Sneha K.",
    "score": 132.94,
    "guildId": "g9"
  },
  {
    "id": "u2101",
    "name": "Ananya C.",
    "score": 134.17,
    "guildId": "g4"
  },
  {
    "id": "u2102",
    "name": "John M.",
    "score": 60.39,
    "guildId": "g5"
  },
  {
    "id": "u2103",
    "name": "Olivia P.",
    "score": 82.65,
    "guildId": "g9"
  },
  {
    "id": "u2104",
    "name": "Karan R.",
    "score": 135.32,
    "guildId": "g5"
  },
  {
    "id": "u2105",
    "name": "Siddharth B.",
    "score": 93.27,
    "guildId": "g9"
  },
  {
    "id": "u2106",
    "name": "John W.",
    "score": 42.2,
    "guildId": "g2"
  },
  {
    "id": "u2107",
    "name": "Akash Y.",
    "score": 69.89,
    "guildId": "g10"
  },
  {
    "id": "u2108",
    "name": "Neha W.",
    "score": 142.21,
    "guildId": "g4"
  },
  {
    "id": "u2109",
    "name": "Amit T.",
    "score": 60.92,
    "guildId": "g3"
  },
  {
    "id": "u2110",
    "name": "Suresh V.",
    "score": 19.27,
    "guildId": "g5"
  },
  {
    "id": "u2111",
    "name": "Anjali T.",
    "score": 58.32,
    "guildId": "g5"
  },
  {
    "id": "u2112",
    "name": "Anjali V.",
    "score": 138.52,
    "guildId": "g8"
  },
  {
    "id": "u2113",
    "name": "Arjun D.",
    "score": 18.7,
    "guildId": "g6"
  },
  {
    "id": "u2114",
    "name": "Akash C.",
    "score": 95.12,
    "guildId": "g5"
  },
  {
    "id": "u2115",
    "name": "Arjun B.",
    "score": 140.16,
    "guildId": "g4"
  },
  {
    "id": "u2116",
    "name": "Divya W.",
    "score": 143.48,
    "guildId": "g7"
  },
  {
    "id": "u2117",
    "name": "Aditya K.",
    "score": 123.51,
    "guildId": "g5"
  },
  {
    "id": "u2118",
    "name": "Ramesh D.",
    "score": 10.8,
    "guildId": "g4"
  },
  {
    "id": "u2119",
    "name": "Isabella R.",
    "score": 102.85,
    "guildId": "g9"
  },
  {
    "id": "u2120",
    "name": "Arjun M.",
    "score": 147.93,
    "guildId": "g6"
  },
  {
    "id": "u2121",
    "name": "Suresh D.",
    "score": 107.51,
    "guildId": "g2"
  },
  {
    "id": "u2122",
    "name": "Greta D.",
    "score": 87.93,
    "guildId": "g4"
  },
  {
    "id": "u2123",
    "name": "Rahul S.",
    "score": 22.68,
    "guildId": "g7"
  },
  {
    "id": "u2124",
    "name": "Megha M.",
    "score": 66.58,
    "guildId": "g4"
  },
  {
    "id": "u2125",
    "name": "Vikram B.",
    "score": 49.05,
    "guildId": "g5"
  },
  {
    "id": "u2126",
    "name": "Ramesh T.",
    "score": 106.15,
    "guildId": "g2"
  },
  {
    "id": "u2127",
    "name": "Chen R.",
    "score": 15.47,
    "guildId": "g9"
  },
  {
    "id": "u2128",
    "name": "Hans T.",
    "score": 49.72,
    "guildId": "g3"
  },
  {
    "id": "u2129",
    "name": "Amit V.",
    "score": 141.1,
    "guildId": "g2"
  },
  {
    "id": "u2130",
    "name": "Suresh S.",
    "score": 115.84,
    "guildId": "g9"
  },
  {
    "id": "u2131",
    "name": "Anjali M.",
    "score": 46.42,
    "guildId": "g6"
  },
  {
    "id": "u2132",
    "name": "Ishita R.",
    "score": 38.52,
    "guildId": "g4"
  },
  {
    "id": "u2133",
    "name": "Hans R.",
    "score": 15,
    "guildId": "g9"
  },
  {
    "id": "u2134",
    "name": "Megha R.",
    "score": 145.53,
    "guildId": "g10"
  },
  {
    "id": "u2135",
    "name": "Suresh C.",
    "score": 30.51,
    "guildId": "g8"
  },
  {
    "id": "u2136",
    "name": "Divya C.",
    "score": 58.1,
    "guildId": "g3"
  },
  {
    "id": "u2137",
    "name": "Ramesh A.",
    "score": 78.57,
    "guildId": "g3"
  },
  {
    "id": "u2138",
    "name": "Neha M.",
    "score": 24.34,
    "guildId": "g7"
  },
  {
    "id": "u2139",
    "name": "Liam Y.",
    "score": 84.51,
    "guildId": "g10"
  },
  {
    "id": "u2140",
    "name": "Hans Y.",
    "score": 67.42,
    "guildId": "g7"
  },
  {
    "id": "u2141",
    "name": "Rohit S.",
    "score": 29.02,
    "guildId": "g10"
  },
  {
    "id": "u2142",
    "name": "Ishita M.",
    "score": 143.45,
    "guildId": "g6"
  },
  {
    "id": "u2143",
    "name": "Chen W.",
    "score": 90.09,
    "guildId": "g8"
  },
  {
    "id": "u2144",
    "name": "Sneha T.",
    "score": 94.01,
    "guildId": "g1"
  },
  {
    "id": "u2145",
    "name": "Suresh T.",
    "score": 87.07,
    "guildId": "g1"
  },
  {
    "id": "u2146",
    "name": "Amit V.",
    "score": 97.16,
    "guildId": "g5"
  },
  {
    "id": "u2147",
    "name": "Ananya C.",
    "score": 99.65,
    "guildId": "g5"
  },
  {
    "id": "u2148",
    "name": "Megha T.",
    "score": 40.09,
    "guildId": "g5"
  },
  {
    "id": "u2149",
    "name": "Akash K.",
    "score": 121.56,
    "guildId": "g7"
  },
  {
    "id": "u2150",
    "name": "Pooja C.",
    "score": 90.87,
    "guildId": "g1"
  },
  {
    "id": "u2151",
    "name": "Megha R.",
    "score": 54.41,
    "guildId": "g9"
  },
  {
    "id": "u2152",
    "name": "Divya R.",
    "score": 83.19,
    "guildId": "g5"
  },
  {
    "id": "u2153",
    "name": "Priya P.",
    "score": 102.99,
    "guildId": "g5"
  },
  {
    "id": "u2154",
    "name": "Divya W.",
    "score": 13.54,
    "guildId": "g8"
  },
  {
    "id": "u2155",
    "name": "Megha K.",
    "score": 90.51,
    "guildId": "g5"
  },
  {
    "id": "u2156",
    "name": "Emma T.",
    "score": 137.65,
    "guildId": "g6"
  },
  {
    "id": "u2157",
    "name": "Rohit T.",
    "score": 41.74,
    "guildId": "g5"
  },
  {
    "id": "u2158",
    "name": "Ananya B.",
    "score": 144.85,
    "guildId": "g10"
  },
  {
    "id": "u2159",
    "name": "Suresh R.",
    "score": 144.87,
    "guildId": "g5"
  },
  {
    "id": "u2160",
    "name": "Megha P.",
    "score": 75.08,
    "guildId": "g9"
  },
  {
    "id": "u2161",
    "name": "Kavya P.",
    "score": 120.41,
    "guildId": "g4"
  },
  {
    "id": "u2162",
    "name": "Suresh B.",
    "score": 12.98,
    "guildId": "g4"
  },
  {
    "id": "u2163",
    "name": "Siddharth Y.",
    "score": 24.18,
    "guildId": "g5"
  },
  {
    "id": "u2164",
    "name": "Karan B.",
    "score": 93.24,
    "guildId": "g7"
  },
  {
    "id": "u2165",
    "name": "Rohit R.",
    "score": 106.1,
    "guildId": "g4"
  },
  {
    "id": "u2166",
    "name": "Rohit W.",
    "score": 51.38,
    "guildId": "g3"
  },
  {
    "id": "u2167",
    "name": "Rohit C.",
    "score": 27.68,
    "guildId": "g5"
  },
  {
    "id": "u2168",
    "name": "Aditya C.",
    "score": 113.72,
    "guildId": "g9"
  },
  {
    "id": "u2169",
    "name": "Ali Y.",
    "score": 38.51,
    "guildId": "g8"
  },
  {
    "id": "u2170",
    "name": "Suresh Y.",
    "score": 24.68,
    "guildId": "g5"
  },
  {
    "id": "u2171",
    "name": "Akash A.",
    "score": 125.87,
    "guildId": "g2"
  },
  {
    "id": "u2172",
    "name": "Rohit W.",
    "score": 118.44,
    "guildId": "g10"
  },
  {
    "id": "u2173",
    "name": "Amit P.",
    "score": 41.47,
    "guildId": "g6"
  },
  {
    "id": "u2174",
    "name": "Swati V.",
    "score": 66,
    "guildId": "g2"
  },
  {
    "id": "u2175",
    "name": "Rahul Z.",
    "score": 79.35,
    "guildId": "g8"
  },
  {
    "id": "u2176",
    "name": "Hiro V.",
    "score": 99.13,
    "guildId": "g8"
  },
  {
    "id": "u2177",
    "name": "Noah B.",
    "score": 69.31,
    "guildId": "g9"
  },
  {
    "id": "u2178",
    "name": "Pooja T.",
    "score": 50.55,
    "guildId": "g4"
  },
  {
    "id": "u2179",
    "name": "Ravi R.",
    "score": 90.22,
    "guildId": "g4"
  },
  {
    "id": "u2180",
    "name": "Pooja Z.",
    "score": 12.9,
    "guildId": "g4"
  },
  {
    "id": "u2181",
    "name": "Amit K.",
    "score": 97.57,
    "guildId": "g10"
  },
  {
    "id": "u2182",
    "name": "Yuki R.",
    "score": 127.62,
    "guildId": "g9"
  },
  {
    "id": "u2183",
    "name": "Sneha K.",
    "score": 56.62,
    "guildId": "g7"
  },
  {
    "id": "u2184",
    "name": "Fatima K.",
    "score": 113.83,
    "guildId": "g8"
  },
  {
    "id": "u2185",
    "name": "Chen S.",
    "score": 74.3,
    "guildId": "g3"
  },
  {
    "id": "u2186",
    "name": "Isabella T.",
    "score": 137.53,
    "guildId": "g2"
  },
  {
    "id": "u2187",
    "name": "Amit T.",
    "score": 54,
    "guildId": "g8"
  },
  {
    "id": "u2188",
    "name": "Amit S.",
    "score": 14.56,
    "guildId": "g5"
  },
  {
    "id": "u2189",
    "name": "Priya V.",
    "score": 119.02,
    "guildId": "g9"
  },
  {
    "id": "u2190",
    "name": "Neha W.",
    "score": 18.31,
    "guildId": "g7"
  },
  {
    "id": "u2191",
    "name": "Fatima Z.",
    "score": 102.04,
    "guildId": "g10"
  },
  {
    "id": "u2192",
    "name": "Ishita A.",
    "score": 64.6,
    "guildId": "g5"
  },
  {
    "id": "u2193",
    "name": "Suresh Z.",
    "score": 85.89,
    "guildId": "g2"
  },
  {
    "id": "u2194",
    "name": "Ravi S.",
    "score": 58.22,
    "guildId": "g3"
  },
  {
    "id": "u2195",
    "name": "Sneha W.",
    "score": 29.29,
    "guildId": "g5"
  },
  {
    "id": "u2196",
    "name": "Karan V.",
    "score": 121.49,
    "guildId": "g1"
  },
  {
    "id": "u2197",
    "name": "Suresh M.",
    "score": 92.76,
    "guildId": "g1"
  },
  {
    "id": "u2198",
    "name": "Ali B.",
    "score": 67.59,
    "guildId": "g6"
  },
  {
    "id": "u2199",
    "name": "Karan C.",
    "score": 11.51,
    "guildId": "g4"
  },
  {
    "id": "u2200",
    "name": "Ananya A.",
    "score": 45.66,
    "guildId": "g1"
  },
  {
    "id": "u2201",
    "name": "Wei T.",
    "score": 43.7,
    "guildId": "g7"
  },
  {
    "id": "u2202",
    "name": "Suresh S.",
    "score": 101.44,
    "guildId": "g7"
  },
  {
    "id": "u2203",
    "name": "Mia V.",
    "score": 147.07,
    "guildId": "g7"
  },
  {
    "id": "u2204",
    "name": "Arjun P.",
    "score": 52.89,
    "guildId": "g10"
  },
  {
    "id": "u2205",
    "name": "Fatima B.",
    "score": 113.28,
    "guildId": "g2"
  },
  {
    "id": "u2206",
    "name": "Ravi V.",
    "score": 95.53,
    "guildId": "g10"
  },
  {
    "id": "u2207",
    "name": "Amit T.",
    "score": 119.28,
    "guildId": "g8"
  },
  {
    "id": "u2208",
    "name": "Siddharth D.",
    "score": 56.28,
    "guildId": "g4"
  },
  {
    "id": "u2209",
    "name": "Akash K.",
    "score": 148.7,
    "guildId": "g7"
  },
  {
    "id": "u2210",
    "name": "Hiro R.",
    "score": 116.32,
    "guildId": "g9"
  },
  {
    "id": "u2211",
    "name": "Isabella M.",
    "score": 15.78,
    "guildId": "g5"
  },
  {
    "id": "u2212",
    "name": "Hiro B.",
    "score": 84.68,
    "guildId": "g4"
  },
  {
    "id": "u2213",
    "name": "Suresh W.",
    "score": 137.77,
    "guildId": "g7"
  },
  {
    "id": "u2214",
    "name": "Suresh T.",
    "score": 149.65,
    "guildId": "g7"
  },
  {
    "id": "u2215",
    "name": "Wei C.",
    "score": 122.97,
    "guildId": "g6"
  },
  {
    "id": "u2216",
    "name": "Amit R.",
    "score": 51.57,
    "guildId": "g5"
  },
  {
    "id": "u2217",
    "name": "Vikram R.",
    "score": 108.84,
    "guildId": "g6"
  },
  {
    "id": "u2218",
    "name": "Ravi C.",
    "score": 57.07,
    "guildId": "g1"
  },
  {
    "id": "u2219",
    "name": "Pooja R.",
    "score": 101.67,
    "guildId": "g3"
  },
  {
    "id": "u2220",
    "name": "Megha P.",
    "score": 21.69,
    "guildId": "g6"
  },
  {
    "id": "u2221",
    "name": "Rohit C.",
    "score": 86.97,
    "guildId": "g6"
  },
  {
    "id": "u2222",
    "name": "Rahul K.",
    "score": 73.84,
    "guildId": "g8"
  },
  {
    "id": "u2223",
    "name": "Karan P.",
    "score": 139.4,
    "guildId": "g7"
  },
  {
    "id": "u2224",
    "name": "Kavya T.",
    "score": 139.09,
    "guildId": "g5"
  },
  {
    "id": "u2225",
    "name": "Siddharth S.",
    "score": 115.86,
    "guildId": "g1"
  },
  {
    "id": "u2226",
    "name": "Ananya W.",
    "score": 35.48,
    "guildId": "g1"
  },
  {
    "id": "u2227",
    "name": "Manish A.",
    "score": 57.39,
    "guildId": "g4"
  },
  {
    "id": "u2228",
    "name": "Aditya R.",
    "score": 81.49,
    "guildId": "g10"
  },
  {
    "id": "u2229",
    "name": "Megha S.",
    "score": 31.22,
    "guildId": "g9"
  },
  {
    "id": "u2230",
    "name": "Pooja D.",
    "score": 27.16,
    "guildId": "g3"
  },
  {
    "id": "u2231",
    "name": "Sneha S.",
    "score": 100.44,
    "guildId": "g2"
  },
  {
    "id": "u2232",
    "name": "Akash B.",
    "score": 52.23,
    "guildId": "g5"
  },
  {
    "id": "u2233",
    "name": "Amit B.",
    "score": 122.37,
    "guildId": "g1"
  },
  {
    "id": "u2234",
    "name": "Neha V.",
    "score": 130.25,
    "guildId": "g10"
  },
  {
    "id": "u2235",
    "name": "Ananya B.",
    "score": 140.79,
    "guildId": "g9"
  },
  {
    "id": "u2236",
    "name": "Luka D.",
    "score": 80.01,
    "guildId": "g4"
  },
  {
    "id": "u2237",
    "name": "Pooja D.",
    "score": 114.28,
    "guildId": "g8"
  },
  {
    "id": "u2238",
    "name": "Manish K.",
    "score": 105.38,
    "guildId": "g10"
  },
  {
    "id": "u2239",
    "name": "Rahul V.",
    "score": 109.45,
    "guildId": "g4"
  },
  {
    "id": "u2240",
    "name": "Ramesh W.",
    "score": 111.59,
    "guildId": "g5"
  },
  {
    "id": "u2241",
    "name": "Hans P.",
    "score": 33.25,
    "guildId": "g7"
  },
  {
    "id": "u2242",
    "name": "Suresh T.",
    "score": 77.2,
    "guildId": "g2"
  },
  {
    "id": "u2243",
    "name": "Pooja K.",
    "score": 104.69,
    "guildId": "g6"
  },
  {
    "id": "u2244",
    "name": "Priya T.",
    "score": 138.55,
    "guildId": "g2"
  },
  {
    "id": "u2245",
    "name": "Mia V.",
    "score": 65.86,
    "guildId": "g4"
  },
  {
    "id": "u2246",
    "name": "Kavya R.",
    "score": 92.79,
    "guildId": "g3"
  },
  {
    "id": "u2247",
    "name": "Hans T.",
    "score": 118,
    "guildId": "g9"
  },
  {
    "id": "u2248",
    "name": "Rahul Z.",
    "score": 111.92,
    "guildId": "g10"
  },
  {
    "id": "u2249",
    "name": "John Y.",
    "score": 138.84,
    "guildId": "g7"
  },
  {
    "id": "u2250",
    "name": "John S.",
    "score": 129.6,
    "guildId": "g9"
  },
  {
    "id": "u2251",
    "name": "Suresh S.",
    "score": 118.71,
    "guildId": "g10"
  },
  {
    "id": "u2252",
    "name": "Rohit A.",
    "score": 142.19,
    "guildId": "g7"
  },
  {
    "id": "u2253",
    "name": "Luka Y.",
    "score": 48.92,
    "guildId": "g10"
  },
  {
    "id": "u2254",
    "name": "Suresh P.",
    "score": 31.09,
    "guildId": "g4"
  },
  {
    "id": "u2255",
    "name": "Priya T.",
    "score": 34.98,
    "guildId": "g7"
  },
  {
    "id": "u2256",
    "name": "Divya W.",
    "score": 99.88,
    "guildId": "g3"
  },
  {
    "id": "u2257",
    "name": "Amit Z.",
    "score": 34.78,
    "guildId": "g3"
  },
  {
    "id": "u2258",
    "name": "Kavya R.",
    "score": 51.22,
    "guildId": "g8"
  },
  {
    "id": "u2259",
    "name": "Swati V.",
    "score": 126.93,
    "guildId": "g3"
  },
  {
    "id": "u2260",
    "name": "Ishita R.",
    "score": 120.27,
    "guildId": "g4"
  },
  {
    "id": "u2261",
    "name": "Emma B.",
    "score": 78.46,
    "guildId": "g8"
  },
  {
    "id": "u2262",
    "name": "Sophia Z.",
    "score": 126.31,
    "guildId": "g5"
  },
  {
    "id": "u2263",
    "name": "Ishita Z.",
    "score": 113.8,
    "guildId": "g4"
  },
  {
    "id": "u2264",
    "name": "Wei K.",
    "score": 27.79,
    "guildId": "g7"
  },
  {
    "id": "u2265",
    "name": "Amit K.",
    "score": 122.77,
    "guildId": "g4"
  },
  {
    "id": "u2266",
    "name": "Suresh R.",
    "score": 78.5,
    "guildId": "g7"
  },
  {
    "id": "u2267",
    "name": "Ananya K.",
    "score": 104.57,
    "guildId": "g1"
  },
  {
    "id": "u2268",
    "name": "Olivia C.",
    "score": 122.64,
    "guildId": "g1"
  },
  {
    "id": "u2269",
    "name": "Vikram D.",
    "score": 128.34,
    "guildId": "g2"
  },
  {
    "id": "u2270",
    "name": "Neha B.",
    "score": 144.27,
    "guildId": "g6"
  },
  {
    "id": "u2271",
    "name": "Siddharth V.",
    "score": 130,
    "guildId": "g10"
  },
  {
    "id": "u2272",
    "name": "Kavya M.",
    "score": 141.3,
    "guildId": "g10"
  },
  {
    "id": "u2273",
    "name": "Neha T.",
    "score": 89.65,
    "guildId": "g1"
  },
  {
    "id": "u2274",
    "name": "Manish W.",
    "score": 140.23,
    "guildId": "g4"
  },
  {
    "id": "u2275",
    "name": "Ravi Z.",
    "score": 15.28,
    "guildId": "g8"
  },
  {
    "id": "u2276",
    "name": "Anjali Y.",
    "score": 59.8,
    "guildId": "g4"
  },
  {
    "id": "u2277",
    "name": "Pooja Z.",
    "score": 69.29,
    "guildId": "g8"
  },
  {
    "id": "u2278",
    "name": "Karan P.",
    "score": 20.36,
    "guildId": "g6"
  },
  {
    "id": "u2279",
    "name": "Fatima T.",
    "score": 113.21,
    "guildId": "g4"
  },
  {
    "id": "u2280",
    "name": "Priya D.",
    "score": 29.34,
    "guildId": "g3"
  },
  {
    "id": "u2281",
    "name": "Kavya W.",
    "score": 24.44,
    "guildId": "g9"
  },
  {
    "id": "u2282",
    "name": "John B.",
    "score": 87.63,
    "guildId": "g4"
  },
  {
    "id": "u2283",
    "name": "Kavya C.",
    "score": 28.29,
    "guildId": "g8"
  },
  {
    "id": "u2284",
    "name": "Rahul B.",
    "score": 100.19,
    "guildId": "g9"
  },
  {
    "id": "u2285",
    "name": "Arjun Y.",
    "score": 86.61,
    "guildId": "g9"
  },
  {
    "id": "u2286",
    "name": "Suresh Z.",
    "score": 130.3,
    "guildId": "g10"
  },
  {
    "id": "u2287",
    "name": "Neha K.",
    "score": 17.68,
    "guildId": "g5"
  },
  {
    "id": "u2288",
    "name": "Sophia S.",
    "score": 138.34,
    "guildId": "g10"
  },
  {
    "id": "u2289",
    "name": "Megha C.",
    "score": 131.38,
    "guildId": "g1"
  },
  {
    "id": "u2290",
    "name": "Wei D.",
    "score": 94.64,
    "guildId": "g4"
  },
  {
    "id": "u2291",
    "name": "Swati W.",
    "score": 36.67,
    "guildId": "g1"
  },
  {
    "id": "u2292",
    "name": "Hiro P.",
    "score": 13.92,
    "guildId": "g1"
  },
  {
    "id": "u2293",
    "name": "Kavya A.",
    "score": 30.79,
    "guildId": "g10"
  },
  {
    "id": "u2294",
    "name": "Manish K.",
    "score": 50.52,
    "guildId": "g2"
  },
  {
    "id": "u2295",
    "name": "Anjali M.",
    "score": 129.56,
    "guildId": "g7"
  },
  {
    "id": "u2296",
    "name": "Kavya R.",
    "score": 65.47,
    "guildId": "g8"
  },
  {
    "id": "u2297",
    "name": "Noah D.",
    "score": 74.12,
    "guildId": "g8"
  },
  {
    "id": "u2298",
    "name": "Sneha K.",
    "score": 145.08,
    "guildId": "g6"
  },
  {
    "id": "u2299",
    "name": "Akash M.",
    "score": 59.49,
    "guildId": "g8"
  },
  {
    "id": "u2300",
    "name": "Isabella Y.",
    "score": 59.38,
    "guildId": "g10"
  },
  {
    "id": "u2301",
    "name": "Siddharth M.",
    "score": 25.08,
    "guildId": "g3"
  },
  {
    "id": "u2302",
    "name": "Ishita Y.",
    "score": 104.06,
    "guildId": "g7"
  },
  {
    "id": "u2303",
    "name": "Aditya B.",
    "score": 138.77,
    "guildId": "g2"
  },
  {
    "id": "u2304",
    "name": "Arjun P.",
    "score": 46.5,
    "guildId": "g4"
  },
  {
    "id": "u2305",
    "name": "Sneha K.",
    "score": 86.63,
    "guildId": "g2"
  },
  {
    "id": "u2306",
    "name": "Rahul M.",
    "score": 84.56,
    "guildId": "g10"
  },
  {
    "id": "u2307",
    "name": "Anjali V.",
    "score": 61.58,
    "guildId": "g1"
  },
  {
    "id": "u2308",
    "name": "Ishita S.",
    "score": 54.01,
    "guildId": "g4"
  },
  {
    "id": "u2309",
    "name": "Neha V.",
    "score": 146.92,
    "guildId": "g8"
  },
  {
    "id": "u2310",
    "name": "Rohit Y.",
    "score": 20.83,
    "guildId": "g4"
  },
  {
    "id": "u2311",
    "name": "Pooja D.",
    "score": 89.76,
    "guildId": "g5"
  },
  {
    "id": "u2312",
    "name": "Swati D.",
    "score": 128.14,
    "guildId": "g4"
  },
  {
    "id": "u2313",
    "name": "Ramesh D.",
    "score": 28.79,
    "guildId": "g7"
  },
  {
    "id": "u2314",
    "name": "Yuki P.",
    "score": 132.51,
    "guildId": "g9"
  },
  {
    "id": "u2315",
    "name": "Siddharth R.",
    "score": 31.89,
    "guildId": "g4"
  },
  {
    "id": "u2316",
    "name": "Siddharth Z.",
    "score": 73.43,
    "guildId": "g3"
  },
  {
    "id": "u2317",
    "name": "Siddharth Z.",
    "score": 124.71,
    "guildId": "g9"
  },
  {
    "id": "u2318",
    "name": "Mateo W.",
    "score": 33.89,
    "guildId": "g4"
  },
  {
    "id": "u2319",
    "name": "Manish S.",
    "score": 109.68,
    "guildId": "g3"
  },
  {
    "id": "u2320",
    "name": "Suresh S.",
    "score": 73.92,
    "guildId": "g8"
  },
  {
    "id": "u2321",
    "name": "Hiro K.",
    "score": 123.2,
    "guildId": "g2"
  },
  {
    "id": "u2322",
    "name": "Aditya S.",
    "score": 25.67,
    "guildId": "g2"
  },
  {
    "id": "u2323",
    "name": "Amit B.",
    "score": 44.98,
    "guildId": "g5"
  },
  {
    "id": "u2324",
    "name": "Liam K.",
    "score": 77.59,
    "guildId": "g4"
  },
  {
    "id": "u2325",
    "name": "Mateo R.",
    "score": 101.42,
    "guildId": "g3"
  },
  {
    "id": "u2326",
    "name": "Neha W.",
    "score": 124.52,
    "guildId": "g9"
  },
  {
    "id": "u2327",
    "name": "Vikram D.",
    "score": 84.88,
    "guildId": "g6"
  },
  {
    "id": "u2328",
    "name": "Pooja Y.",
    "score": 12.44,
    "guildId": "g9"
  },
  {
    "id": "u2329",
    "name": "Mateo W.",
    "score": 96.57,
    "guildId": "g4"
  },
  {
    "id": "u2330",
    "name": "Wei S.",
    "score": 74.03,
    "guildId": "g1"
  },
  {
    "id": "u2331",
    "name": "Greta D.",
    "score": 13.64,
    "guildId": "g7"
  },
  {
    "id": "u2332",
    "name": "Kavya R.",
    "score": 13.3,
    "guildId": "g7"
  },
  {
    "id": "u2333",
    "name": "Swati P.",
    "score": 104.81,
    "guildId": "g1"
  },
  {
    "id": "u2334",
    "name": "Manish S.",
    "score": 145.51,
    "guildId": "g1"
  },
  {
    "id": "u2335",
    "name": "Sneha Z.",
    "score": 126.14,
    "guildId": "g6"
  },
  {
    "id": "u2336",
    "name": "Hans M.",
    "score": 11.33,
    "guildId": "g7"
  },
  {
    "id": "u2337",
    "name": "Sophia W.",
    "score": 101.99,
    "guildId": "g10"
  },
  {
    "id": "u2338",
    "name": "Fatima R.",
    "score": 55.6,
    "guildId": "g8"
  },
  {
    "id": "u2339",
    "name": "Ishita R.",
    "score": 29.31,
    "guildId": "g2"
  },
  {
    "id": "u2340",
    "name": "Anjali Y.",
    "score": 133.77,
    "guildId": "g2"
  },
  {
    "id": "u2341",
    "name": "Ishita R.",
    "score": 84.43,
    "guildId": "g3"
  },
  {
    "id": "u2342",
    "name": "Divya K.",
    "score": 42.2,
    "guildId": "g1"
  },
  {
    "id": "u2343",
    "name": "Akash C.",
    "score": 35.5,
    "guildId": "g5"
  },
  {
    "id": "u2344",
    "name": "Kavya Z.",
    "score": 91.64,
    "guildId": "g3"
  },
  {
    "id": "u2345",
    "name": "Ishita K.",
    "score": 148.58,
    "guildId": "g9"
  },
  {
    "id": "u2346",
    "name": "Amit Y.",
    "score": 38.07,
    "guildId": "g7"
  },
  {
    "id": "u2347",
    "name": "Yuki B.",
    "score": 105.55,
    "guildId": "g7"
  },
  {
    "id": "u2348",
    "name": "Vikram B.",
    "score": 80.01,
    "guildId": "g2"
  },
  {
    "id": "u2349",
    "name": "Olivia D.",
    "score": 123.13,
    "guildId": "g6"
  },
  {
    "id": "u2350",
    "name": "Karan R.",
    "score": 20.45,
    "guildId": "g5"
  },
  {
    "id": "u2351",
    "name": "Ravi T.",
    "score": 44.97,
    "guildId": "g1"
  },
  {
    "id": "u2352",
    "name": "Isabella R.",
    "score": 97.23,
    "guildId": "g3"
  },
  {
    "id": "u2353",
    "name": "Swati Y.",
    "score": 81.68,
    "guildId": "g5"
  },
  {
    "id": "u2354",
    "name": "Akash D.",
    "score": 51.64,
    "guildId": "g1"
  },
  {
    "id": "u2355",
    "name": "Amit Z.",
    "score": 121.6,
    "guildId": "g8"
  },
  {
    "id": "u2356",
    "name": "Mateo B.",
    "score": 110.65,
    "guildId": "g8"
  },
  {
    "id": "u2357",
    "name": "Neha T.",
    "score": 57.21,
    "guildId": "g4"
  },
  {
    "id": "u2358",
    "name": "Neha V.",
    "score": 132.12,
    "guildId": "g3"
  },
  {
    "id": "u2359",
    "name": "Yuki B.",
    "score": 84.38,
    "guildId": "g8"
  },
  {
    "id": "u2360",
    "name": "Vikram Y.",
    "score": 59.75,
    "guildId": "g10"
  },
  {
    "id": "u2361",
    "name": "Karan W.",
    "score": 32.04,
    "guildId": "g7"
  },
  {
    "id": "u2362",
    "name": "Anjali Z.",
    "score": 60.01,
    "guildId": "g6"
  },
  {
    "id": "u2363",
    "name": "Pooja Y.",
    "score": 14.8,
    "guildId": "g7"
  },
  {
    "id": "u2364",
    "name": "Sneha Y.",
    "score": 131.01,
    "guildId": "g10"
  },
  {
    "id": "u2365",
    "name": "Rohit C.",
    "score": 59.59,
    "guildId": "g10"
  },
  {
    "id": "u2366",
    "name": "Sneha T.",
    "score": 37.37,
    "guildId": "g5"
  },
  {
    "id": "u2367",
    "name": "Rohit S.",
    "score": 23.41,
    "guildId": "g9"
  },
  {
    "id": "u2368",
    "name": "Pooja V.",
    "score": 20.17,
    "guildId": "g8"
  },
  {
    "id": "u2369",
    "name": "Anjali D.",
    "score": 112.92,
    "guildId": "g10"
  },
  {
    "id": "u2370",
    "name": "Sneha R.",
    "score": 132.62,
    "guildId": "g2"
  },
  {
    "id": "u2371",
    "name": "Pooja P.",
    "score": 119.82,
    "guildId": "g9"
  },
  {
    "id": "u2372",
    "name": "Suresh Y.",
    "score": 67.81,
    "guildId": "g6"
  },
  {
    "id": "u2373",
    "name": "Megha C.",
    "score": 99.12,
    "guildId": "g6"
  },
  {
    "id": "u2374",
    "name": "Swati W.",
    "score": 53.71,
    "guildId": "g8"
  },
  {
    "id": "u2375",
    "name": "Ali A.",
    "score": 23.94,
    "guildId": "g9"
  },
  {
    "id": "u2376",
    "name": "Suresh S.",
    "score": 112.78,
    "guildId": "g10"
  },
  {
    "id": "u2377",
    "name": "Chen K.",
    "score": 69.77,
    "guildId": "g2"
  },
  {
    "id": "u2378",
    "name": "Priya R.",
    "score": 15.32,
    "guildId": "g3"
  },
  {
    "id": "u2379",
    "name": "Pooja S.",
    "score": 98.34,
    "guildId": "g4"
  },
  {
    "id": "u2380",
    "name": "Wei C.",
    "score": 46.62,
    "guildId": "g9"
  },
  {
    "id": "u2381",
    "name": "Vikram C.",
    "score": 91.61,
    "guildId": "g6"
  },
  {
    "id": "u2382",
    "name": "Suresh M.",
    "score": 33.47,
    "guildId": "g8"
  },
  {
    "id": "u2383",
    "name": "Kavya Z.",
    "score": 43.12,
    "guildId": "g7"
  },
  {
    "id": "u2384",
    "name": "Swati W.",
    "score": 50.5,
    "guildId": "g8"
  },
  {
    "id": "u2385",
    "name": "Mia Z.",
    "score": 61.19,
    "guildId": "g6"
  },
  {
    "id": "u2386",
    "name": "Swati A.",
    "score": 28.34,
    "guildId": "g5"
  },
  {
    "id": "u2387",
    "name": "Siddharth S.",
    "score": 33.34,
    "guildId": "g3"
  },
  {
    "id": "u2388",
    "name": "Kavya S.",
    "score": 21.75,
    "guildId": "g3"
  },
  {
    "id": "u2389",
    "name": "Arjun Y.",
    "score": 124.76,
    "guildId": "g7"
  },
  {
    "id": "u2390",
    "name": "Hiro V.",
    "score": 66.14,
    "guildId": "g9"
  },
  {
    "id": "u2391",
    "name": "Manish V.",
    "score": 108.79,
    "guildId": "g6"
  },
  {
    "id": "u2392",
    "name": "Karan Y.",
    "score": 96.17,
    "guildId": "g8"
  },
  {
    "id": "u2393",
    "name": "Hans C.",
    "score": 30.77,
    "guildId": "g6"
  },
  {
    "id": "u2394",
    "name": "Amit D.",
    "score": 112.43,
    "guildId": "g9"
  },
  {
    "id": "u2395",
    "name": "Kavya B.",
    "score": 88.28,
    "guildId": "g2"
  },
  {
    "id": "u2396",
    "name": "Ravi Y.",
    "score": 87.67,
    "guildId": "g2"
  },
  {
    "id": "u2397",
    "name": "Kavya B.",
    "score": 89.94,
    "guildId": "g10"
  },
  {
    "id": "u2398",
    "name": "Mateo B.",
    "score": 100.47,
    "guildId": "g6"
  },
  {
    "id": "u2399",
    "name": "Amit R.",
    "score": 27.24,
    "guildId": "g8"
  },
  {
    "id": "u2400",
    "name": "Ishita A.",
    "score": 20.37,
    "guildId": "g3"
  },
  {
    "id": "u2401",
    "name": "Priya Z.",
    "score": 144.12,
    "guildId": "g1"
  },
  {
    "id": "u2402",
    "name": "Anjali S.",
    "score": 83.96,
    "guildId": "g7"
  },
  {
    "id": "u2403",
    "name": "Amit B.",
    "score": 13.67,
    "guildId": "g7"
  },
  {
    "id": "u2404",
    "name": "Isabella C.",
    "score": 26.98,
    "guildId": "g3"
  },
  {
    "id": "u2405",
    "name": "Ali Z.",
    "score": 104.27,
    "guildId": "g8"
  },
  {
    "id": "u2406",
    "name": "Pooja D.",
    "score": 61.14,
    "guildId": "g1"
  },
  {
    "id": "u2407",
    "name": "Sneha W.",
    "score": 72.2,
    "guildId": "g9"
  },
  {
    "id": "u2408",
    "name": "Yuki T.",
    "score": 32.12,
    "guildId": "g7"
  },
  {
    "id": "u2409",
    "name": "Emma D.",
    "score": 107.09,
    "guildId": "g4"
  },
  {
    "id": "u2410",
    "name": "Neha R.",
    "score": 120.59,
    "guildId": "g1"
  },
  {
    "id": "u2411",
    "name": "Ishita B.",
    "score": 138.52,
    "guildId": "g5"
  },
  {
    "id": "u2412",
    "name": "Suresh W.",
    "score": 98.09,
    "guildId": "g8"
  },
  {
    "id": "u2413",
    "name": "Sophia D.",
    "score": 121.23,
    "guildId": "g4"
  },
  {
    "id": "u2414",
    "name": "Olivia V.",
    "score": 84.31,
    "guildId": "g1"
  },
  {
    "id": "u2415",
    "name": "Divya R.",
    "score": 78.74,
    "guildId": "g2"
  },
  {
    "id": "u2416",
    "name": "Swati T.",
    "score": 93.11,
    "guildId": "g9"
  },
  {
    "id": "u2417",
    "name": "Swati Y.",
    "score": 71.57,
    "guildId": "g2"
  },
  {
    "id": "u2418",
    "name": "Aditya A.",
    "score": 115.01,
    "guildId": "g9"
  },
  {
    "id": "u2419",
    "name": "Arjun V.",
    "score": 101.55,
    "guildId": "g10"
  },
  {
    "id": "u2420",
    "name": "Sneha T.",
    "score": 85.26,
    "guildId": "g2"
  },
  {
    "id": "u2421",
    "name": "Divya R.",
    "score": 121.12,
    "guildId": "g7"
  },
  {
    "id": "u2422",
    "name": "Ramesh V.",
    "score": 103.93,
    "guildId": "g10"
  },
  {
    "id": "u2423",
    "name": "Ramesh B.",
    "score": 120.72,
    "guildId": "g1"
  },
  {
    "id": "u2424",
    "name": "Ananya B.",
    "score": 21.53,
    "guildId": "g2"
  },
  {
    "id": "u2425",
    "name": "Ishita V.",
    "score": 134,
    "guildId": "g10"
  },
  {
    "id": "u2426",
    "name": "Ananya M.",
    "score": 71.94,
    "guildId": "g1"
  },
  {
    "id": "u2427",
    "name": "Noah Y.",
    "score": 126.05,
    "guildId": "g1"
  },
  {
    "id": "u2428",
    "name": "Priya T.",
    "score": 91.54,
    "guildId": "g3"
  },
  {
    "id": "u2429",
    "name": "Kavya P.",
    "score": 55.26,
    "guildId": "g7"
  },
  {
    "id": "u2430",
    "name": "Pooja A.",
    "score": 128.63,
    "guildId": "g1"
  },
  {
    "id": "u2431",
    "name": "Swati C.",
    "score": 124.99,
    "guildId": "g7"
  },
  {
    "id": "u2432",
    "name": "Sneha M.",
    "score": 86.1,
    "guildId": "g8"
  },
  {
    "id": "u2433",
    "name": "Ali W.",
    "score": 61.2,
    "guildId": "g8"
  },
  {
    "id": "u2434",
    "name": "Neha R.",
    "score": 69.77,
    "guildId": "g4"
  },
  {
    "id": "u2435",
    "name": "Rohit M.",
    "score": 61.54,
    "guildId": "g5"
  },
  {
    "id": "u2436",
    "name": "Ravi D.",
    "score": 59.21,
    "guildId": "g4"
  },
  {
    "id": "u2437",
    "name": "Amit R.",
    "score": 132.88,
    "guildId": "g9"
  },
  {
    "id": "u2438",
    "name": "Ananya P.",
    "score": 34.9,
    "guildId": "g4"
  },
  {
    "id": "u2439",
    "name": "Priya S.",
    "score": 104.98,
    "guildId": "g9"
  },
  {
    "id": "u2440",
    "name": "Karan S.",
    "score": 58.88,
    "guildId": "g2"
  },
  {
    "id": "u2441",
    "name": "Kavya B.",
    "score": 140.92,
    "guildId": "g3"
  },
  {
    "id": "u2442",
    "name": "Ravi B.",
    "score": 15.41,
    "guildId": "g6"
  },
  {
    "id": "u2443",
    "name": "Ananya R.",
    "score": 73.58,
    "guildId": "g10"
  },
  {
    "id": "u2444",
    "name": "Anjali Y.",
    "score": 90.32,
    "guildId": "g6"
  },
  {
    "id": "u2445",
    "name": "Karan P.",
    "score": 41.7,
    "guildId": "g1"
  },
  {
    "id": "u2446",
    "name": "Karan P.",
    "score": 149.33,
    "guildId": "g2"
  },
  {
    "id": "u2447",
    "name": "Chen V.",
    "score": 27.4,
    "guildId": "g9"
  },
  {
    "id": "u2448",
    "name": "Ananya W.",
    "score": 58.11,
    "guildId": "g9"
  },
  {
    "id": "u2449",
    "name": "Akash K.",
    "score": 138.46,
    "guildId": "g4"
  },
  {
    "id": "u2450",
    "name": "Ishita P.",
    "score": 32.93,
    "guildId": "g8"
  },
  {
    "id": "u2451",
    "name": "Vikram Z.",
    "score": 62.11,
    "guildId": "g4"
  },
  {
    "id": "u2452",
    "name": "Greta K.",
    "score": 50.07,
    "guildId": "g9"
  },
  {
    "id": "u2453",
    "name": "Anjali T.",
    "score": 19.99,
    "guildId": "g2"
  },
  {
    "id": "u2454",
    "name": "Suresh A.",
    "score": 125.17,
    "guildId": "g5"
  },
  {
    "id": "u2455",
    "name": "Rohit M.",
    "score": 14.24,
    "guildId": "g4"
  },
  {
    "id": "u2456",
    "name": "Amit T.",
    "score": 64.29,
    "guildId": "g2"
  },
  {
    "id": "u2457",
    "name": "Manish M.",
    "score": 147.02,
    "guildId": "g7"
  },
  {
    "id": "u2458",
    "name": "Megha M.",
    "score": 52.82,
    "guildId": "g7"
  },
  {
    "id": "u2459",
    "name": "Aditya Z.",
    "score": 16.78,
    "guildId": "g3"
  },
  {
    "id": "u2460",
    "name": "Mia T.",
    "score": 27.86,
    "guildId": "g9"
  },
  {
    "id": "u2461",
    "name": "Hiro P.",
    "score": 145.77,
    "guildId": "g9"
  },
  {
    "id": "u2462",
    "name": "Liam M.",
    "score": 147.57,
    "guildId": "g9"
  },
  {
    "id": "u2463",
    "name": "Mateo V.",
    "score": 45.2,
    "guildId": "g10"
  },
  {
    "id": "u2464",
    "name": "Mateo D.",
    "score": 136.68,
    "guildId": "g1"
  },
  {
    "id": "u2465",
    "name": "Suresh Z.",
    "score": 36.12,
    "guildId": "g6"
  },
  {
    "id": "u2466",
    "name": "Vikram S.",
    "score": 77.69,
    "guildId": "g1"
  },
  {
    "id": "u2467",
    "name": "Ramesh B.",
    "score": 133.85,
    "guildId": "g4"
  },
  {
    "id": "u2468",
    "name": "Ananya K.",
    "score": 141.81,
    "guildId": "g5"
  },
  {
    "id": "u2469",
    "name": "Greta R.",
    "score": 116.62,
    "guildId": "g3"
  },
  {
    "id": "u2470",
    "name": "Kavya S.",
    "score": 123.66,
    "guildId": "g2"
  },
  {
    "id": "u2471",
    "name": "Rohit M.",
    "score": 30.65,
    "guildId": "g8"
  },
  {
    "id": "u2472",
    "name": "Amit V.",
    "score": 44.43,
    "guildId": "g9"
  },
  {
    "id": "u2473",
    "name": "Luka V.",
    "score": 56.24,
    "guildId": "g7"
  },
  {
    "id": "u2474",
    "name": "Karan A.",
    "score": 11.76,
    "guildId": "g2"
  },
  {
    "id": "u2475",
    "name": "Ishita S.",
    "score": 60.17,
    "guildId": "g2"
  },
  {
    "id": "u2476",
    "name": "Kavya Z.",
    "score": 25.43,
    "guildId": "g2"
  },
  {
    "id": "u2477",
    "name": "Ishita V.",
    "score": 95.5,
    "guildId": "g1"
  },
  {
    "id": "u2478",
    "name": "Ishita Y.",
    "score": 103.76,
    "guildId": "g7"
  },
  {
    "id": "u2479",
    "name": "Swati M.",
    "score": 36.79,
    "guildId": "g3"
  },
  {
    "id": "u2480",
    "name": "Swati Z.",
    "score": 35.55,
    "guildId": "g9"
  },
  {
    "id": "u2481",
    "name": "Sophia K.",
    "score": 115.55,
    "guildId": "g2"
  },
  {
    "id": "u2482",
    "name": "Megha T.",
    "score": 90.33,
    "guildId": "g4"
  },
  {
    "id": "u2483",
    "name": "Ananya W.",
    "score": 94.52,
    "guildId": "g1"
  },
  {
    "id": "u2484",
    "name": "Yuki W.",
    "score": 24.37,
    "guildId": "g6"
  },
  {
    "id": "u2485",
    "name": "Liam C.",
    "score": 142.04,
    "guildId": "g10"
  },
  {
    "id": "u2486",
    "name": "Greta V.",
    "score": 71.75,
    "guildId": "g10"
  },
  {
    "id": "u2487",
    "name": "Vikram C.",
    "score": 136.28,
    "guildId": "g6"
  },
  {
    "id": "u2488",
    "name": "Akash T.",
    "score": 99.49,
    "guildId": "g3"
  },
  {
    "id": "u2489",
    "name": "Wei C.",
    "score": 148.33,
    "guildId": "g10"
  },
  {
    "id": "u2490",
    "name": "Suresh M.",
    "score": 123.31,
    "guildId": "g2"
  },
  {
    "id": "u2491",
    "name": "Divya P.",
    "score": 40.33,
    "guildId": "g10"
  },
  {
    "id": "u2492",
    "name": "Arjun V.",
    "score": 11.64,
    "guildId": "g10"
  },
  {
    "id": "u2493",
    "name": "Manish V.",
    "score": 85.47,
    "guildId": "g9"
  },
  {
    "id": "u2494",
    "name": "Rohit V.",
    "score": 109.62,
    "guildId": "g3"
  },
  {
    "id": "u2495",
    "name": "Amit V.",
    "score": 26.15,
    "guildId": "g4"
  },
  {
    "id": "u2496",
    "name": "Akash B.",
    "score": 113.01,
    "guildId": "g5"
  },
  {
    "id": "u2497",
    "name": "John T.",
    "score": 114.23,
    "guildId": "g5"
  },
  {
    "id": "u2498",
    "name": "Amit Z.",
    "score": 15.52,
    "guildId": "g3"
  },
  {
    "id": "u2499",
    "name": "Neha K.",
    "score": 37.65,
    "guildId": "g9"
  },
  {
    "id": "u2500",
    "name": "Isabella T.",
    "score": 99.4,
    "guildId": "g6"
  },
  {
    "id": "u2501",
    "name": "Aditya Y.",
    "score": 125.78,
    "guildId": "g7"
  },
  {
    "id": "u2502",
    "name": "Mateo A.",
    "score": 71.64,
    "guildId": "g5"
  },
  {
    "id": "u2503",
    "name": "Megha R.",
    "score": 83.52,
    "guildId": "g3"
  },
  {
    "id": "u2504",
    "name": "Aditya Z.",
    "score": 103.79,
    "guildId": "g6"
  },
  {
    "id": "u2505",
    "name": "Priya S.",
    "score": 74.67,
    "guildId": "g6"
  },
  {
    "id": "u2506",
    "name": "Amit V.",
    "score": 110.78,
    "guildId": "g4"
  },
  {
    "id": "u2507",
    "name": "Isabella Y.",
    "score": 25.53,
    "guildId": "g5"
  },
  {
    "id": "u2508",
    "name": "Vikram M.",
    "score": 55.08,
    "guildId": "g3"
  },
  {
    "id": "u2509",
    "name": "Vikram S.",
    "score": 85.05,
    "guildId": "g2"
  },
  {
    "id": "u2510",
    "name": "Priya C.",
    "score": 105.61,
    "guildId": "g1"
  },
  {
    "id": "u2511",
    "name": "Megha P.",
    "score": 38.95,
    "guildId": "g10"
  },
  {
    "id": "u2512",
    "name": "Akash C.",
    "score": 146.23,
    "guildId": "g7"
  },
  {
    "id": "u2513",
    "name": "Noah A.",
    "score": 61.19,
    "guildId": "g1"
  },
  {
    "id": "u2514",
    "name": "Pooja A.",
    "score": 94.7,
    "guildId": "g7"
  },
  {
    "id": "u2515",
    "name": "Arjun R.",
    "score": 72.52,
    "guildId": "g5"
  },
  {
    "id": "u2516",
    "name": "Greta B.",
    "score": 85.57,
    "guildId": "g6"
  },
  {
    "id": "u2517",
    "name": "Aditya S.",
    "score": 129.79,
    "guildId": "g2"
  },
  {
    "id": "u2518",
    "name": "Ishita B.",
    "score": 10.02,
    "guildId": "g7"
  },
  {
    "id": "u2519",
    "name": "Ravi A.",
    "score": 102.16,
    "guildId": "g6"
  },
  {
    "id": "u2520",
    "name": "Hiro W.",
    "score": 131.48,
    "guildId": "g5"
  },
  {
    "id": "u2521",
    "name": "Akash V.",
    "score": 69.69,
    "guildId": "g1"
  },
  {
    "id": "u2522",
    "name": "Swati S.",
    "score": 65.91,
    "guildId": "g5"
  },
  {
    "id": "u2523",
    "name": "Wei D.",
    "score": 108.83,
    "guildId": "g1"
  },
  {
    "id": "u2524",
    "name": "Emma M.",
    "score": 147.27,
    "guildId": "g9"
  },
  {
    "id": "u2525",
    "name": "Pooja W.",
    "score": 143.73,
    "guildId": "g4"
  },
  {
    "id": "u2526",
    "name": "Karan K.",
    "score": 44.02,
    "guildId": "g7"
  },
  {
    "id": "u2527",
    "name": "Yuki R.",
    "score": 42.47,
    "guildId": "g4"
  },
  {
    "id": "u2528",
    "name": "Megha Y.",
    "score": 101.49,
    "guildId": "g6"
  },
  {
    "id": "u2529",
    "name": "Rohit P.",
    "score": 58.62,
    "guildId": "g5"
  },
  {
    "id": "u2530",
    "name": "Hans Z.",
    "score": 122.75,
    "guildId": "g10"
  },
  {
    "id": "u2531",
    "name": "Vikram T.",
    "score": 52.93,
    "guildId": "g3"
  },
  {
    "id": "u2532",
    "name": "Megha W.",
    "score": 146.77,
    "guildId": "g4"
  },
  {
    "id": "u2533",
    "name": "Akash P.",
    "score": 64.44,
    "guildId": "g1"
  },
  {
    "id": "u2534",
    "name": "Wei M.",
    "score": 135.51,
    "guildId": "g4"
  },
  {
    "id": "u2535",
    "name": "Sneha C.",
    "score": 149.81,
    "guildId": "g2"
  },
  {
    "id": "u2536",
    "name": "Vikram Z.",
    "score": 74.97,
    "guildId": "g9"
  },
  {
    "id": "u2537",
    "name": "Rohit V.",
    "score": 103.9,
    "guildId": "g2"
  },
  {
    "id": "u2538",
    "name": "Akash Z.",
    "score": 126.58,
    "guildId": "g9"
  },
  {
    "id": "u2539",
    "name": "Noah W.",
    "score": 129.2,
    "guildId": "g7"
  },
  {
    "id": "u2540",
    "name": "Ravi B.",
    "score": 110.26,
    "guildId": "g5"
  },
  {
    "id": "u2541",
    "name": "Pooja P.",
    "score": 125.54,
    "guildId": "g9"
  },
  {
    "id": "u2542",
    "name": "Manish P.",
    "score": 35.65,
    "guildId": "g2"
  },
  {
    "id": "u2543",
    "name": "Ali C.",
    "score": 94.37,
    "guildId": "g6"
  },
  {
    "id": "u2544",
    "name": "Aditya P.",
    "score": 77.58,
    "guildId": "g5"
  },
  {
    "id": "u2545",
    "name": "Anjali W.",
    "score": 29.72,
    "guildId": "g4"
  },
  {
    "id": "u2546",
    "name": "Akash P.",
    "score": 149.69,
    "guildId": "g3"
  },
  {
    "id": "u2547",
    "name": "Divya M.",
    "score": 88.14,
    "guildId": "g5"
  },
  {
    "id": "u2548",
    "name": "Karan V.",
    "score": 126.05,
    "guildId": "g1"
  },
  {
    "id": "u2549",
    "name": "Akash A.",
    "score": 70.28,
    "guildId": "g6"
  },
  {
    "id": "u2550",
    "name": "Noah D.",
    "score": 67.93,
    "guildId": "g6"
  },
  {
    "id": "u2551",
    "name": "Mateo D.",
    "score": 96.57,
    "guildId": "g10"
  },
  {
    "id": "u2552",
    "name": "Suresh Y.",
    "score": 114.69,
    "guildId": "g8"
  },
  {
    "id": "u2553",
    "name": "Amit C.",
    "score": 46.19,
    "guildId": "g8"
  },
  {
    "id": "u2554",
    "name": "Manish W.",
    "score": 73.88,
    "guildId": "g6"
  },
  {
    "id": "u2555",
    "name": "Kavya A.",
    "score": 101.11,
    "guildId": "g1"
  },
  {
    "id": "u2556",
    "name": "Emma C.",
    "score": 32.67,
    "guildId": "g2"
  },
  {
    "id": "u2557",
    "name": "Ali M.",
    "score": 64.24,
    "guildId": "g6"
  },
  {
    "id": "u2558",
    "name": "Rahul S.",
    "score": 45.11,
    "guildId": "g10"
  },
  {
    "id": "u2559",
    "name": "Neha Y.",
    "score": 96.57,
    "guildId": "g5"
  },
  {
    "id": "u2560",
    "name": "Ishita Z.",
    "score": 15.86,
    "guildId": "g2"
  },
  {
    "id": "u2561",
    "name": "Arjun D.",
    "score": 106.11,
    "guildId": "g8"
  },
  {
    "id": "u2562",
    "name": "Ananya B.",
    "score": 126.15,
    "guildId": "g7"
  },
  {
    "id": "u2563",
    "name": "Ravi S.",
    "score": 27.01,
    "guildId": "g7"
  },
  {
    "id": "u2564",
    "name": "Neha K.",
    "score": 75.23,
    "guildId": "g7"
  },
  {
    "id": "u2565",
    "name": "Swati C.",
    "score": 46.07,
    "guildId": "g1"
  },
  {
    "id": "u2566",
    "name": "Swati D.",
    "score": 56.96,
    "guildId": "g5"
  },
  {
    "id": "u2567",
    "name": "Priya M.",
    "score": 106.75,
    "guildId": "g8"
  },
  {
    "id": "u2568",
    "name": "Priya P.",
    "score": 143.42,
    "guildId": "g9"
  },
  {
    "id": "u2569",
    "name": "Ananya C.",
    "score": 87.32,
    "guildId": "g10"
  },
  {
    "id": "u2570",
    "name": "Anjali B.",
    "score": 104.89,
    "guildId": "g8"
  },
  {
    "id": "u2571",
    "name": "Arjun V.",
    "score": 103.66,
    "guildId": "g5"
  },
  {
    "id": "u2572",
    "name": "Arjun Z.",
    "score": 31.38,
    "guildId": "g7"
  },
  {
    "id": "u2573",
    "name": "Swati D.",
    "score": 142.86,
    "guildId": "g5"
  },
  {
    "id": "u2574",
    "name": "Divya R.",
    "score": 26.79,
    "guildId": "g2"
  },
  {
    "id": "u2575",
    "name": "Ravi M.",
    "score": 79,
    "guildId": "g2"
  },
  {
    "id": "u2576",
    "name": "Kavya M.",
    "score": 52.44,
    "guildId": "g4"
  },
  {
    "id": "u2577",
    "name": "Hiro D.",
    "score": 52.3,
    "guildId": "g9"
  },
  {
    "id": "u2578",
    "name": "Vikram Y.",
    "score": 52.62,
    "guildId": "g7"
  },
  {
    "id": "u2579",
    "name": "Amit B.",
    "score": 12.61,
    "guildId": "g5"
  },
  {
    "id": "u2580",
    "name": "Rahul T.",
    "score": 120.31,
    "guildId": "g6"
  },
  {
    "id": "u2581",
    "name": "Sneha C.",
    "score": 12.5,
    "guildId": "g4"
  },
  {
    "id": "u2582",
    "name": "Aditya R.",
    "score": 126.4,
    "guildId": "g10"
  },
  {
    "id": "u2583",
    "name": "Karan Y.",
    "score": 61.52,
    "guildId": "g10"
  },
  {
    "id": "u2584",
    "name": "Ramesh S.",
    "score": 106.92,
    "guildId": "g1"
  },
  {
    "id": "u2585",
    "name": "Sneha Y.",
    "score": 64.61,
    "guildId": "g4"
  },
  {
    "id": "u2586",
    "name": "Ravi K.",
    "score": 109.81,
    "guildId": "g7"
  },
  {
    "id": "u2587",
    "name": "Sophia K.",
    "score": 38.6,
    "guildId": "g8"
  },
  {
    "id": "u2588",
    "name": "Manish D.",
    "score": 131.49,
    "guildId": "g2"
  },
  {
    "id": "u2589",
    "name": "Ramesh C.",
    "score": 141.34,
    "guildId": "g10"
  },
  {
    "id": "u2590",
    "name": "Siddharth W.",
    "score": 59.92,
    "guildId": "g8"
  },
  {
    "id": "u2591",
    "name": "Rohit M.",
    "score": 92.08,
    "guildId": "g8"
  },
  {
    "id": "u2592",
    "name": "Amit Y.",
    "score": 77.07,
    "guildId": "g6"
  },
  {
    "id": "u2593",
    "name": "Ishita R.",
    "score": 72.55,
    "guildId": "g8"
  },
  {
    "id": "u2594",
    "name": "Ishita W.",
    "score": 38.71,
    "guildId": "g4"
  },
  {
    "id": "u2595",
    "name": "Emma W.",
    "score": 57.1,
    "guildId": "g1"
  },
  {
    "id": "u2596",
    "name": "Manish M.",
    "score": 103.17,
    "guildId": "g9"
  },
  {
    "id": "u2597",
    "name": "Priya D.",
    "score": 11.26,
    "guildId": "g8"
  },
  {
    "id": "u2598",
    "name": "Hiro T.",
    "score": 75.73,
    "guildId": "g2"
  },
  {
    "id": "u2599",
    "name": "Priya K.",
    "score": 147.65,
    "guildId": "g5"
  },
  {
    "id": "u2600",
    "name": "Ishita K.",
    "score": 76.84,
    "guildId": "g9"
  },
  {
    "id": "u2601",
    "name": "Arjun M.",
    "score": 129.17,
    "guildId": "g5"
  },
  {
    "id": "u2602",
    "name": "Divya K.",
    "score": 71.44,
    "guildId": "g1"
  },
  {
    "id": "u2603",
    "name": "Ravi M.",
    "score": 14.07,
    "guildId": "g5"
  },
  {
    "id": "u2604",
    "name": "Manish Y.",
    "score": 45.54,
    "guildId": "g10"
  },
  {
    "id": "u2605",
    "name": "Isabella V.",
    "score": 117.65,
    "guildId": "g6"
  },
  {
    "id": "u2606",
    "name": "Rohit A.",
    "score": 67.22,
    "guildId": "g8"
  },
  {
    "id": "u2607",
    "name": "Anjali W.",
    "score": 137.08,
    "guildId": "g9"
  },
  {
    "id": "u2608",
    "name": "Olivia P.",
    "score": 74.56,
    "guildId": "g5"
  },
  {
    "id": "u2609",
    "name": "Anjali C.",
    "score": 97.59,
    "guildId": "g1"
  },
  {
    "id": "u2610",
    "name": "Suresh Z.",
    "score": 93.19,
    "guildId": "g9"
  },
  {
    "id": "u2611",
    "name": "Anjali Z.",
    "score": 67.42,
    "guildId": "g10"
  },
  {
    "id": "u2612",
    "name": "Neha D.",
    "score": 115.08,
    "guildId": "g1"
  },
  {
    "id": "u2613",
    "name": "Siddharth B.",
    "score": 136.53,
    "guildId": "g1"
  },
  {
    "id": "u2614",
    "name": "Liam R.",
    "score": 22.38,
    "guildId": "g2"
  },
  {
    "id": "u2615",
    "name": "Rohit R.",
    "score": 125.18,
    "guildId": "g4"
  },
  {
    "id": "u2616",
    "name": "Liam R.",
    "score": 53.42,
    "guildId": "g3"
  },
  {
    "id": "u2617",
    "name": "Pooja Z.",
    "score": 81.15,
    "guildId": "g6"
  },
  {
    "id": "u2618",
    "name": "Kavya A.",
    "score": 136.93,
    "guildId": "g3"
  },
  {
    "id": "u2619",
    "name": "Divya A.",
    "score": 146.85,
    "guildId": "g7"
  },
  {
    "id": "u2620",
    "name": "Aditya K.",
    "score": 61.4,
    "guildId": "g1"
  },
  {
    "id": "u2621",
    "name": "John W.",
    "score": 78.41,
    "guildId": "g2"
  },
  {
    "id": "u2622",
    "name": "Ramesh A.",
    "score": 94.7,
    "guildId": "g4"
  },
  {
    "id": "u2623",
    "name": "Megha T.",
    "score": 113.22,
    "guildId": "g4"
  },
  {
    "id": "u2624",
    "name": "Ishita M.",
    "score": 39.57,
    "guildId": "g4"
  },
  {
    "id": "u2625",
    "name": "Ramesh M.",
    "score": 53.92,
    "guildId": "g10"
  },
  {
    "id": "u2626",
    "name": "Ravi S.",
    "score": 59.2,
    "guildId": "g3"
  },
  {
    "id": "u2627",
    "name": "Manish V.",
    "score": 88.03,
    "guildId": "g5"
  },
  {
    "id": "u2628",
    "name": "Mateo A.",
    "score": 74.58,
    "guildId": "g8"
  },
  {
    "id": "u2629",
    "name": "Ishita V.",
    "score": 29.21,
    "guildId": "g3"
  },
  {
    "id": "u2630",
    "name": "Aditya Y.",
    "score": 29.51,
    "guildId": "g3"
  },
  {
    "id": "u2631",
    "name": "Ravi Z.",
    "score": 61.26,
    "guildId": "g10"
  },
  {
    "id": "u2632",
    "name": "Ishita M.",
    "score": 26.82,
    "guildId": "g2"
  },
  {
    "id": "u2633",
    "name": "Chen A.",
    "score": 113.16,
    "guildId": "g3"
  },
  {
    "id": "u2634",
    "name": "Chen T.",
    "score": 59.83,
    "guildId": "g9"
  },
  {
    "id": "u2635",
    "name": "Karan T.",
    "score": 70.99,
    "guildId": "g2"
  },
  {
    "id": "u2636",
    "name": "Divya W.",
    "score": 144.16,
    "guildId": "g4"
  },
  {
    "id": "u2637",
    "name": "Sneha B.",
    "score": 120.32,
    "guildId": "g10"
  },
  {
    "id": "u2638",
    "name": "Pooja B.",
    "score": 119.8,
    "guildId": "g8"
  },
  {
    "id": "u2639",
    "name": "Aditya W.",
    "score": 129.22,
    "guildId": "g8"
  },
  {
    "id": "u2640",
    "name": "Karan D.",
    "score": 108.54,
    "guildId": "g2"
  },
  {
    "id": "u2641",
    "name": "Kavya Y.",
    "score": 21.29,
    "guildId": "g1"
  },
  {
    "id": "u2642",
    "name": "Sneha B.",
    "score": 39.45,
    "guildId": "g9"
  },
  {
    "id": "u2643",
    "name": "Megha C.",
    "score": 120.92,
    "guildId": "g6"
  },
  {
    "id": "u2644",
    "name": "Ramesh K.",
    "score": 90.93,
    "guildId": "g4"
  },
  {
    "id": "u2645",
    "name": "Priya W.",
    "score": 81.01,
    "guildId": "g6"
  },
  {
    "id": "u2646",
    "name": "Ravi W.",
    "score": 20.77,
    "guildId": "g7"
  },
  {
    "id": "u2647",
    "name": "Vikram Z.",
    "score": 81.56,
    "guildId": "g3"
  },
  {
    "id": "u2648",
    "name": "Priya B.",
    "score": 95.87,
    "guildId": "g9"
  },
  {
    "id": "u2649",
    "name": "Aditya P.",
    "score": 21.61,
    "guildId": "g8"
  },
  {
    "id": "u2650",
    "name": "Pooja T.",
    "score": 100.3,
    "guildId": "g3"
  },
  {
    "id": "u2651",
    "name": "Amit S.",
    "score": 104.39,
    "guildId": "g9"
  },
  {
    "id": "u2652",
    "name": "Sneha P.",
    "score": 146.47,
    "guildId": "g7"
  },
  {
    "id": "u2653",
    "name": "Yuki B.",
    "score": 91.95,
    "guildId": "g3"
  },
  {
    "id": "u2654",
    "name": "Karan C.",
    "score": 81.66,
    "guildId": "g3"
  },
  {
    "id": "u2655",
    "name": "Pooja Y.",
    "score": 25.76,
    "guildId": "g7"
  },
  {
    "id": "u2656",
    "name": "Rohit S.",
    "score": 118.58,
    "guildId": "g8"
  },
  {
    "id": "u2657",
    "name": "Siddharth M.",
    "score": 26.2,
    "guildId": "g10"
  },
  {
    "id": "u2658",
    "name": "Ishita P.",
    "score": 64.85,
    "guildId": "g3"
  },
  {
    "id": "u2659",
    "name": "Rahul K.",
    "score": 143.68,
    "guildId": "g4"
  },
  {
    "id": "u2660",
    "name": "Ishita P.",
    "score": 81.34,
    "guildId": "g5"
  },
  {
    "id": "u2661",
    "name": "Anjali R.",
    "score": 42.98,
    "guildId": "g5"
  },
  {
    "id": "u2662",
    "name": "Pooja D.",
    "score": 20.06,
    "guildId": "g9"
  },
  {
    "id": "u2663",
    "name": "Swati K.",
    "score": 142.15,
    "guildId": "g5"
  },
  {
    "id": "u2664",
    "name": "Wei W.",
    "score": 27.33,
    "guildId": "g3"
  },
  {
    "id": "u2665",
    "name": "Aditya C.",
    "score": 112.84,
    "guildId": "g1"
  },
  {
    "id": "u2666",
    "name": "Ishita D.",
    "score": 63.44,
    "guildId": "g4"
  },
  {
    "id": "u2667",
    "name": "Ramesh T.",
    "score": 80.36,
    "guildId": "g8"
  },
  {
    "id": "u2668",
    "name": "Akash P.",
    "score": 107.7,
    "guildId": "g10"
  },
  {
    "id": "u2669",
    "name": "Divya Z.",
    "score": 44.14,
    "guildId": "g10"
  },
  {
    "id": "u2670",
    "name": "Isabella A.",
    "score": 142.5,
    "guildId": "g2"
  },
  {
    "id": "u2671",
    "name": "Ananya T.",
    "score": 12.95,
    "guildId": "g6"
  },
  {
    "id": "u2672",
    "name": "John P.",
    "score": 26.41,
    "guildId": "g1"
  },
  {
    "id": "u2673",
    "name": "Anjali W.",
    "score": 26.48,
    "guildId": "g1"
  },
  {
    "id": "u2674",
    "name": "Ishita R.",
    "score": 37.78,
    "guildId": "g7"
  },
  {
    "id": "u2675",
    "name": "Ananya D.",
    "score": 68.63,
    "guildId": "g4"
  },
  {
    "id": "u2676",
    "name": "Sneha M.",
    "score": 64.58,
    "guildId": "g2"
  },
  {
    "id": "u2677",
    "name": "Kavya R.",
    "score": 96.43,
    "guildId": "g4"
  },
  {
    "id": "u2678",
    "name": "Ali T.",
    "score": 108.81,
    "guildId": "g8"
  },
  {
    "id": "u2679",
    "name": "Mateo P.",
    "score": 62.24,
    "guildId": "g5"
  },
  {
    "id": "u2680",
    "name": "Manish S.",
    "score": 79.01,
    "guildId": "g1"
  },
  {
    "id": "u2681",
    "name": "Rohit B.",
    "score": 15.04,
    "guildId": "g3"
  },
  {
    "id": "u2682",
    "name": "Ravi Y.",
    "score": 35.32,
    "guildId": "g7"
  },
  {
    "id": "u2683",
    "name": "Priya K.",
    "score": 29.6,
    "guildId": "g3"
  },
  {
    "id": "u2684",
    "name": "Siddharth B.",
    "score": 11.54,
    "guildId": "g8"
  },
  {
    "id": "u2685",
    "name": "Neha P.",
    "score": 45.31,
    "guildId": "g8"
  },
  {
    "id": "u2686",
    "name": "Aditya V.",
    "score": 131.05,
    "guildId": "g5"
  },
  {
    "id": "u2687",
    "name": "Emma D.",
    "score": 31.22,
    "guildId": "g7"
  },
  {
    "id": "u2688",
    "name": "Emma A.",
    "score": 112.38,
    "guildId": "g8"
  },
  {
    "id": "u2689",
    "name": "Sneha Z.",
    "score": 92.13,
    "guildId": "g10"
  },
  {
    "id": "u2690",
    "name": "Ishita D.",
    "score": 39.17,
    "guildId": "g10"
  },
  {
    "id": "u2691",
    "name": "Swati W.",
    "score": 70.09,
    "guildId": "g10"
  },
  {
    "id": "u2692",
    "name": "Ravi R.",
    "score": 53.67,
    "guildId": "g1"
  },
  {
    "id": "u2693",
    "name": "Sophia W.",
    "score": 129.67,
    "guildId": "g1"
  },
  {
    "id": "u2694",
    "name": "Mateo W.",
    "score": 48.1,
    "guildId": "g5"
  },
  {
    "id": "u2695",
    "name": "Ananya P.",
    "score": 122.2,
    "guildId": "g6"
  },
  {
    "id": "u2696",
    "name": "Manish R.",
    "score": 104.52,
    "guildId": "g8"
  },
  {
    "id": "u2697",
    "name": "Olivia S.",
    "score": 108.43,
    "guildId": "g4"
  },
  {
    "id": "u2698",
    "name": "Priya S.",
    "score": 29.52,
    "guildId": "g2"
  },
  {
    "id": "u2699",
    "name": "Manish B.",
    "score": 134.66,
    "guildId": "g9"
  },
  {
    "id": "u2700",
    "name": "Siddharth W.",
    "score": 63.18,
    "guildId": "g3"
  },
  {
    "id": "u2701",
    "name": "Vikram W.",
    "score": 105.68,
    "guildId": "g7"
  },
  {
    "id": "u2702",
    "name": "Priya W.",
    "score": 112.36,
    "guildId": "g2"
  },
  {
    "id": "u2703",
    "name": "Divya C.",
    "score": 42.71,
    "guildId": "g9"
  },
  {
    "id": "u2704",
    "name": "Rahul B.",
    "score": 63.63,
    "guildId": "g10"
  },
  {
    "id": "u2705",
    "name": "Pooja S.",
    "score": 101.82,
    "guildId": "g3"
  },
  {
    "id": "u2706",
    "name": "Amit D.",
    "score": 117.29,
    "guildId": "g6"
  },
  {
    "id": "u2707",
    "name": "Yuki A.",
    "score": 116.99,
    "guildId": "g2"
  },
  {
    "id": "u2708",
    "name": "Megha W.",
    "score": 139.12,
    "guildId": "g6"
  },
  {
    "id": "u2709",
    "name": "Hiro T.",
    "score": 52.49,
    "guildId": "g8"
  },
  {
    "id": "u2710",
    "name": "Neha Z.",
    "score": 127.75,
    "guildId": "g1"
  },
  {
    "id": "u2711",
    "name": "Aditya D.",
    "score": 54.29,
    "guildId": "g2"
  },
  {
    "id": "u2712",
    "name": "Pooja M.",
    "score": 10.08,
    "guildId": "g5"
  },
  {
    "id": "u2713",
    "name": "Aditya T.",
    "score": 21.38,
    "guildId": "g9"
  },
  {
    "id": "u2714",
    "name": "Ravi B.",
    "score": 110.02,
    "guildId": "g2"
  },
  {
    "id": "u2715",
    "name": "Siddharth V.",
    "score": 54.85,
    "guildId": "g7"
  },
  {
    "id": "u2716",
    "name": "Kavya K.",
    "score": 19.93,
    "guildId": "g9"
  },
  {
    "id": "u2717",
    "name": "Megha A.",
    "score": 117.68,
    "guildId": "g8"
  },
  {
    "id": "u2718",
    "name": "Suresh R.",
    "score": 54.08,
    "guildId": "g7"
  },
  {
    "id": "u2719",
    "name": "Ananya V.",
    "score": 147.2,
    "guildId": "g9"
  },
  {
    "id": "u2720",
    "name": "Neha T.",
    "score": 62.34,
    "guildId": "g8"
  },
  {
    "id": "u2721",
    "name": "Siddharth A.",
    "score": 22.74,
    "guildId": "g3"
  },
  {
    "id": "u2722",
    "name": "Ananya B.",
    "score": 10.18,
    "guildId": "g10"
  },
  {
    "id": "u2723",
    "name": "Siddharth Y.",
    "score": 134.91,
    "guildId": "g2"
  },
  {
    "id": "u2724",
    "name": "Siddharth B.",
    "score": 84.28,
    "guildId": "g10"
  },
  {
    "id": "u2725",
    "name": "John C.",
    "score": 114.57,
    "guildId": "g4"
  },
  {
    "id": "u2726",
    "name": "Anjali Z.",
    "score": 38.02,
    "guildId": "g6"
  },
  {
    "id": "u2727",
    "name": "Akash Y.",
    "score": 110.66,
    "guildId": "g6"
  },
  {
    "id": "u2728",
    "name": "Suresh A.",
    "score": 82,
    "guildId": "g6"
  },
  {
    "id": "u2729",
    "name": "Akash M.",
    "score": 144.59,
    "guildId": "g6"
  },
  {
    "id": "u2730",
    "name": "Suresh R.",
    "score": 128,
    "guildId": "g1"
  },
  {
    "id": "u2731",
    "name": "Ananya R.",
    "score": 55.42,
    "guildId": "g2"
  },
  {
    "id": "u2732",
    "name": "Noah Y.",
    "score": 111.56,
    "guildId": "g9"
  },
  {
    "id": "u2733",
    "name": "Pooja M.",
    "score": 82.06,
    "guildId": "g10"
  },
  {
    "id": "u2734",
    "name": "Anjali Y.",
    "score": 34.82,
    "guildId": "g10"
  },
  {
    "id": "u2735",
    "name": "Neha S.",
    "score": 45.81,
    "guildId": "g10"
  },
  {
    "id": "u2736",
    "name": "Karan W.",
    "score": 81.41,
    "guildId": "g6"
  },
  {
    "id": "u2737",
    "name": "Olivia Y.",
    "score": 129.66,
    "guildId": "g8"
  },
  {
    "id": "u2738",
    "name": "Arjun C.",
    "score": 116.84,
    "guildId": "g9"
  },
  {
    "id": "u2739",
    "name": "Greta Y.",
    "score": 82.94,
    "guildId": "g7"
  },
  {
    "id": "u2740",
    "name": "Sneha T.",
    "score": 85.81,
    "guildId": "g10"
  },
  {
    "id": "u2741",
    "name": "Ananya V.",
    "score": 40.73,
    "guildId": "g4"
  },
  {
    "id": "u2742",
    "name": "Karan B.",
    "score": 130.29,
    "guildId": "g3"
  },
  {
    "id": "u2743",
    "name": "Arjun Z.",
    "score": 56.23,
    "guildId": "g1"
  },
  {
    "id": "u2744",
    "name": "Suresh Z.",
    "score": 129.86,
    "guildId": "g7"
  },
  {
    "id": "u2745",
    "name": "Priya T.",
    "score": 132.26,
    "guildId": "g7"
  },
  {
    "id": "u2746",
    "name": "Anjali B.",
    "score": 136.57,
    "guildId": "g2"
  },
  {
    "id": "u2747",
    "name": "Akash P.",
    "score": 53.28,
    "guildId": "g2"
  },
  {
    "id": "u2748",
    "name": "Priya C.",
    "score": 75.16,
    "guildId": "g6"
  },
  {
    "id": "u2749",
    "name": "Neha B.",
    "score": 111.59,
    "guildId": "g4"
  },
  {
    "id": "u2750",
    "name": "Divya W.",
    "score": 113.23,
    "guildId": "g9"
  },
  {
    "id": "u2751",
    "name": "Rohit V.",
    "score": 97.32,
    "guildId": "g1"
  },
  {
    "id": "u2752",
    "name": "Ravi K.",
    "score": 17.84,
    "guildId": "g7"
  },
  {
    "id": "u2753",
    "name": "Liam Y.",
    "score": 45.13,
    "guildId": "g3"
  },
  {
    "id": "u2754",
    "name": "Akash R.",
    "score": 145.54,
    "guildId": "g3"
  },
  {
    "id": "u2755",
    "name": "Ramesh K.",
    "score": 127.89,
    "guildId": "g9"
  },
  {
    "id": "u2756",
    "name": "Noah T.",
    "score": 89.65,
    "guildId": "g2"
  },
  {
    "id": "u2757",
    "name": "Aditya K.",
    "score": 45.15,
    "guildId": "g1"
  },
  {
    "id": "u2758",
    "name": "Mia D.",
    "score": 97.38,
    "guildId": "g9"
  },
  {
    "id": "u2759",
    "name": "Suresh Z.",
    "score": 47.06,
    "guildId": "g2"
  },
  {
    "id": "u2760",
    "name": "Ananya Z.",
    "score": 33.04,
    "guildId": "g1"
  },
  {
    "id": "u2761",
    "name": "Hans B.",
    "score": 68.07,
    "guildId": "g9"
  },
  {
    "id": "u2762",
    "name": "Vikram A.",
    "score": 48.93,
    "guildId": "g3"
  },
  {
    "id": "u2763",
    "name": "Manish Z.",
    "score": 83.92,
    "guildId": "g10"
  },
  {
    "id": "u2764",
    "name": "Hans Z.",
    "score": 126.17,
    "guildId": "g7"
  },
  {
    "id": "u2765",
    "name": "Karan B.",
    "score": 109.15,
    "guildId": "g2"
  },
  {
    "id": "u2766",
    "name": "Chen Z.",
    "score": 30.78,
    "guildId": "g7"
  },
  {
    "id": "u2767",
    "name": "Rahul B.",
    "score": 125.12,
    "guildId": "g1"
  },
  {
    "id": "u2768",
    "name": "Divya S.",
    "score": 72.7,
    "guildId": "g4"
  },
  {
    "id": "u2769",
    "name": "Emma B.",
    "score": 42.74,
    "guildId": "g6"
  },
  {
    "id": "u2770",
    "name": "Chen R.",
    "score": 28.69,
    "guildId": "g5"
  },
  {
    "id": "u2771",
    "name": "Liam M.",
    "score": 27.56,
    "guildId": "g5"
  },
  {
    "id": "u2772",
    "name": "Hans Y.",
    "score": 47.29,
    "guildId": "g1"
  },
  {
    "id": "u2773",
    "name": "Megha P.",
    "score": 51.36,
    "guildId": "g4"
  },
  {
    "id": "u2774",
    "name": "Priya C.",
    "score": 72.73,
    "guildId": "g5"
  },
  {
    "id": "u2775",
    "name": "Vikram B.",
    "score": 132.17,
    "guildId": "g3"
  },
  {
    "id": "u2776",
    "name": "Rohit S.",
    "score": 109.95,
    "guildId": "g7"
  },
  {
    "id": "u2777",
    "name": "Pooja Y.",
    "score": 27.73,
    "guildId": "g2"
  },
  {
    "id": "u2778",
    "name": "Ishita V.",
    "score": 56.26,
    "guildId": "g10"
  },
  {
    "id": "u2779",
    "name": "Siddharth V.",
    "score": 112.66,
    "guildId": "g8"
  },
  {
    "id": "u2780",
    "name": "Ananya C.",
    "score": 101.92,
    "guildId": "g8"
  },
  {
    "id": "u2781",
    "name": "Akash V.",
    "score": 97.67,
    "guildId": "g10"
  },
  {
    "id": "u2782",
    "name": "Aditya M.",
    "score": 134.45,
    "guildId": "g7"
  },
  {
    "id": "u2783",
    "name": "Arjun V.",
    "score": 104.17,
    "guildId": "g6"
  },
  {
    "id": "u2784",
    "name": "Akash T.",
    "score": 55.35,
    "guildId": "g3"
  },
  {
    "id": "u2785",
    "name": "Arjun S.",
    "score": 30.77,
    "guildId": "g2"
  },
  {
    "id": "u2786",
    "name": "Anjali R.",
    "score": 32.4,
    "guildId": "g10"
  },
  {
    "id": "u2787",
    "name": "Hans T.",
    "score": 86.93,
    "guildId": "g5"
  },
  {
    "id": "u2788",
    "name": "Siddharth W.",
    "score": 38,
    "guildId": "g3"
  },
  {
    "id": "u2789",
    "name": "Rohit S.",
    "score": 131.58,
    "guildId": "g5"
  },
  {
    "id": "u2790",
    "name": "Hiro R.",
    "score": 96.07,
    "guildId": "g7"
  },
  {
    "id": "u2791",
    "name": "Fatima Z.",
    "score": 52.27,
    "guildId": "g3"
  },
  {
    "id": "u2792",
    "name": "Suresh C.",
    "score": 70.11,
    "guildId": "g5"
  },
  {
    "id": "u2793",
    "name": "Ramesh T.",
    "score": 45.77,
    "guildId": "g8"
  },
  {
    "id": "u2794",
    "name": "Rahul T.",
    "score": 119.4,
    "guildId": "g1"
  },
  {
    "id": "u2795",
    "name": "Chen Z.",
    "score": 42.87,
    "guildId": "g10"
  },
  {
    "id": "u2796",
    "name": "Priya M.",
    "score": 59.71,
    "guildId": "g3"
  },
  {
    "id": "u2797",
    "name": "Olivia B.",
    "score": 81.68,
    "guildId": "g3"
  },
  {
    "id": "u2798",
    "name": "Megha W.",
    "score": 58.14,
    "guildId": "g8"
  },
  {
    "id": "u2799",
    "name": "Ravi Y.",
    "score": 105.31,
    "guildId": "g8"
  },
  {
    "id": "u2800",
    "name": "Rahul K.",
    "score": 33.19,
    "guildId": "g7"
  },
  {
    "id": "u2801",
    "name": "Kavya V.",
    "score": 97.8,
    "guildId": "g9"
  },
  {
    "id": "u2802",
    "name": "Aditya R.",
    "score": 25.05,
    "guildId": "g1"
  },
  {
    "id": "u2803",
    "name": "Priya B.",
    "score": 51.72,
    "guildId": "g7"
  },
  {
    "id": "u2804",
    "name": "Suresh C.",
    "score": 42.18,
    "guildId": "g4"
  },
  {
    "id": "u2805",
    "name": "Divya Z.",
    "score": 51.97,
    "guildId": "g4"
  },
  {
    "id": "u2806",
    "name": "Neha C.",
    "score": 89.12,
    "guildId": "g3"
  },
  {
    "id": "u2807",
    "name": "Isabella Y.",
    "score": 139.86,
    "guildId": "g4"
  },
  {
    "id": "u2808",
    "name": "Aditya K.",
    "score": 16.2,
    "guildId": "g7"
  },
  {
    "id": "u2809",
    "name": "Ramesh C.",
    "score": 18.47,
    "guildId": "g9"
  },
  {
    "id": "u2810",
    "name": "Aditya C.",
    "score": 43.69,
    "guildId": "g10"
  },
  {
    "id": "u2811",
    "name": "Kavya T.",
    "score": 57.5,
    "guildId": "g3"
  },
  {
    "id": "u2812",
    "name": "Pooja D.",
    "score": 48.3,
    "guildId": "g6"
  },
  {
    "id": "u2813",
    "name": "Kavya C.",
    "score": 127.13,
    "guildId": "g5"
  },
  {
    "id": "u2814",
    "name": "Manish A.",
    "score": 120.3,
    "guildId": "g8"
  },
  {
    "id": "u2815",
    "name": "Ramesh D.",
    "score": 68.32,
    "guildId": "g9"
  },
  {
    "id": "u2816",
    "name": "Priya Y.",
    "score": 66.98,
    "guildId": "g9"
  },
  {
    "id": "u2817",
    "name": "Anjali S.",
    "score": 82.14,
    "guildId": "g9"
  },
  {
    "id": "u2818",
    "name": "Manish B.",
    "score": 137.2,
    "guildId": "g2"
  },
  {
    "id": "u2819",
    "name": "Ishita M.",
    "score": 41.09,
    "guildId": "g3"
  },
  {
    "id": "u2820",
    "name": "Suresh Y.",
    "score": 92,
    "guildId": "g3"
  },
  {
    "id": "u2821",
    "name": "Rohit Z.",
    "score": 112.43,
    "guildId": "g2"
  },
  {
    "id": "u2822",
    "name": "Sneha R.",
    "score": 143.79,
    "guildId": "g7"
  },
  {
    "id": "u2823",
    "name": "Manish V.",
    "score": 38.34,
    "guildId": "g4"
  },
  {
    "id": "u2824",
    "name": "Pooja R.",
    "score": 121.32,
    "guildId": "g6"
  },
  {
    "id": "u2825",
    "name": "Pooja S.",
    "score": 21.31,
    "guildId": "g1"
  },
  {
    "id": "u2826",
    "name": "Karan K.",
    "score": 12.26,
    "guildId": "g8"
  },
  {
    "id": "u2827",
    "name": "Rohit R.",
    "score": 34.16,
    "guildId": "g3"
  },
  {
    "id": "u2828",
    "name": "Siddharth Z.",
    "score": 61.58,
    "guildId": "g2"
  },
  {
    "id": "u2829",
    "name": "Akash R.",
    "score": 120.7,
    "guildId": "g8"
  },
  {
    "id": "u2830",
    "name": "Ananya M.",
    "score": 23.56,
    "guildId": "g3"
  },
  {
    "id": "u2831",
    "name": "Vikram Z.",
    "score": 76.45,
    "guildId": "g3"
  },
  {
    "id": "u2832",
    "name": "Anjali T.",
    "score": 93.72,
    "guildId": "g9"
  },
  {
    "id": "u2833",
    "name": "Sneha A.",
    "score": 31.04,
    "guildId": "g10"
  },
  {
    "id": "u2834",
    "name": "Mateo D.",
    "score": 75.48,
    "guildId": "g3"
  },
  {
    "id": "u2835",
    "name": "Kavya R.",
    "score": 108.54,
    "guildId": "g3"
  },
  {
    "id": "u2836",
    "name": "Luka Z.",
    "score": 121.27,
    "guildId": "g7"
  },
  {
    "id": "u2837",
    "name": "Priya W.",
    "score": 103.04,
    "guildId": "g5"
  },
  {
    "id": "u2838",
    "name": "Karan R.",
    "score": 32.18,
    "guildId": "g8"
  },
  {
    "id": "u2839",
    "name": "Sneha P.",
    "score": 95.15,
    "guildId": "g9"
  },
  {
    "id": "u2840",
    "name": "Suresh Y.",
    "score": 130.76,
    "guildId": "g8"
  },
  {
    "id": "u2841",
    "name": "Rahul W.",
    "score": 77.41,
    "guildId": "g10"
  },
  {
    "id": "u2842",
    "name": "Rohit Z.",
    "score": 57.99,
    "guildId": "g1"
  },
  {
    "id": "u2843",
    "name": "Greta B.",
    "score": 127.24,
    "guildId": "g9"
  },
  {
    "id": "u2844",
    "name": "Karan Y.",
    "score": 128.74,
    "guildId": "g5"
  },
  {
    "id": "u2845",
    "name": "Wei M.",
    "score": 127.26,
    "guildId": "g4"
  },
  {
    "id": "u2846",
    "name": "Yuki B.",
    "score": 139.22,
    "guildId": "g9"
  },
  {
    "id": "u2847",
    "name": "Pooja K.",
    "score": 74.9,
    "guildId": "g8"
  },
  {
    "id": "u2848",
    "name": "Vikram Y.",
    "score": 80.38,
    "guildId": "g4"
  },
  {
    "id": "u2849",
    "name": "Ishita C.",
    "score": 79.6,
    "guildId": "g7"
  },
  {
    "id": "u2850",
    "name": "Karan R.",
    "score": 25.55,
    "guildId": "g9"
  },
  {
    "id": "u2851",
    "name": "Ramesh R.",
    "score": 74.11,
    "guildId": "g8"
  },
  {
    "id": "u2852",
    "name": "Karan P.",
    "score": 46.38,
    "guildId": "g8"
  },
  {
    "id": "u2853",
    "name": "Ramesh M.",
    "score": 126.14,
    "guildId": "g8"
  },
  {
    "id": "u2854",
    "name": "Kavya R.",
    "score": 83.97,
    "guildId": "g4"
  },
  {
    "id": "u2855",
    "name": "Yuki W.",
    "score": 67.38,
    "guildId": "g10"
  },
  {
    "id": "u2856",
    "name": "Mateo Y.",
    "score": 49.72,
    "guildId": "g7"
  },
  {
    "id": "u2857",
    "name": "Pooja K.",
    "score": 128.87,
    "guildId": "g8"
  },
  {
    "id": "u2858",
    "name": "Megha V.",
    "score": 131.22,
    "guildId": "g7"
  },
  {
    "id": "u2859",
    "name": "Kavya P.",
    "score": 59.81,
    "guildId": "g8"
  },
  {
    "id": "u2860",
    "name": "Vikram B.",
    "score": 76.08,
    "guildId": "g8"
  },
  {
    "id": "u2861",
    "name": "Rahul B.",
    "score": 10.14,
    "guildId": "g9"
  },
  {
    "id": "u2862",
    "name": "Rohit C.",
    "score": 92.31,
    "guildId": "g5"
  },
  {
    "id": "u2863",
    "name": "Liam D.",
    "score": 120.22,
    "guildId": "g8"
  },
  {
    "id": "u2864",
    "name": "Amit W.",
    "score": 68.16,
    "guildId": "g1"
  },
  {
    "id": "u2865",
    "name": "Swati D.",
    "score": 145.7,
    "guildId": "g3"
  },
  {
    "id": "u2866",
    "name": "Sophia D.",
    "score": 80.5,
    "guildId": "g2"
  },
  {
    "id": "u2867",
    "name": "Priya Z.",
    "score": 30.11,
    "guildId": "g4"
  },
  {
    "id": "u2868",
    "name": "Manish V.",
    "score": 106.91,
    "guildId": "g3"
  },
  {
    "id": "u2869",
    "name": "Anjali D.",
    "score": 93.19,
    "guildId": "g10"
  },
  {
    "id": "u2870",
    "name": "Manish W.",
    "score": 57.25,
    "guildId": "g7"
  },
  {
    "id": "u2871",
    "name": "Wei V.",
    "score": 51.3,
    "guildId": "g7"
  },
  {
    "id": "u2872",
    "name": "Pooja W.",
    "score": 78.09,
    "guildId": "g7"
  },
  {
    "id": "u2873",
    "name": "Luka T.",
    "score": 51.47,
    "guildId": "g9"
  },
  {
    "id": "u2874",
    "name": "Siddharth Z.",
    "score": 135.81,
    "guildId": "g9"
  },
  {
    "id": "u2875",
    "name": "Pooja C.",
    "score": 89.95,
    "guildId": "g1"
  },
  {
    "id": "u2876",
    "name": "Swati T.",
    "score": 25.56,
    "guildId": "g8"
  },
  {
    "id": "u2877",
    "name": "Ananya V.",
    "score": 130.38,
    "guildId": "g7"
  },
  {
    "id": "u2878",
    "name": "John K.",
    "score": 68.05,
    "guildId": "g6"
  },
  {
    "id": "u2879",
    "name": "Pooja W.",
    "score": 104.78,
    "guildId": "g5"
  },
  {
    "id": "u2880",
    "name": "Fatima R.",
    "score": 68.71,
    "guildId": "g7"
  },
  {
    "id": "u2881",
    "name": "Karan C.",
    "score": 103.12,
    "guildId": "g5"
  },
  {
    "id": "u2882",
    "name": "Ishita P.",
    "score": 95.87,
    "guildId": "g7"
  },
  {
    "id": "u2883",
    "name": "Neha M.",
    "score": 127.34,
    "guildId": "g1"
  },
  {
    "id": "u2884",
    "name": "Ishita V.",
    "score": 28.34,
    "guildId": "g6"
  },
  {
    "id": "u2885",
    "name": "Vikram Y.",
    "score": 110.56,
    "guildId": "g4"
  },
  {
    "id": "u2886",
    "name": "Olivia C.",
    "score": 44.99,
    "guildId": "g7"
  },
  {
    "id": "u2887",
    "name": "Megha Z.",
    "score": 49.75,
    "guildId": "g4"
  },
  {
    "id": "u2888",
    "name": "Pooja Z.",
    "score": 64.19,
    "guildId": "g3"
  },
  {
    "id": "u2889",
    "name": "Ananya P.",
    "score": 22.87,
    "guildId": "g5"
  },
  {
    "id": "u2890",
    "name": "Neha K.",
    "score": 59.26,
    "guildId": "g3"
  },
  {
    "id": "u2891",
    "name": "Greta V.",
    "score": 24.48,
    "guildId": "g1"
  },
  {
    "id": "u2892",
    "name": "Rohit T.",
    "score": 37.84,
    "guildId": "g5"
  },
  {
    "id": "u2893",
    "name": "Rahul T.",
    "score": 14.33,
    "guildId": "g3"
  },
  {
    "id": "u2894",
    "name": "Kavya M.",
    "score": 85.54,
    "guildId": "g9"
  },
  {
    "id": "u2895",
    "name": "Ali T.",
    "score": 64.93,
    "guildId": "g4"
  },
  {
    "id": "u2896",
    "name": "Neha Y.",
    "score": 120.03,
    "guildId": "g5"
  },
  {
    "id": "u2897",
    "name": "Vikram Z.",
    "score": 44.16,
    "guildId": "g1"
  },
  {
    "id": "u2898",
    "name": "Swati T.",
    "score": 126,
    "guildId": "g10"
  },
  {
    "id": "u2899",
    "name": "Sophia M.",
    "score": 38.08,
    "guildId": "g6"
  },
  {
    "id": "u2900",
    "name": "Rohit M.",
    "score": 20.68,
    "guildId": "g1"
  },
  {
    "id": "u2901",
    "name": "Siddharth W.",
    "score": 79.37,
    "guildId": "g10"
  },
  {
    "id": "u2902",
    "name": "Anjali D.",
    "score": 14.78,
    "guildId": "g1"
  },
  {
    "id": "u2903",
    "name": "Ishita Z.",
    "score": 32.84,
    "guildId": "g5"
  },
  {
    "id": "u2904",
    "name": "Amit K.",
    "score": 37.81,
    "guildId": "g3"
  },
  {
    "id": "u2905",
    "name": "Neha T.",
    "score": 78.29,
    "guildId": "g9"
  },
  {
    "id": "u2906",
    "name": "Rahul C.",
    "score": 99.29,
    "guildId": "g7"
  },
  {
    "id": "u2907",
    "name": "Karan W.",
    "score": 27.64,
    "guildId": "g7"
  },
  {
    "id": "u2908",
    "name": "Suresh S.",
    "score": 16.32,
    "guildId": "g7"
  },
  {
    "id": "u2909",
    "name": "Isabella B.",
    "score": 143,
    "guildId": "g6"
  },
  {
    "id": "u2910",
    "name": "Neha R.",
    "score": 49.09,
    "guildId": "g5"
  },
  {
    "id": "u2911",
    "name": "Neha Y.",
    "score": 112.96,
    "guildId": "g7"
  },
  {
    "id": "u2912",
    "name": "Priya W.",
    "score": 96,
    "guildId": "g8"
  },
  {
    "id": "u2913",
    "name": "Ravi A.",
    "score": 144.56,
    "guildId": "g4"
  },
  {
    "id": "u2914",
    "name": "Chen B.",
    "score": 20.9,
    "guildId": "g9"
  },
  {
    "id": "u2915",
    "name": "Emma Y.",
    "score": 68.2,
    "guildId": "g7"
  },
  {
    "id": "u2916",
    "name": "Mia Z.",
    "score": 110.28,
    "guildId": "g1"
  },
  {
    "id": "u2917",
    "name": "Arjun Y.",
    "score": 139.88,
    "guildId": "g9"
  },
  {
    "id": "u2918",
    "name": "Arjun A.",
    "score": 28.33,
    "guildId": "g3"
  },
  {
    "id": "u2919",
    "name": "Swati Z.",
    "score": 125.02,
    "guildId": "g5"
  },
  {
    "id": "u2920",
    "name": "Rohit A.",
    "score": 11.34,
    "guildId": "g2"
  },
  {
    "id": "u2921",
    "name": "Megha Y.",
    "score": 102.23,
    "guildId": "g9"
  },
  {
    "id": "u2922",
    "name": "Rahul V.",
    "score": 119.22,
    "guildId": "g10"
  },
  {
    "id": "u2923",
    "name": "Vikram S.",
    "score": 63.98,
    "guildId": "g10"
  },
  {
    "id": "u2924",
    "name": "Neha B.",
    "score": 138.9,
    "guildId": "g1"
  },
  {
    "id": "u2925",
    "name": "Pooja P.",
    "score": 83.5,
    "guildId": "g9"
  },
  {
    "id": "u2926",
    "name": "Pooja K.",
    "score": 91.59,
    "guildId": "g7"
  },
  {
    "id": "u2927",
    "name": "Hiro T.",
    "score": 25.49,
    "guildId": "g5"
  },
  {
    "id": "u2928",
    "name": "Anjali W.",
    "score": 33.41,
    "guildId": "g4"
  },
  {
    "id": "u2929",
    "name": "Arjun S.",
    "score": 113.55,
    "guildId": "g7"
  },
  {
    "id": "u2930",
    "name": "Rahul P.",
    "score": 141.93,
    "guildId": "g4"
  },
  {
    "id": "u2931",
    "name": "Manish Y.",
    "score": 95.26,
    "guildId": "g5"
  },
  {
    "id": "u2932",
    "name": "Manish T.",
    "score": 149.72,
    "guildId": "g9"
  },
  {
    "id": "u2933",
    "name": "Manish P.",
    "score": 77.02,
    "guildId": "g1"
  },
  {
    "id": "u2934",
    "name": "Swati B.",
    "score": 91.1,
    "guildId": "g6"
  },
  {
    "id": "u2935",
    "name": "Hans V.",
    "score": 91.53,
    "guildId": "g2"
  },
  {
    "id": "u2936",
    "name": "Rohit Y.",
    "score": 28.52,
    "guildId": "g7"
  },
  {
    "id": "u2937",
    "name": "Sneha V.",
    "score": 13.9,
    "guildId": "g10"
  },
  {
    "id": "u2938",
    "name": "Akash Z.",
    "score": 110.01,
    "guildId": "g4"
  },
  {
    "id": "u2939",
    "name": "Ramesh D.",
    "score": 81.99,
    "guildId": "g9"
  },
  {
    "id": "u2940",
    "name": "Ananya W.",
    "score": 147.15,
    "guildId": "g8"
  },
  {
    "id": "u2941",
    "name": "Karan C.",
    "score": 144.01,
    "guildId": "g3"
  },
  {
    "id": "u2942",
    "name": "Sneha S.",
    "score": 140.8,
    "guildId": "g10"
  },
  {
    "id": "u2943",
    "name": "Ishita A.",
    "score": 131.42,
    "guildId": "g1"
  },
  {
    "id": "u2944",
    "name": "Ramesh D.",
    "score": 25.62,
    "guildId": "g1"
  },
  {
    "id": "u2945",
    "name": "John V.",
    "score": 73.46,
    "guildId": "g4"
  },
  {
    "id": "u2946",
    "name": "Ishita D.",
    "score": 90.41,
    "guildId": "g3"
  },
  {
    "id": "u2947",
    "name": "Akash M.",
    "score": 27.33,
    "guildId": "g2"
  },
  {
    "id": "u2948",
    "name": "Mia B.",
    "score": 118.87,
    "guildId": "g10"
  },
  {
    "id": "u2949",
    "name": "Anjali W.",
    "score": 17.67,
    "guildId": "g7"
  },
  {
    "id": "u2950",
    "name": "Rahul C.",
    "score": 104.53,
    "guildId": "g9"
  },
  {
    "id": "u2951",
    "name": "Siddharth W.",
    "score": 31.93,
    "guildId": "g3"
  },
  {
    "id": "u2952",
    "name": "Rohit A.",
    "score": 80.46,
    "guildId": "g3"
  },
  {
    "id": "u2953",
    "name": "Ananya V.",
    "score": 115.72,
    "guildId": "g10"
  },
  {
    "id": "u2954",
    "name": "Rahul M.",
    "score": 143.29,
    "guildId": "g6"
  },
  {
    "id": "u2955",
    "name": "Manish V.",
    "score": 82.1,
    "guildId": "g2"
  },
  {
    "id": "u2956",
    "name": "Rohit B.",
    "score": 29.91,
    "guildId": "g5"
  },
  {
    "id": "u2957",
    "name": "Priya V.",
    "score": 77.49,
    "guildId": "g8"
  },
  {
    "id": "u2958",
    "name": "Hiro C.",
    "score": 62.24,
    "guildId": "g8"
  },
  {
    "id": "u2959",
    "name": "Amit D.",
    "score": 133.97,
    "guildId": "g9"
  },
  {
    "id": "u2960",
    "name": "Akash Z.",
    "score": 89.83,
    "guildId": "g5"
  },
  {
    "id": "u2961",
    "name": "Liam W.",
    "score": 127.23,
    "guildId": "g9"
  },
  {
    "id": "u2962",
    "name": "Aditya V.",
    "score": 101.99,
    "guildId": "g8"
  },
  {
    "id": "u2963",
    "name": "Karan S.",
    "score": 56.27,
    "guildId": "g3"
  },
  {
    "id": "u2964",
    "name": "Ananya Z.",
    "score": 57.11,
    "guildId": "g7"
  },
  {
    "id": "u2965",
    "name": "Akash A.",
    "score": 81.66,
    "guildId": "g10"
  },
  {
    "id": "u2966",
    "name": "Ishita Z.",
    "score": 11.99,
    "guildId": "g3"
  },
  {
    "id": "u2967",
    "name": "Yuki A.",
    "score": 27.64,
    "guildId": "g10"
  },
  {
    "id": "u2968",
    "name": "Ishita P.",
    "score": 21.97,
    "guildId": "g10"
  },
  {
    "id": "u2969",
    "name": "Manish V.",
    "score": 70.88,
    "guildId": "g7"
  },
  {
    "id": "u2970",
    "name": "Sophia Y.",
    "score": 37.82,
    "guildId": "g2"
  },
  {
    "id": "u2971",
    "name": "Greta K.",
    "score": 79.25,
    "guildId": "g4"
  },
  {
    "id": "u2972",
    "name": "Suresh S.",
    "score": 137.05,
    "guildId": "g7"
  },
  {
    "id": "u2973",
    "name": "Kavya Y.",
    "score": 85.2,
    "guildId": "g1"
  },
  {
    "id": "u2974",
    "name": "Divya W.",
    "score": 49.36,
    "guildId": "g2"
  },
  {
    "id": "u2975",
    "name": "Rohit Z.",
    "score": 13.22,
    "guildId": "g8"
  },
  {
    "id": "u2976",
    "name": "Divya V.",
    "score": 11.33,
    "guildId": "g6"
  },
  {
    "id": "u2977",
    "name": "Neha S.",
    "score": 86.24,
    "guildId": "g7"
  },
  {
    "id": "u2978",
    "name": "Priya S.",
    "score": 14.54,
    "guildId": "g7"
  },
  {
    "id": "u2979",
    "name": "Pooja B.",
    "score": 31.05,
    "guildId": "g10"
  },
  {
    "id": "u2980",
    "name": "Rahul W.",
    "score": 89.39,
    "guildId": "g4"
  },
  {
    "id": "u2981",
    "name": "Suresh P.",
    "score": 141.78,
    "guildId": "g10"
  },
  {
    "id": "u2982",
    "name": "Olivia T.",
    "score": 64.86,
    "guildId": "g3"
  },
  {
    "id": "u2983",
    "name": "Ravi C.",
    "score": 145.38,
    "guildId": "g8"
  },
  {
    "id": "u2984",
    "name": "Vikram B.",
    "score": 141.86,
    "guildId": "g3"
  },
  {
    "id": "u2985",
    "name": "Mia Y.",
    "score": 81,
    "guildId": "g5"
  },
  {
    "id": "u2986",
    "name": "Priya W.",
    "score": 34.93,
    "guildId": "g2"
  },
  {
    "id": "u2987",
    "name": "Manish R.",
    "score": 58.47,
    "guildId": "g1"
  },
  {
    "id": "u2988",
    "name": "Rahul T.",
    "score": 66.09,
    "guildId": "g6"
  },
  {
    "id": "u2989",
    "name": "Sneha D.",
    "score": 62.3,
    "guildId": "g2"
  },
  {
    "id": "u2990",
    "name": "Anjali S.",
    "score": 122.25,
    "guildId": "g9"
  },
  {
    "id": "u2991",
    "name": "Pooja K.",
    "score": 48.23,
    "guildId": "g4"
  },
  {
    "id": "u2992",
    "name": "Fatima B.",
    "score": 59.35,
    "guildId": "g1"
  },
  {
    "id": "u2993",
    "name": "Noah W.",
    "score": 98.71,
    "guildId": "g9"
  },
  {
    "id": "u2994",
    "name": "Ramesh W.",
    "score": 144.74,
    "guildId": "g10"
  },
  {
    "id": "u2995",
    "name": "Swati Z.",
    "score": 32.06,
    "guildId": "g1"
  },
  {
    "id": "u2996",
    "name": "Siddharth D.",
    "score": 68.71,
    "guildId": "g1"
  },
  {
    "id": "u2997",
    "name": "Swati D.",
    "score": 114.65,
    "guildId": "g1"
  },
  {
    "id": "u2998",
    "name": "Karan V.",
    "score": 104.4,
    "guildId": "g1"
  },
  {
    "id": "u2999",
    "name": "Akash T.",
    "score": 13.55,
    "guildId": "g6"
  },
  {
    "id": "u3000",
    "name": "Ramesh W.",
    "score": 80.51,
    "guildId": "g9"
  },
  {
    "id": "u3001",
    "name": "Pooja Z.",
    "score": 11.6,
    "guildId": "g4"
  },
  {
    "id": "u3002",
    "name": "Karan V.",
    "score": 19.14,
    "guildId": "g2"
  },
  {
    "id": "u3003",
    "name": "Pooja W.",
    "score": 137.46,
    "guildId": "g10"
  },
  {
    "id": "u3004",
    "name": "Vikram S.",
    "score": 131.06,
    "guildId": "g3"
  },
  {
    "id": "u3005",
    "name": "Priya S.",
    "score": 75.26,
    "guildId": "g8"
  },
  {
    "id": "u3006",
    "name": "John C.",
    "score": 22.34,
    "guildId": "g5"
  },
  {
    "id": "u3007",
    "name": "Pooja W.",
    "score": 86.04,
    "guildId": "g4"
  },
  {
    "id": "u3008",
    "name": "Ravi D.",
    "score": 129.19,
    "guildId": "g6"
  },
  {
    "id": "u3009",
    "name": "Siddharth C.",
    "score": 104.29,
    "guildId": "g2"
  },
  {
    "id": "u3010",
    "name": "Divya V.",
    "score": 58.52,
    "guildId": "g5"
  },
  {
    "id": "u3011",
    "name": "Ishita S.",
    "score": 91.95,
    "guildId": "g1"
  },
  {
    "id": "u3012",
    "name": "Kavya A.",
    "score": 37.46,
    "guildId": "g8"
  },
  {
    "id": "u3013",
    "name": "Hans A.",
    "score": 84.62,
    "guildId": "g6"
  },
  {
    "id": "u3014",
    "name": "Akash R.",
    "score": 73.43,
    "guildId": "g9"
  },
  {
    "id": "u3015",
    "name": "Ananya W.",
    "score": 110.49,
    "guildId": "g6"
  },
  {
    "id": "u3016",
    "name": "Divya T.",
    "score": 56.55,
    "guildId": "g5"
  },
  {
    "id": "u3017",
    "name": "Divya S.",
    "score": 26.07,
    "guildId": "g5"
  },
  {
    "id": "u3018",
    "name": "Arjun M.",
    "score": 89.32,
    "guildId": "g4"
  },
  {
    "id": "u3019",
    "name": "Sophia W.",
    "score": 119.02,
    "guildId": "g8"
  },
  {
    "id": "u3020",
    "name": "Karan M.",
    "score": 134.1,
    "guildId": "g5"
  },
  {
    "id": "u3021",
    "name": "Mateo V.",
    "score": 101.74,
    "guildId": "g3"
  },
  {
    "id": "u3022",
    "name": "Rahul P.",
    "score": 128.72,
    "guildId": "g4"
  },
  {
    "id": "u3023",
    "name": "Vikram P.",
    "score": 83.84,
    "guildId": "g1"
  },
  {
    "id": "u3024",
    "name": "Ramesh A.",
    "score": 106.4,
    "guildId": "g4"
  },
  {
    "id": "u3025",
    "name": "Akash S.",
    "score": 22.41,
    "guildId": "g5"
  },
  {
    "id": "u3026",
    "name": "Suresh C.",
    "score": 11.05,
    "guildId": "g3"
  },
  {
    "id": "u3027",
    "name": "Hans B.",
    "score": 77.1,
    "guildId": "g1"
  },
  {
    "id": "u3028",
    "name": "Luka Z.",
    "score": 149.76,
    "guildId": "g1"
  },
  {
    "id": "u3029",
    "name": "Noah B.",
    "score": 90.54,
    "guildId": "g8"
  },
  {
    "id": "u3030",
    "name": "Chen B.",
    "score": 95.5,
    "guildId": "g9"
  },
  {
    "id": "u3031",
    "name": "Anjali T.",
    "score": 62.17,
    "guildId": "g2"
  },
  {
    "id": "u3032",
    "name": "Manish C.",
    "score": 72.53,
    "guildId": "g8"
  },
  {
    "id": "u3033",
    "name": "Pooja M.",
    "score": 111.54,
    "guildId": "g8"
  },
  {
    "id": "u3034",
    "name": "Megha A.",
    "score": 18.6,
    "guildId": "g9"
  },
  {
    "id": "u3035",
    "name": "Divya W.",
    "score": 43.03,
    "guildId": "g3"
  },
  {
    "id": "u3036",
    "name": "Rahul P.",
    "score": 38.74,
    "guildId": "g10"
  },
  {
    "id": "u3037",
    "name": "Fatima W.",
    "score": 77.32,
    "guildId": "g4"
  },
  {
    "id": "u3038",
    "name": "Sneha M.",
    "score": 105.32,
    "guildId": "g4"
  },
  {
    "id": "u3039",
    "name": "Vikram D.",
    "score": 28.05,
    "guildId": "g6"
  },
  {
    "id": "u3040",
    "name": "Neha S.",
    "score": 47.48,
    "guildId": "g5"
  },
  {
    "id": "u3041",
    "name": "Kavya Z.",
    "score": 98.01,
    "guildId": "g7"
  },
  {
    "id": "u3042",
    "name": "Siddharth K.",
    "score": 107.44,
    "guildId": "g7"
  },
  {
    "id": "u3043",
    "name": "Sneha D.",
    "score": 95.09,
    "guildId": "g6"
  },
  {
    "id": "u3044",
    "name": "Manish R.",
    "score": 78.75,
    "guildId": "g3"
  },
  {
    "id": "u3045",
    "name": "Anjali Z.",
    "score": 103.9,
    "guildId": "g2"
  },
  {
    "id": "u3046",
    "name": "John P.",
    "score": 26.49,
    "guildId": "g8"
  },
  {
    "id": "u3047",
    "name": "Ananya Y.",
    "score": 84.09,
    "guildId": "g2"
  },
  {
    "id": "u3048",
    "name": "Divya R.",
    "score": 79.8,
    "guildId": "g9"
  },
  {
    "id": "u3049",
    "name": "Pooja D.",
    "score": 87.78,
    "guildId": "g10"
  },
  {
    "id": "u3050",
    "name": "Akash A.",
    "score": 110.37,
    "guildId": "g10"
  },
  {
    "id": "u3051",
    "name": "Ali K.",
    "score": 106.69,
    "guildId": "g5"
  },
  {
    "id": "u3052",
    "name": "Kavya B.",
    "score": 23.96,
    "guildId": "g7"
  },
  {
    "id": "u3053",
    "name": "Pooja V.",
    "score": 133.16,
    "guildId": "g9"
  },
  {
    "id": "u3054",
    "name": "Rahul D.",
    "score": 36.18,
    "guildId": "g7"
  },
  {
    "id": "u3055",
    "name": "Akash Z.",
    "score": 129.67,
    "guildId": "g6"
  },
  {
    "id": "u3056",
    "name": "Neha V.",
    "score": 79.11,
    "guildId": "g8"
  },
  {
    "id": "u3057",
    "name": "Ravi M.",
    "score": 90.47,
    "guildId": "g7"
  },
  {
    "id": "u3058",
    "name": "Siddharth W.",
    "score": 111.08,
    "guildId": "g5"
  },
  {
    "id": "u3059",
    "name": "Isabella T.",
    "score": 146.75,
    "guildId": "g10"
  },
  {
    "id": "u3060",
    "name": "Divya D.",
    "score": 83.14,
    "guildId": "g4"
  },
  {
    "id": "u3061",
    "name": "Kavya B.",
    "score": 91.97,
    "guildId": "g2"
  },
  {
    "id": "u3062",
    "name": "Karan Y.",
    "score": 45.17,
    "guildId": "g2"
  },
  {
    "id": "u3063",
    "name": "Manish P.",
    "score": 107.47,
    "guildId": "g8"
  },
  {
    "id": "u3064",
    "name": "Ravi K.",
    "score": 86.36,
    "guildId": "g2"
  },
  {
    "id": "u3065",
    "name": "Greta W.",
    "score": 116.17,
    "guildId": "g9"
  },
  {
    "id": "u3066",
    "name": "Ananya W.",
    "score": 85.84,
    "guildId": "g3"
  },
  {
    "id": "u3067",
    "name": "Sneha V.",
    "score": 138.18,
    "guildId": "g4"
  },
  {
    "id": "u3068",
    "name": "Neha T.",
    "score": 106.18,
    "guildId": "g1"
  },
  {
    "id": "u3069",
    "name": "Rahul B.",
    "score": 63.5,
    "guildId": "g4"
  },
  {
    "id": "u3070",
    "name": "Fatima S.",
    "score": 23.2,
    "guildId": "g4"
  },
  {
    "id": "u3071",
    "name": "Amit M.",
    "score": 14.08,
    "guildId": "g5"
  },
  {
    "id": "u3072",
    "name": "Ananya R.",
    "score": 141.77,
    "guildId": "g4"
  },
  {
    "id": "u3073",
    "name": "Ravi T.",
    "score": 48.91,
    "guildId": "g5"
  },
  {
    "id": "u3074",
    "name": "Ali Y.",
    "score": 56.74,
    "guildId": "g6"
  },
  {
    "id": "u3075",
    "name": "Ramesh R.",
    "score": 97.57,
    "guildId": "g1"
  },
  {
    "id": "u3076",
    "name": "Karan W.",
    "score": 41.83,
    "guildId": "g3"
  },
  {
    "id": "u3077",
    "name": "Karan M.",
    "score": 119.89,
    "guildId": "g4"
  },
  {
    "id": "u3078",
    "name": "Fatima V.",
    "score": 124.03,
    "guildId": "g9"
  },
  {
    "id": "u3079",
    "name": "Divya D.",
    "score": 14.31,
    "guildId": "g1"
  },
  {
    "id": "u3080",
    "name": "Megha P.",
    "score": 32.56,
    "guildId": "g1"
  },
  {
    "id": "u3081",
    "name": "Divya B.",
    "score": 128.89,
    "guildId": "g2"
  },
  {
    "id": "u3082",
    "name": "Luka Y.",
    "score": 15.27,
    "guildId": "g3"
  },
  {
    "id": "u3083",
    "name": "Luka M.",
    "score": 82.55,
    "guildId": "g8"
  },
  {
    "id": "u3084",
    "name": "Anjali R.",
    "score": 58.67,
    "guildId": "g9"
  },
  {
    "id": "u3085",
    "name": "Wei P.",
    "score": 33.68,
    "guildId": "g10"
  },
  {
    "id": "u3086",
    "name": "Amit Y.",
    "score": 89.97,
    "guildId": "g9"
  },
  {
    "id": "u3087",
    "name": "Suresh D.",
    "score": 115.8,
    "guildId": "g7"
  },
  {
    "id": "u3088",
    "name": "Swati V.",
    "score": 109.73,
    "guildId": "g3"
  },
  {
    "id": "u3089",
    "name": "Manish D.",
    "score": 68.59,
    "guildId": "g10"
  },
  {
    "id": "u3090",
    "name": "Ishita M.",
    "score": 38.66,
    "guildId": "g10"
  },
  {
    "id": "u3091",
    "name": "Mateo S.",
    "score": 111.44,
    "guildId": "g5"
  },
  {
    "id": "u3092",
    "name": "Arjun Y.",
    "score": 44.48,
    "guildId": "g1"
  },
  {
    "id": "u3093",
    "name": "Ananya Y.",
    "score": 37.03,
    "guildId": "g1"
  },
  {
    "id": "u3094",
    "name": "Ramesh Y.",
    "score": 131.78,
    "guildId": "g4"
  },
  {
    "id": "u3095",
    "name": "Olivia D.",
    "score": 66,
    "guildId": "g2"
  },
  {
    "id": "u3096",
    "name": "Ananya S.",
    "score": 90.24,
    "guildId": "g4"
  },
  {
    "id": "u3097",
    "name": "Karan D.",
    "score": 32.14,
    "guildId": "g10"
  },
  {
    "id": "u3098",
    "name": "Anjali A.",
    "score": 52.95,
    "guildId": "g1"
  },
  {
    "id": "u3099",
    "name": "Rohit K.",
    "score": 18.32,
    "guildId": "g3"
  },
  {
    "id": "u3100",
    "name": "Swati K.",
    "score": 70.25,
    "guildId": "g10"
  },
  {
    "id": "u3101",
    "name": "Hans R.",
    "score": 133.45,
    "guildId": "g5"
  },
  {
    "id": "u3102",
    "name": "Kavya D.",
    "score": 98.15,
    "guildId": "g4"
  },
  {
    "id": "u3103",
    "name": "Ananya Y.",
    "score": 86.47,
    "guildId": "g5"
  },
  {
    "id": "u3104",
    "name": "Swati T.",
    "score": 18.98,
    "guildId": "g4"
  },
  {
    "id": "u3105",
    "name": "Ishita R.",
    "score": 51.99,
    "guildId": "g8"
  },
  {
    "id": "u3106",
    "name": "Liam R.",
    "score": 84.99,
    "guildId": "g3"
  },
  {
    "id": "u3107",
    "name": "Ishita K.",
    "score": 54.33,
    "guildId": "g8"
  },
  {
    "id": "u3108",
    "name": "Ravi T.",
    "score": 116.1,
    "guildId": "g9"
  },
  {
    "id": "u3109",
    "name": "Ishita D.",
    "score": 46.87,
    "guildId": "g10"
  },
  {
    "id": "u3110",
    "name": "Arjun Y.",
    "score": 66.77,
    "guildId": "g7"
  },
  {
    "id": "u3111",
    "name": "Swati K.",
    "score": 23.99,
    "guildId": "g1"
  },
  {
    "id": "u3112",
    "name": "Akash V.",
    "score": 58.51,
    "guildId": "g8"
  },
  {
    "id": "u3113",
    "name": "Ravi Y.",
    "score": 131.08,
    "guildId": "g2"
  },
  {
    "id": "u3114",
    "name": "Suresh K.",
    "score": 12.59,
    "guildId": "g5"
  },
  {
    "id": "u3115",
    "name": "Karan Z.",
    "score": 43.21,
    "guildId": "g8"
  },
  {
    "id": "u3116",
    "name": "Sneha K.",
    "score": 140.32,
    "guildId": "g7"
  },
  {
    "id": "u3117",
    "name": "Vikram C.",
    "score": 115.31,
    "guildId": "g7"
  },
  {
    "id": "u3118",
    "name": "Ishita B.",
    "score": 14.06,
    "guildId": "g5"
  },
  {
    "id": "u3119",
    "name": "Swati V.",
    "score": 79.88,
    "guildId": "g7"
  },
  {
    "id": "u3120",
    "name": "Divya Z.",
    "score": 141.43,
    "guildId": "g2"
  },
  {
    "id": "u3121",
    "name": "Suresh R.",
    "score": 122.29,
    "guildId": "g8"
  },
  {
    "id": "u3122",
    "name": "Ishita M.",
    "score": 111.42,
    "guildId": "g6"
  },
  {
    "id": "u3123",
    "name": "Ananya A.",
    "score": 54.08,
    "guildId": "g1"
  },
  {
    "id": "u3124",
    "name": "Karan K.",
    "score": 131.7,
    "guildId": "g5"
  },
  {
    "id": "u3125",
    "name": "Manish P.",
    "score": 84.59,
    "guildId": "g5"
  },
  {
    "id": "u3126",
    "name": "Aditya S.",
    "score": 35.4,
    "guildId": "g2"
  },
  {
    "id": "u3127",
    "name": "Suresh P.",
    "score": 83.48,
    "guildId": "g2"
  },
  {
    "id": "u3128",
    "name": "Sneha B.",
    "score": 52.49,
    "guildId": "g4"
  },
  {
    "id": "u3129",
    "name": "Amit V.",
    "score": 100.87,
    "guildId": "g4"
  },
  {
    "id": "u3130",
    "name": "Vikram W.",
    "score": 35,
    "guildId": "g3"
  },
  {
    "id": "u3131",
    "name": "Pooja Z.",
    "score": 133.58,
    "guildId": "g1"
  },
  {
    "id": "u3132",
    "name": "Siddharth D.",
    "score": 89.95,
    "guildId": "g7"
  },
  {
    "id": "u3133",
    "name": "Siddharth P.",
    "score": 69.38,
    "guildId": "g8"
  },
  {
    "id": "u3134",
    "name": "Greta Z.",
    "score": 27.01,
    "guildId": "g4"
  },
  {
    "id": "u3135",
    "name": "Karan Y.",
    "score": 15.18,
    "guildId": "g8"
  },
  {
    "id": "u3136",
    "name": "Priya M.",
    "score": 139.41,
    "guildId": "g8"
  },
  {
    "id": "u3137",
    "name": "Swati S.",
    "score": 127.49,
    "guildId": "g3"
  },
  {
    "id": "u3138",
    "name": "Suresh T.",
    "score": 19.9,
    "guildId": "g4"
  },
  {
    "id": "u3139",
    "name": "Megha B.",
    "score": 44.52,
    "guildId": "g5"
  },
  {
    "id": "u3140",
    "name": "Akash V.",
    "score": 75.23,
    "guildId": "g4"
  },
  {
    "id": "u3141",
    "name": "Rahul D.",
    "score": 49.79,
    "guildId": "g1"
  },
  {
    "id": "u3142",
    "name": "Manish A.",
    "score": 55.87,
    "guildId": "g10"
  },
  {
    "id": "u3143",
    "name": "Ishita P.",
    "score": 18.4,
    "guildId": "g4"
  },
  {
    "id": "u3144",
    "name": "Yuki D.",
    "score": 40.22,
    "guildId": "g7"
  },
  {
    "id": "u3145",
    "name": "Akash Z.",
    "score": 97.61,
    "guildId": "g5"
  },
  {
    "id": "u3146",
    "name": "Luka C.",
    "score": 115.89,
    "guildId": "g9"
  },
  {
    "id": "u3147",
    "name": "Ananya T.",
    "score": 44.42,
    "guildId": "g4"
  },
  {
    "id": "u3148",
    "name": "Sneha S.",
    "score": 124.41,
    "guildId": "g5"
  },
  {
    "id": "u3149",
    "name": "Ananya D.",
    "score": 129.43,
    "guildId": "g8"
  },
  {
    "id": "u3150",
    "name": "Divya C.",
    "score": 100.88,
    "guildId": "g8"
  },
  {
    "id": "u3151",
    "name": "Neha D.",
    "score": 142.75,
    "guildId": "g5"
  },
  {
    "id": "u3152",
    "name": "Pooja C.",
    "score": 22.29,
    "guildId": "g5"
  },
  {
    "id": "u3153",
    "name": "Arjun W.",
    "score": 27.91,
    "guildId": "g6"
  },
  {
    "id": "u3154",
    "name": "Ananya Z.",
    "score": 123.55,
    "guildId": "g9"
  },
  {
    "id": "u3155",
    "name": "Neha V.",
    "score": 79.76,
    "guildId": "g6"
  },
  {
    "id": "u3156",
    "name": "Sneha T.",
    "score": 91.75,
    "guildId": "g7"
  },
  {
    "id": "u3157",
    "name": "Mia Z.",
    "score": 127.81,
    "guildId": "g3"
  },
  {
    "id": "u3158",
    "name": "Amit K.",
    "score": 87.69,
    "guildId": "g1"
  },
  {
    "id": "u3159",
    "name": "Sneha K.",
    "score": 125.08,
    "guildId": "g1"
  },
  {
    "id": "u3160",
    "name": "Neha Z.",
    "score": 72.96,
    "guildId": "g1"
  },
  {
    "id": "u3161",
    "name": "Arjun M.",
    "score": 109.49,
    "guildId": "g5"
  },
  {
    "id": "u3162",
    "name": "Suresh K.",
    "score": 148.86,
    "guildId": "g6"
  },
  {
    "id": "u3163",
    "name": "Vikram T.",
    "score": 60.77,
    "guildId": "g10"
  },
  {
    "id": "u3164",
    "name": "Aditya C.",
    "score": 97.7,
    "guildId": "g4"
  },
  {
    "id": "u3165",
    "name": "Vikram Y.",
    "score": 111.6,
    "guildId": "g8"
  },
  {
    "id": "u3166",
    "name": "Ramesh P.",
    "score": 95.92,
    "guildId": "g7"
  },
  {
    "id": "u3167",
    "name": "Rahul A.",
    "score": 54.93,
    "guildId": "g3"
  },
  {
    "id": "u3168",
    "name": "Arjun T.",
    "score": 134.94,
    "guildId": "g2"
  },
  {
    "id": "u3169",
    "name": "Priya B.",
    "score": 25.56,
    "guildId": "g7"
  },
  {
    "id": "u3170",
    "name": "Ravi P.",
    "score": 129.98,
    "guildId": "g6"
  },
  {
    "id": "u3171",
    "name": "Anjali T.",
    "score": 136.52,
    "guildId": "g6"
  },
  {
    "id": "u3172",
    "name": "Megha R.",
    "score": 101.41,
    "guildId": "g2"
  },
  {
    "id": "u3173",
    "name": "Ramesh W.",
    "score": 33.58,
    "guildId": "g3"
  },
  {
    "id": "u3174",
    "name": "Megha B.",
    "score": 94,
    "guildId": "g5"
  },
  {
    "id": "u3175",
    "name": "Aditya R.",
    "score": 139.18,
    "guildId": "g5"
  },
  {
    "id": "u3176",
    "name": "Ishita D.",
    "score": 101.5,
    "guildId": "g7"
  },
  {
    "id": "u3177",
    "name": "Isabella M.",
    "score": 85.39,
    "guildId": "g1"
  },
  {
    "id": "u3178",
    "name": "Rahul A.",
    "score": 38.57,
    "guildId": "g9"
  },
  {
    "id": "u3179",
    "name": "Divya V.",
    "score": 85.32,
    "guildId": "g4"
  },
  {
    "id": "u3180",
    "name": "Anjali C.",
    "score": 77.47,
    "guildId": "g3"
  },
  {
    "id": "u3181",
    "name": "Rohit C.",
    "score": 54.03,
    "guildId": "g4"
  },
  {
    "id": "u3182",
    "name": "Sneha Z.",
    "score": 117.25,
    "guildId": "g10"
  },
  {
    "id": "u3183",
    "name": "Fatima S.",
    "score": 73.61,
    "guildId": "g1"
  },
  {
    "id": "u3184",
    "name": "Rohit D.",
    "score": 46.06,
    "guildId": "g9"
  },
  {
    "id": "u3185",
    "name": "Suresh Y.",
    "score": 67.65,
    "guildId": "g5"
  },
  {
    "id": "u3186",
    "name": "Ravi Y.",
    "score": 94.75,
    "guildId": "g4"
  },
  {
    "id": "u3187",
    "name": "Ravi W.",
    "score": 147.97,
    "guildId": "g3"
  },
  {
    "id": "u3188",
    "name": "Karan Z.",
    "score": 37.43,
    "guildId": "g4"
  },
  {
    "id": "u3189",
    "name": "Divya Y.",
    "score": 46.29,
    "guildId": "g7"
  },
  {
    "id": "u3190",
    "name": "Ramesh Z.",
    "score": 56.82,
    "guildId": "g3"
  },
  {
    "id": "u3191",
    "name": "Divya B.",
    "score": 111.96,
    "guildId": "g8"
  },
  {
    "id": "u3192",
    "name": "Arjun Y.",
    "score": 54.43,
    "guildId": "g4"
  },
  {
    "id": "u3193",
    "name": "Manish M.",
    "score": 99.72,
    "guildId": "g9"
  },
  {
    "id": "u3194",
    "name": "Sneha R.",
    "score": 102.99,
    "guildId": "g3"
  },
  {
    "id": "u3195",
    "name": "Rohit P.",
    "score": 149.43,
    "guildId": "g7"
  },
  {
    "id": "u3196",
    "name": "Megha V.",
    "score": 108.84,
    "guildId": "g4"
  },
  {
    "id": "u3197",
    "name": "Sneha S.",
    "score": 96.87,
    "guildId": "g4"
  },
  {
    "id": "u3198",
    "name": "Akash P.",
    "score": 146.11,
    "guildId": "g8"
  },
  {
    "id": "u3199",
    "name": "Kavya R.",
    "score": 58,
    "guildId": "g8"
  },
  {
    "id": "u3200",
    "name": "Neha K.",
    "score": 10.96,
    "guildId": "g6"
  },
  {
    "id": "u3201",
    "name": "Emma Z.",
    "score": 64.49,
    "guildId": "g10"
  },
  {
    "id": "u3202",
    "name": "Manish P.",
    "score": 147.76,
    "guildId": "g1"
  },
  {
    "id": "u3203",
    "name": "Suresh B.",
    "score": 76.2,
    "guildId": "g9"
  },
  {
    "id": "u3204",
    "name": "Yuki M.",
    "score": 19.24,
    "guildId": "g1"
  },
  {
    "id": "u3205",
    "name": "Manish S.",
    "score": 128.74,
    "guildId": "g2"
  },
  {
    "id": "u3206",
    "name": "Aditya D.",
    "score": 75.18,
    "guildId": "g8"
  },
  {
    "id": "u3207",
    "name": "Pooja K.",
    "score": 90.52,
    "guildId": "g3"
  },
  {
    "id": "u3208",
    "name": "Noah T.",
    "score": 147.8,
    "guildId": "g10"
  },
  {
    "id": "u3209",
    "name": "Noah D.",
    "score": 81.81,
    "guildId": "g8"
  },
  {
    "id": "u3210",
    "name": "Yuki A.",
    "score": 79.56,
    "guildId": "g5"
  },
  {
    "id": "u3211",
    "name": "Megha M.",
    "score": 124.42,
    "guildId": "g3"
  },
  {
    "id": "u3212",
    "name": "Vikram Z.",
    "score": 45.68,
    "guildId": "g9"
  },
  {
    "id": "u3213",
    "name": "John R.",
    "score": 145.99,
    "guildId": "g2"
  },
  {
    "id": "u3214",
    "name": "Priya R.",
    "score": 72.35,
    "guildId": "g9"
  },
  {
    "id": "u3215",
    "name": "Anjali A.",
    "score": 123.15,
    "guildId": "g10"
  },
  {
    "id": "u3216",
    "name": "Swati W.",
    "score": 139.21,
    "guildId": "g4"
  },
  {
    "id": "u3217",
    "name": "Divya P.",
    "score": 129.9,
    "guildId": "g5"
  },
  {
    "id": "u3218",
    "name": "Manish M.",
    "score": 62.55,
    "guildId": "g2"
  },
  {
    "id": "u3219",
    "name": "Aditya T.",
    "score": 136.71,
    "guildId": "g9"
  },
  {
    "id": "u3220",
    "name": "Siddharth B.",
    "score": 10.54,
    "guildId": "g9"
  },
  {
    "id": "u3221",
    "name": "Sneha A.",
    "score": 82.71,
    "guildId": "g9"
  },
  {
    "id": "u3222",
    "name": "Aditya D.",
    "score": 139.15,
    "guildId": "g1"
  },
  {
    "id": "u3223",
    "name": "Kavya Z.",
    "score": 38.9,
    "guildId": "g7"
  },
  {
    "id": "u3224",
    "name": "Vikram A.",
    "score": 136.52,
    "guildId": "g7"
  },
  {
    "id": "u3225",
    "name": "Emma M.",
    "score": 124.88,
    "guildId": "g10"
  },
  {
    "id": "u3226",
    "name": "Divya R.",
    "score": 85.81,
    "guildId": "g10"
  },
  {
    "id": "u3227",
    "name": "Karan W.",
    "score": 30.39,
    "guildId": "g1"
  },
  {
    "id": "u3228",
    "name": "Aditya K.",
    "score": 93.86,
    "guildId": "g3"
  },
  {
    "id": "u3229",
    "name": "Ravi Y.",
    "score": 146.21,
    "guildId": "g4"
  },
  {
    "id": "u3230",
    "name": "Divya R.",
    "score": 68.24,
    "guildId": "g9"
  },
  {
    "id": "u3231",
    "name": "Amit B.",
    "score": 12.68,
    "guildId": "g3"
  },
  {
    "id": "u3232",
    "name": "Neha A.",
    "score": 114.07,
    "guildId": "g1"
  },
  {
    "id": "u3233",
    "name": "Siddharth S.",
    "score": 86.27,
    "guildId": "g8"
  },
  {
    "id": "u3234",
    "name": "Ravi B.",
    "score": 132.02,
    "guildId": "g4"
  },
  {
    "id": "u3235",
    "name": "Sophia V.",
    "score": 104.89,
    "guildId": "g3"
  },
  {
    "id": "u3236",
    "name": "Arjun C.",
    "score": 115.59,
    "guildId": "g4"
  },
  {
    "id": "u3237",
    "name": "Neha Y.",
    "score": 28.5,
    "guildId": "g10"
  },
  {
    "id": "u3238",
    "name": "Neha V.",
    "score": 100.82,
    "guildId": "g1"
  },
  {
    "id": "u3239",
    "name": "Divya Y.",
    "score": 104.78,
    "guildId": "g8"
  },
  {
    "id": "u3240",
    "name": "Manish W.",
    "score": 71.49,
    "guildId": "g3"
  },
  {
    "id": "u3241",
    "name": "Kavya K.",
    "score": 47.72,
    "guildId": "g2"
  },
  {
    "id": "u3242",
    "name": "Suresh T.",
    "score": 42.36,
    "guildId": "g6"
  },
  {
    "id": "u3243",
    "name": "Aditya B.",
    "score": 90.6,
    "guildId": "g5"
  },
  {
    "id": "u3244",
    "name": "Suresh T.",
    "score": 94.55,
    "guildId": "g8"
  },
  {
    "id": "u3245",
    "name": "Kavya A.",
    "score": 116.51,
    "guildId": "g8"
  },
  {
    "id": "u3246",
    "name": "Arjun K.",
    "score": 47.14,
    "guildId": "g9"
  },
  {
    "id": "u3247",
    "name": "Chen R.",
    "score": 84.87,
    "guildId": "g8"
  },
  {
    "id": "u3248",
    "name": "Suresh R.",
    "score": 51.96,
    "guildId": "g9"
  },
  {
    "id": "u3249",
    "name": "Swati K.",
    "score": 68.65,
    "guildId": "g8"
  },
  {
    "id": "u3250",
    "name": "Kavya S.",
    "score": 124.44,
    "guildId": "g2"
  },
  {
    "id": "u3251",
    "name": "Hiro T.",
    "score": 128.72,
    "guildId": "g8"
  },
  {
    "id": "u3252",
    "name": "Swati S.",
    "score": 94.67,
    "guildId": "g6"
  },
  {
    "id": "u3253",
    "name": "Divya P.",
    "score": 52.72,
    "guildId": "g6"
  },
  {
    "id": "u3254",
    "name": "Swati P.",
    "score": 105.18,
    "guildId": "g10"
  },
  {
    "id": "u3255",
    "name": "Arjun D.",
    "score": 80.48,
    "guildId": "g1"
  },
  {
    "id": "u3256",
    "name": "Rohit K.",
    "score": 106.31,
    "guildId": "g8"
  },
  {
    "id": "u3257",
    "name": "Yuki K.",
    "score": 79.35,
    "guildId": "g6"
  },
  {
    "id": "u3258",
    "name": "Ishita S.",
    "score": 101.14,
    "guildId": "g2"
  },
  {
    "id": "u3259",
    "name": "Rohit V.",
    "score": 29.9,
    "guildId": "g6"
  },
  {
    "id": "u3260",
    "name": "Pooja V.",
    "score": 15.45,
    "guildId": "g3"
  },
  {
    "id": "u3261",
    "name": "Anjali M.",
    "score": 46.38,
    "guildId": "g8"
  },
  {
    "id": "u3262",
    "name": "Swati S.",
    "score": 95.02,
    "guildId": "g7"
  },
  {
    "id": "u3263",
    "name": "Kavya T.",
    "score": 51.28,
    "guildId": "g7"
  },
  {
    "id": "u3264",
    "name": "Anjali R.",
    "score": 53.54,
    "guildId": "g1"
  },
  {
    "id": "u3265",
    "name": "Vikram C.",
    "score": 37.65,
    "guildId": "g9"
  },
  {
    "id": "u3266",
    "name": "Anjali A.",
    "score": 15.03,
    "guildId": "g5"
  },
  {
    "id": "u3267",
    "name": "Mia R.",
    "score": 126.04,
    "guildId": "g3"
  },
  {
    "id": "u3268",
    "name": "Anjali C.",
    "score": 19.74,
    "guildId": "g6"
  },
  {
    "id": "u3269",
    "name": "Ananya T.",
    "score": 116.59,
    "guildId": "g1"
  },
  {
    "id": "u3270",
    "name": "Swati Y.",
    "score": 88.77,
    "guildId": "g7"
  },
  {
    "id": "u3271",
    "name": "Arjun Z.",
    "score": 143.31,
    "guildId": "g4"
  },
  {
    "id": "u3272",
    "name": "Suresh T.",
    "score": 138.2,
    "guildId": "g5"
  },
  {
    "id": "u3273",
    "name": "Vikram V.",
    "score": 141.74,
    "guildId": "g6"
  },
  {
    "id": "u3274",
    "name": "Hiro W.",
    "score": 82.52,
    "guildId": "g1"
  },
  {
    "id": "u3275",
    "name": "Sneha K.",
    "score": 10.51,
    "guildId": "g7"
  },
  {
    "id": "u3276",
    "name": "Arjun P.",
    "score": 91.83,
    "guildId": "g7"
  },
  {
    "id": "u3277",
    "name": "Amit P.",
    "score": 99.47,
    "guildId": "g7"
  },
  {
    "id": "u3278",
    "name": "Mateo B.",
    "score": 13.21,
    "guildId": "g7"
  },
  {
    "id": "u3279",
    "name": "Ravi B.",
    "score": 73.38,
    "guildId": "g2"
  },
  {
    "id": "u3280",
    "name": "Ananya A.",
    "score": 19.38,
    "guildId": "g7"
  },
  {
    "id": "u3281",
    "name": "Karan C.",
    "score": 44.5,
    "guildId": "g7"
  },
  {
    "id": "u3282",
    "name": "Anjali Y.",
    "score": 27.3,
    "guildId": "g8"
  },
  {
    "id": "u3283",
    "name": "Ananya C.",
    "score": 110.76,
    "guildId": "g1"
  },
  {
    "id": "u3284",
    "name": "Priya D.",
    "score": 11.21,
    "guildId": "g9"
  },
  {
    "id": "u3285",
    "name": "Ramesh C.",
    "score": 22.72,
    "guildId": "g10"
  },
  {
    "id": "u3286",
    "name": "Hiro T.",
    "score": 61.19,
    "guildId": "g8"
  },
  {
    "id": "u3287",
    "name": "Neha M.",
    "score": 75.08,
    "guildId": "g8"
  },
  {
    "id": "u3288",
    "name": "Manish K.",
    "score": 137.79,
    "guildId": "g3"
  },
  {
    "id": "u3289",
    "name": "Siddharth C.",
    "score": 111.42,
    "guildId": "g2"
  },
  {
    "id": "u3290",
    "name": "Rahul W.",
    "score": 90.08,
    "guildId": "g5"
  },
  {
    "id": "u3291",
    "name": "Swati M.",
    "score": 13.76,
    "guildId": "g9"
  },
  {
    "id": "u3292",
    "name": "Megha R.",
    "score": 67.51,
    "guildId": "g5"
  },
  {
    "id": "u3293",
    "name": "Sneha V.",
    "score": 17.77,
    "guildId": "g6"
  },
  {
    "id": "u3294",
    "name": "Emma T.",
    "score": 123.16,
    "guildId": "g3"
  },
  {
    "id": "u3295",
    "name": "Sneha B.",
    "score": 49.81,
    "guildId": "g8"
  },
  {
    "id": "u3296",
    "name": "Priya M.",
    "score": 78.55,
    "guildId": "g2"
  },
  {
    "id": "u3297",
    "name": "Sneha S.",
    "score": 53.86,
    "guildId": "g9"
  },
  {
    "id": "u3298",
    "name": "Sophia R.",
    "score": 123.37,
    "guildId": "g10"
  },
  {
    "id": "u3299",
    "name": "Kavya S.",
    "score": 108.71,
    "guildId": "g7"
  },
  {
    "id": "u3300",
    "name": "Ali Y.",
    "score": 23.95,
    "guildId": "g9"
  },
  {
    "id": "u3301",
    "name": "Ravi V.",
    "score": 121.56,
    "guildId": "g4"
  },
  {
    "id": "u3302",
    "name": "Vikram C.",
    "score": 30.45,
    "guildId": "g6"
  },
  {
    "id": "u3303",
    "name": "Swati M.",
    "score": 92.62,
    "guildId": "g5"
  },
  {
    "id": "u3304",
    "name": "Ramesh R.",
    "score": 58.72,
    "guildId": "g8"
  },
  {
    "id": "u3305",
    "name": "Vikram A.",
    "score": 91.23,
    "guildId": "g1"
  },
  {
    "id": "u3306",
    "name": "Ramesh S.",
    "score": 59.64,
    "guildId": "g8"
  },
  {
    "id": "u3307",
    "name": "Swati Y.",
    "score": 59.24,
    "guildId": "g9"
  },
  {
    "id": "u3308",
    "name": "Priya Y.",
    "score": 104.68,
    "guildId": "g1"
  },
  {
    "id": "u3309",
    "name": "Siddharth Z.",
    "score": 68.18,
    "guildId": "g5"
  },
  {
    "id": "u3310",
    "name": "Kavya P.",
    "score": 10.9,
    "guildId": "g5"
  },
  {
    "id": "u3311",
    "name": "Luka R.",
    "score": 99.27,
    "guildId": "g7"
  },
  {
    "id": "u3312",
    "name": "Ravi D.",
    "score": 107.17,
    "guildId": "g7"
  },
  {
    "id": "u3313",
    "name": "Arjun B.",
    "score": 57.86,
    "guildId": "g7"
  },
  {
    "id": "u3314",
    "name": "Aditya V.",
    "score": 39.94,
    "guildId": "g7"
  },
  {
    "id": "u3315",
    "name": "Ravi C.",
    "score": 90.56,
    "guildId": "g7"
  },
  {
    "id": "u3316",
    "name": "Arjun W.",
    "score": 103.33,
    "guildId": "g1"
  },
  {
    "id": "u3317",
    "name": "Amit P.",
    "score": 14.79,
    "guildId": "g9"
  },
  {
    "id": "u3318",
    "name": "Olivia C.",
    "score": 100.93,
    "guildId": "g6"
  },
  {
    "id": "u3319",
    "name": "Suresh Y.",
    "score": 29.63,
    "guildId": "g6"
  },
  {
    "id": "u3320",
    "name": "Swati V.",
    "score": 88.2,
    "guildId": "g7"
  },
  {
    "id": "u3321",
    "name": "Suresh V.",
    "score": 101.27,
    "guildId": "g8"
  },
  {
    "id": "u3322",
    "name": "Yuki K.",
    "score": 64.05,
    "guildId": "g4"
  },
  {
    "id": "u3323",
    "name": "Ananya K.",
    "score": 74.5,
    "guildId": "g8"
  },
  {
    "id": "u3324",
    "name": "Swati D.",
    "score": 32.71,
    "guildId": "g8"
  },
  {
    "id": "u3325",
    "name": "Arjun V.",
    "score": 25.46,
    "guildId": "g10"
  },
  {
    "id": "u3326",
    "name": "Isabella W.",
    "score": 40.16,
    "guildId": "g7"
  },
  {
    "id": "u3327",
    "name": "Vikram D.",
    "score": 88.39,
    "guildId": "g2"
  },
  {
    "id": "u3328",
    "name": "Vikram Z.",
    "score": 32.72,
    "guildId": "g4"
  },
  {
    "id": "u3329",
    "name": "Kavya M.",
    "score": 79.85,
    "guildId": "g3"
  },
  {
    "id": "u3330",
    "name": "Aditya B.",
    "score": 131.58,
    "guildId": "g2"
  },
  {
    "id": "u3331",
    "name": "Akash K.",
    "score": 108.64,
    "guildId": "g10"
  },
  {
    "id": "u3332",
    "name": "Ishita W.",
    "score": 95.52,
    "guildId": "g8"
  },
  {
    "id": "u3333",
    "name": "Neha K.",
    "score": 27.69,
    "guildId": "g4"
  },
  {
    "id": "u3334",
    "name": "Ramesh D.",
    "score": 20.57,
    "guildId": "g4"
  },
  {
    "id": "u3335",
    "name": "Vikram M.",
    "score": 78.53,
    "guildId": "g7"
  },
  {
    "id": "u3336",
    "name": "Sneha D.",
    "score": 56.11,
    "guildId": "g5"
  },
  {
    "id": "u3337",
    "name": "Kavya R.",
    "score": 87.3,
    "guildId": "g4"
  },
  {
    "id": "u3338",
    "name": "Ravi M.",
    "score": 84.63,
    "guildId": "g1"
  },
  {
    "id": "u3339",
    "name": "Neha D.",
    "score": 15.21,
    "guildId": "g7"
  },
  {
    "id": "u3340",
    "name": "Priya V.",
    "score": 106.59,
    "guildId": "g9"
  },
  {
    "id": "u3341",
    "name": "Siddharth R.",
    "score": 97.39,
    "guildId": "g4"
  },
  {
    "id": "u3342",
    "name": "Ramesh P.",
    "score": 80.21,
    "guildId": "g3"
  },
  {
    "id": "u3343",
    "name": "Kavya D.",
    "score": 63.16,
    "guildId": "g5"
  },
  {
    "id": "u3344",
    "name": "Aditya M.",
    "score": 20.59,
    "guildId": "g2"
  },
  {
    "id": "u3345",
    "name": "Amit Y.",
    "score": 30.62,
    "guildId": "g5"
  },
  {
    "id": "u3346",
    "name": "Swati M.",
    "score": 60.66,
    "guildId": "g4"
  },
  {
    "id": "u3347",
    "name": "Ishita K.",
    "score": 27,
    "guildId": "g1"
  },
  {
    "id": "u3348",
    "name": "Sneha R.",
    "score": 28.71,
    "guildId": "g5"
  },
  {
    "id": "u3349",
    "name": "Ishita S.",
    "score": 65.43,
    "guildId": "g4"
  },
  {
    "id": "u3350",
    "name": "Aditya B.",
    "score": 72.6,
    "guildId": "g1"
  },
  {
    "id": "u3351",
    "name": "Sophia V.",
    "score": 146.31,
    "guildId": "g4"
  },
  {
    "id": "u3352",
    "name": "Siddharth V.",
    "score": 95.71,
    "guildId": "g3"
  },
  {
    "id": "u3353",
    "name": "Aditya S.",
    "score": 53.65,
    "guildId": "g7"
  },
  {
    "id": "u3354",
    "name": "Karan A.",
    "score": 116.73,
    "guildId": "g8"
  },
  {
    "id": "u3355",
    "name": "Karan C.",
    "score": 86.48,
    "guildId": "g5"
  },
  {
    "id": "u3356",
    "name": "Hiro P.",
    "score": 82.23,
    "guildId": "g5"
  },
  {
    "id": "u3357",
    "name": "Megha Y.",
    "score": 94.32,
    "guildId": "g4"
  },
  {
    "id": "u3358",
    "name": "Amit B.",
    "score": 86.39,
    "guildId": "g6"
  },
  {
    "id": "u3359",
    "name": "Noah Y.",
    "score": 52.64,
    "guildId": "g1"
  },
  {
    "id": "u3360",
    "name": "Mia C.",
    "score": 75.26,
    "guildId": "g10"
  },
  {
    "id": "u3361",
    "name": "Ananya K.",
    "score": 37.78,
    "guildId": "g6"
  },
  {
    "id": "u3362",
    "name": "Ramesh B.",
    "score": 88.69,
    "guildId": "g7"
  },
  {
    "id": "u3363",
    "name": "Pooja Y.",
    "score": 11.54,
    "guildId": "g3"
  },
  {
    "id": "u3364",
    "name": "Vikram M.",
    "score": 136.86,
    "guildId": "g1"
  },
  {
    "id": "u3365",
    "name": "Ananya K.",
    "score": 80.29,
    "guildId": "g6"
  },
  {
    "id": "u3366",
    "name": "Ravi K.",
    "score": 18.23,
    "guildId": "g2"
  },
  {
    "id": "u3367",
    "name": "Rahul T.",
    "score": 93.95,
    "guildId": "g7"
  },
  {
    "id": "u3368",
    "name": "Anjali W.",
    "score": 140.45,
    "guildId": "g9"
  },
  {
    "id": "u3369",
    "name": "Rohit R.",
    "score": 54.89,
    "guildId": "g3"
  },
  {
    "id": "u3370",
    "name": "Ananya Z.",
    "score": 14.37,
    "guildId": "g10"
  },
  {
    "id": "u3371",
    "name": "Rahul D.",
    "score": 86.07,
    "guildId": "g2"
  },
  {
    "id": "u3372",
    "name": "Liam P.",
    "score": 111.66,
    "guildId": "g5"
  },
  {
    "id": "u3373",
    "name": "Luka B.",
    "score": 63.79,
    "guildId": "g7"
  },
  {
    "id": "u3374",
    "name": "Ishita M.",
    "score": 88.01,
    "guildId": "g2"
  },
  {
    "id": "u3375",
    "name": "Ananya S.",
    "score": 92.63,
    "guildId": "g6"
  },
  {
    "id": "u3376",
    "name": "Liam Y.",
    "score": 87.76,
    "guildId": "g8"
  },
  {
    "id": "u3377",
    "name": "Ali R.",
    "score": 83.78,
    "guildId": "g2"
  },
  {
    "id": "u3378",
    "name": "Divya Z.",
    "score": 130.62,
    "guildId": "g7"
  },
  {
    "id": "u3379",
    "name": "Suresh K.",
    "score": 128.25,
    "guildId": "g2"
  },
  {
    "id": "u3380",
    "name": "Megha D.",
    "score": 137.24,
    "guildId": "g3"
  },
  {
    "id": "u3381",
    "name": "Akash M.",
    "score": 70.84,
    "guildId": "g2"
  },
  {
    "id": "u3382",
    "name": "Akash Y.",
    "score": 95.09,
    "guildId": "g1"
  },
  {
    "id": "u3383",
    "name": "Pooja Y.",
    "score": 141.27,
    "guildId": "g3"
  },
  {
    "id": "u3384",
    "name": "Mia K.",
    "score": 68.14,
    "guildId": "g1"
  },
  {
    "id": "u3385",
    "name": "Swati K.",
    "score": 76.6,
    "guildId": "g2"
  },
  {
    "id": "u3386",
    "name": "Pooja A.",
    "score": 104.55,
    "guildId": "g9"
  },
  {
    "id": "u3387",
    "name": "Sneha R.",
    "score": 120.69,
    "guildId": "g3"
  },
  {
    "id": "u3388",
    "name": "Kavya B.",
    "score": 123.11,
    "guildId": "g9"
  },
  {
    "id": "u3389",
    "name": "Rahul V.",
    "score": 27.4,
    "guildId": "g2"
  },
  {
    "id": "u3390",
    "name": "Noah C.",
    "score": 70.77,
    "guildId": "g10"
  },
  {
    "id": "u3391",
    "name": "Greta V.",
    "score": 52.16,
    "guildId": "g9"
  },
  {
    "id": "u3392",
    "name": "Vikram B.",
    "score": 138.06,
    "guildId": "g8"
  },
  {
    "id": "u3393",
    "name": "Amit B.",
    "score": 127.28,
    "guildId": "g3"
  },
  {
    "id": "u3394",
    "name": "Rohit T.",
    "score": 125.85,
    "guildId": "g5"
  },
  {
    "id": "u3395",
    "name": "Karan B.",
    "score": 98.64,
    "guildId": "g6"
  },
  {
    "id": "u3396",
    "name": "Vikram W.",
    "score": 87.09,
    "guildId": "g10"
  },
  {
    "id": "u3397",
    "name": "Suresh Z.",
    "score": 149.01,
    "guildId": "g3"
  },
  {
    "id": "u3398",
    "name": "Siddharth Z.",
    "score": 85.52,
    "guildId": "g2"
  },
  {
    "id": "u3399",
    "name": "Siddharth M.",
    "score": 59.14,
    "guildId": "g1"
  },
  {
    "id": "u3400",
    "name": "Ali B.",
    "score": 134.97,
    "guildId": "g4"
  },
  {
    "id": "u3401",
    "name": "Amit Z.",
    "score": 64.44,
    "guildId": "g10"
  },
  {
    "id": "u3402",
    "name": "Akash B.",
    "score": 12.94,
    "guildId": "g6"
  },
  {
    "id": "u3403",
    "name": "Fatima W.",
    "score": 46.94,
    "guildId": "g3"
  },
  {
    "id": "u3404",
    "name": "Suresh Z.",
    "score": 53.91,
    "guildId": "g7"
  },
  {
    "id": "u3405",
    "name": "Sneha W.",
    "score": 34.92,
    "guildId": "g1"
  },
  {
    "id": "u3406",
    "name": "Karan W.",
    "score": 94.26,
    "guildId": "g5"
  },
  {
    "id": "u3407",
    "name": "Neha K.",
    "score": 20.35,
    "guildId": "g5"
  },
  {
    "id": "u3408",
    "name": "Amit Y.",
    "score": 42.96,
    "guildId": "g2"
  },
  {
    "id": "u3409",
    "name": "Ravi B.",
    "score": 79.14,
    "guildId": "g7"
  },
  {
    "id": "u3410",
    "name": "Neha D.",
    "score": 29.88,
    "guildId": "g9"
  },
  {
    "id": "u3411",
    "name": "Swati B.",
    "score": 142.13,
    "guildId": "g1"
  },
  {
    "id": "u3412",
    "name": "Anjali Z.",
    "score": 11.48,
    "guildId": "g1"
  },
  {
    "id": "u3413",
    "name": "Anjali P.",
    "score": 100.8,
    "guildId": "g9"
  },
  {
    "id": "u3414",
    "name": "Karan A.",
    "score": 130.5,
    "guildId": "g7"
  },
  {
    "id": "u3415",
    "name": "Neha S.",
    "score": 135.77,
    "guildId": "g2"
  },
  {
    "id": "u3416",
    "name": "Karan Y.",
    "score": 91.48,
    "guildId": "g3"
  },
  {
    "id": "u3417",
    "name": "Sneha A.",
    "score": 30.01,
    "guildId": "g8"
  },
  {
    "id": "u3418",
    "name": "Manish Z.",
    "score": 108.71,
    "guildId": "g2"
  },
  {
    "id": "u3419",
    "name": "Anjali A.",
    "score": 148.63,
    "guildId": "g7"
  },
  {
    "id": "u3420",
    "name": "Pooja D.",
    "score": 72.51,
    "guildId": "g5"
  },
  {
    "id": "u3421",
    "name": "Akash K.",
    "score": 89.74,
    "guildId": "g2"
  },
  {
    "id": "u3422",
    "name": "Arjun W.",
    "score": 78.37,
    "guildId": "g3"
  },
  {
    "id": "u3423",
    "name": "Suresh B.",
    "score": 122.99,
    "guildId": "g6"
  },
  {
    "id": "u3424",
    "name": "Rohit B.",
    "score": 40.98,
    "guildId": "g5"
  },
  {
    "id": "u3425",
    "name": "Megha W.",
    "score": 43.25,
    "guildId": "g4"
  },
  {
    "id": "u3426",
    "name": "Siddharth K.",
    "score": 55.87,
    "guildId": "g5"
  },
  {
    "id": "u3427",
    "name": "Mateo C.",
    "score": 75,
    "guildId": "g3"
  },
  {
    "id": "u3428",
    "name": "Liam P.",
    "score": 145.36,
    "guildId": "g9"
  },
  {
    "id": "u3429",
    "name": "Pooja S.",
    "score": 135.61,
    "guildId": "g4"
  },
  {
    "id": "u3430",
    "name": "Manish Y.",
    "score": 148.93,
    "guildId": "g9"
  },
  {
    "id": "u3431",
    "name": "Ramesh Z.",
    "score": 13.9,
    "guildId": "g8"
  },
  {
    "id": "u3432",
    "name": "Anjali A.",
    "score": 23.03,
    "guildId": "g5"
  },
  {
    "id": "u3433",
    "name": "Rahul R.",
    "score": 10.59,
    "guildId": "g5"
  },
  {
    "id": "u3434",
    "name": "Pooja Y.",
    "score": 84.28,
    "guildId": "g9"
  },
  {
    "id": "u3435",
    "name": "Ishita T.",
    "score": 146.26,
    "guildId": "g10"
  },
  {
    "id": "u3436",
    "name": "Luka B.",
    "score": 73.72,
    "guildId": "g4"
  },
  {
    "id": "u3437",
    "name": "Chen R.",
    "score": 70.79,
    "guildId": "g9"
  },
  {
    "id": "u3438",
    "name": "Divya D.",
    "score": 35.74,
    "guildId": "g5"
  },
  {
    "id": "u3439",
    "name": "Neha V.",
    "score": 42.53,
    "guildId": "g4"
  },
  {
    "id": "u3440",
    "name": "Suresh P.",
    "score": 20.23,
    "guildId": "g1"
  },
  {
    "id": "u3441",
    "name": "Amit M.",
    "score": 139.96,
    "guildId": "g1"
  },
  {
    "id": "u3442",
    "name": "Siddharth R.",
    "score": 38.97,
    "guildId": "g4"
  },
  {
    "id": "u3443",
    "name": "Suresh M.",
    "score": 112.55,
    "guildId": "g6"
  },
  {
    "id": "u3444",
    "name": "Manish K.",
    "score": 21.27,
    "guildId": "g8"
  },
  {
    "id": "u3445",
    "name": "Siddharth S.",
    "score": 33.06,
    "guildId": "g4"
  },
  {
    "id": "u3446",
    "name": "Karan T.",
    "score": 131.08,
    "guildId": "g8"
  },
  {
    "id": "u3447",
    "name": "Aditya Z.",
    "score": 94.22,
    "guildId": "g8"
  },
  {
    "id": "u3448",
    "name": "Akash T.",
    "score": 44.84,
    "guildId": "g3"
  },
  {
    "id": "u3449",
    "name": "Pooja Y.",
    "score": 108.85,
    "guildId": "g9"
  },
  {
    "id": "u3450",
    "name": "Ishita M.",
    "score": 29.13,
    "guildId": "g4"
  },
  {
    "id": "u3451",
    "name": "Amit B.",
    "score": 45.1,
    "guildId": "g8"
  },
  {
    "id": "u3452",
    "name": "Divya Z.",
    "score": 39,
    "guildId": "g6"
  },
  {
    "id": "u3453",
    "name": "Ishita R.",
    "score": 80,
    "guildId": "g9"
  },
  {
    "id": "u3454",
    "name": "Priya W.",
    "score": 69.37,
    "guildId": "g1"
  },
  {
    "id": "u3455",
    "name": "Vikram V.",
    "score": 79.82,
    "guildId": "g5"
  },
  {
    "id": "u3456",
    "name": "Kavya T.",
    "score": 49.1,
    "guildId": "g1"
  },
  {
    "id": "u3457",
    "name": "Sneha D.",
    "score": 94.74,
    "guildId": "g10"
  },
  {
    "id": "u3458",
    "name": "Fatima A.",
    "score": 104.44,
    "guildId": "g2"
  },
  {
    "id": "u3459",
    "name": "Akash K.",
    "score": 33.42,
    "guildId": "g7"
  },
  {
    "id": "u3460",
    "name": "Olivia V.",
    "score": 18.57,
    "guildId": "g5"
  },
  {
    "id": "u3461",
    "name": "Amit S.",
    "score": 147.43,
    "guildId": "g2"
  },
  {
    "id": "u3462",
    "name": "Pooja D.",
    "score": 86.14,
    "guildId": "g8"
  },
  {
    "id": "u3463",
    "name": "Priya Y.",
    "score": 107.39,
    "guildId": "g9"
  },
  {
    "id": "u3464",
    "name": "Noah M.",
    "score": 14.6,
    "guildId": "g6"
  },
  {
    "id": "u3465",
    "name": "Megha C.",
    "score": 58.61,
    "guildId": "g4"
  },
  {
    "id": "u3466",
    "name": "Manish A.",
    "score": 67.6,
    "guildId": "g4"
  },
  {
    "id": "u3467",
    "name": "Swati S.",
    "score": 67.67,
    "guildId": "g5"
  },
  {
    "id": "u3468",
    "name": "Manish A.",
    "score": 30.74,
    "guildId": "g1"
  },
  {
    "id": "u3469",
    "name": "Sneha S.",
    "score": 118.34,
    "guildId": "g2"
  },
  {
    "id": "u3470",
    "name": "Megha C.",
    "score": 115.81,
    "guildId": "g9"
  },
  {
    "id": "u3471",
    "name": "Anjali A.",
    "score": 15.29,
    "guildId": "g3"
  },
  {
    "id": "u3472",
    "name": "Divya Y.",
    "score": 148.35,
    "guildId": "g5"
  },
  {
    "id": "u3473",
    "name": "Noah W.",
    "score": 96.1,
    "guildId": "g3"
  },
  {
    "id": "u3474",
    "name": "Aditya A.",
    "score": 37.75,
    "guildId": "g3"
  },
  {
    "id": "u3475",
    "name": "Mia S.",
    "score": 43.24,
    "guildId": "g10"
  },
  {
    "id": "u3476",
    "name": "Greta B.",
    "score": 76.61,
    "guildId": "g6"
  },
  {
    "id": "u3477",
    "name": "Megha A.",
    "score": 105.45,
    "guildId": "g4"
  },
  {
    "id": "u3478",
    "name": "Megha Y.",
    "score": 37.74,
    "guildId": "g2"
  },
  {
    "id": "u3479",
    "name": "John P.",
    "score": 46.79,
    "guildId": "g6"
  },
  {
    "id": "u3480",
    "name": "Priya B.",
    "score": 38.24,
    "guildId": "g8"
  },
  {
    "id": "u3481",
    "name": "Anjali Z.",
    "score": 64.04,
    "guildId": "g5"
  },
  {
    "id": "u3482",
    "name": "Suresh M.",
    "score": 30.86,
    "guildId": "g9"
  },
  {
    "id": "u3483",
    "name": "Amit P.",
    "score": 69.85,
    "guildId": "g2"
  },
  {
    "id": "u3484",
    "name": "Manish S.",
    "score": 134.15,
    "guildId": "g4"
  },
  {
    "id": "u3485",
    "name": "Siddharth R.",
    "score": 24.47,
    "guildId": "g8"
  },
  {
    "id": "u3486",
    "name": "Ravi W.",
    "score": 11.36,
    "guildId": "g2"
  },
  {
    "id": "u3487",
    "name": "Ravi P.",
    "score": 106.87,
    "guildId": "g5"
  },
  {
    "id": "u3488",
    "name": "Aditya A.",
    "score": 26.78,
    "guildId": "g6"
  },
  {
    "id": "u3489",
    "name": "Neha B.",
    "score": 52.02,
    "guildId": "g2"
  },
  {
    "id": "u3490",
    "name": "Amit S.",
    "score": 74.94,
    "guildId": "g7"
  },
  {
    "id": "u3491",
    "name": "Aditya A.",
    "score": 106.34,
    "guildId": "g5"
  },
  {
    "id": "u3492",
    "name": "Mia D.",
    "score": 67.45,
    "guildId": "g8"
  },
  {
    "id": "u3493",
    "name": "Ishita D.",
    "score": 31.24,
    "guildId": "g6"
  },
  {
    "id": "u3494",
    "name": "Kavya B.",
    "score": 146.97,
    "guildId": "g7"
  },
  {
    "id": "u3495",
    "name": "Neha B.",
    "score": 74.8,
    "guildId": "g10"
  },
  {
    "id": "u3496",
    "name": "Rahul C.",
    "score": 47.46,
    "guildId": "g5"
  },
  {
    "id": "u3497",
    "name": "Rahul R.",
    "score": 20.83,
    "guildId": "g8"
  },
  {
    "id": "u3498",
    "name": "Suresh R.",
    "score": 10.98,
    "guildId": "g5"
  },
  {
    "id": "u3499",
    "name": "Aditya B.",
    "score": 65.06,
    "guildId": "g6"
  },
  {
    "id": "u3500",
    "name": "Manish A.",
    "score": 134.59,
    "guildId": "g8"
  },
  {
    "id": "u3501",
    "name": "Priya C.",
    "score": 25.38,
    "guildId": "g10"
  },
  {
    "id": "u3502",
    "name": "Kavya M.",
    "score": 32.74,
    "guildId": "g6"
  },
  {
    "id": "u3503",
    "name": "Suresh W.",
    "score": 67.94,
    "guildId": "g3"
  },
  {
    "id": "u3504",
    "name": "Hans Z.",
    "score": 123.68,
    "guildId": "g8"
  },
  {
    "id": "u3505",
    "name": "Vikram M.",
    "score": 124.82,
    "guildId": "g8"
  },
  {
    "id": "u3506",
    "name": "Ananya W.",
    "score": 53.87,
    "guildId": "g5"
  },
  {
    "id": "u3507",
    "name": "Rohit B.",
    "score": 14.21,
    "guildId": "g3"
  },
  {
    "id": "u3508",
    "name": "Ishita K.",
    "score": 123,
    "guildId": "g8"
  },
  {
    "id": "u3509",
    "name": "Divya Y.",
    "score": 53.12,
    "guildId": "g9"
  },
  {
    "id": "u3510",
    "name": "Ishita M.",
    "score": 57.68,
    "guildId": "g1"
  },
  {
    "id": "u3511",
    "name": "Suresh W.",
    "score": 120.84,
    "guildId": "g7"
  },
  {
    "id": "u3512",
    "name": "Anjali D.",
    "score": 60.34,
    "guildId": "g10"
  },
  {
    "id": "u3513",
    "name": "Rahul B.",
    "score": 141.66,
    "guildId": "g9"
  },
  {
    "id": "u3514",
    "name": "Suresh C.",
    "score": 92.34,
    "guildId": "g9"
  },
  {
    "id": "u3515",
    "name": "Olivia R.",
    "score": 126.3,
    "guildId": "g9"
  },
  {
    "id": "u3516",
    "name": "Siddharth C.",
    "score": 147.24,
    "guildId": "g8"
  },
  {
    "id": "u3517",
    "name": "Vikram W.",
    "score": 57.3,
    "guildId": "g6"
  },
  {
    "id": "u3518",
    "name": "Manish C.",
    "score": 104.85,
    "guildId": "g3"
  },
  {
    "id": "u3519",
    "name": "Ramesh K.",
    "score": 130.2,
    "guildId": "g4"
  },
  {
    "id": "u3520",
    "name": "Ananya W.",
    "score": 117.33,
    "guildId": "g6"
  },
  {
    "id": "u3521",
    "name": "Arjun C.",
    "score": 96.65,
    "guildId": "g10"
  },
  {
    "id": "u3522",
    "name": "Karan S.",
    "score": 110.18,
    "guildId": "g9"
  },
  {
    "id": "u3523",
    "name": "Aditya V.",
    "score": 53.23,
    "guildId": "g2"
  },
  {
    "id": "u3524",
    "name": "Kavya C.",
    "score": 106.23,
    "guildId": "g1"
  },
  {
    "id": "u3525",
    "name": "Rohit B.",
    "score": 56.96,
    "guildId": "g6"
  },
  {
    "id": "u3526",
    "name": "Karan C.",
    "score": 59.44,
    "guildId": "g1"
  },
  {
    "id": "u3527",
    "name": "Kavya V.",
    "score": 142.84,
    "guildId": "g6"
  },
  {
    "id": "u3528",
    "name": "Swati D.",
    "score": 63.86,
    "guildId": "g7"
  },
  {
    "id": "u3529",
    "name": "Divya A.",
    "score": 119.05,
    "guildId": "g2"
  },
  {
    "id": "u3530",
    "name": "Ishita D.",
    "score": 86.42,
    "guildId": "g2"
  },
  {
    "id": "u3531",
    "name": "Manish S.",
    "score": 139.65,
    "guildId": "g7"
  },
  {
    "id": "u3532",
    "name": "Ramesh Y.",
    "score": 89.42,
    "guildId": "g9"
  },
  {
    "id": "u3533",
    "name": "John K.",
    "score": 39.51,
    "guildId": "g3"
  },
  {
    "id": "u3534",
    "name": "Arjun A.",
    "score": 86.66,
    "guildId": "g2"
  },
  {
    "id": "u3535",
    "name": "Kavya T.",
    "score": 99.93,
    "guildId": "g3"
  },
  {
    "id": "u3536",
    "name": "Aditya M.",
    "score": 116.25,
    "guildId": "g5"
  },
  {
    "id": "u3537",
    "name": "Suresh V.",
    "score": 76.59,
    "guildId": "g6"
  },
  {
    "id": "u3538",
    "name": "Swati Y.",
    "score": 85.5,
    "guildId": "g3"
  },
  {
    "id": "u3539",
    "name": "Anjali T.",
    "score": 29.96,
    "guildId": "g1"
  },
  {
    "id": "u3540",
    "name": "Megha Y.",
    "score": 142.46,
    "guildId": "g4"
  },
  {
    "id": "u3541",
    "name": "Manish V.",
    "score": 114.72,
    "guildId": "g4"
  },
  {
    "id": "u3542",
    "name": "Karan D.",
    "score": 61.9,
    "guildId": "g6"
  },
  {
    "id": "u3543",
    "name": "Ali V.",
    "score": 98.42,
    "guildId": "g5"
  },
  {
    "id": "u3544",
    "name": "Yuki D.",
    "score": 12.24,
    "guildId": "g1"
  },
  {
    "id": "u3545",
    "name": "Sneha T.",
    "score": 38.83,
    "guildId": "g7"
  },
  {
    "id": "u3546",
    "name": "Vikram S.",
    "score": 84.26,
    "guildId": "g9"
  },
  {
    "id": "u3547",
    "name": "Suresh Y.",
    "score": 73.48,
    "guildId": "g5"
  },
  {
    "id": "u3548",
    "name": "Greta B.",
    "score": 18.71,
    "guildId": "g2"
  },
  {
    "id": "u3549",
    "name": "Noah P.",
    "score": 137.4,
    "guildId": "g8"
  },
  {
    "id": "u3550",
    "name": "Megha Y.",
    "score": 148.98,
    "guildId": "g9"
  },
  {
    "id": "u3551",
    "name": "Ravi D.",
    "score": 112.2,
    "guildId": "g8"
  },
  {
    "id": "u3552",
    "name": "Siddharth V.",
    "score": 56.58,
    "guildId": "g1"
  },
  {
    "id": "u3553",
    "name": "Kavya Y.",
    "score": 88.18,
    "guildId": "g1"
  },
  {
    "id": "u3554",
    "name": "Ravi B.",
    "score": 98.27,
    "guildId": "g7"
  },
  {
    "id": "u3555",
    "name": "Wei T.",
    "score": 135.34,
    "guildId": "g3"
  },
  {
    "id": "u3556",
    "name": "Amit C.",
    "score": 113.4,
    "guildId": "g9"
  },
  {
    "id": "u3557",
    "name": "Hans Z.",
    "score": 130.4,
    "guildId": "g5"
  },
  {
    "id": "u3558",
    "name": "Aditya M.",
    "score": 72.26,
    "guildId": "g9"
  },
  {
    "id": "u3559",
    "name": "Manish Z.",
    "score": 86.54,
    "guildId": "g10"
  },
  {
    "id": "u3560",
    "name": "Anjali K.",
    "score": 14.4,
    "guildId": "g7"
  },
  {
    "id": "u3561",
    "name": "Manish R.",
    "score": 112.64,
    "guildId": "g4"
  },
  {
    "id": "u3562",
    "name": "Luka V.",
    "score": 41.85,
    "guildId": "g10"
  },
  {
    "id": "u3563",
    "name": "Emma T.",
    "score": 113.99,
    "guildId": "g2"
  },
  {
    "id": "u3564",
    "name": "Suresh K.",
    "score": 108.16,
    "guildId": "g7"
  },
  {
    "id": "u3565",
    "name": "Divya B.",
    "score": 114.5,
    "guildId": "g1"
  },
  {
    "id": "u3566",
    "name": "Hans S.",
    "score": 119.54,
    "guildId": "g7"
  },
  {
    "id": "u3567",
    "name": "Rohit S.",
    "score": 32.32,
    "guildId": "g2"
  },
  {
    "id": "u3568",
    "name": "Divya Y.",
    "score": 111.16,
    "guildId": "g1"
  },
  {
    "id": "u3569",
    "name": "Karan M.",
    "score": 134.65,
    "guildId": "g4"
  },
  {
    "id": "u3570",
    "name": "Neha D.",
    "score": 15.01,
    "guildId": "g5"
  },
  {
    "id": "u3571",
    "name": "Siddharth S.",
    "score": 123.91,
    "guildId": "g6"
  },
  {
    "id": "u3572",
    "name": "Ishita C.",
    "score": 126.89,
    "guildId": "g9"
  },
  {
    "id": "u3573",
    "name": "Sophia K.",
    "score": 128.29,
    "guildId": "g4"
  },
  {
    "id": "u3574",
    "name": "Ravi A.",
    "score": 143.6,
    "guildId": "g2"
  },
  {
    "id": "u3575",
    "name": "Isabella S.",
    "score": 100.8,
    "guildId": "g4"
  },
  {
    "id": "u3576",
    "name": "Vikram A.",
    "score": 134.08,
    "guildId": "g4"
  },
  {
    "id": "u3577",
    "name": "Ramesh P.",
    "score": 118.43,
    "guildId": "g9"
  },
  {
    "id": "u3578",
    "name": "Sneha Y.",
    "score": 91.4,
    "guildId": "g1"
  },
  {
    "id": "u3579",
    "name": "Neha A.",
    "score": 61.65,
    "guildId": "g3"
  },
  {
    "id": "u3580",
    "name": "Sophia W.",
    "score": 104.54,
    "guildId": "g9"
  },
  {
    "id": "u3581",
    "name": "Akash V.",
    "score": 63.35,
    "guildId": "g2"
  },
  {
    "id": "u3582",
    "name": "Neha Z.",
    "score": 119.95,
    "guildId": "g4"
  },
  {
    "id": "u3583",
    "name": "Chen D.",
    "score": 19.38,
    "guildId": "g6"
  },
  {
    "id": "u3584",
    "name": "Aditya Y.",
    "score": 40.75,
    "guildId": "g10"
  },
  {
    "id": "u3585",
    "name": "Arjun B.",
    "score": 142.16,
    "guildId": "g4"
  },
  {
    "id": "u3586",
    "name": "Yuki A.",
    "score": 83.23,
    "guildId": "g8"
  },
  {
    "id": "u3587",
    "name": "Aditya K.",
    "score": 85.14,
    "guildId": "g8"
  },
  {
    "id": "u3588",
    "name": "John Y.",
    "score": 121.22,
    "guildId": "g7"
  },
  {
    "id": "u3589",
    "name": "Priya A.",
    "score": 26.77,
    "guildId": "g8"
  },
  {
    "id": "u3590",
    "name": "Aditya B.",
    "score": 37.3,
    "guildId": "g9"
  },
  {
    "id": "u3591",
    "name": "Pooja Y.",
    "score": 133.33,
    "guildId": "g1"
  },
  {
    "id": "u3592",
    "name": "Akash D.",
    "score": 111.57,
    "guildId": "g8"
  },
  {
    "id": "u3593",
    "name": "Divya B.",
    "score": 47.35,
    "guildId": "g4"
  },
  {
    "id": "u3594",
    "name": "Arjun S.",
    "score": 73.25,
    "guildId": "g1"
  },
  {
    "id": "u3595",
    "name": "Rohit Z.",
    "score": 51.59,
    "guildId": "g1"
  },
  {
    "id": "u3596",
    "name": "Anjali C.",
    "score": 89.55,
    "guildId": "g6"
  },
  {
    "id": "u3597",
    "name": "Ramesh R.",
    "score": 37.36,
    "guildId": "g4"
  },
  {
    "id": "u3598",
    "name": "Mia T.",
    "score": 87.57,
    "guildId": "g1"
  },
  {
    "id": "u3599",
    "name": "Olivia D.",
    "score": 126.3,
    "guildId": "g10"
  },
  {
    "id": "u3600",
    "name": "Amit Z.",
    "score": 88.09,
    "guildId": "g3"
  },
  {
    "id": "u3601",
    "name": "Luka S.",
    "score": 88.65,
    "guildId": "g3"
  },
  {
    "id": "u3602",
    "name": "Rahul T.",
    "score": 92.51,
    "guildId": "g7"
  },
  {
    "id": "u3603",
    "name": "Vikram S.",
    "score": 147.45,
    "guildId": "g7"
  },
  {
    "id": "u3604",
    "name": "Ravi Z.",
    "score": 112.44,
    "guildId": "g6"
  },
  {
    "id": "u3605",
    "name": "Luka P.",
    "score": 38.64,
    "guildId": "g1"
  },
  {
    "id": "u3606",
    "name": "Karan S.",
    "score": 149.03,
    "guildId": "g9"
  },
  {
    "id": "u3607",
    "name": "Olivia S.",
    "score": 131.61,
    "guildId": "g2"
  },
  {
    "id": "u3608",
    "name": "Hans M.",
    "score": 148.7,
    "guildId": "g1"
  },
  {
    "id": "u3609",
    "name": "Arjun Y.",
    "score": 126.35,
    "guildId": "g8"
  },
  {
    "id": "u3610",
    "name": "Karan V.",
    "score": 14.84,
    "guildId": "g3"
  },
  {
    "id": "u3611",
    "name": "Pooja D.",
    "score": 22.02,
    "guildId": "g2"
  },
  {
    "id": "u3612",
    "name": "Anjali A.",
    "score": 147.52,
    "guildId": "g5"
  },
  {
    "id": "u3613",
    "name": "Divya R.",
    "score": 131.01,
    "guildId": "g9"
  },
  {
    "id": "u3614",
    "name": "Manish Z.",
    "score": 137.67,
    "guildId": "g5"
  },
  {
    "id": "u3615",
    "name": "Priya R.",
    "score": 124.86,
    "guildId": "g1"
  },
  {
    "id": "u3616",
    "name": "Divya D.",
    "score": 90.51,
    "guildId": "g9"
  },
  {
    "id": "u3617",
    "name": "Rahul M.",
    "score": 46.33,
    "guildId": "g5"
  },
  {
    "id": "u3618",
    "name": "Amit Y.",
    "score": 71.48,
    "guildId": "g6"
  },
  {
    "id": "u3619",
    "name": "Ishita D.",
    "score": 21.76,
    "guildId": "g3"
  },
  {
    "id": "u3620",
    "name": "Kavya P.",
    "score": 60.91,
    "guildId": "g2"
  },
  {
    "id": "u3621",
    "name": "Ali V.",
    "score": 66.81,
    "guildId": "g8"
  },
  {
    "id": "u3622",
    "name": "Akash B.",
    "score": 17.37,
    "guildId": "g3"
  },
  {
    "id": "u3623",
    "name": "Sneha Z.",
    "score": 23.49,
    "guildId": "g6"
  },
  {
    "id": "u3624",
    "name": "Ananya C.",
    "score": 56.26,
    "guildId": "g7"
  },
  {
    "id": "u3625",
    "name": "Swati S.",
    "score": 120.02,
    "guildId": "g4"
  },
  {
    "id": "u3626",
    "name": "Megha C.",
    "score": 138.04,
    "guildId": "g10"
  },
  {
    "id": "u3627",
    "name": "Liam V.",
    "score": 12.13,
    "guildId": "g9"
  },
  {
    "id": "u3628",
    "name": "Ishita A.",
    "score": 62.94,
    "guildId": "g9"
  },
  {
    "id": "u3629",
    "name": "Noah K.",
    "score": 26.7,
    "guildId": "g7"
  },
  {
    "id": "u3630",
    "name": "Swati S.",
    "score": 119.26,
    "guildId": "g7"
  },
  {
    "id": "u3631",
    "name": "Isabella T.",
    "score": 135.89,
    "guildId": "g4"
  },
  {
    "id": "u3632",
    "name": "Siddharth Z.",
    "score": 20.12,
    "guildId": "g6"
  },
  {
    "id": "u3633",
    "name": "Anjali A.",
    "score": 93.71,
    "guildId": "g9"
  },
  {
    "id": "u3634",
    "name": "Aditya T.",
    "score": 85.71,
    "guildId": "g10"
  },
  {
    "id": "u3635",
    "name": "Karan V.",
    "score": 35.08,
    "guildId": "g4"
  },
  {
    "id": "u3636",
    "name": "Kavya W.",
    "score": 117.38,
    "guildId": "g4"
  },
  {
    "id": "u3637",
    "name": "Swati B.",
    "score": 47.85,
    "guildId": "g1"
  },
  {
    "id": "u3638",
    "name": "Rohit D.",
    "score": 138.28,
    "guildId": "g7"
  },
  {
    "id": "u3639",
    "name": "Vikram Y.",
    "score": 110.31,
    "guildId": "g1"
  },
  {
    "id": "u3640",
    "name": "Olivia B.",
    "score": 79.81,
    "guildId": "g5"
  },
  {
    "id": "u3641",
    "name": "Vikram M.",
    "score": 87.7,
    "guildId": "g3"
  },
  {
    "id": "u3642",
    "name": "Akash T.",
    "score": 10.17,
    "guildId": "g5"
  },
  {
    "id": "u3643",
    "name": "Ishita Y.",
    "score": 93.4,
    "guildId": "g4"
  },
  {
    "id": "u3644",
    "name": "Pooja W.",
    "score": 112.63,
    "guildId": "g2"
  },
  {
    "id": "u3645",
    "name": "Swati C.",
    "score": 119.49,
    "guildId": "g4"
  },
  {
    "id": "u3646",
    "name": "Anjali C.",
    "score": 91.9,
    "guildId": "g10"
  },
  {
    "id": "u3647",
    "name": "Ravi T.",
    "score": 28.99,
    "guildId": "g6"
  },
  {
    "id": "u3648",
    "name": "Hiro R.",
    "score": 57.29,
    "guildId": "g1"
  },
  {
    "id": "u3649",
    "name": "Kavya W.",
    "score": 128.26,
    "guildId": "g3"
  },
  {
    "id": "u3650",
    "name": "Neha K.",
    "score": 51.5,
    "guildId": "g2"
  },
  {
    "id": "u3651",
    "name": "Priya T.",
    "score": 97.86,
    "guildId": "g7"
  },
  {
    "id": "u3652",
    "name": "Ravi D.",
    "score": 133.7,
    "guildId": "g2"
  },
  {
    "id": "u3653",
    "name": "Karan Y.",
    "score": 133.16,
    "guildId": "g4"
  },
  {
    "id": "u3654",
    "name": "Manish P.",
    "score": 19.22,
    "guildId": "g5"
  },
  {
    "id": "u3655",
    "name": "Ishita W.",
    "score": 119.36,
    "guildId": "g2"
  },
  {
    "id": "u3656",
    "name": "Akash W.",
    "score": 43.64,
    "guildId": "g3"
  },
  {
    "id": "u3657",
    "name": "Rohit P.",
    "score": 32.53,
    "guildId": "g1"
  },
  {
    "id": "u3658",
    "name": "Rahul V.",
    "score": 127.04,
    "guildId": "g5"
  },
  {
    "id": "u3659",
    "name": "Ishita Y.",
    "score": 89.77,
    "guildId": "g5"
  },
  {
    "id": "u3660",
    "name": "Karan D.",
    "score": 101.04,
    "guildId": "g1"
  },
  {
    "id": "u3661",
    "name": "Divya S.",
    "score": 27.14,
    "guildId": "g1"
  },
  {
    "id": "u3662",
    "name": "Liam M.",
    "score": 112.97,
    "guildId": "g1"
  },
  {
    "id": "u3663",
    "name": "Hiro K.",
    "score": 139.86,
    "guildId": "g1"
  },
  {
    "id": "u3664",
    "name": "Emma Y.",
    "score": 33,
    "guildId": "g6"
  },
  {
    "id": "u3665",
    "name": "Divya V.",
    "score": 22.07,
    "guildId": "g5"
  },
  {
    "id": "u3666",
    "name": "Akash C.",
    "score": 71.73,
    "guildId": "g3"
  },
  {
    "id": "u3667",
    "name": "Divya V.",
    "score": 140.62,
    "guildId": "g10"
  },
  {
    "id": "u3668",
    "name": "Vikram B.",
    "score": 75.98,
    "guildId": "g7"
  },
  {
    "id": "u3669",
    "name": "Akash C.",
    "score": 106.62,
    "guildId": "g6"
  },
  {
    "id": "u3670",
    "name": "Mateo S.",
    "score": 111.42,
    "guildId": "g6"
  },
  {
    "id": "u3671",
    "name": "Vikram Y.",
    "score": 51.63,
    "guildId": "g2"
  },
  {
    "id": "u3672",
    "name": "Siddharth W.",
    "score": 87.89,
    "guildId": "g5"
  },
  {
    "id": "u3673",
    "name": "Divya K.",
    "score": 54.46,
    "guildId": "g2"
  },
  {
    "id": "u3674",
    "name": "Ravi B.",
    "score": 73.27,
    "guildId": "g1"
  },
  {
    "id": "u3675",
    "name": "Rahul K.",
    "score": 40.08,
    "guildId": "g8"
  },
  {
    "id": "u3676",
    "name": "Wei V.",
    "score": 50.25,
    "guildId": "g3"
  },
  {
    "id": "u3677",
    "name": "Ananya Z.",
    "score": 43.63,
    "guildId": "g6"
  },
  {
    "id": "u3678",
    "name": "Divya M.",
    "score": 146.22,
    "guildId": "g3"
  },
  {
    "id": "u3679",
    "name": "Suresh Y.",
    "score": 74.85,
    "guildId": "g4"
  },
  {
    "id": "u3680",
    "name": "Swati K.",
    "score": 14.6,
    "guildId": "g4"
  },
  {
    "id": "u3681",
    "name": "Sneha T.",
    "score": 107.8,
    "guildId": "g7"
  },
  {
    "id": "u3682",
    "name": "Divya D.",
    "score": 34.76,
    "guildId": "g8"
  },
  {
    "id": "u3683",
    "name": "Suresh D.",
    "score": 89.47,
    "guildId": "g8"
  },
  {
    "id": "u3684",
    "name": "Divya K.",
    "score": 127.18,
    "guildId": "g7"
  },
  {
    "id": "u3685",
    "name": "Suresh T.",
    "score": 18.88,
    "guildId": "g6"
  },
  {
    "id": "u3686",
    "name": "Siddharth P.",
    "score": 126.55,
    "guildId": "g6"
  },
  {
    "id": "u3687",
    "name": "Neha C.",
    "score": 108.62,
    "guildId": "g2"
  },
  {
    "id": "u3688",
    "name": "Suresh Y.",
    "score": 129.11,
    "guildId": "g9"
  },
  {
    "id": "u3689",
    "name": "Vikram K.",
    "score": 106.77,
    "guildId": "g2"
  },
  {
    "id": "u3690",
    "name": "Kavya Z.",
    "score": 97.03,
    "guildId": "g8"
  },
  {
    "id": "u3691",
    "name": "Vikram T.",
    "score": 11.34,
    "guildId": "g2"
  },
  {
    "id": "u3692",
    "name": "Sneha C.",
    "score": 68.91,
    "guildId": "g6"
  },
  {
    "id": "u3693",
    "name": "Rohit R.",
    "score": 13.73,
    "guildId": "g7"
  },
  {
    "id": "u3694",
    "name": "Siddharth Y.",
    "score": 42.59,
    "guildId": "g8"
  },
  {
    "id": "u3695",
    "name": "Priya A.",
    "score": 90.97,
    "guildId": "g2"
  },
  {
    "id": "u3696",
    "name": "Swati W.",
    "score": 95.83,
    "guildId": "g1"
  },
  {
    "id": "u3697",
    "name": "Pooja D.",
    "score": 117.5,
    "guildId": "g6"
  },
  {
    "id": "u3698",
    "name": "Suresh W.",
    "score": 19.59,
    "guildId": "g7"
  },
  {
    "id": "u3699",
    "name": "Ravi V.",
    "score": 111.16,
    "guildId": "g9"
  },
  {
    "id": "u3700",
    "name": "Yuki K.",
    "score": 54.4,
    "guildId": "g10"
  },
  {
    "id": "u3701",
    "name": "Ramesh R.",
    "score": 42.61,
    "guildId": "g8"
  },
  {
    "id": "u3702",
    "name": "Rohit P.",
    "score": 70.61,
    "guildId": "g3"
  },
  {
    "id": "u3703",
    "name": "Noah V.",
    "score": 53.14,
    "guildId": "g5"
  },
  {
    "id": "u3704",
    "name": "Anjali M.",
    "score": 77.39,
    "guildId": "g9"
  },
  {
    "id": "u3705",
    "name": "Aditya Y.",
    "score": 117.32,
    "guildId": "g10"
  },
  {
    "id": "u3706",
    "name": "Siddharth T.",
    "score": 45.32,
    "guildId": "g5"
  },
  {
    "id": "u3707",
    "name": "Luka R.",
    "score": 88.29,
    "guildId": "g1"
  },
  {
    "id": "u3708",
    "name": "Siddharth Z.",
    "score": 61.9,
    "guildId": "g2"
  },
  {
    "id": "u3709",
    "name": "Divya T.",
    "score": 63.9,
    "guildId": "g8"
  },
  {
    "id": "u3710",
    "name": "Megha A.",
    "score": 93.6,
    "guildId": "g4"
  },
  {
    "id": "u3711",
    "name": "John K.",
    "score": 27.32,
    "guildId": "g7"
  },
  {
    "id": "u3712",
    "name": "Aditya S.",
    "score": 53.88,
    "guildId": "g5"
  },
  {
    "id": "u3713",
    "name": "Rahul Y.",
    "score": 149.89,
    "guildId": "g10"
  },
  {
    "id": "u3714",
    "name": "Rohit P.",
    "score": 40.55,
    "guildId": "g3"
  },
  {
    "id": "u3715",
    "name": "Amit M.",
    "score": 65.79,
    "guildId": "g7"
  },
  {
    "id": "u3716",
    "name": "Ananya B.",
    "score": 20.39,
    "guildId": "g4"
  },
  {
    "id": "u3717",
    "name": "Siddharth W.",
    "score": 142.23,
    "guildId": "g10"
  },
  {
    "id": "u3718",
    "name": "Suresh V.",
    "score": 78.07,
    "guildId": "g2"
  },
  {
    "id": "u3719",
    "name": "Amit W.",
    "score": 126.95,
    "guildId": "g5"
  },
  {
    "id": "u3720",
    "name": "Vikram R.",
    "score": 94.41,
    "guildId": "g7"
  },
  {
    "id": "u3721",
    "name": "Hiro A.",
    "score": 17.02,
    "guildId": "g1"
  },
  {
    "id": "u3722",
    "name": "Ishita M.",
    "score": 109.93,
    "guildId": "g7"
  },
  {
    "id": "u3723",
    "name": "Mia V.",
    "score": 16.84,
    "guildId": "g5"
  },
  {
    "id": "u3724",
    "name": "Suresh R.",
    "score": 58.85,
    "guildId": "g1"
  },
  {
    "id": "u3725",
    "name": "Fatima M.",
    "score": 25.43,
    "guildId": "g6"
  },
  {
    "id": "u3726",
    "name": "Rahul T.",
    "score": 134.55,
    "guildId": "g1"
  },
  {
    "id": "u3727",
    "name": "Ishita W.",
    "score": 47.68,
    "guildId": "g9"
  },
  {
    "id": "u3728",
    "name": "Suresh V.",
    "score": 72.11,
    "guildId": "g2"
  },
  {
    "id": "u3729",
    "name": "Luka D.",
    "score": 64.45,
    "guildId": "g8"
  },
  {
    "id": "u3730",
    "name": "Swati W.",
    "score": 19.29,
    "guildId": "g7"
  },
  {
    "id": "u3731",
    "name": "Chen S.",
    "score": 93.34,
    "guildId": "g7"
  },
  {
    "id": "u3732",
    "name": "Fatima V.",
    "score": 88.98,
    "guildId": "g1"
  },
  {
    "id": "u3733",
    "name": "Arjun B.",
    "score": 112.4,
    "guildId": "g10"
  },
  {
    "id": "u3734",
    "name": "Kavya D.",
    "score": 60.95,
    "guildId": "g2"
  },
  {
    "id": "u3735",
    "name": "Ravi T.",
    "score": 99.57,
    "guildId": "g8"
  },
  {
    "id": "u3736",
    "name": "Siddharth B.",
    "score": 106.89,
    "guildId": "g7"
  },
  {
    "id": "u3737",
    "name": "Olivia D.",
    "score": 110.67,
    "guildId": "g10"
  },
  {
    "id": "u3738",
    "name": "Neha C.",
    "score": 147.39,
    "guildId": "g9"
  },
  {
    "id": "u3739",
    "name": "Megha V.",
    "score": 97.47,
    "guildId": "g1"
  },
  {
    "id": "u3740",
    "name": "Noah C.",
    "score": 105.96,
    "guildId": "g6"
  },
  {
    "id": "u3741",
    "name": "Arjun P.",
    "score": 122.98,
    "guildId": "g10"
  },
  {
    "id": "u3742",
    "name": "Ramesh B.",
    "score": 20.84,
    "guildId": "g3"
  },
  {
    "id": "u3743",
    "name": "Siddharth B.",
    "score": 122.08,
    "guildId": "g5"
  },
  {
    "id": "u3744",
    "name": "Rahul K.",
    "score": 143.32,
    "guildId": "g2"
  },
  {
    "id": "u3745",
    "name": "Siddharth S.",
    "score": 54.16,
    "guildId": "g5"
  },
  {
    "id": "u3746",
    "name": "Neha C.",
    "score": 102.46,
    "guildId": "g9"
  },
  {
    "id": "u3747",
    "name": "Hiro C.",
    "score": 128.48,
    "guildId": "g4"
  },
  {
    "id": "u3748",
    "name": "Swati T.",
    "score": 25.43,
    "guildId": "g3"
  },
  {
    "id": "u3749",
    "name": "Wei Y.",
    "score": 37.18,
    "guildId": "g1"
  },
  {
    "id": "u3750",
    "name": "Ishita A.",
    "score": 92.57,
    "guildId": "g6"
  },
  {
    "id": "u3751",
    "name": "Anjali V.",
    "score": 15.81,
    "guildId": "g9"
  },
  {
    "id": "u3752",
    "name": "Wei D.",
    "score": 119.8,
    "guildId": "g2"
  },
  {
    "id": "u3753",
    "name": "Luka S.",
    "score": 94.91,
    "guildId": "g7"
  },
  {
    "id": "u3754",
    "name": "Pooja D.",
    "score": 67.8,
    "guildId": "g4"
  },
  {
    "id": "u3755",
    "name": "Neha W.",
    "score": 67.22,
    "guildId": "g7"
  },
  {
    "id": "u3756",
    "name": "Swati S.",
    "score": 31.63,
    "guildId": "g3"
  },
  {
    "id": "u3757",
    "name": "Anjali D.",
    "score": 66.61,
    "guildId": "g8"
  },
  {
    "id": "u3758",
    "name": "Luka B.",
    "score": 39.08,
    "guildId": "g2"
  },
  {
    "id": "u3759",
    "name": "Amit V.",
    "score": 140.12,
    "guildId": "g5"
  },
  {
    "id": "u3760",
    "name": "Liam C.",
    "score": 51.23,
    "guildId": "g7"
  },
  {
    "id": "u3761",
    "name": "Arjun D.",
    "score": 85.78,
    "guildId": "g10"
  },
  {
    "id": "u3762",
    "name": "Luka T.",
    "score": 145.2,
    "guildId": "g6"
  },
  {
    "id": "u3763",
    "name": "Karan V.",
    "score": 51.83,
    "guildId": "g3"
  },
  {
    "id": "u3764",
    "name": "Ishita A.",
    "score": 44.87,
    "guildId": "g7"
  },
  {
    "id": "u3765",
    "name": "Divya D.",
    "score": 108.8,
    "guildId": "g3"
  },
  {
    "id": "u3766",
    "name": "Manish Z.",
    "score": 140.74,
    "guildId": "g3"
  },
  {
    "id": "u3767",
    "name": "Neha W.",
    "score": 128.37,
    "guildId": "g4"
  },
  {
    "id": "u3768",
    "name": "Swati C.",
    "score": 35.93,
    "guildId": "g8"
  },
  {
    "id": "u3769",
    "name": "Mia M.",
    "score": 104.99,
    "guildId": "g10"
  },
  {
    "id": "u3770",
    "name": "Rohit A.",
    "score": 136.18,
    "guildId": "g8"
  },
  {
    "id": "u3771",
    "name": "Vikram C.",
    "score": 15.84,
    "guildId": "g5"
  },
  {
    "id": "u3772",
    "name": "Luka Y.",
    "score": 103.33,
    "guildId": "g3"
  },
  {
    "id": "u3773",
    "name": "Anjali P.",
    "score": 129.52,
    "guildId": "g1"
  },
  {
    "id": "u3774",
    "name": "Yuki W.",
    "score": 80.79,
    "guildId": "g8"
  },
  {
    "id": "u3775",
    "name": "Ishita M.",
    "score": 58.13,
    "guildId": "g3"
  },
  {
    "id": "u3776",
    "name": "Pooja S.",
    "score": 121.67,
    "guildId": "g1"
  },
  {
    "id": "u3777",
    "name": "Ramesh T.",
    "score": 21.76,
    "guildId": "g7"
  },
  {
    "id": "u3778",
    "name": "Ravi R.",
    "score": 133.51,
    "guildId": "g7"
  },
  {
    "id": "u3779",
    "name": "Siddharth V.",
    "score": 19.16,
    "guildId": "g7"
  },
  {
    "id": "u3780",
    "name": "Vikram Z.",
    "score": 89.37,
    "guildId": "g9"
  },
  {
    "id": "u3781",
    "name": "Wei A.",
    "score": 61.66,
    "guildId": "g7"
  },
  {
    "id": "u3782",
    "name": "Ananya C.",
    "score": 137.6,
    "guildId": "g5"
  },
  {
    "id": "u3783",
    "name": "Ananya D.",
    "score": 64.83,
    "guildId": "g2"
  },
  {
    "id": "u3784",
    "name": "Anjali Z.",
    "score": 54.94,
    "guildId": "g5"
  },
  {
    "id": "u3785",
    "name": "Amit P.",
    "score": 43.85,
    "guildId": "g2"
  },
  {
    "id": "u3786",
    "name": "Swati D.",
    "score": 139.33,
    "guildId": "g2"
  },
  {
    "id": "u3787",
    "name": "Divya Y.",
    "score": 22.07,
    "guildId": "g1"
  },
  {
    "id": "u3788",
    "name": "Karan W.",
    "score": 128.27,
    "guildId": "g9"
  },
  {
    "id": "u3789",
    "name": "Chen Z.",
    "score": 50.55,
    "guildId": "g8"
  },
  {
    "id": "u3790",
    "name": "Anjali T.",
    "score": 29.14,
    "guildId": "g8"
  },
  {
    "id": "u3791",
    "name": "Ishita S.",
    "score": 128.6,
    "guildId": "g1"
  },
  {
    "id": "u3792",
    "name": "Megha D.",
    "score": 76.8,
    "guildId": "g10"
  },
  {
    "id": "u3793",
    "name": "Anjali V.",
    "score": 55.06,
    "guildId": "g9"
  },
  {
    "id": "u3794",
    "name": "Ravi B.",
    "score": 39.21,
    "guildId": "g8"
  },
  {
    "id": "u3795",
    "name": "Akash A.",
    "score": 122.63,
    "guildId": "g7"
  },
  {
    "id": "u3796",
    "name": "Sneha W.",
    "score": 26.89,
    "guildId": "g6"
  },
  {
    "id": "u3797",
    "name": "Ishita R.",
    "score": 69.46,
    "guildId": "g3"
  },
  {
    "id": "u3798",
    "name": "Priya S.",
    "score": 38.09,
    "guildId": "g1"
  },
  {
    "id": "u3799",
    "name": "Neha P.",
    "score": 62.93,
    "guildId": "g4"
  },
  {
    "id": "u3800",
    "name": "Pooja T.",
    "score": 101.62,
    "guildId": "g4"
  },
  {
    "id": "u3801",
    "name": "Rohit R.",
    "score": 44.25,
    "guildId": "g8"
  },
  {
    "id": "u3802",
    "name": "Fatima A.",
    "score": 135.68,
    "guildId": "g5"
  },
  {
    "id": "u3803",
    "name": "Arjun M.",
    "score": 134.81,
    "guildId": "g8"
  },
  {
    "id": "u3804",
    "name": "Karan S.",
    "score": 37.07,
    "guildId": "g2"
  },
  {
    "id": "u3805",
    "name": "Wei W.",
    "score": 53.51,
    "guildId": "g6"
  },
  {
    "id": "u3806",
    "name": "Yuki P.",
    "score": 74.27,
    "guildId": "g2"
  },
  {
    "id": "u3807",
    "name": "Akash D.",
    "score": 55.41,
    "guildId": "g6"
  },
  {
    "id": "u3808",
    "name": "Priya V.",
    "score": 34.16,
    "guildId": "g1"
  },
  {
    "id": "u3809",
    "name": "Megha A.",
    "score": 146.54,
    "guildId": "g3"
  },
  {
    "id": "u3810",
    "name": "Rohit C.",
    "score": 56.67,
    "guildId": "g7"
  },
  {
    "id": "u3811",
    "name": "Ishita K.",
    "score": 130.09,
    "guildId": "g9"
  },
  {
    "id": "u3812",
    "name": "Neha B.",
    "score": 74.55,
    "guildId": "g1"
  },
  {
    "id": "u3813",
    "name": "Arjun W.",
    "score": 138.78,
    "guildId": "g3"
  },
  {
    "id": "u3814",
    "name": "Manish W.",
    "score": 148.68,
    "guildId": "g3"
  },
  {
    "id": "u3815",
    "name": "Megha R.",
    "score": 146.57,
    "guildId": "g3"
  },
  {
    "id": "u3816",
    "name": "Siddharth P.",
    "score": 82.22,
    "guildId": "g2"
  },
  {
    "id": "u3817",
    "name": "Yuki A.",
    "score": 46.95,
    "guildId": "g1"
  },
  {
    "id": "u3818",
    "name": "Akash Z.",
    "score": 79.82,
    "guildId": "g9"
  },
  {
    "id": "u3819",
    "name": "Akash T.",
    "score": 56.55,
    "guildId": "g8"
  },
  {
    "id": "u3820",
    "name": "Kavya T.",
    "score": 85.48,
    "guildId": "g1"
  },
  {
    "id": "u3821",
    "name": "Arjun D.",
    "score": 58.94,
    "guildId": "g2"
  },
  {
    "id": "u3822",
    "name": "Hans D.",
    "score": 43.3,
    "guildId": "g4"
  },
  {
    "id": "u3823",
    "name": "Ramesh Z.",
    "score": 49.33,
    "guildId": "g4"
  },
  {
    "id": "u3824",
    "name": "Rahul W.",
    "score": 109.62,
    "guildId": "g10"
  },
  {
    "id": "u3825",
    "name": "Ravi S.",
    "score": 123.78,
    "guildId": "g10"
  },
  {
    "id": "u3826",
    "name": "Ravi C.",
    "score": 65.36,
    "guildId": "g7"
  },
  {
    "id": "u3827",
    "name": "Anjali A.",
    "score": 103.62,
    "guildId": "g10"
  },
  {
    "id": "u3828",
    "name": "Akash B.",
    "score": 94.05,
    "guildId": "g7"
  },
  {
    "id": "u3829",
    "name": "Anjali P.",
    "score": 102.53,
    "guildId": "g7"
  },
  {
    "id": "u3830",
    "name": "Fatima K.",
    "score": 78.64,
    "guildId": "g10"
  },
  {
    "id": "u3831",
    "name": "Manish P.",
    "score": 59.6,
    "guildId": "g6"
  },
  {
    "id": "u3832",
    "name": "Neha W.",
    "score": 43.59,
    "guildId": "g5"
  },
  {
    "id": "u3833",
    "name": "Suresh D.",
    "score": 66.81,
    "guildId": "g4"
  },
  {
    "id": "u3834",
    "name": "Neha C.",
    "score": 18.79,
    "guildId": "g7"
  },
  {
    "id": "u3835",
    "name": "Rahul K.",
    "score": 43.05,
    "guildId": "g8"
  },
  {
    "id": "u3836",
    "name": "Olivia R.",
    "score": 72.51,
    "guildId": "g7"
  },
  {
    "id": "u3837",
    "name": "Neha Z.",
    "score": 114.54,
    "guildId": "g7"
  },
  {
    "id": "u3838",
    "name": "Ravi V.",
    "score": 82.37,
    "guildId": "g2"
  },
  {
    "id": "u3839",
    "name": "Priya Z.",
    "score": 13.7,
    "guildId": "g8"
  },
  {
    "id": "u3840",
    "name": "Arjun Z.",
    "score": 36.74,
    "guildId": "g10"
  },
  {
    "id": "u3841",
    "name": "Rohit S.",
    "score": 135.53,
    "guildId": "g8"
  },
  {
    "id": "u3842",
    "name": "Ravi B.",
    "score": 110.8,
    "guildId": "g7"
  },
  {
    "id": "u3843",
    "name": "Akash V.",
    "score": 110.41,
    "guildId": "g10"
  },
  {
    "id": "u3844",
    "name": "Anjali C.",
    "score": 13.42,
    "guildId": "g5"
  },
  {
    "id": "u3845",
    "name": "Ramesh Y.",
    "score": 113.37,
    "guildId": "g8"
  },
  {
    "id": "u3846",
    "name": "Ananya Y.",
    "score": 147.99,
    "guildId": "g5"
  },
  {
    "id": "u3847",
    "name": "Isabella C.",
    "score": 90.47,
    "guildId": "g5"
  },
  {
    "id": "u3848",
    "name": "Ishita Z.",
    "score": 56.31,
    "guildId": "g6"
  },
  {
    "id": "u3849",
    "name": "Anjali S.",
    "score": 86.61,
    "guildId": "g1"
  },
  {
    "id": "u3850",
    "name": "Hiro M.",
    "score": 34,
    "guildId": "g4"
  },
  {
    "id": "u3851",
    "name": "Aditya M.",
    "score": 71.63,
    "guildId": "g6"
  },
  {
    "id": "u3852",
    "name": "Manish D.",
    "score": 49.88,
    "guildId": "g2"
  },
  {
    "id": "u3853",
    "name": "Ramesh K.",
    "score": 34.72,
    "guildId": "g2"
  },
  {
    "id": "u3854",
    "name": "Manish P.",
    "score": 70.45,
    "guildId": "g10"
  },
  {
    "id": "u3855",
    "name": "Megha R.",
    "score": 90.62,
    "guildId": "g5"
  },
  {
    "id": "u3856",
    "name": "Sneha P.",
    "score": 87.78,
    "guildId": "g2"
  },
  {
    "id": "u3857",
    "name": "Priya V.",
    "score": 43.98,
    "guildId": "g3"
  },
  {
    "id": "u3858",
    "name": "Akash K.",
    "score": 22.8,
    "guildId": "g3"
  },
  {
    "id": "u3859",
    "name": "Rahul P.",
    "score": 119.9,
    "guildId": "g8"
  },
  {
    "id": "u3860",
    "name": "Siddharth T.",
    "score": 140.23,
    "guildId": "g8"
  },
  {
    "id": "u3861",
    "name": "Neha T.",
    "score": 66.92,
    "guildId": "g5"
  },
  {
    "id": "u3862",
    "name": "Divya V.",
    "score": 98.36,
    "guildId": "g1"
  },
  {
    "id": "u3863",
    "name": "Akash Y.",
    "score": 120.09,
    "guildId": "g3"
  },
  {
    "id": "u3864",
    "name": "Mateo P.",
    "score": 25,
    "guildId": "g7"
  },
  {
    "id": "u3865",
    "name": "Arjun C.",
    "score": 136.29,
    "guildId": "g10"
  },
  {
    "id": "u3866",
    "name": "Priya K.",
    "score": 101.89,
    "guildId": "g8"
  },
  {
    "id": "u3867",
    "name": "Rahul C.",
    "score": 23.13,
    "guildId": "g10"
  },
  {
    "id": "u3868",
    "name": "Greta R.",
    "score": 101.11,
    "guildId": "g5"
  },
  {
    "id": "u3869",
    "name": "Aditya S.",
    "score": 85.76,
    "guildId": "g6"
  },
  {
    "id": "u3870",
    "name": "Sneha W.",
    "score": 79.47,
    "guildId": "g9"
  },
  {
    "id": "u3871",
    "name": "Vikram K.",
    "score": 103.53,
    "guildId": "g10"
  },
  {
    "id": "u3872",
    "name": "Megha R.",
    "score": 73.18,
    "guildId": "g1"
  },
  {
    "id": "u3873",
    "name": "Neha A.",
    "score": 69.86,
    "guildId": "g3"
  },
  {
    "id": "u3874",
    "name": "Amit P.",
    "score": 134.82,
    "guildId": "g9"
  },
  {
    "id": "u3875",
    "name": "Arjun Y.",
    "score": 88.89,
    "guildId": "g8"
  },
  {
    "id": "u3876",
    "name": "Sneha D.",
    "score": 80.88,
    "guildId": "g10"
  },
  {
    "id": "u3877",
    "name": "Akash Y.",
    "score": 90.48,
    "guildId": "g9"
  },
  {
    "id": "u3878",
    "name": "Manish W.",
    "score": 92.14,
    "guildId": "g3"
  },
  {
    "id": "u3879",
    "name": "Pooja C.",
    "score": 31.07,
    "guildId": "g10"
  },
  {
    "id": "u3880",
    "name": "Megha P.",
    "score": 39.85,
    "guildId": "g8"
  },
  {
    "id": "u3881",
    "name": "Divya D.",
    "score": 88.06,
    "guildId": "g9"
  },
  {
    "id": "u3882",
    "name": "Rohit P.",
    "score": 114,
    "guildId": "g1"
  },
  {
    "id": "u3883",
    "name": "Megha S.",
    "score": 97.04,
    "guildId": "g5"
  },
  {
    "id": "u3884",
    "name": "Isabella T.",
    "score": 129.28,
    "guildId": "g7"
  },
  {
    "id": "u3885",
    "name": "Ramesh B.",
    "score": 59.14,
    "guildId": "g7"
  },
  {
    "id": "u3886",
    "name": "Rahul K.",
    "score": 16.02,
    "guildId": "g2"
  },
  {
    "id": "u3887",
    "name": "Mateo P.",
    "score": 102.39,
    "guildId": "g4"
  },
  {
    "id": "u3888",
    "name": "Karan R.",
    "score": 56.39,
    "guildId": "g2"
  },
  {
    "id": "u3889",
    "name": "Mia V.",
    "score": 90.27,
    "guildId": "g5"
  },
  {
    "id": "u3890",
    "name": "Ramesh W.",
    "score": 74.18,
    "guildId": "g5"
  },
  {
    "id": "u3891",
    "name": "Noah P.",
    "score": 100.09,
    "guildId": "g10"
  },
  {
    "id": "u3892",
    "name": "Rohit T.",
    "score": 58.42,
    "guildId": "g7"
  },
  {
    "id": "u3893",
    "name": "Amit Z.",
    "score": 84.39,
    "guildId": "g4"
  },
  {
    "id": "u3894",
    "name": "Sneha C.",
    "score": 92.5,
    "guildId": "g2"
  },
  {
    "id": "u3895",
    "name": "Liam M.",
    "score": 134.55,
    "guildId": "g5"
  },
  {
    "id": "u3896",
    "name": "Sneha D.",
    "score": 76.97,
    "guildId": "g4"
  },
  {
    "id": "u3897",
    "name": "Karan A.",
    "score": 144.85,
    "guildId": "g3"
  },
  {
    "id": "u3898",
    "name": "Arjun V.",
    "score": 43.24,
    "guildId": "g3"
  },
  {
    "id": "u3899",
    "name": "John K.",
    "score": 86.67,
    "guildId": "g8"
  },
  {
    "id": "u3900",
    "name": "Neha K.",
    "score": 79.9,
    "guildId": "g4"
  },
  {
    "id": "u3901",
    "name": "Amit Y.",
    "score": 41.39,
    "guildId": "g2"
  },
  {
    "id": "u3902",
    "name": "Pooja Z.",
    "score": 73.87,
    "guildId": "g7"
  },
  {
    "id": "u3903",
    "name": "Mateo W.",
    "score": 36.24,
    "guildId": "g9"
  },
  {
    "id": "u3904",
    "name": "Manish P.",
    "score": 29.77,
    "guildId": "g2"
  },
  {
    "id": "u3905",
    "name": "Yuki Z.",
    "score": 120.99,
    "guildId": "g10"
  },
  {
    "id": "u3906",
    "name": "Neha C.",
    "score": 83.59,
    "guildId": "g8"
  },
  {
    "id": "u3907",
    "name": "Anjali S.",
    "score": 104.16,
    "guildId": "g10"
  },
  {
    "id": "u3908",
    "name": "Greta T.",
    "score": 86.5,
    "guildId": "g8"
  },
  {
    "id": "u3909",
    "name": "Ramesh V.",
    "score": 18.64,
    "guildId": "g5"
  },
  {
    "id": "u3910",
    "name": "Ishita M.",
    "score": 40.39,
    "guildId": "g7"
  },
  {
    "id": "u3911",
    "name": "Ravi W.",
    "score": 128.2,
    "guildId": "g4"
  },
  {
    "id": "u3912",
    "name": "Megha B.",
    "score": 60.91,
    "guildId": "g7"
  },
  {
    "id": "u3913",
    "name": "Ramesh C.",
    "score": 80.24,
    "guildId": "g4"
  },
  {
    "id": "u3914",
    "name": "Rohit M.",
    "score": 148.05,
    "guildId": "g1"
  },
  {
    "id": "u3915",
    "name": "Kavya Z.",
    "score": 124.22,
    "guildId": "g1"
  },
  {
    "id": "u3916",
    "name": "Megha Y.",
    "score": 49.56,
    "guildId": "g1"
  },
  {
    "id": "u3917",
    "name": "Suresh M.",
    "score": 105.33,
    "guildId": "g6"
  },
  {
    "id": "u3918",
    "name": "Ravi A.",
    "score": 68.32,
    "guildId": "g4"
  },
  {
    "id": "u3919",
    "name": "Ali Z.",
    "score": 149,
    "guildId": "g2"
  },
  {
    "id": "u3920",
    "name": "Suresh B.",
    "score": 131.48,
    "guildId": "g9"
  },
  {
    "id": "u3921",
    "name": "Ravi W.",
    "score": 114.97,
    "guildId": "g1"
  },
  {
    "id": "u3922",
    "name": "Ramesh R.",
    "score": 138.91,
    "guildId": "g10"
  },
  {
    "id": "u3923",
    "name": "Priya W.",
    "score": 69.38,
    "guildId": "g7"
  },
  {
    "id": "u3924",
    "name": "Ishita Y.",
    "score": 48.97,
    "guildId": "g9"
  },
  {
    "id": "u3925",
    "name": "Karan M.",
    "score": 145.32,
    "guildId": "g1"
  },
  {
    "id": "u3926",
    "name": "Pooja Z.",
    "score": 85.77,
    "guildId": "g5"
  },
  {
    "id": "u3927",
    "name": "Hans P.",
    "score": 99.09,
    "guildId": "g7"
  },
  {
    "id": "u3928",
    "name": "Sophia W.",
    "score": 25.9,
    "guildId": "g3"
  },
  {
    "id": "u3929",
    "name": "Ramesh Z.",
    "score": 102.52,
    "guildId": "g2"
  },
  {
    "id": "u3930",
    "name": "Liam C.",
    "score": 147.06,
    "guildId": "g5"
  },
  {
    "id": "u3931",
    "name": "Luka W.",
    "score": 92.38,
    "guildId": "g8"
  },
  {
    "id": "u3932",
    "name": "Ananya V.",
    "score": 91,
    "guildId": "g3"
  },
  {
    "id": "u3933",
    "name": "Anjali B.",
    "score": 37.24,
    "guildId": "g2"
  },
  {
    "id": "u3934",
    "name": "Luka T.",
    "score": 57.71,
    "guildId": "g1"
  },
  {
    "id": "u3935",
    "name": "Ravi W.",
    "score": 70.69,
    "guildId": "g5"
  },
  {
    "id": "u3936",
    "name": "Ravi R.",
    "score": 10.85,
    "guildId": "g1"
  },
  {
    "id": "u3937",
    "name": "Aditya A.",
    "score": 130.71,
    "guildId": "g3"
  },
  {
    "id": "u3938",
    "name": "Amit T.",
    "score": 138.72,
    "guildId": "g7"
  },
  {
    "id": "u3939",
    "name": "Arjun T.",
    "score": 108.71,
    "guildId": "g10"
  },
  {
    "id": "u3940",
    "name": "Aditya Z.",
    "score": 113.32,
    "guildId": "g5"
  },
  {
    "id": "u3941",
    "name": "Karan V.",
    "score": 61.21,
    "guildId": "g9"
  },
  {
    "id": "u3942",
    "name": "Divya K.",
    "score": 85.08,
    "guildId": "g4"
  },
  {
    "id": "u3943",
    "name": "Arjun Y.",
    "score": 50.72,
    "guildId": "g5"
  },
  {
    "id": "u3944",
    "name": "Luka R.",
    "score": 110.54,
    "guildId": "g4"
  },
  {
    "id": "u3945",
    "name": "Divya W.",
    "score": 94.18,
    "guildId": "g1"
  },
  {
    "id": "u3946",
    "name": "Rohit Z.",
    "score": 37.7,
    "guildId": "g8"
  },
  {
    "id": "u3947",
    "name": "Kavya M.",
    "score": 86.76,
    "guildId": "g8"
  },
  {
    "id": "u3948",
    "name": "Suresh V.",
    "score": 28.73,
    "guildId": "g5"
  },
  {
    "id": "u3949",
    "name": "Luka W.",
    "score": 65.61,
    "guildId": "g7"
  },
  {
    "id": "u3950",
    "name": "Mateo R.",
    "score": 45.36,
    "guildId": "g9"
  },
  {
    "id": "u3951",
    "name": "Amit V.",
    "score": 100.4,
    "guildId": "g10"
  },
  {
    "id": "u3952",
    "name": "Neha S.",
    "score": 99.56,
    "guildId": "g6"
  },
  {
    "id": "u3953",
    "name": "Ali Z.",
    "score": 54.23,
    "guildId": "g3"
  },
  {
    "id": "u3954",
    "name": "Rohit Z.",
    "score": 25.11,
    "guildId": "g3"
  },
  {
    "id": "u3955",
    "name": "Sneha V.",
    "score": 58.54,
    "guildId": "g1"
  },
  {
    "id": "u3956",
    "name": "Anjali T.",
    "score": 92.34,
    "guildId": "g5"
  },
  {
    "id": "u3957",
    "name": "Hiro Z.",
    "score": 86.28,
    "guildId": "g5"
  },
  {
    "id": "u3958",
    "name": "Vikram Y.",
    "score": 46.53,
    "guildId": "g9"
  },
  {
    "id": "u3959",
    "name": "Manish M.",
    "score": 100.94,
    "guildId": "g10"
  },
  {
    "id": "u3960",
    "name": "Hiro A.",
    "score": 138.72,
    "guildId": "g7"
  },
  {
    "id": "u3961",
    "name": "Rahul V.",
    "score": 102.54,
    "guildId": "g10"
  },
  {
    "id": "u3962",
    "name": "Aditya R.",
    "score": 141.31,
    "guildId": "g5"
  },
  {
    "id": "u3963",
    "name": "Ramesh S.",
    "score": 69.48,
    "guildId": "g9"
  },
  {
    "id": "u3964",
    "name": "Ravi A.",
    "score": 73.59,
    "guildId": "g9"
  },
  {
    "id": "u3965",
    "name": "Suresh R.",
    "score": 92.17,
    "guildId": "g9"
  },
  {
    "id": "u3966",
    "name": "Ishita B.",
    "score": 101.28,
    "guildId": "g6"
  },
  {
    "id": "u3967",
    "name": "Priya W.",
    "score": 146.95,
    "guildId": "g6"
  },
  {
    "id": "u3968",
    "name": "Anjali K.",
    "score": 88.61,
    "guildId": "g9"
  },
  {
    "id": "u3969",
    "name": "Rahul P.",
    "score": 67.46,
    "guildId": "g8"
  },
  {
    "id": "u3970",
    "name": "Karan M.",
    "score": 106.46,
    "guildId": "g6"
  },
  {
    "id": "u3971",
    "name": "Isabella P.",
    "score": 122.35,
    "guildId": "g5"
  },
  {
    "id": "u3972",
    "name": "Ali M.",
    "score": 43.72,
    "guildId": "g5"
  },
  {
    "id": "u3973",
    "name": "Siddharth K.",
    "score": 103.79,
    "guildId": "g7"
  },
  {
    "id": "u3974",
    "name": "Rahul S.",
    "score": 113.47,
    "guildId": "g7"
  },
  {
    "id": "u3975",
    "name": "Liam P.",
    "score": 93.25,
    "guildId": "g1"
  },
  {
    "id": "u3976",
    "name": "Megha B.",
    "score": 79.08,
    "guildId": "g1"
  },
  {
    "id": "u3977",
    "name": "Ishita Y.",
    "score": 72.39,
    "guildId": "g8"
  },
  {
    "id": "u3978",
    "name": "Ali Z.",
    "score": 63.03,
    "guildId": "g9"
  },
  {
    "id": "u3979",
    "name": "Ramesh D.",
    "score": 139.2,
    "guildId": "g7"
  },
  {
    "id": "u3980",
    "name": "Megha B.",
    "score": 43.63,
    "guildId": "g1"
  },
  {
    "id": "u3981",
    "name": "Rahul D.",
    "score": 95.11,
    "guildId": "g4"
  },
  {
    "id": "u3982",
    "name": "Siddharth B.",
    "score": 147.53,
    "guildId": "g1"
  },
  {
    "id": "u3983",
    "name": "Ananya Z.",
    "score": 94.08,
    "guildId": "g10"
  },
  {
    "id": "u3984",
    "name": "Aditya A.",
    "score": 71.74,
    "guildId": "g1"
  },
  {
    "id": "u3985",
    "name": "Ravi V.",
    "score": 75.43,
    "guildId": "g7"
  },
  {
    "id": "u3986",
    "name": "Sneha K.",
    "score": 90.32,
    "guildId": "g10"
  },
  {
    "id": "u3987",
    "name": "Mateo C.",
    "score": 51.19,
    "guildId": "g4"
  },
  {
    "id": "u3988",
    "name": "John K.",
    "score": 74.5,
    "guildId": "g1"
  },
  {
    "id": "u3989",
    "name": "Kavya Z.",
    "score": 67.6,
    "guildId": "g4"
  },
  {
    "id": "u3990",
    "name": "Kavya C.",
    "score": 101.29,
    "guildId": "g5"
  },
  {
    "id": "u3991",
    "name": "Siddharth Y.",
    "score": 93.36,
    "guildId": "g1"
  },
  {
    "id": "u3992",
    "name": "Noah Y.",
    "score": 73.14,
    "guildId": "g7"
  },
  {
    "id": "u3993",
    "name": "Greta W.",
    "score": 101.9,
    "guildId": "g9"
  },
  {
    "id": "u3994",
    "name": "Suresh A.",
    "score": 14.8,
    "guildId": "g3"
  },
  {
    "id": "u3995",
    "name": "Arjun M.",
    "score": 12.89,
    "guildId": "g5"
  },
  {
    "id": "u3996",
    "name": "Karan Z.",
    "score": 124.15,
    "guildId": "g10"
  },
  {
    "id": "u3997",
    "name": "Vikram Z.",
    "score": 89.11,
    "guildId": "g9"
  },
  {
    "id": "u3998",
    "name": "Anjali R.",
    "score": 68.59,
    "guildId": "g10"
  },
  {
    "id": "u3999",
    "name": "Ravi T.",
    "score": 129.7,
    "guildId": "g2"
  },
  {
    "id": "u4000",
    "name": "Pooja C.",
    "score": 112.68,
    "guildId": "g1"
  },
  {
    "id": "u4001",
    "name": "Priya C.",
    "score": 18.55,
    "guildId": "g4"
  },
  {
    "id": "u4002",
    "name": "Aditya S.",
    "score": 84.71,
    "guildId": "g6"
  },
  {
    "id": "u4003",
    "name": "Ramesh C.",
    "score": 48.31,
    "guildId": "g4"
  },
  {
    "id": "u4004",
    "name": "Vikram V.",
    "score": 125.91,
    "guildId": "g3"
  },
  {
    "id": "u4005",
    "name": "Hiro K.",
    "score": 141.65,
    "guildId": "g5"
  },
  {
    "id": "u4006",
    "name": "Hiro D.",
    "score": 136.85,
    "guildId": "g5"
  },
  {
    "id": "u4007",
    "name": "Siddharth Y.",
    "score": 51.48,
    "guildId": "g4"
  },
  {
    "id": "u4008",
    "name": "Swati Z.",
    "score": 48.22,
    "guildId": "g1"
  },
  {
    "id": "u4009",
    "name": "Megha Z.",
    "score": 44.26,
    "guildId": "g3"
  },
  {
    "id": "u4010",
    "name": "Amit A.",
    "score": 134.22,
    "guildId": "g5"
  },
  {
    "id": "u4011",
    "name": "Siddharth Z.",
    "score": 118.33,
    "guildId": "g1"
  },
  {
    "id": "u4012",
    "name": "Ananya M.",
    "score": 72.49,
    "guildId": "g9"
  },
  {
    "id": "u4013",
    "name": "Rohit T.",
    "score": 97.79,
    "guildId": "g5"
  },
  {
    "id": "u4014",
    "name": "Suresh M.",
    "score": 69.29,
    "guildId": "g4"
  },
  {
    "id": "u4015",
    "name": "Pooja Y.",
    "score": 148.33,
    "guildId": "g3"
  },
  {
    "id": "u4016",
    "name": "Greta S.",
    "score": 17.67,
    "guildId": "g10"
  },
  {
    "id": "u4017",
    "name": "Ishita A.",
    "score": 58.08,
    "guildId": "g6"
  },
  {
    "id": "u4018",
    "name": "Suresh V.",
    "score": 144.97,
    "guildId": "g4"
  },
  {
    "id": "u4019",
    "name": "Arjun Z.",
    "score": 20.95,
    "guildId": "g9"
  },
  {
    "id": "u4020",
    "name": "Swati D.",
    "score": 100.42,
    "guildId": "g8"
  },
  {
    "id": "u4021",
    "name": "Pooja K.",
    "score": 16.83,
    "guildId": "g4"
  },
  {
    "id": "u4022",
    "name": "Swati T.",
    "score": 97.25,
    "guildId": "g4"
  },
  {
    "id": "u4023",
    "name": "Megha R.",
    "score": 40.32,
    "guildId": "g6"
  },
  {
    "id": "u4024",
    "name": "Pooja K.",
    "score": 23,
    "guildId": "g7"
  },
  {
    "id": "u4025",
    "name": "Divya M.",
    "score": 24.73,
    "guildId": "g3"
  },
  {
    "id": "u4026",
    "name": "Mateo V.",
    "score": 59.34,
    "guildId": "g7"
  },
  {
    "id": "u4027",
    "name": "Suresh T.",
    "score": 110.85,
    "guildId": "g9"
  },
  {
    "id": "u4028",
    "name": "Akash A.",
    "score": 67.89,
    "guildId": "g4"
  },
  {
    "id": "u4029",
    "name": "Olivia C.",
    "score": 32.85,
    "guildId": "g1"
  },
  {
    "id": "u4030",
    "name": "Mia Y.",
    "score": 127.6,
    "guildId": "g7"
  },
  {
    "id": "u4031",
    "name": "Divya C.",
    "score": 132.74,
    "guildId": "g8"
  },
  {
    "id": "u4032",
    "name": "Rohit P.",
    "score": 73.63,
    "guildId": "g8"
  },
  {
    "id": "u4033",
    "name": "Aditya P.",
    "score": 95.34,
    "guildId": "g2"
  },
  {
    "id": "u4034",
    "name": "Siddharth D.",
    "score": 97.09,
    "guildId": "g3"
  },
  {
    "id": "u4035",
    "name": "Luka P.",
    "score": 38.23,
    "guildId": "g1"
  },
  {
    "id": "u4036",
    "name": "Sneha C.",
    "score": 36.67,
    "guildId": "g2"
  },
  {
    "id": "u4037",
    "name": "Sneha A.",
    "score": 20.01,
    "guildId": "g2"
  },
  {
    "id": "u4038",
    "name": "Chen R.",
    "score": 64.1,
    "guildId": "g8"
  },
  {
    "id": "u4039",
    "name": "Manish T.",
    "score": 10.75,
    "guildId": "g6"
  },
  {
    "id": "u4040",
    "name": "Anjali C.",
    "score": 128.64,
    "guildId": "g7"
  },
  {
    "id": "u4041",
    "name": "Akash A.",
    "score": 110.04,
    "guildId": "g4"
  },
  {
    "id": "u4042",
    "name": "Rohit R.",
    "score": 50.25,
    "guildId": "g2"
  },
  {
    "id": "u4043",
    "name": "Akash P.",
    "score": 20.77,
    "guildId": "g8"
  },
  {
    "id": "u4044",
    "name": "Fatima K.",
    "score": 120.99,
    "guildId": "g10"
  },
  {
    "id": "u4045",
    "name": "Sophia V.",
    "score": 64.88,
    "guildId": "g8"
  },
  {
    "id": "u4046",
    "name": "Divya A.",
    "score": 70.87,
    "guildId": "g2"
  },
  {
    "id": "u4047",
    "name": "Siddharth A.",
    "score": 67.04,
    "guildId": "g4"
  },
  {
    "id": "u4048",
    "name": "Aditya A.",
    "score": 117.81,
    "guildId": "g4"
  },
  {
    "id": "u4049",
    "name": "Akash K.",
    "score": 68.77,
    "guildId": "g10"
  },
  {
    "id": "u4050",
    "name": "Siddharth S.",
    "score": 66.55,
    "guildId": "g7"
  },
  {
    "id": "u4051",
    "name": "Ananya B.",
    "score": 23.85,
    "guildId": "g5"
  },
  {
    "id": "u4052",
    "name": "Ananya Y.",
    "score": 59.28,
    "guildId": "g9"
  },
  {
    "id": "u4053",
    "name": "Akash T.",
    "score": 76.63,
    "guildId": "g6"
  },
  {
    "id": "u4054",
    "name": "Rahul B.",
    "score": 117.99,
    "guildId": "g1"
  },
  {
    "id": "u4055",
    "name": "Divya S.",
    "score": 84.63,
    "guildId": "g10"
  },
  {
    "id": "u4056",
    "name": "Ishita T.",
    "score": 131.62,
    "guildId": "g9"
  },
  {
    "id": "u4057",
    "name": "Aditya V.",
    "score": 32.63,
    "guildId": "g1"
  },
  {
    "id": "u4058",
    "name": "Ramesh T.",
    "score": 136.92,
    "guildId": "g7"
  },
  {
    "id": "u4059",
    "name": "Noah A.",
    "score": 34.25,
    "guildId": "g7"
  },
  {
    "id": "u4060",
    "name": "Suresh Z.",
    "score": 42.94,
    "guildId": "g2"
  },
  {
    "id": "u4061",
    "name": "Ananya S.",
    "score": 108.3,
    "guildId": "g5"
  },
  {
    "id": "u4062",
    "name": "Hans Z.",
    "score": 102,
    "guildId": "g4"
  },
  {
    "id": "u4063",
    "name": "Rohit P.",
    "score": 22.7,
    "guildId": "g6"
  },
  {
    "id": "u4064",
    "name": "Priya Z.",
    "score": 105.25,
    "guildId": "g6"
  },
  {
    "id": "u4065",
    "name": "Kavya S.",
    "score": 143.04,
    "guildId": "g3"
  },
  {
    "id": "u4066",
    "name": "Amit S.",
    "score": 66.61,
    "guildId": "g7"
  },
  {
    "id": "u4067",
    "name": "Ravi B.",
    "score": 46.81,
    "guildId": "g1"
  },
  {
    "id": "u4068",
    "name": "Ishita Y.",
    "score": 101.55,
    "guildId": "g5"
  },
  {
    "id": "u4069",
    "name": "Amit M.",
    "score": 45.06,
    "guildId": "g9"
  },
  {
    "id": "u4070",
    "name": "Aditya D.",
    "score": 124.67,
    "guildId": "g3"
  },
  {
    "id": "u4071",
    "name": "Wei B.",
    "score": 57.9,
    "guildId": "g1"
  },
  {
    "id": "u4072",
    "name": "Rahul C.",
    "score": 120.25,
    "guildId": "g5"
  },
  {
    "id": "u4073",
    "name": "Amit Z.",
    "score": 75,
    "guildId": "g4"
  },
  {
    "id": "u4074",
    "name": "Aditya W.",
    "score": 80.03,
    "guildId": "g9"
  },
  {
    "id": "u4075",
    "name": "Swati A.",
    "score": 39.37,
    "guildId": "g10"
  },
  {
    "id": "u4076",
    "name": "Ishita M.",
    "score": 124.12,
    "guildId": "g9"
  },
  {
    "id": "u4077",
    "name": "Ananya Y.",
    "score": 12.19,
    "guildId": "g1"
  },
  {
    "id": "u4078",
    "name": "Swati K.",
    "score": 54.81,
    "guildId": "g1"
  },
  {
    "id": "u4079",
    "name": "Olivia Y.",
    "score": 46.28,
    "guildId": "g4"
  },
  {
    "id": "u4080",
    "name": "Suresh S.",
    "score": 19.93,
    "guildId": "g8"
  },
  {
    "id": "u4081",
    "name": "Chen V.",
    "score": 120.71,
    "guildId": "g5"
  },
  {
    "id": "u4082",
    "name": "Pooja W.",
    "score": 39.2,
    "guildId": "g4"
  },
  {
    "id": "u4083",
    "name": "Kavya K.",
    "score": 50.73,
    "guildId": "g4"
  },
  {
    "id": "u4084",
    "name": "Ramesh K.",
    "score": 139.66,
    "guildId": "g3"
  },
  {
    "id": "u4085",
    "name": "Sophia Z.",
    "score": 120.5,
    "guildId": "g8"
  },
  {
    "id": "u4086",
    "name": "Aditya C.",
    "score": 104.36,
    "guildId": "g8"
  },
  {
    "id": "u4087",
    "name": "Akash Y.",
    "score": 69.81,
    "guildId": "g6"
  },
  {
    "id": "u4088",
    "name": "Rahul B.",
    "score": 126.77,
    "guildId": "g6"
  },
  {
    "id": "u4089",
    "name": "Rohit S.",
    "score": 125.19,
    "guildId": "g4"
  },
  {
    "id": "u4090",
    "name": "Liam D.",
    "score": 113.6,
    "guildId": "g7"
  },
  {
    "id": "u4091",
    "name": "Yuki Y.",
    "score": 19.88,
    "guildId": "g10"
  },
  {
    "id": "u4092",
    "name": "Isabella M.",
    "score": 44.84,
    "guildId": "g2"
  },
  {
    "id": "u4093",
    "name": "Siddharth A.",
    "score": 50.55,
    "guildId": "g8"
  },
  {
    "id": "u4094",
    "name": "Pooja V.",
    "score": 98.99,
    "guildId": "g8"
  },
  {
    "id": "u4095",
    "name": "Pooja Z.",
    "score": 69.07,
    "guildId": "g2"
  },
  {
    "id": "u4096",
    "name": "Ishita T.",
    "score": 109.92,
    "guildId": "g8"
  },
  {
    "id": "u4097",
    "name": "Suresh Y.",
    "score": 111.43,
    "guildId": "g3"
  },
  {
    "id": "u4098",
    "name": "Akash M.",
    "score": 42.78,
    "guildId": "g5"
  },
  {
    "id": "u4099",
    "name": "Akash T.",
    "score": 100.38,
    "guildId": "g2"
  },
  {
    "id": "u4100",
    "name": "Amit D.",
    "score": 143.01,
    "guildId": "g2"
  },
  {
    "id": "u4101",
    "name": "Aditya Z.",
    "score": 110.41,
    "guildId": "g10"
  },
  {
    "id": "u4102",
    "name": "Akash C.",
    "score": 64.03,
    "guildId": "g2"
  },
  {
    "id": "u4103",
    "name": "Ravi C.",
    "score": 12.42,
    "guildId": "g10"
  },
  {
    "id": "u4104",
    "name": "Anjali V.",
    "score": 16.82,
    "guildId": "g4"
  },
  {
    "id": "u4105",
    "name": "Divya D.",
    "score": 73.09,
    "guildId": "g9"
  },
  {
    "id": "u4106",
    "name": "Karan D.",
    "score": 137.77,
    "guildId": "g2"
  },
  {
    "id": "u4107",
    "name": "Suresh P.",
    "score": 24.66,
    "guildId": "g5"
  },
  {
    "id": "u4108",
    "name": "Anjali B.",
    "score": 83.07,
    "guildId": "g1"
  },
  {
    "id": "u4109",
    "name": "Olivia S.",
    "score": 93.13,
    "guildId": "g8"
  },
  {
    "id": "u4110",
    "name": "Arjun A.",
    "score": 30.77,
    "guildId": "g8"
  },
  {
    "id": "u4111",
    "name": "Siddharth Z.",
    "score": 130.49,
    "guildId": "g5"
  },
  {
    "id": "u4112",
    "name": "Megha D.",
    "score": 49.56,
    "guildId": "g6"
  },
  {
    "id": "u4113",
    "name": "Rohit W.",
    "score": 86.93,
    "guildId": "g2"
  },
  {
    "id": "u4114",
    "name": "Ishita Z.",
    "score": 145.33,
    "guildId": "g9"
  },
  {
    "id": "u4115",
    "name": "Sneha D.",
    "score": 95.29,
    "guildId": "g6"
  },
  {
    "id": "u4116",
    "name": "Sophia C.",
    "score": 13.71,
    "guildId": "g6"
  },
  {
    "id": "u4117",
    "name": "Neha M.",
    "score": 40.72,
    "guildId": "g6"
  },
  {
    "id": "u4118",
    "name": "Anjali C.",
    "score": 52.8,
    "guildId": "g4"
  },
  {
    "id": "u4119",
    "name": "Akash D.",
    "score": 29.65,
    "guildId": "g1"
  },
  {
    "id": "u4120",
    "name": "Rohit A.",
    "score": 60.65,
    "guildId": "g8"
  },
  {
    "id": "u4121",
    "name": "Siddharth K.",
    "score": 95.17,
    "guildId": "g7"
  },
  {
    "id": "u4122",
    "name": "Rahul Z.",
    "score": 76.88,
    "guildId": "g6"
  },
  {
    "id": "u4123",
    "name": "Megha T.",
    "score": 140.3,
    "guildId": "g10"
  },
  {
    "id": "u4124",
    "name": "Aditya A.",
    "score": 107.86,
    "guildId": "g7"
  },
  {
    "id": "u4125",
    "name": "Ishita V.",
    "score": 141.95,
    "guildId": "g1"
  },
  {
    "id": "u4126",
    "name": "Rohit Y.",
    "score": 88.04,
    "guildId": "g1"
  },
  {
    "id": "u4127",
    "name": "Hiro K.",
    "score": 33.72,
    "guildId": "g2"
  },
  {
    "id": "u4128",
    "name": "Pooja Y.",
    "score": 82.15,
    "guildId": "g9"
  },
  {
    "id": "u4129",
    "name": "Ananya P.",
    "score": 145.21,
    "guildId": "g4"
  },
  {
    "id": "u4130",
    "name": "Karan Y.",
    "score": 146.28,
    "guildId": "g2"
  },
  {
    "id": "u4131",
    "name": "Fatima Z.",
    "score": 62.09,
    "guildId": "g5"
  },
  {
    "id": "u4132",
    "name": "John C.",
    "score": 86.55,
    "guildId": "g8"
  },
  {
    "id": "u4133",
    "name": "Sneha B.",
    "score": 57.32,
    "guildId": "g6"
  },
  {
    "id": "u4134",
    "name": "Isabella S.",
    "score": 52.91,
    "guildId": "g9"
  },
  {
    "id": "u4135",
    "name": "Aditya D.",
    "score": 102.4,
    "guildId": "g10"
  },
  {
    "id": "u4136",
    "name": "Rahul K.",
    "score": 110.31,
    "guildId": "g7"
  },
  {
    "id": "u4137",
    "name": "Vikram S.",
    "score": 149.42,
    "guildId": "g5"
  },
  {
    "id": "u4138",
    "name": "John M.",
    "score": 68.25,
    "guildId": "g7"
  },
  {
    "id": "u4139",
    "name": "Mia B.",
    "score": 84.89,
    "guildId": "g7"
  },
  {
    "id": "u4140",
    "name": "Karan M.",
    "score": 44.86,
    "guildId": "g3"
  },
  {
    "id": "u4141",
    "name": "Priya C.",
    "score": 80.7,
    "guildId": "g1"
  },
  {
    "id": "u4142",
    "name": "Liam T.",
    "score": 87.21,
    "guildId": "g10"
  },
  {
    "id": "u4143",
    "name": "Neha T.",
    "score": 73.75,
    "guildId": "g1"
  },
  {
    "id": "u4144",
    "name": "Megha C.",
    "score": 15.35,
    "guildId": "g6"
  },
  {
    "id": "u4145",
    "name": "Vikram R.",
    "score": 81.03,
    "guildId": "g9"
  },
  {
    "id": "u4146",
    "name": "Divya Z.",
    "score": 70.96,
    "guildId": "g7"
  },
  {
    "id": "u4147",
    "name": "Ramesh D.",
    "score": 16.04,
    "guildId": "g7"
  },
  {
    "id": "u4148",
    "name": "Noah V.",
    "score": 142.85,
    "guildId": "g5"
  },
  {
    "id": "u4149",
    "name": "Mia M.",
    "score": 99.41,
    "guildId": "g9"
  },
  {
    "id": "u4150",
    "name": "Liam B.",
    "score": 131.61,
    "guildId": "g3"
  },
  {
    "id": "u4151",
    "name": "Ananya S.",
    "score": 59.06,
    "guildId": "g7"
  },
  {
    "id": "u4152",
    "name": "Arjun V.",
    "score": 26.37,
    "guildId": "g7"
  },
  {
    "id": "u4153",
    "name": "Siddharth P.",
    "score": 139.18,
    "guildId": "g7"
  },
  {
    "id": "u4154",
    "name": "Yuki B.",
    "score": 14.48,
    "guildId": "g8"
  },
  {
    "id": "u4155",
    "name": "Anjali B.",
    "score": 120.59,
    "guildId": "g1"
  },
  {
    "id": "u4156",
    "name": "Pooja Y.",
    "score": 27.28,
    "guildId": "g3"
  },
  {
    "id": "u4157",
    "name": "Vikram D.",
    "score": 60.21,
    "guildId": "g6"
  },
  {
    "id": "u4158",
    "name": "Divya K.",
    "score": 57.6,
    "guildId": "g5"
  },
  {
    "id": "u4159",
    "name": "Luka V.",
    "score": 66.8,
    "guildId": "g3"
  },
  {
    "id": "u4160",
    "name": "Megha P.",
    "score": 25.25,
    "guildId": "g8"
  },
  {
    "id": "u4161",
    "name": "Karan P.",
    "score": 33.55,
    "guildId": "g9"
  },
  {
    "id": "u4162",
    "name": "Neha V.",
    "score": 117.85,
    "guildId": "g7"
  },
  {
    "id": "u4163",
    "name": "Ananya S.",
    "score": 43.88,
    "guildId": "g8"
  },
  {
    "id": "u4164",
    "name": "Megha K.",
    "score": 128.03,
    "guildId": "g4"
  },
  {
    "id": "u4165",
    "name": "Noah M.",
    "score": 145.11,
    "guildId": "g8"
  },
  {
    "id": "u4166",
    "name": "Liam D.",
    "score": 43.36,
    "guildId": "g2"
  },
  {
    "id": "u4167",
    "name": "Rahul T.",
    "score": 88.12,
    "guildId": "g5"
  },
  {
    "id": "u4168",
    "name": "Ravi D.",
    "score": 57.2,
    "guildId": "g1"
  },
  {
    "id": "u4169",
    "name": "Ishita V.",
    "score": 91.08,
    "guildId": "g4"
  },
  {
    "id": "u4170",
    "name": "Sneha A.",
    "score": 128.53,
    "guildId": "g7"
  },
  {
    "id": "u4171",
    "name": "Amit T.",
    "score": 42.38,
    "guildId": "g3"
  },
  {
    "id": "u4172",
    "name": "Ananya C.",
    "score": 128.7,
    "guildId": "g8"
  },
  {
    "id": "u4173",
    "name": "Vikram P.",
    "score": 141.8,
    "guildId": "g7"
  },
  {
    "id": "u4174",
    "name": "Ananya M.",
    "score": 86.3,
    "guildId": "g1"
  },
  {
    "id": "u4175",
    "name": "Anjali A.",
    "score": 116.82,
    "guildId": "g10"
  },
  {
    "id": "u4176",
    "name": "Karan P.",
    "score": 125.64,
    "guildId": "g6"
  },
  {
    "id": "u4177",
    "name": "Olivia Y.",
    "score": 101.06,
    "guildId": "g9"
  },
  {
    "id": "u4178",
    "name": "Luka Z.",
    "score": 95.7,
    "guildId": "g4"
  },
  {
    "id": "u4179",
    "name": "Rohit Y.",
    "score": 14.93,
    "guildId": "g6"
  },
  {
    "id": "u4180",
    "name": "Suresh M.",
    "score": 98.22,
    "guildId": "g1"
  },
  {
    "id": "u4181",
    "name": "Neha K.",
    "score": 119.06,
    "guildId": "g10"
  },
  {
    "id": "u4182",
    "name": "Swati R.",
    "score": 12.31,
    "guildId": "g2"
  },
  {
    "id": "u4183",
    "name": "Anjali C.",
    "score": 149.58,
    "guildId": "g9"
  },
  {
    "id": "u4184",
    "name": "Manish R.",
    "score": 138.47,
    "guildId": "g5"
  },
  {
    "id": "u4185",
    "name": "Aditya K.",
    "score": 94.6,
    "guildId": "g9"
  },
  {
    "id": "u4186",
    "name": "Sophia W.",
    "score": 18.47,
    "guildId": "g2"
  },
  {
    "id": "u4187",
    "name": "Akash V.",
    "score": 46.59,
    "guildId": "g6"
  },
  {
    "id": "u4188",
    "name": "Manish B.",
    "score": 91.37,
    "guildId": "g9"
  },
  {
    "id": "u4189",
    "name": "Karan A.",
    "score": 33.23,
    "guildId": "g5"
  },
  {
    "id": "u4190",
    "name": "Luka D.",
    "score": 116.35,
    "guildId": "g4"
  },
  {
    "id": "u4191",
    "name": "Neha M.",
    "score": 25.33,
    "guildId": "g7"
  },
  {
    "id": "u4192",
    "name": "Ravi P.",
    "score": 71.07,
    "guildId": "g3"
  },
  {
    "id": "u4193",
    "name": "Swati T.",
    "score": 141.29,
    "guildId": "g7"
  },
  {
    "id": "u4194",
    "name": "Ishita C.",
    "score": 105.82,
    "guildId": "g2"
  },
  {
    "id": "u4195",
    "name": "Manish K.",
    "score": 77.76,
    "guildId": "g10"
  },
  {
    "id": "u4196",
    "name": "Pooja W.",
    "score": 17.83,
    "guildId": "g10"
  },
  {
    "id": "u4197",
    "name": "Megha K.",
    "score": 84.83,
    "guildId": "g9"
  },
  {
    "id": "u4198",
    "name": "Ramesh M.",
    "score": 145.04,
    "guildId": "g1"
  },
  {
    "id": "u4199",
    "name": "Manish W.",
    "score": 91.05,
    "guildId": "g8"
  },
  {
    "id": "u4200",
    "name": "John R.",
    "score": 97.92,
    "guildId": "g9"
  },
  {
    "id": "u4201",
    "name": "Akash R.",
    "score": 37.1,
    "guildId": "g2"
  },
  {
    "id": "u4202",
    "name": "Arjun D.",
    "score": 67.91,
    "guildId": "g4"
  },
  {
    "id": "u4203",
    "name": "Priya Y.",
    "score": 28.31,
    "guildId": "g6"
  },
  {
    "id": "u4204",
    "name": "Greta V.",
    "score": 148,
    "guildId": "g3"
  },
  {
    "id": "u4205",
    "name": "Divya D.",
    "score": 60.8,
    "guildId": "g7"
  },
  {
    "id": "u4206",
    "name": "Swati D.",
    "score": 55.59,
    "guildId": "g6"
  },
  {
    "id": "u4207",
    "name": "Karan A.",
    "score": 15.04,
    "guildId": "g10"
  },
  {
    "id": "u4208",
    "name": "Anjali B.",
    "score": 69.17,
    "guildId": "g1"
  },
  {
    "id": "u4209",
    "name": "Mateo Y.",
    "score": 57.61,
    "guildId": "g10"
  },
  {
    "id": "u4210",
    "name": "Vikram D.",
    "score": 141.05,
    "guildId": "g3"
  },
  {
    "id": "u4211",
    "name": "Anjali W.",
    "score": 25.85,
    "guildId": "g8"
  },
  {
    "id": "u4212",
    "name": "Sophia W.",
    "score": 102.92,
    "guildId": "g9"
  },
  {
    "id": "u4213",
    "name": "Hans Y.",
    "score": 24.56,
    "guildId": "g2"
  },
  {
    "id": "u4214",
    "name": "Pooja W.",
    "score": 107.78,
    "guildId": "g10"
  },
  {
    "id": "u4215",
    "name": "Neha Y.",
    "score": 119.82,
    "guildId": "g10"
  },
  {
    "id": "u4216",
    "name": "Ramesh W.",
    "score": 147.6,
    "guildId": "g9"
  },
  {
    "id": "u4217",
    "name": "Rahul Y.",
    "score": 73.04,
    "guildId": "g5"
  },
  {
    "id": "u4218",
    "name": "Ramesh S.",
    "score": 81.35,
    "guildId": "g3"
  },
  {
    "id": "u4219",
    "name": "Vikram C.",
    "score": 78.92,
    "guildId": "g8"
  },
  {
    "id": "u4220",
    "name": "Swati K.",
    "score": 83.95,
    "guildId": "g3"
  },
  {
    "id": "u4221",
    "name": "Anjali Y.",
    "score": 49.64,
    "guildId": "g6"
  },
  {
    "id": "u4222",
    "name": "Ananya Z.",
    "score": 81.89,
    "guildId": "g6"
  },
  {
    "id": "u4223",
    "name": "Kavya A.",
    "score": 79.89,
    "guildId": "g10"
  },
  {
    "id": "u4224",
    "name": "Hiro Y.",
    "score": 135.36,
    "guildId": "g1"
  },
  {
    "id": "u4225",
    "name": "Neha A.",
    "score": 135.08,
    "guildId": "g7"
  },
  {
    "id": "u4226",
    "name": "Ishita D.",
    "score": 130.1,
    "guildId": "g1"
  },
  {
    "id": "u4227",
    "name": "Suresh Z.",
    "score": 92.95,
    "guildId": "g1"
  },
  {
    "id": "u4228",
    "name": "Neha A.",
    "score": 112.56,
    "guildId": "g2"
  },
  {
    "id": "u4229",
    "name": "Siddharth W.",
    "score": 45.98,
    "guildId": "g8"
  },
  {
    "id": "u4230",
    "name": "Rahul Y.",
    "score": 47.02,
    "guildId": "g2"
  },
  {
    "id": "u4231",
    "name": "Kavya P.",
    "score": 116.73,
    "guildId": "g6"
  },
  {
    "id": "u4232",
    "name": "John D.",
    "score": 120.95,
    "guildId": "g7"
  },
  {
    "id": "u4233",
    "name": "Manish D.",
    "score": 77.14,
    "guildId": "g7"
  },
  {
    "id": "u4234",
    "name": "Neha V.",
    "score": 27.59,
    "guildId": "g2"
  },
  {
    "id": "u4235",
    "name": "Swati V.",
    "score": 120.47,
    "guildId": "g6"
  },
  {
    "id": "u4236",
    "name": "Arjun K.",
    "score": 54.52,
    "guildId": "g6"
  },
  {
    "id": "u4237",
    "name": "Aditya K.",
    "score": 130.9,
    "guildId": "g2"
  },
  {
    "id": "u4238",
    "name": "Arjun S.",
    "score": 126.06,
    "guildId": "g8"
  },
  {
    "id": "u4239",
    "name": "Rahul W.",
    "score": 122.96,
    "guildId": "g4"
  },
  {
    "id": "u4240",
    "name": "Rohit R.",
    "score": 22.6,
    "guildId": "g7"
  },
  {
    "id": "u4241",
    "name": "Pooja W.",
    "score": 115.36,
    "guildId": "g9"
  },
  {
    "id": "u4242",
    "name": "Rohit R.",
    "score": 122.39,
    "guildId": "g9"
  },
  {
    "id": "u4243",
    "name": "Yuki D.",
    "score": 36.03,
    "guildId": "g9"
  },
  {
    "id": "u4244",
    "name": "Divya A.",
    "score": 122.56,
    "guildId": "g8"
  },
  {
    "id": "u4245",
    "name": "Manish S.",
    "score": 138.57,
    "guildId": "g7"
  },
  {
    "id": "u4246",
    "name": "Vikram Z.",
    "score": 102.7,
    "guildId": "g9"
  },
  {
    "id": "u4247",
    "name": "Ravi W.",
    "score": 94.33,
    "guildId": "g10"
  },
  {
    "id": "u4248",
    "name": "Aditya B.",
    "score": 67.95,
    "guildId": "g2"
  },
  {
    "id": "u4249",
    "name": "Yuki C.",
    "score": 132.31,
    "guildId": "g9"
  },
  {
    "id": "u4250",
    "name": "Pooja P.",
    "score": 53.24,
    "guildId": "g2"
  },
  {
    "id": "u4251",
    "name": "Rahul Z.",
    "score": 19.35,
    "guildId": "g7"
  },
  {
    "id": "u4252",
    "name": "Aditya D.",
    "score": 68.28,
    "guildId": "g1"
  },
  {
    "id": "u4253",
    "name": "Amit D.",
    "score": 146.62,
    "guildId": "g6"
  },
  {
    "id": "u4254",
    "name": "Ramesh M.",
    "score": 54.04,
    "guildId": "g9"
  },
  {
    "id": "u4255",
    "name": "Anjali T.",
    "score": 19.93,
    "guildId": "g4"
  },
  {
    "id": "u4256",
    "name": "Siddharth M.",
    "score": 33.08,
    "guildId": "g5"
  },
  {
    "id": "u4257",
    "name": "John Z.",
    "score": 77.76,
    "guildId": "g5"
  },
  {
    "id": "u4258",
    "name": "Karan D.",
    "score": 149.71,
    "guildId": "g1"
  },
  {
    "id": "u4259",
    "name": "Ali D.",
    "score": 34.65,
    "guildId": "g4"
  },
  {
    "id": "u4260",
    "name": "Rahul C.",
    "score": 47.73,
    "guildId": "g3"
  },
  {
    "id": "u4261",
    "name": "Liam W.",
    "score": 48.07,
    "guildId": "g10"
  },
  {
    "id": "u4262",
    "name": "Siddharth B.",
    "score": 82.74,
    "guildId": "g2"
  },
  {
    "id": "u4263",
    "name": "Rahul K.",
    "score": 43.46,
    "guildId": "g5"
  },
  {
    "id": "u4264",
    "name": "Arjun M.",
    "score": 65.64,
    "guildId": "g9"
  },
  {
    "id": "u4265",
    "name": "Manish C.",
    "score": 44.94,
    "guildId": "g9"
  },
  {
    "id": "u4266",
    "name": "Swati R.",
    "score": 17.59,
    "guildId": "g1"
  },
  {
    "id": "u4267",
    "name": "Manish P.",
    "score": 126.93,
    "guildId": "g5"
  },
  {
    "id": "u4268",
    "name": "Pooja Y.",
    "score": 27.75,
    "guildId": "g10"
  },
  {
    "id": "u4269",
    "name": "Vikram D.",
    "score": 84.42,
    "guildId": "g4"
  },
  {
    "id": "u4270",
    "name": "Luka P.",
    "score": 30.75,
    "guildId": "g4"
  },
  {
    "id": "u4271",
    "name": "Ravi R.",
    "score": 121.46,
    "guildId": "g2"
  },
  {
    "id": "u4272",
    "name": "Ishita Z.",
    "score": 100.18,
    "guildId": "g7"
  },
  {
    "id": "u4273",
    "name": "Ali P.",
    "score": 108.16,
    "guildId": "g9"
  },
  {
    "id": "u4274",
    "name": "Olivia S.",
    "score": 52.99,
    "guildId": "g2"
  },
  {
    "id": "u4275",
    "name": "Greta W.",
    "score": 32.57,
    "guildId": "g2"
  },
  {
    "id": "u4276",
    "name": "Ramesh W.",
    "score": 94.43,
    "guildId": "g9"
  },
  {
    "id": "u4277",
    "name": "Siddharth K.",
    "score": 115.31,
    "guildId": "g1"
  },
  {
    "id": "u4278",
    "name": "Noah T.",
    "score": 22.45,
    "guildId": "g5"
  },
  {
    "id": "u4279",
    "name": "Emma Y.",
    "score": 82.87,
    "guildId": "g2"
  },
  {
    "id": "u4280",
    "name": "Fatima Z.",
    "score": 148.83,
    "guildId": "g3"
  },
  {
    "id": "u4281",
    "name": "Hans K.",
    "score": 96.58,
    "guildId": "g7"
  },
  {
    "id": "u4282",
    "name": "Arjun Y.",
    "score": 22.86,
    "guildId": "g3"
  },
  {
    "id": "u4283",
    "name": "Kavya V.",
    "score": 107.39,
    "guildId": "g3"
  },
  {
    "id": "u4284",
    "name": "Noah A.",
    "score": 133.62,
    "guildId": "g7"
  },
  {
    "id": "u4285",
    "name": "Siddharth C.",
    "score": 36.87,
    "guildId": "g6"
  },
  {
    "id": "u4286",
    "name": "Rahul A.",
    "score": 113.9,
    "guildId": "g8"
  },
  {
    "id": "u4287",
    "name": "Manish B.",
    "score": 106.52,
    "guildId": "g8"
  },
  {
    "id": "u4288",
    "name": "Ananya V.",
    "score": 13.03,
    "guildId": "g10"
  },
  {
    "id": "u4289",
    "name": "Rahul C.",
    "score": 55.7,
    "guildId": "g10"
  },
  {
    "id": "u4290",
    "name": "Luka C.",
    "score": 82.86,
    "guildId": "g4"
  },
  {
    "id": "u4291",
    "name": "Liam S.",
    "score": 98.95,
    "guildId": "g6"
  },
  {
    "id": "u4292",
    "name": "Manish S.",
    "score": 118.36,
    "guildId": "g1"
  },
  {
    "id": "u4293",
    "name": "Amit V.",
    "score": 104.49,
    "guildId": "g1"
  },
  {
    "id": "u4294",
    "name": "Luka S.",
    "score": 31.87,
    "guildId": "g9"
  },
  {
    "id": "u4295",
    "name": "Pooja R.",
    "score": 47.49,
    "guildId": "g6"
  },
  {
    "id": "u4296",
    "name": "Ramesh V.",
    "score": 30.91,
    "guildId": "g5"
  },
  {
    "id": "u4297",
    "name": "Olivia P.",
    "score": 79.69,
    "guildId": "g4"
  },
  {
    "id": "u4298",
    "name": "Priya T.",
    "score": 51.5,
    "guildId": "g7"
  },
  {
    "id": "u4299",
    "name": "Swati A.",
    "score": 127.75,
    "guildId": "g4"
  },
  {
    "id": "u4300",
    "name": "Rahul W.",
    "score": 100.93,
    "guildId": "g9"
  },
  {
    "id": "u4301",
    "name": "Akash B.",
    "score": 103.6,
    "guildId": "g10"
  },
  {
    "id": "u4302",
    "name": "Vikram S.",
    "score": 112.45,
    "guildId": "g7"
  },
  {
    "id": "u4303",
    "name": "Arjun Y.",
    "score": 16.79,
    "guildId": "g5"
  },
  {
    "id": "u4304",
    "name": "Ramesh W.",
    "score": 48.54,
    "guildId": "g4"
  },
  {
    "id": "u4305",
    "name": "Isabella P.",
    "score": 11.2,
    "guildId": "g4"
  },
  {
    "id": "u4306",
    "name": "Emma C.",
    "score": 41.26,
    "guildId": "g4"
  },
  {
    "id": "u4307",
    "name": "Pooja P.",
    "score": 113.45,
    "guildId": "g5"
  },
  {
    "id": "u4308",
    "name": "Swati D.",
    "score": 67.55,
    "guildId": "g8"
  },
  {
    "id": "u4309",
    "name": "Ishita M.",
    "score": 112.84,
    "guildId": "g10"
  },
  {
    "id": "u4310",
    "name": "Siddharth A.",
    "score": 74.52,
    "guildId": "g8"
  },
  {
    "id": "u4311",
    "name": "Neha C.",
    "score": 69.52,
    "guildId": "g2"
  },
  {
    "id": "u4312",
    "name": "Isabella K.",
    "score": 147.36,
    "guildId": "g7"
  },
  {
    "id": "u4313",
    "name": "Neha Y.",
    "score": 44.83,
    "guildId": "g7"
  },
  {
    "id": "u4314",
    "name": "Aditya B.",
    "score": 112.89,
    "guildId": "g5"
  },
  {
    "id": "u4315",
    "name": "Sneha R.",
    "score": 42.75,
    "guildId": "g7"
  },
  {
    "id": "u4316",
    "name": "Ishita K.",
    "score": 71.89,
    "guildId": "g6"
  },
  {
    "id": "u4317",
    "name": "Ramesh R.",
    "score": 113.88,
    "guildId": "g3"
  },
  {
    "id": "u4318",
    "name": "Liam D.",
    "score": 142.86,
    "guildId": "g10"
  },
  {
    "id": "u4319",
    "name": "Akash Z.",
    "score": 24.46,
    "guildId": "g5"
  },
  {
    "id": "u4320",
    "name": "Sneha C.",
    "score": 89.11,
    "guildId": "g8"
  },
  {
    "id": "u4321",
    "name": "Swati A.",
    "score": 126.22,
    "guildId": "g1"
  },
  {
    "id": "u4322",
    "name": "Megha C.",
    "score": 12.04,
    "guildId": "g1"
  },
  {
    "id": "u4323",
    "name": "Amit A.",
    "score": 102.65,
    "guildId": "g2"
  },
  {
    "id": "u4324",
    "name": "Ravi B.",
    "score": 68.98,
    "guildId": "g5"
  },
  {
    "id": "u4325",
    "name": "Olivia C.",
    "score": 24.64,
    "guildId": "g9"
  },
  {
    "id": "u4326",
    "name": "Aditya M.",
    "score": 72.91,
    "guildId": "g7"
  },
  {
    "id": "u4327",
    "name": "Neha Z.",
    "score": 116.86,
    "guildId": "g10"
  },
  {
    "id": "u4328",
    "name": "Anjali P.",
    "score": 92.44,
    "guildId": "g1"
  },
  {
    "id": "u4329",
    "name": "Swati M.",
    "score": 31.5,
    "guildId": "g3"
  },
  {
    "id": "u4330",
    "name": "Ali C.",
    "score": 60.76,
    "guildId": "g10"
  },
  {
    "id": "u4331",
    "name": "Ananya M.",
    "score": 89.42,
    "guildId": "g2"
  },
  {
    "id": "u4332",
    "name": "John Z.",
    "score": 82.44,
    "guildId": "g1"
  },
  {
    "id": "u4333",
    "name": "Swati V.",
    "score": 34.44,
    "guildId": "g4"
  },
  {
    "id": "u4334",
    "name": "Rahul S.",
    "score": 18.5,
    "guildId": "g2"
  },
  {
    "id": "u4335",
    "name": "Ishita M.",
    "score": 103.77,
    "guildId": "g8"
  },
  {
    "id": "u4336",
    "name": "Karan D.",
    "score": 60.35,
    "guildId": "g10"
  },
  {
    "id": "u4337",
    "name": "Aditya T.",
    "score": 43.39,
    "guildId": "g3"
  },
  {
    "id": "u4338",
    "name": "Sophia S.",
    "score": 148.99,
    "guildId": "g1"
  },
  {
    "id": "u4339",
    "name": "Ramesh T.",
    "score": 57.02,
    "guildId": "g3"
  },
  {
    "id": "u4340",
    "name": "Manish Z.",
    "score": 69.95,
    "guildId": "g8"
  },
  {
    "id": "u4341",
    "name": "Kavya M.",
    "score": 84.41,
    "guildId": "g8"
  },
  {
    "id": "u4342",
    "name": "Pooja A.",
    "score": 146.33,
    "guildId": "g1"
  },
  {
    "id": "u4343",
    "name": "Suresh Y.",
    "score": 16.72,
    "guildId": "g4"
  },
  {
    "id": "u4344",
    "name": "Ravi B.",
    "score": 54.89,
    "guildId": "g1"
  },
  {
    "id": "u4345",
    "name": "Swati V.",
    "score": 144.48,
    "guildId": "g4"
  },
  {
    "id": "u4346",
    "name": "Divya A.",
    "score": 144.36,
    "guildId": "g7"
  },
  {
    "id": "u4347",
    "name": "Karan Y.",
    "score": 69.48,
    "guildId": "g10"
  },
  {
    "id": "u4348",
    "name": "Emma C.",
    "score": 10.11,
    "guildId": "g9"
  },
  {
    "id": "u4349",
    "name": "Manish W.",
    "score": 83.42,
    "guildId": "g2"
  },
  {
    "id": "u4350",
    "name": "Sneha C.",
    "score": 60.24,
    "guildId": "g7"
  },
  {
    "id": "u4351",
    "name": "Karan Z.",
    "score": 20.44,
    "guildId": "g9"
  },
  {
    "id": "u4352",
    "name": "Megha T.",
    "score": 71.69,
    "guildId": "g2"
  },
  {
    "id": "u4353",
    "name": "Arjun S.",
    "score": 40.91,
    "guildId": "g9"
  },
  {
    "id": "u4354",
    "name": "Arjun W.",
    "score": 141.41,
    "guildId": "g8"
  },
  {
    "id": "u4355",
    "name": "Anjali Y.",
    "score": 97.97,
    "guildId": "g8"
  },
  {
    "id": "u4356",
    "name": "Aditya Z.",
    "score": 114.87,
    "guildId": "g4"
  },
  {
    "id": "u4357",
    "name": "Karan C.",
    "score": 114.4,
    "guildId": "g5"
  },
  {
    "id": "u4358",
    "name": "Liam Z.",
    "score": 29.95,
    "guildId": "g10"
  },
  {
    "id": "u4359",
    "name": "Megha C.",
    "score": 20.42,
    "guildId": "g1"
  },
  {
    "id": "u4360",
    "name": "Anjali B.",
    "score": 62.66,
    "guildId": "g3"
  },
  {
    "id": "u4361",
    "name": "Yuki D.",
    "score": 77.08,
    "guildId": "g1"
  },
  {
    "id": "u4362",
    "name": "Karan C.",
    "score": 17.87,
    "guildId": "g2"
  },
  {
    "id": "u4363",
    "name": "Aditya T.",
    "score": 33.73,
    "guildId": "g3"
  },
  {
    "id": "u4364",
    "name": "Akash S.",
    "score": 105.35,
    "guildId": "g7"
  },
  {
    "id": "u4365",
    "name": "Suresh W.",
    "score": 25.69,
    "guildId": "g8"
  },
  {
    "id": "u4366",
    "name": "Megha A.",
    "score": 35.55,
    "guildId": "g4"
  },
  {
    "id": "u4367",
    "name": "Hiro T.",
    "score": 100.16,
    "guildId": "g9"
  },
  {
    "id": "u4368",
    "name": "Anjali R.",
    "score": 129.73,
    "guildId": "g2"
  },
  {
    "id": "u4369",
    "name": "Ravi V.",
    "score": 25.06,
    "guildId": "g8"
  },
  {
    "id": "u4370",
    "name": "Priya W.",
    "score": 84.11,
    "guildId": "g3"
  },
  {
    "id": "u4371",
    "name": "Pooja D.",
    "score": 113.93,
    "guildId": "g1"
  },
  {
    "id": "u4372",
    "name": "Priya D.",
    "score": 22.34,
    "guildId": "g9"
  },
  {
    "id": "u4373",
    "name": "Siddharth W.",
    "score": 46.3,
    "guildId": "g7"
  },
  {
    "id": "u4374",
    "name": "Isabella S.",
    "score": 86.82,
    "guildId": "g1"
  },
  {
    "id": "u4375",
    "name": "Sophia T.",
    "score": 147.37,
    "guildId": "g7"
  },
  {
    "id": "u4376",
    "name": "Aditya Y.",
    "score": 105.29,
    "guildId": "g9"
  },
  {
    "id": "u4377",
    "name": "Vikram C.",
    "score": 102.52,
    "guildId": "g4"
  },
  {
    "id": "u4378",
    "name": "Ramesh K.",
    "score": 149.19,
    "guildId": "g1"
  },
  {
    "id": "u4379",
    "name": "Arjun B.",
    "score": 117.2,
    "guildId": "g10"
  },
  {
    "id": "u4380",
    "name": "Anjali K.",
    "score": 32.15,
    "guildId": "g7"
  },
  {
    "id": "u4381",
    "name": "John T.",
    "score": 37.15,
    "guildId": "g6"
  },
  {
    "id": "u4382",
    "name": "Vikram D.",
    "score": 146.1,
    "guildId": "g4"
  },
  {
    "id": "u4383",
    "name": "Sneha D.",
    "score": 120.26,
    "guildId": "g10"
  },
  {
    "id": "u4384",
    "name": "Arjun S.",
    "score": 40.18,
    "guildId": "g2"
  },
  {
    "id": "u4385",
    "name": "Ravi D.",
    "score": 146.96,
    "guildId": "g9"
  },
  {
    "id": "u4386",
    "name": "Divya B.",
    "score": 132.05,
    "guildId": "g2"
  },
  {
    "id": "u4387",
    "name": "Karan D.",
    "score": 32.89,
    "guildId": "g10"
  },
  {
    "id": "u4388",
    "name": "Ananya M.",
    "score": 22.27,
    "guildId": "g6"
  },
  {
    "id": "u4389",
    "name": "Amit R.",
    "score": 15.95,
    "guildId": "g5"
  },
  {
    "id": "u4390",
    "name": "Aditya K.",
    "score": 57.85,
    "guildId": "g3"
  },
  {
    "id": "u4391",
    "name": "Suresh M.",
    "score": 147.19,
    "guildId": "g2"
  },
  {
    "id": "u4392",
    "name": "Amit Y.",
    "score": 35.25,
    "guildId": "g3"
  },
  {
    "id": "u4393",
    "name": "Divya D.",
    "score": 59.16,
    "guildId": "g10"
  },
  {
    "id": "u4394",
    "name": "Megha S.",
    "score": 138.14,
    "guildId": "g2"
  },
  {
    "id": "u4395",
    "name": "Ravi Z.",
    "score": 98.03,
    "guildId": "g3"
  },
  {
    "id": "u4396",
    "name": "Ravi B.",
    "score": 129.31,
    "guildId": "g8"
  },
  {
    "id": "u4397",
    "name": "Ravi K.",
    "score": 136.37,
    "guildId": "g7"
  },
  {
    "id": "u4398",
    "name": "Kavya C.",
    "score": 46.78,
    "guildId": "g2"
  },
  {
    "id": "u4399",
    "name": "Ravi P.",
    "score": 95.81,
    "guildId": "g8"
  },
  {
    "id": "u4400",
    "name": "Isabella C.",
    "score": 116.11,
    "guildId": "g5"
  },
  {
    "id": "u4401",
    "name": "Ramesh D.",
    "score": 19.27,
    "guildId": "g9"
  },
  {
    "id": "u4402",
    "name": "Chen Z.",
    "score": 122.08,
    "guildId": "g3"
  },
  {
    "id": "u4403",
    "name": "Pooja S.",
    "score": 86,
    "guildId": "g1"
  },
  {
    "id": "u4404",
    "name": "Siddharth Z.",
    "score": 139.85,
    "guildId": "g2"
  },
  {
    "id": "u4405",
    "name": "Akash M.",
    "score": 37.86,
    "guildId": "g6"
  },
  {
    "id": "u4406",
    "name": "Divya K.",
    "score": 123.15,
    "guildId": "g7"
  },
  {
    "id": "u4407",
    "name": "Sophia S.",
    "score": 142.81,
    "guildId": "g6"
  },
  {
    "id": "u4408",
    "name": "Pooja M.",
    "score": 146.08,
    "guildId": "g2"
  },
  {
    "id": "u4409",
    "name": "Greta S.",
    "score": 46.19,
    "guildId": "g4"
  },
  {
    "id": "u4410",
    "name": "Amit R.",
    "score": 16.64,
    "guildId": "g4"
  },
  {
    "id": "u4411",
    "name": "Luka M.",
    "score": 89.27,
    "guildId": "g5"
  },
  {
    "id": "u4412",
    "name": "Sneha T.",
    "score": 16.45,
    "guildId": "g10"
  },
  {
    "id": "u4413",
    "name": "Neha C.",
    "score": 113.19,
    "guildId": "g2"
  },
  {
    "id": "u4414",
    "name": "Sophia A.",
    "score": 74.07,
    "guildId": "g2"
  },
  {
    "id": "u4415",
    "name": "Divya C.",
    "score": 138.86,
    "guildId": "g9"
  },
  {
    "id": "u4416",
    "name": "Mateo P.",
    "score": 19.77,
    "guildId": "g5"
  },
  {
    "id": "u4417",
    "name": "Ramesh C.",
    "score": 39.41,
    "guildId": "g9"
  },
  {
    "id": "u4418",
    "name": "Suresh Z.",
    "score": 76.52,
    "guildId": "g3"
  },
  {
    "id": "u4419",
    "name": "Neha C.",
    "score": 71.7,
    "guildId": "g4"
  },
  {
    "id": "u4420",
    "name": "Isabella Y.",
    "score": 99.71,
    "guildId": "g4"
  },
  {
    "id": "u4421",
    "name": "Aditya V.",
    "score": 100.43,
    "guildId": "g10"
  },
  {
    "id": "u4422",
    "name": "Suresh S.",
    "score": 40.7,
    "guildId": "g5"
  },
  {
    "id": "u4423",
    "name": "Ishita Z.",
    "score": 88.65,
    "guildId": "g1"
  },
  {
    "id": "u4424",
    "name": "Rohit B.",
    "score": 147.26,
    "guildId": "g9"
  },
  {
    "id": "u4425",
    "name": "Amit P.",
    "score": 95.78,
    "guildId": "g6"
  },
  {
    "id": "u4426",
    "name": "Amit A.",
    "score": 95.95,
    "guildId": "g9"
  },
  {
    "id": "u4427",
    "name": "Ishita C.",
    "score": 63.42,
    "guildId": "g7"
  },
  {
    "id": "u4428",
    "name": "Rohit M.",
    "score": 46.41,
    "guildId": "g2"
  },
  {
    "id": "u4429",
    "name": "Neha R.",
    "score": 87,
    "guildId": "g9"
  },
  {
    "id": "u4430",
    "name": "Megha C.",
    "score": 72.85,
    "guildId": "g8"
  },
  {
    "id": "u4431",
    "name": "Karan S.",
    "score": 127.28,
    "guildId": "g2"
  },
  {
    "id": "u4432",
    "name": "Ravi A.",
    "score": 70.59,
    "guildId": "g3"
  },
  {
    "id": "u4433",
    "name": "Arjun Y.",
    "score": 50.6,
    "guildId": "g10"
  },
  {
    "id": "u4434",
    "name": "Ishita D.",
    "score": 38.02,
    "guildId": "g10"
  },
  {
    "id": "u4435",
    "name": "Manish K.",
    "score": 114.48,
    "guildId": "g8"
  },
  {
    "id": "u4436",
    "name": "Arjun Z.",
    "score": 35.27,
    "guildId": "g5"
  },
  {
    "id": "u4437",
    "name": "Amit Y.",
    "score": 96.8,
    "guildId": "g4"
  },
  {
    "id": "u4438",
    "name": "Divya C.",
    "score": 114.69,
    "guildId": "g6"
  },
  {
    "id": "u4439",
    "name": "Arjun T.",
    "score": 69.81,
    "guildId": "g9"
  },
  {
    "id": "u4440",
    "name": "Anjali R.",
    "score": 67.23,
    "guildId": "g5"
  },
  {
    "id": "u4441",
    "name": "Rahul C.",
    "score": 80.73,
    "guildId": "g9"
  },
  {
    "id": "u4442",
    "name": "Kavya D.",
    "score": 113.36,
    "guildId": "g8"
  },
  {
    "id": "u4443",
    "name": "Karan D.",
    "score": 87.69,
    "guildId": "g5"
  },
  {
    "id": "u4444",
    "name": "Rahul R.",
    "score": 148.95,
    "guildId": "g1"
  },
  {
    "id": "u4445",
    "name": "Arjun Z.",
    "score": 64.23,
    "guildId": "g2"
  },
  {
    "id": "u4446",
    "name": "Amit C.",
    "score": 129.35,
    "guildId": "g1"
  },
  {
    "id": "u4447",
    "name": "Sneha P.",
    "score": 71.38,
    "guildId": "g4"
  },
  {
    "id": "u4448",
    "name": "Kavya Y.",
    "score": 85.26,
    "guildId": "g1"
  },
  {
    "id": "u4449",
    "name": "Emma Y.",
    "score": 77.46,
    "guildId": "g2"
  },
  {
    "id": "u4450",
    "name": "Rahul W.",
    "score": 55.93,
    "guildId": "g10"
  },
  {
    "id": "u4451",
    "name": "Aditya R.",
    "score": 29.7,
    "guildId": "g9"
  },
  {
    "id": "u4452",
    "name": "Anjali M.",
    "score": 103.37,
    "guildId": "g10"
  },
  {
    "id": "u4453",
    "name": "Ramesh S.",
    "score": 58.89,
    "guildId": "g10"
  },
  {
    "id": "u4454",
    "name": "Swati M.",
    "score": 67.19,
    "guildId": "g6"
  },
  {
    "id": "u4455",
    "name": "Olivia T.",
    "score": 87.81,
    "guildId": "g2"
  },
  {
    "id": "u4456",
    "name": "Rohit Y.",
    "score": 89.09,
    "guildId": "g1"
  },
  {
    "id": "u4457",
    "name": "Akash V.",
    "score": 53.34,
    "guildId": "g2"
  },
  {
    "id": "u4458",
    "name": "Neha T.",
    "score": 140.92,
    "guildId": "g6"
  },
  {
    "id": "u4459",
    "name": "Kavya Z.",
    "score": 67.57,
    "guildId": "g2"
  },
  {
    "id": "u4460",
    "name": "Suresh P.",
    "score": 70.42,
    "guildId": "g9"
  },
  {
    "id": "u4461",
    "name": "Manish D.",
    "score": 62.69,
    "guildId": "g4"
  },
  {
    "id": "u4462",
    "name": "Isabella R.",
    "score": 140.61,
    "guildId": "g5"
  },
  {
    "id": "u4463",
    "name": "Ravi V.",
    "score": 17.32,
    "guildId": "g5"
  },
  {
    "id": "u4464",
    "name": "Manish Y.",
    "score": 118.71,
    "guildId": "g8"
  },
  {
    "id": "u4465",
    "name": "Suresh K.",
    "score": 145.47,
    "guildId": "g4"
  },
  {
    "id": "u4466",
    "name": "Ravi T.",
    "score": 119.69,
    "guildId": "g1"
  },
  {
    "id": "u4467",
    "name": "Aditya C.",
    "score": 16.45,
    "guildId": "g6"
  },
  {
    "id": "u4468",
    "name": "Akash W.",
    "score": 115.36,
    "guildId": "g1"
  },
  {
    "id": "u4469",
    "name": "Swati Z.",
    "score": 18.46,
    "guildId": "g9"
  },
  {
    "id": "u4470",
    "name": "Kavya V.",
    "score": 31.11,
    "guildId": "g5"
  },
  {
    "id": "u4471",
    "name": "Anjali K.",
    "score": 67.02,
    "guildId": "g7"
  },
  {
    "id": "u4472",
    "name": "Arjun P.",
    "score": 137.48,
    "guildId": "g5"
  },
  {
    "id": "u4473",
    "name": "Neha B.",
    "score": 66.9,
    "guildId": "g3"
  },
  {
    "id": "u4474",
    "name": "Aditya K.",
    "score": 124.89,
    "guildId": "g8"
  },
  {
    "id": "u4475",
    "name": "Hiro B.",
    "score": 63.76,
    "guildId": "g10"
  },
  {
    "id": "u4476",
    "name": "Neha Z.",
    "score": 81.97,
    "guildId": "g1"
  },
  {
    "id": "u4477",
    "name": "Olivia K.",
    "score": 13.01,
    "guildId": "g3"
  },
  {
    "id": "u4478",
    "name": "Swati K.",
    "score": 45.41,
    "guildId": "g4"
  },
  {
    "id": "u4479",
    "name": "Vikram P.",
    "score": 13.63,
    "guildId": "g3"
  },
  {
    "id": "u4480",
    "name": "Olivia B.",
    "score": 110.34,
    "guildId": "g6"
  },
  {
    "id": "u4481",
    "name": "John D.",
    "score": 66.14,
    "guildId": "g6"
  },
  {
    "id": "u4482",
    "name": "Divya D.",
    "score": 86.14,
    "guildId": "g1"
  },
  {
    "id": "u4483",
    "name": "Megha W.",
    "score": 130.21,
    "guildId": "g10"
  },
  {
    "id": "u4484",
    "name": "Aditya T.",
    "score": 122.69,
    "guildId": "g3"
  },
  {
    "id": "u4485",
    "name": "Manish A.",
    "score": 129.16,
    "guildId": "g6"
  },
  {
    "id": "u4486",
    "name": "Amit D.",
    "score": 21.11,
    "guildId": "g3"
  },
  {
    "id": "u4487",
    "name": "John A.",
    "score": 59.17,
    "guildId": "g6"
  },
  {
    "id": "u4488",
    "name": "Arjun B.",
    "score": 120.41,
    "guildId": "g7"
  },
  {
    "id": "u4489",
    "name": "Ishita R.",
    "score": 111.89,
    "guildId": "g7"
  },
  {
    "id": "u4490",
    "name": "Ali A.",
    "score": 112.03,
    "guildId": "g7"
  },
  {
    "id": "u4491",
    "name": "Megha M.",
    "score": 19.37,
    "guildId": "g6"
  },
  {
    "id": "u4492",
    "name": "Sneha W.",
    "score": 73.12,
    "guildId": "g5"
  },
  {
    "id": "u4493",
    "name": "Aditya C.",
    "score": 15.87,
    "guildId": "g3"
  },
  {
    "id": "u4494",
    "name": "Swati T.",
    "score": 60.57,
    "guildId": "g6"
  },
  {
    "id": "u4495",
    "name": "Aditya Z.",
    "score": 14.53,
    "guildId": "g3"
  },
  {
    "id": "u4496",
    "name": "Karan Y.",
    "score": 86.11,
    "guildId": "g10"
  },
  {
    "id": "u4497",
    "name": "Ishita S.",
    "score": 149.63,
    "guildId": "g4"
  },
  {
    "id": "u4498",
    "name": "Neha Y.",
    "score": 82.77,
    "guildId": "g1"
  },
  {
    "id": "u4499",
    "name": "Liam W.",
    "score": 67.19,
    "guildId": "g5"
  },
  {
    "id": "u4500",
    "name": "John C.",
    "score": 141.46,
    "guildId": "g8"
  },
  {
    "id": "u4501",
    "name": "Ravi W.",
    "score": 73.04,
    "guildId": "g10"
  },
  {
    "id": "u4502",
    "name": "Neha V.",
    "score": 37.41,
    "guildId": "g10"
  },
  {
    "id": "u4503",
    "name": "Arjun Y.",
    "score": 144.34,
    "guildId": "g7"
  },
  {
    "id": "u4504",
    "name": "Kavya C.",
    "score": 138.28,
    "guildId": "g2"
  },
  {
    "id": "u4505",
    "name": "Anjali A.",
    "score": 119.49,
    "guildId": "g6"
  },
  {
    "id": "u4506",
    "name": "Megha P.",
    "score": 33.9,
    "guildId": "g5"
  },
  {
    "id": "u4507",
    "name": "Kavya R.",
    "score": 76.47,
    "guildId": "g5"
  },
  {
    "id": "u4508",
    "name": "Sneha W.",
    "score": 70.96,
    "guildId": "g10"
  },
  {
    "id": "u4509",
    "name": "Isabella V.",
    "score": 40.66,
    "guildId": "g2"
  },
  {
    "id": "u4510",
    "name": "Megha M.",
    "score": 143.27,
    "guildId": "g6"
  },
  {
    "id": "u4511",
    "name": "Siddharth Y.",
    "score": 123.25,
    "guildId": "g4"
  },
  {
    "id": "u4512",
    "name": "Manish P.",
    "score": 59.71,
    "guildId": "g2"
  },
  {
    "id": "u4513",
    "name": "Kavya S.",
    "score": 42.57,
    "guildId": "g10"
  },
  {
    "id": "u4514",
    "name": "Ramesh S.",
    "score": 28.62,
    "guildId": "g2"
  },
  {
    "id": "u4515",
    "name": "Divya Y.",
    "score": 108.55,
    "guildId": "g10"
  },
  {
    "id": "u4516",
    "name": "Aditya K.",
    "score": 148.51,
    "guildId": "g8"
  },
  {
    "id": "u4517",
    "name": "Ramesh C.",
    "score": 47.4,
    "guildId": "g9"
  },
  {
    "id": "u4518",
    "name": "Ali B.",
    "score": 135.59,
    "guildId": "g4"
  },
  {
    "id": "u4519",
    "name": "Greta S.",
    "score": 41.59,
    "guildId": "g6"
  },
  {
    "id": "u4520",
    "name": "Anjali M.",
    "score": 110.37,
    "guildId": "g2"
  },
  {
    "id": "u4521",
    "name": "Priya T.",
    "score": 109.94,
    "guildId": "g7"
  },
  {
    "id": "u4522",
    "name": "Suresh T.",
    "score": 33.49,
    "guildId": "g4"
  },
  {
    "id": "u4523",
    "name": "Anjali C.",
    "score": 39.31,
    "guildId": "g6"
  },
  {
    "id": "u4524",
    "name": "Swati Z.",
    "score": 108.28,
    "guildId": "g6"
  },
  {
    "id": "u4525",
    "name": "Priya T.",
    "score": 45.82,
    "guildId": "g2"
  },
  {
    "id": "u4526",
    "name": "Megha T.",
    "score": 135.42,
    "guildId": "g1"
  },
  {
    "id": "u4527",
    "name": "Vikram V.",
    "score": 115.16,
    "guildId": "g8"
  },
  {
    "id": "u4528",
    "name": "Hans R.",
    "score": 81.45,
    "guildId": "g10"
  },
  {
    "id": "u4529",
    "name": "Megha A.",
    "score": 39.64,
    "guildId": "g7"
  },
  {
    "id": "u4530",
    "name": "Neha V.",
    "score": 71.08,
    "guildId": "g6"
  },
  {
    "id": "u4531",
    "name": "Sneha V.",
    "score": 15.75,
    "guildId": "g10"
  },
  {
    "id": "u4532",
    "name": "Anjali Z.",
    "score": 107.34,
    "guildId": "g2"
  },
  {
    "id": "u4533",
    "name": "Karan A.",
    "score": 33.49,
    "guildId": "g8"
  },
  {
    "id": "u4534",
    "name": "Manish Y.",
    "score": 55.06,
    "guildId": "g7"
  },
  {
    "id": "u4535",
    "name": "Pooja M.",
    "score": 128.34,
    "guildId": "g4"
  },
  {
    "id": "u4536",
    "name": "Vikram V.",
    "score": 18.83,
    "guildId": "g3"
  },
  {
    "id": "u4537",
    "name": "Arjun S.",
    "score": 70.93,
    "guildId": "g7"
  },
  {
    "id": "u4538",
    "name": "Rahul R.",
    "score": 89.92,
    "guildId": "g2"
  },
  {
    "id": "u4539",
    "name": "Megha W.",
    "score": 92.55,
    "guildId": "g7"
  },
  {
    "id": "u4540",
    "name": "Suresh T.",
    "score": 129.05,
    "guildId": "g6"
  },
  {
    "id": "u4541",
    "name": "Liam B.",
    "score": 88.43,
    "guildId": "g3"
  },
  {
    "id": "u4542",
    "name": "Hans W.",
    "score": 89.22,
    "guildId": "g5"
  },
  {
    "id": "u4543",
    "name": "Amit Y.",
    "score": 100.74,
    "guildId": "g3"
  },
  {
    "id": "u4544",
    "name": "Kavya P.",
    "score": 65.81,
    "guildId": "g2"
  },
  {
    "id": "u4545",
    "name": "Siddharth W.",
    "score": 48.86,
    "guildId": "g2"
  },
  {
    "id": "u4546",
    "name": "Divya K.",
    "score": 43.14,
    "guildId": "g3"
  },
  {
    "id": "u4547",
    "name": "Priya T.",
    "score": 102.19,
    "guildId": "g6"
  },
  {
    "id": "u4548",
    "name": "Ravi B.",
    "score": 146.34,
    "guildId": "g2"
  },
  {
    "id": "u4549",
    "name": "Priya S.",
    "score": 17.33,
    "guildId": "g6"
  },
  {
    "id": "u4550",
    "name": "Pooja K.",
    "score": 92.82,
    "guildId": "g2"
  },
  {
    "id": "u4551",
    "name": "Divya Z.",
    "score": 40.57,
    "guildId": "g6"
  },
  {
    "id": "u4552",
    "name": "Suresh B.",
    "score": 106.93,
    "guildId": "g1"
  },
  {
    "id": "u4553",
    "name": "Siddharth M.",
    "score": 149.84,
    "guildId": "g10"
  },
  {
    "id": "u4554",
    "name": "Luka D.",
    "score": 135.52,
    "guildId": "g9"
  },
  {
    "id": "u4555",
    "name": "Megha S.",
    "score": 90.84,
    "guildId": "g7"
  },
  {
    "id": "u4556",
    "name": "Emma B.",
    "score": 126.04,
    "guildId": "g5"
  },
  {
    "id": "u4557",
    "name": "Ali A.",
    "score": 109.82,
    "guildId": "g3"
  },
  {
    "id": "u4558",
    "name": "Noah B.",
    "score": 43.33,
    "guildId": "g8"
  },
  {
    "id": "u4559",
    "name": "Siddharth R.",
    "score": 100.18,
    "guildId": "g2"
  },
  {
    "id": "u4560",
    "name": "Rohit K.",
    "score": 96.87,
    "guildId": "g5"
  },
  {
    "id": "u4561",
    "name": "Aditya Y.",
    "score": 24.6,
    "guildId": "g7"
  },
  {
    "id": "u4562",
    "name": "Vikram Z.",
    "score": 26.68,
    "guildId": "g3"
  },
  {
    "id": "u4563",
    "name": "Siddharth D.",
    "score": 82.65,
    "guildId": "g2"
  },
  {
    "id": "u4564",
    "name": "Rahul S.",
    "score": 143.35,
    "guildId": "g4"
  },
  {
    "id": "u4565",
    "name": "Divya W.",
    "score": 26.73,
    "guildId": "g1"
  },
  {
    "id": "u4566",
    "name": "Pooja S.",
    "score": 146.87,
    "guildId": "g10"
  },
  {
    "id": "u4567",
    "name": "Sneha A.",
    "score": 56.46,
    "guildId": "g5"
  },
  {
    "id": "u4568",
    "name": "Vikram K.",
    "score": 10.14,
    "guildId": "g3"
  },
  {
    "id": "u4569",
    "name": "Liam M.",
    "score": 126.24,
    "guildId": "g5"
  },
  {
    "id": "u4570",
    "name": "Neha C.",
    "score": 148.34,
    "guildId": "g4"
  },
  {
    "id": "u4571",
    "name": "Ishita C.",
    "score": 64.85,
    "guildId": "g8"
  },
  {
    "id": "u4572",
    "name": "Akash C.",
    "score": 130.94,
    "guildId": "g3"
  },
  {
    "id": "u4573",
    "name": "Kavya D.",
    "score": 119.63,
    "guildId": "g1"
  },
  {
    "id": "u4574",
    "name": "Rohit B.",
    "score": 103.87,
    "guildId": "g7"
  },
  {
    "id": "u4575",
    "name": "Greta S.",
    "score": 117.3,
    "guildId": "g9"
  },
  {
    "id": "u4576",
    "name": "Greta W.",
    "score": 137.46,
    "guildId": "g9"
  },
  {
    "id": "u4577",
    "name": "Chen D.",
    "score": 57.96,
    "guildId": "g10"
  },
  {
    "id": "u4578",
    "name": "Vikram K.",
    "score": 78.53,
    "guildId": "g4"
  },
  {
    "id": "u4579",
    "name": "Megha S.",
    "score": 33.06,
    "guildId": "g2"
  },
  {
    "id": "u4580",
    "name": "Ramesh D.",
    "score": 90.44,
    "guildId": "g4"
  },
  {
    "id": "u4581",
    "name": "Swati W.",
    "score": 10.54,
    "guildId": "g9"
  },
  {
    "id": "u4582",
    "name": "Anjali T.",
    "score": 57.78,
    "guildId": "g5"
  },
  {
    "id": "u4583",
    "name": "Pooja R.",
    "score": 55.78,
    "guildId": "g9"
  },
  {
    "id": "u4584",
    "name": "Arjun W.",
    "score": 147.31,
    "guildId": "g1"
  },
  {
    "id": "u4585",
    "name": "Karan W.",
    "score": 80.64,
    "guildId": "g10"
  },
  {
    "id": "u4586",
    "name": "Isabella C.",
    "score": 22.58,
    "guildId": "g9"
  },
  {
    "id": "u4587",
    "name": "Kavya W.",
    "score": 62.5,
    "guildId": "g4"
  },
  {
    "id": "u4588",
    "name": "Ramesh M.",
    "score": 143.63,
    "guildId": "g5"
  },
  {
    "id": "u4589",
    "name": "Ananya B.",
    "score": 65.89,
    "guildId": "g1"
  },
  {
    "id": "u4590",
    "name": "Swati S.",
    "score": 116.59,
    "guildId": "g8"
  },
  {
    "id": "u4591",
    "name": "Siddharth C.",
    "score": 36.07,
    "guildId": "g6"
  },
  {
    "id": "u4592",
    "name": "Siddharth T.",
    "score": 79.65,
    "guildId": "g3"
  },
  {
    "id": "u4593",
    "name": "Akash T.",
    "score": 89.92,
    "guildId": "g5"
  },
  {
    "id": "u4594",
    "name": "Rohit V.",
    "score": 107.48,
    "guildId": "g8"
  },
  {
    "id": "u4595",
    "name": "Chen B.",
    "score": 40.32,
    "guildId": "g3"
  },
  {
    "id": "u4596",
    "name": "Luka A.",
    "score": 72.11,
    "guildId": "g5"
  },
  {
    "id": "u4597",
    "name": "Suresh P.",
    "score": 111.62,
    "guildId": "g9"
  },
  {
    "id": "u4598",
    "name": "Rahul D.",
    "score": 104.22,
    "guildId": "g5"
  },
  {
    "id": "u4599",
    "name": "Hans A.",
    "score": 105.88,
    "guildId": "g6"
  },
  {
    "id": "u4600",
    "name": "Amit R.",
    "score": 58.39,
    "guildId": "g9"
  },
  {
    "id": "u4601",
    "name": "Swati K.",
    "score": 143.8,
    "guildId": "g4"
  },
  {
    "id": "u4602",
    "name": "Ramesh R.",
    "score": 53.6,
    "guildId": "g4"
  },
  {
    "id": "u4603",
    "name": "Amit K.",
    "score": 50.68,
    "guildId": "g3"
  },
  {
    "id": "u4604",
    "name": "Swati C.",
    "score": 55.97,
    "guildId": "g7"
  },
  {
    "id": "u4605",
    "name": "Noah P.",
    "score": 35.12,
    "guildId": "g1"
  },
  {
    "id": "u4606",
    "name": "Divya M.",
    "score": 76.13,
    "guildId": "g8"
  },
  {
    "id": "u4607",
    "name": "Noah M.",
    "score": 72.55,
    "guildId": "g4"
  },
  {
    "id": "u4608",
    "name": "Vikram S.",
    "score": 29.31,
    "guildId": "g2"
  },
  {
    "id": "u4609",
    "name": "Amit T.",
    "score": 51.61,
    "guildId": "g2"
  },
  {
    "id": "u4610",
    "name": "Akash Y.",
    "score": 46.05,
    "guildId": "g6"
  },
  {
    "id": "u4611",
    "name": "Mia D.",
    "score": 14.61,
    "guildId": "g2"
  },
  {
    "id": "u4612",
    "name": "Rahul S.",
    "score": 34.18,
    "guildId": "g5"
  },
  {
    "id": "u4613",
    "name": "Ravi W.",
    "score": 17.42,
    "guildId": "g9"
  },
  {
    "id": "u4614",
    "name": "Mia C.",
    "score": 32.79,
    "guildId": "g3"
  },
  {
    "id": "u4615",
    "name": "Pooja Z.",
    "score": 16.63,
    "guildId": "g1"
  },
  {
    "id": "u4616",
    "name": "Aditya P.",
    "score": 114.96,
    "guildId": "g9"
  },
  {
    "id": "u4617",
    "name": "Ravi V.",
    "score": 107.45,
    "guildId": "g8"
  },
  {
    "id": "u4618",
    "name": "Liam B.",
    "score": 140.27,
    "guildId": "g2"
  },
  {
    "id": "u4619",
    "name": "Yuki D.",
    "score": 11.25,
    "guildId": "g4"
  },
  {
    "id": "u4620",
    "name": "Chen C.",
    "score": 99.67,
    "guildId": "g4"
  },
  {
    "id": "u4621",
    "name": "Mia B.",
    "score": 65.07,
    "guildId": "g1"
  },
  {
    "id": "u4622",
    "name": "Karan W.",
    "score": 88.82,
    "guildId": "g2"
  },
  {
    "id": "u4623",
    "name": "Pooja B.",
    "score": 144.82,
    "guildId": "g9"
  },
  {
    "id": "u4624",
    "name": "Pooja R.",
    "score": 64.98,
    "guildId": "g1"
  },
  {
    "id": "u4625",
    "name": "Aditya T.",
    "score": 38.42,
    "guildId": "g9"
  },
  {
    "id": "u4626",
    "name": "Ananya D.",
    "score": 85.07,
    "guildId": "g8"
  },
  {
    "id": "u4627",
    "name": "Pooja S.",
    "score": 105.63,
    "guildId": "g2"
  },
  {
    "id": "u4628",
    "name": "Pooja Y.",
    "score": 89.42,
    "guildId": "g1"
  },
  {
    "id": "u4629",
    "name": "Fatima A.",
    "score": 91.92,
    "guildId": "g2"
  },
  {
    "id": "u4630",
    "name": "Chen M.",
    "score": 140.65,
    "guildId": "g6"
  },
  {
    "id": "u4631",
    "name": "Amit W.",
    "score": 144.23,
    "guildId": "g2"
  },
  {
    "id": "u4632",
    "name": "Ramesh T.",
    "score": 108.02,
    "guildId": "g8"
  },
  {
    "id": "u4633",
    "name": "Siddharth W.",
    "score": 67.41,
    "guildId": "g9"
  },
  {
    "id": "u4634",
    "name": "Sneha Z.",
    "score": 79.03,
    "guildId": "g4"
  },
  {
    "id": "u4635",
    "name": "Manish M.",
    "score": 82.61,
    "guildId": "g5"
  },
  {
    "id": "u4636",
    "name": "Rohit R.",
    "score": 139.67,
    "guildId": "g8"
  },
  {
    "id": "u4637",
    "name": "Kavya S.",
    "score": 141.12,
    "guildId": "g5"
  },
  {
    "id": "u4638",
    "name": "Ravi A.",
    "score": 30.89,
    "guildId": "g9"
  },
  {
    "id": "u4639",
    "name": "Siddharth K.",
    "score": 120.87,
    "guildId": "g8"
  },
  {
    "id": "u4640",
    "name": "Hiro M.",
    "score": 82.94,
    "guildId": "g7"
  },
  {
    "id": "u4641",
    "name": "Rohit P.",
    "score": 69.41,
    "guildId": "g5"
  },
  {
    "id": "u4642",
    "name": "Ravi Z.",
    "score": 110.18,
    "guildId": "g5"
  },
  {
    "id": "u4643",
    "name": "Rahul B.",
    "score": 41.76,
    "guildId": "g4"
  },
  {
    "id": "u4644",
    "name": "Ravi A.",
    "score": 22.52,
    "guildId": "g8"
  },
  {
    "id": "u4645",
    "name": "Anjali P.",
    "score": 36.23,
    "guildId": "g3"
  },
  {
    "id": "u4646",
    "name": "Neha A.",
    "score": 95.87,
    "guildId": "g6"
  },
  {
    "id": "u4647",
    "name": "Divya R.",
    "score": 40.55,
    "guildId": "g8"
  },
  {
    "id": "u4648",
    "name": "Fatima Y.",
    "score": 136.03,
    "guildId": "g7"
  },
  {
    "id": "u4649",
    "name": "Pooja K.",
    "score": 46.39,
    "guildId": "g5"
  },
  {
    "id": "u4650",
    "name": "Rohit Y.",
    "score": 17.29,
    "guildId": "g6"
  },
  {
    "id": "u4651",
    "name": "Rahul M.",
    "score": 22.05,
    "guildId": "g1"
  },
  {
    "id": "u4652",
    "name": "Vikram A.",
    "score": 93.31,
    "guildId": "g4"
  },
  {
    "id": "u4653",
    "name": "Yuki V.",
    "score": 126.43,
    "guildId": "g5"
  },
  {
    "id": "u4654",
    "name": "Ishita M.",
    "score": 11.24,
    "guildId": "g3"
  },
  {
    "id": "u4655",
    "name": "Ramesh C.",
    "score": 84.28,
    "guildId": "g8"
  },
  {
    "id": "u4656",
    "name": "Olivia K.",
    "score": 61.58,
    "guildId": "g10"
  },
  {
    "id": "u4657",
    "name": "Rohit W.",
    "score": 104.85,
    "guildId": "g5"
  },
  {
    "id": "u4658",
    "name": "Priya W.",
    "score": 53.62,
    "guildId": "g3"
  },
  {
    "id": "u4659",
    "name": "Hiro M.",
    "score": 36.12,
    "guildId": "g2"
  },
  {
    "id": "u4660",
    "name": "Vikram P.",
    "score": 138.83,
    "guildId": "g10"
  },
  {
    "id": "u4661",
    "name": "Kavya W.",
    "score": 131.07,
    "guildId": "g10"
  },
  {
    "id": "u4662",
    "name": "Ravi K.",
    "score": 55.78,
    "guildId": "g6"
  },
  {
    "id": "u4663",
    "name": "Amit K.",
    "score": 99.61,
    "guildId": "g7"
  },
  {
    "id": "u4664",
    "name": "Kavya T.",
    "score": 23.05,
    "guildId": "g6"
  },
  {
    "id": "u4665",
    "name": "Luka Z.",
    "score": 125.31,
    "guildId": "g9"
  },
  {
    "id": "u4666",
    "name": "Hans C.",
    "score": 113.86,
    "guildId": "g8"
  },
  {
    "id": "u4667",
    "name": "Arjun K.",
    "score": 138.1,
    "guildId": "g7"
  },
  {
    "id": "u4668",
    "name": "Wei B.",
    "score": 19.42,
    "guildId": "g5"
  },
  {
    "id": "u4669",
    "name": "Greta S.",
    "score": 87.93,
    "guildId": "g2"
  },
  {
    "id": "u4670",
    "name": "Ishita A.",
    "score": 90.35,
    "guildId": "g1"
  },
  {
    "id": "u4671",
    "name": "Mia Y.",
    "score": 17.11,
    "guildId": "g5"
  },
  {
    "id": "u4672",
    "name": "Rohit D.",
    "score": 86.92,
    "guildId": "g5"
  },
  {
    "id": "u4673",
    "name": "Rohit M.",
    "score": 67.88,
    "guildId": "g10"
  },
  {
    "id": "u4674",
    "name": "Rahul M.",
    "score": 31.21,
    "guildId": "g9"
  },
  {
    "id": "u4675",
    "name": "Siddharth P.",
    "score": 36.74,
    "guildId": "g5"
  },
  {
    "id": "u4676",
    "name": "Ramesh Y.",
    "score": 63.11,
    "guildId": "g5"
  },
  {
    "id": "u4677",
    "name": "Ananya R.",
    "score": 101.01,
    "guildId": "g3"
  },
  {
    "id": "u4678",
    "name": "Hiro P.",
    "score": 103.25,
    "guildId": "g2"
  },
  {
    "id": "u4679",
    "name": "Karan V.",
    "score": 43.44,
    "guildId": "g9"
  },
  {
    "id": "u4680",
    "name": "Mia Z.",
    "score": 136.09,
    "guildId": "g1"
  },
  {
    "id": "u4681",
    "name": "Rahul T.",
    "score": 85.96,
    "guildId": "g3"
  },
  {
    "id": "u4682",
    "name": "Karan D.",
    "score": 142.4,
    "guildId": "g9"
  },
  {
    "id": "u4683",
    "name": "Ramesh V.",
    "score": 136.13,
    "guildId": "g5"
  },
  {
    "id": "u4684",
    "name": "Amit C.",
    "score": 128.53,
    "guildId": "g2"
  },
  {
    "id": "u4685",
    "name": "Siddharth K.",
    "score": 74.43,
    "guildId": "g7"
  },
  {
    "id": "u4686",
    "name": "Akash S.",
    "score": 134.7,
    "guildId": "g2"
  },
  {
    "id": "u4687",
    "name": "Amit K.",
    "score": 26.32,
    "guildId": "g7"
  },
  {
    "id": "u4688",
    "name": "Aditya W.",
    "score": 58.94,
    "guildId": "g5"
  },
  {
    "id": "u4689",
    "name": "Ishita Z.",
    "score": 84.91,
    "guildId": "g3"
  },
  {
    "id": "u4690",
    "name": "Ramesh R.",
    "score": 113.54,
    "guildId": "g1"
  },
  {
    "id": "u4691",
    "name": "Divya W.",
    "score": 13.89,
    "guildId": "g1"
  },
  {
    "id": "u4692",
    "name": "Neha Y.",
    "score": 108.56,
    "guildId": "g8"
  },
  {
    "id": "u4693",
    "name": "Siddharth W.",
    "score": 128.58,
    "guildId": "g7"
  },
  {
    "id": "u4694",
    "name": "Swati D.",
    "score": 28.33,
    "guildId": "g8"
  },
  {
    "id": "u4695",
    "name": "Vikram M.",
    "score": 59.17,
    "guildId": "g4"
  },
  {
    "id": "u4696",
    "name": "Divya D.",
    "score": 110.6,
    "guildId": "g3"
  },
  {
    "id": "u4697",
    "name": "Rahul T.",
    "score": 115.15,
    "guildId": "g8"
  },
  {
    "id": "u4698",
    "name": "Rohit Z.",
    "score": 82.92,
    "guildId": "g2"
  },
  {
    "id": "u4699",
    "name": "Manish D.",
    "score": 69.92,
    "guildId": "g6"
  },
  {
    "id": "u4700",
    "name": "Divya C.",
    "score": 148.4,
    "guildId": "g9"
  },
  {
    "id": "u4701",
    "name": "Olivia W.",
    "score": 92.7,
    "guildId": "g4"
  },
  {
    "id": "u4702",
    "name": "Isabella W.",
    "score": 32.25,
    "guildId": "g10"
  },
  {
    "id": "u4703",
    "name": "Manish T.",
    "score": 144.1,
    "guildId": "g5"
  },
  {
    "id": "u4704",
    "name": "Megha S.",
    "score": 32.05,
    "guildId": "g3"
  },
  {
    "id": "u4705",
    "name": "Vikram C.",
    "score": 96.32,
    "guildId": "g1"
  },
  {
    "id": "u4706",
    "name": "Ravi Z.",
    "score": 97.28,
    "guildId": "g2"
  },
  {
    "id": "u4707",
    "name": "Kavya M.",
    "score": 40.66,
    "guildId": "g4"
  },
  {
    "id": "u4708",
    "name": "Rahul B.",
    "score": 111.9,
    "guildId": "g9"
  },
  {
    "id": "u4709",
    "name": "Mia P.",
    "score": 40.5,
    "guildId": "g4"
  },
  {
    "id": "u4710",
    "name": "Sneha Y.",
    "score": 26.42,
    "guildId": "g3"
  },
  {
    "id": "u4711",
    "name": "Manish D.",
    "score": 121.42,
    "guildId": "g2"
  },
  {
    "id": "u4712",
    "name": "Manish D.",
    "score": 65.58,
    "guildId": "g2"
  },
  {
    "id": "u4713",
    "name": "Vikram W.",
    "score": 149.29,
    "guildId": "g6"
  },
  {
    "id": "u4714",
    "name": "Priya D.",
    "score": 148.84,
    "guildId": "g4"
  },
  {
    "id": "u4715",
    "name": "Pooja W.",
    "score": 37.96,
    "guildId": "g5"
  },
  {
    "id": "u4716",
    "name": "Suresh D.",
    "score": 140.78,
    "guildId": "g6"
  },
  {
    "id": "u4717",
    "name": "Sneha A.",
    "score": 139.34,
    "guildId": "g6"
  },
  {
    "id": "u4718",
    "name": "Arjun D.",
    "score": 43.81,
    "guildId": "g5"
  },
  {
    "id": "u4719",
    "name": "Suresh D.",
    "score": 82.03,
    "guildId": "g5"
  },
  {
    "id": "u4720",
    "name": "Siddharth V.",
    "score": 61.44,
    "guildId": "g3"
  },
  {
    "id": "u4721",
    "name": "Megha S.",
    "score": 27.08,
    "guildId": "g4"
  },
  {
    "id": "u4722",
    "name": "Arjun C.",
    "score": 130.96,
    "guildId": "g8"
  },
  {
    "id": "u4723",
    "name": "Anjali Y.",
    "score": 146.64,
    "guildId": "g9"
  },
  {
    "id": "u4724",
    "name": "Suresh A.",
    "score": 51.33,
    "guildId": "g2"
  },
  {
    "id": "u4725",
    "name": "Swati Z.",
    "score": 46.15,
    "guildId": "g2"
  },
  {
    "id": "u4726",
    "name": "Divya M.",
    "score": 16.85,
    "guildId": "g1"
  },
  {
    "id": "u4727",
    "name": "Wei T.",
    "score": 112.73,
    "guildId": "g3"
  },
  {
    "id": "u4728",
    "name": "Luka M.",
    "score": 31.67,
    "guildId": "g2"
  },
  {
    "id": "u4729",
    "name": "Amit T.",
    "score": 144.94,
    "guildId": "g2"
  },
  {
    "id": "u4730",
    "name": "Vikram W.",
    "score": 91.74,
    "guildId": "g8"
  },
  {
    "id": "u4731",
    "name": "Vikram B.",
    "score": 124.96,
    "guildId": "g4"
  },
  {
    "id": "u4732",
    "name": "Suresh D.",
    "score": 102.2,
    "guildId": "g4"
  },
  {
    "id": "u4733",
    "name": "Luka A.",
    "score": 71.56,
    "guildId": "g4"
  },
  {
    "id": "u4734",
    "name": "Priya S.",
    "score": 35.6,
    "guildId": "g9"
  },
  {
    "id": "u4735",
    "name": "Amit C.",
    "score": 133.97,
    "guildId": "g5"
  },
  {
    "id": "u4736",
    "name": "Arjun Z.",
    "score": 144.13,
    "guildId": "g2"
  },
  {
    "id": "u4737",
    "name": "Karan P.",
    "score": 78.07,
    "guildId": "g10"
  },
  {
    "id": "u4738",
    "name": "Liam C.",
    "score": 65.33,
    "guildId": "g9"
  },
  {
    "id": "u4739",
    "name": "Vikram T.",
    "score": 26.06,
    "guildId": "g5"
  },
  {
    "id": "u4740",
    "name": "John D.",
    "score": 101.61,
    "guildId": "g4"
  },
  {
    "id": "u4741",
    "name": "Ramesh D.",
    "score": 108.97,
    "guildId": "g3"
  },
  {
    "id": "u4742",
    "name": "Liam Z.",
    "score": 85.12,
    "guildId": "g6"
  },
  {
    "id": "u4743",
    "name": "Amit S.",
    "score": 130.54,
    "guildId": "g5"
  },
  {
    "id": "u4744",
    "name": "Ravi B.",
    "score": 56.17,
    "guildId": "g4"
  },
  {
    "id": "u4745",
    "name": "Swati Z.",
    "score": 136.56,
    "guildId": "g5"
  },
  {
    "id": "u4746",
    "name": "Megha P.",
    "score": 98.86,
    "guildId": "g9"
  },
  {
    "id": "u4747",
    "name": "Manish T.",
    "score": 81.92,
    "guildId": "g9"
  },
  {
    "id": "u4748",
    "name": "Pooja S.",
    "score": 82.93,
    "guildId": "g4"
  },
  {
    "id": "u4749",
    "name": "Suresh S.",
    "score": 70.95,
    "guildId": "g3"
  },
  {
    "id": "u4750",
    "name": "Aditya P.",
    "score": 52.76,
    "guildId": "g3"
  },
  {
    "id": "u4751",
    "name": "Siddharth S.",
    "score": 133.25,
    "guildId": "g9"
  },
  {
    "id": "u4752",
    "name": "Megha T.",
    "score": 47.96,
    "guildId": "g7"
  },
  {
    "id": "u4753",
    "name": "Anjali R.",
    "score": 68.33,
    "guildId": "g3"
  },
  {
    "id": "u4754",
    "name": "Swati T.",
    "score": 120.05,
    "guildId": "g8"
  },
  {
    "id": "u4755",
    "name": "Suresh S.",
    "score": 27.29,
    "guildId": "g3"
  },
  {
    "id": "u4756",
    "name": "Ishita T.",
    "score": 125.37,
    "guildId": "g1"
  },
  {
    "id": "u4757",
    "name": "Manish Y.",
    "score": 38.2,
    "guildId": "g9"
  },
  {
    "id": "u4758",
    "name": "Noah P.",
    "score": 40.05,
    "guildId": "g5"
  },
  {
    "id": "u4759",
    "name": "Emma R.",
    "score": 50.08,
    "guildId": "g6"
  },
  {
    "id": "u4760",
    "name": "Mia C.",
    "score": 11.88,
    "guildId": "g1"
  },
  {
    "id": "u4761",
    "name": "Swati B.",
    "score": 98.82,
    "guildId": "g1"
  },
  {
    "id": "u4762",
    "name": "Rohit B.",
    "score": 121.93,
    "guildId": "g6"
  },
  {
    "id": "u4763",
    "name": "Manish M.",
    "score": 75.6,
    "guildId": "g5"
  },
  {
    "id": "u4764",
    "name": "Chen W.",
    "score": 100.68,
    "guildId": "g5"
  },
  {
    "id": "u4765",
    "name": "Akash Y.",
    "score": 16.99,
    "guildId": "g9"
  },
  {
    "id": "u4766",
    "name": "Swati C.",
    "score": 29.68,
    "guildId": "g2"
  },
  {
    "id": "u4767",
    "name": "Priya S.",
    "score": 58.44,
    "guildId": "g1"
  },
  {
    "id": "u4768",
    "name": "Aditya C.",
    "score": 37.89,
    "guildId": "g2"
  },
  {
    "id": "u4769",
    "name": "Ali V.",
    "score": 17.81,
    "guildId": "g4"
  },
  {
    "id": "u4770",
    "name": "Aditya Y.",
    "score": 112.3,
    "guildId": "g9"
  },
  {
    "id": "u4771",
    "name": "Rahul P.",
    "score": 26.07,
    "guildId": "g8"
  },
  {
    "id": "u4772",
    "name": "Akash V.",
    "score": 86.28,
    "guildId": "g7"
  },
  {
    "id": "u4773",
    "name": "Hiro V.",
    "score": 63.55,
    "guildId": "g5"
  },
  {
    "id": "u4774",
    "name": "Sneha D.",
    "score": 51.77,
    "guildId": "g4"
  },
  {
    "id": "u4775",
    "name": "Yuki A.",
    "score": 97.42,
    "guildId": "g7"
  },
  {
    "id": "u4776",
    "name": "Ananya S.",
    "score": 57,
    "guildId": "g10"
  },
  {
    "id": "u4777",
    "name": "Amit S.",
    "score": 21.08,
    "guildId": "g7"
  },
  {
    "id": "u4778",
    "name": "Divya A.",
    "score": 34.06,
    "guildId": "g5"
  },
  {
    "id": "u4779",
    "name": "Megha S.",
    "score": 110.62,
    "guildId": "g10"
  },
  {
    "id": "u4780",
    "name": "Ananya P.",
    "score": 65.87,
    "guildId": "g2"
  },
  {
    "id": "u4781",
    "name": "Kavya S.",
    "score": 120.34,
    "guildId": "g9"
  },
  {
    "id": "u4782",
    "name": "Neha Y.",
    "score": 41.81,
    "guildId": "g5"
  },
  {
    "id": "u4783",
    "name": "Neha S.",
    "score": 65.65,
    "guildId": "g6"
  },
  {
    "id": "u4784",
    "name": "Vikram K.",
    "score": 124.69,
    "guildId": "g8"
  },
  {
    "id": "u4785",
    "name": "Neha B.",
    "score": 62.1,
    "guildId": "g6"
  },
  {
    "id": "u4786",
    "name": "Ananya A.",
    "score": 142.83,
    "guildId": "g5"
  },
  {
    "id": "u4787",
    "name": "Manish D.",
    "score": 86.49,
    "guildId": "g1"
  },
  {
    "id": "u4788",
    "name": "Ishita M.",
    "score": 88.32,
    "guildId": "g8"
  },
  {
    "id": "u4789",
    "name": "Rahul M.",
    "score": 40.76,
    "guildId": "g1"
  },
  {
    "id": "u4790",
    "name": "Swati B.",
    "score": 15.34,
    "guildId": "g7"
  },
  {
    "id": "u4791",
    "name": "Akash S.",
    "score": 50.29,
    "guildId": "g2"
  },
  {
    "id": "u4792",
    "name": "Isabella K.",
    "score": 128.12,
    "guildId": "g2"
  },
  {
    "id": "u4793",
    "name": "Neha P.",
    "score": 111.32,
    "guildId": "g9"
  },
  {
    "id": "u4794",
    "name": "Greta D.",
    "score": 71.54,
    "guildId": "g3"
  },
  {
    "id": "u4795",
    "name": "Greta T.",
    "score": 55.49,
    "guildId": "g1"
  },
  {
    "id": "u4796",
    "name": "Pooja P.",
    "score": 20.12,
    "guildId": "g3"
  },
  {
    "id": "u4797",
    "name": "Megha P.",
    "score": 70.15,
    "guildId": "g6"
  },
  {
    "id": "u4798",
    "name": "Akash Y.",
    "score": 65.46,
    "guildId": "g1"
  },
  {
    "id": "u4799",
    "name": "Karan S.",
    "score": 128.34,
    "guildId": "g5"
  },
  {
    "id": "u4800",
    "name": "Ravi W.",
    "score": 136.94,
    "guildId": "g9"
  },
  {
    "id": "u4801",
    "name": "Anjali A.",
    "score": 49.65,
    "guildId": "g1"
  },
  {
    "id": "u4802",
    "name": "Mia K.",
    "score": 106.03,
    "guildId": "g10"
  },
  {
    "id": "u4803",
    "name": "Ananya Y.",
    "score": 34.14,
    "guildId": "g3"
  },
  {
    "id": "u4804",
    "name": "Fatima A.",
    "score": 108.47,
    "guildId": "g6"
  },
  {
    "id": "u4805",
    "name": "Swati A.",
    "score": 82.47,
    "guildId": "g3"
  },
  {
    "id": "u4806",
    "name": "Rahul R.",
    "score": 44.21,
    "guildId": "g3"
  },
  {
    "id": "u4807",
    "name": "Hiro B.",
    "score": 77.69,
    "guildId": "g4"
  },
  {
    "id": "u4808",
    "name": "Megha Y.",
    "score": 100.14,
    "guildId": "g6"
  },
  {
    "id": "u4809",
    "name": "Rohit P.",
    "score": 98.42,
    "guildId": "g8"
  },
  {
    "id": "u4810",
    "name": "Rohit Y.",
    "score": 131.02,
    "guildId": "g8"
  },
  {
    "id": "u4811",
    "name": "Ali A.",
    "score": 67.53,
    "guildId": "g9"
  },
  {
    "id": "u4812",
    "name": "Hiro T.",
    "score": 62.95,
    "guildId": "g1"
  },
  {
    "id": "u4813",
    "name": "Ananya R.",
    "score": 91.24,
    "guildId": "g10"
  },
  {
    "id": "u4814",
    "name": "Karan Z.",
    "score": 94.12,
    "guildId": "g7"
  },
  {
    "id": "u4815",
    "name": "Suresh B.",
    "score": 17.16,
    "guildId": "g3"
  },
  {
    "id": "u4816",
    "name": "Greta D.",
    "score": 82.62,
    "guildId": "g4"
  },
  {
    "id": "u4817",
    "name": "Rahul Z.",
    "score": 67.97,
    "guildId": "g4"
  },
  {
    "id": "u4818",
    "name": "Yuki C.",
    "score": 89.13,
    "guildId": "g9"
  },
  {
    "id": "u4819",
    "name": "Rohit D.",
    "score": 34.01,
    "guildId": "g6"
  },
  {
    "id": "u4820",
    "name": "Aditya P.",
    "score": 124.23,
    "guildId": "g8"
  },
  {
    "id": "u4821",
    "name": "Akash P.",
    "score": 63.02,
    "guildId": "g6"
  },
  {
    "id": "u4822",
    "name": "John A.",
    "score": 12.78,
    "guildId": "g1"
  },
  {
    "id": "u4823",
    "name": "Suresh Y.",
    "score": 91.39,
    "guildId": "g7"
  },
  {
    "id": "u4824",
    "name": "Rohit B.",
    "score": 77.75,
    "guildId": "g8"
  },
  {
    "id": "u4825",
    "name": "Olivia Y.",
    "score": 79.89,
    "guildId": "g5"
  },
  {
    "id": "u4826",
    "name": "Kavya K.",
    "score": 42.15,
    "guildId": "g8"
  },
  {
    "id": "u4827",
    "name": "Ishita T.",
    "score": 69.64,
    "guildId": "g8"
  },
  {
    "id": "u4828",
    "name": "Kavya W.",
    "score": 38.88,
    "guildId": "g2"
  },
  {
    "id": "u4829",
    "name": "Ravi D.",
    "score": 65.39,
    "guildId": "g5"
  },
  {
    "id": "u4830",
    "name": "Vikram W.",
    "score": 112.68,
    "guildId": "g9"
  },
  {
    "id": "u4831",
    "name": "Isabella C.",
    "score": 34.79,
    "guildId": "g4"
  },
  {
    "id": "u4832",
    "name": "Swati A.",
    "score": 107.98,
    "guildId": "g9"
  },
  {
    "id": "u4833",
    "name": "Neha Z.",
    "score": 54.76,
    "guildId": "g7"
  },
  {
    "id": "u4834",
    "name": "Ravi K.",
    "score": 87.5,
    "guildId": "g7"
  },
  {
    "id": "u4835",
    "name": "Kavya D.",
    "score": 75,
    "guildId": "g6"
  },
  {
    "id": "u4836",
    "name": "Pooja P.",
    "score": 73.06,
    "guildId": "g2"
  },
  {
    "id": "u4837",
    "name": "Chen T.",
    "score": 43.6,
    "guildId": "g6"
  },
  {
    "id": "u4838",
    "name": "Aditya B.",
    "score": 149.19,
    "guildId": "g7"
  },
  {
    "id": "u4839",
    "name": "Hiro V.",
    "score": 37.88,
    "guildId": "g5"
  },
  {
    "id": "u4840",
    "name": "Swati P.",
    "score": 148.19,
    "guildId": "g9"
  },
  {
    "id": "u4841",
    "name": "Rahul R.",
    "score": 20.05,
    "guildId": "g1"
  },
  {
    "id": "u4842",
    "name": "Amit A.",
    "score": 51.32,
    "guildId": "g6"
  },
  {
    "id": "u4843",
    "name": "Neha A.",
    "score": 138.13,
    "guildId": "g2"
  },
  {
    "id": "u4844",
    "name": "Rahul S.",
    "score": 98.5,
    "guildId": "g10"
  },
  {
    "id": "u4845",
    "name": "Rohit T.",
    "score": 28.95,
    "guildId": "g6"
  },
  {
    "id": "u4846",
    "name": "Suresh D.",
    "score": 35.08,
    "guildId": "g8"
  },
  {
    "id": "u4847",
    "name": "Anjali K.",
    "score": 110.78,
    "guildId": "g5"
  },
  {
    "id": "u4848",
    "name": "Rahul K.",
    "score": 133.53,
    "guildId": "g5"
  },
  {
    "id": "u4849",
    "name": "Amit V.",
    "score": 106.87,
    "guildId": "g3"
  },
  {
    "id": "u4850",
    "name": "Pooja M.",
    "score": 130.98,
    "guildId": "g4"
  },
  {
    "id": "u4851",
    "name": "Chen S.",
    "score": 110.1,
    "guildId": "g4"
  },
  {
    "id": "u4852",
    "name": "Priya B.",
    "score": 149.82,
    "guildId": "g4"
  },
  {
    "id": "u4853",
    "name": "Mateo T.",
    "score": 144.94,
    "guildId": "g7"
  },
  {
    "id": "u4854",
    "name": "Wei A.",
    "score": 122.52,
    "guildId": "g8"
  },
  {
    "id": "u4855",
    "name": "Ishita M.",
    "score": 105.25,
    "guildId": "g3"
  },
  {
    "id": "u4856",
    "name": "Amit Y.",
    "score": 33.32,
    "guildId": "g3"
  },
  {
    "id": "u4857",
    "name": "Ravi Z.",
    "score": 101.21,
    "guildId": "g9"
  },
  {
    "id": "u4858",
    "name": "Vikram T.",
    "score": 50.01,
    "guildId": "g7"
  },
  {
    "id": "u4859",
    "name": "Yuki M.",
    "score": 25.91,
    "guildId": "g3"
  },
  {
    "id": "u4860",
    "name": "Mateo T.",
    "score": 50.35,
    "guildId": "g4"
  },
  {
    "id": "u4861",
    "name": "Pooja W.",
    "score": 21.13,
    "guildId": "g3"
  },
  {
    "id": "u4862",
    "name": "Vikram M.",
    "score": 28.18,
    "guildId": "g10"
  },
  {
    "id": "u4863",
    "name": "Megha B.",
    "score": 50.34,
    "guildId": "g10"
  },
  {
    "id": "u4864",
    "name": "Mia Y.",
    "score": 134.29,
    "guildId": "g8"
  },
  {
    "id": "u4865",
    "name": "Neha S.",
    "score": 62.88,
    "guildId": "g5"
  },
  {
    "id": "u4866",
    "name": "Neha B.",
    "score": 98.61,
    "guildId": "g6"
  },
  {
    "id": "u4867",
    "name": "Manish P.",
    "score": 110.33,
    "guildId": "g5"
  },
  {
    "id": "u4868",
    "name": "Aditya Y.",
    "score": 146.18,
    "guildId": "g6"
  },
  {
    "id": "u4869",
    "name": "Anjali M.",
    "score": 131.58,
    "guildId": "g8"
  },
  {
    "id": "u4870",
    "name": "Suresh V.",
    "score": 22.85,
    "guildId": "g3"
  },
  {
    "id": "u4871",
    "name": "Ramesh W.",
    "score": 71.2,
    "guildId": "g2"
  },
  {
    "id": "u4872",
    "name": "Hiro W.",
    "score": 78.21,
    "guildId": "g8"
  },
  {
    "id": "u4873",
    "name": "Rohit D.",
    "score": 35.32,
    "guildId": "g3"
  },
  {
    "id": "u4874",
    "name": "Anjali W.",
    "score": 34.7,
    "guildId": "g9"
  },
  {
    "id": "u4875",
    "name": "Divya C.",
    "score": 73.95,
    "guildId": "g4"
  },
  {
    "id": "u4876",
    "name": "Arjun Y.",
    "score": 74.42,
    "guildId": "g1"
  },
  {
    "id": "u4877",
    "name": "Wei K.",
    "score": 26.61,
    "guildId": "g8"
  },
  {
    "id": "u4878",
    "name": "Isabella K.",
    "score": 22.88,
    "guildId": "g7"
  },
  {
    "id": "u4879",
    "name": "Kavya R.",
    "score": 107.31,
    "guildId": "g9"
  },
  {
    "id": "u4880",
    "name": "Suresh S.",
    "score": 106.3,
    "guildId": "g4"
  },
  {
    "id": "u4881",
    "name": "Priya Y.",
    "score": 81.66,
    "guildId": "g10"
  },
  {
    "id": "u4882",
    "name": "Ravi T.",
    "score": 113.03,
    "guildId": "g9"
  },
  {
    "id": "u4883",
    "name": "Sneha P.",
    "score": 121.28,
    "guildId": "g1"
  },
  {
    "id": "u4884",
    "name": "Ali B.",
    "score": 143.02,
    "guildId": "g6"
  },
  {
    "id": "u4885",
    "name": "Sneha Z.",
    "score": 142.54,
    "guildId": "g1"
  },
  {
    "id": "u4886",
    "name": "Ramesh T.",
    "score": 96.65,
    "guildId": "g2"
  },
  {
    "id": "u4887",
    "name": "Kavya S.",
    "score": 103.1,
    "guildId": "g4"
  },
  {
    "id": "u4888",
    "name": "Divya T.",
    "score": 120.56,
    "guildId": "g4"
  },
  {
    "id": "u4889",
    "name": "Ananya C.",
    "score": 112.95,
    "guildId": "g1"
  },
  {
    "id": "u4890",
    "name": "Neha P.",
    "score": 98.41,
    "guildId": "g8"
  },
  {
    "id": "u4891",
    "name": "Ishita T.",
    "score": 108.57,
    "guildId": "g5"
  },
  {
    "id": "u4892",
    "name": "Manish A.",
    "score": 104.01,
    "guildId": "g7"
  },
  {
    "id": "u4893",
    "name": "Priya K.",
    "score": 60.96,
    "guildId": "g10"
  },
  {
    "id": "u4894",
    "name": "Neha Z.",
    "score": 30.05,
    "guildId": "g10"
  },
  {
    "id": "u4895",
    "name": "Mateo V.",
    "score": 125.66,
    "guildId": "g5"
  },
  {
    "id": "u4896",
    "name": "Megha Z.",
    "score": 68.52,
    "guildId": "g4"
  },
  {
    "id": "u4897",
    "name": "Ishita T.",
    "score": 106.63,
    "guildId": "g9"
  },
  {
    "id": "u4898",
    "name": "Manish P.",
    "score": 135.11,
    "guildId": "g5"
  },
  {
    "id": "u4899",
    "name": "Kavya V.",
    "score": 32.52,
    "guildId": "g2"
  },
  {
    "id": "u4900",
    "name": "Ramesh B.",
    "score": 118.11,
    "guildId": "g8"
  },
  {
    "id": "u4901",
    "name": "Karan M.",
    "score": 140.8,
    "guildId": "g6"
  },
  {
    "id": "u4902",
    "name": "Suresh B.",
    "score": 95.06,
    "guildId": "g6"
  },
  {
    "id": "u4903",
    "name": "Suresh Y.",
    "score": 61.44,
    "guildId": "g9"
  },
  {
    "id": "u4904",
    "name": "Karan P.",
    "score": 143.01,
    "guildId": "g7"
  },
  {
    "id": "u4905",
    "name": "Amit C.",
    "score": 126.06,
    "guildId": "g2"
  },
  {
    "id": "u4906",
    "name": "Divya M.",
    "score": 95.91,
    "guildId": "g2"
  },
  {
    "id": "u4907",
    "name": "Mia Y.",
    "score": 20.46,
    "guildId": "g3"
  },
  {
    "id": "u4908",
    "name": "Priya M.",
    "score": 78.48,
    "guildId": "g2"
  },
  {
    "id": "u4909",
    "name": "Chen M.",
    "score": 67.65,
    "guildId": "g6"
  },
  {
    "id": "u4910",
    "name": "Amit B.",
    "score": 74.69,
    "guildId": "g1"
  },
  {
    "id": "u4911",
    "name": "Yuki M.",
    "score": 92.69,
    "guildId": "g9"
  },
  {
    "id": "u4912",
    "name": "Manish K.",
    "score": 109.45,
    "guildId": "g9"
  },
  {
    "id": "u4913",
    "name": "Karan C.",
    "score": 55.84,
    "guildId": "g4"
  },
  {
    "id": "u4914",
    "name": "Hans Y.",
    "score": 77.5,
    "guildId": "g7"
  },
  {
    "id": "u4915",
    "name": "Chen T.",
    "score": 55.64,
    "guildId": "g10"
  },
  {
    "id": "u4916",
    "name": "Neha V.",
    "score": 51.14,
    "guildId": "g6"
  },
  {
    "id": "u4917",
    "name": "Karan T.",
    "score": 41.55,
    "guildId": "g9"
  },
  {
    "id": "u4918",
    "name": "Rohit T.",
    "score": 124.75,
    "guildId": "g6"
  },
  {
    "id": "u4919",
    "name": "Rohit D.",
    "score": 19.2,
    "guildId": "g8"
  },
  {
    "id": "u4920",
    "name": "Divya T.",
    "score": 70.09,
    "guildId": "g8"
  },
  {
    "id": "u4921",
    "name": "Priya V.",
    "score": 67.43,
    "guildId": "g4"
  },
  {
    "id": "u4922",
    "name": "Anjali R.",
    "score": 139.51,
    "guildId": "g2"
  },
  {
    "id": "u4923",
    "name": "Luka K.",
    "score": 69.26,
    "guildId": "g5"
  },
  {
    "id": "u4924",
    "name": "Rohit D.",
    "score": 91.09,
    "guildId": "g2"
  },
  {
    "id": "u4925",
    "name": "Karan P.",
    "score": 15.67,
    "guildId": "g7"
  },
  {
    "id": "u4926",
    "name": "Aditya A.",
    "score": 48.11,
    "guildId": "g3"
  },
  {
    "id": "u4927",
    "name": "Karan R.",
    "score": 30.99,
    "guildId": "g10"
  },
  {
    "id": "u4928",
    "name": "Isabella W.",
    "score": 81.54,
    "guildId": "g4"
  },
  {
    "id": "u4929",
    "name": "Rohit T.",
    "score": 42.91,
    "guildId": "g6"
  },
  {
    "id": "u4930",
    "name": "Luka R.",
    "score": 116.21,
    "guildId": "g1"
  },
  {
    "id": "u4931",
    "name": "Rahul K.",
    "score": 22.56,
    "guildId": "g9"
  },
  {
    "id": "u4932",
    "name": "Rahul Y.",
    "score": 140.72,
    "guildId": "g7"
  },
  {
    "id": "u4933",
    "name": "Karan B.",
    "score": 87.56,
    "guildId": "g1"
  },
  {
    "id": "u4934",
    "name": "Suresh Y.",
    "score": 22.22,
    "guildId": "g7"
  },
  {
    "id": "u4935",
    "name": "Amit D.",
    "score": 62.32,
    "guildId": "g6"
  },
  {
    "id": "u4936",
    "name": "Arjun Y.",
    "score": 18.15,
    "guildId": "g9"
  },
  {
    "id": "u4937",
    "name": "Arjun R.",
    "score": 62.63,
    "guildId": "g8"
  },
  {
    "id": "u4938",
    "name": "Anjali S.",
    "score": 99.97,
    "guildId": "g4"
  },
  {
    "id": "u4939",
    "name": "Pooja P.",
    "score": 74.82,
    "guildId": "g5"
  },
  {
    "id": "u4940",
    "name": "Rohit D.",
    "score": 35.08,
    "guildId": "g8"
  },
  {
    "id": "u4941",
    "name": "Sneha K.",
    "score": 26.72,
    "guildId": "g9"
  },
  {
    "id": "u4942",
    "name": "Ishita R.",
    "score": 33.64,
    "guildId": "g1"
  },
  {
    "id": "u4943",
    "name": "Swati D.",
    "score": 23.51,
    "guildId": "g4"
  },
  {
    "id": "u4944",
    "name": "Vikram Y.",
    "score": 82.98,
    "guildId": "g1"
  },
  {
    "id": "u4945",
    "name": "Neha R.",
    "score": 116,
    "guildId": "g1"
  },
  {
    "id": "u4946",
    "name": "Hiro K.",
    "score": 118.13,
    "guildId": "g1"
  },
  {
    "id": "u4947",
    "name": "Aditya T.",
    "score": 77.15,
    "guildId": "g4"
  },
  {
    "id": "u4948",
    "name": "Olivia P.",
    "score": 23.56,
    "guildId": "g9"
  },
  {
    "id": "u4949",
    "name": "Hans M.",
    "score": 120.02,
    "guildId": "g10"
  },
  {
    "id": "u4950",
    "name": "Priya W.",
    "score": 32.59,
    "guildId": "g3"
  },
  {
    "id": "u4951",
    "name": "Liam V.",
    "score": 139.92,
    "guildId": "g9"
  },
  {
    "id": "u4952",
    "name": "Emma P.",
    "score": 112.33,
    "guildId": "g6"
  },
  {
    "id": "u4953",
    "name": "Neha T.",
    "score": 64.64,
    "guildId": "g9"
  },
  {
    "id": "u4954",
    "name": "Aditya Z.",
    "score": 66.04,
    "guildId": "g4"
  },
  {
    "id": "u4955",
    "name": "Megha R.",
    "score": 14.24,
    "guildId": "g7"
  },
  {
    "id": "u4956",
    "name": "Anjali A.",
    "score": 51.61,
    "guildId": "g1"
  },
  {
    "id": "u4957",
    "name": "Sneha Z.",
    "score": 79.33,
    "guildId": "g10"
  },
  {
    "id": "u4958",
    "name": "Karan Z.",
    "score": 26.55,
    "guildId": "g9"
  },
  {
    "id": "u4959",
    "name": "Amit M.",
    "score": 65.73,
    "guildId": "g7"
  },
  {
    "id": "u4960",
    "name": "Suresh V.",
    "score": 46.11,
    "guildId": "g8"
  },
  {
    "id": "u4961",
    "name": "Swati V.",
    "score": 27.87,
    "guildId": "g5"
  },
  {
    "id": "u4962",
    "name": "Emma D.",
    "score": 144.01,
    "guildId": "g6"
  },
  {
    "id": "u4963",
    "name": "Karan W.",
    "score": 18,
    "guildId": "g8"
  },
  {
    "id": "u4964",
    "name": "Megha A.",
    "score": 143.71,
    "guildId": "g9"
  },
  {
    "id": "u4965",
    "name": "Suresh P.",
    "score": 80.33,
    "guildId": "g7"
  },
  {
    "id": "u4966",
    "name": "Suresh Y.",
    "score": 100.79,
    "guildId": "g1"
  },
  {
    "id": "u4967",
    "name": "Anjali S.",
    "score": 20.96,
    "guildId": "g1"
  },
  {
    "id": "u4968",
    "name": "Amit C.",
    "score": 77.27,
    "guildId": "g1"
  },
  {
    "id": "u4969",
    "name": "Arjun A.",
    "score": 132.22,
    "guildId": "g3"
  },
  {
    "id": "u4970",
    "name": "Ravi K.",
    "score": 126.25,
    "guildId": "g10"
  },
  {
    "id": "u4971",
    "name": "Arjun W.",
    "score": 68.14,
    "guildId": "g4"
  },
  {
    "id": "u4972",
    "name": "Megha S.",
    "score": 30.56,
    "guildId": "g6"
  },
  {
    "id": "u4973",
    "name": "Siddharth T.",
    "score": 67.13,
    "guildId": "g3"
  },
  {
    "id": "u4974",
    "name": "Mateo V.",
    "score": 125.71,
    "guildId": "g8"
  },
  {
    "id": "u4975",
    "name": "Ramesh R.",
    "score": 34.99,
    "guildId": "g3"
  },
  {
    "id": "u4976",
    "name": "Siddharth D.",
    "score": 133.44,
    "guildId": "g3"
  },
  {
    "id": "u4977",
    "name": "Priya M.",
    "score": 121.93,
    "guildId": "g3"
  },
  {
    "id": "u4978",
    "name": "Karan Y.",
    "score": 47.55,
    "guildId": "g7"
  },
  {
    "id": "u4979",
    "name": "Arjun V.",
    "score": 146.81,
    "guildId": "g6"
  },
  {
    "id": "u4980",
    "name": "Divya Y.",
    "score": 99.76,
    "guildId": "g10"
  },
  {
    "id": "u4981",
    "name": "Rohit Z.",
    "score": 10.03,
    "guildId": "g4"
  },
  {
    "id": "u4982",
    "name": "Divya K.",
    "score": 99.61,
    "guildId": "g6"
  },
  {
    "id": "u4983",
    "name": "Megha B.",
    "score": 91.61,
    "guildId": "g3"
  },
  {
    "id": "u4984",
    "name": "Swati B.",
    "score": 83.25,
    "guildId": "g7"
  },
  {
    "id": "u4985",
    "name": "John W.",
    "score": 81.33,
    "guildId": "g4"
  },
  {
    "id": "u4986",
    "name": "Swati K.",
    "score": 57.65,
    "guildId": "g8"
  },
  {
    "id": "u4987",
    "name": "Hiro K.",
    "score": 107.55,
    "guildId": "g9"
  },
  {
    "id": "u4988",
    "name": "Rohit D.",
    "score": 121.6,
    "guildId": "g8"
  },
  {
    "id": "u4989",
    "name": "Mia T.",
    "score": 97.04,
    "guildId": "g5"
  },
  {
    "id": "u4990",
    "name": "Arjun M.",
    "score": 125.67,
    "guildId": "g1"
  },
  {
    "id": "u4991",
    "name": "Luka V.",
    "score": 27.43,
    "guildId": "g6"
  },
  {
    "id": "u4992",
    "name": "Swati Z.",
    "score": 50.07,
    "guildId": "g1"
  },
  {
    "id": "u4993",
    "name": "Ananya B.",
    "score": 62.56,
    "guildId": "g6"
  },
  {
    "id": "u4994",
    "name": "Ananya T.",
    "score": 19.71,
    "guildId": "g6"
  },
  {
    "id": "u4995",
    "name": "Vikram K.",
    "score": 61.32,
    "guildId": "g9"
  },
  {
    "id": "u4996",
    "name": "Megha Y.",
    "score": 66.52,
    "guildId": "g1"
  },
  {
    "id": "u4997",
    "name": "Priya Z.",
    "score": 24.33,
    "guildId": "g10"
  },
  {
    "id": "u4998",
    "name": "Priya K.",
    "score": 112.5,
    "guildId": "g2"
  },
  {
    "id": "u4999",
    "name": "Ramesh B.",
    "score": 36.78,
    "guildId": "g1"
  }
];
