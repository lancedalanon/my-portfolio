"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface MetadataProps {
  description: string;
}

// Helper function to capitalize the first letter of each word in a string
const capitalizeFirstLetterOfEachWord = (string: string) => {
  return string
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a string
};

const Metadata: React.FC<MetadataProps> = ({ description }) => {
  const pathname = usePathname(); // Get the current pathname
  const [canonicalUrl, setCanonicalUrl] = useState(""); // State to hold the full canonical URL

  // Generate the canonical URL once the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Construct the full URL using window.location
      const fullUrl = `${window.location.protocol}//${window.location.host}${pathname}`;
      setCanonicalUrl(fullUrl);
    }
  }, [pathname]);

  // Split the pathname into segments and filter out empty segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Generate the title based on the path segments
  const baseTitle = pathSegments.length
    ? `${pathSegments[pathSegments.length - 1].replace(/-/g, ' ')} | Lance Orville Dalanon | Full-Stack Software Engineer`
    : "Lance Orville Dalanon | Full-Stack Software Engineer";

  // Capitalize the first letter of each word in the base title
  const capitalizedTitle = capitalizeFirstLetterOfEachWord(baseTitle);

  return (
    <>
      <title>{capitalizedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Full Stack Developer, JavaScript, Python, Laravel, Vue.js, React.js, Next.js, TALL stack, Tailwind CSS, CSS3, HTML5, Bootstrap, jQuery, PHP, SQL, MySQL, Git, GitHub, Gitflow, XAMPP, Hostinger, MySQL Workbench, Visual Studio Code, Jira, Full Stack Web Developer, Software Developer, Agile, Scrum, Role-Based Access Control, Database Normalization, REST APIs, Responsive Web Design, Software Development Life Cycle, Database Administration, Code Review, Lance Orville Rosario Dalanon, Lance Dalanon, Lance Orville Dalanon, Lance Orville, Full-Stack Software Engineer" />
      <meta name="max-snippet" content="-1" />
      <meta name="max-image-preview" content="large" />
      <meta name="max-video-preview" content="-1" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="google-site-verification" content="9JUS56I51coFXwz3ddxkj5RMK80MpE9kY4GM05b8j3Q" />
      <meta name="msvalidate.01" content="276A335FFF4C78A15F04760EF8F5F207" />
      {/* Set the canonical link dynamically */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph tags */}
      <meta property="og:title" content={capitalizedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://lancedalanon.netlify.app/images/lance-dalanon-portfolio.jpg" />
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={capitalizedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lancedalanon.netlify.app/images/lance-dalanon-portfolio.jpg" />
    </>
  );
};

export default Metadata;
