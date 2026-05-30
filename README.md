# Nahid Taalschool

React + Vite + TailwindCSS website voor online Nederlandse lessen voor anderstaligen.

## Lokaal starten

Installeer eerst Node.js als `npm` nog niet beschikbaar is.

```bash
npm install
npm run dev
```

Open daarna de URL die Vite toont, meestal `http://127.0.0.1:5173`.

## Gratis live zetten op Vercel

1. Maak een GitHub repository aan, bijvoorbeeld `nahid-taalschool`.
2. Upload alle bestanden uit deze map naar die repository.
3. Log in op Vercel met GitHub.
4. Kies `Add New Project`.
5. Selecteer de repository.
6. Framework preset: `Vite`.
7. Build command: `npm run build`.
8. Output directory: `dist`.
9. Klik op `Deploy`.

Vercel geeft daarna gratis een subdomein, bijvoorbeeld `nahid-taalschool.vercel.app`.

## Nog invullen voor livegang

- Vervang `https://www.instagram.com/` in `src/main.jsx` door de echte Instagram-link.
- Vervang `https://t.me/` in `src/main.jsx` door de echte Telegram-link.
- Vervang `G-XXXXXXXXXX` in `src/main.jsx` door je Google Analytics Measurement ID.
- Voeg je echte logo toe als je het bestand hebt, of vervang de huidige letter-N merkknop.
- Vervang juridische voorbeeldtekst eventueel door definitieve voorwaarden/privacytekst.
