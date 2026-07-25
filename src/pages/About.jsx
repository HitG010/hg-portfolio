import SkillSet from "../components/SkillProgress";
import SocialLinks from "../components/SocialLinks";
import { contactSocialIds } from "../data/socials";

const About = () => {
  return (
    <div className="px-4 container mx-auto flex flex-col gap-8 mt-24 w-full md:w-[80%] lg:w-[60%]">
      <h1 className="text-4xl font-semibold">About Me</h1>
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

      <h1 className="text-2xl font-semibold mt-8">Contact Details</h1>
      <SocialLinks ids={contactSocialIds} size="lg" className="gap-4" />
    </div>
  );
};

export default About;
