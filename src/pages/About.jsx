import React from "react";
import SkillSet from "../components/SkillProgress";
import { MapPinHouse, Linkedin, Github, Mail } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
// import { SiCodeforces } from "react-icons/si";

const About = () => {
  return (
    <div className="px-4 container mx-auto flex flex-col gap-8 mt-24 w-full md:w-[80%] lg:w-[60%]">
      <h1 className="text-4xl font-semibold">About Me</h1>
      <p className="text-lg sm:text-base md:text-lg">
        I'm a dedicated software engineer with strong foundations in Machine
        Learning, Competitive Programming, and Full-Stack development, focused
        on building intelligent and scalable systems. I thrive in high-impact
        environments where I can combine algorithmic thinking, model design, and
        system architecture to solve real-world problems.
      </p>

      <p className="text-lg sm:text-base md:text-lg">
        My approach is rooted in performance, precision, and user value—whether
        it's developing advanced deepfake detection pipelines using Swin
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
      <div className="flex gap-4 flex-wrap">
        <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
          <Mail
            className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
            onClick={() => {
              window.open("mailto:guptahitesh201105@gmail.com");
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
        </div>
        <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
          <Linkedin
            className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/hiteshgupta201105/");
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
        </div>
        <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
          <Github
            className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
            onClick={() => {
              window.open("https://www.github.com/HitG010");
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
        </div>
        <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
          <RiTwitterXLine
            className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
            onClick={() => {
              window.open("https://x.com/HiteshGupta2005");
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
        </div>

        <div className="group relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-lg hover:opacity-1 mb-4">
          <FaTelegram
            className="w-full h-full p-2.5 md:p-4 border border-white/10 rounded-lg cursor-pointer"
            onClick={() => {
              window.open("https://t.me/HiteshG20");
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
