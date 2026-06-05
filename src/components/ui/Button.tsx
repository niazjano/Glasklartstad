import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-foreground text-white shadow-md hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border-2 border-slate-200 bg-white text-foreground shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border-2 border-slate-300 bg-white text-foreground shadow-sm hover:border-foreground hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-foreground hover:bg-surface-muted",
  inverse:
    "border-2 border-white/40 bg-white text-foreground shadow-md hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm font-semibold",
  md: "px-6 py-3 text-sm font-semibold",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
