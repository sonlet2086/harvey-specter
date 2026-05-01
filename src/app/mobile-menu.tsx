"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6H21M3 12H21M3 18H21" stroke="#111111" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black px-8 py-8 md:hidden">
          <div className="flex shrink-0 items-center justify-between">
            <span className="text-base font-semibold capitalize tracking-[-0.04em] text-white">
              H.Studio
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
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
          <nav className="mt-16 flex flex-1 flex-col gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-4xl font-semibold capitalize tracking-[-0.04em] text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            className="self-start rounded-full border border-white px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </button>
        </div>
      )}
    </>
  );
}
