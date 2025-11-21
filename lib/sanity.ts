import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Query functions
export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(_createdAt desc)`)
}

export async function getFeaturedProjects() {
  return client.fetch(`*[_type == "project" && featured == true] | order(_createdAt desc)[0...6]`)
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(publishedAt desc)`)
}

export async function getFeaturedTestimonials() {
  return client.fetch(`*[_type == "testimonial" && featured == true] | order(publishedAt desc)[0...3]`)
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}

