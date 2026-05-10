import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'ousbvhh0', // Dentos-Chamo-Studio Project ID
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-05-01', // Use current date
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

export const fetchNewsPosts = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    excerpt
  }`;
  try {
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    body,
    "authorName": author->name
  }`;
  try {
    return await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
