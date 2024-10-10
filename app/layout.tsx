import type { Metadata, Viewport } from "next";
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

// Define metadata using Next.js Metadata API
export const metadata: Metadata = {
  title: "Lance Dalanon",
  description:
    "Hi I'm Lance Orville Rosario Dalanon! I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. I work with a range of technologies, including JavaScript, Python, Laravel, Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire). I’m all about writing clean, secure code, and I make it a point to follow best practices, like thorough code reviews and OWASP standards. I thrive in Agile environments, where teamwork and communication are key to reaching our goals. With a solid foundation in both front-end and back-end development, I’m excited to take on challenges and come up with innovative solutions. Beyond my technical skills, I’m genuinely passionate about using technology to tackle real-world problems. I love learning new tools and methods that help me grow as a developer. Whether I’m mentoring junior developers or diving into new frameworks, I’m committed to continuous improvement. I’m eager to be part of projects that not only challenge me but also make a meaningful difference in people’s lives.",
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "Python",
    "Laravel",
    "Vue.js",
    "React.js",
    "Next.js",
    "TALL stack",
    "Tailwind CSS",
    "CSS3",
    "HTML5",
    "Bootstrap",
    "jQuery",
    "PHP",
    "SQL",
    "MySQL",
    "Git",
    "GitHub",
    "Gitflow",
    "XAMPP",
    "Hostinger",
    "MySQL Workbench",
    "Visual Studio Code",
    "Jira",
    "Full Stack Web Developer",
    "Software Developer",
    "Agile",
    "Scrum",
    "Role-Based Access Control",
    "Database Normalization",
    "REST APIs",
    "Responsive Web Design",
    "Software Development Life Cycle",
    "Database Administration",
    "Code Review",
    "Lance Orville Rosario Dalanon",
    "Lance Dalanon",
    "Lance Orville Dalanon",
    "Lance Orville R. Dalanon",
    "Lance Orville"
  ],
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "9JUS56I51coFXwz3ddxkj5RMK80MpE9kY4GM05b8j3Q",
    "msvalidate.01": "276A335FFF4C78A15F04760EF8F5F207",
    canonical: "https://lance-dalanon.netlify.app/",
  },
  openGraph: {
    title: "Lance Orville Dalanon - Full Stack Developer",
    description:
      "Full Stack Developer specializing in JavaScript, Python, and modern frameworks like React.js, Vue.js, and Laravel. Passionate about building clean, scalable applications.",
    url: "https://lance-dalanon.netlify.app/",
    siteName: "Lance Orville Dalanon",
    images: [
      {
        url: "https://lance-dalanon.netlify.app/lance_dalanon.jpg",
        width: 1200,
        height: 630,
        alt: "Lance Orville Dalanon",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lance Orville Dalanon - Full Stack Developer",
    description:
      "Full Stack Software Engineer with expertise in JavaScript, Python, Laravel, Vue.js, React.js, and more.",
    images: [
      {
        url: "https://lance-dalanon.netlify.app/lance_dalanon.jpg",
        alt: "Lance Orville Dalanon",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
              "jobTitle": "Full Stack Software Engineer",
              "description":
                "I’m a Full Stack Software Engineer who loves building and enhancing web and software applications. I work with a range of technologies, including JavaScript, Python, Laravel, Vue.js, React.js, Next.js, and the TALL stack (Tailwind CSS, Alpine.js, Livewire).",
              "url": "https://lance-dalanon.netlify.app",
              "image": "https://lance-dalanon.netlify.app/images/lance_dalanon.jpg",
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
