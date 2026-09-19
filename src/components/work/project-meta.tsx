export function ProjectMeta({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="rv-kicker mb-1">{item.label}</dt>
          <dd className="text-sm text-rhenvox-text">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
