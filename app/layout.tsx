import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import Head from 'next/head';

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

export const metadata: Metadata = {
  title: "Lance Dalanon",
  description: "Hi there! I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. I work with a range of technologies, including JavaScript, Python, Laravel, Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire). I’m all about writing clean, secure code, and I make it a point to follow best practices, like thorough code reviews and OWASP standards. I thrive in Agile environments, where teamwork and communication are key to reaching our goals. With a solid foundation in both front-end and back-end development, I’m excited to take on challenges and come up with innovative solutions. Beyond my technical skills, I’m genuinely passionate about using technology to tackle real-world problems. I love learning new tools and methods that help me grow as a developer. Whether I’m mentoring junior developers or diving into new frameworks, I’m committed to continuous improvement. I’m eager to be part of projects that not only challenge me but also make a meaningful difference in people’s lives.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Full Stack Developer, JavaScript, Python, Laravel, Vue.js, React.js, Next.js, TALL stack" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lance Dalanon",
            "jobTitle": "Full Stack Software Engineer",
            "description": "I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. I work with a range of technologies, including JavaScript, Python, Laravel, Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire).",
            "url": "https://yourwebsite.com",
            "image": "https://yourwebsite.com/images/lance-dalanon.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/lance-orville-dalanon-453109166/",
              "https://github.com/lancedalanon"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santa Rosa City",
              "addressRegion": "Laguna",
              "postalCode": "4026",
              "addressCountry": "Philippines"
            },
            "telephone": "(+63) 921-273-7768"
          })
        }} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
