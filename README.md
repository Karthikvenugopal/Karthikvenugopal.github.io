# Karthik Venugopal's portfolio

This is a statically exported Next.js portfolio hosted with GitHub Pages.

## GitHub project sync

The **Selected Work** section uses the public GitHub repository API in the
browser, so repository updates do not require a portfolio code change or a new
deployment.

- Update a repository's **Description**, primary language, or **Topics** on
  GitHub and the card updates on the next uncached visit (within 15 minutes).
- New public, non-fork repositories appear automatically once they have a
  description. Archived repositories disappear automatically.
- The GitHub profile repository, this Pages repository, `CoronaBot`, and
  `ScreenRecorder` are intentionally excluded in
  `src/lib/github-projects.ts` so the section remains selected work.
- The existing hard-coded cards are retained as a no-network fallback. Their
  second bullets are editorial results/case-study details and are preserved
  when live GitHub metadata loads.

The sync uses no token and fails silently back to the static portfolio if the
GitHub API is unavailable or rate-limited. Visitor and redirect tracking are
independent and unchanged.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the checks with:

```bash
npm test
npm run lint
npm run build
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
