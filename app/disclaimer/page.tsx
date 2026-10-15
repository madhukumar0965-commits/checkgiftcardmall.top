import { pageMetadata } from "@/lib/seo";
import StaticPage from "@/components/StaticPage";

export const metadata = pageMetadata(
  "Disclaimer | Independent Prepaid Card Safety Guide",
  "Read the limits of our independent prepaid and gift card education. CheckGiftCardMall does not access balances, accounts, transactions, or issuer systems.",
  "/disclaimer",
);

export default function DisclaimerPage() {
  return (
    <StaticPage label="Disclaimer" path="/disclaimer">
      <span className="eyebrow"><span className="eyebrow-dot" /> Important information</span>
      <h1>Educational information, not account support.</h1>
      <p>The information on CheckGiftCardMall is provided for general educational purposes. It is not financial, legal, tax, or professional advice and does not replace the terms or disclosures provided with an individual card.</p>
      <h2>Independent and unaffiliated</h2>
      <p>CheckGiftCardMall is an independent informational resource. We are not affiliated with, endorsed by, or a representative of any issuer, payment network, retailer, financial institution, or card program. Mentioning a type of payment card in an explanatory guide does not imply sponsorship or partnership.</p>
      <h2>No card or account services</h2>
      <p>We cannot check balances, activate cards, access accounts, accept payments, process refunds, review transactions, or resolve declines. This website does not collect card numbers, PINs, security codes, or balances. Do not send sensitive card information to us.</p>
      <h2>Issuer terms and changing information</h2>
      <p>Card products have different terms, fees, expiration rules, merchant acceptance, transaction limits, and support processes. Those details may change. Always consult the current materials supplied with your card and contact the issuer directly through its verified contact information for advice about your card or a specific transaction.</p>
      <h2>Third-party websites</h2>
      <p>External websites, including issuer websites, are operated independently and have their own terms and privacy practices. Verify the web address using the original card packaging before entering information. A secure connection or familiar logo does not by itself prove that a page is genuine.</p>
      <h2>No guarantee</h2>
      <p>We make reasonable efforts to explain common concepts clearly, but cannot guarantee that general information is complete, current, or applicable to every card or transaction. Use the guides as a starting point, not as a substitute for an issuer’s records or official instructions.</p>
    </StaticPage>
  );
}
