# MagicKlean Website

[**Open the live website →**](https://mariamparvez.github.io/magicklean-website/)

A responsive laundry and dry-cleaning sample website built with HTML, CSS and vanilla JavaScript.

[View five editable logo concepts](https://mariamparvez.github.io/magicklean-website/logo-concepts.html)

## Features

- Nine image-based laundry service cards with enquiry actions
- Six grouped business categories with continuous scrolling, play/pause, arrows and an expandable category grid
- Animated process cards with hover effects and reduced-motion support
- Four published starting rates, with per-shirt, per-kilogram and per-item units
- Meaningful garment-care photography and custom SVG illustrations
- Responsive mobile navigation and sample booking/enquiry dialogs
- A warm modern design, large editorial typography, a photographic hero and custom animated SVG garment-care graphics
- A branded loader, lazy-loaded images, scroll reveals, reduced-motion support and visible animation pause controls
- Published office details, selectable branch maps, directions, phone/email links and attributed testimonial excerpts

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

Booking is available through links to MagicKlean's official order page and phone number. An optional demo form saves drafts in the visitor's browser only; enquiry previews do not send messages. WhatsApp remains unconnected pending approval. Prices, branch details, opening hours and testimonial excerpts are sourced from MagicKlean's website and linked for context; confirm final prices, service coverage and availability with the business. See `SOURCE-NOTES.md`.

## Imagery

Photo source URLs are recorded in `image-sources.json`. The generated banner prompt is in `DESIGN-ASSETS.md`. Third-party images retain their respective owners' rights.
