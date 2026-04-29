"use client";

import Image from "next/image";
import { useState } from "react";

const heroDesktopImage = "/harvey-background-highres.jpg";
const heroMobileImage = "/harvey-background-highres.jpg";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* Mobile full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col px-8 py-8 md:hidden">
          <div className="flex items-center justify-between shrink-0">
            <span className="text-white text-base font-semibold capitalize tracking-[-0.04em]">
              H.Studio
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
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
          <nav className="flex flex-col gap-8 mt-16 flex-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-semibold capitalize tracking-[-0.04em]"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            className="border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full self-start"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk
          </button>
        </div>
      )}

      <section className="relative h-svh overflow-hidden bg-[#c2ccd1] lg:h-[847px]">
        <div className="absolute left-0 right-[-39.47%] top-[calc(50%-14px)] h-[847px] -translate-y-1/2 lg:hidden">
          <Image
            src={heroMobileImage}
            alt=""
            fill
            priority
            sizes="524px"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute left-1/2 top-[-205px] hidden h-[1434.67px] w-[2441.92px] -translate-x-1/2 overflow-hidden lg:block">
          <div className="absolute left-[-8.81%] top-[-7.1%] h-[144.63%] w-[127.45%]">
            <Image
              src={heroDesktopImage}
              alt=""
              fill
              priority
              sizes="3112px"
              className="object-fill"
            />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] bg-[rgba(217,217,217,0.01)] backdrop-blur-[10px] lg:bottom-auto lg:top-[498px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 65%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 65%)",
          }}
        />

        <div className="relative flex h-full flex-col items-center justify-between px-4 pb-6 lg:justify-start lg:gap-[240px] lg:px-8 lg:pb-0">

          <nav className="flex w-full shrink-0 items-center justify-between py-6">
            <span className="text-base font-semibold capitalize tracking-[-0.04em] text-black">
              H.Studio
            </span>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-14 text-base font-semibold capitalize tracking-[-0.04em] text-black">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="#111111"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* Desktop CTA */}
            <button className="hidden lg:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full cursor-pointer">
              Let&apos;s talk
            </button>
          </nav>

          <div className="mb-8 flex h-[341px] w-full shrink-0 flex-col items-center justify-between lg:mb-0 lg:h-auto lg:justify-center">

            <div className="flex w-full flex-col items-center lg:items-start lg:pb-[15px]">
              <p
                className="w-full px-[18px] text-center font-mono text-sm uppercase leading-[1.1] text-white mix-blend-overlay lg:mb-[-15px] lg:text-left"
              >
                [ Hello i&apos;m ]
              </p>
              <h1
                className="mb-0 w-full whitespace-pre-wrap text-center font-sans text-[96px] font-medium capitalize leading-[0.8] tracking-[-6.72px] text-white mix-blend-overlay lg:mb-[-15px] lg:text-left lg:text-[clamp(164px,13.75vw,198px)] lg:leading-[1.1] lg:tracking-[-13.86px]"
              >
                Harvey   Specter
              </h1>
            </div>

            <div className="flex w-full justify-center lg:justify-end lg:mt-0">
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
                <button className="rounded-[24px] bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white cursor-pointer">
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section
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

          <div className="flex w-full flex-col items-center justify-center gap-2 uppercase md:hidden">
            <div className="flex w-full flex-col items-center justify-center gap-3 whitespace-nowrap">
              <span className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                001
              </span>
              <h2 className="font-sans text-[32px] font-light leading-[0.84] tracking-[-2.56px]">
                A creative director <span aria-hidden="true">/</span>
              </h2>
            </div>

            <p className="font-sans text-[32px] font-light leading-[0.84] tracking-[-2.56px]">
              Photographer
            </p>

            <p className="font-sans text-[32px] font-light leading-[0.84] tracking-[-2.56px]">
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] italic normal-case">
                &amp;
              </span>{" "}
              raised
            </p>

            <p className="font-sans text-[32px] font-light leading-[0.84] tracking-[-2.56px]">
              on the south side
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-3 whitespace-nowrap">
              <p className="text-center font-sans text-[32px] font-light leading-[0.84] tracking-[-2.56px]">
                of chicago.
              </p>
              <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                [ creative freelancer ]
              </p>
            </div>
          </div>

          <div className="hidden w-full flex-col gap-2 uppercase md:flex">
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
      </section>
    </main>
  );
}
