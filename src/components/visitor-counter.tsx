"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const key = "ayush-portfolio-visits";
    const current = Number(window.localStorage.getItem(key) ?? "0") + 1;
    window.localStorage.setItem(key, String(current));
    setVisits(current);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
      <span>{visits ? `${visits} visits on this device` : "Welcome back"}</span>
    </div>
  );
}
