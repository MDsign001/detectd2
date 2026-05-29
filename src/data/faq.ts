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

const DEUS = "[XP Deus II](https://www.detect.nl/nl/metaaldetectors/merken/xp-metaaldetectors/xp-deus-2-metaaldetectors/)";

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
          "[XP MI-6 Pinpointer](https://www.detect.nl/nl/xp-mi-6.html)",
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
      "Gebruik bij voorkeur een [XP detectorrugzak](https://www.detect.nl/nl/search/backpack/?ps_brand=XP+Metaaldetectors&ps_keyword=backpack&ps_tab=products) of beschermende hardcase.",
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
  {
    id: "waterdicht",
    subtitle:
      "Detectieliefhebbers willen weten of de detector geschikt is voor strand en onderwatergebruik.",
    question: "Is de XP Deus II waterdicht?",
    intro: `Ja, de ${DEUS} is volledig waterdicht en ontworpen voor gebruik op stranden, in rivieren en zelfs onder water.`,
    sections: [
      {
        heading: "Waterdichte eigenschappen",
        bullets: [
          "Waterdicht tot 20 meter",
          "Geschikt voor zoet en zout water",
          "Draadloze technologie ook onder water bruikbaar",
          "Ideaal voor stranddetectie",
        ],
      },
    ],
    closing:
      "Vooral strandzoekers waarderen de stabiele prestaties van de Deus II in nat zand en zoutwateromgevingen.",
    source: {
      label: "Bronverificatie",
      text: "Waterdichtheid bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "programmas",
    subtitle: "Gebruikers willen weten welke ingebouwde modi beschikbaar zijn.",
    question: "Welke zoekprogramma's heeft de XP Deus II?",
    intro: `De ${DEUS} beschikt over meerdere vooraf ingestelde zoekprogramma's voor verschillende omstandigheden.`,
    sections: [
      {
        heading: "Standaard zoekprogramma's",
        bullets: ["General", "Sensitive", "Deep HC", "Fast", "Beach", "Diving"],
      },
    ],
    closing:
      "Daarnaast kunnen gebruikers volledig eigen programma's aanmaken en opslaan.",
    source: {
      label: "Bronverificatie",
      text: "Zoekprogramma's bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "diepte",
    subtitle:
      "Veel detectoristen willen weten hoe diep targets gevonden kunnen worden.",
    question: "Hoe diep kan de XP Deus II detecteren?",
    intro: `De detectiediepte van de ${DEUS} hangt af van meerdere factoren.`,
    sections: [
      {
        heading: "Bepalende factoren",
        bullets: [
          "Grootte van het object",
          "Bodemmineralisatie",
          "Zoekfrequentie",
          "Zoekspoel",
          "Instellingen van de detector",
        ],
      },
    ],
    closing:
      "Grote objecten kunnen aanzienlijk dieper worden gedetecteerd dan kleine munten of sieraden.",
    source: {
      label: "Bronverificatie",
      text: "Prestatiegegevens bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "updates",
    subtitle:
      "Gebruikers willen weten of functies later uitgebreid kunnen worden.",
    question: "Heeft de XP Deus II software-updates?",
    intro: `Ja, de ${DEUS} ontvangt regelmatig firmware-updates van XP.`,
    sections: [
      {
        heading: "Wat updates brengen",
        bullets: [
          "Nieuwe functies",
          "Prestatieverbeteringen",
          "Extra instellingen",
          "Optimalisaties voor stabiliteit",
        ],
      },
    ],
    closing:
      "Updates worden via een computer geïnstalleerd met officiële XP software.",
    source: {
      label: "Bronverificatie",
      text: "Firmware-ondersteuning bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "zoekspoel",
    subtitle: "Gebruikers zoeken de ideale spoel voor hun zoekstijl.",
    question: "Welke zoekspoel is het beste voor de XP Deus II?",
    intro: `De beste zoekspoel voor de ${DEUS} hangt af van het terrein en het type targets.`,
    sections: [
      {
        heading: "Spoelkeuze per situatie",
        bullets: [
          "Kleine spoelen voor vervuilde locaties",
          "Grotere spoelen voor maximale diepte",
          "Ronde spoelen voor allround gebruik",
        ],
      },
    ],
    closing:
      "Veel detectoristen gebruiken meerdere spoelen afhankelijk van de zoeklocatie.",
    source: {
      label: "Bronverificatie",
      text: "Compatibiliteit bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "strand",
    subtitle: "Strandzoekers willen stabiele prestaties in zoutwateromgevingen.",
    question: "Is de XP Deus II geschikt voor stranddetectie?",
    intro: `Ja, de ${DEUS} wordt beschouwd als een uitstekende detector voor stranddetectie.`,
    sections: [
      {
        heading: "Sterke punten op het strand",
        bullets: [
          "Stabiel op nat zout zand",
          "Waterdicht ontwerp",
          "Speciale beach-programma's",
          "Goede gevoeligheid voor sieraden",
        ],
      },
    ],
    closing:
      "Vooral de FMF-technologie helpt bij stabiele prestaties in moeilijke strandomstandigheden.",
    source: {
      label: "Bronverificatie",
      text: "Strandfunctionaliteiten bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "hoofdtelefoon",
    subtitle: "Gebruikers willen weten welke audio-opties compatibel zijn.",
    question: "Welke hoofdtelefoon werkt met de XP Deus II?",
    intro: `De ${DEUS} ondersteunt verschillende draadloze XP hoofdtelefoons.`,
    sections: [
      {
        heading: "Compatibele hoofdtelefoons",
        bullets: [
          "WS6",
          "WSA II",
          "WSA II XL",
          "Bone conduction hoofdtelefoon voor onderwatergebruik",
        ],
      },
    ],
    closing:
      "De draadloze audio van XP staat bekend om lage latency en duidelijke targettonen.",
    source: {
      label: "Bronverificatie",
      text: "Audio-accessoires bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "instellingen",
    subtitle: "Beginners zoeken optimale instellingen voor betere prestaties.",
    question: "Hoe stel je de XP Deus II het beste af?",
    intro: `Goede instellingen voor de ${DEUS} hangen af van terrein en zoekdoel.`,
    sections: [
      {
        heading: "Basistips",
        bullets: [
          "Gebruik een stabiele gevoeligheid",
          "Houd discriminatie laag",
          "Kies een passend zoekprogramma",
          "Gebruik hogere frequenties voor kleine targets",
        ],
      },
    ],
    closing:
      "Veel gebruikers starten met het General-programma voordat ze geavanceerde instellingen aanpassen.",
    source: {
      label: "Bronverificatie",
      text: "Instellingsmogelijkheden bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "merk-xp",
    subtitle: "Kopers vergelijken merkvoorkeuren binnen de hobby.",
    question: "Waarom kiezen veel detectoristen voor XP?",
    intro: `XP staat bekend om innovatieve, lichte en snelle metaaldetectoren zoals de ${DEUS}.`,
    sections: [
      {
        heading: "Waarom XP populair is",
        bullets: [
          "Volledig draadloze technologie",
          "Zeer laag gewicht",
          "Snelle target separation",
          "Regelmatige software-updates",
        ],
      },
    ],
    closing:
      "Vooral ervaren detectoristen waarderen de uitgebreide instelmogelijkheden van XP detectors.",
    source: {
      label: "Bronverificatie",
      text: "Producteigenschappen bevestigd via XP Metal Detectors.",
    },
  },
  {
    id: "munten",
    subtitle: "Hobbyisten zoeken een detector voor oude en moderne munten.",
    question: "Is de XP Deus II geschikt voor muntendetectie?",
    intro: `Ja, de ${DEUS} presteert uitstekend bij muntendetectie.`,
    sections: [
      {
        heading: "Sterke punten voor munten",
        bullets: [
          "Goede target separation",
          "Nauwkeurige Target ID",
          "Geschikt voor oude akkers",
          "Snelle respons op kleine targets",
        ],
      },
    ],
    closing:
      "Vooral in ijzerrijke grond kan de Deus II waardevolle munten goed onderscheiden van afvalmetaal.",
    source: {
      label: "Bronverificatie",
      text: "Detectieprestaties bevestigd via XP Metal Detectors.",
    },
  },
];
