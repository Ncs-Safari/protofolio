# Eri Safari – Portfolio

Personal portfolio and online résumé of **Eri Safari**, Software Engineer /
Full Stack Developer (.NET & React). It replaces the old résumé site at
https://eri-resume.vercel.app/.

> Status: in development. See [`docs/project-plan.md`](docs/project-plan.md)
> for the step-by-step progress.

## Content

The site is a single page with two columns. On desktop the left column stays
in place while the right column scrolls. On mobile the columns stack.

### Left column (sticky)

- Name, job title and a one-line tagline
- In-page navigation (About · Experience · Projects) that highlights the
  section in view
- Links to GitHub and email

### Right column (scrolling)

| Section          | Content                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **About**        | Profile summary, education, focus on C# / .NET and React / Next.js                                                                                                                   |
| **Experience**   | PT. Berlian Sistem Informasi (New DNet, DNet Change Request Team, Hyto) · LAPI – ITB (PROPAR PHE SHU Pertamina) · PT Sawerigading Multi Kreasi · PT. Arkamaya · PT Virtua Internasional Pratama |
| **Projects**     | PIR – Potensi Investasi Regional (BKPM) and PIR Admin · Satu Data MUBA · Sistem Informasi Bantuan Sosial Musi Banyuasin                                                              |
| **Education & Skills** (optional) | Universitas Padjadjaran, Universitas Indonesia Membangun, courses, certifications, skills                                                                           |
| **Footer**       | Short credit for the stack used                                                                                                                                                      |

Each experience entry shows the period, a description, highlights and
tech-stack tags. The full résumé is available as a PDF at
`/Eri-Safari-Resume.pdf`.

## Tech Stack

| Area       | Technology                                   |
| ---------- | -------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org) (App Router) |
| Language   | TypeScript                                   |
| UI         | React 18                                     |
| Styling    | [Tailwind CSS 3](https://tailwindcss.com), Inter font via `next/font`, dark navy theme |
| Database   | [PostgreSQL on Neon](https://neon.tech) (serverless Postgres) |
| Linting    | ESLint (`eslint-config-next`)                |
| Hosting    | [Vercel](https://vercel.com)                 |

Résumé content currently lives in [`src/data/resume.ts`](src/data/resume.ts).
The Neon PostgreSQL database is set up for this project but not yet connected
to the app.

## Project Structure

```
portofolio/
├── docs/                 # Step-by-step development notes
├── public/
│   └── Eri-Safari-Resume.pdf
└── src/
    ├── app/              # Next.js App Router (layout, page, global styles)
    ├── components/       # UI components (Header, Section, ...)
    └── data/
        └── resume.ts     # Résumé content and types
```

## Getting Started

Requirements: Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment variables

The database connection string comes from Neon and is stored in `.env.local`
(not committed to Git):

```bash
DATABASE_URL="postgresql://<user>:<password>@<host>/<database>?sslmode=require"
```

On Vercel, add the same variable under **Project Settings → Environment
Variables**.

## Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Build for production          |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                    |

## Deployment

The repository ([Ncs-Safari/protofolio](https://github.com/Ncs-Safari/protofolio))
will be connected to Vercel (Step 10), so every push to `main` triggers a new
deployment.

## Contact

- Email: safari.erie@gmail.com
- GitHub: https://github.com/safari05
