# Green Bay Snow Pros - Lead Gen Site

This is a Next.js 15 (App Router) project designed for organic lead generation for snow removal services in Northeast Wisconsin.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Forms:** React Hook Form
- **Icons:** Lucide React

## Project Structure

- `app/layout.tsx`: Root layout with SEO metadata, JSON-LD schema, and analytics.
- `app/page.tsx`: Landing page with Hero, Services, About, Testimonials, and FAQ.
- `app/contact/page.tsx`: Dedicated contact page with lead generation form.
- `components/`: Reusable UI components (Navbar, Footer, Hero, Services, ContactForm, etc.).
- `lib/utils.ts`: Utility functions (tailwind-merge/clsx).

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

## Deployment

This project is optimized for Vercel.

1.  Push to GitHub/GitLab/Bitbucket.
2.  Import project in Vercel.
3.  Deploy (No custom configuration needed).

## SEO & Tracking

- **Metadata:** Dynamic titles and descriptions targeted for "Snow Removal Green Bay".
- **Schema:** `LocalBusiness` and `Service` JSON-LD injected in `layout.tsx`.
- **Analytics:** GA4 script placeholder is located in `app/layout.tsx`. Replace `'G-XXXXXXXXXX'` with your Measurement ID.