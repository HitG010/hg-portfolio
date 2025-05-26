import { MapPinHouse, Linkedin, Github, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const Section = () => {
  return (
    <section className="mt-24 w-[90%] md:w-[60%] bg-darkBg border border-white/10 rounded-2xl content-fit">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl lg:text-3xl xl:4xl font-semibold">
              Hi, I'm Hitesh Gupta 👋
            </h1>
            <div className="mt-1 text-base md:text-lg flex gap-2 items-center text-textSecondary">
              <MapPinHouse />
              <p>Delhi, India</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <div className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-1">
              <Mail
                className="w-full h-full p-2.5 md:p-3 border border-white/10 rounded-lg cursor-pointer"
                onClick={() => {
                  window.open("mailto:guptahitesh201105@gmail.com");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-1">
              <Linkedin
                className="w-full h-full p-2.5 md:p-3 border border-white/10 rounded-lg cursor-pointer"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/hiteshgupta201105/");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-1">
              <Github
                className="w-full h-full p-2.5 md:p-3 border border-white/10 rounded-lg cursor-pointer"
                onClick={() => {
                  window.open("https://www.github.com/HitG010/");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-1">
              <SiLeetcode
                className="w-full h-full p-2.5 md:p-3 border border-white/10 rounded-lg cursor-pointer"
                onClick={() => {
                  window.open("https://leetcode.com/u/HiteshGupta20/");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
            </div>
            <div className="group relative overflow-hidden w-10 h-10 md:w-12 md:h-12 rounded-lg hover:opacity-1">
              <SiCodeforces
                className="w-full h-full p-2.5 md:p-3 border border-white/10 rounded-lg cursor-pointer"
                onClick={() => {
                  window.open("https://codeforces.com/profile/Hitesh10");
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-textSecondary opacity-30 blur-lg group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-base md:text-xl">
          I'm a passionate software engineer specializing in Machine Learning,
          Competitive Programming and Full-Stack Development focused on building
          intelligent, high-impact, and scalable solutions through
          research-driven innovation.{" "}
          <button
            className="font-light text-white/50"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            read more...
          </button>
        </p>
      </div>
    </section>
  );
};

export default Section;
