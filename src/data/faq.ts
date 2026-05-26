// Text fields may contain inline links in markdown form: [label](https://url)
// These are parsed and rendered as <a> in the FAQ page.

export type FaqEntry = {
  id: string;
  subtitle: string;
  question: string;
  intro: string;
  sections?: { heading: string; bullets?: string[]; paragraph?: string }[];
  table?: { headers: string[]; rows: string[][] };
  closing?: string;
  source: { label: string; text: string };
};

const DEUS = "[XP Deus II](https://www.detect.nl/nl/xp-deus-2/)";

export const faq: FaqEntry[] = [
  {
    id: "beginners",
    subtitle:
      "Nieuwe hobbyisten willen weten of deze detector gebruiksvriendelijk genoeg is om mee te starten.",
    question: "Is de XP Deus II een goede metaaldetector voor beginners?",
    intro: `Ja, de ${DEUS} is ondanks zijn geavanceerde mogelijkheden verrassend toegankelijk voor beginners.`,
    sections: [
      {
        heading: "Belangrijke voordelen voor starters",
        bullets: [
          "Lichtgewicht ontwerp voor lange zoeksessies",
          "Volledig draadloos systeem",
          "Eenvoudige basisbediening",
          "Vooraf ingestelde zoekprogramma's",
          "Uitstekende target separation",
        ],
      },
    ],
    closing:
      "Wel heeft de Deus II een leercurve. Beginners die bereid zijn tijd te investeren in oefenen en instellingen begrijpen, halen snel veel uit het toestel.",
    source: {
      label: "Bronverificatie",
      text: "Specificaties bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "vergelijking",
    subtitle:
      "Kopers vergelijken verschillende merken en modellen voordat ze investeren.",
    question:
      "Hoe presteert de XP Deus II vergeleken met andere high-end metaaldetectoren?",
    intro: `De ${DEUS} behoort tot de absolute topklasse van moderne metaaldetectoren.`,
    table: {
      headers: ["Eigenschap", "XP Deus II", "Veel concurrenten"],
      rows: [
        ["Gewicht", "Zeer licht", "Vaak zwaarder"],
        ["Draadloos", "Volledig draadloos", "Vaak deels bekabeld"],
        ["Multifrequentie", "FMF simultaan", "Niet altijd simultaan"],
      ],
    },
    source: {
      label: "Bronverificatie",
      text: "Vergelijkingen gebaseerd op officiële productspecificaties van fabrikanten.",
    },
  },
  {
    id: "goud",
    subtitle:
      "Schatzoekers willen weten of de detector geschikt is voor goudvondsten.",
    question: "Kan de XP Deus II goud detecteren?",
    intro: `Ja, de ${DEUS} kan goud detecteren, inclusief kleine sieraden en sommige natuurlijke goudfragmenten.`,
    sections: [
      {
        heading: "Dankzij simultane multifrequentie",
        paragraph:
          "De detector blijft gevoelig voor zowel kleine als diepe targets.",
      },
      {
        heading: "Veelgevonden goudobjecten",
        bullets: ["Gouden ringen", "Kettingen", "Munten", "Kleine sieraden"],
      },
    ],
    closing:
      "Voor goud zoeken gebruiken veel detectoristen hogere frequenties en lage discriminatie-instellingen.",
    source: {
      label: "Bronverificatie",
      text: "Technische specificaties bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "metalen",
    subtitle: "Begrijpen welke metaalsoorten de detector kan identificeren.",
    question:
      "Welke soorten metaal kan de XP Deus II detecteren en herkennen?",
    intro: `De ${DEUS} kan vrijwel alle gangbare metalen detecteren.`,
    sections: [
      {
        heading: "Herkenbare metaalsoorten",
        bullets: ["IJzer", "Koper", "Zilver", "Goud", "Aluminium", "Brons"],
      },
    ],
    closing:
      "Dankzij Target ID en audiotonen kan de detector vaak onderscheid maken tussen waardevolle objecten en afval.",
    source: {
      label: "Bronverificatie",
      text: "Detectiefuncties bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "batterij",
    subtitle: "Praktische vraag over gebruiksduur tijdens lange zoektochten.",
    question: "Hoe lang gaat de batterij van de XP Deus II mee?",
    intro: `De ${DEUS} staat bekend om zijn uitstekende batterijduur.`,
    table: {
      headers: ["Onderdeel", "Gemiddelde gebruiksduur"],
      rows: [
        ["Zoekspoel", "Tot circa 20 uur"],
        ["Afstandsbediening", "Tot circa 25 uur"],
        ["Hoofdtelefoon", "Tot circa 30 uur"],
      ],
    },
    source: {
      label: "Bronverificatie",
      text: "Batterijgegevens bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "prijs",
    subtitle: "Budgetbewuste kopers beoordelen of de investering logisch is.",
    question: "Is de XP Deus II de hoge prijs waard?",
    intro: `Voor veel serieuze detectoristen is de ${DEUS} absoluut zijn prijs waard.`,
    sections: [
      {
        heading: "Wat krijg je voor je geld",
        bullets: [
          "Simultane multifrequentie",
          "Volledig draadloos ontwerp",
          "Waterdicht tot 20 meter",
          "Zeer laag gewicht",
          "Snelle target separation",
        ],
      },
    ],
    closing:
      "Vooral fanatieke hobbyisten en strandzoekers halen veel voordeel uit de geavanceerde functies.",
    source: {
      label: "Bronverificatie",
      text: "Productspecificaties bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "accessoires",
    subtitle:
      "Nieuwe eigenaren zoeken nuttige accessoires en extra uitrusting.",
    question: "Welke accessoires zijn handig bij een nieuwe XP Deus II?",
    intro: `Bij een ${DEUS} zijn enkele accessoires bijzonder nuttig.`,
    sections: [
      {
        heading: "Aanraders",
        bullets: [
          "[XP MI-6 Pinpointer](https://www.detect.nl/nl/xp-mi-6-pinpointer/)",
          "Extra zoekspoelen",
          "Beschermhoezen",
          "Graafgereedschap",
        ],
      },
    ],
    closing:
      "Veel Deus II-gebruikers beschouwen een goede pinpointer als de beste eerste upgrade.",
    source: {
      label: "Bronverificatie",
      text: "Compatibele accessoires bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "vervoer",
    subtitle: "Praktische tips voor transport, opslag en bescherming.",
    question: "Hoe neem ik de XP Deus II veilig mee naar detectielocaties?",
    intro: `De ${DEUS} is ontworpen voor draagbaarheid en eenvoudig transport.`,
    sections: [
      {
        heading: "Wat het meenemen makkelijk maakt",
        bullets: [
          "Lichtgewicht constructie",
          "Opvouwbare steel",
          "Compact draadloos ontwerp",
        ],
      },
    ],
    closing:
      "Gebruik bij voorkeur een [XP detectorrugzak](https://www.detect.nl/nl/xp-backpack-240/) of beschermende hardcase.",
    source: {
      label: "Bronverificatie",
      text: "Producteigenschappen bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "problemen",
    subtitle: "Problemen oplossen bij storingen of onverwacht gedrag.",
    question: "Waarom functioneert mijn XP Deus II niet correct?",
    intro: `Problemen met de ${DEUS} worden meestal veroorzaakt door instellingen of omgevingsfactoren.`,
    sections: [
      {
        heading: "Veelvoorkomende oorzaken",
        bullets: [
          "Te hoge gevoeligheid",
          "Elektromagnetische storing",
          "Verouderde firmware",
          "Problemen met de zoekspoel",
        ],
      },
    ],
    closing:
      "Controleer altijd eerst updates, instellingen en verbindingen voordat je technische support inschakelt.",
    source: {
      label: "Bronverificatie",
      text: "Functionaliteiten bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "huren",
    subtitle:
      "Budgetvriendelijk alternatief voor mensen die eerst willen proberen.",
    question:
      "Kun je beter een metaaldetector huren voordat je er een koopt?",
    intro:
      "Ja, huren is voor veel beginners een slimme manier om de hobby eerst uit te proberen zonder direct een grote investering te doen.",
    sections: [
      {
        heading: "Voordelen van huren",
        bullets: [
          "Lagere instapkosten",
          "Verschillende modellen testen",
          "Ideaal voor vakanties of beginners",
        ],
      },
    ],
    closing: `Wie regelmatig gaat zoeken, kiest uiteindelijk vaak voor een eigen ${DEUS}.`,
    source: {
      label: "Bronverificatie",
      text: "Productpositionering bevestigd via XP Metal Detectors.",
    },
  },
];
