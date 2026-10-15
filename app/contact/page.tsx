import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import StaticPage from "@/components/StaticPage";

export const metadata = pageMetadata(
  "Contact CheckGiftCardMall | Independent Prepaid Card Safety Guide",
  "Contact CheckGiftCardMall with content feedback. Do not send card details; for card or account help, contact the issuer through details printed on your card.",
  "/contact",
);

export default function ContactPage() {
  return (
    <StaticPage label="Contact" path="/contact">
      <span className="eyebrow"><span className="eyebrow-dot" /> Get in touch</span>
      <h1>We welcome thoughtful feedback.</h1>
      <p>Have a question about our general educational content, a suggestion for making a guide clearer, or a correction to flag? You can reach the CheckGiftCardMall editorial team by email.</p>
      <p><a className="btn btn-primary-ink" href={`mailto:${site.email}`}>Email {site.email} <span aria-hidden="true">↗</span></a></p>
      <div className="article-callout">
        <strong>Please keep card details private.</strong>
        <p>Do not email card numbers, PINs, CVVs, security codes, passwords, balances, or transaction screenshots. We cannot check balances, activate cards, access accounts, investigate transactions, or arrange refunds.</p>
      </div>
      <h2>Need help with a specific card?</h2>
      <p>Contact the issuer using the phone number or web address printed on the card or its original packaging. That is the right channel for balance questions, lost or stolen cards, declines, refunds, and suspected unauthorized activity. Do not rely on an unexpected call or message claiming to be support.</p>
      <h2>Independent resource</h2>
      <p>{site.name} is not affiliated with, endorsed by, or a representative of any card issuer, payment network, retailer, or financial institution. Messages sent to us do not reach an issuer and cannot change a card account.</p>
    </StaticPage>
  );
}
