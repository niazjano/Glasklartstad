import Link from "next/link";
import { cn } from "@/lib/utils";

const NAVY = "#081B3A";
const BLUE = "#2D5BFF";

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
  const frame = variant === "light" ? "#ffffff" : NAVY;
  const mullion = variant === "light" ? "#ffffff" : NAVY;
  const glass = variant === "light" ? "#ffffff" : BLUE;
  const sparkle = variant === "light" ? "#ffffff" : BLUE;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 shrink-0", className)}
      aria-hidden
    >
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="4"
        stroke={frame}
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="24"
        y1="6"
        x2="24"
        y2="42"
        stroke={mullion}
        strokeWidth="1.25"
        opacity="0.3"
      />
      <line
        x1="6"
        y1="24"
        x2="42"
        y2="24"
        stroke={mullion}
        strokeWidth="1.25"
        opacity="0.3"
      />
      <path
        d="M11 33 L19 17 L27 25"
        stroke={glass}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <circle cx="16" cy="18" r="2" fill={sparkle} opacity="0.3" />
      <path
        d="M31 13 L32.1 15.4 L34.6 14.5 L33 16.6 L35.2 18.4 L32.8 19.2 L33.5 21.8 L31.2 20.4 L29 21.8 L29.7 19.2 L27.3 18.4 L29.5 16.6 L27.9 14.5 L30.4 15.4 Z"
        fill={sparkle}
        opacity="0.95"
      />
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
              isLight ? "text-white" : "text-[#081B3A]"
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
