import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { services } from '../data/products'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="servicii" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/20 to-lavender/10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-lavender/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-rose/20 to-transparent rounded-full blur-3xl" />

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-lavender/40 to-rose/40 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-16 w-20 h-20 rounded-lg bg-gradient-to-br from-rose/30 to-burgundy/30 blur-sm"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-lavender/20 to-rose/20 border border-lavender/30 mb-6"
          >
            <span className="font-body text-xs font-semibold text-burgundy tracking-[0.2em] uppercase">
              ✦ Ce Oferim ✦
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-4 sm:mb-6">
            Servicii
            <span className="text-gradient italic font-light"> Premium</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-burgundy/60 leading-relaxed">
            De la torturi de nuntă spectaculoase la deserturi pentru petreceri private,
            suntem aici să transformăm fiecare eveniment într-o experiență dulce de neuitat.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-burgundy/20 to-transparent group-hover:from-burgundy/70 transition-all duration-500" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="font-display text-xl font-bold text-gradient">
                        0{service.id}
                      </span>
                    </div>
                  </div>

                  {/* Floating badge on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="px-4 py-2 rounded-full bg-white text-burgundy font-body text-sm font-semibold shadow-lg">
                      Află mai multe →
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-burgundy mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm text-burgundy/60 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-body text-sm text-burgundy/70">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-lavender/30 to-rose/30 flex items-center justify-center">
                          <svg className="w-3 h-3 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-burgundy text-cream font-body text-sm font-semibold hover:bg-rose hover:shadow-lg transition-all duration-300"
                  >
                    Solicită ofertă
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
