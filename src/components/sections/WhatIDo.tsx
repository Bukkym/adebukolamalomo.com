import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, Users, Rocket, Code, LineChart } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Product Strategy",
    description: "Defining AI roadmaps that align with business goals and user needs"
  },
  {
    icon: Workflow,
    title: "GenAI & LLM Workflows",
    description: "Building products powered by language models, summarisation, and RAG"
  },
  {
    icon: Users,
    title: "Customer-Facing AI",
    description: "Shipping AI features that users actually understand and trust"
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "Fast validation cycles from concept to testable product"
  },
  {
    icon: Code,
    title: "Product-Engineering Collaboration",
    description: "Working closely with ML engineers to ship production-ready AI"
  },
  {
    icon: LineChart,
    title: "Data-Driven Iteration",
    description: "A/B testing, behavioural analytics, and continuous optimization"
  }
];

const WhatIDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-subtle" ref={ref}>
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
                What I Do
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
              End-to-end AI product delivery
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              From strategy to production, I bring AI products to life with a focus on 
              real-world outcomes and user value.
            </p>
          </div>

          {/* Capability grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
