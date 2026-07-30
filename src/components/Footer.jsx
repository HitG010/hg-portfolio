import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import hglogo from "../assets/brand/hg-logo.svg";
import Container from "./Container";

const Footer = () => {
  // No bottom padding: the clipped wordmark is meant to be the last thing on
  // the page, sitting flush on the bottom edge. Any padding under it reads as
  // the band floating rather than running off.
  return (
    <Container as="footer" className="flex flex-col items-center pt-12">
      {/* get in touch section */}
      <div className="group relative w-full py-4 text-primary md:py-8">
        <div className="flex flex-col gap-4">
          <p className="text-secondary">
            I’m currently looking for new opportunities, my inbox is always
            open. Got something to say?
          </p>
        </div>
        <div className="mt-4 flex flex-row justify-between items-center">
          <h2 className="text-xl md:text-4xl font-bold">Let’s Get in Touch</h2>
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
      {/* The wordmark is deliberately larger than the room it has, on both
          axes, and the clipping is the point rather than a bug to size away.

          Vertically: each word is capped well under its own font size and
          clips, so the glyphs are cut off part-way down and the name reads as
          a band bleeding off the base of the page. h-10/h-20 against
          60px/128px type are v1's ratios.

          Horizontally: under ~1100px the two words outgrow the row and the H
          and the A run off the edges. That should not cost the document 44px
          of sideways scroll, which is what plain overflow did, so the row is
          widened to full bleed — the negative margins cancel Container's
          padding — and clips its own overflow, putting the cut on the viewport
          edge. Widening does not move the words: they stay centred on the same
          axis either way, only the clip boundary changes.

          The cap sits on the words, not the row, because on mobile the
          colophon wraps onto its own line inside this same row and must not
          be clipped with them. */}
      <div className="-mx-4 flex w-[calc(100%+2rem)] flex-wrap items-center justify-center gap-6 overflow-hidden sm:-mx-6 sm:w-[calc(100%+3rem)] md:-mx-8 md:w-[calc(100%+4rem)] md:flex-nowrap md:gap-4">
        <p className="order-2 h-10 overflow-hidden text-6xl font-bold -tracking-[0.02em] md:order-1 md:h-20 md:text-9xl">
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
        <p className="order-3 h-10 overflow-hidden text-6xl font-bold -tracking-[0.02em] md:h-20 md:text-9xl">
          GUPTA
        </p>
      </div>
    </Container>
  );
};

export default Footer;
