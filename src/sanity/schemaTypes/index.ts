import type { SchemaTypeDefinition } from "sanity";
import { newsItem } from "./newsItem";
import { portfolioProject } from "./portfolioProject";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { testimonial } from "./testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioProject, service, newsItem, testimonial, siteSettings],
};
