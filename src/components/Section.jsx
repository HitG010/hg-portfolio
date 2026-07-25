import { MapPinHouse } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { heroSocialIds } from "../data/socials";

const Section = () => {
  return (
    <section className="mt-24 w-[90%] md:w-[60%] bg-bg border border-border rounded-2xl">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Hi, I'm Hitesh Gupta 👋
            </h1>
            <div className="mt-1 text-base md:text-lg flex gap-2 items-center text-secondary">
              <MapPinHouse />
              <p>Delhi, India</p>
            </div>
          </div>
          <SocialLinks
            ids={heroSocialIds}
            size="sm"
            className="mt-4 md:mt-0"
          />
        </div>
        <p className="mt-4 text-base md:text-xl">
          I'm a passionate software engineer specializing in Machine Learning,
          Competitive Programming and Full-Stack Development focused on building
          intelligent, high-impact, and scalable solutions through
          research-driven innovation.{" "}
          <Link
            to="/about"
            className="font-light text-secondary underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            read more...
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Section;
