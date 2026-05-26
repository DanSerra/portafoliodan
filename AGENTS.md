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
/php/contactfrom.php   → Contact form handler
/images/            → Project images
/docs/              → CV PDF
```

## Design system

- Design tokens: CSS custom properties in `:root`
- Typography: Inter (Google Fonts)
- Grid: 12-column with 24px gutter
- Container: 1280px max-width, 80px side margins
- Responsive: 1280px+ (desktop), 800-1279px (tablet), <800px (mobile)

## Important notes

- Contact form uses PHP at `php/contactfrom.php:91` - requires server with PHP
- Update placeholder email before deployment: `$address = "example@example.net"`
- Use existing images from `images/home-images/`

## No build commands needed

Open `index.html` directly in browser or deploy to static hosting.