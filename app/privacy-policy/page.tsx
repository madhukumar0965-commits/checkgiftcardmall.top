import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import StaticPage from "@/components/StaticPage";

export const metadata = pageMetadata(
  "Privacy Policy | Independent Prepaid Card Safety Guide",
  "Read how CheckGiftCardMall handles website visits and privacy. This informational site does not collect card numbers, PINs, security codes, or balance information.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <StaticPage label="Privacy policy" path="/privacy-policy">
      <span className="eyebrow"><span className="eyebrow-dot" /> Your privacy matters</span>
      <h1>Privacy policy</h1>
      <p>Last updated: October 15, 2026</p>
      <p>This policy describes the general privacy approach for {site.name}, an informational website. We do not provide financial accounts, card transactions, or issuer services.</p>
      <h2>Information you provide</h2>
      <p>This site has no forms that collect card information and does not request or process card numbers, PINs, security codes, or balance details. The contact page provides a mailto link only; if you choose to email us, your email provider will send the information you include. Please do not email card credentials or sensitive financial information.</p>
      <h2>Website and technical information</h2>
      <p>When you visit a website, hosting and security providers may process limited technical information needed to deliver pages, protect the service, and diagnose reliability issues. Such information may include a browser type, device information, approximate request time, and server logs. The exact data and retention periods depend on the hosting configuration and providers used when the site is deployed.</p>
      <p>This project does not include a database, account system, analytics integration, advertising tracker, or API route. If the site owner adds a third-party service later, this policy should be updated to identify that service and describe the relevant data use before launch.</p>
      <h2>Cookies and external sites</h2>
      <p>The informational pages do not intentionally set marketing or tracking cookies. Infrastructure providers may use essential technical storage to deliver or secure the site. Links that you follow to issuer or other third-party websites are governed by those sites’ own privacy practices. Verify a destination before sharing information with it.</p>
      <h2>Children and sensitive information</h2>
      <p>This site is not designed to collect personal information from children. Do not send us card details, identity documents, account credentials, or private transaction records. For card-specific help, use the issuer’s verified contact information printed on the card or original packaging.</p>
      <h2>Changes and contact</h2>
      <p>We may revise this policy as the site or its hosting changes. The current version will be published on this page with an updated date. Questions about this privacy notice can be sent through the <a href="/contact">contact page</a>. Do not include sensitive card information in your message.</p>
    </StaticPage>
  );
}
