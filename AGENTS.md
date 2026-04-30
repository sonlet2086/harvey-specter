<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Figma implementation standard

When implementing from Figma links, pixel fidelity is a hard requirement from the start. Do not treat this as a rough visual reference or a one-pass code generation task.

Before editing:

- Use the exact Figma node URLs supplied by the user for each breakpoint or frame.
- Pull measured Figma data for structure, dimensions, coordinates, typography, fills, assets, and screenshots before writing code.
- Identify the target frame sizes, usually the supplied desktop and mobile widths, and infer responsive behavior for widths between them.
- Read the existing implementation patterns first so the Figma design is adapted into this project’s Next.js, Tailwind, typography, image, and layout conventions instead of pasted as generic generated code.

Implementation expectations:

- Match section height, background, side padding, top and bottom padding, max content width, grid or flex geometry, gaps, dividers, and absolute offsets.
- Match text content, casing, alignment, weight, font family, size, line height, tracking, wrapping, and visual baselines.
- Match asset selection, image dimensions, aspect ratios, crops, object position, masking, clipping, opacity, blur, and stacking order.
- Preserve intentional Figma overflow, horizontal rails, clipped content, rotated labels, and art-directed offsets when they are part of the design.
- Use responsive constraints such as breakpoint-specific rules, `clamp()`, percentages, max widths, fixed aspect ratios, and overflow behavior so layouts scale cleanly from desktop to mobile.
- Avoid introducing unrelated redesigns, generic card treatments, decorative effects, or new abstractions unless they are required by the design or already established in the project.

Verification expectations:

- Run the relevant type/build checks that are practical for the change.
- Verify the rendered page in a browser, not only by reading code.
- Capture and inspect screenshots at the supplied desktop width, the supplied mobile width, and intermediate widths such as 1024px and 768px.
- Patch visible drift in spacing, alignment, type, image crop, overflow, and section transitions before finishing.
- Do not mark a task complete until the implementation visually matches Figma or all differences are clearly listed.
- Report the Figma nodes used, viewports checked, files changed, validation results, and any known divergence from Figma.

If tooling, authentication, network access, or missing assets prevent full verification, state the blocker clearly and still complete every fidelity check that is possible locally.
