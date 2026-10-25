# MagicKlean Website

[**Open the live website →**](https://mariamparvez.github.io/magicklean-website/?v=c56475ce)

A responsive laundry and dry-cleaning sample website built with HTML, CSS and vanilla JavaScript.

## Features

- Nine image-based laundry service cards with enquiry actions
- Sixteen commercial business cards with continuous scrolling, play/pause and left/right controls
- Animated process cards with hover effects and reduced-motion support
- Pricing comparison with a highlighted everyday laundry plan
- A custom AI-generated linen banner and SVG icons
- Responsive mobile navigation and sample booking/enquiry dialogs

## Preview locally

Requires Node.js 18 or newer. No packages or build step are needed.

```sh
node preview.mjs
```

Open http://127.0.0.1:4174 in your browser.

## Deployment

Serve the `dist/` directory with any static website host. The entry point is `dist/index.html`; all images and icons are included in `dist/assets/`.

GitHub Pages publishes the `gh-pages` branch. To publish an updated `dist/` folder after committing your changes:

```sh
git subtree push --prefix dist origin gh-pages
```

## Sample interactions

This is a demonstration website. Booking requests save in the visitor's browser only. Enquiry forms do not send messages, and the WhatsApp button demonstrates the experience without a connected business number. Prices and testimonials reproduce the supplied design.

## Imagery

Photo source URLs are recorded in `image-sources.json`. The generated banner prompt is in `DESIGN-ASSETS.md`. Third-party images retain their respective owners' rights.
