export type FaqItem = {
  id: string;
  question: string;
  subtitle: string;
  answer: string; // markdown-lite (we render structured below)
};

export type FaqEntry = {
  id: string;
  subtitle: string;
  question: string;
  intro: string;
  sections?: { heading: string; bullets?: string[]; paragraph?: string }[];
  table?: { headers: string[]; rows: string[][] };
  comparisons?: string[];
  closing?: string;
  source: { label: string; url: string; text: string };
};

export const faq: FaqEntry[] = [
  {
    id: "beginners",
    subtitle:
      "Nieuwe hobbyisten willen weten of deze detector gebruiksvriendelijk genoeg is om mee te starten.",
    question: "Is de XP Deus II een goede metaaldetector voor beginners?",
    intro:
      "Ja, de XP Deus II is ondanks zijn geavanceerde mogelijkheden verrassend toegankelijk voor beginners. De detector beschikt over vooraf ingestelde zoekprogramma's waarmee je direct kunt starten zonder diepgaande technische kennis.",
    sections: [
      {
        heading: "Belangrijke voordelen voor starters",
        bullets: [
          "Lichtgewicht ontwerp waardoor lange zoektochten minder vermoeiend zijn",
          "Volledig draadloos systeem",
          "Eenvoudige basisbediening via de afstandsbediening of hoofdtelefoon",
          "Vooraf ingestelde programma's voor munten, relics, strand en algemeen gebruik",
          "Uitstekende target separation waardoor afval en waardevolle targets beter onderscheiden worden",
        ],
      },
    ],
    closing:
      "Wel heeft de Deus II een leercurve. De vele instellingen kunnen in het begin overweldigend lijken. Beginners die bereid zijn enkele uren te investeren in oefenen en begrijpen hoe discriminatie, gevoeligheid en frequenties werken, halen echter snel veel uit het toestel.",
    source: {
      label: "Bronverificatie",
      url: "https://www.xpmetaldetectors.com",
      text: "De specificaties zoals draadloze werking, Fast Multi Frequency-technologie en voorgeprogrammeerde modi zijn bevestigd via de officiële website van XP Metal Detectors.",
    },
  },
  {
    id: "vergelijking",
    subtitle:
      "Kopers vergelijken verschillende merken en modellen voordat ze investeren.",
    question:
      "Hoe presteert de XP Deus II vergeleken met andere high-end metaaldetectoren?",
    intro:
      "De XP Deus II behoort tot de absolute topklasse van moderne metaaldetectoren en onderscheidt zich vooral door snelheid, gewicht en draadloze technologie.",
    table: {
      headers: ["Eigenschap", "XP Deus II", "Veel concurrenten"],
      rows: [
        ["Gewicht", "Zeer licht", "Vaak zwaarder"],
        ["Draadloos", "Volledig draadloos", "Vaak deels bekabeld"],
        ["Multifrequentie", "FMF simultaan", "Niet altijd simultaan"],
        ["Reactiesnelheid", "Uitstekend", "Gemiddeld tot goed"],
        ["Waterdicht", "Tot 20 meter", "Vaak minder diep"],
        ["Software updates", "Regelmatig", "Wisselend"],
      ],
    },
    sections: [
      {
        heading: "Vergelijking met bekende concurrenten",
        bullets: [
          "Tegenover de Minelab Manticore biedt de Deus II vaak snellere recovery speed en lager gewicht.",
          "Vergeleken met de Minelab Equinox 900 heeft de Deus II meer instelmogelijkheden en een volledig draadloos ecosysteem.",
          "Ten opzichte van de Nokta Legend is de Deus II doorgaans duurder, maar ook verfijnder in audio en target-analyse.",
        ],
      },
      {
        heading: "Waar blinkt de Deus II vooral uit?",
        bullets: [
          "IJzerrijke grond",
          "Oude akkers",
          "Snelle target separation",
          "Stranddetectie",
          "Lange detectiesessies dankzij laag gewicht",
        ],
      },
    ],
    source: {
      label: "Bronverificatie",
      url: "https://www.xpmetaldetectors.com",
      text: "Technische kenmerken zoals FMF-technologie, waterdichtheid en draadloze architectuur zijn bevestigd via XP Metal Detectors Official Site. Vergelijkingen zijn gebaseerd op publiek beschikbare productspecificaties van de betreffende fabrikanten.",
    },
  },
  {
    id: "goud",
    subtitle:
      "Schatzoekers willen weten of de detector geschikt is voor goudvondsten.",
    question: "Kan de XP Deus II goud detecteren?",
    intro:
      "Ja, de XP Deus II kan goud detecteren, inclusief kleine gouden objecten zoals sieraden, dunne ringen en sommige natuurlijke goudfragmenten. De detector gebruikt simultane multifrequentie-technologie (FMF), waardoor hij gevoelig blijft voor zowel kleine als diepe targets. Hogere frequenties zijn vooral effectief voor kleine goudobjecten.",
    sections: [
      {
        heading: "Welke soorten goud kan hij vinden?",
        bullets: [
          "Gouden ringen",
          "Kettingen",
          "Munten",
          "Kleine sieraden",
          "Kleine nuggets onder geschikte omstandigheden",
        ],
      },
      {
        heading: "Belangrijk om te weten",
        paragraph:
          "De Deus II is primair ontworpen als allround metaaldetector, niet als gespecialiseerde goudzoekmachine voor extreme nugget hunting zoals sommige dedicated prospecting detectors. Toch presteert hij zeer sterk op stranden, in parken, op akkerland, bij ondiepe goudtargets en bij kleine sieraden in vervuilde grond.",
      },
      {
        heading: "Beste instellingen voor goud",
        bullets: [
          "Hogere frequenties",
          "Lage discriminatie",
          "Hoge gevoeligheid",
          "Langzamere sweep-snelheid",
        ],
      },
    ],
    source: {
      label: "Bronverificatie",
      url: "https://www.xpmetaldetectors.com",
      text: "FMF-technologie, frequentiebereik en goudgevoeligheid zijn bevestigd via de officiële productinformatie van XP Metal Detectors.",
    },
  },
];
