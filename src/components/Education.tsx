import SectionHeader from "./SectionHeader";

const education = [
  {
    school: "University of Southern California",
    shortName: "USC",
    degree: "MS in Computer Science",
    gpa: "3.74 / 4.00",
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
      <SectionHeader label="education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((edu) => (
          <div
            key={edu.shortName}
            className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-6 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="text-xs font-mono text-violet-400 font-semibold">{edu.shortName}</span>
              <span className="text-xs font-mono text-zinc-600">{edu.period}</span>
            </div>
            <h3 className="text-sm font-semibold text-zinc-100 mb-0.5">{edu.school}</h3>
            <p className="text-xs text-zinc-500 mb-4">{edu.degree} &middot; {edu.location}</p>

            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-2xl font-bold font-mono text-amber-400">{edu.gpa}</span>
              <span className="text-xs text-zinc-600 font-mono">GPA</span>
            </div>

            <div>
              <p className="text-xs font-mono text-zinc-600 mb-2">Coursework</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 bg-zinc-800/80 text-zinc-400 text-xs rounded font-mono"
                  >
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
