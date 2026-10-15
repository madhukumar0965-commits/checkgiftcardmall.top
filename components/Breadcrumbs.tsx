import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

type BreadcrumbsProps = { label: string; path: string };

export default function Breadcrumbs({ label, path }: BreadcrumbsProps) {
  const items = [
    { name: "Home", item: site.url },
    { name: label, item: `${site.url}${path}` },
  ];
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{label}</li>
        </ol>
      </nav>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }} />
    </>
  );
}
