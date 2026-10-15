import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndependenceNotice from "@/components/IndependenceNotice";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export type GuideSection = { title: string; body: ReactNode };
type GuidePageProps = {
  title: string;
  intro: string;
  label: string;
  path: string;
  updated: string;
  sections: GuideSection[];
  visual?: ReactNode;
};

export default function GuidePage({ title, intro, label, path, updated, sections, visual }: GuidePageProps) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: intro,
        datePublished: "2026-10-15",
        dateModified: updated,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        mainEntityOfPage: `${site.url}${path}`,
      }} />
      <main id="main-content" className="page-main">
        <div className="container content-container">
          <Breadcrumbs label={label} path={path} />
          <IndependenceNotice />
          <article className="article-layout">
            <header className="article-header">
              <span className="eyebrow"><span className="eyebrow-dot" /> {label}</span>
              <h1>{title}</h1>
              <p className="article-intro">{intro}</p>
              <p className="updated-note">Reviewed October 2026 <span aria-hidden="true">·</span> Independent educational information</p>
            </header>
            <div className="article-body">
              {visual}
              {sections.map((section, index) => (
                <section key={section.title} id={`section-${index + 1}`}>
                  <h2>{section.title}</h2>
                  {section.body}
                </section>
              ))}
              <aside className="article-callout">
                <strong>Keep the issuer in the loop.</strong>
                <p>Use the website or phone number printed on your card or original packaging for anything tied to a specific card or transaction.</p>
              </aside>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
