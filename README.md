# Modern 3D Resume Builder

A professional, feature-rich resume builder with stunning 3D effects, glass morphism design, and one-click PDF export — built with React 18, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Overview

Modern 3D Resume Builder lets you craft a polished, professional resume in minutes. Fill in your details across structured sections, watch a live preview update in real time, and export a perfectly formatted PDF — no design skills required.

---

## Features

### Core Functionality
- **Personal Information** — Contact details, professional summary, LinkedIn, and website links
- **Work Experience** — Add roles with company, dates, location, description, and key achievements
- **Education** — Degrees, institutions, GPA, field of study, and graduation dates
- **Skills** — Color-coded badges with four proficiency levels (Beginner → Expert)
- **Additional Sections** — Projects, certifications, and languages (all optional)
- **Live Preview** — Toggle between edit and preview modes with real-time updates
- **PDF Export** — Download a professionally formatted PDF, auto-named with your name

### Visual Design
- Animated gradient background with smooth flowing colors
- Glass morphism cards with backdrop blur
- Floating animations and 3D hover effects (lift, scale, glow)
- Modern typography with gradient text and refined spacing

### Technical Highlights
- **React 18** with hooks and modern patterns
- **TypeScript** for full type safety
- **Tailwind CSS** utility-first styling with custom components
- Fully responsive across all screen sizes
- Accessible — ARIA labels and keyboard navigation
- Performance optimized for fast load and smooth animations

---

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

### Building Your Resume

Work through each section in the sidebar:

1. **Personal Info** — Name, email, phone, location, LinkedIn, website, and summary
2. **Experience** — Add one or more roles; use the dynamic achievement system to highlight wins
3. **Education** — Degree, institution, GPA, field of study, and dates
4. **Skills** — Add skills with proficiency levels; displayed as color-coded badges
5. **Additional** — Optionally add projects (with tech stack), certifications, and languages

### Previewing and Exporting

- Click **Preview** to toggle the live resume view
- Click **Download PDF** to generate and save your resume as a PDF

> The PDF is automatically named using your full name and preserves all formatting.

---

## Project Structure

```
resume-builder/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── PersonalInfoForm.tsx
    │   ├── ExperienceForm.tsx
    │   ├── EducationForm.tsx
    │   ├── SkillsForm.tsx
    │   ├── AdditionalInfoForm.tsx
    │   └── ResumePreview.tsx
    ├── types/
    │   └── index.ts
    ├── App.tsx
    ├── index.tsx
    └── index.css
```

---

## Customization

### Colors and Animations
- Colors: update the palette in `tailwind.config.js`
- Animations: adjust timing and easing in `src/index.css`

### Adding a New Section

1. Create a new component in `src/components/`
2. Define its types in `src/types/index.ts`
3. Add it to `App.tsx`
4. Register it in the sidebar navigation

---

## Deployment

### Build for Production

```bash
npm run build
```

The output is placed in the `build/` folder. Deploy it to any static hosting platform:

| Platform | Method |
|----------|--------|
| **Netlify** | Drag and drop the `build/` folder |
| **Vercel** | Connect your GitHub repository |
| **GitHub Pages** | Use the `gh-pages` package |
| **Firebase** | Use Firebase Hosting CLI |

No environment variables are required — the app runs entirely client-side.

---

## Contributing

Contributions are welcome! To get started:

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then open a Pull Request describing your changes.

---

## Tech Stack

| Library | Purpose |
|---------|---------|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Lucide React](https://lucide.dev) | Icons |
| [html2canvas](https://html2canvas.hertzen.com) + [jsPDF](https://github.com/parallax/jsPDF) | PDF generation |

---

## License

Licensed under the [MIT License](LICENSE).

---

## Support

Found a bug or have a question? [Open an issue](https://github.com/yourusername/resume-builder/issues) on GitHub.
