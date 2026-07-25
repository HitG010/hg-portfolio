import { MapPinHouse } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { heroSocialIds } from "../data/socials";

const Section = () => {
  return (
    <section>
      <Container>
        {/* Translucent so the site-wide network reads through the card
            instead of being boxed out by it. */}
        <div className="rounded-2xl border border-border bg-bg/60 backdrop-blur-md">
          <div className="px-6 py-8 md:px-8">
          <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
            <div>
              <h1 className="text-headline font-semibold">
                Hi, I’m Hitesh Gupta 👋
              </h1>
              <div className="mt-1 flex items-center gap-2 text-base text-secondary md:text-lg">
                <MapPinHouse aria-hidden="true" className="h-5 w-5" />
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
            I’m a passionate software engineer specializing in Machine Learning,
            Competitive Programming and Full-Stack Development focused on
            building intelligent, high-impact, and scalable solutions through
            research-driven innovation.{" "}
            <Link
              to="/about"
              className="font-light text-secondary underline-offset-2 transition-colors hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              read more…
            </Link>
          </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section;
