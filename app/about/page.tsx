import Link from "next/link";
import StaticPage from "@/components/StaticPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "About CheckGiftCardMall | Independent Prepaid Card Safety Guide",
  "Learn why CheckGiftCardMall exists, how our independent prepaid and gift card education is written, and what we can—and cannot—do to help cardholders today.",
  "/about",
);

export default function AboutPage() {
  return (
    <StaticPage label="About" path="/about">
      <span className="eyebrow"><span className="eyebrow-dot" /> About this resource</span>
      <h1>Clear information. Honest boundaries.</h1>
      <p>{site.name} is an independent informational resource for people who want to understand prepaid and gift cards. We explain common situations in plain language, with practical steps for protecting personal information and finding the organization that can answer a card-specific question.</p>
      <h2>What we are here to do</h2>
      <p>CheckGiftCardMall organizes general topics—such as pending authorizations, refund timing, merchant acceptance, and suspicious balance-check pages—into readable guides. Our goal is to help readers ask informed questions and navigate to the right verified issuer support channel.</p>
      <p>We aim to use measured language, distinguish common possibilities from guaranteed outcomes, and avoid implying that every prepaid or gift card works the same way. Issuers and programs may change their terms, support processes, and transaction rules. Read the material supplied with your card for the rules that apply to it.</p>
      <h2>What we do not do</h2>
      <p>We are not a card issuer, payment processor, retailer, bank, or account-support service. We are not affiliated with, endorsed by, or a representative of any card issuer or payment network. We do not offer balance checks, activation, account access, payment processing, refund handling, or transaction review. There are no card-number, PIN, or security-code forms on this site.</p>
      <p>For a current balance, lost card, account alert, transaction dispute, or other personal matter, contact the issuer using the phone number or website printed on your physical card or original packaging. General help starts with our <Link href="/balance-guide">balance guide</Link>, <Link href="/prepaid-visa-guide">prepaid payment guide</Link>, and <Link href="/troubleshooting">troubleshooting steps</Link>.</p>
      <h2>Editorial approach</h2>
      <p>We write original explanatory copy and present it as general education, not financial, legal, or issuer-specific advice. We review for clarity and safety, but no web guide can replace a card’s terms or the issuer’s current account records. If you notice an unclear statement, contact us at <Link href="/contact">our contact page</Link>.</p>
    </StaticPage>
  );
}
