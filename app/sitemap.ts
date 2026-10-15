import type { MetadataRoute } from "next";
import { paths, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-15");
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority:
      path === ""
        ? 1
        : path === "/giftcardmall-mygift-guide"
          ? 0.9
          : path === "/balance-guide" || path === "/prepaid-visa-guide"
            ? 0.8
            : 0.6,
  }));
}
