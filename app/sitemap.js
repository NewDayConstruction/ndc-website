export default function sitemap() {
  const base = "https://www.newdayconstruction.org";
  return [
    { url: `${base}/`,         changefreq: "weekly",  priority: 1.0 },
    { url: `${base}/projects`, changefreq: "monthly", priority: 0.8 },
    { url: `${base}/contact`,  changefreq: "monthly", priority: 0.8 },
  ];
}
