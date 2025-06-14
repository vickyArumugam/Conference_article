import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const MetaTags = () => {
  const location = useLocation();
  const baseUrl = "https://articlespublication.com/";

  const metaInfo = {
    "/": {
      title: "Article publication | Home",
      description: "Welcome to Article publication – A global platform for researchers in Applied Science, Engineering, and Technology.",
      image: `${baseUrl}/images/icacsitArtboard1Vignesh.webp`,
    },
    "/pricing": {
      title: "Article publication | Registration Pricing",
      description: "Explore our pricing plans for Article publication participants including authors, students, and academicians.",
      image: `${baseUrl}/images/registration-thumbnail.webp`,
    },
    "/about": {
      title: "Article publication | About the Conference",
      description: "Get to know the mission, vision, and organizers of ICASMET 2025.",
      image: `${baseUrl}/images/icacsitArtboard2.webp`,
    },
    "/publish": {
      title: "Article publication | Publish Your Work",
      description: "Submit your manuscript to Article publication for publication in reputed journals.",
      image: `${baseUrl}/images/journal-thumbnail.webp`,
    },
    "/review": {
      title: "Article publication | Peer Review Process",
      description: "Learn about the double-blind peer review process used by ICASMET 2025.",
      image: `${baseUrl}/images/editorial-thumbnail.webp`,
    },
    "/Journal": {
      title: "Article publication | Journal Finder",
      description: "Find suitable journals for your paper at ICASMET 2025.",
      image: `${baseUrl}/images/journal-thumbnail.webp`,
    },
    "/contact": {
      title: "Article publication | Contact Us",
      description: "Have questions? Reach out to the Article publication organizing team.",
      image: `${baseUrl}/images/contact-thumbnail.webp`,
    },
    "/register": {
      title: "Article publication | Paper Submission Form",
      description: "Register and submit your paper for the Article publication conference.",
      image: `${baseUrl}/images/paper-thumbnail.webp`,
    },
    // Optional default for dynamic journal route
    "/journal/:id": {
      title: "Article publication | Journal Details",
      description: "Detailed journal information for paper publication at ICASMET 2025.",
      image: `${baseUrl}/images/journal-thumbnail.webp`,
    },
  };

  // Fallback logic to handle dynamic paths like /journal/:id
  const currentPath = Object.keys(metaInfo).includes(location.pathname)
    ? location.pathname
    : location.pathname.startsWith("/journal/") ? "/journal/:id" : "/";

  const { title, description, image } = metaInfo[currentPath];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${location.pathname}`} />
    </Helmet>
  );
};

export default MetaTags;
