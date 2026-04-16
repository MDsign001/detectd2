export type Program = {
  name: string;
  desc: string;
  settings: Record<string, string>;
};

export const programs: Program[] = [
  {
    name: "BREEZE",
    desc: "Twijfel? Gewoon graven 😄",
    settings: {
      Gevoeligheid: "95",
      Reactietijd: "3",
      Discriminatie: "Laag",
      Toonhoogte: "Medium",
    },
  },
  {
    name: "SNIPER",
    desc: "Zo scherp dat muntjes zich vrijwillig overgeven.",
    settings: {
      Gevoeligheid: "98",
      Reactietijd: "2",
      Discriminatie: "Hoog",
      Toonhoogte: "Hoog",
    },
  },
];
