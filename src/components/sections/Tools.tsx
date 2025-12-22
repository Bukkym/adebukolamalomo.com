import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const toolCategories = [
  {
    category: "AI & ML",
    tools: ["LLMs", "Prompt Engineering", "RAG", "Recommendation Systems", "Speech Analytics", "Model Evaluation"]
  },
  {
    category: "Product",
    tools: ["Product Strategy", "Roadmapping", "PRDs", "User Research", "A/B Testing", "Agile Delivery"]
  },
  {
    category: "Analytics",
    tools: ["SQL", "BigQuery", "Mixpanel", "Google Analytics", "HotJar", "Kibana"]
  },
  {
    category: "Design & Collaboration",
    tools: ["Figma", "Notion", "JIRA", "Confluence", "Miro", "Asana"]
  },
  {
    category: "Cloud & Tech",
    tools: ["AWS", "GCP", "API Concepts", "Cloud Fundamentals"]
  }
];

const Tools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="section-padding bg-subtle" ref={ref}>
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
                Tools & Tech
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
              The toolkit I work with
            </h2>
          </div>

          {/* Tools grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border/50"
              >
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background rounded-xl border border-border/50 p-6"
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "AWS Certified AI Practitioner",
                "Cloud Architect Program (GoCloud)",
                "Generative AI Foundations (Microsoft)",
                "Prompt Engineering for AI Products (Coursera)",
                "Product Masterclass (Product School)"
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 text-sm rounded-lg bg-primary/5 text-primary border border-primary/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
