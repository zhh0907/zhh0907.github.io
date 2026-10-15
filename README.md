# Honghao Zhao — Personal Website

**[Visit the website](https://zhh0907.github.io/)**

Personal research portfolio covering human-robot interaction, robotics, and AI for health. Built with HTML, CSS, and JavaScript and hosted on GitHub Pages.

## Repository map

| File | Purpose |
| --- | --- |
| `index.html` | Biography, research journey, selected work, and publications |
| `portfolio.css` | Responsive project layout and typography |
| `portfolio.js` | Project filters, video tabs, and embedded demo dialog |
| `assets/` | Optimized videos, posters, project figures, and demo previews |
| `Honghao-Zhao-CV.pdf` | Website-specific CV with combined research interests |
| `.nojekyll` | Serve static files directly |

## Local preview

From this directory, run `python -m http.server 8000` and open `http://localhost:8000/`. No build step is required.

## Maintenance

- Edit research and publication content in `index.html`.
- Update styles in `portfolio.css` and interaction logic in `portfolio.js`.
- HCSF media is intentionally reserved until a demonstration is available.
- Video playback is user-controlled and muted by default; original audio is retained where available.
- Interactive demos load only when requested. Closing the dialog unloads the embedded app.
- Replace `Honghao-Zhao-CV.pdf` explicitly when publishing a new CV; local CV revisions do not automatically update this repository.
- Check desktop/mobile layout and links before committing.
- Keep the repository name `zhh0907.github.io` to preserve the personal-site address.

## Related demos

- [Binocular Motion Lab](https://zhh0907.github.io/binocular-motion-lab/)
- [Eye Tracking & NIHSS Gaze Lab](https://zhh0907.github.io/nihss-gaze-lab/)
