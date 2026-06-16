import SectionHeader from "./SectionHeader";

const education = [
  {
    school: "University of Southern California",
    shortName: "USC",
    degree: "MS in Computer Science",
    gpa: "3.77 / 4.00",
    period: "Jan 2025 \u2014 Dec 2026",
    location: "Los Angeles, CA",
    courses: [
      "Machine Learning",
      "Natural Language Processing",
      "Distributed Systems",
      "Analysis of Algorithms",
      "Information Retrieval & Web Search",
    ],
  },
  {
    school: "BMS College of Engineering",
    shortName: "BMSCE",
    degree: "BE in Computer Science",
    gpa: "9.12 / 10.00",
    period: "Aug 2018 \u2014 Jul 2022",
    location: "Bangalore, India",
    courses: [
      "Linear Algebra",
      "Statistics",
      "Artificial Intelligence",
      "Big Data Analytics",
      "Cloud Computing",
      "Database Management Systems",
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <SectionHeader index="04" total="04" label="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
        {education.map((edu, i) => (
          <div
            key={edu.shortName}
            className={`py-8 border-b border-line ${
              i === 0 ? "md:pr-12" : "md:pl-12 md:border-l md:border-line"
            }`}
          >
            <div className="flex items-baseline justify-between gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              <span className="text-accent">{edu.shortName}</span>
              <span>{edu.period}</span>
            </div>
            <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight">{edu.school}</h3>
            <p className="mt-1 text-sm text-muted">
              {edu.degree} · {edu.location}
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-semibold tabular-nums tracking-tight">
                {edu.gpa}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                GPA
              </span>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-2">
                Coursework
              </p>
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1 text-sm leading-relaxed text-ink/80">
                {edu.courses.map((course, j) => (
                  <span key={course} className="inline-flex items-baseline whitespace-nowrap">
                    {j > 0 && <span className="text-line mr-1.5" aria-hidden="true">·</span>}
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
