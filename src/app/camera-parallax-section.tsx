"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const cameraSectionImage = "/camera-section.png";

export function CameraParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageLayer = imageLayerRef.current;

    if (!section || !imageLayer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(imageLayer, { filter: "blur(0px)", scale: 1, yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(imageLayer, {
        filter: "blur(18px)",
        scale: 1.08,
        yPercent: 5,
        transformOrigin: "center center",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        })
        .to(
          imageLayer,
          {
            filter: "blur(0px)",
            scale: 1.035,
            ease: "none",
            duration: 0.5,
          },
          0
        )
        .to(
          imageLayer,
          {
            yPercent: -5,
            scale: 1.02,
            ease: "none",
            duration: 1,
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="camera"
      className="relative h-[70vh] max-h-[565px] overflow-hidden bg-[#111] lg:h-svh lg:max-h-none"
    >
      <div ref={imageLayerRef} className="absolute inset-0 will-change-transform">
        <Image
          src={cameraSectionImage}
          alt="Photographer looking through a camera outdoors"
          fill
          sizes="100vw"
          className="object-cover object-[32%_50%] lg:object-center"
        />
      </div>
    </section>
  );
}
