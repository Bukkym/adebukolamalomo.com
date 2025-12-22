import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Phone, Briefcase, Heart, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: "telefonica",
    company: "Telefónica Germany",
    title: "AI-Powered Speech Analytics Automation",
    icon: Phone,
    color: "168 60% 32%",
    problem: "Customer service quality reviews were manual, slow, and inconsistent. Only 2–5% of calls were reviewed, limiting visibility into agent performance.",
    role: "Led AI transformation, defined labelling standards and evaluation criteria with ML engineers. Conducted model validation and built KPI dashboards.",
    solution: "Integrated speech-to-text and ML classification models with human-in-the-loop validation workflows. Created dashboards for QA and operations teams.",
    components: ["Speech-to-text", "ML Classification", "Confidence Scoring", "Edge-case Analysis"],
    outcomes: [
      "Reduced manual QA workload significantly",
      "Increased call coverage from ~5% → 100%",
      "Improved accuracy of quality scoring",
      "Enabled real-time operational insights"
    ]
  },
  {
    id: "joblift",
    company: "Joblift",
    title: "AI-Driven Job Recommendation Platform",
    icon: Briefcase,
    color: "220 80% 55%",
    problem: "Users struggled to find relevant jobs quickly. Recommendations were generic and engagement was low.",
    role: "Improved recommendation engine using behavioural clustering. Designed A/B tests and created quality criteria for model outputs.",
    solution: "Built personalization logic using preference signals and GenAI-powered job summaries. Ran systematic experiments to validate improvements.",
    components: ["Recommendation Algorithms", "Behavioural Clustering", "GenAI Summarisation", "Personalization Logic"],
    outcomes: [
      "+40% revenue growth",
      "+250% product stickiness",
      "Higher CTR and job discovery rates",
      "Improved user satisfaction scores"
    ]
  },
  {
    id: "cliqup",
    company: "CLIQup Social",
    title: "AI-Powered Social Matching Platform",
    icon: Heart,
    color: "340 80% 55%",
    problem: "People struggle to form meaningful friendships in new cities. Existing apps focus on dating or superficial matching.",
    role: "Built and scaled platform from 0 → 3,000+ users. Designed AI-driven personality matching engine and led cross-functional execution.",
    solution: "Created personality clustering using behavioural signals and preferences. Auto-generated 'Friendship Plans' based on user traits and intent signals.",
    components: ["Personality Clustering", "Behaviour-based Matching", "Preference Weighting", "Engagement Prediction"],
    outcomes: [
      "3,000+ users acquired",
      "250% engagement growth",
      "High retention among matched users",
      "Strong product-market signal validated"
    ]
  }
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="work" className="section-padding bg-background" ref={ref}>
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
                Case Studies
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
              Real AI products, real outcomes
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Here's how I've helped teams ship AI solutions that deliver measurable business impact.
            </p>
          </div>

          {/* Case study tabs */}
          <div className="flex flex-wrap gap-3 justify-center">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCase === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {study.company}
              </button>
            ))}
          </div>

          {/* Active case study */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `hsl(${caseStudies[activeCase].color} / 0.1)` }}
                >
                  {(() => {
                    const IconComponent = caseStudies[activeCase].icon;
                    return <IconComponent className="w-7 h-7" style={{ color: `hsl(${caseStudies[activeCase].color})` }} />;
                  })()}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {caseStudies[activeCase].company}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {caseStudies[activeCase].title}
                  </h3>
                </div>
              </div>

              {/* Content grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      The Problem
                    </h4>
                    <p className="text-body leading-relaxed">
                      {caseStudies[activeCase].problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      My Role
                    </h4>
                    <p className="text-body leading-relaxed">
                      {caseStudies[activeCase].role}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Solution Approach
                  </h4>
                  <p className="text-body leading-relaxed mb-6">
                    {caseStudies[activeCase].solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].components.map((component) => (
                      <span
                        key={component}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent text-accent-foreground"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcomes */}
              <div className="pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Impact & Outcomes
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {caseStudies[activeCase].outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-body">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
