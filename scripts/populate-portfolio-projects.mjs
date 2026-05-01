import { createReadStream, existsSync, readFileSync } from "node:fs";
import { createClient } from "next-sanity";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const match = line.match(/^([^#=\s]+)=(.*)$/);

    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-04-30";
const token = process.env.SANITY_AUTH_TOKEN;

if (!projectId || !dataset || !token) {
  const missing = [
    ["NEXT_PUBLIC_SANITY_PROJECT_ID", projectId],
    ["NEXT_PUBLIC_SANITY_DATASET", dataset],
    ["SANITY_AUTH_TOKEN", token],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name)
    .join(", ");

  throw new Error(`Missing required environment variables: ${missing}`);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const portfolioProjects = [
  {
    slug: "agency-976",
    order: 1,
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    imagePath: "public/project-agency.png",
    alt: "Dark portrait with bright green neon glasses",
  },
  {
    slug: "cowabunga",
    order: 2,
    title: "Cowabunga",
    tags: ["Social Media", "Photography"],
    imagePath: "public/project-surfers.png",
    alt: "Yellow surfboard standing in sand at a beach",
  },
  {
    slug: "cyberpunk-cafe",
    order: 3,
    title: "Cyberpunk Café",
    tags: ["Social Media", "Photography"],
    imagePath: "public/project-cyberpunk.png",
    alt: "Portrait lit in red and blue with neon glasses",
  },
  {
    slug: "minimal-playground",
    order: 4,
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    imagePath: "public/project-minimal.png",
    alt: "Modern white building facade with balconies",
  },
];

for (const project of portfolioProjects) {
  const documentId = await client.fetch(
    `*[_type == "portfolioProject" && slug.current == $slug][0]._id`,
    { slug: project.slug }
  );

  if (!documentId) {
    throw new Error(`No portfolioProject document found for ${project.slug}`);
  }

  const asset = await client.assets.upload(
    "image",
    createReadStream(project.imagePath),
    {
      filename: project.imagePath.split("/").at(-1),
      title: project.title,
    }
  );

  await client
    .patch(documentId)
    .set({
      order: project.order,
      title: project.title,
      slug: { _type: "slug", current: project.slug },
      tags: project.tags,
      coverImage: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
        alt: project.alt,
      },
    })
    .unset(["alt", "image", "mobileImageHeight", "desktopImageHeight"])
    .commit();

  console.log(`Updated ${project.title}`);
}
