export const GITHUB_USERNAME = "Karthikvenugopal";

export const GITHUB_REPOSITORIES_URL =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

const EXCLUDED_REPOSITORIES = new Set([
  GITHUB_USERNAME.toLowerCase(),
  `${GITHUB_USERNAME}.github.io`.toLowerCase(),
  "coronabot",
  "screenrecorder",
]);

const ACRONYMS = new Map([
  ["ai", "AI"],
  ["api", "API"],
  ["llm", "LLM"],
  ["ml", "ML"],
  ["mlops", "MLOps"],
  ["nim", "NIM"],
  ["nli", "NLI"],
  ["nlp", "NLP"],
  ["onnx", "ONNX"],
  ["rag", "RAG"],
  ["ui", "UI"],
]);

const MAX_TECH_TAGS = 8;

export interface PortfolioProject {
  /** GitHub's stable repository ID. Omit for non-GitHub/private projects. */
  repoId?: number;
  title: string;
  github: string | null;
  tech: string[];
  bullets: string[];
}

export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  disabled?: boolean;
  updated_at: string;
}

function titleCaseToken(token: string): string {
  const acronym = ACRONYMS.get(token.toLowerCase());
  if (acronym) return acronym;
  return token.charAt(0).toUpperCase() + token.slice(1);
}

export function formatGitHubLabel(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map(titleCaseToken)
    .join(" ");
}

export function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (!value || typeof value !== "object") return false;

  const repository = value as Partial<GitHubRepository>;
  return (
    typeof repository.id === "number" &&
    typeof repository.name === "string" &&
    typeof repository.html_url === "string" &&
    (typeof repository.description === "string" || repository.description === null) &&
    (typeof repository.language === "string" || repository.language === null) &&
    Array.isArray(repository.topics) &&
    repository.topics.every((topic) => typeof topic === "string") &&
    typeof repository.fork === "boolean" &&
    typeof repository.archived === "boolean" &&
    typeof repository.updated_at === "string"
  );
}

function isPortfolioRepository(repository: GitHubRepository): boolean {
  return (
    !repository.fork &&
    !repository.archived &&
    !repository.disabled &&
    !EXCLUDED_REPOSITORIES.has(repository.name.toLowerCase())
  );
}

function liveTechTags(repository: GitHubRepository): string[] {
  const labels = [
    repository.language,
    ...repository.topics.map(formatGitHubLabel),
  ].filter((label): label is string => Boolean(label?.trim()));

  return labels
    .filter(
      (label, index) =>
        labels.findIndex(
          (candidate) => candidate.toLowerCase() === label.toLowerCase(),
        ) === index,
    )
    .slice(0, MAX_TECH_TAGS);
}

function mergeKnownProject(
  fallback: PortfolioProject,
  repository: GitHubRepository,
): PortfolioProject {
  const description = repository.description?.trim();
  const tech = liveTechTags(repository);

  return {
    ...fallback,
    github: repository.html_url,
    tech: tech.length > 0 ? tech : fallback.tech,
    bullets: description
      ? [description, ...fallback.bullets.slice(1)]
      : fallback.bullets,
  };
}

function newProject(repository: GitHubRepository): PortfolioProject {
  return {
    repoId: repository.id,
    title: formatGitHubLabel(repository.name),
    github: repository.html_url,
    tech: liveTechTags(repository),
    bullets: [repository.description!.trim()],
  };
}

/**
 * Merge live GitHub metadata into the static portfolio fallback.
 *
 * Known cards retain their editorial title and results bullet. Their GitHub
 * description, URL, language, and topics stay live. Newly described public
 * repositories are prepended by most-recent update. Local/private cards are
 * retained exactly as authored.
 */
export function mergeGitHubProjects(
  fallbackProjects: PortfolioProject[],
  repositories: GitHubRepository[],
): PortfolioProject[] {
  const visibleRepositories = repositories.filter(isPortfolioRepository);
  const repositoryById = new Map(
    visibleRepositories.map((repository) => [repository.id, repository]),
  );
  const knownRepositoryIds = new Set(
    fallbackProjects.flatMap((project) =>
      project.repoId === undefined ? [] : [project.repoId],
    ),
  );

  const discoveredProjects = visibleRepositories
    .filter(
      (repository) =>
        !knownRepositoryIds.has(repository.id) &&
        Boolean(repository.description?.trim()),
    )
    .sort(
      (left, right) =>
        Date.parse(right.updated_at) - Date.parse(left.updated_at),
    )
    .map(newProject);

  const knownAndLocalProjects = fallbackProjects.flatMap((project) => {
    if (project.repoId === undefined) return [project];

    const repository = repositoryById.get(project.repoId);
    return repository ? [mergeKnownProject(project, repository)] : [];
  });

  return [...discoveredProjects, ...knownAndLocalProjects];
}
