# DigiStano SEO deployment notes

## What was implemented

- Unique search titles, descriptions, keywords, social metadata, and canonical URLs for every individual product route.
- Product, rental-service, breadcrumb, organization, and website structured data.
- A sitemap containing the core pages, category pages, and 32 canonical individual product pages.
- Canonical consolidation for products that appear under several categories, preventing duplicate URLs from splitting ranking signals.
- Rental-focused calls to action on products listed in DigiStano's rental form.
- Crawlable links from the rental service page to the main rentable equipment pages.
- Complete visible rental inventory, linking every device that already has a product page.
- Dedicated rental landing pages for CMC 500, CP CB2, Megger, and b2 electronics searches.
- Dedicated partial-discharge and MV cable/VLF engineering-service pages for Saudi Arabia, UAE, Qatar, and Oman.
- `llms.txt` containing verified company, service, and rental-equipment references for AI discovery.
- Explicit search crawler directives and large image-preview support.

## Deployment

1. Keep the existing production environment variables; they were intentionally not included in this project archive.
2. Replace the website project files with this version or merge the changes into the current repository.
3. Run `npm ci`.
4. Run `npm run build`.
5. Deploy to Vercel using the same production domain: `https://www.digistano.com`.

## Google and Bing actions after deployment

1. Verify `https://www.digistano.com/sitemap.xml` contains the product URLs.
2. Submit that sitemap in Google Search Console.
3. Use URL Inspection and request indexing for the rental page and the highest-priority products first.
4. Submit the same sitemap in Bing Webmaster Tools.
5. Monitor impressions, clicks, queries, and average position weekly.

Suggested first URLs:

- `https://www.digistano.com/services/rental`
- `https://www.digistano.com/products/switchgear/cibano-500`
- `https://www.digistano.com/products/relays/cmc-356`
- `https://www.digistano.com/products/hv-cables/hva45-hva45td`
- `https://www.digistano.com/products/ct-vt/cpc-100`
- `https://www.digistano.com/products/transformers/testrano-600`
- `https://www.digistano.com/services/engineering-services/partial-discharge-testing`
- `https://www.digistano.com/services/engineering-services/mv-cable-vlf-testing`
- `https://www.digistano.com/services/rental/cmc-500`
- `https://www.digistano.com/services/rental/cp-cb2`

## Important inventory note

The original supplied project contained no CMC 500 product image or brochure. The confirmed rental inventory now has a dedicated CMC 500 rental landing page using the shared rental-service image. A real CMC 500 photograph and brochure can be added later when available.

SEO improves discoverability but does not guarantee the first organic position. Rankings also depend on indexing, competition, customer reviews, authoritative industry links, local business signals, and ongoing content quality.
