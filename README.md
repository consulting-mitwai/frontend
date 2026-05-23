# MITWAI — Frontend

Sitio web corporativo de [MITWAI](https://mitwai.com) — Make it Possible with Artificial Intelligence.

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS 3.4** con tokens de marca personalizados
- **Vite 5** como bundler
- **i18next** — español (default) e inglés
- **react-scroll** — navegación suave por anclas
- **lucide-react** — íconos
- **AWS Amplify** — hosting y CI/CD
- **Cloudflare** — DNS y CDN

## Estructura

```
src/
├── assets/
│   ├── logos/          # logo-white.svg, logo-navy.svg
│   └── team/           # fotos de los co-fundadores
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── i18n/
│   ├── es.json         # traducciones español
│   ├── en.json         # traducciones inglés
│   └── index.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyMitwaiSection.tsx
│   ├── CasesSection.tsx
│   ├── IndustriesStrip.tsx
│   ├── TeamSection.tsx
│   └── ContactSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:5173`.

## Deploy

Cada push a la rama `main` dispara un deploy automático en AWS Amplify.

**URL de producción:** https://www.mitwai.com
