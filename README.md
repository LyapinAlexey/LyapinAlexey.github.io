# Alexey Lyapin — Portfolio

[![CI](https://github.com/LyapinAlexey/LyapinAlexey.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/LyapinAlexey/LyapinAlexey.github.io/actions)
[![Release](https://img.shields.io/github/v/release/LyapinAlexey/LyapinAlexey.github.io)](https://github.com/LyapinAlexey/LyapinAlexey.github.io/releases/latest)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=flat&logo=json&logoColor=white)

A premium dark bento-style portfolio and personal landing page built for Alexey Lyapin.

## Overview

> Live preview of the portfolio website.
```url
https://lyapinalexey.github.io/
```

This project is a clean, modern portfolio website designed to look premium and compact while staying fully static and easy to maintain. It is structured around a strong personal brand and content-driven rendering from a local JSON file.

The site is optimized for:

- personal branding
- portfolio presentation
- GitHub Pages deployment
- lightweight static hosting
- fast editing through `data.json`

## Tech stack

- HTML
- CSS
- JavaScript
- JSON

## Features

- premium dark bento layout
- responsive design
- dynamic content rendering from `data.json`
- social and contact links
- local icon assets
- subtle luxury-style motion and hover effects
- no framework required
- GitHub Pages compatible

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── data.json
├── images/
│   └── icons/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   ├── feature_request.yml
│   │   └── post_mortem.yml
│   ├── DISCUSSION_TEMPLATE/
│   │   ├── ideas.yml
│   │   └── qna.yml
│   ├── CODEOWNERS
│   ├── copilot-instructions.md
│   ├── FUNDING.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── README.md
├── .gitignore
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── PRIVACY.md
└── LICENSE
```

## Project documents

- [Contributing](CONTRIBUTING.md) — how to report issues and propose changes.
- [Code of Conduct](CODE_OF_CONDUCT.md) — expectations for project participants.
- [Security Policy](SECURITY.md) — how to report a vulnerability privately.
- [Privacy Policy](PRIVACY.md) — what the site and its third-party services may process.
- [AGPL License](LICENSE) — terms for using and distributing this project.

## Local development

Run the site locally from the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages deployment

Follow these steps to publish the portfolio as a live website.

### 1. Push the repository to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

### 2. Open GitHub Pages settings

- Go to your repository on GitHub
- Open `Settings`
- Open `Pages`

### 3. Configure Pages

Under `Build and deployment`:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

Then click `Save`.

### 4. Wait for deployment

GitHub will build and publish the site automatically. This usually takes a few minutes.

### 5. Open the live site

Once published, the site will be available at:

```text
https://<your-username>.github.io/<repository-name>/
```

Example:

```text
https://lyapinalexey.github.io/lyapinalexey.github.io/
```

## Content editing

Most portfolio content is stored in `data.json`, which makes it easy to update:

- name
- role
- bio
- availability
- impact items
- skills
- projects
- links

Example:

```json
{
  "profile": {
    "name": "Alexey Lyapin",
    "role": "Backend Developer",
    "bio": "..."
  }
}
```

## Notes

- This project is intentionally static and lightweight.
- There is no build step required for deployment.
- GitHub Pages is the recommended hosting option for this site.
- The design can be further customized by editing `style.css` and `data.json` without changing the structure.

## Author

Alexey Lyapin

GitHub: https://github.com/LyapinAlexey
