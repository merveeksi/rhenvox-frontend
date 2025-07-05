import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Rhenvox",
  description: "Rhenvox Terms of Service and Conditions",
};

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-rhenvox-muted">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="mb-4">
          These Terms of Service ("Terms") constitute a legally binding agreement between you 
          ("Client", "You") and Rhenvox ("Company", "We", "Us"), a company registered in England 
          and Wales under company number 16423845, regarding your use of our services and website.
        </p>
        <p className="mb-4">
          By accessing our website, engaging our services, or entering into a service agreement 
          with us, you acknowledge that you have read, understood, and agree to be bound by these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. About Rhenvox</h2>
        <div className="bg-rhenvox-surface/50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Company Information:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Legal Name:</strong> Rhenvox</li>
            <li><strong>Company Number:</strong> 16423845</li>
            <li><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Contact:</strong> +44 7845 722801</li>
            <li><strong>Email:</strong> info@rhenvox.com</li>
            <li><strong>Website:</strong> rhenvox.com</li>
          </ul>
        </div>
        <p className="mb-4">
          We specialize in premium software engineering, AI research and development, 
          and UI/UX design services for startups and enterprises.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
        <p className="mb-4">Rhenvox provides the following professional services:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Software Engineering:</strong> Custom web and mobile application development, enterprise software solutions, API development and integration</li>
          <li><strong>AI Research & Development:</strong> Machine learning solutions, predictive analytics, natural language processing, computer vision systems</li>
          <li><strong>UI/UX Design:</strong> User experience design, interface design, design systems, user research and testing</li>
          <li><strong>Consulting Services:</strong> Technical consulting, AI strategy, digital transformation advisory</li>
          <li><strong>Support and Maintenance:</strong> Ongoing technical support, system maintenance, and enhancement services</li>
        </ul>
        <p className="mb-4">
          All services are provided according to individual service agreements that specify 
          scope, deliverables, timelines, and pricing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Service Agreements</h2>
        <p className="mb-4">
          Specific terms for each project will be detailed in separate service agreements, 
          statements of work, or proposals ("Service Agreements"). In case of conflict between 
          these Terms and a Service Agreement, the Service Agreement shall take precedence.
        </p>
        <h3 className="text-lg font-medium mb-3">4.1 Scope of Work</h3>
        <p className="mb-4">
          Each Service Agreement will clearly define deliverables, timelines, milestones, 
          and acceptance criteria. Changes to the scope require written agreement from both parties.
        </p>
        <h3 className="text-lg font-medium mb-3">4.2 Client Responsibilities</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide necessary information, access, and resources in a timely manner</li>
          <li>Participate in scheduled meetings and review sessions</li>
          <li>Provide feedback within agreed timeframes</li>
          <li>Ensure availability of key stakeholders for decision-making</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Pricing and Payment</h2>
        <h3 className="text-lg font-medium mb-3">5.1 Fees</h3>
        <p className="mb-4">
          Fees for services are specified in individual Service Agreements. 
          All prices are quoted exclusive of VAT and other applicable taxes.
        </p>
        <h3 className="text-lg font-medium mb-3">5.2 Payment Terms</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Invoices are payable within 30 days of issue</li>
          <li>Late payments may incur interest charges at 8% above Bank of England base rate</li>
          <li>We reserve the right to suspend services for overdue payments</li>
          <li>All payments must be made in GBP unless otherwise agreed</li>
        </ul>
        <h3 className="text-lg font-medium mb-3">5.3 Expenses</h3>
        <p className="mb-4">
          Pre-approved out-of-pocket expenses will be charged at cost with appropriate documentation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
        <h3 className="text-lg font-medium mb-3">6.1 Client IP</h3>
        <p className="mb-4">
          You retain ownership of all intellectual property you provide to us. 
          You grant us a license to use such IP solely for providing the agreed services.
        </p>
        <h3 className="text-lg font-medium mb-3">6.2 Work Product</h3>
        <p className="mb-4">
          Upon full payment, you will own the custom work product specifically created for you, 
          subject to our retained rights in pre-existing IP, third-party components, and our methodologies.
        </p>
        <h3 className="text-lg font-medium mb-3">6.3 Rhenvox IP</h3>
        <p className="mb-4">
          We retain ownership of our pre-existing intellectual property, methodologies, 
          tools, and general knowledge gained through providing services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Confidentiality</h2>
        <p className="mb-4">
          Both parties agree to maintain confidentiality of sensitive information disclosed 
          during the engagement. This obligation survives termination of our relationship.
        </p>
        <p className="mb-4">
          We may require separate Non-Disclosure Agreements (NDAs) for particularly sensitive projects.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Warranties and Disclaimers</h2>
        <h3 className="text-lg font-medium mb-3">8.1 Professional Standards</h3>
        <p className="mb-4">
          We warrant that services will be performed with reasonable care and skill, 
          in accordance with industry best practices.
        </p>
        <h3 className="text-lg font-medium mb-3">8.2 Disclaimers</h3>
        <p className="mb-4">
          Except as expressly stated, all services are provided "as is" without warranties 
          of any kind. We do not guarantee specific business outcomes or results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p className="mb-4">
          Our total liability to you, whether in contract, tort, or otherwise, 
          shall not exceed the total fees paid by you for the specific services giving rise to the claim.
        </p>
        <p className="mb-4">
          We shall not be liable for any indirect, consequential, special, or punitive damages, 
          including but not limited to loss of profits, data, or business opportunities.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibled mb-4">10. Termination</h2>
        <h3 className="text-lg font-medium mb-3">10.1 Termination for Convenience</h3>
        <p className="mb-4">
          Either party may terminate ongoing services with 30 days written notice. 
          You remain liable for all work completed and expenses incurred up to the termination date.
        </p>
        <h3 className="text-lg font-medium mb-3">10.2 Termination for Cause</h3>
        <p className="mb-4">
          Either party may terminate immediately for material breach that remains uncured 
          after 15 days written notice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Force Majeure</h2>
        <p className="mb-4">
          Neither party shall be liable for delays or failures in performance due to circumstances 
          beyond their reasonable control, including but not limited to acts of God, government actions, 
          war, terrorism, pandemic, or natural disasters.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Data Protection</h2>
        <p className="mb-4">
          Our data processing practices are governed by our Privacy Policy and applicable data protection laws. 
          Where we process personal data on your behalf, we will enter into appropriate data processing agreements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. Website Terms</h2>
        <h3 className="text-lg font-medium mb-3">13.1 Permitted Use</h3>
        <p className="mb-4">
          You may use our website for lawful purposes only. You may not use the site to transmit 
          harmful, threatening, abusive, or otherwise objectionable content.
        </p>
        <h3 className="text-lg font-medium mb-3">13.2 Content</h3>
        <p className="mb-4">
          All website content is our property or used with permission. 
          You may not reproduce, distribute, or create derivative works without our express consent.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Jurisdiction</h2>
        <p className="mb-4">
          These Terms are governed by English law. Any disputes will be subject to the 
          exclusive jurisdiction of the English courts.
        </p>
        <p className="mb-4">
          For clients in Turkey, Turkish law may apply to certain aspects of our relationship 
          as specified in individual Service Agreements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">15. General Provisions</h2>
        <h3 className="text-lg font-medium mb-3">15.1 Entire Agreement</h3>
        <p className="mb-4">
          These Terms, together with any Service Agreements, constitute the entire agreement 
          between the parties regarding the subject matter.
        </p>
        <h3 className="text-lg font-medium mb-3">15.2 Amendment</h3>
        <p className="mb-4">
          We may update these Terms from time to time. Continued use of our services 
          after changes constitutes acceptance of the revised Terms.
        </p>
        <h3 className="text-lg font-medium mb-3">15.3 Severability</h3>
        <p className="mb-4">
          If any provision of these Terms is found unenforceable, 
          the remainder shall continue in full force and effect.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
        <p className="mb-4">
          For questions about these Terms or our services, please contact us:
        </p>
        <div className="bg-rhenvox-surface/50 p-4 rounded-lg mb-4">
          <ul className="space-y-1 text-sm">
            <li><strong>Email:</strong> info@rhenvox.com</li>
            <li><strong>Phone:</strong> +44 7845 722801</li>
            <li><strong>Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
          </ul>
        </div>
      </section>

      <section className="bg-rhenvox-surface/30 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">📋 Acknowledgment</h3>
        <p className="text-sm text-rhenvox-muted">
          By engaging our services or using our website, you acknowledge that you have read, 
          understood, and agree to be bound by these Terms of Service.
        </p>
      </section>
    </div>
  );
} 