import { MapPinHouse } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

// TODO (content): still the 2024 bio — no mention of anything since.
const paragraphs = [
  "I’m a dedicated software engineer with strong foundations in Machine Learning, Competitive Programming, and Full-Stack development, focused on building intelligent and scalable systems. I thrive in high-impact environments where I can combine algorithmic thinking, model design, and system architecture to solve real-world problems.",
  "My approach is rooted in performance, precision, and user value — whether it’s developing advanced deepfake detection pipelines using Swin Transformer and EfficientNet, creating AI-driven chatbots, or optimizing backend infrastructure for scalable deployment. I’ve built end-to-end solutions across web, AI, and data domains, always aiming for both technical excellence and user-centric impact.",
  "With a research-backed mindset and hands-on project experience, I strive to engineer solutions that are not just functional — but transformative.",
];

const facts = [
  { label: "Based in", value: "Delhi, India" },
  { label: "Focus", value: "ML · Competitive Programming · Full-Stack" },
  { label: "Open to", value: "Internships & collaborations" },
];

const About = () => (
  <Container className="flex flex-col gap-20 pb-24 pt-28 md:gap-28 md:pt-32">
    {/* Sticky heading rail beside the prose, so the page has a spine rather
        than being three stacked paragraphs. */}
    <section className="grid gap-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-16">
      <div className="md:sticky md:top-28 md:self-start">
        <Reveal as="h1" className="text-headline font-semibold">
          About Me
        </Reveal>
        <Reveal
          delay={0.08}
          className="mt-6 flex items-center gap-2 text-secondary"
        >
          <MapPinHouse aria-hidden="true" className="h-4 w-4" />
          <span className="text-sm">Delhi, India</span>
        </Reveal>
      </div>

      <div>
        {/* Capped at 68 characters. The container is 1100px wide, which put
            body copy at ~115 characters per line — far past readable. */}
        <div className="max-w-[68ch]">
          {paragraphs.map((text, index) => (
            <Reveal
              as="p"
              key={index}
              delay={index * 0.08}
              className={`text-lg leading-relaxed ${
                index === 0 ? "text-primary" : "mt-6 text-secondary"
              }`}
            >
              {text}
            </Reveal>
          ))}
        </div>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {facts.map((fact, index) => (
            <Reveal
              key={fact.label}
              delay={0.1 + index * 0.06}
              className="bg-bg p-4"
            >
              <dt className="text-xs uppercase tracking-wider text-secondary">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-primary">{fact.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>

    <Skills />

    <section>
      <Reveal as="h2" className="text-2xl font-semibold">
        Get in touch
      </Reveal>
      <Reveal delay={0.06} className="mt-3 max-w-[60ch] text-secondary">
        Reach out for collaborations, freelance work, or just to chat about
        tech — I’d love to connect.
      </Reveal>
      <Reveal delay={0.12}>
        <SocialLinks ids={contactSocialIds} size="lg" className="mt-6 gap-4" />
      </Reveal>
    </section>
  </Container>
);

export default About;
