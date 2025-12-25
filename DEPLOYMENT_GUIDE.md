# Deployment & Tracking Guide: Green Bay Snow Pros

This guide covers how to deploy your snow removal lead generation test site to Vercel, set up analytics, and monitor local SEO performance in Northeast Wisconsin.

## 1. GitHub Repository Setup

1.  **Initialize Git (if not done):**
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Green Bay Snow Pros site"
    ```

2.  **Create a Repository on GitHub:**
    *   Go to [GitHub.com](https://github.com/new).
    *   Name it `green-bay-snow-pros` (or similar).
    *   Make it **Public** (easier for free Vercel deployment) or **Private**.
    *   **Do not** add README/gitignore (you already have them).

3.  **Push Code:**
    *   Copy the commands provided by GitHub under "...or push an existing repository from the command line".
    *   Example:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/green-bay-snow-pros.git
        git branch -M main
        git push -u origin main
        ```

## 2. Vercel Deployment (Free)

1.  **Sign Up/Login:** Go to [vercel.com](https://vercel.com) and log in with GitHub.
2.  **Add New Project:** Click "Add New..." > "Project".
3.  **Import Repository:** Find your `green-bay-snow-pros` repo and click "Import".
4.  **Configure Project:**
    *   **Framework Preset:** Next.js (should be auto-detected).
    *   **Environment Variables:** You MUST add these for the contact form to work:
        *   `EMAIL_USER`: Your full Gmail address (e.g., `gbsnowremoval836@gmail.com`)
        *   `EMAIL_PASS`: Your Gmail **App Password** (see section 2.1 below).
5.  **Deploy:** Click "Deploy".
    *   Wait ~1 minute. You will get a live URL (e.g., `green-bay-snow-pros.vercel.app`).

### 2.1 How to Get a Gmail App Password
**IMPORTANT:** Do NOT use your regular Gmail password. It will not work.

1.  Go to your [Google Account Security Settings](https://myaccount.google.com/security).
2.  Enable **2-Step Verification** if it's not already on.
3.  Search for **"App passwords"** in the search bar at the top (or look under 2-Step Verification).
4.  Create a new App Password:
    *   **App name:** "Snow Removal Website"
    *   Click **Create**.
5.  Copy the 16-character code (e.g., `abcd efgh ijkl mnop`).
6.  Use this code as your `EMAIL_PASS` in Vercel.

## 3. Analytics & Search Console Setup

### A. Google Analytics 4 (GA4)
1.  Go to [analytics.google.com](https://analytics.google.com).
2.  Create a new property for "Green Bay Snow Pros".
3.  Set up a **Web Data Stream**.
4.  Copy the **Measurement ID** (`G-XXXXXXXXXX`).
5.  **Update Code:**
    *   Open `app/layout.tsx`.
    *   Find the `G-XXXXXXXXXX` placeholder in the `<script>` tag at the bottom.
    *   Replace it with your actual ID.
    *   Commit and push the change to GitHub (Vercel will auto-redeploy).

### B. Google Search Console (GSC)
1.  Go to [search.google.com/search-console](https://search.google.com/search-console).
2.  **Add Property:** Use the "URL Prefix" method with your Vercel URL (e.g., `https://green-bay-snow-pros.vercel.app`).
3.  **Verification:**
    *   Since you have GA4 set up, you might be able to auto-verify.
    *   Otherwise, add the HTML tag they provide to the `<head>` in `app/layout.tsx` (or use the Vercel verification method in Vercel settings).
4.  **Submit Sitemap:**
    *   In GSC sidebar, go to "Sitemaps".
    *   Enter `sitemap.xml` and submit.

## 4. Event Tracking (Lead Gen)

The code is **already set up** to track form submissions.

*   **How it works:** In `components/ContactForm.tsx`, the `sendGAEvent` function triggers when a user successfully submits the form.
*   **Event Name:** `lead_submit`
*   **Parameters:**
    *   `category`: 'form'
    *   `label`: 'contact_page_submit'
    *   `service_requested`: (e.g., 'Residential Plowing')

**To view these in GA4:**
1.  Go to Reports > Engagement > Events.
2.  Look for `lead_submit` (it may take 24 hours to appear initially).
3.  Mark it as a "Key Event" (Conversion) in Admin settings to track it as a goal.

## 5. Metrics to Monitor (Success Indicators)

Since this is a test for organic demand in NE Wisconsin, focus on these metrics:

1.  **Impressions (GSC):** Are people seeing your site for keywords like "snow plowing Green Bay"? (High impressions = good SEO).
2.  **CTR (Click-Through Rate):** Are they clicking? (Low CTR = improve Meta Title/Description).
3.  **Sessions by Location (GA4):** Filter users by City. You want traffic from Green Bay, Appleton, De Pere, etc., not random global traffic.
4.  **Form Views vs. Submits:**
    *   If 100 people view the Contact page but 0 submit, your form might be too long or the trust factors (reviews/photos) aren't strong enough.
5.  **Lead Volume:** The ultimate metric. Even if they are "test" leads, receiving data means there is real market demand.

## 6. Top 10 Target Keywords for NE Wisconsin

Monitor these specific terms in Google Search Console:

1.  "Snow removal Green Bay WI"
2.  "Residential snow plowing Appleton"
3.  "Emergency snow removal near me" (Locally intent-driven)
4.  "Ice dam removal companies Green Bay" (High value service)
5.  "Driveway plowing service De Pere"
6.  "Snow blowing services Oshkosh"
7.  "Commercial snow removal Fox Valley"
8.  "Roof raking service Green Bay"
9.  "Salt spreading service Appleton"
10. "Snow plow contracts Green Bay"
