# MagicKlean Website

[**Open the live website →**](https://mariamparvez.github.io/magicklean-website/?v=c56475ce)

A responsive laundry and dry-cleaning sample website built with HTML, CSS and vanilla JavaScript.

[View five editable logo concepts](https://mariamparvez.github.io/magicklean-website/logo-concepts.html)

## Features

- Nine image-based laundry service cards with enquiry actions
- Six grouped business categories with continuous scrolling, play/pause, arrows and an expandable category grid
- Animated process cards with hover effects and reduced-motion support
- Clear sample pricing by month, kilogram and garment
- A custom AI-generated linen banner and SVG icons
- Responsive mobile navigation and sample booking/enquiry dialogs
- A framed grey-blue design, serif headings and a split hero using the supplied laundry photograph

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

This is a demonstration website. Booking drafts save in the visitor's browser only. Enquiry forms do not send messages, and the WhatsApp button demonstrates the experience without a connected business number. Prices are illustrative and need business confirmation. Sample testimonials have been removed. Real reviews, turnaround times, coverage and live booking integration are deferred until confirmed details are supplied.

## Imagery

Photo source URLs are recorded in `image-sources.json`. The generated banner prompt is in `DESIGN-ASSETS.md`. Third-party images retain their respective owners' rights.
