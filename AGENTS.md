<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:lucky-panda-brand-rules -->
# Lucky Panda brochure visual system

Assume every new slide, page, component, or visual change must match the existing Lucky Panda brochure exactly unless the user explicitly asks for a new direction.

Before creating or changing brochure visuals:

- Study nearby slide components in `app/slides/` and shared styling in `app/globals.css`.
- Reuse the existing palette, typography, spacing rhythm, landscape deck format, image framing, paper textures, and editorial mood.
- Follow existing component structure, naming conventions, slide ordering, and `data-label` numbering patterns.
- Prefer existing visual motifs and assets already present in the project. Do not introduce new motifs, decorative systems, icons, or illustration styles unless asked.
- Keep additions brand-consistent with the warm French/editorial gifting style: cream paper, restrained magenta/gold accents, Playfair/Cormorant/Inter/Allura/Caveat type roles, generous whitespace, and polished photo framing.
- When adding a new slide, update the slide registry and shift subsequent rendered labels so the deck order remains sequential.
- Run the project checks after changes when possible.
<!-- END:lucky-panda-brand-rules -->
