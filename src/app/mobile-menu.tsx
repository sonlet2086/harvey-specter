"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  const bar1Ref = useRef<HTMLSpanElement>(null);
  const bar2Ref = useRef<HTMLSpanElement>(null);
  const bar3Ref = useRef<HTMLSpanElement>(null);

  function animateBurgerToX() {
    gsap.killTweensOf([bar1Ref.current, bar2Ref.current, bar3Ref.current]);
    gsap.to(bar1Ref.current, { y: 7, rotate: 45, duration: 0.4, ease: "power2.inOut" });
    gsap.to(bar2Ref.current, { scaleX: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(bar3Ref.current, { y: -7, rotate: -45, duration: 0.4, ease: "power2.inOut" });
  }

  function animateBurgerFromX() {
    gsap.killTweensOf([bar1Ref.current, bar2Ref.current, bar3Ref.current]);
    gsap.to(bar1Ref.current, { y: 0, rotate: 0, duration: 0.4, ease: "power2.inOut" });
    gsap.to(bar2Ref.current, { scaleX: 1, duration: 0.3, delay: 0.1, ease: "power2.out" });
    gsap.to(bar3Ref.current, { y: 0, rotate: 0, duration: 0.4, ease: "power2.inOut" });
  }

  const closeMenu = () => {
    if (closingRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    animateBurgerFromX();

    if (!overlayRef.current || prefersReducedMotion) {
      setOpen(false);
      return;
    }

    closingRef.current = true;

    gsap
      .timeline({
        onComplete: () => {
          closingRef.current = false;
          setOpen(false);
        },
      })
      .to(ctaRef.current, { autoAlpha: 0, y: 8, duration: 0.22, ease: "power2.in" })
      .to(
        linksRef.current,
        {
          yPercent: 110,
          duration: 0.32,
          stagger: { each: 0.05, from: "end" },
          ease: "power2.in",
        },
        "<"
      )
      .to(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)", duration: 0.52, ease: "power3.inOut" },
        "-=0.12"
      )
      .set(overlayRef.current, { autoAlpha: 0 });
  };

  useEffect(() => {
    if (!open || !overlayRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion) {
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          overlayRef.current!,
          { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.6 }
        )
        .fromTo(
          linksRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.75, stagger: 0.08, ease: "power4.out" },
          "-=0.38"
        )
        .fromTo(
          ctaRef.current,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.4 },
          "-=0.52"
        );
    }, overlayRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        className="lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => {
          if (!open) {
            animateBurgerToX();
            setOpen(true);
          }
        }}
      >
        <div className="flex h-4 w-6 flex-col justify-between">
          <span ref={bar1Ref} className="block h-[1.5px] w-full origin-center bg-[#111]" />
          <span ref={bar2Ref} className="block h-[1.5px] w-full origin-center bg-[#111]" />
          <span ref={bar3Ref} className="block h-[1.5px] w-full origin-center bg-[#111]" />
        </div>
      </button>

      {open && createPortal(
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a] px-6 pb-8 pt-7 lg:hidden"
        >
          <div className="flex shrink-0 items-center justify-between">
            <a
              href="#hero"
              onClick={closeMenu}
              className="text-base font-semibold capitalize tracking-[-0.04em] text-white"
            >
              H.Studio
            </a>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center">
            {navLinks.map((item, i) => (
              <div
                key={item}
                className="border-b border-white/[0.12] last:border-b-0"
              >
                <div className="overflow-hidden">
                  <a
                    href={`#${item.toLowerCase()}`}
                    ref={(el) => {
                      if (el) linksRef.current[i] = el;
                    }}
                    onClick={closeMenu}
                    className="block w-full py-3.5 text-center text-[36px] font-semibold capitalize leading-none tracking-[-0.04em] text-white sm:py-4 sm:text-[44px] md:py-5 md:text-[56px]"
                  >
                    {item}
                  </a>
                </div>
              </div>
            ))}
          </nav>

          <div ref={ctaRef} className="flex items-center justify-between pt-6">
            <p className="text-xs font-normal uppercase tracking-[0.05em] text-white/40">
              Ready to create?
            </p>
            <button
              onClick={closeMenu}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium tracking-[-0.04em] text-white"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
