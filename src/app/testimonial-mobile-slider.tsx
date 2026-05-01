"use client";

import { useState, type CSSProperties } from "react";

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

  return (
    <div className="-mx-4 mt-8 md:hidden">
      <div className="overflow-hidden px-4 py-8">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.key}
              className="flex w-full shrink-0 items-center justify-center px-1"
            >
              <article
                className={`flex min-h-[390px] w-full flex-col items-start justify-between gap-6 rounded bg-[#f1f1f1] p-6 text-[#1f1f1f] ring-1 ring-[#ddd] ${slide.rotateClassName}`}
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
            className={`size-2.5 rounded-full transition-colors ${
              activeIndex === index ? "bg-black" : "bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
