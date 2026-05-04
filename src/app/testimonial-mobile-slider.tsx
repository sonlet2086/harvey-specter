"use client";

import gsap from "gsap";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type TestimonialSlide = {
  key: string;
  testimonial: {
    quote: string;
    name: string;
    logo: string;
    logoWidth: number;
    logoHeight: number;
  };
  rotateClassName: string;
  logoClassName: string;
};

export function TestimonialMobileSlider({
  slides,
}: {
  slides: TestimonialSlide[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.45 }
    );

    observer.observe(slider);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || slides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [inView, slides.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.to(trackRef.current, {
      xPercent: -activeIndex * 100,
      duration: prefersReducedMotion ? 0 : 0.55,
      ease: "power3.out",
    });
  }, [activeIndex]);

  return (
    <div ref={sliderRef} className="-mx-4 mt-8 md:hidden">
      <div className="overflow-hidden px-4 py-8">
        <div
          ref={trackRef}
          className="flex"
        >
          {slides.map((slide) => (
            <div
              key={slide.key}
              className="flex w-full shrink-0 items-center justify-center px-1"
            >
              <article
                className={`testimonial-card flex min-h-[390px] w-full flex-col items-start justify-between gap-6 rounded bg-[#f1f1f1] p-6 text-[#1f1f1f] ring-1 ring-[#ddd] ${slide.rotateClassName}`}
              >
                <span
                  aria-hidden="true"
                  style={
                    {
                      width: slide.testimonial.logoWidth,
                      height: slide.testimonial.logoHeight,
                      backgroundImage: `url(${slide.testimonial.logo})`,
                    } as CSSProperties
                  }
                  className={`block shrink-0 bg-[length:100%_100%] bg-no-repeat ${slide.logoClassName}`}
                />
                <p className="w-full text-[clamp(24px,7.4vw,32px)] font-normal leading-[1.18] tracking-[-0.04em]">
                  {slide.testimonial.quote}
                </p>
                <p className="whitespace-nowrap text-[22px] font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
                  {slide.testimonial.name}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2" aria-label="Choose testimonial">
        {slides.map((slide, index) => (
          <button
            key={slide.key}
            type="button"
            aria-label={`Show ${slide.testimonial.name} testimonial`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={`btn-dot size-2.5 rounded-full ${
              activeIndex === index ? "bg-black" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
