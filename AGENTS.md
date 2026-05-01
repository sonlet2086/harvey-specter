<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Figma implementation standard

When implementing from Figma links, pixel fidelity is a hard requirement from the start. Do not treat this as a rough visual reference or a one-pass code generation task.

Before editing:

- Use the exact Figma node URLs supplied by the user for each breakpoint or frame.
- Pull measured Figma data for structure, dimensions, coordinates, typography, fills, assets, and screenshots before writing code.
- Identify the target frame sizes (typically supplied desktop and mobile) and infer responsive behavior between them.
- Read and understand existing implementation patterns so Figma is adapted into this project’s Next.js, Tailwind, typography, image, and layout conventions.
- Confirm understanding of layout structure, hierarchy, and key elements before implementation.

Implementation expectations:

- Match section height, background, padding, max content width, layout geometry, spacing, and positioning exactly.
- Match text content, alignment, font, size, weight, line height, tracking, and wrapping.
- Match assets, image dimensions, aspect ratios, crops, and stacking order.
- Preserve intentional overflow, clipping, offsets, and art direction from Figma.
- Use responsive constraints (breakpoints, clamp, %, max widths, aspect ratios) so layouts scale cleanly.
- Do not introduce redesigns, new patterns, or stylistic changes not present in Figma or required by the project.

Verification expectations:

- Run relevant build/type checks where applicable.
- Verify in a browser, not just in code.
- Check at desktop, mobile, and intermediate breakpoints (e.g., 1024px, 768px).
- Fix all visible drift in spacing, alignment, typography, and layout before finishing.
- Do not mark a task complete until the implementation visually matches Figma or all differences are clearly listed.
- Report Figma nodes used, viewports checked, files changed, and any known deviations.

If full verification is blocked (assets, auth, tooling), state the blocker and complete all possible checks.

---

## UX/UI decision standard

Applies to all UI work (pages, sections, components, responsive behavior, interactions, CMS views, and Figma implementations).

Design decisions must prioritize usability, clarity, and established UX principles over visual appeal.

Always:

- Maintain clear hierarchy: primary > secondary > tertiary actions.
- Place primary CTAs in expected, high-visibility locations.
- Ensure layout and spacing support readability and scan patterns.
- Follow UX heuristics: consistency, visibility, affordance, feedback.
- Match Figma intent unless a clear UX issue is identified.

Before implementing:

- Explain hierarchy and CTA placement.
- Justify layout decisions based on usability.
- Do not begin coding until the explanation is complete and logically sound.

Do not:

- Change layout or hierarchy for visual preference alone.
- Introduce new patterns or styling not present in Figma.
- Prioritize aesthetics over usability.

Completion requirement:

- If any UX tradeoff is made, explicitly state it and why.
