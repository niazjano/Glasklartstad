import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "darkPrimary" | "darkSecondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

const navy = "bg-[#081B3A] text-white border-2 border-[#081B3A]";
const navyHover =
  "hover:bg-[#0c2449] hover:border-[#0c2449] hover:shadow-lg hover:-translate-y-0.5";

const variants = {
  primary: cn(navy, navyHover, "shadow-md active:translate-y-0"),
  secondary: cn(
    "bg-white text-[#081B3A] border-2 border-[#081B3A]",
    "shadow-sm hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
  ),
  ghost: "text-[#081B3A] hover:bg-slate-100",
  darkPrimary: cn(
    "bg-white text-[#081B3A] border-2 border-white",
    "shadow-lg hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
  ),
  darkSecondary: cn(
    "bg-transparent text-white border-2 border-white/80",
    "hover:bg-white/10 hover:border-white hover:-translate-y-0.5 active:translate-y-0"
  ),
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
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
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
