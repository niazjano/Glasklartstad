import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/fonsterputs-kristianstad",
    "/hemstadning-kristianstad",
    "/flyttstadning-kristianstad",
    "/kontorsstadning-kristianstad",
    "/gratis-offert",
    "/stadning",
    "/om-oss",
    "/kontakt",
    "/integritetspolicy",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === "" || route === "/fonsterputs-kristianstad"
        ? 1
        : route === "/gratis-offert"
          ? 0.9
          : 0.8,
  }));
}
