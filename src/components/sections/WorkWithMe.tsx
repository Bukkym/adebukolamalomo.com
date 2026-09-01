import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Workflow, UserCog, ArrowUpRight, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Rocket,
    title: "AI MVP Builds",
    description:
      "Have an idea for an AI product? I take it from concept to a live, working product, fast. Not a mockup: real auth, payments, and infrastructure.",
    proof: [
      { label: "Aura", href: "https://meetonaura.com" },
      { label: "Passpoint", href: "https://getonpasspoint.com" },
      { label: "Found", href: "https://meetonfound.com" },
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow & Automation",
    description:
      "Repetitive, manual work costing your team hours every week? I design and build AI-powered automations, LLM classification, multi-step agentic workflows, wired into the tools you already use: Slack, Jira, Notion, Gmail.",
    proof: [],
  },
  {
    icon: UserCog,
    title: "Fractional AI Product Manager",
    description:
      "Building AI features but missing product leadership? I plug in part-time to bring scoping, prioritization, and shipped outcomes, without a full-time hire.",
    proof: [],
  },
];

const WorkWithMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work-with-me" className="section-padding bg-subtle" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="container-tight mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Work With Me
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
              Need something built, not just planned?
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              I'm open to full-time roles, and I take on select project work for
              founders and teams who need an AI product built or a workflow
              automated, fast.
            </p>
          </div>

          {/* Offer grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <offer.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {offer.description}
                </p>
                {offer.proof.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                    {offer.proof.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        {p.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Have a project in mind? Let's talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMe;
