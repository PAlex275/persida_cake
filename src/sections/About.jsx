import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    { value: '10+', label: 'Ani Experiență' },
    { value: '5000+', label: 'Clienți Fericiți' },
    { value: '200+', label: 'Rețete Unice' },
    { value: '50+', label: 'Premii' },
  ]

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Calitate Premium",
      description: "Ingrediente de cea mai înaltă calitate, selectate cu grijă"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pasiune Artizanală",
      description: "Fiecare desert este creat manual, cu dragoste și atenție"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "100% Natural",
      description: "Zero conservanți, zero aditivi artificiali"
    }
  ]

  return (
    <section id="despre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/20 to-cream" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-lavender/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose/20 to-transparent rounded-full blur-3xl" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-24 h-24 border border-lavender/30 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-br from-rose/30 to-lavender/30 rounded-lg"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Gradient border frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-lavender via-rose to-burgundy rounded-lg opacity-20" />
              <div className="absolute -inset-3 bg-cream rounded-lg" />

              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/E3B79D1B-7A44-4A62-B651-BF2FC9E056C8.JPG"
                  alt="Artisanal pastry chef at work"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent" />
              </div>

            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-lavender/20 to-rose/20 border border-lavender/30 mb-6"
            >
              <span className="font-body text-xs font-semibold text-burgundy tracking-[0.2em] uppercase">
                ✦ Despre Noi ✦
              </span>
            </motion.div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-4 sm:mb-6 leading-tight">
              Povestea
              <span className="block text-gradient italic font-light">Noastră</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 font-body text-burgundy/70 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg">
              <p>
                Din 2015, <span className="text-burgundy font-semibold">Persida's Cake</span> transformă ingrediente simple în opere de artă
                comestibile. Am început cu o pasiune pentru cofetărie și o dorință de a
                crea experiențe memorabile.
              </p>
              <p>
                Fiecare tort, fiecare macaron, fiecare desert este rezultatul orelor de
                muncă și al <span className="text-rose font-semibold">pasiunii noastre pentru perfecțiune</span>. Credem că dulciurile
                nu sunt doar mâncare – sunt emoții, amintiri și momente de fericire.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-lavender/10 hover:to-transparent transition-all duration-300"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-lavender to-rose flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-burgundy mb-1">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-burgundy/60">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <span className="font-body text-[10px] sm:text-xs text-burgundy/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
