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
      className={`fixed inset-x-0 top-0 z-40 border-b px-4 backdrop-blur-[10px] transition-[background-color,border-color,box-shadow,padding] duration-300 ease-out lg:px-8 ${
        scrolled
          ? "border-black/10 bg-[#f7f7f7]/90 py-3 shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          : "border-transparent bg-[#f7f7f7]/60 py-6 shadow-none"
      }`}
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
              className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </div>

        <MobileMenu />

        <button className="hidden cursor-pointer items-center justify-center rounded-full border border-black bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-colors duration-300 ease-out hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:flex">
          Let&apos;s talk
        </button>
      </nav>
    </header>
  );
}
