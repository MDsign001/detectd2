export const manuals = [
  { icon: "📱", name: "RC Handleiding", sub: "Gids voor de Remote Control" },
  { icon: "🎧", name: "WS6 Handleiding", sub: "Gids voor de draadloze koptelefoon" },
  { icon: "🔦", name: "MI-6/4 Handleiding", sub: "Gids voor de pinpointer" },
  { icon: "🌍", name: "Andere talen", sub: "XP meertalige documentatie" },
];

export const updates = [
  { icon: "📡", name: "Update RC", sub: "Firmware Remote Control" },
  { icon: "🎧", name: "Update WS6 (ST)", sub: "Firmware WS6 koptelefoon" },
  { icon: "🔊", name: "Update WSA II/XL", sub: "Firmware WSA II/XL koptelefoon" },
];

export type ResourceLink = { name: string; url: string; description?: string };

export const linkGroups: Record<string, ResourceLink[]> = {
  Facebook: [
    {
      name: "XP Deus 2 Groep",
      url: "https://www.facebook.com/groups/xpdeus2",
      description: "Nederlandstalige community rond de Deus 2",
    },
    {
      name: "XP Officieel",
      url: "https://www.facebook.com/XPMetalDetectorsOfficial",
      description: "Officiële XP Metal Detectors pagina",
    },
  ],
  YouTube: [
    {
      name: "XP Officieel",
      url: "https://www.youtube.com/@XPMetalDetectors",
      description: "Officieel kanaal van XP Metal Detectors",
    },
    {
      name: "Detect & Discover",
      url: "https://www.youtube.com/results?search_query=detect+and+discover+metal+detecting",
      description: "Vondsten en veldverslagen",
    },
  ],
  Websites: [
    {
      name: "detect.nl webshop",
      url: "https://www.detect.nl",
      description: "Officiële webshop voor detectors en accessoires",
    },
    {
      name: "XP Officieel",
      url: "https://www.xpmetaldetectors.com",
      description: "Fabrikant XP Metal Detectors",
    },
    {
      name: "piepkaart.nl",
      url: "https://www.piepkaart.nl",
      description: "Kaart met zoektoestemmingen en detectie-info",
    },
    {
      name: "ahn.nl",
      url: "https://www.ahn.nl",
      description: "Actueel Hoogtebestand Nederland — hoogtekaarten",
    },
    {
      name: "topotijdreis.nl",
      url: "https://www.topotijdreis.nl",
      description: "Historische topografische kaarten door de tijd",
    },
  ],
};
