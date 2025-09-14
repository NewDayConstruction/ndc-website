// app/layout.js
import "./globals.css";

export const metadata = {
  title: "New Day Construction LLC — HVAC • Solar • Construction",
  description:
    "Chicago-based contractor delivering HVAC, solar, and construction services with quality and care.",
  metadataBase: new URL("https://www.newdayconstruction.org"),
  openGraph: {
    title: "New Day Construction LLC",
    description:
      "HVAC • Solar • Construction in Chicago. Licensed, insured, and community-rooted.",
    url: "https://www.newdayconstruction.org",
    siteName: "New Day Construction LLC",
    images: ["/opengraph-image.png", "/opengraph-image"], // Next will serve our dynamic OG too
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.newdayconstruction.org/",
    sitemap: "https://www.newdayconstruction.org/sitemap.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
