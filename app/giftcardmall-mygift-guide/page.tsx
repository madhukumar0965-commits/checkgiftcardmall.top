import Image from "next/image";
import Link from "next/link";
import GuidePage, { type GuideSection } from "@/components/GuidePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Independent Gift Card Balance and Safety Resource Guide",
  "GiftCardMall/MyGift balance and Visa guidance: identify your issuer, understand activation and registration, review pending activity, and find support safely.",
  "/giftcardmall-mygift-guide",
);

const sections: GuideSection[] = [
  {
    title: "Understanding GiftCardMall/MyGift",
    body: <>
      <p>People search GiftCardMall/MyGift for card instructions, balance information, or help with a payment. The right service depends on the exact card and its issuer. The retailer, card program, and issuer may be different organizations, so verify the information printed with your card.</p>
      <p>CheckGiftCardMall is independent—not GiftCardMall or MyGift. We cannot check balances, activate or register cards, view transactions, process payments, or access accounts. This page explains general card topics, not account-specific services.</p>
    </>,
  },
  {
    title: "How to find the right card instructions",
    body: <>
      <p>Check the reverse of the physical card, original packaging, cardholder agreement, and purchase receipt. Look for the issuer or program administrator, support details, and exact service address. A retailer may sell cards from multiple programs without managing their accounts.</p>
      <h3>Physical and digital cards</h3>
      <p>Keep packaging and receipts until questions are resolved. For digital cards, start from the expected purchase confirmation or delivery message and verify the sender. If the issuer is unclear, ask the retailer where the card was purchased instead of guessing a website from its logo.</p>
    </>,
  },
  {
    title: "GiftCardMall/MyGift balance and transaction activity",
    body: <>
      <p>For an actual GiftCardMall/MyGift balance, follow the issuer instructions supplied with your card. Our site has no balance checker. Never send us card numbers, PINs, security codes, or balance information.</p>
      <h3>A safer way to look for balance instructions</h3>
      <ol>
        <li>Identify the issuer from your card, packaging, or cardholder agreement.</li>
        <li>Use the exact service address printed in those materials.</li>
        <li>Check the domain and read the issuer’s own instructions before proceeding.</li>
        <li>If you are uncertain, stop and call the verified number printed on the card.</li>
      </ol>
      <h3>Why the available amount can change</h3>
      <p>The printed value usually describes a starting amount. Purchases reduce funds; pending authorizations may temporarily reserve money before a final charge. Refunds, reversals, fees, and adjustments can also affect what is available under the card’s terms.</p>
      <h4>When a balance seems different</h4>
      <p>Compare receipts and note whether an entry is pending or posted. Ask the merchant about a purchase or refund it handled, then ask the issuer about account activity. Processing times vary, and this guide cannot see transactions.</p>
    </>,
  },
  {
    title: "Searching “giftcardmall/mygift” and “mcgift.giftcardmall.com”",
    body: <>
      <p>Searches such as “giftcardmall/mygift,” “mcgift giftcardmall/mygift,” and “mcgift.giftcardmall.com” may be attempts to find card services. A search phrase or domain in results does not verify that a page is right for your card. This independent guide does not operate or verify mcgift.giftcardmall.com.</p>
      <h3>Verify before sharing information</h3>
      <p>Compare the entire address with the one printed on your card materials. A familiar logo, padlock, or word inside a longer domain does not prove who runs a site. Avoid unexpected links and urgent requests. If you cannot verify a page, close it and use contact details from the card.</p>
    </>,
  },
  {
    title: "GiftCardMall/MyGift Visa card payment questions",
    body: <>
      <p>For a GiftCardMall/MyGift Visa card, read the exact product terms to identify its issuer and supported uses. A network mark does not guarantee acceptance at every merchant or identify the organization managing the account.</p>
      <h3>Why a payment may be declined</h3>
      <p>The total may exceed available funds, a pending hold may exist, or the merchant or card terms may not support the purchase. Tax, delivery, tips, billing-address checks, and transaction restrictions may matter. Ask the merchant about acceptance and the issuer about a specific decline.</p>
      <h3>Online and split payments</h3>
      <p>Some checkouts require billing details or do not allow multiple payment methods. Confirm merchant rules before retrying. If the charge may still be processing, repeated attempts can create confusion.</p>
    </>,
  },
  {
    title: "Activation and registration depend on the card",
    body: <>
      <p>Some cards are ready after purchase; others require activation. Registration may be optional or required for certain uses, such as online billing-address checks. Follow the instructions for your exact card rather than assuming all cards use the same process.</p>
      <h3>Activation is not the same as balance</h3>
      <p>Activation concerns whether a card is enabled under its program rules. Available funds are the amount eligible for a purchase. The issuer can confirm a card’s status. If instructions direct you to activate or register, independently verify the address first. This site provides no activation fields and never requests card details.</p>
    </>,
  },
  {
    title: "Troubleshooting common card problems",
    body: <>
      <p>If a card page will not load, confirm its address from the original card materials; do not follow an unexpected message offering a workaround. If a card is not recognized, check that you have the instructions for the correct program. Keep a receipt if the card or package is damaged.</p>
      <h3>Declines, refunds, and activation issues</h3>
      <p>Ask a merchant about its checkout or return, and ask the issuer about card status, activity, or a decline reason. Note the merchant, date, and amount. For more general help, see our <Link href="/troubleshooting">troubleshooting steps</Link> and <Link href="/balance-guide">balance guide</Link>.</p>
    </>,
  },
  {
    title: "Protect card details and find the right support",
    body: <>
      <p>Treat a card number, PIN, and security code like cash. Do not post card photos or send credentials in ordinary messages. Be wary of threats, urgency, fees to release funds, or demands for one-time codes. If details may be exposed, contact the issuer using the physical card or packaging.</p>
      <h3>Who can answer your question?</h3>
      <p>Use this site for general explanations. Ask the merchant about purchases and returns; ask the issuer about balances, activation, registration, lost cards, and account activity. Visit our <Link href="/security">card privacy guide</Link> and <Link href="/faq">GiftCardMall/MyGift FAQs</Link> for more information.</p>
    </>,
  },
];

export default function GiftCardSearchGuidePage() {
  return (
    <GuidePage
      title="GiftCardMall/MyGift Balance, Visa & Card Guide"
      intro="Independent information about GiftCardMall/MyGift balance searches, Visa cards, issuer instructions, activation, registration, transactions, and card safety."
      label="Gift card search guide"
      path="/giftcardmall-mygift-guide"
      updated="2026-10-15"
      sections={sections}
      visual={
        <figure className="guide-visual">
          <Image
            src="/issuer-finder-illustration.svg"
            alt="Generic gift card, magnifying glass, and checklist illustrating how to verify issuer information"
            width={900}
            height={480}
          />
          <figcaption>Start with your card. Verify the details. Contact the right organization.</figcaption>
        </figure>
      }
    />
  );
}
