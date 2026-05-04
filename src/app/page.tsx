import Image from "next/image";
import type { CSSProperties } from "react";
import { client } from "@/sanity/client";
import { PORTFOLIO_PROJECTS_QUERY } from "@/sanity/queries";
import { AboutSections } from "./about-sections";
import { CameraParallaxSection } from "./camera-parallax-section";
import { HeroSection } from "./hero-section";
import { NewsMobileSlider } from "./news-mobile-slider";
import { ScrollEnhancements } from "./scroll-enhancements";
import { ServicesSection } from "./services-section";
import { TestimonialMobileSlider } from "./testimonial-mobile-slider";

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

const fallbackPortfolioBySlug: Record<
  string,
  {
    image: string;
    alt: string;
    mobileImageHeight: number;
    desktopImageHeight: number;
    objectPosition: string;
  }
> = {
  cowabunga: {
    image: "/project-surfers.png",
    alt: "Yellow surfboard standing in sand at a beach",
    mobileImageHeight: 390,
    desktopImageHeight: 744,
    objectPosition: "left",
  },
  "cyberpunk-cafe": {
    image: "/project-cyberpunk.png",
    alt: "Portrait lit in red and blue with neon glasses",
    mobileImageHeight: 390,
    desktopImageHeight: 699,
    objectPosition: "center",
  },
  "agency-976": {
    image: "/project-agency.png",
    alt: "Dark portrait with bright green neon glasses",
    mobileImageHeight: 390,
    desktopImageHeight: 699,
    objectPosition: "center",
  },
  "minimal-playground": {
    image: "/project-minimal.png",
    alt: "Modern white building facade with balconies",
    mobileImageHeight: 390,
    desktopImageHeight: 744,
    objectPosition: "center",
  },
};

type DisplayProject = {
  _id: string;
  title: string;
  tags: string[];
  image: string;
  alt: string;
  mobileImageHeight: number;
  desktopImageHeight: number;
  objectPosition: string;
};

type SanityImage = {
  asset?: { url?: string };
  alt?: string;
};

type SanityPortfolioProject = {
  _id: string;
  title: string;
  slug: { current: string };
  legacyAlt?: string;
  tags?: string[];
  coverImage?: SanityImage;
  legacyImage?: SanityImage;
};

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

function PortfolioCard({ project }: { project: DisplayProject }) {
  const imageStyle = {
    "--h-mobile": `${project.mobileImageHeight}px`,
    "--h-desktop": `${project.desktopImageHeight}px`,
  } as CSSProperties;

  return (
    <article data-project-card className="flex w-full flex-col items-start gap-[10px]">
      <div
        className="portfolio-img-wrap relative w-full overflow-hidden"
        style={imageStyle}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(min-width: 1280px) 676px, (min-width: 768px) calc((100vw - 56px) / 2), calc(100vw - 32px)"
          className="object-cover"
          style={{ objectPosition: project.objectPosition }}
        />

        {project.tags.length > 0 && (
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[24px] bg-white/30 px-2 py-1 text-sm font-medium leading-[normal] tracking-[-0.04em] text-[#111] backdrop-blur-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex h-8 w-full items-center justify-between xl:h-10">
        <h3 className="whitespace-nowrap font-sans text-2xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-black xl:text-4xl">
          {project.title}
        </h3>
        <button
          className="btn-icon flex size-8 shrink-0 items-center justify-center text-black"
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
        <button className="btn-primary rounded-[24px] px-4 py-3 text-sm font-medium leading-[normal] tracking-[-0.04em]">
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
      className={`testimonial-card flex flex-col items-start gap-4 rounded bg-[#f1f1f1] p-6 text-[#1f1f1f] ring-1 ring-[#ddd] ${className}`}
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
  const testimonialRailCards = [
    {
      key: "marko",
      testimonial: testimonials.marko,
      rotateClassName: "rotate-[-3.5deg]",
      logoClassName: "w-[142.749px]",
    },
    {
      key: "sofia",
      testimonial: testimonials.sofia,
      rotateClassName: "rotate-2",
      logoClassName: "w-[81.1px] rotate-[-4deg]",
    },
    {
      key: "lukas",
      testimonial: testimonials.lukas,
      rotateClassName: "rotate-[2.9deg]",
      logoClassName: "w-[137.733px]",
    },
    {
      key: "sarah",
      testimonial: testimonials.sarah,
      rotateClassName: "rotate-[2.23deg]",
      logoClassName: "w-[108.537px]",
    },
  ];

  return (
    <section id="testimonials" className="relative h-auto min-h-[527.259px] overflow-hidden bg-[#f7f7f7] px-4 py-16 text-black xl:h-[987px] xl:px-8 xl:py-[120px]">
      <div className="relative mx-auto h-full w-full max-w-[1376px] xl:static">
        <h2 className="flex w-full justify-center text-center font-sans text-[64px] font-medium capitalize leading-[0.8] tracking-[-0.07em] xl:absolute xl:left-8 xl:right-8 xl:top-[384.5px] xl:text-[198px] xl:leading-[1.1]">
          Testimonials
        </h2>

        <TestimonialMobileSlider slides={testimonialRailCards} />

        <div className="mx-auto mt-8 hidden w-max grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 py-8 md:grid xl:hidden">
          {testimonialRailCards.map((card) => (
            <div
              key={card.key}
              className="flex h-[316.259px] w-[277.445px] items-center justify-center"
            >
              <div className={card.rotateClassName}>
                <TestimonialCard
                  testimonial={card.testimonial}
                  className="w-[259.555px]"
                  logoClassName={card.logoClassName}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden xl:block">
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
        className="link-action flex h-[26px] items-center justify-center gap-[10px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
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

        <NewsMobileSlider items={newsItems} description={newsDescription} />

        <div className="-mx-4 hidden w-[calc(100%+2rem)] overflow-x-auto overflow-y-hidden px-4 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:block xl:mx-0 xl:w-[1020px] xl:shrink-0 xl:self-start xl:overflow-visible xl:px-0 xl:pb-0 xl:pt-[5px]">
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

function FooterSection() {
  return (
    <footer
      id="contact"
      className="flex h-[493px] flex-col items-start gap-12 overflow-hidden bg-black px-4 pt-12 text-white xl:h-[514px] xl:gap-[120px] xl:px-8"
    >
      <div className="flex w-full flex-col items-start gap-6 xl:gap-12">
        <div className="flex w-full flex-col items-start justify-center gap-4 xl:flex-row xl:items-start xl:justify-between xl:gap-0">
          <div className="flex w-[298px] flex-col items-start gap-3">
            <p className="min-w-full text-2xl font-light italic uppercase leading-[1.1] tracking-[-0.04em]">
              Have a{" "}
              <span className="font-black not-italic">project</span> in mind?
            </p>
            <button className="btn-on-dark rounded-[24px] px-4 py-3 text-sm font-medium leading-[normal] tracking-[-0.04em]">
              Let&apos;s talk
            </button>
          </div>

          <div className="hidden w-[298px] text-center text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] xl:block">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          <div className="hidden w-[298px] text-right text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] xl:block">
            <p>x.com</p>
            <p>Linkedin</p>
          </div>

          <nav
            aria-label="Social links"
            className="flex w-[298px] flex-col items-start gap-4 text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] xl:hidden"
          >
            {["Facebook", "Instagram", "x.com", "Linkedin"].map((item) => (
              <a key={item} href="#contact">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-0 w-full border-t border-white" />
      </div>

      <div className="flex h-[150px] w-full flex-col items-center gap-4 whitespace-nowrap text-white xl:hidden">
        <div className="flex items-center gap-[34px] pb-8 text-center text-xs font-normal uppercase leading-[1.1] tracking-[-0.04em]">
          <a href="#contact" className="underline">
            licences
          </a>
          <a href="#contact" className="underline">
            Privacy policy
          </a>
        </div>

        <div className="flex w-full flex-col items-start gap-3 overflow-hidden">
          <p className="font-mono text-[10px] font-normal uppercase leading-[1.1]">
            [ Coded By Claude ]
          </p>
          <p className="text-[91.425px] font-semibold capitalize leading-[0.8] tracking-[-5.4855px]">
            H.Studio
          </p>
        </div>
      </div>

      <div className="hidden h-[219px] w-full items-end justify-between xl:flex">
        <div className="relative h-[219px] w-[1093px] shrink-0 overflow-hidden">
          <p className="absolute left-[5px] top-0 whitespace-nowrap text-[290px] font-semibold capitalize leading-[0.8] tracking-[-17.4px]">
            H.Studio
          </p>
          <div className="absolute left-0 top-[34px] flex h-[160px] w-[15px] items-center justify-center">
            <div className="-rotate-90">
              <p className="whitespace-nowrap font-mono text-sm font-normal uppercase leading-[1.1]">
                [ Coded By Claude ]
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-[34px] pb-8 text-center text-xs font-normal uppercase leading-[1.1] tracking-[-0.04em]">
          <a href="#contact" className="underline">
            licences
          </a>
          <a href="#contact" className="underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default async function Home() {
  const sanityProjects = await client.fetch<SanityPortfolioProject[]>(
    PORTFOLIO_PROJECTS_QUERY,
    {},
    { cache: "no-store" }
  );

  const portfolioProjects: DisplayProject[] = sanityProjects.map((p) => {
    const fallback = fallbackPortfolioBySlug[p.slug.current];
    const image = p.coverImage?.asset?.url
      ? p.coverImage
      : p.legacyImage?.asset?.url
        ? p.legacyImage
        : undefined;

    return {
      _id: p._id,
      title: p.title,
      tags: p.tags ?? [],
      image: image?.asset?.url ?? fallback?.image ?? "",
      alt: image?.alt ?? p.legacyAlt ?? fallback?.alt ?? p.title,
      mobileImageHeight: fallback?.mobileImageHeight ?? 390,
      desktopImageHeight: fallback?.desktopImageHeight ?? 699,
      objectPosition: fallback?.objectPosition ?? "center",
    };
  });

  return (
    <main>
      <ScrollEnhancements />
      <HeroSection />

      <AboutSections />

      <CameraParallaxSection />

      <ServicesSection />

      <section
        id="projects"
        className="bg-[#f7f7f7] px-4 py-12 text-black xl:px-8 xl:py-20"
      >
        <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-8 xl:gap-[61px]">
          <div className="flex w-full flex-col items-start gap-4 uppercase xl:h-[166px] xl:flex-row xl:items-start xl:justify-between xl:gap-0">
            <p data-project-head className="font-mono text-sm leading-[1.1] text-[#1f1f1f] xl:hidden">
              [ Portfolio ]
            </p>

            <div className="flex w-full items-start justify-between xl:w-[467px] xl:justify-start xl:gap-[10px]">
              <h2 data-project-head className="font-sans text-[32px] font-light leading-[0.86] tracking-[-0.08em] text-black xl:text-[96px]">
                Selected
                <br />
                Work
              </h2>
              <p data-project-head className="font-mono text-sm leading-[1.1] text-[#1f1f1f]">
                004
              </p>
            </div>

            <div className="hidden h-[110px] w-[15px] items-center justify-center xl:flex">
              <p data-project-head className="-rotate-90 font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] whitespace-nowrap">
                [ Portfolio ]
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 xl:hidden">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project._id} project={project} />
            ))}
            <PortfolioCta className="h-[129px] max-w-[465px] md:col-span-2 md:mt-2" />
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
      <FooterSection />
    </main>
  );
}
