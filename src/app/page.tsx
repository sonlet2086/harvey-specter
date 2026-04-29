"use client";

import Image from "next/image";
import { useState } from "react";

const heroImage = "/harvey-background-highres.jpg";

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

      <section
        className="relative h-svh overflow-hidden bg-[#fafafa]"
      >
        <div className="absolute left-[-18%] right-[-21.47%] top-1/2 h-[847px] -translate-y-1/2 lg:hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="140vw"
            className="object-cover"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <div className="absolute left-[-26%] right-[-26%] top-[calc(50%+220px)] hidden aspect-[2291/1346] -translate-y-1/2 lg:block xl:left-[-34.79%] xl:right-[-34.79%] xl:top-[calc(50%+245px)]">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 170vw, (min-width: 1024px) 152vw, 140vw"
            className="object-cover"
            style={{ objectPosition: "55% center" }}
          />
        </div>

        {/* Blur overlay — fades from nothing at the top to full blur at the bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] lg:bottom-auto lg:top-[498px]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 65%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 65%)",
          }}
        />

        {/* Layout — relative, no z-index, keeps blend modes working against bg */}
        <div className="relative flex h-full flex-col justify-between px-4 pb-6 lg:justify-start lg:gap-[240px] lg:px-8 lg:pb-0">

          {/* Nav */}
          <nav className="shrink-0 flex items-center justify-between py-6">
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

          {/* Hero content */}
          <div className="flex h-[341px] shrink-0 flex-col justify-between lg:h-auto lg:w-full lg:items-center lg:justify-center lg:pb-0">

            {/* Name block */}
            <div className="flex w-full flex-col items-center lg:items-start lg:pb-[15px]">
              <p
                className="font-mono text-sm uppercase leading-[1.1] text-white mix-blend-overlay
                           text-center lg:mb-[-15px] lg:px-[18px] lg:text-left"
              >
                [ Hello i&apos;m ]
              </p>
              <h1
                className="w-full font-sans font-medium capitalize
                           text-center
                           bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.28)_26%,rgba(255,210,31,0.88)_46%,rgba(255,255,255,0.96)_64%,rgba(255,255,255,0.58)_100%)]
                           lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.36)_31%,rgba(255,209,25,0.9)_47%,rgba(255,255,255,0.98)_62%,rgba(255,255,255,0.68)_100%)]
                           bg-clip-text text-transparent
                           mix-blend-overlay
                           tracking-[-0.07em] lg:tracking-[-13.86px]
                           whitespace-normal lg:whitespace-pre-wrap
                           leading-[0.84] pb-[0.08em] lg:leading-[1.1] lg:mb-[-15px] lg:pb-0
                           text-[96px] lg:text-[clamp(198px,13.75vw,240px)]"
              >
                Harvey   Specter
              </h1>
            </div>

            {/* Description */}
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
              <h2 className="font-sans text-[96px] font-light leading-[0.84] tracking-[-7.68px]">
                A creative director&nbsp;&nbsp; <span aria-hidden="true">/</span>
              </h2>
              <span className="shrink-0 font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                001
              </span>
            </div>

            <p className="pl-[214px] font-sans text-[96px] font-light leading-[0.84] tracking-[-7.68px] whitespace-nowrap">
              Photographer
            </p>

            <p className="pl-[610px] font-sans text-[96px] font-light leading-[0.84] tracking-[-7.68px] whitespace-nowrap">
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] italic normal-case">
                &amp;
              </span>{" "}
              raised
            </p>

            <p className="font-sans text-[96px] font-light leading-[0.84] tracking-[-7.68px] whitespace-nowrap">
              on the south side
            </p>

            <div className="relative flex w-full flex-col pl-[606px]">
              <p className="min-w-full font-sans text-[96px] font-light leading-[0.84] tracking-[-7.68px] whitespace-nowrap">
                of chicago.
              </p>
              <p className="absolute left-[1079px] top-[26px] font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] whitespace-nowrap">
                [ creative freelancer ]
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
