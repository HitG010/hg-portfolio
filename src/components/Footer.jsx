import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import hglogo from "../assets/hgLogo.svg";

const Footer = () => {
  return (
    <footer className="mt-12 flex flex-col items-center px-4 md:px-8">
      {/* get in touch section */}
      <div className="relative group bg-bg text-primary mt-4 w-full md:w-[70%] p-4 md:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-secondary">
            I'm currently looking for new opportunities, my inbox is always
            open. Got something to say?
          </p>
        </div>
        <div className="mt-4 flex flex-row justify-between items-center">
          <h2 className="text-xl md:text-4xl font-bold">Let's Get in Touch</h2>
          <Link
            to="/contact"
            className="relative group flex gap-2 text-lg text-primary items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Say Hi 👋 <ArrowUpRight aria-hidden="true" />
            <span
              aria-hidden="true"
              className="absolute inline-block h-[2px] left-0 bottom-0 w-0 bg-primary transition-all duration-300 group-hover:w-full motion-reduce:transition-none"
            ></span>
          </Link>
        </div>
        <span className="absolute inline-block h-[2px] left-0 bottom-0 w-full bg-secondary/20 transition-all duration-300"></span>
      </div>
      <div className="flex justify-center items-center mt-6">
        <img
          src={hglogo}
          alt=""
          width="80"
          height="80"
          className="h-20 w-20 object-contain"
        />
      </div>
      {/* Mobile stacks the colophon above the wordmark; desktop threads it
          between the two words. flex-wrap plus order does both from one copy
          of the markup — the previous version branched on window.innerWidth
          at render time, so it never responded to a resize or rotate. */}
      <div className="flex w-full flex-wrap items-center justify-center gap-6 md:flex-nowrap md:gap-4">
        <p className="order-2 text-6xl font-bold -tracking-[0.02em] md:order-1 md:text-9xl">
          HITESH
        </p>
        <div className="order-1 mb-2 flex w-full flex-col items-center text-xs font-light tracking-[0em] text-secondary md:order-2 md:mb-4 md:mt-8 md:w-auto">
          <p className="text-nowrap">
            Built with ♡ | © {new Date().getFullYear()} Hitesh Gupta
          </p>
          <p className="text-nowrap">
            Find more of my projects on{" "}
            <a
              href="https://www.github.com/HitG010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Github
            </a>
          </p>
        </div>
        <p className="order-3 text-6xl font-bold -tracking-[0.02em] md:text-9xl">
          GUPTA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
