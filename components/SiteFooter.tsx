import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top row g-4">
          <div className="col-lg-5">
            <Link className="footer-brand" href="/">cardwise<span>guide</span></Link>
            <p className="footer-summary">Clear, independent information for safer prepaid and gift card decisions.</p>
            <p className="footer-independence">Independent educational resource. Not affiliated with, endorsed by, or a representative of any card issuer, payment network, retailer, or financial institution.</p>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/giftcardmall-mygift-guide">GiftCardMall &amp; MyGift guide</Link></li>
              <li><Link href="/balance-guide">Balance guide</Link></li>
              <li><Link href="/prepaid-visa-guide">Prepaid payment guide</Link></li>
              <li><Link href="/troubleshooting">Troubleshooting</Link></li>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-heading">About</h2>
            <ul className="footer-links">
              <li><Link href="/about">Our approach</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-heading">A useful reminder</h2>
            <p className="footer-note">We never ask for card numbers, PINs, security codes, or balances. For account-specific help, contact the issuer using details printed on your card or packaging.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. Educational information only.</span>
          <span>Made for clarity, not card transactions.</span>
        </div>
      </div>
    </footer>
  );
}
