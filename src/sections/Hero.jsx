import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Elegant Pattern Background */}
      <div className="absolute inset-0">
        {/* Main pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="elegantPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              {/* Diamond shape */}
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#5D2E46" strokeWidth="0.5"/>
              {/* Inner diamond */}
              <path d="M30 10 L50 30 L30 50 L10 30 Z" fill="none" stroke="#5D2E46" strokeWidth="0.3"/>
              {/* Center dot */}
              <circle cx="30" cy="30" r="2" fill="#5D2E46"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegantPattern)"/>
        </svg>

        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-transparent to-cream/60" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full border border-burgundy/5" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full border border-burgundy/5" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full border border-burgundy/5" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full border border-burgundy/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block h-px bg-burgundy/30 mb-8"
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-px bg-rose" />
              <span className="font-body text-xs font-medium text-rose tracking-[0.2em] uppercase">
                Din 2015
              </span>
              <span className="w-8 h-px bg-rose" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-burgundy mb-4 leading-[1.1]"
            >
              Persida's
              <span className="block font-light italic text-rose">Cake</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-xl md:text-2xl text-burgundy/60 mb-6 italic"
            >
              Arta dulceții artizanale
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-body text-burgundy/70 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Creăm deserturi artizanale cu ingrediente premium și pasiune pentru perfecțiune.
              Fiecare creație este o poveste de neuitat.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/produse"
                className="group relative px-8 py-4 bg-burgundy text-cream font-body font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10">Descoperă Colecția</span>
                <div className="absolute inset-0 bg-rose translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-8 py-4 border border-burgundy/30 text-burgundy font-body font-medium tracking-wide hover:border-burgundy hover:bg-burgundy hover:text-cream transition-all duration-300"
              >
                Rezervări
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-12 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-burgundy/10"
            >
              {[
                { number: "10+", label: "Ani experiență" },
                { number: "5000+", label: "Creații" },
                { number: "300+", label: "Nunți" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-display text-xl sm:text-2xl md:text-3xl font-medium text-burgundy">
                    {stat.number}
                  </span>
                  <span className="font-body text-[10px] sm:text-xs text-burgundy/50 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 lg:hidden"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mx-auto max-w-sm">
                <img
                  src="/images/1601F8F8-9936-495F-9501-52FEC341407E.JPG"
                  alt="Tort artizanal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-burgundy/10" />
              <div className="absolute -inset-8 border border-burgundy/5" />

              {/* Pattern accent */}
              <svg className="absolute -top-12 -right-12 w-24 h-24 text-burgundy/10" viewBox="0 0 100 100">
                <pattern id="heroAccent" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                </pattern>
                <rect width="100" height="100" fill="url(#heroAccent)"/>
              </svg>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src="/images/1601F8F8-9936-495F-9501-52FEC341407E.JPG"
                  alt="Tort artizanal cu portocale și scorțișoară"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply" />
              </motion.div>

              {/* Text accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-cream px-4 py-6 shadow-lg"
              >
                <span className="font-display text-sm text-burgundy/70 writing-vertical">
                  Handcrafted with love
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#despre')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-burgundy/40 hover:text-burgundy transition-colors"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
