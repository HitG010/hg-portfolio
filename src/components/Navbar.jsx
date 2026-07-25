import { FileUser, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import hglogo from "../assets/brand/hg-logo.svg";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { resumeUrl } from "../data/socials";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Writing" },
  { to: "/contact", label: "Contact Me" },
];

const linkClasses = ({ isActive }) =>
  `relative text-md rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    isActive
      ? "text-primary font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-accent"
      : "text-secondary hover:text-primary"
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // The menu used to stay open on top of the page you had just navigated
  // to. Adjusting during render rather than in an effect avoids a second
  // render pass, and unlike an onClick handler it also covers back/forward.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    };

    const onPointerDown = (event) => {
      if (menuRef.current?.contains(event.target)) return;
      if (buttonRef.current?.contains(event.target)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen]);

  // The old `from-bg to-transparent` gradient was not opaque enough: nav
  // labels visibly collided with the tech grid while scrolling. Past the
  // first scroll the bar gets a real blurred backdrop instead.
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // Deliberately no requestAnimationFrame wrapper. rAF is throttled in
    // background tabs, which left the bar stuck in its transparent state.
    // React bails out when the value is unchanged, so calling this on every
    // scroll event costs nothing — the state only flips twice.
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 z-20 w-full py-4 text-primary transition-colors duration-300 motion-reduce:transition-none ${
        isScrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* The link carries the accessible name, so the image itself is
            marked decorative to avoid announcing it twice. */}
        <Link
          to="/"
          aria-label="Hitesh Gupta — home"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <img src={hglogo} alt="" className="h-8 md:h-10 object-contain" />
        </Link>

        <ul className="gap-6 hidden md:flex">
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className={linkClasses}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bg bg-primary text-md font-semibold py-2 px-4 rounded-lg flex gap-2 items-center hover:bg-primary/80 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <FileUser aria-hidden="true" className="w-5 h-5" /> Resume
          </a>

          <div className="md:hidden">
            <button
              ref={buttonRef}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="w-6 h-6" />
              ) : (
                <Menu aria-hidden="true" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden absolute top-16 right-4 bg-bg/80 p-4 rounded-lg border border-border flex flex-col gap-4 backdrop-blur-sm"
          >
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={linkClasses}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
