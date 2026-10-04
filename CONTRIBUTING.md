# Contributing

Thank you for your interest in improving this portfolio.

## Reporting an issue

Open a GitHub issue with a clear title and enough detail to reproduce the problem. For visual issues, include the browser, device or viewport size, and a screenshot when useful. Do not report security vulnerabilities in a public issue; follow [SECURITY.md](SECURITY.md) instead.

## Proposing a change

1. Fork the repository and create a branch for your change.
2. Keep the change focused and consistent with the existing lightweight, static structure.
3. Test the page locally by serving the project root, for example with `python3 -m http.server 8000`, then check it in a browser at desktop and mobile widths.
4. If you edit `data.json`, make sure it remains valid JSON and that the page renders the updated content.
5. Open a pull request describing the change, its motivation, and the checks you performed. Include screenshots for meaningful visual changes.

There is currently no automated test or build suite. Avoid adding dependencies or a build step unless the change requires it and the reason is explained in the pull request.

By submitting a contribution, you agree that it may be distributed under the repository's [AGPL License](LICENSE).
