"use client";

import Image from "next/image";
import { useState } from "react";

const heroDesktopImage = "/harvey-background-highres.jpg";
const heroMobileImage = "/harvey-background-highres.jpg";
const aboutPortraitImage = "/about-portrait.png";
const cameraSectionImage = "/camera-section.png";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

const newsItems = [
  {
    image: "/news-maker-space.png",
    alt: "Crowd walking through an exhibition hall with Maker Space signage",
  },
  {
    image: "/news-eames-book.png",
    alt: "Eames design book on a wooden table beside patterned leaves",
  },
  {
    image: "/news-bookshelf.png",
    alt: "Colorful books lined up on a shelf",
  },
];

const newsDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const serviceDescriptionDesktop =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

const serviceDescriptionMobile =
  "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.";

const services = [
  {
    number: "1",
    title: "Brand Discovery",
    image: "/service-brand.png",
    alt: "Printed brand cards and packaging held in someone's hands",
  },
  {
    number: "2",
    title: "Web design & Dev",
    image: "/service-web.png",
    alt: "Tablet showing a wireframe sketch beside a mouse",
  },
  {
    number: "3",
    title: "Marketing",
    image: "/service-marketing.png",
    alt: "Analytics dashboard displayed on a bright screen",
  },
  {
    number: "4",
    title: "Photography",
    image: "/service-photography.png",
    alt: "White skincare tube on green leaves",
    imageClassName: "object-[center_84%]",
  },
];

const portfolioProjects = [
  {
    title: "Surfers paradise",
    image: "/project-surfers.png",
    alt: "Yellow surfboard standing in sand at a beach",
    imageHeightClassName: "h-[390px] md:h-[744px]",
    imageClassName: "object-left",
  },
  {
    title: "Cyberpunk caffe",
    image: "/project-cyberpunk.png",
    alt: "Portrait lit in red and blue with neon glasses",
    imageHeightClassName: "h-[390px] md:h-[699px]",
  },
  {
    title: "Agency 976",
    image: "/project-agency.png",
    alt: "Dark portrait with bright green neon glasses",
    imageHeightClassName: "h-[390px] md:h-[699px]",
  },
  {
    title: "Minimal Playground",
    image: "/project-minimal.png",
    alt: "Modern white building facade with balconies",
    imageHeightClassName: "h-[390px] md:h-[744px]",
  },
];

const aboutDetailCopy =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

const testimonials = {
  marko: {
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    logo: "/testimonial-logo-marko.svg",
    logoWidth: 142.749,
    logoHeight: 18.97,
  },
  lukas: {
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    logo: "/testimonial-logo-lukas.svg",
    logoWidth: 137.733,
    logoHeight: 19.263,
  },
  sarah: {
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don’t just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    logo: "/testimonial-logo-sarah.svg",
    logoWidth: 108.537,
    logoHeight: 30.748,
  },
  sofia: {
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    logo: "/testimonial-logo-sofia.svg",
    logoWidth: 81.1,
    logoHeight: 36.174,
  },
};

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="block"
    >
      <path
        d="M11 21L21 11M14 11H21V18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function ReadMoreArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="block"
    >
      <path
        d="M6.25 11.75L11.75 6.25M7.5 6.25H11.75V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      <span className="absolute left-0 top-0 size-4 border-l border-t border-[#1f1f1f]" />
      <span className="absolute bottom-0 left-0 size-4 border-b border-l border-[#1f1f1f]" />
      <span className="absolute right-0 top-0 size-4 border-r border-t border-[#1f1f1f]" />
      <span className="absolute bottom-0 right-0 size-4 border-b border-r border-[#1f1f1f]" />
    </div>
  );
}

function PortfolioCard({
  project,
}: {
  project: (typeof portfolioProjects)[number];
}) {
  return (
    <article className="flex w-full flex-col items-start gap-[10px]">
      <div
        className={`relative w-full overflow-hidden ${project.imageHeightClassName}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1280px) 676px, (min-width: 768px) 676px, calc(100vw - 32px)"
          className={`object-cover ${project.imageClassName ?? "object-center"}`}
        />

        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
          {["Social Media", "Photography"].map((tag) => (
            <span
              key={tag}
              className="rounded-[24px] bg-white/30 px-2 py-1 text-sm font-medium leading-[normal] tracking-[-0.04em] text-[#111] backdrop-blur-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex h-8 w-full items-center justify-between xl:h-10">
        <h3 className="whitespace-nowrap font-sans text-2xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-black xl:text-4xl">
          {project.title}
        </h3>
        <button
          className="flex size-8 shrink-0 items-center justify-center text-black"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRightIcon />
        </button>
      </div>
    </article>
  );
}

function PortfolioCta({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex w-full items-center justify-center gap-3 py-0 xl:w-[465px] ${className}`}
    >
      <CornerFrame />
      <div className="w-6 shrink-0 self-stretch" />
      <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-[10px] py-3">
        <p className="w-full text-sm font-normal italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button className="rounded-[24px] bg-black px-4 py-3 text-sm font-medium leading-[normal] tracking-[-0.04em] text-white">
          Let&apos;s talk
        </button>
      </div>
      <div className="w-6 shrink-0 self-stretch" />
    </div>
  );
}

function TestimonialCard({
  testimonial,
  className = "",
  logoClassName = "",
}: {
  testimonial: (typeof testimonials)[keyof typeof testimonials];
  className?: string;
  logoClassName?: string;
}) {
  return (
    <article
      className={`flex flex-col items-start gap-4 rounded bg-[#f1f1f1] p-6 text-[#1f1f1f] ring-1 ring-[#ddd] ${className}`}
    >
      <span
        aria-hidden="true"
        style={{
          width: testimonial.logoWidth,
          height: testimonial.logoHeight,
          backgroundImage: `url(${testimonial.logo})`,
        }}
        className={`block shrink-0 bg-[length:100%_100%] bg-no-repeat ${logoClassName}`}
      />
      <p className="w-full text-[18px] font-normal leading-[1.3] tracking-[-0.04em]">
        {testimonial.quote}
      </p>
      <p className="whitespace-nowrap text-base font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
        {testimonial.name}
      </p>
    </article>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative h-[527.259px] overflow-hidden bg-[#f7f7f7] px-4 py-16 text-black lg:h-[987px] lg:px-8 lg:py-[120px]">
      <div className="relative mx-auto h-full w-full max-w-[1376px] lg:static">
        <h2 className="flex w-full justify-center text-center font-sans text-[64px] font-medium capitalize leading-[0.8] tracking-[-0.07em] lg:absolute lg:left-8 lg:right-8 lg:top-[384.5px] lg:text-[198px] lg:leading-[1.1]">
          Testimonials
        </h2>

        <div className="mt-8 flex w-[1020px] items-center pr-[10px] lg:hidden">
          <div className="mr-[-10px] flex h-[316.259px] w-[277.445px] shrink-0 items-center justify-center">
            <div className="rotate-[-3.5deg]">
              <TestimonialCard
                testimonial={testimonials.marko}
                className="w-[259.555px]"
                logoClassName="w-[142.749px]"
              />
            </div>
          </div>

          <div className="mr-[-10px] flex h-[263.646px] w-[268.287px] shrink-0 items-center justify-center">
            <div className="rotate-2">
              <TestimonialCard
                testimonial={testimonials.sofia}
                className="w-[259.555px]"
                logoClassName="w-[81.1px] rotate-[-4deg]"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="absolute left-[102.02px] top-[142.02px] flex h-[295.234px] w-[380.876px] items-center justify-center">
            <div className="rotate-[-6.85deg]">
              <TestimonialCard
                testimonial={testimonials.marko}
                className="w-[353px]"
                logoClassName="w-[142.749px]"
              />
            </div>
          </div>

          <div className="absolute left-[676px] top-[272px] flex h-[203.867px] w-[361.958px] items-center justify-center">
            <div className="rotate-[2.9deg]">
              <TestimonialCard
                testimonial={testimonials.lukas}
                className="w-[353px]"
                logoClassName="w-[137.733px]"
              />
            </div>
          </div>

          <div className="absolute left-[305px] top-[553px] flex h-[280.316px] w-[363.132px] items-center justify-center">
            <div className="rotate-[2.23deg]">
              <TestimonialCard
                testimonial={testimonials.sarah}
                className="w-[353px]"
                logoClassName="w-[108.537px]"
              />
            </div>
          </div>

          <div className="absolute left-[987px] top-[546px] flex h-[228.169px] w-[366.766px] items-center justify-center">
            <div className="rotate-[-4.15deg]">
              <TestimonialCard
                testimonial={testimonials.sofia}
                className="w-[353px]"
                logoClassName="w-[81.1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({
  item,
  className = "",
}: {
  item: (typeof newsItems)[number];
  className?: string;
}) {
  return (
    <article
      className={`flex w-[300px] shrink-0 flex-col items-start gap-4 xl:w-[353px] ${className}`}
    >
      <div className="relative h-[398px] w-full shrink-0 overflow-hidden xl:h-[469px]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 353px, 300px"
          className="object-cover object-center"
        />
      </div>

      <p className="w-full text-sm font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {newsDescription}
      </p>

      <a
        href="#news"
        className="flex h-[26px] items-center justify-center gap-[10px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black"
      >
        <span>Read more</span>
        <ReadMoreArrowIcon />
      </a>
    </article>
  );
}

function NewsSection() {
  return (
    <section
      id="news"
      className="overflow-hidden bg-[#f3f3f3] px-4 py-16 text-black xl:h-[946px] xl:px-8 xl:py-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-8 xl:h-[706px] xl:flex-row xl:items-end xl:justify-between xl:gap-0">
        <div className="flex w-full flex-col justify-center xl:h-[706px] xl:w-[110px] xl:shrink-0 xl:items-center">
          <h2 className="w-full text-[32px] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black xl:w-[706px] xl:-rotate-90 xl:text-[64px]">
            Keep up with my latest news &amp; achievements
          </h2>
        </div>

        <div className="w-full overflow-visible xl:w-[1020px] xl:shrink-0 xl:self-start xl:pt-[5px]">
          <div className="flex w-[1020px] items-start gap-4 xl:w-[1185px] xl:gap-0">
            <NewsCard item={newsItems[0]} className="xl:h-[581px]" />

            <div className="hidden h-[701px] w-[63px] shrink-0 items-center justify-center xl:flex">
              <div className="h-full w-px bg-black/10" />
            </div>

            <NewsCard
              item={newsItems[1]}
              className="xl:h-[701px] xl:pt-[120px]"
            />

            <div className="hidden h-[701px] w-[63px] shrink-0 items-center justify-center xl:flex">
              <div className="h-full w-px bg-black/10" />
            </div>

            <NewsCard item={newsItems[2]} className="xl:h-[581px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

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

      <section className="bg-[#f7f7f7] px-4 py-12 text-[#1f1f1f] xl:px-8 xl:py-20">
        <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-5 xl:h-[614px] xl:flex-row xl:justify-between xl:gap-8">
          <p className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap xl:hidden">
            002
          </p>

          <p className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap xl:shrink-0">
            [ About ]
          </p>

          <div className="flex w-full flex-col items-start gap-5 xl:h-full xl:w-[min(71.44vw,983px)] xl:flex-row xl:items-end xl:gap-8">
            <div className="flex w-full max-w-[465px] items-stretch justify-between xl:w-[min(33.79vw,465px)] xl:shrink">
              <div className="flex w-6 shrink-0 flex-col justify-between">
                <span className="block size-4 border-l border-t border-[#1f1f1f]" />
                <span className="block size-4 border-b border-l border-[#1f1f1f]" />
              </div>

              <p className="min-w-0 flex-1 py-3 text-sm font-normal leading-[1.3] tracking-[-0.04em]">
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

              <div className="relative aspect-[422/594] w-full max-w-[436px] overflow-hidden xl:h-[614px] xl:w-[436px] xl:max-w-none">
                <Image
                  src={aboutPortraitImage}
                  alt="Black and white close-up portrait of Harvey Specter"
                  fill
                  sizes="(min-width: 1024px) 436px, calc(100vw - 32px)"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-svh min-h-[565px] overflow-hidden bg-[#111]">
        <Image
          src={cameraSectionImage}
          alt="Photographer looking through a camera outdoors"
          fill
          sizes="100vw"
          className="object-cover object-[32%_center] md:object-center"
        />
      </section>

      <section
        id="services"
        className="bg-black px-4 py-12 text-white md:px-8 md:py-16 xl:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-8 xl:gap-12">
          <p className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap">
            [ Services ]
          </p>

          <div className="flex w-full items-center justify-between font-sans text-[32px] font-light uppercase leading-[normal] tracking-[-0.08em] md:text-[clamp(48px,6.667vw,96px)]">
            <p className="shrink-0">[4]</p>
            <p className="shrink-0">Deliverables</p>
          </div>

          <div className="flex w-full flex-col gap-12">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex w-full flex-col items-start gap-3 xl:gap-[9px]"
              >
                <div className="flex w-full flex-col items-start gap-[9px]">
                  <p className="w-full font-mono text-sm uppercase leading-[1.1]">
                    [ {service.number} ]
                  </p>
                  <div className="h-px w-full bg-white/70" />
                </div>

                <div className="flex w-full flex-col items-start gap-4 xl:flex-row xl:justify-between xl:gap-6">
                  <h3 className="whitespace-nowrap font-sans text-4xl font-bold italic uppercase leading-[1.1] tracking-[-0.04em]">
                    {service.title}
                  </h3>

                  <div className="flex w-full flex-col items-start gap-4 xl:w-[568px] xl:flex-row xl:gap-6">
                    <p className="w-full text-sm font-normal leading-[1.3] tracking-[-0.04em] xl:w-[393px]">
                      <span className="xl:hidden">
                        {serviceDescriptionMobile}
                      </span>
                      <span className="hidden xl:inline">
                        {serviceDescriptionDesktop}
                      </span>
                    </p>

                    <div className="relative size-[151px] shrink-0 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="151px"
                        className={`object-cover ${
                          service.imageClassName ?? "object-center"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#f7f7f7] px-4 py-12 text-black xl:px-8 xl:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-8 xl:gap-[61px]">
          <div className="flex w-full flex-col items-start gap-4 uppercase xl:h-[166px] xl:flex-row xl:items-start xl:justify-between xl:gap-0">
            <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f] xl:hidden">
              [ Portfolio ]
            </p>

            <div className="flex w-full items-start justify-between xl:w-[467px] xl:justify-start xl:gap-[10px]">
              <h2 className="font-sans text-[32px] font-light leading-[0.86] tracking-[-0.08em] text-black xl:text-[96px]">
                Selected
                <br />
                Work
              </h2>
              <p className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                004
              </p>
            </div>

            <div className="hidden h-[110px] w-[15px] items-center justify-center xl:flex">
              <p className="-rotate-90 font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] whitespace-nowrap">
                [ Portfolio ]
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[676px] flex-col items-start gap-6 xl:hidden">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))}
            <PortfolioCta className="h-[129px]" />
          </div>

          <div className="hidden w-full gap-6 xl:flex">
            <div className="flex h-[1900px] min-w-0 flex-1 flex-col items-start justify-between">
              <PortfolioCard project={portfolioProjects[0]} />
              <PortfolioCard project={portfolioProjects[1]} />
              <PortfolioCta className="h-[111px]" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col items-start gap-[117px] pt-60">
              <PortfolioCard project={portfolioProjects[2]} />
              <PortfolioCard project={portfolioProjects[3]} />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <NewsSection />
    </main>
  );
}
