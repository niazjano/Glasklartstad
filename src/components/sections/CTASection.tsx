import { Button } from "@/components/ui/Button";
import { CONTACT, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  variant?: "light" | "dark" | "surface";
  primaryLabel?: string;
  className?: string;
};

export function CTASection({
  title,
  description,
  variant = "light",
  primaryLabel = "Få Gratis Offert",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        variant === "dark" && "bg-foreground",
        variant === "surface" && "bg-surface",
        variant === "light" && "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-2xl font-bold tracking-tight sm:text-3xl",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-muted"
          )}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {isDark ? (
            <>
              <Button href={ROUTES.quote} variant="inverse" size="lg">
                {primaryLabel}
              </Button>
              <Button
                href={CONTACT.mobileHref}
                variant="secondary"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Ring {CONTACT.mobile}
              </Button>
            </>
          ) : (
            <>
              <Button href={ROUTES.quote} size="lg">
                {primaryLabel}
              </Button>
              <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
                Ring {CONTACT.mobile}
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
