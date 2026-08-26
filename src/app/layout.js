import { DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const navFont = DM_Sans({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  icons: {
    icon: [
      { url: siteConfig.metadata.iconIco, sizes: "48x48", type: "image/x-icon" },
      { url: siteConfig.metadata.icon, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${navFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
