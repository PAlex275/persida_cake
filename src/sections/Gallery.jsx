import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { products, categories } from '../data/products'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProducts = activeCategory === 'all'
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory).slice(0, 6)

  return (
    <section id="galerie" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-blush/10 to-cream" />

      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/20 rounded-full blur-3xl" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-1/4 w-20 h-20 border-2 border-lavender/20 rounded-full"
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-lavender/20 to-rose/20 border border-lavender/30 mb-6"
          >
            <span className="font-body text-xs font-semibold text-burgundy tracking-[0.2em] uppercase">
              ✦ Colecția Noastră ✦
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-6">
            Creații
            <span className="text-gradient italic font-light"> Selectate</span>
          </h2>

          <p className="font-body text-lg text-burgundy/60 max-w-2xl mx-auto">
            Fiecare desert este creat cu atenție la detalii, ingrediente premium
            și multă pasiune. Descoperă câteva din creațiile noastre preferate.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-burgundy text-cream shadow-lg'
                  : 'bg-white/50 text-burgundy hover:bg-white hover:shadow-md border border-burgundy/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-burgundy font-body text-xs font-semibold tracking-wide capitalize shadow-lg">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      animate={{ y: hoveredId === product.id ? 0 : 10, opacity: hoveredId === product.id ? 1 : 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-display text-xl font-bold text-white mb-1">
                        {product.name}
                      </h3>
                      <p className="font-body text-sm text-white/70 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-white">
                          {product.price} <span className="text-sm font-normal">lei</span>
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-full bg-white text-burgundy font-body text-sm font-semibold hover:bg-cream transition-colors duration-300"
                        >
                          Comandă
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/produse">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-burgundy text-cream font-body font-semibold tracking-wide shadow-xl hover:bg-rose hover:shadow-2xl transition-all duration-300"
            >
              Vezi întreaga colecție
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
