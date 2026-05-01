import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "serviceDescriptionDesktop",
      title: "Service description (desktop)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "serviceDescriptionMobile",
      title: "Service description (mobile)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "aboutDetailCopy",
      title: "About detail copy",
      type: "text",
      rows: 5,
    }),
  ],
});
