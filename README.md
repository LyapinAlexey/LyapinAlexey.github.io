# Alexey Lyapin — Portfolio

[![CI](https://github.com/LyapinAlexey/LyapinAlexey.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/LyapinAlexey/LyapinAlexey.github.io/actions)
[![Release](https://img.shields.io/github/v/release/LyapinAlexey/LyapinAlexey.github.io)](https://github.com/LyapinAlexey/LyapinAlexey.github.io/releases/latest)
![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0--or--later-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=flat&logo=json&logoColor=white)

A premium dark bento-style portfolio and personal landing page built for Alexey Lyapin.

## Overview

[View the live portfolio](https://lyapinalexey.github.io/)

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
├── ASSETS.md
├── CHANGELOG.md
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
├── DATA_SCHEMA.md
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
- [AGPL-3.0-or-later License](LICENSE) — terms for using and distributing the current project version. Release v1.0.0 was published under MIT.
- [Changelog](CHANGELOG.md) — notable project updates by release.
- [Data schema](DATA_SCHEMA.md) — fields used to render portfolio content.
- [Asset attributions](ASSETS.md) — third-party fonts, icons, and media notes.

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

This repository is configured to publish the `main` branch from the repository
root using GitHub Pages. To change or verify the setting, open
[Settings → Pages](https://github.com/LyapinAlexey/LyapinAlexey.github.io/settings/pages)
and check that **Deploy from a branch**, `main`, and `/ (root)` are selected.
After pushing a change to `main`, GitHub Pages publishes the site at
[lyapinalexey.github.io](https://lyapinalexey.github.io/).

## Content editing

Most rendered portfolio content is stored in `data.json`. See
[DATA_SCHEMA.md](DATA_SCHEMA.md) for the fields the page currently reads and
their expected formats. Check that the file remains valid JSON after editing.

## Notes

- This project is intentionally static and lightweight.
- There is no build step required for deployment.
- GitHub Pages is the recommended hosting option for this site.
- The design can be further customized by editing `style.css` and `data.json` without changing the structure.
- Third-party asset and font details are documented in [ASSETS.md](ASSETS.md).

## Author

Alexey Lyapin

GitHub: https://github.com/LyapinAlexey
