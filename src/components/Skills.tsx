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
      <SectionHeader label="skills" />
      <div className="space-y-5">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row gap-3">
            <span className="text-xs font-mono text-zinc-500 w-32 shrink-0 pt-1">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-md font-mono hover:border-zinc-600 hover:text-zinc-100 transition-colors"
                >
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
