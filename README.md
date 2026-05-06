# Lucky Panda Brochure

Next.js version of the Lucky Panda company brochure deck.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit slides

Each brochure page is its own component in `app/slides/`:

- `Slide01Cover.tsx`
- `Slide02WhoWeAre.tsx`
- `Slide03WhoWeAre.tsx`
- `Slide04WhatWeBelieve.tsx`
- `Slide03GlobalJourney.tsx`
- `Slide06SeriesIntro.tsx`
- `Slide04FirstStopFrance.tsx`
- `Slide05TheFrenchBox.tsx`
- `Slide06InsideTheBox.tsx`
- `Slide07ANoteInside.tsx`
- `Slide08MakeItYours.tsx`
- `Slide09FutureCountries.tsx`
- `Slide10Founders.tsx`
- `Slide11Bespoke.tsx`
- `Slide12Pricing.tsx`
- `Slide13FAQ.tsx`
- `Slide14Contact.tsx`

Shared visual styling lives in `app/globals.css`. Images are in `public/assets/` and `public/uploads/`. The deck navigation/scaling web component is copied from the original project into `public/deck-stage.js`.
