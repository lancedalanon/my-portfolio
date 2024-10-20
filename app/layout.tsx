// RootLayout.tsx
import type { Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

// Load local fonts using next/font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <FloatingActionButton />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Lance Orville Dalanon",
              "jobTitle": "Full-Stack Software Engineer",
              "description":
                "I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. I work with a range of technologies, including JavaScript, Python, Laravel, Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire).",
              "url": "https://lancedalanon.netlify.app",
              "image": "https://lancedalanon.netlify.app/images/lance-dalanon-portfolio.png",
              "sameAs": [
                "https://www.linkedin.com/in/lance-orville-dalanon-453109166/",
                "https://github.com/lancedalanon",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Rosa City",
                "addressRegion": "Laguna",
                "postalCode": "4026",
                "addressCountry": "Philippines",
              },
              "telephone": "(+63) 921-273-7768",
            }),
          }}
        />
      </body>
    </html>
  );
}
