export type ToneBreak = {
  n: number;
  id?: string;
  hz?: string;
  vol: string;
};

export type EqBand = { f: string; db: number };

export type Program = {
  id: number;
  name: string;
  tagline: string; // verving voor "author" — pakkende NL spreuk
  version: string;
  description: string;
  settings?: Record<string, string>;
  audio?: Record<string, string>;
  eq?: EqBand[];
  tones?: ToneBreak[];
  notes?: string[];
  motto: string; // verving voor credit — komische/motiverende NL tekst
};

export const programs: Program[] = [
  {
    id: 1,
    name: "BREEZE",
    tagline: "Twijfel? Gewoon graven",
    version: "v.All",
    description:
      "Maakt het spel simpel: piep = schep. In een mum van tijd onder de knie en perfect voor de ontspannen detect-dag.",
    settings: {
      "Basisprogramma": "4 Fast",
      "Gevoeligheid": "95*",
      "Reactietijd": "3",
      "Silencer": "2",
      "Discriminatie": "10",
      "B.Caps": "Uit",
      "Notch": "Uit",
      "Freq. Max": "40.0 kHz",
    },
    audio: {
      "Audio Response": "4",
      "Audio Type": "High Square",
      "Tonen": "Pitch",
      "IJzer Volume": "7",
    },
    eq: [
      { f: "150", db: -12 },
      { f: "450", db: -3 },
      { f: "2K", db: 3 },
      { f: "4K", db: 12 },
    ],
    notes: [
      "* Pas de gevoeligheid aan op de omgeving.",
      "** Stem de equalizer af op je gehoor.",
    ],
    motto: "90% rommel, 10% magie — en die 10% maakt alles goed.",
  },
  {
    id: 2,
    name: "SNIPER",
    tagline: "Zo scherp dat muntjes zich verstoppen",
    version: "v1.1",
    description:
      "Een sterke allrounder: diep, stabiel en met haarscherpe scheiding van signalen. Voor wie het naadje van de kous wil.",
    settings: {
      "Basisprogramma": "1 General",
      "Gevoeligheid": "97–99",
      "Reactietijd": "2",
      "Silencer": "0",
      "B.Caps": "0",
      "Notch": "Uit",
      "Freq. Max": "40 kHz",
      "Grond Stabilisatie": "1",
    },
    audio: {
      "Audio Response": "4",
      "Audio Type": "PWM",
      "Tonen": "5 Tonen",
      "Audio Filter": "0",
      "IJzer Volume": "7",
    },
    tones: [
      { n: 1, id: "-6.4", hz: "202Hz", vol: "7" },
      { n: 2, id: "10", hz: "202Hz", vol: "10" },
      { n: 3, id: "50", hz: "603Hz", vol: "10" },
      { n: 4, id: "72", hz: "725Hz", vol: "10" },
      { n: 5, id: "—", hz: "853Hz", vol: "10" },
    ],
    notes: ["Wat hier niet genoemd wordt: laat staan op standaard."],
    motto: "Geduld is de beste vriend van een metaaldetectorist.",
  },
  {
    id: 3,
    name: "JETHRO",
    tagline: "Diep en doortastend",
    version: "v2.0",
    description: "Een diepgaande allrounder voor wie altijd net iets dieper wil.",
    settings: {
      "Basisprogramma": "10 Diving",
      "Gevoeligheid": "90–95",
      "Reactietijd": "2.5",
      "Silencer": "0",
      "Discriminatie": "0",
      "B.Caps": "0",
      "Notch": "Uit",
      "Freq. Max": "24.0 kHz",
      "Zout Gevoeligheid": "7",
      "Offset": "15",
    },
    audio: {
      "Audio Response": "5",
      "Audio Type": "PWM",
      "Tonen": "Full Tones",
      "Audio Filter": "3",
      "IJzer Volume": "1",
    },
    tones: [
      { n: 1, id: "0.0", vol: "1" },
      { n: 2, id: "08", vol: "5" },
      { n: 3, id: "30", vol: "10" },
      { n: 4, id: "85", vol: "10" },
      { n: 5, id: "99", vol: "10" },
    ],
    notes: ["Wat hier niet genoemd wordt: laat staan op standaard."],
    motto: "De grond liegt nooit. Soms mompelt hij alleen wat zachtjes.",
  },
  {
    id: 4,
    name: "RAIDER PRO",
    tagline: "Stille kracht",
    version: "v2.0",
    description:
      "Volledige tonen met een rustiger, stiller zoekgevoel — minder grondrumoer, meer focus op echte signalen.",
    settings: {
      "Basisprogramma": "3 SensiFT",
      "Gevoeligheid": "98",
      "Reactietijd": "2.5",
      "Silencer": "0",
      "B.Caps": "0",
      "Notch": "00–00",
      "Freq. Max": "40 kHz",
      "Grond Stabilisatie": "2",
      "Offset": "10",
      "Discriminatie": "6",
    },
    audio: {
      "Audio Response": "5",
      "Audio Type": "High Square",
      "Tonen": "Full Tones",
      "Audio Filter": "0",
      "IJzer Volume": "9",
    },
    eq: [
      { f: "150", db: 6 },
      { f: "450", db: 9 },
      { f: "2K", db: 9 },
      { f: "4K", db: 3 },
    ],
    notes: [
      "Zet toon 2 op een break van 30.",
      "Wat hier niet genoemd wordt: laat staan op standaard.",
    ],
    motto: "Loop traag. De grond gaat nergens heen.",
  },
  {
    id: 5,
    name: "TEKKNA",
    tagline: "Werkt niet — maar werkt wel",
    version: "v2.0",
    description:
      "Instellingen die niet zouden moeten werken, maar het toch doen. Speciaal voor zwaar ijzervervuilde sites zoals Romeinse plekken.",
    settings: {
      "Basisprogramma": "SensiFT",
      "Gevoeligheid": "95",
      "Reactietijd": "3",
      "Silencer": "0",
      "Discriminatie": "42",
      "B.Caps": "Uit",
      "Freq. Max": "40.0 kHz",
      "IJzer Volume": "10",
      "Offset": "10",
    },
    audio: {
      "Audio Response": "4",
      "Audio Type": "High Square",
      "Tonen": "Full Tones",
    },
    notes: ["Wat hier niet genoemd wordt: laat staan op standaard."],
    motto: "Een kroonkurk vandaag, een gouden ring morgen.",
  },
  {
    id: 6,
    name: "FORAGER",
    tagline: "Helder in het lawaai",
    version: "v1.1",
    description:
      "Betere ijzerdiscriminatie en meer diepte. Verbeterde scheiding en kraakheldere signalen op hoge geleiders.",
    settings: {
      "Basisprogramma": "General",
      "Gevoeligheid": "93",
      "Reactietijd": "2.5",
      "Silencer": "2",
      "Discriminatie": "7.4",
      "B.Caps": "3",
      "Freq. Max": "24.0 kHz",
      "Grond Stabilisatie": "1",
    },
    audio: {
      "Audio Response": "5",
      "Audio Type": "PWM",
      "Tonen": "3 Tonen",
      "Audio Filter": "0",
    },
    eq: [
      { f: "150", db: 9 },
      { f: "450", db: 3 },
      { f: "2K", db: 0 },
      { f: "4K", db: 6 },
    ],
    tones: [
      { n: 1, id: "7.4", hz: "202Hz", vol: "7" },
      { n: 2, id: "73", hz: "475Hz", vol: "10" },
      { n: 3, id: "—", hz: "951Hz", vol: "10" },
    ],
    notes: ["Wat hier niet genoemd wordt: laat staan op standaard."],
    motto: "Twee keer over dezelfde plek? Drie keer is beter.",
  },
  {
    id: 7,
    name: "FORAGER 3",
    tagline: "Doorweekt? Geen probleem",
    version: "v3.1",
    description:
      "Ideaal voor natte of verzadigde grond. Zet je koptelefoon iets harder en hoor de fijnste signalen.",
    settings: {
      "Basisprogramma": "1 General",
      "Gevoeligheid": "94*",
      "Reactietijd": "2.5",
      "Silencer": "1",
      "Discriminatie": "7.9",
      "B.Caps": "3",
      "Notch": "Uit",
      "Freq. Max": "40.0 kHz",
      "Grond Stabilisatie": "2",
      "Gnd/IJzer Break": "-0.3",
    },
    audio: {
      "Audio Response": "5",
      "Audio Type": "PWM",
      "Tonen": "4 Tonen",
      "Audio Filter": "1",
      "IJzer Volume": "9",
    },
    eq: [
      { f: "150", db: 9 },
      { f: "450", db: 3 },
      { f: "2K", db: 0 },
      { f: "4K", db: 6 },
    ],
    tones: [
      { n: 1, id: "7.9", hz: "193Hz", vol: "9" },
      { n: 2, id: "38", hz: "289Hz", vol: "8" },
      { n: 3, id: "73", hz: "687Hz", vol: "10" },
      { n: 4, id: "73+", hz: "961Hz", vol: "10" },
    ],
    notes: ["* Pas de gevoeligheid aan op je omgeving."],
    motto: "Natte laarzen, droge humor — en een volle vondstentas.",
  },
  {
    id: 8,
    name: "LEGACY",
    tagline: "Schoon, herhaalbaar, raak",
    version: "v2.0",
    description:
      "Graaf alleen schone, herhaalbare doelen — uit meerdere richtingen bevestigd.",
    settings: {
      "Notch": "23–27",
      "Freq. Max": "24.0 kHz",
      "Grond Stabilisatie": "2",
    },
    audio: { "Audio Response": "5", "Audio Type": "PWM" },
    eq: [{ f: "4K", db: 6 }],
    tones: [
      { n: 1, id: "3.3", hz: "211Hz", vol: "0" },
      { n: 2, id: "33", hz: "197Hz", vol: "10" },
      { n: 3, id: "55", hz: "630Hz", vol: "10" },
      { n: 4, id: "73", hz: "687Hz", vol: "10" },
      { n: 5, id: "73+", hz: "961Hz", vol: "10" },
    ],
    notes: ["Wat hier niet genoemd wordt: laat staan op standaard."],
    motto: "De beste vondst is altijd de volgende.",
  },
  {
    id: 9,
    name: "LEGACY",
    tagline: "Door ijzer heen kijken",
    version: "v3.1",
    description:
      "Schone, herhaalbare doelen. Werkt rond ijzermaskering en levert diep én helder resultaat.",
    settings: {
      "Basisprogramma": "2 Sensitive",
      "Gevoeligheid": "94*",
      "Reactietijd": "3**",
      "Silencer": "0***",
      "Discriminatie": "5.5",
      "B.Caps": "3",
      "Notch": "23–32",
      "Freq. Max": "24.0 kHz",
      "Grond Stabilisatie": "2",
      "Gnd/IJzer Break": "-0.4",
    },
    audio: {
      "Audio Response": "5",
      "Audio Type": "PWM",
      "Tonen": "5 Tonen",
      "Audio Filter": "0",
      "IJzer Volume": "10",
    },
    eq: [
      { f: "150", db: 9 },
      { f: "450", db: 3 },
      { f: "2K", db: 0 },
      { f: "4K", db: 6 },
    ],
    tones: [
      { n: 1, id: "5.5", hz: "193Hz", vol: "10" },
      { n: 2, id: "32", hz: "202Hz", vol: "10" },
      { n: 3, id: "56", hz: "513Hz", vol: "10" },
      { n: 4, id: "73", hz: "687Hz", vol: "10" },
      { n: 5, id: "73+", hz: "961Hz", vol: "10" },
    ],
    notes: [
      "* Verlaag gevoeligheid bij een onrustige omgeving.",
      "** Pas alleen omlaag aan als de grond rustig is.",
      "*** HF2 spoel kan in gemineraliseerde grond hoger gezet worden.",
    ],
    motto: "Vul je gaten dicht — de natuur en de boer danken je.",
  },
];
