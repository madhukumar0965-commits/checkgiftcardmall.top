# CheckGiftCardMall

An independent, static informational website about prepaid and gift card safety. It does not collect card details, check balances, activate cards, process payments, or access issuer accounts.

## Before launch

Update the site identity in `lib/site.ts`:

- The site name is `CheckGiftCardMall`.
- The canonical HTTPS domain is `https://checkgiftcardmall.top`.
- Replace `hello@yourdomain.com` with a monitored contact email.
- Review the independent [GiftCardMall and MyGift search guide](/giftcardmall-mygift-guide) and ensure its clear non-affiliation wording fits your intended use.

Then replace the Google Search Console placeholder in `app/layout.tsx` with the HTML tag verification token from Search Console. The canonical URL, sitemap, robots file, Open Graph URLs, structured data, contact link, and footer all use the shared site configuration.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). To produce and run the production build:

```bash
npm run build
npm start
```

## Vercel deployment checklist

1. Push the project to your Git provider and import the repository into Vercel.
2. Use the Next.js framework preset; use `npm install` for installation and `npm run build` for the build command.
3. Set the production domain and HTTPS in Vercel, then update `lib/site.ts` to that exact canonical origin before deploying.
4. Replace the Google Search Console verification value in `app/layout.tsx` with the token for the production property.
5. Deploy and check the production root, all eleven content routes, `/sitemap.xml`, and `/robots.txt`.
6. Confirm the production canonical links, metadata, social image, and structured data reference `checkgiftcardmall.top`.
7. Configure a monitored mailbox for the contact address. The contact page intentionally uses only a `mailto:` link.
8. Review all page copy and the issuer-independence notice before publishing. Do not add card-number, PIN, security-code, balance, or payment collection fields.

## Post-launch SEO checklist

- Add and verify the production domain in Google Search Console, then submit `https://checkgiftcardmall.top/sitemap.xml`.
- Inspect the home page and representative guide pages in URL Inspection; check canonical URLs and crawlability.
- Run Lighthouse on mobile and desktop. Aim for scores above 90 in Performance, Accessibility, Best Practices, and SEO; address any regressions rather than hiding audits.
- Validate the home Organization/WebSite, FAQ FAQPage, guide Article, and inner-page BreadcrumbList JSON-LD with Google’s Rich Results Test and Schema.org Validator.
- Check title and description snippets, Open Graph previews, Twitter cards, and the social image after the domain and brand have been replaced.
- Confirm each page has one descriptive H1, useful internal links, a visible independence notice, and no unexpected form fields or card-data collection.
- Recheck Search Console coverage, HTTPS, sitemap status, broken links, and Core Web Vitals after indexing begins.

## Project structure

```text
app/
  about/page.tsx
  balance-guide/page.tsx
  contact/page.tsx
  disclaimer/page.tsx
  faq/page.tsx
  giftcardmall-mygift-guide/page.tsx
  privacy-policy/page.tsx
  prepaid-visa-guide/page.tsx
  security/page.tsx
  troubleshooting/page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  BootstrapClient.tsx
  Breadcrumbs.tsx
  GuidePage.tsx
  IndependenceNotice.tsx
  JsonLd.tsx
  SiteFooter.tsx
  SiteHeader.tsx
  StaticPage.tsx
lib/
  faq.ts
  seo.ts
  site.ts
public/
  cardwise-hero.svg
  cardwise-social.svg
types/
  bootstrap-bundle.d.ts
```
