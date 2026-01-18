"use client";

export default function HeroActions() {
  return (
    <div className="mt-8 flex gap-4">
      <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition">
        Hire Me
      </button>
      <button className="px-6 py-3 border border-slate-400 text-slate-200 rounded-lg hover:bg-slate-800 transition">
        View Projects
      </button>
    </div>
  );
}
