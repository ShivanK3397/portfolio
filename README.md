# Developer portfolio

Four responsive pages (Home, About, Work, and Projects) built with Next.js App Router, TypeScript, and Tailwind CSS. Content is stored locally; no database or service credentials are required.

## Local development

Install Node.js 24 LTS, then run:

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. Run `npm run lint`, `npm run typecheck`, and `npm run build` before publishing. `npm start` serves the production build.

After building, run `npm run test:e2e` for desktop, tablet, and mobile browser checks. Tests use Microsoft Edge; install it or run `npx playwright install msedge` if unavailable. Playwright starts the production server automatically.

## Add your content

Edit `src/content/portfolio.ts`. The current name and introduction are explicit placeholders. Internship experience uses the supplied roles and accomplishments.

- Set your name, role, introduction, bio paragraphs, skills, experience, and education.
- Add optional email, GitHub, LinkedIn, and résumé links. Missing optional sections and links are omitted.
- Update the `internships` array in reverse chronological order with role, organization, location, dates, and accomplishment bullets. Mark the active role with `current: true`. Home shows a compact overview; Work shows all accomplishments.
- Update the separate `projects` array with summaries, technologies, accomplishments, screenshots, and GitHub links. Store screenshots under `public/projects/` and supply their dimensions and alt text. Home shows a compact preview linking to `/projects`, which contains the full details.
- Put a résumé in `public/resume.pdf` and set `resumeUrl: "/resume.pdf"`.
- Set `contentReady: true` only after replacing placeholders. Until then, robots metadata disables indexing and the sitemap is empty. This is not access protection.

The homepage's editorial headline is in `src/app/page.tsx`. Colors and responsive styling live in `src/app/globals.css`. The decorative illustration is CSS, not an external image asset.

Typography uses system fonts so builds require no Google Fonts download. If licensed font files are supplied later, they can be self-hosted with `next/font/local`.

The site defaults to dark mode regardless of system color scheme; the header toggle lets visitors choose light mode. Your choice is saved locally and applied before first paint, with smooth color transitions that respect reduced-motion preferences. Both palettes are defined in `src/app/globals.css`.

## Publish with GitHub and Vercel

1. Create a GitHub repository and push this project, including `package-lock.json`, to `main`. Never commit `.env.local`.
2. Import that repository in Vercel. Select the Next.js preset, Node.js 24, and `main` as the production branch; retain the default build and output settings.
3. Set `NEXT_PUBLIC_SITE_URL` to the assigned production address, e.g. `https://your-project.vercel.app`, and redeploy. If unset, Vercel's production hostname is used; local development falls back to localhost.
4. Use a branch pull request to review Vercel's preview deployment. Verify content and all routes before merging into `main` for production.
5. Check the public production URL, contact links, internship details, optional résumé, `/robots.txt`, `/sitemap.xml`, and social preview image. Confirm the deployment's public access settings.

## Release checks

- Check `/`, `/about`, `/work`, `/projects`, and a nonexistent path (404).
- Check navigation and its active state at mobile, tablet, and desktop sizes, with no horizontal scrolling.
- Tab through links, use the skip link, and confirm visible focus and sensible heading order.
- Enable reduced motion and verify that hover transitions are disabled.
- Verify internship details, contact links, unique titles/canonical URLs, and mobile readability.
- Do not launch with placeholder identity or missing required content.

No analytics, contact form, CMS, or custom domain is included.
