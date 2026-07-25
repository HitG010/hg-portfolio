import { MapPinHouse } from "lucide-react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

// Drafted from the roles in src/data/experience.js — every claim here maps to
// something on the timeline. Worth rewriting in your own voice.
const paragraphs = [
  "I’m a software engineer working across machine learning, systems and full-stack development. I like problems where the model is only half the job — where getting something to actually run, reliably and fast, is the other half.",
  "Most recently I was at Microsoft in Noida, where I built an AI-powered test generation framework that used HAR analysis to author 36 test cases and surfaced a production bug in their cloud security proxy. Making generated tests trustworthy enough to sit in a CI/CD pipeline meant building validation and verification workflows around them, so the output was deterministic rather than merely plausible.",
  "Before that, at VVDN Technologies, I trained a real-time network intrusion detection system that reached over 99% accuracy with 40% fewer false positives than rule-based firewalls — and then took it to hardware, deploying on AMD’s VEK280 with Vitis AI for a 3× speedup over CPU inference. My research at DTU ran along the same line: a hybrid Swin Transformer and EfficientNet-B0 architecture for deepfake detection that hit 98.32% accuracy, which grew into DeepTrace.",
  "Outside of that I compete in competitive programming, and most of what I build ends up here as a project. If you’re working on something in ML, security or systems, I’d like to hear about it.",
];

// TODO: confirm — the Microsoft internship ran to July 2026, so this may want
// to read "full-time roles" rather than internships.
const facts = [
  { label: "Based in", value: "Delhi, India" },
  { label: "Focus", value: "ML · Systems · Full-Stack" },
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
