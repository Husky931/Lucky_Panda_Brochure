# Lucky Panda Brochure

Next.js version of the Lucky Panda company brochure deck.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit slides

Each brochure page is its own component in `app/slides/`. The filename prefix
matches the browser slide number / `data-label`:

- `Slide01Cover.tsx`
- `Slide02AStoryInEveryBox.tsx`
- `Slide03WhoWeAre.tsx`
- `Slide04WhatWeBelieve.tsx`
- `Slide05SeriesIntro.tsx`
- `Slide06TravelersBenefits.tsx`
- `Slide07FirstStopFrance.tsx`
- `Slide08FrenchBoxRitual.tsx`
- `Slide09TheFrenchBox.tsx`
- `Slide10InsideTheBox.tsx`
- `Slide11GlobalJourney.tsx`
- `Slide12ANoteInside.tsx`
- `Slide13MakeItYours.tsx`
- `Slide14FutureCountries.tsx`
- `Slide15Founders.tsx`
- `Slide16Bespoke.tsx`
- `Slide17Pricing.tsx`
- `Slide18FAQ.tsx`
- `Slide19Contact.tsx`

Shared visual styling lives in `app/globals.css`. Images are in `public/assets/` and `public/uploads/`. The deck navigation/scaling web component is copied from the original project into `public/deck-stage.js`.
