
export const metadata = {
  title: "New Day Construction LLC — HVAC • Solar • Construction",
  description: "Build it right. Power it clean. HVAC, solar and general contracting in Chicago and suburbs.",
};
export default function RootLayout({ children }){
  return (<html lang="en"><body className="min-h-screen bg-white">{children}</body></html>);
}
