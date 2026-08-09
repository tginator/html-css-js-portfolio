interface BadgeProps {
  children: string;
  tone?: "cyan" | "violet" | "amber" | "leaf";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  cyan: "border-cyan/50 text-cyan bg-cyan/10",
  violet: "border-violet/50 text-violet bg-violet/10",
  amber: "border-amber/50 text-amber bg-amber/10",
  leaf: "border-leaf/50 text-leaf bg-leaf/10",
};

/** Small pixel-bordered tag, used for tech stacks and metadata. */
export function Badge({ children, tone = "cyan" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border font-mono text-xs px-2 py-1 tracking-tight ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
