# Foundly.ai homepage components

Each homepage section is now a separate component under `components/home/sections/`.

- `BusinessChallenges.tsx`
- `PlatformFeatures.tsx`
- `AISearchVisibility.tsx`
- `AIContentCreation.tsx`
- `SocialMediaAutomation.tsx`
- `HowItWorks.tsx`
- `PlatformIntegrations.tsx`
- `ProvenImpact.tsx`
- `WhoItsFor.tsx`
- `shared.tsx` — shared section heading, card and content data.

All section components are imported individually in `app/page.tsx`.
Existing `Hero`, `Pricing`, `FAQ`, `CTA`, `Header`, `Footer`, styles and public assets are retained from the supplied project archive.

Run from the project root:
```bash
pnpm install
pnpm dev
```
