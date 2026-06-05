import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "light";
  showText?: boolean;
  className?: string;
  onClick?: () => void;
};

export function LogoIcon({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const stroke = variant === "light" ? "#ffffff" : "#0f172a";
  const fill = variant === "light" ? "#ffffff" : "#0f172a";
  const accent = variant === "light" ? "#94a3b8" : "#3b82f6";

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9 shrink-0", className)}
      aria-hidden
    >
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="4"
        stroke={stroke}
        strokeWidth="2"
      />
      <line x1="20" y1="4" x2="20" y2="36" stroke={stroke} strokeWidth="1.5" />
      <line x1="4" y1="20" x2="36" y2="20" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M24 10 L30 16 L24 22"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="12" cy="12" r="2" fill={fill} opacity="0.15" />
    </svg>
  );
}

export function Logo({
  variant = "default",
  showText = true,
  className,
  onClick,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Glasklart Fönsterputs & Städ – Hem"
    >
      <LogoIcon variant={variant} />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={cn(
              "text-base font-bold tracking-tight sm:text-lg",
              isLight ? "text-white" : "text-foreground"
            )}
          >
            Glasklart
          </span>
          <span
            className={cn(
              "text-[11px] font-medium tracking-wide sm:text-xs",
              isLight ? "text-slate-300" : "text-muted"
            )}
          >
            Fönsterputs & Städ
          </span>
        </div>
      )}
    </Link>
  );
}
