import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Notice",
  description: "Privacy notice for the Rhenvox LTD corporate website and direct business enquiries.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-rhenvox-text">Privacy Notice</h1>
        <p className="text-rhenvox-muted">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Scope</h2>
        <p className="mb-4">
          This Privacy Notice applies to the Rhenvox corporate website and direct business enquiries made to Rhenvox LTD.
          Separate products operated by Rhenvox, client applications, and services delivered under client agreements may be
          subject to separate privacy notices or contractual data-protection terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Who We Are</h2>
        <p className="mb-4">
          Rhenvox LTD is a software company registered in England and Wales.
          This notice describes how personal information is handled in connection with rhenvox.com and direct business enquiries.
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
        <h2 className="text-2xl font-semibold mb-4">3. Information We Receive</h2>
        <h3 className="text-lg font-medium mb-3">3.1 Direct business enquiries</h3>
        <p className="mb-4">
          The website includes a quote section. It does not store the message. Choosing send opens your own email
          application, addressed to hello@rhenvox.com, with the details you entered. The site does not include user
          accounts or a newsletter signup. If you contact Rhenvox by email, telephone, or WhatsApp, we may receive
          information you choose to send, such as your name, email address, telephone number, company name, and the
          content of your message.
        </p>
        <p className="mb-4">
          Those communications are handled by the relevant email, telephone, or messaging provider.
          This notice describes what the website implements; it does not describe those providers&apos; own processing.
        </p>

        <h3 className="text-lg font-medium mb-3">3.2 Website application</h3>
        <p className="mb-4">
          The current marketing website does not implement application-level analytics or advertising tracking technologies.
          It does not record pages visited, time spent on pages, or similar usage metrics in the application.
        </p>
        <p className="mb-4">
          Language and appearance preferences may be stored locally in the browser using localStorage.
          Those preferences are used only to remember your language and theme settings on this website.
          They are not used as marketing or advertising tracking.
        </p>
        <p className="mb-4">
          This statement is limited to the application. It does not describe records that a hosting provider,
          content delivery network, or similar infrastructure may generate independently of this website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. How We Use Information</h2>
        <h3 className="text-lg font-medium mb-3">4.1 Business enquiries</h3>
        <p className="mb-4">
          Personal information supplied in a business enquiry may be processed:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>to respond to the enquiry and, where applicable, take steps requested before entering into a contract;</li>
          <li>for Rhenvox&apos;s legitimate interests in receiving and responding to genuine business enquiries, where those interests are not overridden by the individual&apos;s rights;</li>
          <li>where necessary to comply with a legal obligation;</li>
          <li>where necessary to establish, exercise or defend legal claims.</li>
        </ul>
        <h3 className="text-lg font-medium mb-3">4.2 Contracted services</h3>
        <p className="mb-4">
          Where a person becomes a client or acts as a business contact for a client, additional processing may be
          necessary to administer the relevant contract or business relationship. Paid engagements are governed by a
          separate written agreement, which may include its own data-protection terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Sharing</h2>
        <p className="mb-4">
          We may share personal information where needed to communicate with you or operate the company
          (for example an email or telephony provider), where required by law, or where necessary to
          establish, exercise or defend legal claims.
        </p>
        <p className="mb-4">
          The current marketing website does not send visitor data to analytics or advertising vendors.
        </p>
        <p className="mb-4">
          External websites and services, including email, telephone, WhatsApp and social-network links from this site,
          are governed by their own terms and privacy notices. Rhenvox does not control those third-party services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. United Kingdom and Türkiye</h2>
        <p className="mb-4">
          Because Rhenvox LTD is registered in the United Kingdom and is operated from Türkiye, information that you send
          directly to Rhenvox may be accessed or handled in the United Kingdom and Türkiye. Where applicable
          data-protection law imposes requirements on an international or restricted transfer, Rhenvox will handle the
          relevant transfer in accordance with those requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
        <p className="mb-4">
          We keep personal information only for as long as reasonably necessary for the purposes described in this notice,
          including responding to enquiries, administering a business relationship, complying with applicable legal,
          accounting or reporting obligations, and establishing, exercising or defending legal claims. Retention periods
          may therefore differ depending on the type of information and the reason it is held. When personal information
          is no longer required, we delete or anonymise it where appropriate.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
        <p className="mb-4">Under UK data-protection law, you may have the following rights in relation to personal information:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Access:</strong> Request copies of your personal data</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data in certain circumstances</li>
          <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
          <li><strong>Portability:</strong> Request transfer of your data to another organisation in certain circumstances</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw that consent</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us at hello@rhenvox.com.
          We will respond to your request within one month, or as otherwise required by applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Security</h2>
        <p className="mb-4">
          Rhenvox takes technical and organisational measures that are appropriate to the nature of the information
          processed and the risks involved. No method of electronic transmission or storage can be guaranteed to be
          completely secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Cookies and Local Preferences</h2>
        <p className="mb-4">
          The current marketing website does not implement advertising or analytics cookies,
          and it does not present a cookie consent banner. Language and appearance preferences
          are stored in the browser using localStorage, not as application cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Children</h2>
        <p className="mb-4">
          This corporate website is intended for business and professional users and is not designed for children.
          Rhenvox does not intentionally seek personal information from children through the website. If we become aware
          that personal information relating to a child has been provided in circumstances where appropriate
          authorisation is required, we will take reasonable steps to delete it or otherwise handle it in accordance
          with applicable law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">12. Changes</h2>
        <p className="mb-4">
          We may update this notice from time to time to reflect changes in our practices or applicable laws.
          The updated notice will be posted on this website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this notice or how personal information is handled in connection with the
          corporate website or direct enquiries, please contact us:
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
