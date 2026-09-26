# Developer portfolio

Three responsive pages built with Next.js App Router, TypeScript, and Tailwind CSS. Content is stored locally; no database or service credentials are required.

## Local development

Install Node.js 24 LTS, then run:

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. Run `npm run lint`, `npm run typecheck`, and `npm run build` before publishing. `npm start` serves the production build.

After building, run `npm run test:e2e` for desktop, tablet, and mobile browser checks. Tests use Microsoft Edge; install it or run `npx playwright install msedge` if unavailable. Playwright starts the production server automatically.

## Add your content

Edit `src/content/portfolio.ts`. The current name and introduction are explicit placeholders, and no experience or projects have been invented.

- Set your name, role, introduction, bio paragraphs, skills, experience, and education.
- Add optional email, GitHub, LinkedIn, and résumé links. Missing optional sections and links are omitted.
- Add projects in display order with unique IDs, titles, summaries, and technology arrays. Mark up to three as featured for Home.
- Put images in `public/projects/` and use paths such as `/projects/my-project.webp` with descriptive alt text and actual image dimensions. Local images use Next.js optimization; remote hosts require explicit Next.js image configuration.
- Put a résumé in `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.
- Set `contentReady: true` only after replacing placeholders. Until then, robots metadata disables indexing and the sitemap is empty. This is not access protection.

The homepage's editorial headline is in `src/app/page.tsx`. Colors and responsive styling live in `src/app/globals.css`. The decorative illustration is CSS, not an external image asset.

Typography uses system fonts so builds require no Google Fonts download. If licensed font files are supplied later, they can be self-hosted with `next/font/local`.

## Publish with GitHub and Vercel

1. Create a GitHub repository and push this project, including `package-lock.json`, to `main`. Never commit `.env.local`.
2. Import that repository in Vercel. Select the Next.js preset, Node.js 24, and `main` as the production branch; retain the default build and output settings.
3. Set `NEXT_PUBLIC_SITE_URL` to the assigned production address, e.g. `https://your-project.vercel.app`, and redeploy. If unset, Vercel's production hostname is used; local development falls back to localhost.
4. Use a branch pull request to review Vercel's preview deployment. Verify content and all routes before merging into `main` for production.
5. Check the public production URL, contact/project links, optional résumé, `/robots.txt`, `/sitemap.xml`, and social preview image. Confirm the deployment's public access settings.

## Release checks

- Check `/`, `/about`, `/work`, and a nonexistent path (404).
- Check navigation and its active state at mobile, tablet, and desktop sizes, with no horizontal scrolling.
- Tab through links, use the skip link, and confirm visible focus and sensible heading order.
- Enable reduced motion and verify that hover transitions are disabled.
- Verify image alternatives, project links, unique titles/canonical URLs, and mobile readability.
- Do not launch with placeholder identity or missing required content.

No analytics, contact form, CMS, custom domain, or project-detail routes are included.
