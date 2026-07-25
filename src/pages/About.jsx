import Container from "../components/Container";
import SkillSet from "../components/SkillProgress";
import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

const About = () => {
  return (
    <Container className="flex flex-col gap-8 pb-24 pt-28 md:pt-32">
      <h1 className="text-headline font-semibold">About Me</h1>
      <p className="text-lg sm:text-base md:text-lg">
        I’m a dedicated software engineer with strong foundations in Machine
        Learning, Competitive Programming, and Full-Stack development, focused
        on building intelligent and scalable systems. I thrive in high-impact
        environments where I can combine algorithmic thinking, model design, and
        system architecture to solve real-world problems.
      </p>

      <p className="text-lg sm:text-base md:text-lg">
        My approach is rooted in performance, precision, and user value—whether
        it’s developing advanced deepfake detection pipelines using Swin
        Transformer and EfficientNet, creating AI-driven chatbots, or optimizing
        backend infrastructure for scalable deployment. I’ve built end-to-end
        solutions across web, AI, and data domains, always aiming for both
        technical excellence and user-centric impact. With a research-backed
        mindset and hands-on project experience, I strive to engineer solutions
        that are not just functional—but transformative.
      </p>

      <p className="text-lg sm:text-base md:text-lg">
        Feel free to reach out to me for collaborations, freelance work, or just
        to chat about tech! I’d love to connect.
      </p>

      <SkillSet />

      {/* Was a second <h1> on the same page. */}
      <h2 className="mt-8 text-2xl font-semibold">Contact Details</h2>
      <SocialLinks ids={contactSocialIds} size="lg" className="gap-4" />
    </Container>
  );
};

export default About;
