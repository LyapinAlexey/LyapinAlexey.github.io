# Copilot Instructions

Work as a careful contributor to Alexey Lyapin's static portfolio website. Make
focused, reliable changes that fit the existing project and preserve its
lightweight structure.

## Project Context

- The site is plain HTML, CSS, and JavaScript; it has no framework, package
  manager, build step, or automated test suite.
- `index.html` contains the page structure, `style.css` contains its styling,
  `script.js` handles interactions and renders content, and `data.json` is the
  source for most portfolio content.
- Images and icons are stored under `images/`.
- The site is intended to deploy as a static site on GitHub Pages.

## Before Making Changes

- Inspect the relevant files and follow the patterns already in use.
- Keep changes focused. Do not introduce frameworks, dependencies, build tools,
  or abstractions unless the task genuinely requires them.
- Preserve the current visual identity and behavior unless a requested change
  calls for a deliberate change.

## Implementation

- Keep markup semantic and accessible: use appropriate elements, descriptive
  alternative text, keyboard-operable controls, and visible focus states.
- Keep the responsive layout usable on mobile and desktop. Respect reduced-motion
  preferences when adding or changing animation.
- Follow the existing JavaScript style: two-space indentation, single quotes,
  and semicolons.
- Keep portfolio copy and structured content in `data.json` when appropriate;
  ensure edits remain valid JSON.
- Treat values rendered from `data.json` as content, not trusted HTML. Prefer
  DOM APIs and `textContent`; if interpolation into HTML is necessary, escape
  text and validate URLs before inserting them.
- Do not add secrets or private information. Review external links and resource
  requests when changing them.

## Documentation and Validation

- Update `README.md` or the relevant document when a change affects setup,
  content editing, deployment, or project behavior.
- There is no automated test or build command at present. For site changes,
  serve the repository root locally (for example, with
  `python3 -m http.server 8000`) and check the affected behavior in a browser,
  including a narrow viewport when the layout changes.
- For `data.json` changes, verify that it parses as JSON and that the page
  renders the updated content. Report checks that could not be performed;
  do not claim unverified results.
