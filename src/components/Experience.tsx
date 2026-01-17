const experience = [
  {
    company: "Akamai Technologies",
    role: "Software Engineer 2",
    tech: "PySpark, MuleSoft",
    period: "Sep 2024 — Dec 2024",
    description: "Spearheaded the integration of PySpark as a scalable data processing platform, enhancing data pipeline efficiency and accessibility for cross-functional teams.",
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer",
    tech: "Python, Flask, FastAPI, React, Node",
    period: "Aug 2022 — Sep 2024",
    description: "Improved datacenter data retrieval speed by 50% via Redis caching. Developed robust REST APIs using FastAPI and trained 100+ employees on its adoption.",
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer Intern",
    tech: "Python, Flask, React, Node",
    period: "Feb 2022 — Jul 2022",
    description: "Dockerized field tech portal for cloud deployment and redesigned UI with modular Ant Design components, reducing code volume by 20%.",
  },
  {
    company: "Akamai Technologies",
    role: "Software Engineer Intern",
    tech: "Python, Flask, React, Node, Perl, PHP",
    period: "May 2021 — Jul 2021",
    description: "Developed Shipping Details Dashboard reducing inquiries by 30% and overhauled logistics management tools using Angular and Perl.",
  },
  {
    company: "Samsung India",
    role: "R&D Machine Learning Engineer Intern",
    tech: "ML, NLP (BERT, RoBERTa)",
    period: "Oct 2020 — Mar 2021",
    description: "Engineered cutting-edge ML models for out-of-domain text detection with 96% accuracy, significantly improving text classification capabilities.",
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
          <div key={index} className="relative group">
            <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full border-2 border-gray-800 bg-background group-hover:border-accent-primary transition-colors">
              <div className="w-1.5 h-1.5 bg-accent-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                {exp.company}
              </h3>
              <span className="text-sm font-mono text-gray-500">{exp.period}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
              <span className="text-accent-secondary font-mono text-lg font-semibold">{exp.role}</span>
              {exp.tech && (
                <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                  [{exp.tech}]
                </span>
              )}
            </div>
            
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
