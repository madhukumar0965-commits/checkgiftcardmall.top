import Link from "next/link";
import BootstrapClient from "@/components/BootstrapClient";

const links = [
  ["GiftCardMall / MyGift", "/giftcardmall-mygift-guide"],
  ["Balance guide", "/balance-guide"],
  ["Prepaid payment guide", "/prepaid-visa-guide"],
  ["Troubleshooting", "/troubleshooting"],
  ["Security", "/security"],
  ["FAQs", "/faq"],
];

export default function SiteHeader() {
  return (
    <header>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <nav className="navbar navbar-expand-lg site-nav" aria-label="Main navigation">
        <div className="container">
          <Link className="navbar-brand brand-lockup" href="/" aria-label="CheckGiftCardMall home">
            <span className="brand-mark" aria-hidden="true">C</span>
            <span>cardwise<span className="brand-light">guide</span></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {links.map(([label, href]) => (
                <li className="nav-item" key={href}>
                  <Link className="nav-link" href={href}>{label}</Link>
                </li>
              ))}
              <li className="nav-item ms-lg-2">
                <Link className="btn btn-nav" href="/about">About this guide <span aria-hidden="true">↗</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BootstrapClient />
    </header>
  );
}
