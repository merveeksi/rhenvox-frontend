import { localizedMetadata } from "@/lib/seo";

export const generateMetadata = localizedMetadata({
  title: "Website Terms",
  description: "Terms governing use of the Rhenvox LTD corporate website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-rhenvox-text">Website Terms</h1>
        <p className="text-rhenvox-muted">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. About these terms</h2>
        <p className="mb-4">
          These Website Terms govern access to and use of rhenvox.com. They do not by themselves form the full contract
          for paid software-development or consulting services. Any paid engagement is governed by the written proposal,
          statement of work, Service Agreement or other contract agreed between Rhenvox LTD and the relevant client.
          If there is a conflict, that written agreement controls in relation to the paid services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. About the website</h2>
        <p className="mb-4">
          The corporate website is operated by Rhenvox LTD, a company registered in England and Wales.
        </p>
        <div className="mb-4 rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-4">
          <ul className="space-y-1 text-sm">
            <li><strong>Legal Name:</strong> Rhenvox LTD</li>
            <li><strong>Company Number:</strong> 16423845</li>
            <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Operated from:</strong> Türkiye</li>
            <li><strong>Email:</strong> hello@rhenvox.com</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Permitted use</h2>
        <p className="mb-4">
          Visitors may use the website for lawful informational and business-enquiry purposes.
          You must not use the website unlawfully, attempt to compromise its security, engage in unauthorised automated
          abuse, or infringe Rhenvox or third-party rights.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Website content</h2>
        <p className="mb-4">
          Information on the website may be updated from time to time. General website information is provided for
          information about Rhenvox and its work. It is not guaranteed to be complete or suitable for any particular
          project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual property</h2>
        <p className="mb-4">
          Rhenvox retains rights in its website branding and content, except third-party material and material
          expressly identified otherwise. This clause does not govern ownership of client project deliverables.
          Intellectual property in paid work is determined by the applicable written agreement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. External links</h2>
        <p className="mb-4">
          The website may contain links to external sites and services, including email, telephone, WhatsApp and
          social-network pages. Those services are outside Rhenvox&apos;s control and may have separate terms and
          privacy notices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Paid services</h2>
        <p className="mb-4">
          Scope, price, payment, deliverables, intellectual property, support, liability, data processing, and
          governing law or jurisdiction for paid services are set out in the relevant written agreement.
          Visiting this website does not, by itself, create a paid-services contract.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Governing law</h2>
        <p className="mb-4">
          These Website Terms are governed by English law. The governing law and dispute provisions applicable to
          paid services are set out in the relevant written agreement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
        <p className="mb-4">
          Questions about these Website Terms may be sent to hello@rhenvox.com.
        </p>
      </section>
    </div>
  );
}
