import GuidePage, { type GuideSection } from "@/components/GuidePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Balance Checks | Independent Gift Card Safety Guide",
  "Learn how gift card balances work, why available funds can differ from printed value, how pending holds and refunds affect totals, and how to check safely.",
  "/balance-guide",
);

const sections: GuideSection[] = [
  {
    title: "Start by identifying the card program",
    body: <>
      <p>A gift card may show the name of a retailer, a card network, a service provider, or a separate program administrator. Look at the back of the card and the packaging for words such as “issued by,” “serviced by,” “program manager,” or “balance inquiries.” These labels help distinguish the seller from the organization that can answer account questions.</p>
      <p>Follow only the web address or phone number printed on the physical card or its original packaging. If the card is digital, use the original purchase confirmation or the sender’s trusted delivery message, not a new link from an unexpected text. Check the spelling of the domain character by character. You can type the address into your browser instead of clicking a search advertisement or a link sent by someone you do not know.</p>
    </>,
  },
  {
    title: "Printed value and available balance are different",
    body: <>
      <p>The denomination printed on the front is generally the starting value, not a live statement of what remains. A purchase reduces what is available. Depending on the program, a card can also have fees, transaction restrictions, or timing rules that affect the amount you can spend. Read the card’s terms for its specific rules.</p>
      <p>“Available balance” often means the funds currently eligible for a new authorization. A pending purchase can reserve funds before it becomes a completed transaction. Some merchants request a buffer above the expected final total—for example, a restaurant may authorize an estimated amount before a tip is finalized, while a fuel pump, hotel, or rental desk may reserve a temporary amount. The final posted purchase can be smaller or otherwise different. Until the merchant completes or releases the hold, the available amount may appear reduced.</p>
    </>,
  },
  {
    title: "Pending authorizations: what to expect",
    body: <>
      <p>An authorization is a request to reserve funds, not necessarily a final charge. It can remain pending while the merchant sends the completed transaction or cancels the request. The issuer controls how pending activity is displayed, and the time needed for a hold to fall away depends on the issuer, merchant, transaction type, and applicable terms. There is no single release time that applies to every card.</p>
      <p>If the expected amount or merchant looks unfamiliar, first compare it with your receipt and recent activity. Keep a record of the date, merchant name, and amount. Contact the merchant to ask whether the transaction was finalized or reversed. If you still need help—or do not recognize the purchase—use the issuer’s official support information printed on the card or packaging. Do not send a photograph of the card or its security information in an email or public post.</p>
    </>,
  },
  {
    title: "Why a refund may not show immediately",
    body: <>
      <p>A refund usually has more than one step. The merchant must accept or approve the return and send the credit; the issuer or card program then records it. A receipt showing that a return was requested does not always mean the credit is already available. Processing times differ, so ask the merchant when it sent the refund and retain the receipt or reference number.</p>
      <p>When speaking with the issuer, provide only the information its verified support channel requests and only through that channel. Ask whether a refund is pending, posted, or not yet received. If the merchant confirms a refund but the issuer cannot locate it after the timeframe the merchant provided, ask both organizations what documentation or next step is appropriate. A refund may be applied to the same card even if the physical card has since been discarded, but the issuer must confirm how its program handles that case.</p>
    </>,
  },
  {
    title: "How to avoid fake balance-check websites",
    body: <>
      <p>Fraudulent pages may copy colors, logos, and wording from a card package. They can rank in search results, run sponsored ads, or arrive through a text that says your card is locked. Familiar design and a padlock icon do not establish who operates the page. A secure connection protects data while it travels; it does not prove that the receiving site belongs to the issuer.</p>
      <p>Begin at the issuer or program address printed on the card or original packaging. Read the domain carefully before entering anything. Be wary of misspellings, extra words, unusual domain endings, pop-ups that demand immediate action, or a page that asks for unnecessary information. Do not use a link from an unsolicited message. If the printed address is unreadable, ask the retailer or use the customer-service number on the packaging to confirm the correct destination.</p>
    </>,
  },
  {
    title: "A careful, private balance-check routine",
    body: <>
      <p>Use a device and network you trust, open the address yourself, and make sure the domain matches the issuer’s printed information. Follow the issuer’s own instructions and review its privacy notice. Avoid public computers for card services and sign out when you finish. Never post a card photo on social media, even if the number looks partly covered; the remaining details or barcode may still be useful to someone else.</p>
      <p>Keep receipts and packaging until the card’s activity is settled and any return or dispute is resolved. Store them somewhere private, not in a public shared folder. If you need to record a card for your own purposes, do not put the PIN or security code in an unprotected note. The issuer can advise which information is safe or necessary to retain under its terms.</p>
    </>,
  },
  {
    title: "When to contact the issuer",
    body: <>
      <p>Go directly to the issuer for an amount you do not recognize, a card that is lost or stolen, a PIN problem, an unrecognized decline, an activation question, or a missing refund. The phone number or website printed on the card and packaging is the best starting point. The issuer may ask verification questions through its official support channel; do not share those details with this guide or a person who called unexpectedly.</p>
      <p>Before contacting support, gather the purchase receipt and note the merchant, date, transaction status, and amount. Do not include full card credentials in a message unless the issuer’s official process explicitly requires them and you are sure you are using that process. If you suspect a scam, stop engaging and use a verified route from the physical card. For related searches, read our independent <a href="/giftcardmall-mygift-guide">GiftCardMall and MyGift guide</a>.</p>
    </>,
  },
];

export default function BalanceGuidePage() {
  return <GuidePage title="Understand a gift card balance" intro="Learn what available funds mean, why pending holds and refunds can change the amount you see, and how to protect yourself when looking for balance information." label="Balance guide" path="/balance-guide" updated="2026-10-15" sections={sections} />;
}
