import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: ReactNode;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      shimmerDuration = "2s",
      borderRadius = "1rem",
      background = "linear-gradient(to right, #7A30DC, #68F9E5)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-rhenvox-turquoise to-rhenvox-purple px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          className
        )}
        style={{
          borderRadius,
          background,
        }}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden rounded-md">
          <div
            className="absolute inset-0 animate-[shimmer_var(--duration)_infinite]"
            style={{
              "--color": shimmerColor,
              "--size": shimmerSize,
              "--duration": shimmerDuration,
              background: `linear-gradient(to right, transparent, transparent, var(--color), transparent, transparent)`,
              backgroundPosition: "0 0",
              backgroundSize: "var(--size) 100%",
              backgroundRepeat: "no-repeat",
            } as any}
          />
        </div>

        {children}
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
