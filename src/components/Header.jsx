import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Acasă', href: '#hero' },
    { name: 'Despre', href: '#despre' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Meniu', href: '#meniu' },
    { name: 'Servicii', href: '#servicii' },
    { name: 'Recenzii', href: '#testimoniale' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass-dark shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold transition-all duration-300 ${
            isScrolled
              ? 'bg-gradient-to-br from-lavender to-rose text-cream'
              : 'bg-cream/90 text-burgundy'
          }`}>
            P
          </div>
          <div className={`font-display transition-colors duration-300 ${isScrolled ? 'text-cream' : 'text-burgundy'}`}>
            <span className="text-xl font-semibold tracking-wide">Persida's</span>
            <span className="block text-sm font-light italic -mt-1 tracking-wider">Cake</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                isScrolled ? 'text-cream/80 hover:text-cream' : 'text-burgundy/80 hover:text-burgundy'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                isScrolled ? 'bg-lavender' : 'bg-rose'
              }`} />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`hidden lg:block px-6 py-2.5 rounded-full font-body text-sm font-semibold tracking-wide transition-all duration-300 ${
            isScrolled
              ? 'bg-gradient-to-r from-lavender to-rose text-white shadow-lg shadow-rose/30'
              : 'bg-burgundy text-cream hover:bg-rose'
          }`}
        >
          Rezervă Acum
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
            isScrolled ? 'text-cream' : 'text-burgundy'
          }`}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-0.5 bg-current transition-colors"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current transition-colors"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col items-center gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="text-cream/90 hover:text-cream font-body text-lg font-medium tracking-wide py-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-lavender to-rose text-white font-body font-semibold tracking-wide"
              >
                Rezervă Acum
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
