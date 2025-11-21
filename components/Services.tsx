import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Service } from '@/lib/types'

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  const defaultServices = [
    {
      _id: '1',
      title: 'Interior Painting',
      icon: '🎨',
      description: 'Transform your indoor spaces with precision painting that brings your vision to life.',
      features: ['Color Consultation', 'Wall Preparation', 'Clean Finish'],
    },
    {
      _id: '2',
      title: 'Exterior Painting',
      icon: '🏡',
      description: 'Protect and beautify your home exterior with weather-resistant premium paints.',
      features: ['Pressure Washing', 'Surface Repair', 'Premium Paints'],
    },
    {
      _id: '3',
      title: 'Cabinet Refinishing',
      icon: '✨',
      description: 'Give your kitchen a fresh look without the cost of full cabinet replacement.',
      features: ['Custom Colors', 'Professional Finish', 'Quick Turnaround'],
    },
    {
      _id: '4',
      title: 'Deck & Fence Staining',
      icon: '🪵',
      description: 'Preserve and enhance your outdoor wood structures with expert staining.',
      features: ['Wood Treatment', 'UV Protection', 'Long-lasting Results'],
    },
  ] as Service[]

  const displayServices = services.length > 0 ? services : defaultServices

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional painting solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayServices.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {service.image ? (
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(service.image).width(400).height(300).url()}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="text-5xl mb-4">{service.icon}</div>
              )}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

