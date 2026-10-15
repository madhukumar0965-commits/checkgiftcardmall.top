import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-image-preview": "large" },
   
  };
}
