import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../components/Container";
import CopyEmail from "../components/CopyEmail";
import Reveal from "../components/Reveal";
import { email, socialLinks } from "../data/socials";

// Email leads because it is the channel that suits a real enquiry; the rest
// are ordered by how likely they are to get a fast reply.
const channelIds = ["linkedin", "telegram", "github", "x"];

const ContactMe = () => (
  <Container className="flex flex-col gap-16 pb-24 pt-28 md:pt-32">
    <header className="max-w-[60ch]">
      <Reveal as="h1" className="text-headline font-semibold">
        Get in touch
      </Reveal>
      <Reveal delay={0.08} as="p" className="mt-5 text-lg text-secondary">
        I’m currently looking for new opportunities and my inbox is always
        open. Whether it’s a role, a collaboration, or a question about
        something I’ve built — I’d love to hear from you.
      </Reveal>
    </header>

    {/* The primary action, deliberately given its own weight rather than
        being one icon among seven. */}
    <Reveal delay={0.12}>
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between md:p-8">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-secondary">
            Email
          </p>
          <p className="mt-1 truncate text-xl font-medium md:text-2xl">
            {email}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <CopyEmail value={email} />
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            Write to me
          </a>
        </div>
      </div>
    </Reveal>

    <section>
      <Reveal as="h2" className="text-2xl font-semibold">
        Elsewhere
      </Reveal>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {channelIds.map((id, index) => {
          const { name, handle, description, href, Icon } = socialLinks[id];
          return (
            <Reveal as="li" key={id} delay={index * 0.06} className="bg-bg">
              {/* No aria-label here on purpose: the visible name, handle and
                  description already make a good accessible name, and a label
                  would replace all three with something less informative. */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent motion-reduce:transition-none"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-secondary transition-colors group-hover:text-accent motion-reduce:transition-none"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-2">
                    <span className="font-medium">{name}</span>
                    <span className="truncate text-sm text-secondary">
                      {handle}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-sm text-secondary">
                    {description}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none"
                />
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  </Container>
);

export default ContactMe;
