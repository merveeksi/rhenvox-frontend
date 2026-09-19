import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="rv-kicker mb-3 inline-flex items-center gap-2">
          <MessageCircle className="h-3.5 w-3.5" />
          Project enquiries
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          Get in Touch
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          For project questions, email hello@rhenvox.com.
        </p>
      </div>

      <section className="mb-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rv-card p-6">
            <h2 className="mb-2 text-lg font-medium text-rhenvox-text">Registered Office</h2>
            <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              UK company registration address for Rhenvox LTD. This is not presented as a staffed headquarters.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-rhenvox-muted" />
                <div>
                  <p className="text-sm text-rhenvox-text">71-75 Shelton Street</p>
                  <p className="text-sm text-rhenvox-muted">Covent Garden, London</p>
                  <p className="text-sm text-rhenvox-muted">United Kingdom, WC2H 9JQ</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-rhenvox-muted" />
                <a href="tel:+447845722801" className="text-sm text-rhenvox-text hover:text-rhenvox-accent">
                  +44 7845 722801
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-rhenvox-muted" />
                <a href="mailto:hello@rhenvox.com" className="text-sm text-rhenvox-text hover:text-rhenvox-accent">
                  hello@rhenvox.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="mr-3 h-4 w-4 text-rhenvox-muted" />
                <a href="https://wa.me/447845722801" className="text-sm text-rhenvox-text hover:text-rhenvox-accent">
                  WhatsApp: +44 7845 722801
                </a>
              </div>
              <div className="mt-2 rounded-md border border-rhenvox-border bg-rhenvox-surface-muted p-3">
                <p className="font-mono text-sm text-rhenvox-muted">
                  <span className="text-rhenvox-text">Company Number:</span> 16423845
                </p>
              </div>
            </div>
          </div>

          <div className="rv-card p-6">
            <h2 className="mb-2 text-lg font-medium text-rhenvox-text">Based in Türkiye</h2>
            <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
              Day-to-day work is based in Türkiye. There is no public street address listed here for a staffed Istanbul office.
            </p>
            <div className="flex items-start">
              <MapPin className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-rhenvox-muted" />
              <p className="text-sm text-rhenvox-text">Türkiye</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="rv-card p-6 md:p-8">
          <h2 className="mb-3 text-2xl font-semibold tracking-tight text-rhenvox-text">
            Project enquiry
          </h2>
          <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
            There is no contact form on this site yet. Email hello@rhenvox.com with the project, timeline, and any technical notes.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hello@rhenvox.com">
              <Mail className="mr-2 h-4 w-4" />
              Email hello@rhenvox.com
            </a>
          </Button>
        </div>
      </section>

      <section>
        <div className="rv-card max-w-xl p-6">
          <h3 className="mb-2 text-lg font-medium text-rhenvox-text">Prefer a call?</h3>
          <p className="mb-5 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
            You can also use the phone number listed above.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+447845722801">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
