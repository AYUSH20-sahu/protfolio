"use client";

import { useMemo, useState } from "react";
import {
  answerPortfolioQuestion,
  assistantSuggestions,
  type AssistantAnswer
} from "@/data/assistant";

export function PortfolioAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<AssistantAnswer>(() =>
    answerPortfolioQuestion("who is ayush")
  );

  const hasQuery = question.trim().length > 0;

  const computedAnswer = useMemo(
    () => answerPortfolioQuestion(question),
    [question]
  );

  function submitQuery(value: string) {
    const nextAnswer = answerPortfolioQuestion(value);
    setQuestion(value);
    setAnswer(nextAnswer);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
          AI assistant
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          Ask questions grounded in the portfolio data.
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          This assistant is intentionally limited to the content on the site, so
          it can answer confidently without inventing details.
        </p>

        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            submitQuery(question);
          }}
        >
          <label className="mb-2 block text-sm text-slate-300" htmlFor="assistant-query">
            Ask a question
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="assistant-query"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Who is Ayush?"
              className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              Ask
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap gap-2">
          {assistantSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => submitQuery(suggestion)}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-[#07111f] p-6 shadow-soft">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
          Response
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          {answer.title}
        </h3>
        <p className="mt-4 leading-8 text-slate-300">{answer.body}</p>

        {answer.bullets?.length ? (
          <ul className="mt-6 space-y-3">
            {answer.bullets.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {answer.links?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {answer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
          {hasQuery
            ? "Answer generated from the current portfolio dataset."
            : "Try one of the suggestions to start."}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-slate-500">
          Preview mode: {computedAnswer.title}
        </div>
      </div>
    </div>
  );
}
