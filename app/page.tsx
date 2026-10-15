import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import IndependenceNotice from "@/components/IndependenceNotice";
import { faqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "GiftCardMall/MyGift | Activate Gift Card | View Your Gift";
const description =
  "Learn how to check your giftcardmall/mygift balance, explore GiftCardMall balance options, activate eligible cards, register cards, and review transactions.";

export const metadata = pageMetadata(title, description, "");

const features = [
  { number: "01", title: "Check your balance", text: "Find the right issuer instructions and understand what your available funds can tell you.", href: "#balance", link: "Balance steps" },
  { number: "02", title: "Activate or register", text: "Learn why activation and registration depend on the terms for your particular card.", href: "#activation", link: "Card management" },
  { number: "03", title: "Review transactions", text: "Understand purchases, pending authorizations, refunds, and other changes to available funds.", href: "#transactions", link: "Transaction details" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.url,
          description: site.description,
          email: site.email,
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          inLanguage: "en-US",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ]} />
      <main id="main-content">
        <section className="hero-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7 hero-copy">
                <span className="eyebrow"><span className="eyebrow-dot" /> GiftCardMall/MyGift guide</span>
                <h1>GiftCardMall/MyGift – Check Balance, Activation, and Card Management</h1>
                <p className="hero-description">Gift cards are a convenient way to shop or give gifts, but it&apos;s important to know your remaining balance. By checking your available funds, you can avoid declined payments and keep track of your spending. Find guidance on checking a giftcardmall/mygift balance, activating eligible cards, registration, recent transactions, and keeping card details safe.</p>
                <div className="hero-actions">
                  <Link className="btn btn-primary-ink" href="#balance">Check balance steps <span aria-hidden="true">→</span></Link>
                  <Link className="btn btn-outline-ink" href="#activation">Card activation guide</Link>
                </div>
                <div className="hero-trust"><span className="trust-check" aria-hidden="true">✓</span> Independent information. Not GiftCardMall or MyGift. No balance lookups.</div>
              </div>
              <div className="col-lg-5 hero-visual">
                <div className="hero-image-frame">
                  <Image src="/checkgiftcardmall-hero.svg" alt="Illustration of a simple card, a shield, and a checklist" width={560} height={480} priority />
                  <div className="image-caption"><span className="caption-spark" aria-hidden="true">✦</span><span><strong>Clarity, not transactions</strong><small>Helpful information for your next step</small></span></div>
                </div>
              </div>
            </div>
            <div className="hero-footnote"><span>01</span><span className="footnote-rule" /> A safer way to get oriented</div>
          </div>
        </section>

        <section className="container notice-wrap" id="about" aria-label="Independence notice">
          <IndependenceNotice />
        </section>

        <section className="section-pad quickstart-section">
          <div className="container">
            <div className="section-heading-row">
              <div>   
                <span className="eyebrow"><span className="eyebrow-dot" /> Start with what you have</span>
                <h2>Three simple steps to understand your card.</h2>
              </div>
              <p>Check your card materials, verify the issuer, and keep your card details private when seeking help.</p>
            </div>
            <div className="quickstart-grid">
              <article className="quickstart-card" id="balance">
                <span className="quickstart-icon" aria-hidden="true">↗</span>
                <span className="quickstart-step">FIRST · IDENTIFY</span>
                <h3>Find the right balance instructions</h3>
                <p>Review your card packaging or documentation to identify the issuer and its verified balance-checking address.</p>
                <Link href="#balance-guide" className="text-link">Read the balance guide <span aria-hidden="true">→</span></Link>
              </article>
              <article className="quickstart-card quickstart-card-highlight" id="activation">
                <span className="quickstart-icon" aria-hidden="true">⌁</span>
                <span className="quickstart-step">NEXT · CHECK</span>
                <h3>Confirm activation and registration</h3>
                <p>Requirements vary by card. Follow the instructions supplied with your card and verify the website before using it.</p>
                <Link href="#giftcardmall" className="text-link">Explore card management <span aria-hidden="true">→</span></Link>
              </article>
              <article className="quickstart-card" id="transactions">
                <span className="quickstart-icon" aria-hidden="true">✓</span>
                <span className="quickstart-step">ALWAYS · STAY PRIVATE</span>
                <h3>Review activity safely</h3>
                <p>Compare purchases, pending authorizations, and refunds. Do not share card numbers, PINs, or security codes with unverified sites.</p>
                <Link href="#security" className="text-link">See safety steps <span aria-hidden="true">→</span></Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad feature-section">
          <div className="container">
            <div className="section-heading-row">
              <div><span className="eyebrow"><span className="eyebrow-dot" /> GiftCardMall/MyGift basics</span><h2>Find guidance for your next step.</h2></div>
              <p>Instructions can differ by issuer and card. Start with the information supplied with your card.</p>
            </div>
            <div className="row g-4">
              {features.map((feature) => (
                <div className="col-md-6 col-lg-4" key={feature.number}>
                  <article className="feature-card">
                    <span className="feature-number">{feature.number}</span>
                    <h3>{feature.title}</h3><p>{feature.text}</p>
                    <Link href={feature.href} className="text-link">{feature.link} <span aria-hidden="true">↗</span></Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad explainer-section" id="balance-guide">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow"><span className="eyebrow-dot" /> Start with the basics</span>
              <h2>Checking a GiftCardMall/MyGift balance.</h2>
              <p>Checking available funds before you shop can help avoid declined payments and make recent activity easier to understand.</p>
            </div>
            <div className="row g-5 align-items-start explainer-grid">
              <div className="col-lg-7">
                <article className="editorial-copy">
                  <h3>How to check your card balance</h3>
                  <ol>
                    <li>Review your card packaging or documentation to identify the issuer.</li>
                    <li>Use the address supplied with your card or on the verified issuer website.</li>
                    <li>Open the balance section, which may be labeled “Check Balance” or “Balance Inquiry.”</li>
                    <li>Enter only the information requested by that verified issuer.</li>
                    <li>Review your available balance and any recent transactions shown.</li>
                  </ol>
                  <p>Keep track of your GiftCardMall balance and compare it with recent spending. If the amount seems wrong, check pending transactions, refunds, and applicable fees before contacting the issuer.</p>
                  <p>Do not enter card details on an unfamiliar page. A search result mentioning GiftCardMall/MyGift is not necessarily the official service for your card.</p>
                </article>
              </div>
              <div className="col-lg-5">
                <aside className="side-note">
                  <span className="side-note-kicker">Keep in mind</span>
                  <h3>Available funds can change.</h3>
                  <p>Purchases, pending authorizations, refunds, and fees may affect what is available. Only the issuer can explain live account activity.</p>
                  <Link href="#balance-guide" className="text-link">Understand balance differences <span aria-hidden="true">→</span></Link>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad safety-section" id="security">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Pause before you share</span>
                <h2>Protect your GiftCardMall/MyGift card details.</h2>
                <p>Treat a gift card like cash. A page that mentions your card or looks familiar is not proof that it belongs to the issuer.</p>
                <Link href="#security" className="btn btn-light-outline">See the privacy checklist <span aria-hidden="true">→</span></Link>
              </div>
              <div className="col-lg-7">
                <div className="safety-checks">
                  <div className="safety-check"><span>01</span><div><h3>Start with the packaging</h3><p>Find the issuer name and website printed on the card or original packaging. Type the address yourself instead of following an unexpected link.</p></div></div>
                  <div className="safety-check"><span>02</span><div><h3>Check the full website address</h3><p>A search result, familiar logo, or padlock does not prove that a website is the right one for your card.</p></div></div>
                  <div className="safety-check"><span>03</span><div><h3>Keep card details private</h3><p>Do not send card numbers, PINs, or security codes in messages or to an unverified site. Contact the issuer through details on your card if something seems wrong.</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad payment-section" id="payments">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="payment-illustration" aria-hidden="true">
                  <div className="payment-orbit orbit-one" /><div className="payment-orbit orbit-two" />
                  <div className="payment-card"><span className="payment-chip" /><span className="payment-lines" /><span className="payment-dot" /></div>
                  <div className="payment-badge">payment<br />ready?</div>
                </div>
              </div>
              <div className="col-lg-6">
                <span className="eyebrow"><span className="eyebrow-dot" /> When a payment does not work</span>
                <h2>Check the details before trying again.</h2>
                <p>A prepaid payment may be declined if available funds are too low, a pending authorization is holding funds, or the merchant does not accept that card type.</p>
                <p>Some cards require activation or registration, and card terms may restrict certain transactions. Acceptance and requirements vary by card and merchant.</p>
                <p>Check the total, billing details, and merchant rules. Follow the issuer&apos;s instructions and avoid repeated attempts if a payment may still be processing.</p>
                <Link href="#payments" className="text-link">Read the prepaid payment guide <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad checklist-section">
          <div className="container">
            <div className="section-heading-row">
              <div><span className="eyebrow"><span className="eyebrow-dot" /> A simple card habit</span><h2>Before you use your gift card.</h2></div>
              <p>Activation, registration, and usage instructions depend on your specific card.</p>
            </div>
            <ul className="list-group checklist-list">
              <li className="list-group-item"><span className="checkmark">✓</span><span>Check whether your card needs activation before use.</span></li>
              <li className="list-group-item"><span className="checkmark">✓</span><span>Review card materials to see whether registration is required for your intended use.</span></li>
              <li className="list-group-item"><span className="checkmark">✓</span><span>Use the verified website and follow the instructions for your specific card.</span></li>
              <li className="list-group-item"><span className="checkmark">✓</span><span>Keep receipts and card packaging until any purchase, return, or activation issue is resolved.</span></li>
              <li className="list-group-item"><span className="checkmark">✓</span><span>Never share a card photo, number, PIN, or security code with strangers.</span></li>
            </ul>
          </div>
        </section>

        <section className="section-pad terms-section">
          <div className="container row g-5 align-items-start">
            <div className="col-lg-5">
              <span className="eyebrow"><span className="eyebrow-dot" /> Make an informed choice</span>
              <h2>Every card has its own terms.</h2>
            </div>
            <div className="col-lg-7 editorial-copy">
              <p>Activation means a card is enabled for use; it is not the same as checking its balance. Registration may be optional or required for certain transactions. Read your card terms to understand fees, restrictions, expiration, and where the card can be used.</p>
              <p>Some prepaid Visa cards may be used at participating merchants, but a network mark does not guarantee acceptance for every transaction. Check the information provided with your card for product-specific rules.</p>
              <p>For details about a specific card, use the issuer&apos;s current agreement and support information. Our <Link href="#about">editorial approach</Link> explains why these guides stay general.</p>
            </div>
          </div>
        </section>

        <section className="section-pad brand-search-section" id="giftcardmall">
          <div className="container">
            <div className="brand-search-card">
              <div className="brand-search-copy">
                <span className="eyebrow"><span className="eyebrow-dot" /> Looking for card instructions?</span>
                <h2>GiftCardMall/MyGift card questions?</h2>
                <p>Find general information about balance checks, Visa cards, activation, registration, and transactions. CheckGiftCardMall is independent and cannot access either service or any card account.</p>
                <Link href="#giftcardmall" className="btn btn-primary-ink">Read the independent guide <span aria-hidden="true">→</span></Link>
              </div>
              <div className="brand-search-side" aria-label="Three reminders for card research">
                <Image
                  className="brand-search-illustration"
                  src="/issuer-finder-illustration.svg"
                  alt="Generic card search illustration: start with your card, verify the web address, then contact issuer support"
                  width={900}
                  height={480}
                />
                <div><span>01</span><p>Start with the address printed on your card or packaging.</p></div>
                <div><span>02</span><p>Check the domain carefully before sharing information.</p></div>
                <div><span>03</span><p>Contact the issuer directly for account-specific help.</p></div>
                <span className="brand-search-decoration" aria-hidden="true">C</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad keyword-answer-section">
          <div className="container keyword-answer-inner">
            <div>
              <span className="eyebrow"><span className="eyebrow-dot" /> A useful place to begin</span>
              <h2>GiftCardMall/MyGift balance: where to start</h2>
            </div>
            <div className="keyword-answer-copy">
              <p>For an actual balance or account question, use the issuer details printed on your card or packaging. Check the full web address; search results can include look-alike pages.</p>
              <p>This independent guide cannot check GiftCardMall or MyGift balances or access accounts. Read our <Link href="#giftcardmall">GiftCardMall and MyGift guide</Link> for general information and our <Link href="#balance-guide">gift card balance guide</Link> for pending holds and refunds.</p>
            </div>
          </div>
        </section>

        <section className="section-pad purchase-section" id="troubleshooting">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow"><span className="eyebrow-dot" /> Keep track of activity</span>
              <h2>Understand your transactions and funds.</h2>
              <p>Purchases, pending payments, refunds, reversals, and fees can all affect the amount available on your card.</p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <article className="purchase-card">
                  <span className="purchase-index">01 / Review</span>
                  <h3>Compare purchases.</h3>
                  <p>Check recent purchases against receipts and note whether an entry is pending or posted. Contact the issuer about activity you do not recognize.</p>
                </article>
              </div>
              <div className="col-lg-4">
                <article className="purchase-card">
                  <span className="purchase-index">02 / Understand</span>
                  <h3>Allow for holds and refunds.</h3>
                  <p>A merchant may temporarily reserve funds. Refunds and reversals can take time to appear, depending on the merchant and card issuer.</p>
                </article>
              </div>
              <div className="col-lg-4">
                <article className="purchase-card">
                  <span className="purchase-index">03 / Ask</span>
                  <h3>Contact the right organization.</h3>
                  <p>Ask the merchant about a purchase or return, and contact the card issuer about balance, activation, or account activity.</p>
                </article>
              </div>
            </div>
            <div className="purchase-reminder"><strong>Keep your records.</strong> Save receipts and card instructions until any transaction or activation questions are resolved. <Link href="#troubleshooting">Review troubleshooting steps <span aria-hidden="true">→</span></Link></div>
          </div>
        </section>

        <section className="section-pad help-path-section" id="contact">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow"><span className="eyebrow-dot" /> The right help depends on the question</span>
              <h2>General guidance here. Card support with the issuer.</h2>
              <p>Knowing where an answer comes from saves time and helps keep your information private.</p>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <article className="help-path-card">
                  <span className="help-path-label">CheckGiftCardMall</span>
                  <h3>Learn how common card situations work.</h3>
                  <p>Use our independent guides for general explanations about balance checks, activation, pending holds, refunds, and card safety. We do not have access to card records and cannot act on an account.</p>
                  <Link href="#faq" className="text-link">Browse the frequently asked questions <span aria-hidden="true">→</span></Link>
                </article>
              </div>
              <div className="col-md-6">
                <article className="help-path-card help-path-card-issuer">
                  <span className="help-path-label">THE ISSUER</span>
                  <h3>Resolve questions about a specific card.</h3>
                  <p>For current balances, activation, lost cards, unrecognized activity, or a particular decline, contact the card issuer through the details printed on your card or original packaging.</p>
                  <Link href="#contact" className="text-link">See our contact boundaries <span aria-hidden="true">→</span></Link>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad explainer-section" id="faq" aria-labelledby="home-faq-heading">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow"><span className="eyebrow-dot" /> Quick, clear answers</span>
              <h2 id="home-faq-heading">GiftCardMall/MyGift frequently asked questions.</h2>
              <p>Answers about balance checks, activation, registration, transactions, payments, and safe browsing.</p>
            </div>
            <div className="accordion" id="homeFaqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.question}>
                  <h3 className="accordion-header" id={`home-faq-heading-${index}`}>
                    <button
                      className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#home-faq-answer-${index}`}
                      aria-expanded={index === 0}
                      aria-controls={`home-faq-answer-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={`home-faq-answer-${index}`}
                    className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                    aria-labelledby={`home-faq-heading-${index}`}
                    data-bs-parent="#homeFaqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4"><Link href="#faq" className="text-link">Visit the FAQs page <span aria-hidden="true">→</span></Link></p>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner">
            <div><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Keep it simple</span><h2>Find clear guidance for your situation.</h2><p>Choose a topic to get oriented, then rely on the issuer for account-specific questions.</p></div>
            <div className="closing-links"><Link href="#troubleshooting">Troubleshoot a payment <span>→</span></Link><Link href="#faq">Browse common questions <span>→</span></Link></div>
          </div>
        </section>
      </main>
    </>
  );
}
