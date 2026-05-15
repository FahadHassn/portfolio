import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Process } from "@/components/portfolio/Process";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fahad Hassan — Mobile App, WordPress & AI Automation Developer" },
      {
        name: "description",
        content:
          "Syed Muhammad Fahad Hassan — 3+ years building Mobile apps (Android/Flutter) using Java, Kotlin, Jetpack Compose and Dart, WordPress sites, and AI automations with n8n, Zapier & Make.",
      },
      { property: "og:title", content: "Fahad Hassan — Mobile, Web & AI Automation Developer" },
      { property: "og:description", content: "Turning ideas into powerful apps, websites & intelligent automations." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
