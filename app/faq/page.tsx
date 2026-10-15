import JsonLd from "@/components/JsonLd";
import StaticPage from "@/components/StaticPage";
import { faqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "CheckGiftCardMall | Independent Prepaid Card Safety FAQ",
  "Answers about GiftCardMall/MyGift balances, Visa issuer details, pending holds, payment declines, safe card searches, refunds, and card privacy tips too.",
  "/faq",
);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }} />
      <StaticPage label="Frequently asked questions" path="/faq">
        <span className="eyebrow"><span className="eyebrow-dot" /> Quick, clear answers</span>
        <h1>GiftCardMall/MyGift card FAQs</h1>
        <p className="faq-intro">Answers about GiftCardMall/MyGift balance searches, Visa cards, activation, registration, transactions, and safe browsing. For account-specific help, contact the issuer through details printed on the card. {site.name} cannot check balances or access accounts.</p>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={faq.question}>
              <h2 className="accordion-header" id={`faq-heading-${index}`}>
                <button className={`accordion-button${index === 0 ? "" : " collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-answer-${index}`} aria-expanded={index === 0} aria-controls={`faq-answer-${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`faq-answer-${index}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} aria-labelledby={`faq-heading-${index}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </StaticPage>
    </>
  );
}
