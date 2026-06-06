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
  const frame = variant === "light" ? "#ffffff" : "#0f172a";
  const glass = variant === "light" ? "#e2e8f0" : "#94a3b8";
  const sparkle = variant === "light" ? "#60a5fa" : "#3b82f6";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden
    >
      <rect x="8" y="8" width="32" height="32" rx="3" stroke={frame} strokeWidth="2.5" />
      <line x1="24" y1="8" x2="24" y2="40" stroke={glass} strokeWidth="1.5" />
      <line x1="8" y1="24" x2="40" y2="24" stroke={glass} strokeWidth="1.5" />
      <path
        d="M14 30 L20 18 L26 26 L32 14"
        stroke={sparkle}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M30 12 L32 16 L36 14 L34 18 L38 20 L34 22 L36 26 L32 24 L30 28 L28 24 L24 26 L26 22 L22 20 L26 18 L24 14 L28 16 Z"
        fill={sparkle}
        opacity="0.95"
      />
      <circle cx="17" cy="17" r="2" fill={sparkle} opacity="0.35" />
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
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "text-lg font-bold tracking-tight",
              isLight ? "text-white" : "text-[#0f172a]"
            )}
          >
            Glasklart
          </span>
          <span
            className={cn(
              "mt-0.5 text-[11px] font-medium tracking-[0.12em] uppercase",
              isLight ? "text-slate-300" : "text-slate-500"
            )}
          >
            Fönsterputs & Städ
          </span>
        </div>
      )}
    </Link>
  );
}
