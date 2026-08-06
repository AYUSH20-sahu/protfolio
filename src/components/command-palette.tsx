"use client";

import { useEffect, useMemo, useState } from "react";
import { assistantCommands, assistantSuggestions } from "@/data/assistant";

type CommandItem = {
  label: string;
  href?: string;
  action?: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const commands = useMemo<CommandItem[]>(
    () => [
      ...assistantCommands,
      ...assistantSuggestions.map((label) => ({
        label: `Ask: ${label}`,
        href: `#assistant`
      }))
    ],
    []
  );

  const filtered = commands.filter((command) =>
    command.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-soft backdrop-blur transition hover:bg-white/15"
      >
        Ctrl + K
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 px-4 py-16 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#07111f] p-5 shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                  Command palette
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Navigate fast or jump to common questions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white"
              >
                Close
              </button>
            </div>

            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search commands..."
              className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
            />

            <div className="mt-4 max-h-[50vh] space-y-2 overflow-y-auto pr-1">
              {filtered.length > 0 ? (
                filtered.map((command) => (
                  <button
                    key={command.label}
                    type="button"
                    onClick={() => {
                      if (command.href) {
                        window.location.hash = command.href.replace("#", "");
                      }
                      command.action?.();
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <span>{command.label}</span>
                    <span className="text-xs text-slate-500">
                      {command.href ?? "action"}
                    </span>
                  </button>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">
                  No commands match your search.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
