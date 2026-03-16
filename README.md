# belle.github.io

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
Deployed as a fully static site on GitHub Pages.

---

## 🗂 Project Structure

```
belle.github.io/
│
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Nav, Footer, fonts)
│   ├── globals.css             # Global styles & Tailwind
│   ├── page.tsx                # Home page (hero + section previews)
│   ├── experience/page.tsx     # /experience — full work history
│   ├── projects/page.tsx       # /projects   — all projects
│   ├── skills/page.tsx         # /skills     — tech skills
│   ├── education/page.tsx      # /education  — academic background
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── ui/                     # Reusable primitives
│   │   ├── Nav.tsx             # Navigation bar
│   │   ├── Footer.tsx          # Footer
│   │   ├── Card.tsx            # Card wrapper
│   │   ├── Tag.tsx             # Pill tag
│   │   ├── SectionHeader.tsx   # Numbered section heading
│   │   ├── RevealWrapper.tsx   # Scroll-reveal animation
│   │   └── Typewriter.tsx      # Animated typewriter text
│   └── sections/               # Page-specific components
│       ├── ExperienceCard.tsx  # Job card
│       └── ProjectCard.tsx     # Project card
│
├── data/                       # ✏️  Edit these to update content
│   ├── experience.json         # Work experience entries
│   ├── projects.json           # Project entries
│   ├── skills.json             # Skill groups
│   └── education.json          # Education entries
│
├── lib/
│   └── data.ts                 # Type-safe data loaders (build-time)
│
├── types/
│   └── index.ts                # TypeScript interfaces for all data
│
└── .github/workflows/
    └── deploy.yml              # Auto-deploy to GitHub Pages on push
```

---

## ✏️ How to Update Content

All content lives in `/data/*.json`. **No TypeScript knowledge needed.**

### Add a new job

Edit `data/experience.json`:

```json
{
  "id": "new-company",
  "company": "Company Name",
  "role": "Software Engineer",
  "dates": "Jun 2026 – Present",
  "duration": "ongoing",
  "url": "https://company.com",
  "tags": ["React", "Python"],
  "highlights": ["What you shipped...", "What you improved..."]
}
```

### Add a new project

Edit `data/projects.json`:

```json
{
  "id": "my-project",
  "icon": "🚀",
  "name": "Project Name",
  "dates": "Jan – Mar 2026",
  "description": "What it does and how you built it.",
  "tags": ["Next.js", "Tailwind", "Postgres"],
  "highlight_tags": ["Next.js"],
  "repo_url": "https://github.com/...",
  "demo_url": "https://..."
}
```

### Add a new skill group

Edit `data/skills.json`:

```json
{
  "category": "Cloud & DevOps",
  "items": ["AWS", "GCP", "Terraform", "Kubernetes"]
}
```

### Add new education

Edit `data/education.json`:

```json
{
  "id": "grad-school",
  "school": "University Name",
  "degree": "M.S. in Computer Science",
  "dates": "Sep 2026 – May 2028",
  "gpa": "4.0",
  "honors": "Fellowship Recipient",
  "coursework": ["Machine Learning", "Compilers"]
}
```

---

## 🚀 Add a New Page

1. Create `app/my-new-page/page.tsx`
2. Add it to the nav in `components/ui/Nav.tsx`
3. Done — Next.js handles routing automatically

Example:

```tsx
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Blog</h1>
      {/* your content */}
    </div>
  );
}
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📦 Build & Preview

```bash
npm run build   # generates /out static files
npx serve out   # preview the static build locally
```

---

## 🌐 Deploy to GitHub Pages

**Automatic (recommended):**
Push to `main` → GitHub Actions builds and deploys automatically.

**Setup (one-time):**

1. Go to **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` — that's it

**Manual:**

```bash
npm run build
# then push the /out folder to the gh-pages branch
```
