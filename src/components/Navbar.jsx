import { FileUser, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import hglogo from "../assets/hgLogo.svg";
import ThemeToggle from "./ThemeToggle";
import { resumeUrl } from "../data/socials";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Me" },
];

const linkClasses = ({ isActive }) =>
  `text-md rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    isActive ? "text-primary font-medium" : "text-secondary hover:text-primary"
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

  return (
    <nav
      aria-label="Main"
      className="text-primary p-4 w-full fixed top-0 z-10 bg-gradient-to-b from-bg to-transparent"
    >
      <div className="px-4 container mx-auto flex justify-between items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;
