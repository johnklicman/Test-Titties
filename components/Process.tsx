export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, preferences, and provide expert color consultation.',
      icon: '💬',
    },
    {
      number: '02',
      title: 'Free Estimate',
      description: 'Receive a detailed, transparent quote with no hidden fees or surprises.',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Preparation',
      description: 'Thorough surface prep including cleaning, repairs, and protection of your property.',
      icon: '🔧',
    },
    {
      number: '04',
      title: 'Transformation',
      description: 'Expert application of premium paints with meticulous attention to detail.',
      icon: '🎨',
    },
    {
      number: '05',
      title: 'Final Walk-Through',
      description: 'We review the completed work together to ensure your complete satisfaction.',
      icon: '✓',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          A proven 5-step approach to delivering exceptional results every time
        </p>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0 group"
            >
              {/* Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-primary">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-1 h-20 bg-gray-200 mx-auto mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-2xl p-6 group-hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary text-lg px-12 py-5">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

