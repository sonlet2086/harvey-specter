"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const closingRef = useRef(false);

  useEffect(() => {
    if (!open || !overlayRef.current) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          overlayRef.current,
          { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.42 }
        )
        .fromTo(
          headerRef.current,
          { autoAlpha: 0, y: -12 },
          { autoAlpha: 1, y: 0, duration: 0.28 },
          "-=0.18"
        )
        .fromTo(
          linksRef.current,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.055 },
          "-=0.12"
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.3 },
          "-=0.18"
        );
    }, overlayRef);

    return () => {
      context.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = () => {
    if (closingRef.current) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!overlayRef.current || prefersReducedMotion) {
      setOpen(false);
      return;
    }

    closingRef.current = true;
    gsap
      .timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          closingRef.current = false;
          setOpen(false);
        },
      })
      .to([ctaRef.current, ...linksRef.current].filter(Boolean), {
        autoAlpha: 0,
        y: 10,
        duration: 0.16,
        stagger: 0.025,
      })
      .to(
        headerRef.current,
        { autoAlpha: 0, y: -8, duration: 0.16 },
        "<"
      )
      .to(overlayRef.current, {
        autoAlpha: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 0.32,
      });
  };

  return (
    <>
      <button
        className="lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6H21M3 12H21M3 18H21" stroke="#111111" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex flex-col bg-black px-8 py-8 lg:hidden"
        >
          <div
            ref={headerRef}
            className="flex shrink-0 items-center justify-between"
          >
            <a
              href="#hero"
              onClick={closeMenu}
              className="text-base font-semibold capitalize tracking-[-0.04em] text-white"
            >
              H.Studio
            </a>
            <button onClick={closeMenu} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="mt-16 flex flex-1 flex-col gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                ref={(element) => {
                  if (element) {
                    linksRef.current[navLinks.indexOf(item)] = element;
                  }
                }}
                onClick={closeMenu}
                className="text-4xl font-semibold capitalize tracking-[-0.04em] text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            ref={ctaRef}
            className="self-start rounded-full border border-white px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
            onClick={closeMenu}
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
