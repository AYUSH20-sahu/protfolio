import Image from "next/image";
import type { GitHubStats } from "@/lib/github";

type GitHubShowcaseProps = {
  stats: GitHubStats;
};

export function GitHubShowcase({ stats }: GitHubShowcaseProps) {
  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Followers" value={stats.user?.followers ?? 0} />
        <StatCard label="Following" value={stats.user?.following ?? 0} />
        <StatCard label="Public repos" value={stats.user?.public_repos ?? 0} />
        <StatCard label="Stars" value={stats.totalStars} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            GitHub profile
          </p>

          {stats.user ? (
            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-4">
                <Image
                  src={stats.user.avatar_url}
                  alt={stats.user.login}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-3xl border border-white/10 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {stats.user.name ?? stats.user.login}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-300">
                    {stats.user.bio ?? "Public GitHub profile connected live."}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <InfoRow label="Location" value={stats.user.location ?? "N/A"} />
                <InfoRow label="Company" value={stats.user.company ?? "Independent"} />
                <InfoRow label="Website" value={stats.user.blog ?? "Not set"} />
                <InfoRow label="Profile" value={stats.user.html_url} />
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={stats.user.html_url}
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
                >
                  Open GitHub
                </a>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                  Updated {stats.lastUpdatedLabel}
                </span>
              </div>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5 text-slate-300">
              {stats.error ?? "GitHub data is temporarily unavailable."}
            </div>
          )}
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Top repositories
            </p>
            <div className="mt-5 space-y-3">
              {stats.topRepos.length > 0 ? (
                stats.topRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-medium text-white">
                          {repo.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-300">
                          {repo.description ?? "No description available."}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                        {repo.language ?? "Other"}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
                      <span>Stars {repo.stargazers_count}</span>
                      <span>Forks {repo.forks_count}</span>
                      <span>Updated {formatDate(repo.updated_at)}</span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-slate-300">
                  No repositories available right now.
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Language breakdown
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stats.languageBreakdown.length > 0 ? (
                stats.languageBreakdown.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-lg font-medium text-white">{item.name}</p>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.count} repos
                    </p>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-slate-300">
                  Language data will populate once GitHub responds.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
        {label}
      </p>
      <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 break-words text-sm text-slate-200">{value}</p>
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}
