import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      description: "Unique identifier used in layout (e.g. marko, lukas, sarah, sofia)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: false },
    }),
    defineField({
      name: "logoWidth",
      title: "Logo display width (px)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "logoHeight",
      title: "Logo display height (px)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
  ],
});
