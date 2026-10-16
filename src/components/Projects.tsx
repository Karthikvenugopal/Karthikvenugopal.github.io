"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import {
  GITHUB_REPOSITORIES_URL,
  isGitHubRepository,
  mergeGitHubProjects,
  type GitHubRepository,
  type PortfolioProject,
} from "@/lib/github-projects";

const fallbackProjects: PortfolioProject[] = [
  {
    repoId: 1266702475,
    title: "Multimodal RAG Agent",
    github: "https://github.com/Karthikvenugopal/nim-multimodal-agent",
    tech: ["Python", "LangGraph", "NVIDIA NIM", "Vision-Language Model (Nemotron)", "Llama-Nemotron", "RAG"],
    bullets: [
      "Built a multimodal agentic RAG system with LangGraph that routes retrieved figures through a vision-language model (Nemotron) and fuses them with text passages to answer questions a text-only pipeline cannot. Includes a faithfulness-gated self-correction loop that escalates to force_vision, query rewrite, or question decomposition before abstaining on unanswerable inputs.",
      "Ran a vision-ablation benchmark scored by an LLM-as-judge: +28.6 points overall accuracy and +60 on figure-only questions versus a vision-off baseline. Self-correction loop triggered on 9 of 14 responses, recovering 8 of 9 ungrounded answers with 1 correct abstention. 26 tests, CI green.",
    ],
  },
  {
    repoId: 1264389540,
    title: "Grounded RAG Pipeline with Faithfulness Evaluation",
    github: "https://github.com/Karthikvenugopal/cohere-grounded-rag",
    tech: ["Python", "Cohere Embed v4", "Rerank v3.5", "Command", "RAG"],
    bullets: [
      "Built a grounded RAG pipeline using dense embeddings and cross-encoder reranking to retrieve and anchor LLM responses with inline citations, ensuring every factual claim in the answer maps back to a specific retrieved source passage.",
      "Implemented a three-signal faithfulness evaluation layer \u2014 citation coverage, grounded-sentence rate, and LLM-as-judge agreement \u2014 to detect unsupported claims in generated answers and surface grounding gaps before output is returned.",
    ],
  },
  {
    repoId: 1230505652,
    title: "LLM Hallucination Detection Pipeline",
    github: "https://github.com/Karthikvenugopal/Claim-Level-Halluciantion-Detection",
    tech: ["Python", "RoBERTa", "HuggingFace Transformers", "NLI", "PyTorch", "FastAPI"],
    bullets: [
      "Built a claim-level hallucination detection system by fine-tuning a RoBERTa NLI classifier for factual consistency scoring \u2014 decomposing LLM outputs into atomic claims and scoring each against source context independently, enabling span-level attribution of unsupported content.",
      "Conducted systematic evaluation against prompted LLM baselines (GPT-3.5, LLaMA-2) across multiple decoding strategies; NLI classifier achieved F1 0.87, outperforming LLM judges on out-of-distribution factual claims while remaining model-agnostic and 10x cheaper to run. Benchmarked across LLaMA-2, Mistral, GPT-3.5, and Falcon \u2014 surfaced model-specific failure patterns with different models breaking down on distinct claim types.",
    ],
  },
  {
    repoId: 1065587415,
    title: "Multi-Source Research Analyst Agent",
    github: "https://github.com/Karthikvenugopal/Multi-Source-Research-Analyst-Agent",
    tech: ["Python", "LangGraph", "Weaviate", "Tavily", "OpenAI API", "Docker", "FastAPI"],
    bullets: [
      "Built a stateful multi-agent system with LangGraph that coordinates web and academic search (Tavily) with Weaviate dense retrieval for complex multi-hop question answering, with an LLM-as-judge faithfulness loop scoring each answer's grounding against retrieved sources at every reasoning step.",
      "Containerized the application with Docker and served it via a FastAPI endpoint supporting 100+ concurrent requests; per-step faithfulness scores surfaced reasoning failures and grounding gaps across the agent graph, improving answer accuracy by 30%.",
    ],
  },
  {
    repoId: 1172178983,
    title: "Real-Time Content Moderation Pipeline",
    github: "https://github.com/Karthikvenugopal/Real-Time-Content-Moderation-and-Safety",
    tech: ["Python", "Kafka (Redpanda)", "Faust", "Llama 3.2", "sentence-transformers", "Redis", "Docker", "Streamlit"],
    bullets: [
      "Built an end-to-end streaming ML pipeline ingesting 1,000-5,000 posts/minute from live data sources into Redpanda (Kafka-compatible), orchestrating per-event embedding, LLM classification, and online topic clustering via a Faust async agent.",
      "Deployed a 5-class content safety classifier (safe, spam, hate, NSFW, violence) using Llama 3.2 3B via Ollama with fail-open fallback under peak load. Designed separate classifiers per harm dimension with per-class confidence calibration; persisted trend metrics in Redis TimeSeries and surfaced live moderation rates on a Streamlit dashboard.",
    ],
  },
  {
    repoId: 1071206007,
    title: "MLOps Fraud Detection Pipeline",
    github: "https://github.com/Karthikvenugopal/End-to-End-MLOps-Pipeline-for-Fraud-Detection",
    tech: ["Python", "XGBoost", "MLflow", "Prefect", "Alibi-Detect", "ONNX Runtime", "FastAPI", "Docker"],
    bullets: [
      "Built an end-to-end model lifecycle pipeline with drift detection (Alibi-Detect), automated retraining (Prefect), and experiment tracking (MLflow); ONNX export for cross-platform inference achieving 94% F1 and sub-10ms inference latency.",
      "Reduced model inference latency by 35% (150ms to 97ms) by serving XGBoost with ONNX Runtime and implementing request batching in FastAPI, scaling to 500+ requests/minute under stress testing.",
    ],
  },
  {
    title: "RaftScope: Distributed Raft Consensus",
    github: null,
    tech: ["C++20", "gRPC", "Protocol Buffers", "Multi-threading", "D3.js"],
    bullets: [
      "Implemented the Raft consensus protocol from scratch in C++20 with a gRPC and Protocol Buffers RPC layer covering RequestVote and AppendEntries, running a multi-node cluster with leader election, log replication, and thread-safe state-machine transitions using mutexes. Built with two collaborators for CSCI 546 (Distributed Systems) at USC.",
      "Instrumented the cluster with Lamport logical clocks and built a D3.js browser-based space-time visualizer to trace message ordering and leader changes. All 6 integration tests pass, covering network partitions and node failures.",
    ],
  },
  {
    repoId: 1257995326,
    title: "NewsInterview LangGraph Agent",
    github: "https://github.com/Karthikvenugopal/newsinterview-langgraph-agent",
    tech: ["Python", "LangGraph", "Qwen-2.5-7B"],
    bullets: [
      "Built a training-free interviewer agent as an alternative to RL fine-tuning (Huang et al., EMNLP 2025), using the same Qwen-2.5-7B base model to conduct follow-up question generation and information elicitation in a news interview setting without any fine-tuning.",
      "Verified on n=20 cases: 78.8% acknowledgement rate versus 53.8% (CoT baseline) and 35.0% (prompt-only baseline), with information-item recall effectively flat across conditions \u2014 demonstrating that structured prompting matches fine-tuned behavior on acknowledgement without the training cost.",
    ],
  },
];

const GITHUB_CACHE_KEY = "kv_github_projects_v1";
const GITHUB_CACHE_TTL_MS = 15 * 60 * 1000;

interface GitHubCache {
  fetchedAt: number;
  repositories: GitHubRepository[];
}

function readGitHubCache(): GitHubCache | null {
  try {
    const value = JSON.parse(localStorage.getItem(GITHUB_CACHE_KEY) ?? "null") as
      | Partial<GitHubCache>
      | null;

    if (
      !value ||
      typeof value.fetchedAt !== "number" ||
      Date.now() - value.fetchedAt > GITHUB_CACHE_TTL_MS ||
      !Array.isArray(value.repositories)
    ) {
      return null;
    }

    const repositories = value.repositories.filter(isGitHubRepository);
    return repositories.length > 0
      ? { fetchedAt: value.fetchedAt, repositories }
      : null;
  } catch {
    return null;
  }
}

function writeGitHubCache(repositories: GitHubRepository[]): void {
  try {
    localStorage.setItem(
      GITHUB_CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), repositories }),
    );
  } catch {
    // Storage can be unavailable in private browsing; live data still works.
  }
}

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const cached = readGitHubCache();
    if (cached) {
      setProjects(mergeGitHubProjects(fallbackProjects, cached.repositories));
      return;
    }

    const controller = new AbortController();

    async function syncProjects() {
      try {
        const response = await fetch(GITHUB_REPOSITORIES_URL, {
          headers: { Accept: "application/vnd.github+json" },
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);

        const payload: unknown = await response.json();
        if (!Array.isArray(payload)) throw new Error("Unexpected GitHub response");

        const repositories = payload.filter(isGitHubRepository);
        if (repositories.length === 0) throw new Error("No GitHub repositories found");

        writeGitHubCache(repositories);
        setProjects(mergeGitHubProjects(fallbackProjects, repositories));
      } catch {
        // Keep the statically rendered portfolio intact if GitHub is unavailable.
      }
    }

    syncProjects();
    return () => controller.abort();
  }, []);

  return (
    <section id="projects">
      <SectionHeader index="02" total="05" label="Selected Work" />
      <div className="border-t border-line">
        {projects.map((project, index) => (
          <article
            key={project.repoId ?? project.title}
            className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-4 py-8 md:py-10 border-b border-line"
          >
            {/* Index number */}
            <div className="col-span-12 md:col-span-1">
              <span className="font-mono text-sm text-accent tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Main column */}
            <div className="col-span-12 md:col-span-8">
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] leading-[1.05]">
                {project.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted leading-relaxed">
                {project.tech.map((t, i) => (
                  <span key={t} className="inline-flex items-baseline whitespace-nowrap">
                    {i > 0 && <span className="text-line mr-1.5" aria-hidden="true">·</span>}
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-3 max-w-3xl">
                {project.bullets.map((bullet, i) => (
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

            {/* Right meta — GitHub link only when public */}
            <div className="col-span-12 md:col-span-3 md:text-right">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-rule pb-1 inline-block font-mono text-[0.7rem] uppercase tracking-[0.18em]"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
