import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import headshot from "@/assets/headshot.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Section label */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              About
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Photo and text column */}
            <div className="md:col-span-8 space-y-6">
              {/* Photo */}
              <div className="flex items-start gap-6 mb-8">
                <div className="shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                    <img 
                      src={headshot} 
                      alt="Adebukola Malomo - AI Product Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                    Building AI products that deliver real business impact
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-base md:text-lg">
                <p>
                  I'm Adebukola Malomo, an AI Product Manager with 7+ years of experience
                  transforming manual operations into intelligent, automated systems. Based
                  in Ontario, Canada, I've led product initiatives across speech analytics, recommendation
                  engines, GenAI summarisation, behaviour-driven personalization, and agentic AI.
                </p>
                <p>
                  My approach is rooted in delivery: understanding the problem deeply,
                  collaborating closely with data science and engineering teams, and pairing
                  rigorous evaluation frameworks with human-in-the-loop review so automation
                  stays accurate, compliant, and effective. I thrive in ambiguity and excel at
                  translating complex AI capabilities into products users love.
                </p>
                <p>
                  From scaling a social matching platform from 0 to 3,000+ users, to driving
                  40% revenue growth at Joblift through AI recommendations, to automating call
                  quality reviews at Telefónica with ML-driven speech analytics, I focus on
                  outcomes, not just outputs. At Micro1, I designed prompts and evaluation
                  rubrics for agentic AI, and was trusted to review other experts' work and
                  mentor new joiners.
                </p>
              </div>
            </div>

            {/* At a glance sidebar */}
            <div className="md:col-span-4">
              <div className="p-6 bg-card rounded-xl border border-border/50 space-y-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  At a glance
                </h3>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Currently</p>
                  <p className="text-sm text-foreground font-medium mt-1">Product Manager, Micro1 Inc. (Freelance)</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Based in</p>
                  <p className="text-sm text-foreground font-medium mt-1">Ontario, Canada · open to remote</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Focus</p>
                  <p className="text-sm text-foreground font-medium mt-1">Agentic AI · LLM workflows · Model evaluation</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Languages</p>
                  <p className="text-sm text-foreground font-medium mt-1">English (native) · German (B2)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
