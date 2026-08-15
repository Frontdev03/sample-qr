import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { businessDetails } from "@/config/businessDetails";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#064e3b",
};

export const metadata = {
  title: `${businessDetails.personName} - ${businessDetails.businessName}`,
  description: `Official Digital Business Card for ${businessDetails.businessName}. Owner: ${businessDetails.personName}. Call, WhatsApp, locate store & view opening hours.`,
  keywords: [
    "Dashmesh Medical Store",
    "Vikram Singh",
    "Medical Store",
    "Pharmacy",
    "Chemist",
    "Digital Business Card",
  ],
  authors: [{ name: businessDetails.personName }],
  openGraph: {
    title: `${businessDetails.personName} - ${businessDetails.businessName}`,
    description: businessDetails.tagline,
    url: businessDetails.cardUrl,
    siteName: businessDetails.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${businessDetails.personName} - ${businessDetails.businessName}`,
    description: businessDetails.tagline,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans antialiased h-full`}>
      <body className="min-h-full flex flex-col justify-center items-center bg-slate-100/60 py-6 px-4">
        {children}
      </body>
    </html>
  );
}
