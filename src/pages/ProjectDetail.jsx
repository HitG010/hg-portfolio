import { ArrowLeft, ArrowRight, Figma, Github, Globe } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import NotFound from "../components/NotFound";
import Reveal from "../components/Reveal";
import { projectsData } from "../data/projectsData.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

// Icons used to be picked by array position, so a project whose first link
// was a live site still got a GitHub icon, and a fourth link got undefined.
const linkKinds = [
  { test: /github\.com/i, label: "Source", Icon: Github },
  { test: /figma\.com/i, label: "Design", Icon: Figma },
];

const describeLink = (href) =>
  linkKinds.find(({ test }) => test.test(href)) ?? {
    label: "Live site",
    Icon: Globe,
  };

const ProjectDetail = () => {
  const { id } = useParams();
  const index = projectsData.findIndex(
    (entry) => String(entry.ProjectId) === String(id)
  );
  const project = projectsData[index];

  useDocumentTitle(project?.ProjectName);

  if (!project) {
    return (
      <NotFound
        title="Project not found"
        message="There is no project at this address. It may have been renamed or removed."
        actionTo="/projects"
        actionLabel="Back to projects"
      />
    );
  }

  // Wraps around, so the last project leads back to the first rather than
  // dead-ending the set.
  const next = projectsData[(index + 1) % projectsData.length];
  const gallery = project.ProjectImages ?? [];
  const video = project.ProjectVideo?.[0];

  return (
    <Container className="pb-24 pt-28 md:pt-32">
      <Reveal>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-surface hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> All projects
        </Link>
      </Reveal>

      {/* Lead with the work itself rather than with metadata. */}
      <Reveal delay={0.06} className="mt-6">
        <div className="aspect-[3/2] overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={project.thumbnailImg}
            alt={`${project.ProjectName} preview`}
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-4">
              {project.ProjectLogo && (
                <img
                  src={project.ProjectLogo}
                  alt=""
                  width="56"
                  height="56"
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
              )}
              <h1 className="text-headline font-semibold">
                {project.ProjectName}
              </h1>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p
              className="mt-4 max-w-[62ch] text-lg text-secondary"
              dangerouslySetInnerHTML={{ __html: project.ProjectTagline }}
            />
          </Reveal>

          {/* The description is authored as an HTML string, so prose styles
              give it consistent typography without touching the content. */}
          <Reveal delay={0.1}>
            <div
              className="prose prose-neutral mt-10 max-w-[68ch] dark:prose-invert prose-headings:font-semibold prose-a:text-accent"
              dangerouslySetInnerHTML={{ __html: project.ProjectDescription }}
            />
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          {project.ProjectLinks?.length > 0 ? (
            <Reveal>
              <h2 className="text-xs uppercase tracking-wider text-secondary">
                Links
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {project.ProjectLinks.map((link) => {
                  const { label, Icon } = describeLink(link);
                  return (
                    <li key={link}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                        <span className="flex-1">{label}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ) : (
            // Better than rendering an empty heading — DeCopyfy currently has
            // no verified link. See the TODO in projectsData.
            <Reveal>
              <p className="rounded-lg border border-dashed border-border px-3 py-2 text-sm text-secondary">
                Links coming soon.
              </p>
            </Reveal>
          )}

          <Reveal delay={0.08} className="mt-8">
            <h2 className="text-xs uppercase tracking-wider text-secondary">
              Built with
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.ProjectTechUsed.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-surface/50 px-2 py-1 text-xs text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>

      {video && (
        <Reveal className="mt-16">
          <h2 className="text-2xl font-semibold">Walkthrough</h2>
          <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
            <iframe
              src={video}
              title={`${project.ProjectName} demo video`}
              loading="lazy"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </Reveal>
      )}

      {gallery.length > 0 && (
        <section className="mt-16">
          <Reveal as="h2" className="text-2xl font-semibold">
            Screens
          </Reveal>
          {/* A grid rather than a full-width stack: the old layout made four
              screenshots into four screens of scrolling. */}
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {gallery.map((image, i) => (
              <Reveal
                as="li"
                key={image}
                delay={(i % 2) * 0.06}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                <img
                  src={image}
                  alt={`${project.ProjectName} screenshot ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      <Reveal className="mt-20 border-t border-border pt-8">
        <Link
          to={`/projects/${next.ProjectId}`}
          className="group flex items-center justify-between gap-4"
        >
          <span>
            <span className="block text-xs uppercase tracking-wider text-secondary">
              Next project
            </span>
            <span className="mt-1 block text-2xl font-semibold transition-colors group-hover:text-accent motion-reduce:transition-none">
              {next.ProjectName}
            </span>
          </span>
          <ArrowRight
            aria-hidden="true"
            className="h-6 w-6 shrink-0 text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent motion-reduce:transition-none"
          />
        </Link>
      </Reveal>
    </Container>
  );
};

export default ProjectDetail;
