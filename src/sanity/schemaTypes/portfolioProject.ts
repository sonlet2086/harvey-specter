import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  icon: FolderIcon,
  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
  fields: [
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
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
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Describe the image for screen readers and SEO",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
