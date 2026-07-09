import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Briefcase, Heart, Sparkles, Bot, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: "telefonica",
    company: "Telefónica Germany GmbH",
    title: "AI-Powered Speech Analytics Automation",
    icon: Phone,
    color: "13 58% 44%",
    problem: "Customer service quality reviews were manual, slow, and inconsistent. Only about 15% of calls were reviewed, limiting visibility into agent performance and compliance.",
    role: "Led the AI transformation and discovery: analysed workflow bottlenecks, then defined AI labelling standards and evaluation criteria (precision, recall, false positives/negatives, agreement rates) with ML and QA teams. Ran model validation and built KPI dashboards.",
    solution: "Replaced manual call reviews with ML-driven speech analytics and LLM-based scoring, backed by human-in-the-loop review for accuracy and compliance. Built dashboards to measure automation impact across agent productivity and service quality.",
    components: ["Speech Analytics", "LLM Scoring", "Precision & Recall", "Human-in-the-Loop", "KPI Dashboards"],
    outcomes: [
      "Boosted QA coverage from 15% to 90%",
      "Cut manual review effort by over 60%",
      "Standardised labelling and evaluation metrics",
      "Enabled real-time operational insight and compliance"
    ]
  },
  {
    id: "joblift",
    company: "Joblift GmbH",
    title: "AI-Driven Job Recommendation Platform",
    icon: Briefcase,
    color: "32 68% 44%",
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
    company: "CLIQup Social UG",
    title: "AI-Powered Social Matching Platform",
    icon: Heart,
    color: "348 52% 52%",
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
  },
  {
    id: "aura",
    company: "Aura",
    title: "Explainable AI Matching (Bootcamp Project)",
    icon: Sparkles,
    color: "278 40% 52%",
    problem: "People struggle to form real connections in a new city. Swiping apps and rigid filters rely on shallow signals, so matches feel random and there is a gap between what people say they want and what they actually enjoy.",
    role: "Conceived and built the product end to end during my AI Software Engineering bootcamp: brand, data model, matching logic, and a working MVP. Ora is the AI inside Aura; I designed how it reads people and explains its picks.",
    solution: "Users describe who they want to meet in their own words. An LLM extracts structured preferences into editable chips, a deterministic weighted-overlap score matches people within compatibility archetypes, and Ora explains why each plan fits in plain language. Users refine matches conversationally, and Ora learns from behaviour, not just what was self-reported.",
    components: ["LLM Preference Extraction", "Explainable Matching", "Weighted Scoring", "Archetype Clustering", "Human-in-the-Loop Refinement"],
    outcomes: [
      "Turned free-text input into structured, editable preferences",
      "Deterministic, explainable matching instead of a black box",
      "Every match justified in plain language, the heart of the product",
      "Shipped and deployed live at meetonaura.com"
    ]
  },
  {
    id: "micro1",
    company: "Micro1 Inc.",
    title: "Prompt & Evaluation Design for Agentic AI",
    icon: Bot,
    color: "190 40% 38%",
    problem: "Agentic AI models need reliable, high-quality outputs, but without rigorous prompts and consistent benchmarks, performance is hard to measure or improve at scale.",
    role: "Design and optimize complex AI task prompts and evaluation frameworks for AI agents. Establish assessment rubrics that standardise benchmarks for continuous performance improvement.",
    solution: "Built structured prompt and evaluation frameworks with rigorous rubrics to score agentic AI output quality and reliability, iterating from user feedback and data insights in a remote, cross-functional setup.",
    components: ["Prompt Engineering", "Evaluation Rubrics", "Agentic AI", "Benchmarking", "Model Quality"],
    outcomes: [
      "Measurable gains in AI output quality and reliability",
      "Standardised benchmarks for consistent evaluation",
      "Repeatable rubrics for continuous improvement",
      "Data- and feedback-driven prompt iteration"
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
