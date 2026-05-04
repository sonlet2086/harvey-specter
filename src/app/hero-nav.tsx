"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { MobileMenu } from "./mobile-menu";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export function HeroNav() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.to(headerRef.current, {
      backgroundColor: scrolled
        ? "rgba(247, 247, 247, 0.82)"
        : "rgba(247, 247, 247, 0.58)",
      paddingTop: scrolled ? 12 : 24,
      paddingBottom: scrolled ? 12 : 24,
      boxShadow: scrolled
        ? "0 10px 32px rgba(0, 0, 0, 0.08)"
        : "0 0 0 rgba(0, 0, 0, 0)",
      borderColor: scrolled ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0)",
      duration: prefersReducedMotion ? 0 : 0.28,
      ease: "power2.out",
    });
  }, [scrolled]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-[#f7f7f7]/60 px-4 py-6 backdrop-blur-[10px] lg:px-8"
    >
      <nav className="flex w-full items-center justify-between">
        <a
          href="#hero"
          className="text-base font-semibold capitalize tracking-[-0.04em] text-black"
        >
          H.Studio
        </a>

        <div className="hidden items-center gap-14 text-base font-semibold capitalize tracking-[-0.04em] text-black lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              data-nav-link
              className="relative py-1 focus-visible:outline-none"
            >
              {item}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-black"
              />
            </a>
          ))}
        </div>

        <MobileMenu />

        <button className="btn-primary hidden items-center justify-center rounded-full px-4 py-3 text-sm font-medium tracking-[-0.04em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:flex">
          Let&apos;s talk
        </button>
      </nav>
    </header>
  );
}
