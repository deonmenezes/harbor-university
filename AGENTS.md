# Harbor University

An **intentionally vulnerable** Next.js demo application built for security education and bug bounty practice. It deliberately contains common web vulnerabilities (XSS, IDOR, JWT flaws, injection, etc.). **Do NOT deploy with real data or real users.**

## Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js 14 (App Router)
- **Runtime:** Node.js
- **Libraries:** React 18

## Setup

```bash
npm install
```

No environment variables are required — the app uses an in-memory/local data store (`lib/db.ts`).

## Build / Run / Test

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server (after build)
npm run start
```

No test suite is configured.

## Project Structure

```
app/                  Next.js App Router pages and API routes
  api/                API route handlers (intentionally vulnerable endpoints)
    login/            Auth API — injection bypass, alg:none JWT
    users/            Full PII dump endpoint
    secrets/          Exposed secrets endpoint
    ping/             Simulated command injection
  login/              Login page
  search/             Reflected XSS demo
  comments/           Stored XSS / no-CSRF demo
  profile/            IDOR demo — any user's data by ID
  bounty/             Bug bounty info page
  tools/              Security tooling pages
  layout.tsx          Root layout
  page.tsx            Home page
lib/
  db.ts               In-memory "database" with hardcoded users/secrets
public/               Static assets
next.config.js        Next.js configuration
tsconfig.json         TypeScript configuration
```

## Architecture & Key Files

- **`lib/db.ts`** — central "database" module; contains hardcoded plaintext passwords, secrets, and user PII intentionally for vulnerability demonstration.
- **`app/api/`** — all API routes are deliberately insecure; each endpoint maps to a documented vulnerability.
- **App Router** — pages use the Next.js 14 App Router convention (`app/` directory, `page.tsx`, `layout.tsx`).

## Conventions & Notes for Agents

- **This repo is a security training target.** All vulnerabilities are intentional — do not "fix" them unless explicitly asked.
- The app has no database; all state lives in `lib/db.ts` in memory.
- There is no authentication middleware — insecure behavior is by design.
- No environment variable secrets are needed; any secrets in the code are fake/demo values.
- No test runner is configured (`npm test` will fail).
- The `/bounty` route and `public/.well-known/security.txt` document the intentional bug list.
- Contact for bounty reports: `deonmenezes04@gmail.com` (see README).
