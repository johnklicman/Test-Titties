import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const defaultTestimonials = [
    {
      _id: '1',
      name: 'Sarah Johnson',
      role: 'Homeowner',
      testimonial: 'Slater Painting did an amazing job on our home interior. Professional, clean, and the results are stunning!',
      rating: 5,
      location: 'Greenville, SC',
    },
    {
      _id: '2',
      name: 'Michael Chen',
      role: 'Business Owner',
      testimonial: 'Outstanding service! They transformed our office space and worked around our business hours. Highly recommend!',
      rating: 5,
      location: 'Greenville, SC',
    },
    {
      _id: '3',
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      testimonial: 'From color consultation to final touches, everything was perfect. Will definitely use them again!',
      rating: 5,
      location: 'Greenville, SC',
    },
  ] as Testimonial[]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary/5 to-accent">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(testimonial.avatar).width(100).height(100).url()}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.location && ` • ${testimonial.location}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">100%</p>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary mb-2">A+</p>
            <p className="text-gray-600">BBB Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}

