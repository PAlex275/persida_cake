import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle scroll to section after navigation to home page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location, isHomePage])

  const navLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'Colecția', href: '/produse' },
    { name: 'Despre', href: '/#despre' },
    { name: 'Galerie', href: '/#galerie' },
    { name: 'Meniu', href: '/#meniu' },
    { name: 'Servicii', href: '/#servicii' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith('/#')) {
      e.preventDefault()
      const sectionId = href.substring(2)

      if (isHomePage) {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home page with hash using React Router
        navigate('/' + '#' + sectionId)
      }
    }
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
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-br from-lavender to-rose'
                : 'bg-cream/90'
            }`}
          >
            <img
              src="/images/logo.JPG"
              alt="Persida's Cake"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.innerHTML = '<span class="font-display text-xl font-bold text-cream">P</span>'
              }}
            />
          </motion.div>
          <div className={`font-display transition-colors duration-300 ${isScrolled ? 'text-cream' : 'text-burgundy'}`}>
            <span className="text-xl font-semibold tracking-wide">Persida's</span>
            <span className="block text-sm font-light italic -mt-1 tracking-wider">Cake</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              {link.href.startsWith('/#') ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isScrolled ? 'text-cream/80 hover:text-cream' : 'text-burgundy/80 hover:text-burgundy'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                    isScrolled ? 'bg-lavender' : 'bg-rose'
                  }`} />
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    isScrolled ? 'text-cream/80 hover:text-cream' : 'text-burgundy/80 hover:text-burgundy'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-3/4 ${
                    isScrolled ? 'bg-lavender' : 'bg-rose'
                  }`} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden lg:block"
        >
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'bg-rose text-white shadow-lg hover:bg-burgundy hover:shadow-xl'
                : 'bg-rose text-white hover:bg-burgundy'
            }`}
          >
            Rezervă Acum
          </a>
        </motion.div>

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
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/90 hover:text-cream font-body text-lg font-medium tracking-wide py-2"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-cream/90 hover:text-cream font-body text-lg font-medium tracking-wide py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.a
                href="/#contact"
                onClick={(e) => handleNavClick(e, '/#contact')}
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
