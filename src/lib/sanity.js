import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-04-26', 
});

export async function fetchNewsPosts() {
  // Fetch posts and expand the mainImage reference to get the actual URL
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    excerpt
  }`;
  
  try {
    const posts = await sanityClient.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching Sanity posts:", error);
    return [];
  }
}

export async function fetchPostBySlug(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    excerpt,
    body
  }`;
  
  try {
    const post = await sanityClient.fetch(query, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching Sanity post:", error);
    return null;
  }
}
