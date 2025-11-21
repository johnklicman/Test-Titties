import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Slater Painting</h3>
            <p className="text-gray-400 mb-4">
              Professional painting and staining services serving Greenville, SC and surrounding areas.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>📞 <a href="tel:6199528685" className="hover:text-white transition-colors">(619) 952-8685</a></p>
              <p>✉️ <a href="mailto:slaterpainting864@gmail.com" className="hover:text-white transition-colors">slaterpainting864@gmail.com</a></p>
              <p>📍 Serving Greenville, SC 29601</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors">Interior Painting</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Exterior Painting</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Cabinet Refinishing</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Deck Staining</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#inspiration" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Free Estimate</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Slater Painting. All rights reserved. Licensed & Insured in South Carolina.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

