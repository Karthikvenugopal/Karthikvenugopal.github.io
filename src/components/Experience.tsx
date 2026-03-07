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
      <SectionHeader label="experience" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800" />

        <div className="space-y-10 pl-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full border border-zinc-700 bg-zinc-900 group-hover:border-violet-500 group-hover:bg-violet-500/20 transition-colors" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-sm font-semibold text-zinc-100">{exp.company}</h3>
                <span className="text-xs font-mono text-zinc-600">{exp.period}</span>
              </div>
              <p className="text-xs font-mono text-violet-400 mb-3">{exp.role}</p>

              {/* Bullets */}
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-zinc-700 shrink-0 mt-0.5 text-xs">&#9658;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
