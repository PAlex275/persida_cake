import { motion } from 'framer-motion'

const GalleryCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-cream shadow-lg">
        {/* Image Container */}
        <div className="aspect-[4/5] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="space-y-2"
          >
            <span className="inline-block px-3 py-1 bg-lavender/80 text-cream text-xs font-body font-medium rounded-full capitalize">
              {product.category}
            </span>
            <h3 className="font-display text-xl font-semibold text-cream">
              {product.name}
            </h3>
            <p className="font-body text-sm text-cream/80 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-display text-2xl font-bold text-blush">
                {product.price} <span className="text-sm font-normal">lei</span>
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-cream text-burgundy font-body text-sm font-semibold rounded-full hover:bg-blush transition-colors duration-300"
              >
                Comandă
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cream/0 group-hover:border-cream/50 transition-all duration-500 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cream/0 group-hover:border-cream/50 transition-all duration-500 rounded-bl-lg" />
      </div>

      {/* Static Price Badge */}
      <div className="absolute top-4 left-4 px-3 py-1.5 glass rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <span className="font-display text-sm font-bold text-burgundy">
          {product.price} lei
        </span>
      </div>
    </motion.div>
  )
}

export default GalleryCard
