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
        "py-20 sm:py-24",
        variant === "dark" && "bg-[#081B3A]",
        variant === "surface" && "bg-slate-50",
        variant === "light" && "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
            isDark ? "text-white" : "text-[#081B3A]"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {isDark ? (
            <>
              <Button href={ROUTES.quote} variant="darkPrimary" size="lg">
                {primaryLabel}
              </Button>
              <Button href={CONTACT.mobileHref} variant="darkSecondary" size="lg">
                Ring Nu
              </Button>
            </>
          ) : (
            <>
              <Button href={ROUTES.quote} variant="primary" size="lg">
                {primaryLabel}
              </Button>
              <Button href={CONTACT.mobileHref} variant="secondary" size="lg">
                Ring Nu
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
