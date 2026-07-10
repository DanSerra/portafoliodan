# AGENTS.md

Static HTML portfolio site for a Product Designer. No build system, no tests.

## Project structure

```
/index.html              → Home
/proyectos.html         → Proyectos (listado completo)
/proyecto-*-detalle.html → Páginas de detalle de proyectos
/perfil.html          → About
/contacto.html       → Contacto
/css/styles.css       → Design system (CSS custom properties)
/js/main.js          → Interactions (mobile menu, form validation, animations)
/js/i18n.js          → Spanish/English dictionary + language detection/switching
/php/contactfrom.php   → Contact form handler
/images/            → Project images
/docs/              → CV PDF
```

## Design system

- Design tokens: CSS custom properties in `:root`
- Typography: Inter (Google Fonts), Fraunces (headings)
- Grid: 12-column with 24px gutter
- Container: 1280px max-width, 80px side margins
- Responsive: 1280px+ (desktop), 1024-1279px (small desktop), 768-1023px (tablet), <768px (mobile)

## Important notes

- Contact form uses PHP at `php/contactfrom.php:91` - requires server with PHP
- Update placeholder email before deployment: `$address = "example@example.net"`
- Use existing images from `images/home-images/`

## Language / i18n

- Single-page JS injection via `data-i18n`/`data-i18n-html` keys + dictionary in `js/i18n.js`
- Language detection: `?lang=en` URL param > `lang` in localStorage > `navigator.language` > `es`
- Language switcher in nav (ES|EN links)
- All translatable content uses `data-i18n` (text) or `data-i18n-html` (HTML content including `<strong>` and `<ul>/<li>` blocks)
- Project titles: descriptive titles translated (Salud, Atención, Espacio), brand/exhibition names kept as-is (Slot, Riev, Kanji, Nacimiento, yo.contenido)
- `data-i18n-html` used for detail page section paragraphs (desc, desafio, proceso, resultado) to support inline formatting

## Detail pages status

| Page | Status | Skills |
|------|--------|--------|
| salud | Complete | 12 |
| atencion | Complete (full real content, 14 paragraphs across 4 sections, gallery) | 16 |
| espacio | Complete (full real content, 20 paragraphs across 4 sections with 3 sub-sections each) | 25 |
| slot | Placeholder content only | 6 |
| riev | Placeholder | — |
| kanji | Placeholder | — |
| nacimiento | Placeholder content only | 6 |
| yocontenido | Placeholder content only | 6 |

## No build commands needed

Open `index.html` directly in browser or deploy to static hosting.
