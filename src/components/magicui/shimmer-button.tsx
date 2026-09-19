import { cn } from "@/lib/utils";
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  forwardRef,
} from "react";
import Link from "next/link";

const primaryClassName =
  "inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-rhenvox-bg";

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: ReactNode;
  href?: string;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      className,
      children,
      href,
      onClick,
      shimmerColor: _shimmerColor,
      shimmerSize: _shimmerSize,
      borderRadius: _borderRadius,
      shimmerDuration: _shimmerDuration,
      background: _background,
      ...props
    },
    ref
  ) => {
    const sharedClassName = cn(primaryClassName, className);

    if (href) {
      return (
        <Link
          href={href}
          className={sharedClassName}
          onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement> | undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={sharedClassName} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
