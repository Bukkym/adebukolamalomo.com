import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-subtle" ref={ref}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Section header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Let's build something together
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Looking for an AI Product Manager who ships? Whether you're hiring, 
              exploring AI opportunities, or need a thought partner—I'd love to connect.
            </p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:malomoadebukola@gmail.com">
                <Mail className="w-5 h-5" />
                Send me an email
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="/Adebukola_Malomo_CV.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 flex items-center justify-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/adebukolamalomo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-border">|</span>
            <a
              href="mailto:malomoadebukola@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">malomoadebukola@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
