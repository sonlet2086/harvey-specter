import { defineField, defineType } from "sanity";
import { FolderIcon, ImagesIcon } from "@sanity/icons";
import { createElement } from "react";

const previewImagesBySlug: Record<string, string> = {
  "agency-976": "/project-agency.png",
  cowabunga: "/project-surfers.png",
  "cyberpunk-cafe": "/project-cyberpunk.png",
  "minimal-playground": "/project-minimal.png",
};

function LocalPreviewImage({ src }: { src: string }) {
  return createElement("img", {
    src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  });
}

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  icon: ImagesIcon,
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      media: "coverImage",
    },
    prepare({ title, slug, media }) {
      return {
        title,
        media:
          media ??
          (slug && previewImagesBySlug[slug]
            ? createElement(LocalPreviewImage, {
                src: previewImagesBySlug[slug],
              })
            : FolderIcon),
      };
    },
  },
  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the order in the portfolio section.",
      validation: (rule) => rule.integer().positive(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers and SEO.",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { asset?: unknown } | undefined;

              if (parent?.asset && !value) {
                return "Alt text is required when a cover image is set.";
              }

              return true;
            }),
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
