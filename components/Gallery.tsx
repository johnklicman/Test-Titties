'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Project } from '@/lib/types'

interface GalleryProps {
  projects: Project[]
}

export default function Gallery({ projects }: GalleryProps) {
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', 'interior', 'exterior', 'commercial', 'residential', 'staining']
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="inspiration" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Project Gallery</h2>
        <p className="section-subtitle">
          See the quality of our work and get inspired for your next project
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                <Image
                  src={urlFor(project.image).width(600).height(450).url()}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.description && (
                      <p className="text-sm text-gray-200 mb-2">{project.description}</p>
                    )}
                    {project.location && (
                      <p className="text-sm text-gray-300">📍 {project.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
            <p className="text-gray-400 mt-2">Check back soon for more amazing work!</p>
          </div>
        )}
      </div>
    </section>
  )
}

