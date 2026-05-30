import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sliders,
  Waves,
  Compass,
  Wrench,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DEUS II Expert Hub — detect.nl Companion" },
      {
        name: "description",
        content:
          "Expert Hub voor de XP DEUS II: 32 tips, bodemassistent en instellingen voor firmware V3.1 & V4.1.",
      },
      { property: "og:title", content: "DEUS II Expert Hub — detect.nl" },
      {
        property: "og:description",
        content:
          "Interactieve bodemassistent en 32 expert tips voor elke schatzoeker met een XP DEUS II.",
      },
    ],
  }),
  component: HomePage,
});

const ALL_TIPS = {
  basis: [
    { id: 1, title: "Reactietijd", text: "Begin met Reactietijd 2. In rommelige grond of bij diepe doelen probeer je 2–3. Hoger scheidt beter, maar levert wat diepte in." },
    { id: 2, title: "Gevoeligheid", text: "Zet zo hoog als de locatie toelaat zonder te veel valse signalen. In een stabiel veld haal je 95–99. Bij EMI of mineralisatie eerder 85–90." },
    { id: 3, title: "Discriminatie", text: "Drempel om doelen te negeren op basis van geleidbaarheid. Vermijd het bij diepe doelen — je verliest anders mooie vondsten." },
    { id: 4, title: "Silencer (V4.1)", text: "Werkt samen met discriminatie. Waarde 2 of 3 geeft een schone bodem. Gebruik 0–1 als je diep zoekt. Sinds firmware V4.1 kost een iets hogere silencer minder diepte dan voorheen." },
    { id: 5, title: "Grond Stabilisatie", text: "Verlagen van de Max Frequentie verbetert respons en diepte, maar vermindert gevoeligheid voor zwakke geleiders (TID 23–50)." },
    { id: 6, title: "Notch Filter", text: "Een specifiek bereik (bv. 23–32) waarbinnen de detector doelen negeert. Handig om kroonkurken of foliestukjes te filteren." },
    { id: 7, title: "Audio Filter", text: "Audio Response bepaalt hoe je signalen hoort — lager geeft langere sustain, hoger is snediger en korter." },
    { id: 8, title: "IJzer Volume", text: "Verlaag naar 1 op ijzerrijke locaties — non-ijzer doelen springen er dan duidelijker uit." },
    { id: 9, title: "Equalizer", text: "Bepaalt hoe frequenties via je koptelefoon binnenkomen. Stem af op je gehoor en de omgeving." },
    { id: 10, title: "Frequentie Max", text: "Lager (24 kHz) geeft meer diepte op hoge geleiders. Hoger (40 kHz) is beter voor kleine of laaggeleidende doelen." },
    { id: 11, title: "Geduld", text: "Loop traag. De grond gaat nergens heen, en de beste vondst zit vaak één zwaai verderop." },
    { id: 12, title: "Vul je gaten", text: "Een dichtgemaakt gat is een uitnodiging voor de volgende keer. De boer, de natuur én je hobby varen er wel bij." },
  ],
  advanced: [
    { id: 13, title: "Audio Type: PWM vs. SQUARE", text: "Schakel in ijzerrijke grond over van PWM naar SQUARE audio. PWM klinkt analoog en milder bij diepe doelen, maar SQUARE geeft een heel strak, afgekapt digitaal signaal om doelen naast ijzer te isoleren." },
    { id: 14, title: "Grondbalans: Handmatige Offset", text: "Sinds V4.1 is de automatische grondbalans extreem stabiel. Mocht je op zware grond toch nog micro-prikken horen na het pompen, zet de grondbalans dan handmatig 1 of 2 puntjes hoger (bijv. van 78 naar 80)." },
    { id: 15, title: "FMF Caps Square", text: "Gebruik de Caps Square filter (stand 1 tot 5) op recreatieterreinen of parken om ijzeren kroonkurken eruit te filteren. Zet hem op 0 in het bos of op de akker voor maximale signaalzuiverheid." },
    { id: 16, title: "Gevoeligheid vs. Rust (De 93-regel)", text: "Als de detector onrustig wordt door EMI, zak dan niet direct naar 85, maar probeer exact 93. Dit is een softwarematige sweet spot waar interne ruis effectief wordt weggefilterd." },
    { id: 17, title: "Het geheim van de 'Pitch' audio", text: "Zoek je op een schone akker naar diepe, kleine middeleeuwse muntjes? Pitch kijkt naar signaalsterkte in plaats van geleidbaarheid. Hoe dichterbij of groter, hoe hoger de toon." },
    { id: 18, title: "B.C. Reject V4.1 Optimalisatie", text: "Het algoritme is in V4.1 verbeterd. Je kunt BC Reject op recreatieterreinen nu gerust op stand 2 of 3 zetten zonder direct diepe, goede doelen te maskeren." },
    { id: 19, title: "Bodemvochtigheid match", text: "Gebruik op gortdroge zomerdagen programma's met een lagere basisfrequentie (DEEP RECOVERY). Schakel na regen over op hogere frequenties (FAST of SENSITIVE FT) omdat natte grond beter geleidt." },
    { id: 20, title: "Gebruik de Multi-TID Weergave", text: "Zet je display op de XY-visualisatie of multi-TID balken. Als een object bij 4 kHz een heel ander ID geeft dan bij 40 kHz, is het vaak complex afval. Goede doelen geven een stabiele respons over alle frequenties." },
  ],
  bodem: [
    { id: 21, title: "De 'Zware Klei' Aanpak", text: "In zeeklei of rivierklei reflecteert de bodem hoge frequenties. Start in FAST (Prog 4), maar verlaag de Max Frequentie handmatig naar 14 kHz of 24 kHz en zet Grond Stabilisatie op 1 of 2." },
    { id: 22, title: "IJzer-maskering op Stortakkers", text: "Schakel je audio over naar Full Tones en zet de Reactietijd op 3. Een goede vondst tussen het spijkerafval 'zingt' er dan hoorbaar tussendoor als een klein, hoog audiopiekje." },
    { id: 23, title: "Stadsparken & De XY-As", text: "Activeer het XY-scherm. Een munt geeft een strakke, kaarsrechte diagonale lijn van linksonder naar rechtsboven. Aluminiumfolie of een verroeste dop geeft een wazige kluwen." },
    { id: 24, title: "Het 'Schone' Bos: Diepte maximaliseren", text: "Gebruik programma 6 (DEEP RECOVERY). Zet Reactietijd omlaag naar 0.5 of 1, Silencer op -1 of 0, en verhoog Audio Response naar 5 om diepe, zwakke signalen maximaal te versterken." },
    { id: 25, title: "Programma 13 - XTI (V3.1/V4.1)", text: "Maak gebruik van het nieuwe XTI-programma (Extreme Trash Discrimination) op historische locaties die extreem vervuild zijn met ijzer en non-ferro afval." },
    { id: 26, title: "Historische grond met Baksteenresten", text: "Rode baksteen en haardsteden bevatten magnetisch ijzeroxide. Als de detector onrustig wordt, zet de grondbalans dan handmatig vast op een positieve offset van 83 tot 85." },
    { id: 27, title: "IJzeren Granaatscherven Filteren", text: "Zet het IJzer Volume op 1 en pas de I.A.R. (Iron Amplitude Rejection) in het Relic (Prog 8) of Gold Field (Prog 7) programma aan naar 3 of 4 om grote brede scherven naar de ijzertoon te dwingen." },
    { id: 28, title: "EMI bij Spoorlijnen en Hoogspanning", text: "Voer een Frequency Scan uit. Helpt dit niet? Schakel dan handmatig over naar de Mono-modus (Prog 13) en kies één vaste frequentie zoals 14 kHz om de FMF-ruis te elimineren." },
  ],
  water: [
    { id: 29, title: "De 'Zout-Nat' Transitie aan de Kust", text: "Gebruik op het droge strand Programma 11 (BEACH). Zodra je de natte vloedlijn of branding oploopt, schakel je direct over naar Programma 12 (BEACH SENS) voor de juiste zout-frequentieband." },
    { id: 30, title: "Grondbalans op Zout Strand", text: "Voer op het natte zand altijd een actieve Grab Ground Balance (pompen) uit in het stromende water of op het drijfnatte zand. Dit vlakt de geleidbaarheid van het zoute water perfect uit." },
    { id: 31, title: "Waden en Duiken in Zoetwater", text: "Gebruik in zoetwaterplassen nooit de strandprogramma's, maar kies voor FAST (Prog 4) of GENERAL (Prog 1). Zoetwater geleidt niet zoals zout water; strandprogramma's filteren hier onnodig vermogen weg." },
    { id: 32, title: "Antenne-kit (Wave Guide) & BH-01", text: "Radiogolven reizen niet door water. Bevestig de XP antenne-kabel van de schijf naar de controller zodra je het water in gaat. Gebruik de BH-01 botgeleidingkoptelefoon voor loepzuiver geluid via je jukbeenderen." },
  ],
} as const;

type TabKey = keyof typeof ALL_TIPS;

const SCENARIOS = [
  { name: "Zware Klei", prog: "Prog 4 (FAST)", settings: { "Max Freq": "14-24 kHz", "Grond Stab": "1 of 2", "Reactie": "2" }, tip: "Hoge frequenties reflecteren op zware klei. Schroef de maximale frequentie handmatig terug naar beneden." },
  { name: "Stortakker (IJzer)", prog: "Prog 4 of XTI", settings: { "Audio": "Full Tones", "Reactie": "3", "Silencer": "0-1" }, tip: "Full Tones is hier je leugendetector. Vaste tonen maskeren de goede doelen die strak tegen ijzer aan liggen." },
  { name: "Schoon Bos", prog: "Prog 6 (DEEP RECOVERY)", settings: { "Reactie": "0.5 - 1", "Silencer": "-1", "Audio Resp": "5" }, tip: "Zet filters uit en reactietijd minimaal. Laat de brute kracht van de spoel het diepe werk doen." },
  { name: "Stadspark / Recreatie", prog: "Prog 1 (GENERAL)", settings: { "BC Reject": "2-3", "Caps Square": "2", "Display": "XY-Scherm" }, tip: "Gebruik het XY-scherm om het verschil te zien tussen een strakke muntlijn en een wazige folie-kluwen." },
  { name: "Zout Strand (Nat)", prog: "Prog 12 (BEACH SENS)", settings: { "Grondbalans": "Pompen (Grab)", "Disc": "0-4", "BC Reject": "0" }, tip: "Pomp de schijf direct in de natte branding. Houd disc laag om diep goud niet mis te lopen." },
];

function HomePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("basis");
  const [selectedScenario, setSelectedScenario] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      <header className="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur sticky top-0 z-50 px-4 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <Compass className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">DEUS II Expert Hub</h1>
              <p className="text-xs text-zinc-400">Gefinaliseerd voor Firmware V3.1 & V4.1 • detect.nl</p>
            </div>
          </div>
          <div className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-800">
            "Elke piep is hoop. Elke vondst een verhaal."
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-white">Interactieve Bodem Assistent</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {SCENARIOS.map((scen, idx) => (
              <button
                key={scen.name}
                onClick={() => setSelectedScenario(idx)}
                className={`px-3 py-2 text-sm rounded-lg border font-medium transition-all text-center ${
                  selectedScenario === idx
                    ? "bg-amber-500 border-amber-600 text-zinc-950 shadow-lg shadow-amber-500/10"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {scen.name}
              </button>
            ))}
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-5 grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Aanbevolen Basis</span>
              <div className="text-lg font-bold text-amber-500">{SCENARIOS[selectedScenario].prog}</div>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Essentiële Aanpassingen</span>
              <div className="flex flex-wrap gap-2">
                {Object.entries(SCENARIOS[selectedScenario].settings).map(([key, val]) => (
                  <span key={key} className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded text-xs font-mono">
                    <strong className="text-zinc-300">{key}:</strong> <span className="text-amber-400">{val}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:col-span-3 pt-3 border-t border-zinc-900 flex items-start gap-2.5 text-sm text-zinc-400">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p>{SCENARIOS[selectedScenario].tip}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-zinc-400" />
              Volledige Kennisbank <span className="text-xs font-normal text-zinc-500">(32 Expert Tips)</span>
            </h2>

            <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs sm:text-sm overflow-x-auto">
              <button
                onClick={() => setActiveTab("basis")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeTab === "basis" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Sliders className="w-3.5 h-3.5" /> Basis ({ALL_TIPS.basis.length})
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeTab === "advanced" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Expert ({ALL_TIPS.advanced.length})
              </button>
              <button
                onClick={() => setActiveTab("bodem")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeTab === "bodem" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Compass className="w-3.5 h-3.5" /> Grond ({ALL_TIPS.bodem.length})
              </button>
              <button
                onClick={() => setActiveTab("water")}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 shrink-0 ${activeTab === "water" ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Waves className="w-3.5 h-3.5" /> Water ({ALL_TIPS.water.length})
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {ALL_TIPS[activeTab].map((tip) => (
              <div
                key={tip.id}
                className="bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 rounded-lg p-5 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-zinc-200 group-hover:text-white transition-colors">{tip.title}</h3>
                    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">
                      TIP #{tip.id}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            <span>Klaar voor deployment naar <strong>detectd2.lovable.app</strong></span>
          </div>
          <div>© 2026 detect.nl • Alle rechten voorbehouden.</div>
        </footer>
      </main>
    </div>
  );
}
