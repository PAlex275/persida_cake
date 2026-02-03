import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services } from '../data/products'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="servicii" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blush/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />

        {/* Decorative Elements */}
        <svg className="absolute top-20 right-20 w-32 h-32 text-burgundy/5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-rose tracking-widest uppercase">
            Ce Oferim
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mt-4 mb-6">
            Serviciile Noastre
          </h2>
          <p className="font-body text-burgundy/70 max-w-2xl mx-auto mb-8">
            De la torturi de nuntă spectaculoase la deserturi pentru petreceri private,
            suntem aici să transformăm fiecare eveniment într-o experiență dulce de neuitat.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lavender via-rose to-blush rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/20 to-transparent" />

                  {/* Service Number */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-cream/90 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-burgundy">
                      0{service.id}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display text-2xl font-bold text-cream">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-body text-burgundy/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-3 font-body text-sm text-burgundy/80"
                      >
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-lavender/30 to-rose/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-rose hover:text-burgundy transition-colors duration-300"
                  >
                    Solicită ofertă
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-lavender/30 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-burgundy to-rose rounded-3xl">
            <h3 className="font-display text-2xl font-bold text-cream mb-3">
              Ai o idee specială în minte?
            </h3>
            <p className="font-body text-cream/80 mb-6 max-w-md">
              Contactează-ne pentru a discuta despre proiectul tău unic.
              Transformăm orice vis dulce în realitate.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-burgundy font-body font-semibold rounded-full hover:bg-blush transition-colors duration-300"
            >
              Începe o conversație
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
