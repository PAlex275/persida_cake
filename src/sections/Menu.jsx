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
    { id: 'evenimente', name: 'Evenimente', icon: '💒' },
  ]

  return (
    <section id="meniu" className="relative py-24 lg:py-32 bg-burgundy overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blush/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />

        {/* Decorative Line Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <pattern id="menu-lines" patternUnits="userSpaceOnUse" width="100" height="100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="#E8D6CB" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#menu-lines)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold text-lavender tracking-widest uppercase">
            Oferta Noastră
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
            Meniu & Prețuri
          </h2>
          <p className="font-body text-cream/70 max-w-2xl mx-auto mb-8">
            Descoperă întreaga noastră colecție de deserturi și alege preferatele tale.
            Toate prețurile sunt în Lei și pot varia în funcție de personalizări.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lavender via-rose to-blush rounded-full" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-burgundy'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cream rounded-full shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left: Description & Image */}
            <div className="space-y-6">
              <div className="p-8 bg-cream/10 backdrop-blur-sm rounded-3xl border border-cream/10">
                <h3 className="font-display text-2xl font-bold text-cream mb-3">
                  {menuItems[activeTab].title}
                </h3>
                <p className="font-body text-cream/70 mb-6">
                  {menuItems[activeTab].description}
                </p>

                {/* Featured Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/50 to-transparent" />
                </div>
              </div>

              {/* Order CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-r from-lavender/20 to-rose/20 rounded-2xl border border-cream/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-cream">
                      Vrei să comanzi?
                    </h4>
                    <p className="font-body text-sm text-cream/70">
                      Contactează-ne pentru comenzi personalizate
                    </p>
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="px-6 py-3 bg-cream text-burgundy font-body font-semibold rounded-full hover:bg-blush transition-colors duration-300"
                  >
                    Comandă
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right: Menu Items */}
            <div className="space-y-4">
              {menuItems[activeTab].items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group p-5 bg-cream/5 hover:bg-cream/10 rounded-2xl border border-cream/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-display text-lg font-semibold text-cream group-hover:text-blush transition-colors">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm text-cream/60 mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="font-display text-xl font-bold text-lavender">
                        {item.price}
                      </span>
                    </div>
                  </div>

                  {/* Hover Decoration */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-lavender to-transparent mt-3 transition-all duration-500" />
                </motion.div>
              ))}

              {/* Note */}
              <div className="p-4 bg-cream/5 rounded-xl border border-cream/10 mt-6">
                <p className="font-body text-xs text-cream/50 italic text-center">
                  * Prețurile pot varia în funcție de design și personalizări.
                  Contactați-ne pentru o ofertă personalizată.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Menu
