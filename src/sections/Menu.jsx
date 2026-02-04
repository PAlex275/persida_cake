import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { menuItems } from '../data/products'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('torturi')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tabs = [
    { id: 'torturi', name: 'Torturi', icon: '🎂' },
    { id: 'deserturi', name: 'Deserturi', icon: '🍰' },
    { id: 'macarons', name: 'Macarons', icon: '🌸' },
    { id: 'candy-bar', name: 'Candy Bar', icon: '🍭' },
  ]

  return (
    <section id="meniu" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy to-rose/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lavender/5 rounded-full blur-3xl" />
      </div>

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-24 text-6xl opacity-10"
      >
        🧁
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-24 text-5xl opacity-10"
      >
        🍪
      </motion.div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="font-body text-xs font-semibold text-cream tracking-[0.2em] uppercase">
              ✦ Meniu & Prețuri ✦
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Oferta
            <span className="text-blush italic font-light"> Noastră</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-white/60 max-w-lg mx-auto px-4">
            Descoperă întreaga colecție de deserturi și alege preferatele tale.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 pb-2 sm:pb-0 scrollbar-hide"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-body text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-burgundy shadow-xl'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <span className="mr-1.5 sm:mr-2">{tab.icon}</span>
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left: Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-dark rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {menuItems[activeTab].title}
              </h3>
              <p className="font-body text-white/60 mb-6 leading-relaxed">
                {menuItems[activeTab].description}
              </p>

              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={`https://images.unsplash.com/photo-${
                    activeTab === 'torturi' ? '1578985545062-69928b1d9587' :
                    activeTab === 'deserturi' ? '1550617931-e17a7b70dce2' :
                    activeTab === 'macarons' ? '1569864358642-9d1684040f43' :
                    '1535254973040-607b474cb50d'
                  }?w=600&q=80`}
                  alt={menuItems[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Menu Items */}
            <div className="space-y-3">
              {menuItems[activeTab].items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="group"
                >
                  <div className="glass-dark rounded-xl p-4 sm:p-5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-blush transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-white/50 mt-1 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cream">
                        <span className="font-display text-sm sm:text-lg font-bold text-burgundy whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-body text-xs text-white/40 italic text-center pt-4"
              >
                * Prețurile pot varia în funcție de personalizări
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Menu
