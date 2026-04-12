# 🌐 Prem Sagar TK — Personal Portfolio Website

> A sleek, dark-themed personal portfolio built with pure HTML, CSS, and JavaScript — showcasing who I am, what I do, and how to connect with me.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

---

## 📖 Overview

This portfolio website is a multi-page static site designed with a **deep-space dark theme** (`#0d0d2b`) and vibrant **purple accents** (`#b56bff`). It features a full-viewport background image, smooth scroll-based layouts, a typewriter animation for role titles, and a glassmorphism-inspired sticky navbar.

> 🔗 **Live Preview:** [prem-sagar-tk.github.io/Website](https://prem-sagar-tk.github.io/Website/)

---

## 🗂️ Project Structure

```
Website/
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Pages auto-deploy on push to main
├── images/
│   ├── bg.png                 # Full-page background image
│   ├── Profile Logo.png       # Favicon / logo
│   ├── Developer Illustration.png
│   ├── Github.png             # Footer social icon
│   ├── Instagram.png          # Footer social icon
│   └── linkedin.png           # Footer social icon
├── index.html                 # Home page (hero + typewriter effect)
├── about.html                 # About page (intro + social links)
├── project.html               # Projects page
├── tech.html                  # Tech Skills page
├── style.css                  # Styles for index.html
├── style_about.css            # Styles for about.html
├── style_project.css          # Styles for project.html
├── style_tech.css             # Styles for tech.html
└── README.md
```

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section with a typewriter animation cycling through roles — *FrontEnd Developer*, *ML Engineer*, *Data Scientist* |
| **About** | `about.html` | Introduction section with bio, "Know Me" CTA button, and social links |
| **Projects** | `project.html` | Showcases featured projects with intro and connect section |
| **Tech Skills** | `tech.html` | Highlights technical skills and expertise |

---

## ✨ Features

- **Typewriter Animation** — JavaScript-powered typing effect on the homepage that cycles through role titles with realistic typing/erasing speeds
- **Glassmorphism Navbar** — Sticky header with `backdrop-filter: blur(10px)` and semi-transparent background
- **Full-Viewport Hero Sections** — Each page opens with a `100vh` hero area against the full-page background
- **Scroll-Based Two-Page Layout** — Hero section flows into content + footer as one continuous scroll
- **Purple Neon Glow Accents** — Text shadows and hover effects using the `#b56bff` accent color
- **Social Media Integration** — Font Awesome icons (body) and custom PNG icons (footer) linking to Instagram, GitHub, and LinkedIn
- **GitHub Pages Deployment** — Automated CI/CD via GitHub Actions on every push to `main`

---

## 🎨 Design System

| Property | Value |
|----------|-------|
| **Font** | [Poppins](https://fonts.google.com/specimen/Poppins) (300, 500, 700) |
| **Background** | `#0d0d2b` with `bg.png` overlay (cover, fixed) |
| **Primary Accent** | `#b56bff` (purple) |
| **Text Color** | `#ffffff` (headings), `#d1d1ff` (body), `#ccc` (footer) |
| **Hover Glow** | `text-shadow: 0 0 10px #b56bff` |
| **Navbar** | `rgba(0, 0, 0, 0.25)` + `backdrop-filter: blur(10px)` |
| **Footer** | `rgba(0, 0, 0, 0.6)` |
| **Icons** | [Font Awesome 6](https://fontawesome.com/) (CDN) |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, and layout (Flexbox) |
| JavaScript (Vanilla) | Typewriter text animation |
| Google Fonts — Poppins | Typography |
| Font Awesome 6 | Icon library (body social icons) |
| GitHub Actions | Automated deployment to GitHub Pages |

---

## 🚀 Getting Started

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prem-Sagar-TK/Website.git
   cd Website
   ```

2. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local server like VS Code's **Live Server** extension for hot-reload

3. **Navigate** through the pages using the top navbar — Home, About, Projects, Tech Skills

### Deploy

The site auto-deploys to GitHub Pages on every push to the `main` branch via the [static.yml](.github/workflows/static.yml) workflow. No build step required.

---

## 📬 Connect with Me

| Platform | Link |
|----------|------|
| 🔗 LinkedIn | [prem-sagar-t-k](https://www.linkedin.com/in/prem-sagar-t-k/) |
| 🐙 GitHub | [Prem-Sagar-TK](https://github.com/Prem-Sagar-TK) |
| 📸 Instagram | [premsagar.tk](https://www.instagram.com/premsagar.tk/) |

---

## 📄 License

This project is open source and available for personal and educational use.

---

<p align="center">Made with ❤️ by <strong>Prem Sagar TK</strong></p>
