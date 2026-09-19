export function TechnicalStack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-rhenvox-border px-2 py-0.5 font-mono text-xs text-rhenvox-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
