"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const selector = [
  "[data-reveal]",
  ".ds-process li",
  ".ds-article-card",
  ".ds-info-card",
  ".ds-capability-list > a",
  ".ds-equipment-list > a",
  ".ds-icon-card",
].join(",");

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    document.documentElement.classList.add("ds-motion-ready");

    elements.forEach((element) => {
      element.classList.add("ds-reveal");
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((sibling) => sibling.matches(selector))
        : [];
      const order = Math.max(0, siblings.indexOf(element));
      element.style.setProperty("--reveal-delay", `${Math.min(order * 50, 180)}ms`);
    });

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    // Trigger just as an element crosses into the viewport, so the fade/slide-in
    // is actually visible as you scroll rather than finishing off-screen (which
    // just looks like content abruptly appearing) or firing late (a blank gap).
    // The class is removed once the element scrolls back out, so the reveal
    // replays every time it re-enters — not just on first scroll-through.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
