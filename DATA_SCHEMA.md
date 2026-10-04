# Portfolio data schema

The website fetches `data.json` and uses its values to render the profile,
interests, skills, projects, and contact links. Keep the file valid JSON.
There is no automated schema validator, so the field names and value types
below must be maintained by hand.

## Fields used by the page

| Field | Type | Description |
| --- | --- | --- |
| `profile.name` | string | Name shown in the profile heading. |
| `profile.bio` | string | Short profile description. |
| `profile.availability` | string | Current availability text. |
| `profile.impact` | array of strings | Impact items shown in the status card; also used as the builder list if `profile.builder` is absent. |
| `profile.builder` | array of strings | Builder principles shown in the impact card. |
| `profile.research` | array of strings | Research and systems topics. |
| `interests` | array of strings | Topics displayed in the interests section. |
| `skills` | object of string arrays | Skill groups, where each key is a group title and each value is its list of skills. |
| `projects` | array of project objects | Featured projects. Each project uses `title` and `description`, optionally `type`, and optionally a `links` array. |
| `projects[].links` | array of link objects | Project links with `label` and `url` strings. |
| `links` | array of link objects | Contact and social links with `name` and `url` strings. |

## Example

```json
{
  "profile": {
    "name": "Alexey Lyapin",
    "bio": "Backend developer building reliable systems.",
    "availability": "Open to interesting projects",
    "impact": ["Open-source maintainer"],
    "builder": ["Clean Architecture"],
    "research": ["Distributed Systems"]
  },
  "interests": ["Backend Architecture"],
  "skills": {
    "Languages": ["JavaScript", "Python"]
  },
  "projects": [
    {
      "title": "Example project",
      "description": "A short description.",
      "links": [
        { "label": "GitHub", "url": "https://github.com/example/project" }
      ]
    }
  ],
  "links": [
    { "name": "Email", "url": "mailto:alexey.lyapin.inbox@gmail.com" }
  ]
}
```

## Notes

- Some profile details, such as the avatar and role, are currently present in
  `data.json` but are set directly in `index.html`, not read by `script.js`.
- The `themes` field is currently not read by `script.js`.
- Use plain text for content and valid destination URLs for links. The renderer
  currently interpolates some JSON values into HTML, so only trusted editors
  should modify this data until rendering is hardened.
