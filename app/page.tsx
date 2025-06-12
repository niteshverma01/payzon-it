"use client";

import { useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { ServicesShowcase } from "@/components/services-showcase";
import { FeaturedProjects } from "@/components/featured-projects";
import { Testimonials } from "@/components/testimonials";
import { TechStack } from "@/components/tech-stack";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";
import { WebHosting } from "@/components/webHosting";
// import { servicesgrid } from "@/components/all-services";
import {ServicesGrid} from "@/components/services-grid"
import { motion, useInView } from "framer-motion";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const webhostingRef = useRef<HTMLDivElement>(null);
  const servicesgridRef = useRef<HTMLDivElement>(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });
  const techStackInView = useInView(techStackRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });
  const webhostingInView = useInView(webhostingRef, {
    once: true,
    amount: 0.2,
  });
  const servicesgridInView = useInView(servicesgridRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />

      
      <motion.div
        ref={servicesgridRef}
        initial={{ opacity: 0, y: 30 }}
        animate={servicesgridInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ServicesGrid/>
      </motion.div>

      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ServicesShowcase />
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FeaturedProjects />
      </motion.div>

      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Stats />
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        ref={techStackRef}
        initial={{ opacity: 0, y: 30 }}
        animate={techStackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TechStack />
      </motion.div>

      <motion.div
        ref={webhostingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={webhostingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <WebHosting />
      </motion.div>

      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 30 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CTA />
      </motion.div>
    </div>
  );
}
