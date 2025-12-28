# Project Roadmap & TODOs

## 1. High Priority (Pre-Launch)
- [x] **Google Voice Number:** Update placeholder `(920) 555-0123` with real number in:
    - `components/Navbar.tsx`
    - `components/Footer.tsx`
    - `app/contact/page.tsx`
    - `components/JsonLd.tsx` (Schema)
- [ ] **Google Analytics (GA4):** Add Measurement ID to `app/layout.tsx`.
- [x] **Vercel Deployment:** Set `EMAIL_USER` and `EMAIL_PASS` in Vercel settings.
- [x] **Google Voice Forwarding:** Set up in Google Voice settings to real phone.

## 2. SEO & Content (Post-Launch)
- [ ] **Blog/Resources Section:** Create `/blog` and add 3 posts (Deferred until after GBP verification):
    - *Winter Snow Plowing Tips for Northeast Wisconsin Homeowners*
    - *How to Choose a Snow Removal Service in Door County*
    - *Emergency Snow Removal: What to Expect in Oshkosh*
- [ ] **Programmatic SEO (Long Tail):** Generate dynamic pages for specific suburbs (e.g., `/locations/ashwaubenon`, `/locations/howard`) to capture hyper-local search traffic ("Driveway plowing Ashwaubenon").
- [ ] **Refine Schema:** Double-check `components/JsonLd.tsx` matches GBP details exactly once live.

## 3. Performance & Quality Assurance
- [ ] **Mobile & Speed Test:** Run PageSpeed Insights once the Vercel URL is live.
- [ ] **Image Optimization:** Ensure all future images use the Next.js `<Image />` component for automatic WebP conversion.

## 4. Google Business Profile (GBP)
- [ ] Follow steps in `GBP_GUIDE.md` to set up the map listing.
