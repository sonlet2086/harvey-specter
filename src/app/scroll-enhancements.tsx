"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function addGsapHover({
  elements,
  enter,
  leave,
}: {
  elements: Element[];
  enter: gsap.TweenVars | ((element: Element) => gsap.TweenVars);
  leave: gsap.TweenVars | ((element: Element) => gsap.TweenVars);
}) {
  const cleanups: Array<() => void> = [];

  elements.forEach((element) => {
    const playEnter = () => {
      gsap.to(element, {
        duration: 0.24,
        ease: "power2.out",
        overwrite: "auto",
        ...(typeof enter === "function" ? enter(element) : enter),
      });
    };
    const playLeave = () => {
      gsap.to(element, {
        duration: 0.26,
        ease: "power2.out",
        overwrite: "auto",
        ...(typeof leave === "function" ? leave(element) : leave),
      });
    };

    element.addEventListener("pointerenter", playEnter);
    element.addEventListener("pointerleave", playLeave);
    element.addEventListener("focusin", playEnter);
    element.addEventListener("focusout", playLeave);

    cleanups.push(() => {
      element.removeEventListener("pointerenter", playEnter);
      element.removeEventListener("pointerleave", playLeave);
      element.removeEventListener("focusin", playEnter);
      element.removeEventListener("focusout", playLeave);
    });
  });

  return cleanups;
}

export function ScrollEnhancements() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const hoverCleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      hoverCleanups.push(
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".btn-primary"),
          enter: {
            y: -2,
            backgroundColor: "#ffffff",
            color: "#000000",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
          },
          leave: {
            y: 0,
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".btn-on-dark"),
          enter: {
            y: -2,
            backgroundColor: "#ffffff",
            borderColor: "#ffffff",
            color: "#000000",
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
          },
          leave: {
            y: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderColor: "rgba(255, 255, 255, 0.7)",
            color: "#ffffff",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".btn-icon"),
          enter: {
            y: -2,
            rotate: 8,
            backgroundColor: "#000000",
            color: "#ffffff",
            boxShadow: "0 10px 24px rgba(0, 0, 0, 0.16)",
          },
          leave: {
            y: 0,
            rotate: 0,
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "#000000",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".btn-dot"),
          enter: { scale: 1.35, opacity: 1 },
          leave: { scale: 1, opacity: 1 },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".btn-menu"),
          enter: { y: -1, opacity: 0.72 },
          leave: { y: 0, opacity: 1 },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(
            ".about-portrait-frame, .service-thumb, .portfolio-img-wrap"
          ),
          enter: (element) => {
            const image = element.querySelector("img");
            if (image) {
              gsap.to(image, {
                scale: 1.06,
                filter: "contrast(1.06) saturate(1.08)",
                duration: 0.42,
                ease: "power3.out",
                overwrite: "auto",
              });
            }

            return {
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
            };
          },
          leave: (element) => {
            const image = element.querySelector("img");
            if (image) {
              gsap.to(image, {
                scale: 1,
                filter: "contrast(1) saturate(1)",
                duration: 0.34,
                ease: "power2.out",
                overwrite: "auto",
              });
            }

            return {
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            };
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".testimonial-card"),
          enter: {
            scale: 1.018,
            boxShadow: "0 18px 42px rgba(0, 0, 0, 0.14)",
          },
          leave: {
            scale: 1,
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>(".link-action"),
          enter: (element) => {
            const icon = element.querySelector("svg");
            if (icon) {
              gsap.to(icon, {
                x: 2,
                y: -2,
                duration: 0.22,
                ease: "power2.out",
                overwrite: "auto",
              });
            }

            return {
              columnGap: 14,
              borderColor: "rgba(0, 0, 0, 0.45)",
            };
          },
          leave: (element) => {
            const icon = element.querySelector("svg");
            if (icon) {
              gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.22,
                ease: "power2.out",
                overwrite: "auto",
              });
            }

            return {
              columnGap: 10,
              borderColor: "#000000",
            };
          },
        }),
        ...addGsapHover({
          elements: gsap.utils.toArray<Element>("[data-nav-link]"),
          enter: (element) => {
            const underline = element.querySelector("span");
            if (underline) {
              gsap.to(underline, {
                scaleX: 1,
                duration: 0.3,
                ease: "power3.out",
                overwrite: "auto",
              });
            }
            return {};
          },
          leave: (element) => {
            const underline = element.querySelector("span");
            if (underline) {
              gsap.to(underline, {
                scaleX: 0,
                duration: 0.26,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
            return {};
          },
        })
      );

      const projects = document.querySelector("#projects");
      if (projects) {
        gsap.fromTo(
          projects.querySelectorAll("[data-project-head]"),
          { y: 44, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: projects,
              start: "top 78%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );

        projects.querySelectorAll("[data-project-card]").forEach((card, index) => {
          const image = card.querySelector(".portfolio-img-wrap");
          const title = card.querySelector("h3");
          const icon = card.querySelector(".btn-icon");

          if (!image || !title || !icon) return;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                end: "top 44%",
                scrub: 1,
              },
            })
            .fromTo(
              image,
              {
                clipPath: index % 2 ? "inset(18% 0 0 0)" : "inset(0 0 18% 0)",
                filter: "blur(10px)",
                y: 34,
              },
              {
                clipPath: "inset(0% 0 0% 0)",
                filter: "blur(0px)",
                y: 0,
                ease: "none",
              },
              0
            )
            .fromTo(
              title,
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: "none" },
              0.18
            )
            .fromTo(
              icon,
              { rotate: -90, scale: 0.72, autoAlpha: 0 },
              { rotate: 0, scale: 1, autoAlpha: 1, ease: "none" },
              0.22
            );
        });
      }

      const testimonials = document.querySelector("#testimonials");
      if (testimonials) {
        gsap.fromTo(
          testimonials.querySelector("h2"),
          { y: 72, scale: 0.96, autoAlpha: 0 },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: testimonials,
              start: "top 80%",
              end: "top 32%",
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          testimonials.querySelectorAll(".testimonial-card"),
          { y: 80, rotate: 0, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: testimonials,
              start: "top 72%",
              end: "center 45%",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      hoverCleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return null;
}
