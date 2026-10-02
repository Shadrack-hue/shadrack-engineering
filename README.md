# Shadrack Engineering

A personal website for Shadrack Favour, Electrical & Software Systems Engineer, based in Nairobi, Kenya.

The site showcases selected software and AI projects, engineering interests, professional background, a Responsive Web Design certification, and LinkedIn contact. It includes responsive layouts, project filters, a theme toggle, and mobile navigation.

## Deploy on Vercel

1. Import this repository as a new project in Vercel.
2. Use the repository root as the Root Directory.
3. The included `vercel.json` selects **Other** as the framework, skips dependency installation and building, and publishes **dist**.
4. No environment variables are required.
5. Select **Deploy**.

Once Git integration is connected, pushes to the production branch can update the deployment automatically.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Files

| File | Purpose |
| --- | --- |
| `dist/index.html` | Site content and metadata |
| `dist/styles.css` | Responsive layouts and light/dark themes |
| `dist/app.js` | Filters, theme preference, and mobile navigation |
| `dist/assets/engineering-hero.webp` | Original conceptual engineering artwork |
| `vercel.json` | Vercel deployment configuration |

## Editing

Edit the files in `dist` directly. This is a static HTML, CSS, and JavaScript site with no package installation or compilation step. Keep `dist` tracked in Git.

The hero image is illustrative artwork; it does not depict a specific product or client project. Existing project and certification links are independent external sites.
