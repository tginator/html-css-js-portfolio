import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-cyan text-void-950 border-cyan hover:bg-cyan-glow shadow-pixel hover:shadow-pixel-sm hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-void-800 text-cyan border-cyan/60 hover:border-cyan hover:text-cyan-glow shadow-pixel hover:shadow-pixel-sm hover:translate-x-[2px] hover:translate-y-[2px]",
  ghost:
    "bg-transparent text-slate-300 border-void-500 hover:border-violet hover:text-violet",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 border-2 px-4 py-2.5 font-pixel text-pixel-xs uppercase tracking-wide transition-all duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 disabled:hover:translate-y-0";

interface CommonProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type PixelLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type PixelButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PixelButtonProps = PixelLinkProps | PixelButtonAsButtonProps;

/** Game-HUD styled button. Renders an <a> when `href` is provided, else a <button>. */
export function PixelButton({ variant = "primary", icon, children, className = "", ...props }: PixelButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    return (
      <a
        className={classes}
        {...props}
        target={isExternal ? "_blank" : props.target}
        rel={isExternal ? "noopener noreferrer" : props.rel}
      >
        {icon}
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
