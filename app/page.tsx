import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { 
  getServices, 
  getProjects, 
  getTestimonials, 
  getSiteSettings 
} from '@/lib/sanity'

export const revalidate = 60 // Revalidate every 60 seconds (ISR)

export default async function Home() {
  // Fetch data from Sanity CMS
  const [services, projects, testimonials, settings] = await Promise.all([
    getServices().catch(() => []),
    getProjects().catch(() => []),
    getTestimonials().catch(() => []),
    getSiteSettings().catch(() => null),
  ])

  return (
    <>
      <Hero settings={settings} />
      <Services services={services} />
      <Process />
      <Gallery projects={projects} />
      <Testimonials testimonials={testimonials} />
      <About />
      <Contact />
    </>
  )
}

