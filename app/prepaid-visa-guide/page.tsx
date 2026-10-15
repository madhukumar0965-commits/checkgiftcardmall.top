import GuidePage, { type GuideSection } from "@/components/GuidePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Prepaid Payment Help | Independent Card Safety Guide",
  "Understand prepaid card declines, merchant rules, billing details, and safer ways to pay. Always confirm product terms for your card with its issuer first.",
  "/prepaid-visa-guide",
);

const sections: GuideSection[] = [
  {
    title: "Check who issued your particular card",
    body: <>
      <p>A prepaid card that uses a widely accepted payment network is still issued and managed under a specific program. The issuer or program manager sets the card’s terms, including supported transactions, fees, registration requirements, and dispute process. A network mark indicates a payment network relationship, not a guarantee that every merchant or payment type will accept the card.</p>
      <p>Look on the card, its packaging, and the cardholder agreement for the issuer’s name and official contact information. The retailer where you bought a card may not administer it. Different prepaid products can share a network brand while following different rules. Use the printed web address or phone number to reach the organization responsible for this card, and read the associated terms before relying on assumptions.</p>
      <p>This guide explains general patterns only. It does not activate cards, check balances, access accounts, or process payments. We cannot identify the rules for an individual card from its appearance. For a question about your own purchase or account, contact the issuer through the details printed on the card or packaging.</p>
    </>,
  },
  {
    title: "Common reasons a prepaid payment is declined",
    body: <>
      <p>The most straightforward reason is that the total exceeds the available funds. Remember to account for sales tax, delivery charges, gratuity, currency conversion, and any pending authorization. The card’s starting value may not match the amount still available after a purchase or temporary hold. The issuer can confirm the current amount and explain pending activity.</p>
      <p>A merchant may not accept prepaid cards, may not accept that particular card program, or may require a transaction type the card does not support. Some merchants need to reserve extra funds before they know a final bill, such as lodging, fuel, vehicle rentals, or restaurants. A card with insufficient available funds for the authorization can be declined even if the eventual purchase would have been lower.</p>
      <p>Other possible causes include an inactive card, an expired card, a transaction limit, an incorrect billing address, a security block, or a merchant category restriction. The decline message may be brief and may not reveal the reason. Avoid repeated attempts if you are unsure whether the merchant has placed a hold. Ask the merchant whether it accepts this product, then ask the issuer to explain a specific decline.</p>
    </>,
  },
  {
    title: "Online purchases and billing information",
    body: <>
      <p>Some online checkouts ask for a billing ZIP code or address. Certain prepaid cards need the cardholder to register an address with the issuer before those checks can pass. If the card instructions mention registration, use only the issuer’s verified site and follow its process. Do not assume that the shipping address is automatically the right billing address or that every card can be registered.</p>
      <p>Enter billing details exactly as they are recorded with the issuer, and check for simple typing errors or an expired card date. A mismatch can lead to a decline even when there are funds available. If the checkout asks for information that the issuer’s instructions do not mention, pause and contact the merchant or issuer rather than guessing.</p>
    </>,
  },
  {
    title: "Split payments and purchase totals",
    body: <>
      <p>When a purchase costs more than the amount on a prepaid card, a split tender may be possible, but the merchant decides whether its checkout supports it. Ask before beginning the transaction. If supported, tell the cashier or select the split-payment option and specify the amount to charge to the prepaid card first. Some online checkouts do not allow two payment methods on a single order.</p>
      <p>It is often difficult to split a transaction after an authorization has been sent. Make sure the amount you request will leave enough available funds for any tax or additional authorization. If the merchant cannot split payment, choose another method accepted by that merchant instead of repeatedly submitting a full-total charge.</p>
    </>,
  },
  {
    title: "Recurring, international, and restricted transactions",
    body: <>
      <p>Some prepaid products are designed for one-time purchases and may not support subscriptions or automatic renewals. A recurring merchant may make a small verification request, retry charges, or bill after a trial period ends. Before you enroll, review both the card’s restrictions and the service’s cancellation terms. Do not assume a card can stop a subscription by itself; contact the merchant to cancel its service.</p>
      <p>International purchases, cash withdrawals, transfers, gambling, rentals, and other specialized transactions may be restricted or unavailable for some products. Foreign-currency transactions can also involve conversion costs or a different final total. Confirm the issuer’s terms before attempting a transaction, especially when a merchant needs to pre-authorize an estimated expense.</p>
    </>,
  },
  {
    title: "A safer troubleshooting sequence",
    body: <>
      <ol>
        <li>Check the total, including tax, tip, delivery, and any amount the merchant may reserve.</li>
        <li>Confirm that the card is activated if its packaging or issuer instructions require activation.</li>
        <li>Ask the merchant whether it accepts this prepaid product and transaction type.</li>
        <li>For an online purchase, verify billing details and registration instructions with the issuer.</li>
        <li>Review pending authorizations rather than resubmitting a charge that may already be in progress.</li>
        <li>Contact the issuer using the printed contact details and ask about the specific decline.</li>
      </ol>
      <p>Keep the date, merchant name, amount, and any receipt available when talking with support. Do not share the card’s credentials with an unsolicited caller or a website reached through a suspicious message. A legitimate support team should be reached through a verified channel you selected yourself.</p>
    </>,
  },
  {
    title: "Keep card details private",
    body: <>
      <p>Treat the card number, PIN, and security code like cash. Do not post them, send them to this website, or read them aloud in a public place. Store the physical card securely and keep purchase receipts private. If you take a photo for your own records, understand that it may expose details in cloud backups or shared albums; avoiding photos is safer.</p>
      <p>Use the issuer’s printed web address, check the domain, and avoid signing in from public computers. A padlock icon only indicates an encrypted connection. It does not prove the site is controlled by the issuer. Watch for urgent threats, requests for gift card payments, and demands for one-time passcodes. If you think information has been exposed, contact the issuer promptly using the number on your physical card or packaging.</p>
    </>,
  },
];

export default function PrepaidGuidePage() {
  return <GuidePage title="Prepaid card payments, made clearer" intro="A practical guide to common prepaid payment declines, merchant rules, billing details, and sensible next steps—without entering card details online." label="Prepaid payment guide" path="/prepaid-visa-guide" updated="2026-10-15" sections={sections} />;
}
