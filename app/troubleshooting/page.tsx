import GuidePage, { type GuideSection } from "@/components/GuidePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Card Troubleshooting | Independent Prepaid Card Guide",
  "Use a calm checklist for declines, pending holds, missing refunds, and unexpected card activity, then contact the issuer through verified card packaging.",
  "/troubleshooting",
);

const sections: GuideSection[] = [
  {
    title: "A payment was declined",
    body: <>
      <p>A decline can have several causes and does not automatically mean something is wrong with the card. Begin by checking the purchase total against the amount currently available. Include tax, shipping, gratuity, or a merchant authorization that may temporarily reserve extra funds. If a previous payment is still pending, those funds might not yet be available for another purchase.</p>
      <p>Ask the merchant whether it accepts your specific prepaid product and whether it supports the transaction type. Some checkouts require a registered billing address, an active card, or a payment method that can support a later adjustment. Read the issuer’s instructions rather than relying on a general assumption about prepaid cards. If there is no clear explanation, use the contact information printed on the card or original packaging.</p>
      <p>Avoid repeated attempts when a charge might already be processing. A merchant could send an authorization even if its screen displayed an error. Keep any receipt or error message, note the date and amount, and ask the merchant whether it received the payment request. The issuer can explain its own decline records; this informational site cannot see them.</p>
    </>,
  },
  {
    title: "A purchase is pending or the available amount changed",
    body: <>
      <p>Pending activity may represent a temporary authorization rather than a completed purchase. A merchant can reserve an estimated amount, then submit the final amount later. This can happen in settings where the total is not known at the start. Your available amount might therefore differ from the amount you expect based on completed purchases alone.</p>
      <p>Compare the merchant name, date, amount, and receipt. Contact the merchant to confirm whether the purchase was completed, canceled, or adjusted. The issuer determines how pending activity appears and when it is released; processing time varies. Do not accept a stranger’s offer to remove a hold for a fee, PIN, or security code.</p>
    </>,
  },
  {
    title: "A refund has not appeared",
    body: <>
      <p>Ask the merchant whether it has approved and submitted the refund, and save any receipt or confirmation. The merchant and card issuer may process separate steps, so a return receipt is not always an immediate credit. If the issuer has not received the credit after the timeframe given by the merchant, ask both parties what record or next step is appropriate.</p>
      <p>Use only verified customer-service details from the card or original packaging. Never send a card photo, PIN, or one-time verification code in an ordinary message. For a refund question involving a particular purchase, only the merchant and issuer can see the relevant records.</p>
    </>,
  },
  {
    title: "You see an unfamiliar charge",
    body: <>
      <p>Pause and compare the amount with receipts, recent shopping, and merchant names that may appear differently on a statement. If the activity remains unfamiliar, contact the issuer promptly using the printed number or website. Ask how to protect the card and whether it can review or dispute the transaction. Follow the issuer’s instructions and note the date and name of each support contact.</p>
      <p>If the physical card is lost, stolen, or its details were shared, tell the issuer immediately through a verified channel. Do not reply to an unsolicited message claiming to be support. A person who pressures you to share a PIN, security code, or passcode is not a safe route to account help.</p>
    </>,
  },
  {
    title: "Activation, registration, or PIN questions",
    body: <>
      <p>Some cards require activation or registration before use; others do not. Follow the package-specific instructions and confirm that the URL or phone number belongs to the issuer. Do not enter details into an unrelated balance page or send them to anyone who approaches you through social media.</p>
      <p>PIN availability and reset procedures vary by program. The issuer can confirm whether a PIN exists and explain the authorized reset process. Never include a PIN in a message or share it with this site. We do not activate cards, reset credentials, or access card accounts.</p>
    </>,
  },
  {
    title: "Prepare for a useful support conversation",
    body: <>
      <p>Before calling, gather your purchase receipt, packaging, transaction date, merchant, amount, and any message displayed at checkout. Describe the question clearly: for example, an authorization that is still pending or a merchant-confirmed refund that has not posted. Keep notes about the next steps and any reference number the issuer provides.</p>
      <p>Do not disclose more than the verified support process needs. Avoid sharing full credentials in email or public chat. If you are unsure that a contact route is real, stop and re-open the contact details from the physical card or original packaging. For general explanations, see our <a href="/balance-guide">gift card balance guide</a> and <a href="/faq">common card safety questions</a>.</p>
    </>,
  },
  {
    title: "When the card or packaging looks altered",
    body: <>
      <p>Do not use a card if its packaging appears opened, the PIN covering is damaged, or the card details look exposed before you receive it. Keep the package and receipt, then return to the retailer or contact the issuer through independently verified details. Avoid trying a code or sharing a photo to test whether the card is safe.</p>
      <p>If you already bought or received it, explain what you noticed and ask the seller or issuer what to do next. A card that may have been tampered with should not be treated as a routine checkout issue. Do not accept help from someone who asks you to pay a fee or reveal credentials to secure the funds.</p>
    </>,
  },
];

export default function TroubleshootingPage() {
  return <GuidePage title="Troubleshoot card questions safely" intro="A straightforward checklist for a declined purchase, pending hold, delayed refund, or account question—with clear boundaries about what only an issuer can resolve." label="Troubleshooting" path="/troubleshooting" updated="2026-10-15" sections={sections} />;
}
