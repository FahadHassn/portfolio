import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

// TODO: set this to your real deployed origin (used for canonical, OG, sitemap).
const SITE_URL = "https://fahadhassan.dev";
const OG_IMAGE = `${SITE_URL}/og.png`;

const TITLE = "Fahad Hassan | Android, Flutter & AI Automation Developer";
const DESCRIPTION =
  "Fahad Hassan builds Android and Flutter apps, WordPress websites, and AI automation pipelines for startups and businesses worldwide. 4+ years, 50+ projects shipped to production.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Syed Muhammad Fahad Hassan",
  alternateName: "Fahad Hassan",
  url: SITE_URL,
  jobTitle: "Android, Flutter & AI Automation Developer",
  description: DESCRIPTION,
  address: { "@type": "PostalAddress", addressLocality: "Gujranwala", addressCountry: "PK" },
  email: "mailto:fahadhassan467@gmail.com",
  sameAs: [
    "https://github.com/FahadHassn",
    "https://pk.linkedin.com/in/fahadhassan72",
  ],
  knowsAbout: [
    "Android Development",
    "Flutter",
    "Kotlin",
    "Jetpack Compose",
    "WordPress",
    "AI Automation",
    "n8n",
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
