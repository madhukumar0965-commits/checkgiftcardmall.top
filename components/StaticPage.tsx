import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndependenceNotice from "@/components/IndependenceNotice";

type StaticPageProps = { label: string; path: string; children: ReactNode };

export default function StaticPage({ label, path, children }: StaticPageProps) {
  return (
    <main id="main-content" className="page-main">
      <div className="container content-container">
        <Breadcrumbs label={label} path={path} />
        <IndependenceNotice />
        <article className="static-page">{children}</article>
      </div>
    </main>
  );
}
