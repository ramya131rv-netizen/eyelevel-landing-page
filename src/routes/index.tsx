import { createFileRoute } from "@tanstack/react-router";
import { useFadeIn } from "../hooks/useFadeIn";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/sections/Hero";
import { ProofBar } from "../components/sections/ProofBar";
import { Services } from "../components/sections/Services";
import { WhoWeHelp } from "../components/sections/WhoWeHelp";
import { Testimonial } from "../components/sections/Testimonial";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaaS Marketing Agency India | EyeLevel" },
      { name: "description", content: "SaaS marketing agency India. EyeLevel builds pipeline systems — content, LinkedIn, performance ads, and automation — for seed to Series B SaaS companies." },
      { property: "og:title", content: "SaaS Marketing Agency India | EyeLevel" },
      { property: "og:description", content: "SaaS marketing agency India. EyeLevel builds pipeline systems — content, LinkedIn, performance ads, and automation — for seed to Series B SaaS companies." },
    ],
  }),
  component: Index,
});

function Index() {
  // Activate standard fade-up animations on viewport scroll
  useFadeIn();

  return (
    <div className="min-h-screen bg-brand-primary text-brand-text font-bricolage antialiased selection:bg-brand-accent selection:text-brand-primary">
      <Navbar />
      <Hero />
      <ProofBar />
      <Services />
      <WhoWeHelp />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}


