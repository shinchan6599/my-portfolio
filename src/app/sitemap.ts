import type { MetadataRoute } from "next";
import { destinations } from "./travel/data";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about", "/projects", "/hobbies", "/travel", "/blog", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const travelEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${siteUrl}/travel/${d.id}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...travelEntries];
}
