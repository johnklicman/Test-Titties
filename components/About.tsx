export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Your Trusted Painting Professionals in Greenville
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience serving the Greenville community, Slater Painting 
              has built a reputation for excellence, reliability, and craftsmanship.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in transforming homes and businesses throughout the Greenville area, 
              bringing our clients' visions to life with precision and care. From color consultation 
              to the final brushstroke, we're committed to delivering results that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Licensed & Insured</h4>
                  <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Quality Materials</h4>
                  <p className="text-gray-600">We use only premium paints and materials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Customer Satisfaction</h4>
                  <p className="text-gray-600">100% satisfaction guarantee on all projects</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              Start Your Project Today
            </a>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform mt-8">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform -mt-8">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Quality Work</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform">
                <div className="text-5xl font-bold text-primary mb-2">A+</div>
                <div className="text-gray-600">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

