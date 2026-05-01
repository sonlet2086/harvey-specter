"use client";

import Image from "next/image";
import { useState } from "react";

type NewsSlide = {
  image: string;
  alt: string;
};

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

export function NewsMobileSlider({
  items,
  description,
}: {
  items: NewsSlide[];
  description: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <article
              key={item.image}
              className="flex w-full shrink-0 flex-col items-start gap-4"
              aria-hidden={activeIndex !== index}
            >
              <div className="relative h-[398px] w-full shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="calc(100vw - 32px)"
                  className="object-cover object-center"
                />
              </div>

              <p className="w-full text-sm font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                {description}
              </p>

              <a
                href="#news"
                className="flex h-[26px] items-center justify-center gap-[10px] border-b border-black py-1 text-sm font-medium leading-none tracking-[-0.04em] text-black"
              >
                <span>Read more</span>
                <ReadMoreArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div
        className="mt-6 flex items-center justify-center gap-2"
        aria-label="Choose news item"
      >
        {items.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show news item ${index + 1}`}
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
