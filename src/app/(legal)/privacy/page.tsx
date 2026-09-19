import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Rhenvox LTD, covering how personal data is handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-rhenvox-text">Privacy Policy</h1>
        <p className="text-rhenvox-muted">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
        <p className="mb-4">
          Rhenvox LTD is a software company registered in England and Wales.
          We are committed to protecting your privacy and handling your personal data in accordance with
          the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <div className="mb-4 rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-4">
          <h3 className="font-semibold mb-2">Company Details:</h3>
          <ul className="space-y-1 text-sm">
            <li><strong>Company Name:</strong> Rhenvox LTD</li>
            <li><strong>Company Number:</strong> 16423845</li>
            <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
            <li><strong>Operated from:</strong> Türkiye</li>
            <li><strong>Contact:</strong> +44 7845 722801</li>
            <li><strong>Email:</strong> hello@rhenvox.com</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <h3 className="text-lg font-medium mb-3">2.1 Information You Provide Directly</h3>
        <p className="mb-4">
          The current website does not include a contact form, user accounts, or a newsletter signup.
          If you contact Rhenvox by email, telephone, or WhatsApp, we may receive information you choose to send, such as:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
          <li><strong>Communication Data:</strong> Messages, inquiries, and any other information you provide when contacting us</li>
          <li><strong>Business Information:</strong> Project requirements, technical specifications, and business needs</li>
        </ul>
        <p className="mb-4">
          Those communications are handled by the relevant email, telephone, or messaging provider.
          This policy describes what the website implements; it does not describe those providers&apos; own processing.
        </p>

        <h3 className="text-lg font-medium mb-3">2.2 Information Collected by the Website Application</h3>
        <p className="mb-4">
          The current marketing website does not implement application-level analytics or advertising tracking technologies.
          It does not record pages visited, time spent on pages, or similar usage metrics in the application.
        </p>
        <p className="mb-4">
          This statement is limited to the application. It does not describe records that a hosting provider,
          content delivery network, or similar infrastructure may generate independently of this website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We process your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Service Delivery:</strong> To provide software development and related product work</li>
          <li><strong>Communication:</strong> To respond to inquiries, provide support, and manage our business relationship</li>
          <li><strong>Contract Management:</strong> To negotiate, execute, and fulfill contractual obligations</li>
          <li><strong>Business Development:</strong> To understand your needs and improve our services</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legitimate interests</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
        <p className="mb-4">We process your personal data based on the following legal grounds:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Legitimate Interest:</strong> For business communications, service improvement, and business development</li>
          <li><strong>Contract:</strong> To perform our contractual obligations and provide requested services</li>
          <li><strong>Consent:</strong> Where you have explicitly agreed to specific processing activities</li>
          <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
        <p className="mb-4">We may share your personal data with:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Service Providers:</strong> Providers needed to communicate with you or operate the company (for example email or telephony), where that is necessary</li>
          <li><strong>Business Partners:</strong> When collaborating on joint projects with your explicit consent</li>
          <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
          <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of business assets</li>
        </ul>
        <p className="mb-4">
          The current marketing website does not send visitor data to analytics or advertising vendors.
        </p>
        <p className="mb-4">
          <strong>Location of processing:</strong> Personal data you send to us may be accessed by people
          working for Rhenvox who operate from Türkiye. The company is registered in the United Kingdom.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="mb-4">We retain your personal data for as long as necessary to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Fulfill the purposes outlined in this policy</li>
          <li>Comply with legal, accounting, or reporting requirements</li>
          <li>Resolve disputes and enforce our agreements</li>
        </ul>
        <p className="mb-4">
          Typically, we retain business contact information for 7 years after the end of our business relationship,
          unless a longer retention period is required by law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
        <p className="mb-4">Under UK GDPR, you have the following rights:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Access:</strong> Request copies of your personal data</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
          <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
          <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for consent-based processing</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us at hello@rhenvox.com.
          We will respond to your request within one month.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against
          unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Encryption of data in transit and at rest</li>
          <li>Access controls and authentication mechanisms</li>
          <li>Incident response procedures</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking</h2>
        <p className="mb-4">
          The current marketing website does not implement advertising or analytics cookies,
          and it does not present a cookie consent banner. Language and appearance preferences
          are stored in the browser using localStorage, not as application cookies.
        </p>
        <p className="mb-4">
          A separate Cookie Policy is not published. This section does not make statements about
          cookies that hosting or network infrastructure may set independently of the application.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy
          practices of these external sites. We encourage you to review their privacy policies before
          providing any personal information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
        <p className="mb-4">
          Our services are not directed to individuals under 16 years of age. We do not knowingly
          collect personal data from children under 16. If we become aware that we have collected
          such data, we will take steps to delete it promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time to reflect changes in our practices
          or applicable laws. We will notify you of any significant changes by posting the updated
          policy on our website and updating the &quot;Last Updated&quot; date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy or our data practices, please contact us:
        </p>
        <div className="mb-4 rounded-lg border border-rhenvox-border bg-rhenvox-surface-muted p-4">
          <ul className="space-y-1 text-sm">
            <li><strong>Email:</strong> hello@rhenvox.com</li>
            <li><strong>Phone:</strong> +44 7845 722801</li>
            <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</li>
          </ul>
        </div>
        <p className="mb-4">
          You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO)
          if you believe your data protection rights have been violated. Visit www.ico.org.uk for more information.
        </p>
      </section>
    </div>
  );
}