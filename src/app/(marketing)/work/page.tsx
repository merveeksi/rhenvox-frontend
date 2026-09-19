import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile";
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nur Bilgi Web",
    description: "Web product for Islamic knowledge, including a Q&A assistant, Quran, prayer times, and related tools.",
    image: "/images/nurbilgi.logo.png",
    category: "web",
    technologies: ["Next.js", "TypeScript", ".NET"],
    link: "https://nurbilgi.com",
  },
  {
    id: 2,
    title: "Nur Bilgi Mobile",
    description: "Mobile application built with React Native and connected to the Nur Bilgi platform.",
    image: "/images/nurbilgi.logo.png",
    category: "mobile",
    technologies: ["React Native", "TypeScript", ".NET"],
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mb-12 max-w-2xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-rhenvox-text md:text-4xl">
          Work
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-rhenvox-muted md:text-lg">
          Selected products built by Rhenvox. This list is limited to work that can be shown publicly.
        </p>
      </div>

      <section className="rv-card mb-10 p-6 md:p-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-3">
              Nur Bilgi
            </Badge>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-rhenvox-text">Nur Bilgi</h2>
            <p className="mb-5 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
              A live web product at nurbilgi.com. The public site includes Islamic knowledge tools and an AI-assisted Q&A assistant. A React Native mobile application is connected to the same platform.
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              {[".NET", "Next.js", "TypeScript", "React Native"].map((tech) => (
                <Badge key={tech} variant="light">
                  {tech}
                </Badge>
              ))}
            </div>
            <Button variant="default" asChild>
              <a href="https://nurbilgi.com" target="_blank" rel="noopener noreferrer">
                Visit nurbilgi.com
              </a>
            </Button>
          </div>
          <div className="relative h-40 w-full overflow-hidden rounded-lg bg-rhenvox-surface-muted">
            <Image
              src="/images/nurbilgi.logo.png"
              alt="Nur Bilgi"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="rv-card overflow-hidden">
            <div className="relative h-40 w-full bg-rhenvox-surface-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-rhenvox-text">{project.title}</h3>
                <Badge variant="outline">
                  {project.category === "web" ? "Web" : "Mobile"}
                </Badge>
              </div>
              <p className="mb-4 max-w-prose text-sm leading-relaxed text-rhenvox-muted">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-rhenvox-accent hover:underline"
                >
                  Visit website <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="rv-card p-6 md:p-8">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-rhenvox-text">Get in touch</h2>
        <p className="mb-6 max-w-prose text-sm leading-relaxed text-rhenvox-muted md:text-base">
          If you have a web, mobile, or API project, you can reach Rhenvox through the contact page or by email.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:hello@rhenvox.com">hello@rhenvox.com</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
