export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          Rhenvox
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          A founder-led software company building practical digital products for web and mobile.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rv-card p-5">
          <p className="rv-kicker mb-2">Incorporated</p>
          <p className="text-rhenvox-text">2025</p>
        </div>
        <div className="rv-card p-5">
          <p className="rv-kicker mb-2">Registered</p>
          <p className="text-rhenvox-text">Rhenvox LTD, United Kingdom</p>
        </div>
        <div className="rv-card p-5">
          <p className="rv-kicker mb-2">Based in</p>
          <p className="text-rhenvox-text">Türkiye</p>
        </div>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-rhenvox-text">About</h2>
          <p className="mb-4 max-w-prose leading-relaxed text-rhenvox-muted">
            Rhenvox LTD is a UK registered company, incorporated in 2025. It is founder-led and currently small.
          </p>
          <p className="mb-4 max-w-prose leading-relaxed text-rhenvox-muted">
            The work is software product development: web applications, mobile applications, and the backend/API systems behind them. Where a product needs it, that can include practical AI integrations — not as a research lab, but as features inside software.
          </p>
          <p className="max-w-prose leading-relaxed text-rhenvox-muted">
            The company is based in Türkiye, with a registered office in the United Kingdom.
          </p>
        </div>
        <div className="rv-card p-6">
          <h2 className="mb-3 text-lg font-medium text-rhenvox-text">Focus</h2>
          <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
            Build useful digital products and keep the public description of Rhenvox aligned with work that can actually be shown.
          </p>
          <h3 className="mb-3 text-sm font-medium text-rhenvox-text">What that includes</h3>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {["Web applications", "Mobile applications", "Backend / APIs", "AI integrations"].map((item) => (
              <li key={item} className="text-sm text-rhenvox-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-rhenvox-text">Work areas</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rv-card p-6">
            <h3 className="mb-2 text-base font-medium text-rhenvox-text">Software Development</h3>
            <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              Web applications, APIs, product development, integrations, and maintenance of existing products.
            </p>
          </div>
          <div className="rv-card p-6">
            <h3 className="mb-2 text-base font-medium text-rhenvox-text">Mobile Development</h3>
            <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              React Native applications connected to product APIs, including iOS/Android product work and release support.
            </p>
          </div>
          <div className="rv-card p-6">
            <h3 className="mb-2 text-base font-medium text-rhenvox-text">AI Integrations</h3>
            <p className="max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              Practical AI features inside software products, such as API-based model integrations, when they are useful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
