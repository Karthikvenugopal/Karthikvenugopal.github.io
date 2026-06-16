import SectionHeader from "./SectionHeader";

const skills = [
  {
    category: "ML / AI",
    items: [
      "PyTorch", "TensorFlow", "Keras", "Hugging Face",
      "LangChain", "LangGraph", "OpenAI API", "XGBoost", "scikit-learn",
    ],
  },
  {
    category: "MLOps & Cloud",
    items: [
      "MLflow", "Prefect", "Docker", "Kubernetes",
      "GCP", "Azure", "Weaviate", "Pinecone", "ONNX Runtime",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "C++20", "Java", "SQL", "TypeScript", "JavaScript"],
  },
  {
    category: "Systems & Infra",
    items: ["gRPC", "Protobuf", "FastAPI", "Flask", "Redis", "Apache Spark"],
  },
  {
    category: "Data & Libraries",
    items: ["pandas", "NumPy", "OpenCV", "Matplotlib", "Alibi-Detect"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader index="01" total="04" label="Skills & Tools" />
      <div className="border-t border-line">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 border-b border-line"
          >
            <div className="md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted pt-1">
              {group.category}
            </div>
            <div className="md:col-span-9 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base md:text-lg leading-relaxed">
              {group.items.map((item, i) => (
                <span key={item} className="inline-flex items-baseline whitespace-nowrap">
                  {i > 0 && <span className="text-line mr-2" aria-hidden="true">·</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
