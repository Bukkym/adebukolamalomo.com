import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Compass, Users } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Outcomes over process",
    description: "I measure success by business impact: revenue, engagement, user satisfaction. Not by ceremonies completed or documents written."
  },
  {
    icon: Zap,
    title: "Speed with judgment",
    description: "I move fast but deliberately. Quick iterations, rapid validation, but never at the cost of quality or user trust."
  },
  {
    icon: Compass,
    title: "Clear thinking in ambiguity",
    description: "AI projects are inherently uncertain. I bring structure to chaos, breaking complex problems into actionable steps."
  },
  {
    icon: Users,
    title: "Close collaboration",
    description: "The best AI products emerge from tight loops between product, engineering, and users. I work embedded, not distant."
  }
];

const HowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding bg-background" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Section header */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                How I Work
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
              My product philosophy
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              After years of shipping AI products, I've developed a clear perspective 
              on what works, and what doesn't.
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-14">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
