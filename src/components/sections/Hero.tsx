import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const stats = [
  { n: "7+", l: "Years in product" },
  { n: "40%", l: "Revenue · Joblift" },
  { n: "3k+", l: "Users · CLIQup" },
  { n: "90%", l: "QA coverage · Telefónica" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-subtle">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-tight relative z-10 py-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Eyebrow: name + role with rule */}
          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-3 text-xs sm:text-sm tracking-[0.18em] uppercase whitespace-nowrap">
              <span className="text-primary font-semibold">Adebukola Malomo</span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-muted-foreground">AI Product Manager</span>
            </div>
            <span className="flex-1 h-px bg-border" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-[-0.015em]">
            Turning complex AI into<br />
            <span className="italic text-primary">real-world products</span>
          </h1>

          {/* Lede */}
          <p className="text-lg md:text-xl max-w-xl leading-relaxed">
            7+ years turning ambiguity into measurable outcomes across Europe:
            speech analytics, recommendation engines, and agentic AI.
          </p>

          {/* Stats */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-foreground">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured case study */}
          <a
            href="#work"
            className="group block max-w-xl rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Case Study · Aura
            </span>
            <h3 className="font-display text-xl md:text-2xl mt-2 mb-2">
              Explainable AI matching
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An LLM turns free text into structured preferences; a deterministic
              score matches people and explains why in plain language.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-4">
              View case study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
            <Button variant="ink" size="lg" className="rounded-full" asChild>
              <a href="/Adebukola_Malomo_CV.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
