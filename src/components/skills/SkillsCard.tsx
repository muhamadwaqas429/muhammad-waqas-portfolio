"use client";

interface SkillsCardProps {
  title: string;
  description: string;
  stack: string[];
}

export default function SkillsCard({
  title,
  description,
  stack,
}: SkillsCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-[#020617]/90
        p-7
        backdrop-blur
        transition
        hover:border-cyan-400/30
      "
    >
      {/* Accent strip (identity) */}
      <span
        className="
          absolute
          left-0
          top-0
          h-full
          w-[3px]
          bg-gradient-to-b
          from-cyan-400/80
          via-indigo-400/60
          to-transparent
          opacity-60
        "
      />

      {/* Soft glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-400/5
          via-transparent
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        <p className="text-sm text-white/60 leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="
                text-xs
                px-3
                py-1
                rounded-full
                border border-white/10
                bg-white/5
                text-white/70
                group-hover:border-cyan-400/30
                transition
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
