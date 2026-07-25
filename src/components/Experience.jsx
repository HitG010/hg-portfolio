import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Reveal from "./Reveal";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "../lib/motion";

const experiences = [
  {
    title: "ML Research Intern",
    company: "Delhi Technological University (Under Prof. Rahul Thakur)",
    duration: "Aug. 2024 - Dec. 2024",
    description: `<p className="mt-2">I developed a hybrid deep learning model combining Swin Transformer and EfficientNet-B0, achieving 98.32% accuracy on a dataset of 800+ videos and improving deepfake detection performance by 9.2%. Additionally, I engineered a Swin Transformer + FPN-based segmentation pipeline for image forgery detection, reducing false positives by 15% and significantly enhancing feature extraction capabilities. By optimizing training strategies through advanced data augmentation and fine-tuning, I achieved a 12% increase in model generalization on real vs. deepfake datasets.</p>`,
    website:
      "https://scholar.google.com/citations?user=e51fOvMAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Racloop Technologies, Gurgaon",
    duration: "May. 2024 - Jul. 2024",
    description: `<p className="mt-2">I designed and built custom chatbots from scratch using transformer-based architectures with up to 124 million parameters, tailored to meet specific company use cases. In addition, I contributed to multiple web development projects using Next.js, delivering over 4 responsive and high-performance web applications as part of a collaborative 5-member team. I also performed in-depth data analysis on more than 50,000 data points, generating actionable insights that led to a 15% improvement in workflow optimization.</p>`,
    website: "https://whilter.ai/",
  },
  {
    title: "Web Development & AI/ML Intern",
    company: "Delhi Police",
    duration: "Mar 2024 - May 2024",
    description: `<p className="mt-2">I created a mobile application, DelhiCOP, to streamline crime tracking and daily reporting, significantly enhancing operational efficiency, also built a crime detection model leveraging advanced computer vision techniques such as LRCN, Conv-LSTM, and Vision Transformer, achieving 92% accuracy. Additionally, I conducted an in-depth analysis of over 10,000 crime records, uncovering patterns that led to a 20% improvement in resource allocation. I collaborated with a 15-member team, contributing to UI/UX design and implementing four intuitive front-end interfaces.</p>`,
    website: "https://www.delhicop.in",
  },
];

const ExperienceSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Container as="section">
      <Reveal as="h2" className="mb-10 text-4xl font-bold">
        Experience
      </Reveal>

      <ol className="relative">
        {/* One continuous hairline, drawn from the top on scroll. Replaces
            the old 6px grey bar that was re-drawn per entry. */}
        <motion.span
          aria-hidden="true"
          className="absolute bottom-4 left-[7px] top-3 w-px origin-top bg-border"
          initial={prefersReducedMotion ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT_ONCE}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.9,
            ease: EASE_OUT_EXPO,
          }}
        />

        {experiences.map((experience, index) => (
          <Reveal
            as="li"
            key={experience.company}
            delay={index * 0.08}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold sm:text-2xl">
                {experience.title}
              </h3>
              <span className="text-sm text-secondary">
                {experience.duration}
              </span>
            </div>
            <a
              className="group relative inline-block text-lg text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 inline-block h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
              ></span>
            </a>
            <div
              dangerouslySetInnerHTML={{ __html: experience.description }}
              className="mt-4 text-sm text-secondary sm:text-base"
            ></div>
          </Reveal>
        ))}
      </ol>
    </Container>
  );
};

export default ExperienceSection;
