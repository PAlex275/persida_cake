import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GalleryCard from '../components/GalleryCard'
import { products, categories } from '../data/products'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="galerie" className="relative py-24 lg:py-32 bg-gradient-to-b from-cream to-blush/20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />

        {/* Decorative patterns */}
        <svg className="absolute top-10 right-10 w-48 h-48 text-burgundy/5" viewBox="0 0 100 100">
          <pattern id="dots" patternUnits="userSpaceOnUse" width="10" height="10">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold text-rose tracking-widest uppercase">
            Colecția Noastră
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mt-4 mb-6">
            Galerie de Creații
          </h2>
          <p className="font-body text-burgundy/70 max-w-2xl mx-auto mb-8">
            Fiecare desert este o poveste în sine. Descoperă creațiile noastre și lasă-te inspirat
            pentru următoarea ta ocazie specială.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lavender via-rose to-blush rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-burgundy text-cream shadow-lg shadow-burgundy/30'
                  : 'bg-white text-burgundy hover:bg-blush/30 border border-blush/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GalleryCard product={product} index={index % 8} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(173, 106, 108, 0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose to-burgundy text-cream font-body font-semibold rounded-full transition-all duration-300"
          >
            Vezi toată colecția
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
