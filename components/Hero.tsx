import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { SiteSettings } from '@/lib/types'

interface HeroProps {
  settings?: SiteSettings
}

export default function Hero({ settings }: HeroProps) {
  const heroTitle = settings?.heroTitle || 'Professional Painting & Staining Services'
  const heroSubtitle = settings?.heroSubtitle || 'Expert craftsmanship and color consultation for Greenville homes and businesses'
  const heroImage = settings?.heroImage

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImage ? (
          <Image
            src={urlFor(heroImage).width(1920).height(1080).url()}
            alt="Hero background"
            fill
            className="object-cover filter grayscale brightness-75"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] container-custom text-center text-white px-4">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in">
          Proudly Serving Greenville, SC
        </p>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up"
          dangerouslySetInnerHTML={{ __html: heroTitle }}
        />
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in">
          {heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Link href="#contact" className="btn-primary text-lg px-10 py-5">
            Get Free Estimate
          </Link>
          <Link href="#services" className="btn-secondary text-lg px-10 py-5 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            View Our Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

