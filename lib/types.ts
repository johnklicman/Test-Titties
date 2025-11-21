export interface Service {
  _id: string
  title: string
  slug: { current: string }
  icon: string
  description: string
  features: string[]
  image?: any
  order?: number
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  category: string
  image: any
  description?: string
  location?: string
  completedDate?: string
  featured: boolean
}

export interface Testimonial {
  _id: string
  name: string
  role?: string
  testimonial: string
  rating: number
  location?: string
  avatar?: any
  featured: boolean
  publishedAt?: string
}

export interface SiteSettings {
  title: string
  description: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  serviceArea: string
  heroTitle: string
  heroSubtitle: string
  heroImage: any
  socialLinks: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

