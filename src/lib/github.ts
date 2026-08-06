type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  company: string | null;
  location: string | null;
  blog: string | null;
  html_url: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
};

export type GitHubStats = {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalStars: number;
  languageBreakdown: Array<{ name: string; count: number }>;
  topRepos: GitHubRepo[];
  lastUpdatedLabel: string;
  error?: string;
};

const USERNAME = "AYUSH20-sahu";

async function fetchGitHub<T>(path: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    next: { revalidate: 3600 },
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed for ${path}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHub<GitHubUser>(`/users/${USERNAME}`),
      fetchGitHub<GitHubRepo[]>(
        `/users/${USERNAME}/repos?per_page=100&sort=updated`
      )
    ]);

    const filteredRepos = repos
      .filter((repo) => !repo.fork && !repo.archived)
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

    const totalStars = filteredRepos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );

    const languageCounts = filteredRepos.reduce<Record<string, number>>(
      (accumulator, repo) => {
        const language = repo.language ?? "Other";
        accumulator[language] = (accumulator[language] ?? 0) + 1;
        return accumulator;
      },
      {}
    );

    const languageBreakdown = Object.entries(languageCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return {
      user,
      repos: filteredRepos,
      totalStars,
      languageBreakdown,
      topRepos: filteredRepos.slice(0, 6),
      lastUpdatedLabel: new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(new Date())
    };
  } catch (error) {
    return {
      user: null,
      repos: [],
      totalStars: 0,
      languageBreakdown: [],
      topRepos: [],
      lastUpdatedLabel: new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(new Date()),
      error: error instanceof Error ? error.message : "Unknown GitHub error"
    };
  }
}
