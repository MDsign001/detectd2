
## Plan: detect.nl Companion overzetten naar React + branding doorvoeren

### Inhoudscontrole
De HTML bevat al Nederlandse teksten en geen persoonsnamen of copyright-vermeldingen. De BREEZE/SNIPER programmanamen blijven (merken/titels). De bestaande korte teksten zijn al pakkend — ik voeg er extra motiverende/komische metaaldetectie-regels aan toe op plekken die nu kaal zijn (lege schermen, header-tagline, extra tip-items).

### Structuur

**Routes** (file-based, elk eigen `head()` met titel/description):
- `src/routes/index.tsx` — Home: welkomstkaart + tegels naar Programma's en Tips
- `src/routes/programs.tsx` — Programma's blader-scherm
- `src/routes/tips.tsx` — Lijst met grappige/motiverende detect-tips

**Componenten**:
- `src/components/AppHeader.tsx` — Sticky header met **detect.nl logo (img)** + optionele terug-knop
- `src/components/AppFooter.tsx` — Subtiele footer met klein logo + tagline ("Elke piep is hoop")
- `src/components/ProgramCard.tsx` — Programmanaam, beschrijving, instellingen
- `src/components/Tile.tsx` — Herbruikbare home-tegel

**Data**:
- `src/data/programs.ts` — BREEZE & SNIPER met Nederlandse beschrijvingen
- `src/data/tips.ts` — 6-8 pakkende tips (bv. "90% rommel, 10% magie", "De beste vondst is de volgende", "Geduld is een metaaldetector zijn beste vriend")

### Logo-integratie (detect.nl)

Logo URL: `https://cdn.webshopapp.com/shops/272625/themes/182919/v/2092953/assets/logo.png?20231108145809`

Geplaatst op:
1. **Header** op elk scherm (klein, links)
2. **Home welkomstkaart** (groter, gecentreerd boven welkomsttekst)
3. **Footer** (klein, met tagline)
4. **Favicon** via root `head()` link tag

### Branding / Design tokens (`src/styles.css`)

HSL-waarden in `:root` + `@theme inline`:
- `--primary: 210 73% 43%` (#1E73BE) — knoppen, links, CTA's
- `--secondary: 210 82% 34%` (#0F5A9C) — hover/active states
- `--foreground: 0 0% 20%` (#333333) — body tekst
- `--background: 0 0% 100%` (#FFFFFF)
- `--muted: 0 0% 96%` (#F5F5F5) — secties, borders, tegels
- `--muted-foreground: 0 0% 47%` (#777777) — subtekst, labels
- `--border: 0 0% 96%`
- `--radius: 1rem`

Donkere modus blijft bestaan maar wordt niet actief geforceerd — wit blijft hoofdachtergrond.

Tailwind utilities gebruikt overal (`bg-primary`, `hover:bg-secondary`, `text-foreground`, `text-muted-foreground`, `bg-muted`). Geen inline hex.

### Interactie
- Programma blader-state: `useState` in `programs.tsx`, vorige/volgende knoppen disabled aan de randen
- Terug-knop in header alleen op subpagina's
- shadcn `Button` component voor consistentie

### Root setup
- `__root.tsx`: favicon + meta description in `head()`, behoud `notFoundComponent`
- `index.tsx` placeholder volledig vervangen
