# Radh Shahmat — Portfolio v2

A fast, dependency-free, animation-heavy portfolio redesign for GitHub Pages, Vercel, or any static host.

## Included

- Fast vanilla HTML/CSS/JS — no build step and no framework dependency.
- Fast cube-grid name reveal inspired by cinematic sci-fi title reveals.
- Scroll reveals, magnetic buttons, custom cursor, project tilt, marquee, glow effects and micro-interactions.
- Four requested projects with Live Demo + exact GitHub repository buttons.
- Expanded NLP research section with the requested project description and skills.
- Updated GitHub and LinkedIn links.
- Download CV/Resume button pointing to `Radh_Shahmat_CV.pdf`.
- Contact form wired to FormSubmit using your email. If you prefer Formspree/Google Forms/another provider, replace the form action in `index.html`.
- Responsive mobile layout and `prefers-reduced-motion` support.

## CV

Drop your final CV file into the root folder and name it:

`Radh_Shahmat_CV.pdf`

The existing Download CV / Resume button will then work automatically.

## Contact form

The current form uses:

`https://formsubmit.co/radhshahmat91@gmail.com`

On the first submission, FormSubmit may require email confirmation. You can replace the `action` URL in `index.html` with your preferred form endpoint.

## Deploy

### GitHub Pages
Upload the contents of this folder to your repository and enable GitHub Pages from the repository's root/branch.

### Vercel
Import the repository as a static project. No build command is required. Output directory is the project root.

## Project links

- Riz Restaurant — https://github.com/radhshahmat91/Riz-Restaurant
- AcademiaConnect — https://github.com/radhshahmat91/AcademiaConnect
- Vroomly2 — https://github.com/radhshahmat91/Vroomly2
- JobNest-MERN — https://github.com/radhshahmat91/JobNest-MERN

## Notes

The portfolio uses CSS-generated visual project covers instead of remote stock images, which reduces network requests and improves initial loading speed.


## Images & contact

- The profile photo uses the public GitHub avatar for `radhshahmat91`.
- Project thumbnails use lightweight editorial photography relevant to each project category rather than live/demo screenshots.
- The contact form uses FormSubmit and redirects to `thank-you.html` after submission. The destination is `radhshahmat91@gmail.com`. FormSubmit may require one-time activation/confirmation of the destination email on first use.
