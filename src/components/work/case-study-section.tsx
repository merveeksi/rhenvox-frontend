import type { ReactNode } from "react";

export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12 md:mb-14">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-rhenvox-text">
        {title}
      </h2>
      <div className="max-w-prose space-y-4 text-base leading-relaxed text-rhenvox-muted">
        {children}
      </div>
    </section>
  );
}
