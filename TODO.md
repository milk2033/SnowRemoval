# Project Roadmap & TODOs

## 1. High Priority (Pre-Launch)
- [x] **Google Voice Number:** Update placeholder `(920) 555-0123` with real number in:
    - `components/Navbar.tsx`
    - `components/Footer.tsx`
    - `app/contact/page.tsx`
    - `components/JsonLd.tsx` (Schema)
- [ ] **Google Analytics (GA4):** Add Measurement ID to `app/layout.tsx`.
- [ ] **Vercel Deployment:** Set `EMAIL_USER` and `EMAIL_PASS` in Vercel settings.

## 2. SEO & Content (Post-Launch)
- [ ] **Blog/Resources Section:** Create `/blog` and add 3 posts:
    - *Winter Snow Plowing Tips for Northeast Wisconsin Homeowners*
    - *How to Choose a Snow Removal Service in Door County*
    - *Emergency Snow Removal: What to Expect in Oshkosh*
- [ ] **Refine Schema:** Double-check `components/JsonLd.tsx` matches GBP details exactly once live.

## 3. Performance & Quality Assurance
- [ ] **Mobile & Speed Test:** Run PageSpeed Insights once the Vercel URL is live.
- [ ] **Image Optimization:** Ensure all future images use the Next.js `<Image />` component for automatic WebP conversion.

## 4. Google Business Profile (GBP)
- [ ] Follow steps in `GBP_GUIDE.md` to set up the map listing.
