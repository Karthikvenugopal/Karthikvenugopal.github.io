const experience = [
  {
    company: "Samsung",
    role: "Senior Machine Learning Engineer",
    period: "2022 — Present",
    description: "Leading R&D for on-device AI optimization. Improved inference latency by 40% for flagship mobile deployments.",
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer II",
    period: "2019 — 2022",
    description: "Built scalable distributed systems handling petabytes of edge traffic. Implemented real-time anomaly detection pipelines.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-mono text-white">
          <span className="text-accent-primary">~/</span>experience
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow"></div>
      </div>

      <div className="space-y-12 border-l border-gray-800 ml-3 pl-8 relative">
        {experience.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full border-2 border-gray-800 bg-background group-hover:border-accent-primary transition-colors">
              <div className="w-1.5 h-1.5 bg-accent-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <span className="text-sm font-mono text-gray-500">{exp.period}</span>
            </div>
            
            <div className="text-accent-secondary font-mono text-sm mb-4">{exp.role}</div>
            
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
