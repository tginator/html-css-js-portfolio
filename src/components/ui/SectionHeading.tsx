interface SectionHeadingProps {
  eyebrow?: string;
  gameLabel: string;
  plainLabel: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Every major section pairs its game identity with plain-English context,
 * so a recruiter always knows what they're looking at.
 */
export function SectionHeading({ eyebrow, gameLabel, plainLabel, description, align = "left" }: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && (
        <span className="font-pixel text-pixel-xs text-cyan/80 tracking-widest">{eyebrow}</span>
      )}
      <h2 className="font-pixel text-pixel-lg sm:text-pixel-xl text-slate-100">{gameLabel}</h2>
      <div className="flex items-center gap-2 font-mono text-sm text-amber/90">
        <span aria-hidden="true">//</span>
        <span>{plainLabel}</span>
      </div>
      {description && <p className="max-w-2xl text-sm text-slate-400 font-sans">{description}</p>}
      <div className="pixel-divider max-w-xs" aria-hidden="true" />
    </div>
  );
}
