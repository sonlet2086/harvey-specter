import { defineQuery } from "next-sanity";

const imageFields = `
  asset->{ _id, url, metadata { lqip, dimensions } },
  alt,
  hotspot,
  crop,
  objectPosition
`;

export const SERVICES_QUERY = defineQuery(
  `*[_type == "service"] | order(order asc) {
    _id, number, title,
    image { ${imageFields} }
  }`
);

export const PORTFOLIO_PROJECTS_QUERY = defineQuery(
  `*[_type == "portfolioProject"] | order(order asc) {
    _id, title, tags, mobileHeight, desktopHeight,
    image { ${imageFields} }
  }`
);

export const NEWS_ITEMS_QUERY = defineQuery(
  `*[_type == "newsItem"] | order(order asc) {
    _id, description,
    image { ${imageFields} }
  }`
);

export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"] {
    _id, key, name, quote, logoWidth, logoHeight,
    logo { asset->{ _id, url }, alt }
  }`
);

export const SITE_SETTINGS_QUERY = defineQuery(
  `*[_id == "siteSettings"][0] {
    serviceDescriptionDesktop, serviceDescriptionMobile, aboutDetailCopy
  }`
);
