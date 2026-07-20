# ITAlumni

Web prototype of an alumni network: connecting former students, a job board, and a user profile. Project developed as a frontend specialization exercise, with separate mobile and desktop views.

## Project structure

Projecte 1 ITAlumni/
├── welcome.html # Welcome screen
├── signup.html # User sign-up
├── home.html # Home page
├── networking.html # Alumni network (search, filter, sorting)
├── jobPortal.html # Job board
├── styles.css # Global styles (mobile-first + desktop media query)
├── filtro.js # Search, filter, and popularity-sorting logic
├── filtro.test.js # Unit tests for filtro.js (Vitest)
├── vitest.config.js # Test environment configuration (jsdom)
├── package.json
├── images/ # Images and logos
└── Annexos-20260701/ # Project documentation (briefing, functional analysis, UX/UI, MVP, use cases)

## Technologies

- HTML5 + CSS3 (CSS variables, BEM methodology, a single desktop breakpoint at `min-width: 900px`)
- Vanilla JavaScript (ES Modules)
- [Vitest](https://vitest.dev/) + jsdom for unit testing

## Viewing the project

It's a static site, no build step needed. Open any `.html` file (e.g. `welcome.html`) directly in the browser, or serve the folder with a simple local server.

## Tests

```bash
npm install
npm test
```

The tests cover `filtrarPorTexto` and `ordenarPorPopularidad` from `filtro.js`, simulating the DOM with jsdom.

## Current status / pending

- The mobile and desktop views are defined as separate HTML blocks (not fluid responsive); content must be kept manually in sync between the two.
- The `ProfileUpdate.html` and `login.html` pages are missing, linked from navigation but not yet created.
- CSS migration to SASS (partials per component/page) is planned, not yet implemented.

## Documentation

See `Annexos-20260701/` for the project briefing, functional analysis, UX/UI design, MVP, and use cases.