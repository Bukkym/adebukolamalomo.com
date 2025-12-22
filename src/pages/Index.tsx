import { Helmet, HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import CaseStudies from "@/components/sections/CaseStudies";
import Tools from "@/components/sections/Tools";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Adebukola Malomo | AI Product Manager</title>
        <meta 
          name="description" 
          content="AI Product Manager with 5+ years building and scaling SaaS and AI-powered products. Specializing in speech analytics, recommendation engines, GenAI workflows, and real-world AI delivery." 
        />
        <meta name="keywords" content="AI Product Manager, GenAI, LLM, Product Strategy, Berlin, Machine Learning" />
        <link rel="canonical" href="https://adebukolamalomo.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Adebukola Malomo | AI Product Manager" />
        <meta property="og:description" content="Turning complex AI into real-world products. 5+ years of shipping AI solutions across Europe." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adebukola Malomo",
            "jobTitle": "AI Product Manager",
            "url": "https://adebukolamalomo.com",
            "sameAs": [
              "https://www.linkedin.com/in/amalomo/"
            ],
            "knowsAbout": ["AI Products", "Machine Learning", "GenAI", "Product Management", "SaaS"],
            "worksFor": {
              "@type": "Organization",
              "name": "Independent"
            }
          })}
        </script>
      </Helmet>

      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <WhatIDo />
        <CaseStudies />
        <Tools />
        <HowIWork />
        <Contact />
        <Footer />
      </main>
    </HelmetProvider>
  );
};

export default Index;
