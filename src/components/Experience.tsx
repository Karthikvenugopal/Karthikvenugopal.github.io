import SectionHeader from "./SectionHeader";

const experience = [
  {
    company: "Akamai Technologies",
    role: "Software Engineer II \u2014 App Architecture & Integration",
    period: "Sep 2024 \u2014 Dec 2024",
    location: "Bangalore, India",
    bullets: [
      "Deployed a Dockerized Apache Spark platform for 20+ ETL pipelines, reducing job runtimes by 60% (5 hrs \u2192 2 hrs) and accelerating data insights for cross-functional teams.",
    ],
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer \u2014 Logistics & External Tools",
    period: "Aug 2022 \u2014 Aug 2024",
    location: "Bangalore, India",
    bullets: [
      "Improved data retrieval speed by 50% (10s \u2192 5s) for datacenter technician portals through efficient Redis caching implementation.",
      "Built REST APIs with FastAPI using hash tables and caching, cutting query latency from 250ms to 90ms and supporting a 3\u00d7 increase in concurrent requests.",
    ],
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer Intern \u2014 Logistics & External Tools",
    period: "Jan 2022 \u2014 Jun 2022",
    location: "Bangalore, India",
    bullets: [
      "Implemented and optimized Flask REST APIs handling 1M+ records with real-time access, improving portal responsiveness for field technicians.",
      "Refactored portal into modular Ant Design UI components, standardizing accessibility and achieving a 20% reduction in codebase size.",
    ],
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer Intern \u2014 Logistics & External Tools",
    period: "May 2021 \u2014 Jul 2021",
    location: "Bangalore, India",
    bullets: [
      "Built a real-time Shipping Details Dashboard using React, Redux, and Ant Design to surface live shipment data for logistics teams, reducing shipping-related support inquiries by 30%.",
      "Re-architected AutoShipNotify\u2019s frontend with Angular and Angular Material and refactored the backend with Perl and Flask, cutting UI-related bug reports by 35% and reducing feature turnaround time by half.",
    ],
  },
  {
    company: "Samsung Research",
    role: "Machine Learning Research Intern",
    period: "Oct 2020 \u2014 Mar 2021",
    location: "Bangalore, India",
    bullets: [
      "Architected and deployed a prompt-classification service for Samsung Bixby to automatically route in-domain vs. out-of-domain inputs, achieving 96% test accuracy and enabling reliable production integration.",
      "Researched and benchmarked NLP transformer models (sBERT, RoBERTa) to improve Bixby\u2019s intent classification pipeline, achieving a 15% F1-score improvement over baseline approaches.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader index="03" total="04" label="Experience" />
      <div className="border-t border-line">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-3 py-7 md:py-8 border-b border-line"
          >
            {/* Left — period + location */}
            <div className="col-span-12 md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              <p className="text-ink/70">{exp.period}</p>
              <p className="mt-1">{exp.location}</p>
            </div>

            {/* Right — company, role, bullets */}
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{exp.company}</h3>
                <span className="text-sm text-muted">{exp.role}</span>
              </div>
              <ul className="mt-4 space-y-2 max-w-3xl">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm md:text-base leading-relaxed text-ink/85"
                  >
                    <span className="text-ink/30 shrink-0 select-none">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
