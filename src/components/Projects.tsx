import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: "01",
    title: "Multi-Task Sequential Recommendation (MMoE)",
    github: "https://github.com/Karthikvenugopal/Multi-Task-Sequential-Recommendation",
    tech: ["Python", "PyTorch", "SASRec", "MMoE", "ONNX Runtime", "FastAPI", "MLflow", "Docker"],
    bullets: [
      "Built a multi-task sequential recommender on the Amazon Reviews 2023 (Movies & TV) dataset, jointly optimizing CTR prediction and rating regression using a SASRec transformer backbone extended with an MMoE layer (4 experts, 2 task-specific gates), benchmarked against single-task and Shared-Bottom MTL baselines.",
      "MMoE achieved NDCG@10 of 0.641 and HR@10 of 0.826, outperforming the single-task SASRec baseline by 4.7% and 3.5% respectively, while simultaneously predicting user ratings with MAE of 0.68.",
      "Exported the best MMoE checkpoint to ONNX and served recommendations via FastAPI with ~12ms inference latency; tracked all three model variants with MLflow for reproducible experiment comparison.",
    ],
  },
  {
    id: "02",
    title: "Real-Time Content Moderation & Safety Pipeline",
    github: "https://github.com/Karthikvenugopal/Real-Time-Content-Moderation-and-Safety",
    tech: ["Python", "Kafka (Redpanda)", "Faust", "Llama 3.2", "sentence-transformers", "Redis", "Docker", "Streamlit"],
    bullets: [
      "Built an end-to-end streaming ML pipeline ingesting 1\u20135k posts/minute from the BlueSky Jetstream WebSocket firehose and YouTube Shorts API into Redpanda (Kafka-compatible), orchestrating per-event embedding, LLM classification, and online topic clustering via a Faust async agent.",
      "Deployed a 5-class content safety classifier (safe, spam, hate, nsfw, violence) using Llama 3.2 3B via Ollama with temperature=0 for deterministic outputs; implemented an 8-second timeout with fail-open fallback to sustain pipeline throughput under peak load.",
      "Implemented online topic modeling with MiniBatchKMeans (partial_fit, n=20 clusters) on 384-dim sentence-transformer embeddings, persisting trend metrics in Redis TimeSeries and surfacing live moderation rates on a Streamlit dashboard with 5-second auto-refresh.",
    ],
  },
  {
    id: "03",
    title: "End-to-End MLOps Pipeline for Fraud Detection",
    github: "https://github.com/Karthikvenugopal/End-to-End-MLOps-Pipeline-for-Fraud-Detection",
    tech: ["Python", "XGBoost", "MLflow", "Prefect", "FastAPI", "Docker", "Optuna", "ONNX Runtime"],
    bullets: [
      "Achieved 80% Precision@100 in fraud detection by benchmarking XGBoost vs. Neural Networks using Optuna (100+ trials), engineering features to handle class imbalance in financial transactions.",
      "Engineered an automated MLOps continuous training pipeline serving models via Docker and FastAPI; integrated Alibi-Detect for data drift monitoring to trigger Prefect retraining workflows, ensuring 24/7 model reliability and eliminating manual maintenance.",
      "Reduced model inference latency by 35% (150ms \u2192 97ms) by serving XGBoost with ONNX Runtime and implementing request batching in FastAPI, scaling to support 500+ requests/minute under stress testing.",
    ],
  },
  {
    id: "04",
    title: "Multi-Source Research Analyst Agent",
    github: "https://github.com/Karthikvenugopal/Multi-Source-Research-Analyst-Agent",
    tech: ["Python", "LangGraph", "OpenAI API", "Tavily Search", "Weaviate", "Docker", "FastAPI"],
    bullets: [
      "Built a stateful multi-agent system using LangGraph to automate web and academic API queries for complex question answering, improving accuracy by 30% and reducing manual research effort by 50%.",
      "Containerized the full application with Docker and exposed a FastAPI endpoint, supporting 100+ concurrent requests and demonstrating production-ready MLOps principles.",
    ],
  },
  {
    id: "05",
    title: "Waste Classification with Transfer Learning",
    github: null,
    tech: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "ResNet50", "ResNet101", "VGG16", "Transfer Learning"],
    bullets: [
      "Benchmarked 4 CNN architectures (EfficientNetB0, ResNet50, ResNet101, VGG16) for 9-class waste classification on the SeparatedWaste dataset (4,752 images), applying transfer learning with ImageNet pre-trained weights and data augmentation (rotation, zoom, flips, brightness shifts).",
      "EfficientNetB0 achieved the best test accuracy of 86% (weighted F1: 0.86), outperforming ResNet50 (77%), ResNet101, and VGG16; trained custom heads with L2 regularization, batch normalization, and dropout using Adam (lr=1e-4) with early stopping.",
      "Attained per-class F1 scores as high as 0.97 for Vegetation and 0.93 for Food Organics; saved final model checkpoints in .keras format for reproducible evaluation across all four model variants.",
    ],
  },
  {
    id: "06",
    title: "Distributed Raft Consensus Protocol",
    github: null,
    tech: ["C++20", "gRPC", "Protobuf", "Multi-threading"],
    bullets: [
      "Developed a fault-tolerant distributed consensus node in C++20 by defining Protocol Buffer schemas and implementing gRPC client-server architecture, establishing a 3-node cluster with 100% reliable peer-to-peer communication.",
      "Orchestrated thread-safe state machine transitions and concurrent RPC handling (RequestVote, AppendEntries) using mutexes, ensuring 0 data race conditions across 50+ automated network partition and disconnection test cases.",
      "Synchronized asynchronous heartbeat loops and randomized election timeouts to mitigate split votes, achieving deterministic leader election within a 0.5\u20131.0 second latency window under stable network conditions.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader label="projects" />
      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-6 hover:border-zinc-700 transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-zinc-600 shrink-0">{project.id}</span>
                <h3 className="text-base font-semibold text-zinc-100 leading-snug">
                  {project.title}
                </h3>
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors"
                >
                  GitHub&nbsp;↗
                </a>
              )}
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded font-mono"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                  <span className="text-violet-500 shrink-0 mt-0.5 text-xs">&#9658;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
