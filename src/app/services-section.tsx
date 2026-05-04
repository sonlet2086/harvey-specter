"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const countRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const rowRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        section.querySelectorAll("[data-service-animate], [data-service-line], [data-service-image]"),
        {
          clearProps: "all",
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 18%",
            scrub: 1,
          },
        })
        .fromTo(
          eyebrowRef.current,
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, ease: "none" },
          0
        )
        .fromTo(
          countRef.current,
          { xPercent: -18, autoAlpha: 0.25 },
          { xPercent: 0, autoAlpha: 1, ease: "none" },
          0
        )
        .fromTo(
          titleRef.current,
          { xPercent: 12, autoAlpha: 0.25 },
          { xPercent: 0, autoAlpha: 1, ease: "none" },
          0
        );

      rowRefs.current.forEach((row) => {
        const line = row.querySelector("[data-service-line]");
        const number = row.querySelector("[data-service-number]");
        const title = row.querySelector("[data-service-title]");
        const description = row.querySelector("[data-service-description]");
        const imageWrap = row.querySelector("[data-service-image]");
        const image = row.querySelector("[data-service-image] img");

        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(imageWrap, {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(10px)",
        });
        gsap.set(image, { scale: 1.18, xPercent: -8 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              end: "bottom 58%",
              scrub: 1,
            },
          })
          .fromTo(
            number,
            { y: 16, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, ease: "none" },
            0
          )
          .to(line, { scaleX: 1, ease: "none" }, 0.05)
          .fromTo(
            title,
            { y: 36, skewY: 3, autoAlpha: 0 },
            { y: 0, skewY: 0, autoAlpha: 1, ease: "none" },
            0.1
          )
          .fromTo(
            description,
            { y: 22, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, ease: "none" },
            0.18
          )
          .to(
            imageWrap,
            {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              ease: "none",
            },
            0.12
          )
          .to(image, { scale: 1, xPercent: 0, ease: "none" }, 0.12);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-black px-4 py-12 text-white md:px-8 md:py-16 xl:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1376px] flex-col items-start gap-8 xl:gap-12">
        <p
          ref={eyebrowRef}
          className="font-mono text-sm uppercase leading-[1.1] whitespace-nowrap"
        >
          [ Services ]
        </p>

        <div className="flex w-full items-center justify-between font-sans text-[32px] font-light uppercase leading-[normal] tracking-[-0.08em] md:text-[clamp(48px,6.667vw,96px)]">
          <p ref={countRef} className="shrink-0">
            [4]
          </p>
          <p ref={titleRef} className="shrink-0">
            Deliverables
          </p>
        </div>

        <div className="flex w-full flex-col gap-12">
          {services.map((service, index) => (
            <article
              key={service.number}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
              className="group flex w-full flex-col items-start gap-3 xl:gap-[9px]"
            >
              <div className="flex w-full flex-col items-start gap-[9px]">
                <p
                  data-service-number
                  className="w-full font-mono text-sm uppercase leading-[1.1]"
                >
                  [ {service.number} ]
                </p>
                <div
                  data-service-line
                  className="h-px w-full bg-white/70"
                />
              </div>

              <div className="flex w-full flex-col items-start gap-4 xl:flex-row xl:justify-between xl:gap-6">
                <h3
                  data-service-title
                  className="whitespace-nowrap font-sans text-4xl font-bold italic uppercase leading-[1.1] tracking-[-0.04em]"
                >
                  {service.title}
                </h3>

                <div className="flex w-full flex-col items-start gap-4 xl:w-[568px] xl:flex-row xl:gap-6">
                  <p
                    data-service-description
                    className="w-full text-sm font-normal leading-[1.3] tracking-[-0.04em] xl:w-[393px]"
                  >
                    <span className="xl:hidden">
                      {serviceDescriptionMobile}
                    </span>
                    <span className="hidden xl:inline">
                      {serviceDescriptionDesktop}
                    </span>
                  </p>

                  <div
                    data-service-image
                    className="service-thumb relative size-[151px] shrink-0 overflow-hidden bg-white/5"
                  >
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
  );
}
