import GuidePage, { type GuideSection } from "@/components/GuidePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Card Privacy & Safety | Independent Gift Card Guide",
  "Keep card details private, recognize suspicious balance-check pages, avoid pressure tactics, and reach your issuer through trusted channels for your next step.",
  "/security",
);

const sections: GuideSection[] = [
  {
    title: "Treat card credentials as private",
    body: <>
      <p>A card number, PIN, and security code can allow someone else to use funds or make transactions. Treat those details like cash: do not post them on social media, share them in a public chat, or send them to a person who contacts you unexpectedly. Card photographs can expose more than they seem to, including barcodes or information on the reverse.</p>
      <p>Keep the physical card and its packaging in a secure place. Retain receipts until purchases, refunds, or questions are settled, then dispose of them in a way that does not expose the full card information. Be mindful of cloud photo backups, shared folders, and screenshots that can make a private image accessible to others.</p>
      <p>CheckGiftCardMall does not ask visitors for numbers, PINs, CVVs, security codes, or balances. We do not have access to issuer systems. If a page using our name asks for credentials, leave the page and do not continue.</p>
    </>,
  },
  {
    title: "Find the issuer’s real website",
    body: <>
      <p>Use the web address printed on the card or the original packaging. Type it into the browser yourself and compare the spelling carefully. Watch for substituted letters, extra words, unusual endings, or misspelled brand names. If the packaging is unavailable, ask the retailer or use a verified phone number from another original issuer document rather than guessing.</p>
      <p>Search results and advertisements can include misleading pages. A matching logo, polished design, or padlock symbol is not enough to prove a website is genuine. Encryption protects the connection, but scammers can also use encrypted connections. Confirm who operates the domain and whether the issuer’s own materials direct you there.</p>
      <p>Do not follow a balance-check link from an unsolicited text, direct message, or email. Be cautious of unexpected QR codes and shortened links because they hide the final destination. If a message says you must act immediately to avoid losing money, verify independently before doing anything.</p>
    </>,
  },
  {
    title: "Notice pressure tactics and unusual requests",
    body: <>
      <p>Scammers may impersonate customer support, a government office, a retailer, or a family member in trouble. Common warning signs include threats, urgency, secrecy, requests to pay a fee to unlock funds, demands for a gift card as payment, or instructions to share a one-time code. Stop the conversation and contact the organization through a number or address you independently verified.</p>
      <p>Legitimate support should not ask you to disclose sensitive details to an unsolicited caller or stranger in social media comments. Do not let anyone watch while you purchase or redeem a card. If pressured, end the call, save the message if safe to do so, and reach out to the issuer using contact details on the physical card or its original packaging.</p>
    </>,
  },
  {
    title: "Browse and communicate carefully",
    body: <>
      <p>Use your own trusted device for card services. Avoid public computers and shared browsers, and sign out when finished. Keep devices and browsers updated and use a screen lock. Do not let a stranger remotely control your device to “fix” a card or install software sent in an unexpected message.</p>
      <p>Use a private network rather than public Wi-Fi when accessing account services. If you must browse on a shared connection, do not enter card details until you can use a trusted private connection. Never send credentials through ordinary email, a public post, or an unverified support chat. When you need issuer assistance, navigate to its verified contact route yourself.</p>
    </>,
  },
  {
    title: "If you think card details were exposed",
    body: <>
      <p>Act promptly, but stay calm. Contact the issuer through the printed number or verified website, explain what information might have been exposed, and ask about blocking or replacing the card, reviewing activity, and disputing unauthorized transactions. If you shared credentials with a suspicious website, also tell the issuer which details you entered and when.</p>
      <p>Change any related account password through the issuer’s official site, especially if you reused it elsewhere. Do not click follow-up links from the suspicious page or reply to the person who contacted you. Keep useful evidence such as message screenshots and transaction receipts, but do not circulate a complete card image.</p>
    </>,
  },
  {
    title: "A short safety checklist",
    body: <>
      <ul>
        <li>Use the URL or phone number printed on original card packaging.</li>
        <li>Read the full domain; do not trust artwork or a padlock alone.</li>
        <li>Keep card numbers, PINs, and security codes out of messages and posts.</li>
        <li>Ignore unexpected pressure to pay fees, share codes, or act secretly.</li>
        <li>Contact the issuer quickly if your card is missing or details were exposed.</li>
      </ul>
      <p>For questions about balances, pending activity, or payment problems, see the <a href="/balance-guide">balance guide</a> and <a href="/troubleshooting">troubleshooting checklist</a>. These are educational resources; account-specific protection and transaction decisions remain with the issuer.</p>
    </>,
  },
  {
    title: "Be cautious when buying a card",
    body: <>
      <p>Buy from a retailer or seller you trust, inspect physical packaging before purchase, and keep the receipt. Avoid cards displayed where the PIN covering has been disturbed or the code is visible. For a digital card, confirm the seller and delivery address before sharing or forwarding the message.</p>
      <p>If something seems wrong, do not test a possibly exposed card on an unfamiliar website. Ask the retailer or issuer through a contact route you verified independently. For a lost card or suspected misuse, contact the issuer quickly and follow its guidance on blocking, replacement, or a transaction dispute.</p>
    </>,
  },
];

export default function SecurityPage() {
  return <GuidePage title="Keep card information private" intro="Practical ways to protect card details, recognize suspicious balance pages, and choose a trusted route when you need help with a specific prepaid or gift card." label="Security & privacy" path="/security" updated="2026-10-15" sections={sections} />;
}
