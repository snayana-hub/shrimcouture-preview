# Shrimcouture - preview storefront

Draft e-commerce front end for **Shrimcouture** (handwoven sarees and Indian wear, shipping India + worldwide).
Static HTML/CSS/JS - no build step, no backend.

**Preview:** https://snayana-hub.github.io/shrimcouture-preview/

## Pages
- `index.html` - hero, categories, featured pieces, brand story
- `shop.html` - product grid with category filters (`?cat=sarees`)
- `product.html` - product detail (`?id=<product-id>`), size, quantity, add to cart
- `cart.html` - bag, destination-based shipping and duty estimate, order summary
- `about.html` - story, shipping and duties, returns, fabric care, contact

## Assets
- `assets/data.js` - catalogue (12 placeholder products, prices in INR)
- `assets/app.js` - currency switch (INR/USD/EUR/GBP), cart in localStorage
- `assets/styles.css` - all styling
- `assets/*.webp` - placeholder photography (AI-generated stand-ins, to be replaced with the client's shoot)

## Not final
- Photography is placeholder, prices are indicative
- Wordmark is a type-set placeholder pending the real logo
- Checkout is not connected to a payment provider
