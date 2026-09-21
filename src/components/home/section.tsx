import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HomeSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 md:px-6 md:py-20", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
