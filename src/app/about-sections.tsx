"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type CSSProperties } from "react";

gsap.registerPlugin(ScrollTrigger);

const aboutPortraitImage = "/about-portrait.png";

const aboutDetailCopy =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

const fillStartStyle = { "--fill": "0%" } as CSSProperties;

export function AboutSections() {
  const introSectionRef = useRef<HTMLElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const detailSectionRef = useRef<HTMLElement>(null);
  const detailCopyFrameRef = useRef<HTMLDivElement>(null);
  const detailCopyRef = useRef<HTMLParagraphElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([introTextRef.current, detailCopyRef.current], {
        "--fill": "100%",
      });
      gsap.set(imageRevealRef.current, {
        autoAlpha: 1,
        clipPath: "inset(0 0 0 0)",
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(imageRevealRef.current, {
        autoAlpha: 0,
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.to(introTextRef.current, {
        "--fill": "100%",
        ease: "none",
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: "top 88%",
          end: "center 38%",
          scrub: 1,
        },
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: detailSectionRef.current,
            start: "top 88%",
            end: "center 42%",
            scrub: 1.2,
          },
        })
        .to(
          detailCopyRef.current,
          {
            "--fill": "100%",
            ease: "none",
          },
          0
        )
        .to(
          detailCopyFrameRef.current,
          {
            x: () => (window.innerWidth >= 1024 ? -72 : -12),
            ease: "none",
          },
          0
        )
        .to(
          imageRevealRef.current,
          {
            autoAlpha: 1,
            clipPath: "inset(0 0% 0 0)",
            ease: "none",
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={introSectionRef}
        id="about"
        className="bg-[#f7f7f7] px-4 py-12 text-black md:px-8 md:py-[120px]"
      >
        <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-6">
          <div className="flex w-full flex-col items-end gap-3">
            <p className="w-full text-right font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
              [ 8+ years in industry ]
            </p>
            <div className="h-px w-full bg-black/60" />
          </div>

          <div
            ref={introTextRef}
            className="about-fill-text flex w-full flex-col gap-2 uppercase"
            style={fillStartStyle}
          >
            <div className="flex w-full flex-col items-center justify-center gap-2 md:hidden">
              <div className="flex w-full flex-col items-center justify-center gap-3">
                <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                  001
                </span>
                <h2 className="font-sans text-[clamp(40px,10.5vw,48px)] font-light leading-[0.84] tracking-[-0.08em]">
                  A creative director <span aria-hidden="true">/</span>
                </h2>
              </div>

              <p className="font-sans text-[clamp(40px,10.5vw,48px)] font-light leading-[0.84] tracking-[-0.08em]">
                Photographer
              </p>

              <p className="font-sans text-[clamp(40px,10.5vw,48px)] font-light leading-[0.84] tracking-[-0.08em]">
                Born{" "}
                <span className="font-[family-name:var(--font-playfair)] italic normal-case">
                  &amp;
                </span>{" "}
                raised
              </p>

              <p className="font-sans text-[clamp(40px,10.5vw,48px)] font-light leading-[0.84] tracking-[-0.08em]">
                on the south side
              </p>

              <div className="flex w-full flex-col items-center justify-center gap-3 whitespace-nowrap">
                <p className="text-center font-sans text-[clamp(40px,10.5vw,48px)] font-light leading-[0.84] tracking-[-0.08em]">
                  of chicago.
                </p>
                <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                  [ creative freelancer ]
                </p>
              </div>
            </div>

            <div className="hidden w-full flex-col gap-2 md:flex">
              <div className="flex w-full items-start gap-3 whitespace-nowrap">
                <h2 className="font-sans text-[clamp(48px,6.667vw,96px)] font-light leading-[0.84] tracking-[-0.08em]">
                  A creative director&nbsp;&nbsp; <span aria-hidden="true">/</span>
                </h2>
                <span className="shrink-0 font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                  001
                </span>
              </div>

              <p className="pl-[15.55%] font-sans text-[clamp(48px,6.667vw,96px)] font-light leading-[0.84] tracking-[-0.08em] whitespace-nowrap">
                Photographer
              </p>

              <p className="pl-[44.33%] font-sans text-[clamp(48px,6.667vw,96px)] font-light leading-[0.84] tracking-[-0.08em] whitespace-nowrap">
                Born{" "}
                <span className="font-[family-name:var(--font-playfair)] italic normal-case">
                  &amp;
                </span>{" "}
                raised
              </p>

              <p className="font-sans text-[clamp(48px,6.667vw,96px)] font-light leading-[0.84] tracking-[-0.08em] whitespace-nowrap">
                on the south side
              </p>

              <div className="relative flex w-full flex-col pl-[44.04%]">
                <p className="min-w-full font-sans text-[clamp(48px,6.667vw,96px)] font-light leading-[0.84] tracking-[-0.08em] whitespace-nowrap">
                  of chicago.
                </p>
                <p className="mt-3 self-end font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] whitespace-nowrap">
                  [ creative freelancer ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={detailSectionRef}
        id="about-detail"
        className="overflow-hidden bg-[#f7f7f7] px-4 py-12 text-[#1f1f1f] xl:px-8 xl:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-6 xl:min-h-[614px] xl:flex-row xl:justify-between xl:gap-8">
          <p className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap xl:hidden">
            002
          </p>

          <p className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap xl:shrink-0">
            [ About ]
          </p>

          <div className="flex w-full flex-col items-start gap-8 xl:min-h-[614px] xl:w-[min(88vw,1228px)] xl:flex-row xl:items-end xl:justify-between xl:gap-8">
            <div
              ref={detailCopyFrameRef}
              className="flex w-full max-w-[960px] items-stretch justify-between xl:w-[min(52vw,760px)] xl:shrink"
            >
              <div className="flex w-6 shrink-0 flex-col justify-between">
                <span className="block size-4 border-l border-t border-[#1f1f1f]" />
                <span className="block size-4 border-b border-l border-[#1f1f1f]" />
              </div>

              <p
                ref={detailCopyRef}
                className="about-fill-text min-w-0 flex-1 py-3 text-[clamp(22px,3.4vw,36px)] font-normal leading-[1.12] tracking-[-0.045em] xl:text-[clamp(24px,2.08vw,30px)]"
                style={fillStartStyle}
              >
                {aboutDetailCopy}
              </p>

              <div className="flex w-6 shrink-0 flex-col items-end justify-between">
                <span className="block size-4 border-r border-t border-[#1f1f1f]" />
                <span className="block size-4 border-b border-r border-[#1f1f1f]" />
              </div>
            </div>

            <div className="flex w-full flex-col items-start xl:w-auto xl:shrink-0 xl:flex-row xl:gap-6">
              <p className="hidden font-mono text-sm uppercase leading-[1.1] whitespace-nowrap xl:block">
                002
              </p>

              <div className="about-portrait-frame relative aspect-[422/594] w-full max-w-[436px] overflow-hidden bg-black xl:h-[614px] xl:w-[436px] xl:max-w-none">
                <div
                  ref={imageRevealRef}
                  className="absolute inset-0 will-change-[clip-path,opacity] [contain:paint]"
                  style={{ clipPath: "inset(0 0 0 0)" }}
                >
                  <Image
                    src={aboutPortraitImage}
                    alt="Black and white close-up portrait of Harvey Specter"
                    fill
                    sizes="(min-width: 1280px) 436px, (min-width: 768px) 55vw, calc(100vw - 32px)"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
