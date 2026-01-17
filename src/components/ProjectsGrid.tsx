const projects = [
  {
    title: "MLOps Pipeline for Real-Time Fraud Detection",
    tech: ["XGBoost", "MLflow", "Prefect", "FastAPI", "Docker", "Optuna"],
    description: "Production-ready fraud detection system featuring automated retraining workflows, drift detection, and A/B testing of XGBoost vs. Neural Networks. Achieved 80% Precision@100.",
    id: "01",
  },
  {
    title: "Multi-Source Research Agent",
    tech: ["LangGraph", "OpenAI", "Pinecone"],
    description: "Autonomous agentic system capable of synthesizing technical research from multiple academic sources and documentation.",
    id: "02",
  },
  {
    title: "Waste Management Transfer Learning",
    tech: ["CNNs", "ResNet", "PyTorch"],
    description: "Computer vision system optimizing waste classification accuracy using transfer learning techniques on edge devices.",
    id: "03",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl font-mono text-white">
          <span className="text-accent-primary">~/</span>projects
        </h2>
        <div className="h-[1px] bg-gray-800 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative border border-gray-800 bg-gray-900/30 p-6 hover:border-accent-primary/50 transition-colors duration-300"
          >
            <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover:text-accent-primary transition-colors">
              P_{project.id}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 mt-4 group-hover:text-accent-secondary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[80px]">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
