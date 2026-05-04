"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { HeroNav } from "./hero-nav";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "/harvey-background-highres.jpg";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgMobileRef = useRef<HTMLDivElement>(null);
  const bgDesktopRef = useRef<HTMLDivElement>(null);
  const harveyGroupRef = useRef<HTMLSpanElement>(null);
  const specterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const backgroundLayers = [
        bgMobileRef.current,
        bgDesktopRef.current,
      ].filter(Boolean);

      const getLeftExitDistance = (element: HTMLElement | null) => {
        if (!element) return 0;
        const rect = element.getBoundingClientRect();
        return -(rect.right + window.innerWidth * 0.08);
      };

      const getRightExitDistance = (element: HTMLElement | null) => {
        if (!element) return 0;
        const rect = element.getBoundingClientRect();
        return window.innerWidth - rect.left + window.innerWidth * 0.08;
      };

      const getBackgroundScale = () => {
        const width = window.innerWidth;
        const progress = Math.min(Math.max((width - 390) / (1440 - 390), 0), 1);

        return 1.12 + progress * 0.1;
      };

      gsap.set(backgroundLayers, { transformOrigin: "center center" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      tl.to(harveyGroupRef.current, {
        x: () => getLeftExitDistance(harveyGroupRef.current),
        ease: "none",
      }, 0);

      tl.to(specterRef.current, {
        x: () => getRightExitDistance(specterRef.current),
        ease: "none",
      }, 0);

      tl.to(backgroundLayers, {
        scale: getBackgroundScale,
        ease: "none",
      }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-svh overflow-hidden bg-[#c2ccd1] lg:h-[847px]"
    >
      {/* Mobile background */}
      <div
        ref={bgMobileRef}
        className="absolute inset-y-0 left-0 lg:hidden"
        style={{ right: "-39.47%" }}
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="140vw"
          className="object-cover"
        />
      </div>

      {/* Desktop background */}
      <div
        ref={bgDesktopRef}
        className="absolute -translate-y-1/2 aspect-[2291/1346] hidden lg:block"
        style={{ left: "-32.08%", right: "-37.49%", top: "calc(50% + 134.84px)" }}
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="170vw"
          className="object-cover object-top"
        />
      </div>

      {/* Gradient blur overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[349px] bg-[rgba(217,217,217,0.01)] backdrop-blur-[10px] lg:h-auto lg:top-[464px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 65%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 65%)",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-4 pb-6 lg:justify-start lg:gap-0 lg:px-8 lg:pb-0">
        <HeroNav />
        <div aria-hidden="true" className="h-[72px] w-full shrink-0" />

        <div className="mb-8 flex h-[341px] w-full shrink-0 flex-col items-center justify-between lg:absolute lg:left-8 lg:right-8 lg:top-[clamp(395px,calc(568px-12vw),445px)] lg:mb-0 lg:h-auto lg:w-auto lg:justify-start">
          <div className="flex w-full flex-col items-center lg:items-start lg:pb-[15px]">
            <h1 className="mb-0 flex w-full flex-col items-center text-center font-sans text-[96px] font-medium capitalize leading-[0.8] tracking-[-6.72px] text-white mix-blend-overlay lg:mb-[-15px] lg:flex-row lg:items-end lg:justify-center lg:text-left lg:text-[clamp(112px,calc(20.67vw-99.6px),198px)] lg:leading-[1.1] lg:tracking-[-0.07em]">
              <span
                ref={harveyGroupRef}
                className="block w-max text-left will-change-transform"
              >
                <span className="mb-1 block font-mono text-sm uppercase leading-[1.1] tracking-normal lg:mb-[-15px]">
                  [ Hello i&apos;m ]
                </span>
                <span className="block">Harvey</span>
              </span>
              <span ref={specterRef} className="block w-max will-change-transform lg:ml-[clamp(40px,6.67vw,96px)]">Specter</span>
            </h1>
          </div>

          <div className="flex w-full justify-center lg:mt-4 lg:justify-end">
            <div className="flex w-[293px] flex-col items-start gap-[17px] lg:w-[294px]">
              <p className="w-[294px] text-[#1f1f1f] text-sm font-bold italic uppercase tracking-[-0.04em] leading-[1.1]">
                H.Studio is a{" "}
                <span className="font-normal">full-service</span>
                {" "}creative studio creating beautiful digital experiences
                and products. We are an{" "}
                <span className="font-normal">award winning</span>
                {" "}desing and art group specializing in branding, web
                design and engineering.
              </p>
              <button className="btn-primary rounded-[24px] px-4 py-3 text-sm font-medium tracking-[-0.04em]">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
