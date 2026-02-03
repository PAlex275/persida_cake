import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute inset-0 scale-110"
        >
          <img
            src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=1920&q=80"
            alt="Artisanal pastries"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/60 via-burgundy/40 to-burgundy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/50 via-transparent to-burgundy/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-32 h-32 border border-lavender/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[15%] w-24 h-24 border border-blush/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-[25%] w-16 h-16 bg-lavender/10 rounded-full blur-xl"
        />

        {/* Corner decorations */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-cream/10" viewBox="0 0 100 100" fill="none">
          <path d="M10 90 L10 10 L90 10" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-20 right-10 w-32 h-32 text-cream/10" viewBox="0 0 100 100" fill="none">
          <path d="M90 10 L90 90 L10 90" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-cream/30 bg-cream/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-lavender animate-pulse" />
          <span className="font-body text-sm text-cream/90 tracking-wide">Din 2015 creăm momente dulci</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-6"
        >
          <span className="block">Persida's</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blush via-lavender to-rose"
          >
            Cake
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-xl md:text-2xl lg:text-3xl italic text-cream/80 mb-4"
        >
          Arta dulceții artizanale
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-lavender to-transparent mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-body text-base md:text-lg text-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Deserturi artizanale create cu pasiune, ingrediente premium și atenție la fiecare detaliu.
          Transformăm momentele speciale în amintiri de neuitat.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(181, 141, 182, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#galerie')}
            className="px-8 py-4 bg-gradient-to-r from-lavender to-rose text-white font-body font-semibold tracking-wide rounded-full shadow-xl shadow-lavender/20 transition-all duration-300"
          >
            Descoperă Colecția
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(232, 214, 203, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 border-2 border-cream/50 text-cream font-body font-semibold tracking-wide rounded-full backdrop-blur-sm hover:border-cream transition-all duration-300"
          >
            Rezervă Acum
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#despre')}
        >
          <span className="font-body text-xs text-cream/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-cream/50 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
