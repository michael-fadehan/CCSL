# CCSL Website (Next.js + TypeScript + Tailwind)

Quick-start instructions and Formspree contact setup.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Environment (Formspree)

This project uses an API route (`/api/contact`) that will forward submissions to Formspree if you set a Formspree endpoint.

1. Create a form at Formspree: `https://formspree.io/` and follow their steps to obtain your form endpoint (it looks like `https://formspree.io/f/yourFormId`).
2. Create a `.env.local` file in the project root with:

```
FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
```

3. Start the dev server and submit the contact form at `/contact` to test. Formspree will forward submissions to the email configured in your Formspree account (set that to `info@coarse-co.com`).

## Switching to SendGrid (optional)

If you later prefer sending directly via SendGrid, provide the following environment variables in `.env.local`:

```
SENDGRID_API_KEY=...
FROM_EMAIL=no-reply@coarse-co.com
TO_EMAIL=info@coarse-co.com
```

The API route will use SendGrid if `SENDGRID_API_KEY` exists; otherwise it will forward to Formspree when `FORMSPREE_ENDPOINT` is set.

## Notes
- Add images to `public/images/`, icons to `public/icons/`, partner logos to `public/partners/`.
- Replace placeholder hero image `public/images/hero.jpg` with your preferred image.


