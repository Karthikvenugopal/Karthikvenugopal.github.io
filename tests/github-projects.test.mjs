import assert from "node:assert/strict";
import test from "node:test";

import {
  formatGitHubLabel,
  isGitHubRepository,
  mergeGitHubProjects,
} from "../src/lib/github-projects.ts";

function repository(overrides = {}) {
  return {
    id: 1,
    name: "known-project",
    html_url: "https://github.com/Karthikvenugopal/known-project",
    description: "Live GitHub description.",
    language: "Python",
    topics: ["machine-learning", "rag"],
    fork: false,
    archived: false,
    updated_at: "2026-09-01T00:00:00Z",
    ...overrides,
  };
}

test("formats repository and topic labels for portfolio display", () => {
  assert.equal(formatGitHubLabel("RecallGraph"), "Recall Graph");
  assert.equal(formatGitHubLabel("end-to-end-mlops-rag"), "End To End MLOps RAG");
});

test("validates GitHub API repository objects", () => {
  assert.equal(isGitHubRepository(repository()), true);
  assert.equal(isGitHubRepository({ message: "rate limited" }), false);
});

test("merges live metadata, discovers projects, and retains local cards", () => {
  const fallback = [
    {
      repoId: 1,
      title: "Curated title",
      github: "https://github.com/old-name",
      tech: ["Static tech"],
      bullets: ["Static description.", "Curated result."],
    },
    {
      title: "Private project",
      github: null,
      tech: ["C++"],
      bullets: ["Private details."],
    },
  ];

  const result = mergeGitHubProjects(fallback, [
    repository(),
    repository({
      id: 2,
      name: "new-rag-project",
      html_url: "https://github.com/Karthikvenugopal/new-rag-project",
      description: "A newly discovered project.",
      language: "TypeScript",
      topics: ["ai-agent"],
      updated_at: "2026-09-02T00:00:00Z",
    }),
    repository({ id: 3, name: "fork", fork: true }),
    repository({ id: 4, name: "archived", archived: true }),
    repository({ id: 5, name: "no-description", description: null }),
  ]);

  assert.deepEqual(
    result.map((project) => project.title),
    ["New RAG Project", "Curated title", "Private project"],
  );
  assert.deepEqual(result[0].tech, ["TypeScript", "AI Agent"]);
  assert.deepEqual(result[1].tech, ["Python", "Machine Learning", "RAG"]);
  assert.deepEqual(result[1].bullets, [
    "Live GitHub description.",
    "Curated result.",
  ]);
  assert.equal(
    result[1].github,
    "https://github.com/Karthikvenugopal/known-project",
  );
  assert.equal(result[2].github, null);
});

test("removes a known GitHub card when the live repository is unavailable", () => {
  const fallback = [
    {
      repoId: 99,
      title: "Deleted or archived project",
      github: "https://github.com/Karthikvenugopal/old",
      tech: ["Python"],
      bullets: ["Fallback."],
    },
  ];

  assert.deepEqual(mergeGitHubProjects(fallback, []), []);
});
