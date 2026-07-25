import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Copying the address is the thing most people actually want from a contact
 * page, and it needs no backend — which matters here, since there is no form.
 *
 * Two paths on purpose: navigator.clipboard is the modern one but needs a
 * secure *and focused* document, so it genuinely fails in real situations.
 * The execCommand path still works in most of those, and only if both fail
 * does the button admit it rather than showing a false success.
 */
const CopyEmail = ({ value }) => {
  const [state, setState] = useState("idle");
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const announce = (next) => {
    setState(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2000);
  };

  const legacyCopy = () => {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(field);
    return ok;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      announce("copied");
      return;
    } catch {
      // Blocked or unfocused document — try the older route below.
    }
    announce(legacyCopy() ? "copied" : "failed");
  };

  const message = {
    idle: "Copy address",
    copied: "Copied",
    failed: "Couldn’t copy",
  }[state];

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-secondary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:transition-none"
    >
      {state === "copied" ? (
        <Check aria-hidden="true" className="h-4 w-4 text-accent" />
      ) : (
        <Copy aria-hidden="true" className="h-4 w-4" />
      )}
      <span>{message}</span>
      {/* Announced without moving anything visually. */}
      <span aria-live="polite" className="sr-only">
        {state === "copied"
          ? "Email address copied to clipboard"
          : state === "failed"
            ? "Could not copy — the address is selectable above"
            : ""}
      </span>
    </button>
  );
};

export default CopyEmail;
