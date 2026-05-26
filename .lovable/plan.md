## Plan: FAQ-links naar detect.nl repareren

### Probleem
Drie van de vier link-slugs in `src/data/faq.ts` geven 404. Detect.nl gebruikt `.html` voor productpagina's en een trailing slash voor categoriepagina's — geen uniforme regel.

### Aanpak
Alleen `src/data/faq.ts` aanpassen. Alle voorkomens van de kapotte URLs vervangen via een gerichte zoek/vervang:

| Vervangen | Door |
|---|---|
| `https://www.detect.nl/nl/xp-deus-2/` | `https://www.detect.nl/nl/metaaldetectors/merken/xp-metaaldetectors/xp-deus-2-metaaldetectors/` |
| `https://www.detect.nl/nl/xp-mi-6-pinpointer/` | `https://www.detect.nl/nl/xp-mi-6.html` |
| `https://www.detect.nl/nl/xp-backpack-240/` | `https://www.detect.nl/nl/xp-backpack-240.html` |

`https://www.detect.nl/nl/metaaldetectors/` blijft ongewijzigd (werkt).

### Verificatie
Na de wijziging opnieuw `curl -I` op alle vier de URLs om HTTP 200 te bevestigen, en `rg` op `faq.ts` om te checken dat geen oude slug is achtergebleven.

### Niet doen
- Geen wijzigingen in `routes/faq.tsx` of de `renderInline`-helper — markdown-linkparsing werkt al correct.
- Geen styling- of structuurwijzigingen.