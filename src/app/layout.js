import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import { useToast } from "@/hooks/use-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adeshina Mubaraq | Full-Stack Developer & Web3 Engineer",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, Node.js, and Stellar/Soroban Web3 development. Based in Nigeria, available for freelance and remote work.",
  keywords: [
    "Full-Stack Developer",
    "Web3 Developer",
    "Stellar Developer",
    "Soroban",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Nigeria",
    "Freelance Developer",
  ],
  authors: [{ name: "Adeshina Mubaraq" }],
  creator: "Adeshina Mubaraq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-sable-kappa.vercel.app/",
    title: "Adeshina Mubaraq | Full-Stack Developer & Web3 Engineer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, Node.js, and Stellar/Soroban Web3 development.",
    siteName: "MubaraqCodes",
    images: [
      {
        url: "/ps.jpeg",
        width: 1200,
        height: 630,
        alt: "Adeshina Mubaraq - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeshina Mubaraq | Full-Stack Developer & Web3 Engineer",
    description:
      "Full-Stack Developer specializing in Next.js, TypeScript, Node.js, and Stellar/Soroban Web3 development.",
    images: ["/ps.jpeg"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>...</head>
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}