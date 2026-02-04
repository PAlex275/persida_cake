import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { products, categories } from "../data/products";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHashNavigation = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      navigate("/" + href.substring(1));
    }
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const categoryDescriptions = {
    all: "Descoperă întreaga noastră colecție de creații artizanale",
    torturi: "Torturi spectaculoase pentru momente de neuitat",
    deserturi: "Deserturi individuale rafinate și delicioase",
    macarons: "Delicatese franțuzești colorate și aromante",
    "candy-bar": "Pachete complete de deserturi pentru evenimente",
    "fara-gluten": "Deserturi delicioase fără gluten și fără zahăr adăugat",
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.02]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="productsPattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#5D2E46" />
                <circle cx="0" cy="0" r="1" fill="#5D2E46" />
                <circle cx="40" cy="0" r="1" fill="#5D2E46" />
                <circle cx="0" cy="40" r="1" fill="#5D2E46" />
                <circle cx="40" cy="40" r="1" fill="#5D2E46" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#productsPattern)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6 sm:mb-8 font-body text-xs sm:text-sm"
          >
            <Link
              to="/"
              className="text-burgundy/50 hover:text-burgundy transition-colors"
            >
              Acasă
            </Link>
            <span className="text-burgundy/30">/</span>
            <span className="text-burgundy">Colecția</span>
          </motion.div>

          {/* Title */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-px bg-burgundy/30" />
              <span className="font-body text-xs font-medium text-rose tracking-[0.2em] uppercase">
                Colecția Noastră
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-burgundy mb-4 sm:mb-6"
            >
              Creații
              <span className="block font-light italic text-rose">
                Artizanale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm sm:text-base text-burgundy/70 leading-relaxed"
            >
              Fiecare desert din colecția noastră este o expresie a pasiunii
              pentru cofetărie. Ingrediente premium, tehnici artizanale, gust
              desăvârșit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-16"
          >
            {/* Desktop Categories */}
            <div className="hidden md:flex items-center justify-center gap-1 p-1.5 bg-burgundy/5 border border-burgundy/10 max-w-fit mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-6 py-3 font-body text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? "text-cream"
                      : "text-burgundy/60 hover:text-burgundy"
                  }`}
                >
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-burgundy"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="md:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-4 px-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-body text-xs font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-burgundy text-cream"
                      : "bg-burgundy/5 text-burgundy/60 border border-burgundy/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Category Description */}
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center font-body text-xs sm:text-sm text-burgundy/50 mt-4 sm:mt-6"
            >
              {categoryDescriptions[activeCategory]}
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="group"
                >
                  <div className="relative">
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-blush/20">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProduct === product.id ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      />

                      {/* Category Tag */}
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-cream/90 text-burgundy font-body text-[10px] sm:text-xs font-medium tracking-wide capitalize">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="pt-3 sm:pt-5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display text-sm sm:text-lg font-medium text-burgundy group-hover:text-rose transition-colors duration-300 truncate">
                            {product.name}
                          </h3>
                          <p className="font-body text-xs sm:text-sm text-burgundy/50 mt-0.5 sm:mt-1 line-clamp-2 hidden sm:block">
                            {product.description}
                          </p>
                        </div>
                        <span className="font-display text-sm sm:text-lg font-medium text-burgundy flex-shrink-0">
                          {product.price}{" "}
                          <span className="text-xs sm:text-sm font-body text-burgundy/50">
                            lei
                          </span>
                        </span>
                      </div>

                      {/* Order Link */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: hoveredProduct === product.id ? "100%" : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="h-px bg-burgundy/20 mt-2 sm:mt-4 hidden sm:block"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="font-body text-burgundy/50">
                Nu există produse în această categorie momentan.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burgundy relative overflow-hidden">
        {/* Pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="ctaPattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 L60 30 L30 60 L0 30 Z"
                fill="none"
                stroke="#E8D6CB"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium text-cream mb-4">
              Ai ceva special în minte?
            </h2>
            <p className="font-body text-cream/70 mb-8 max-w-lg mx-auto">
              Creăm torturi și deserturi personalizate pentru orice ocazie.
              Spune-ne viziunea ta și o transformăm în realitate.
            </p>
            <a
              href="/#contact"
              onClick={(e) => handleHashNavigation(e, "/#contact")}
              className="inline-block px-8 py-4 bg-cream text-burgundy font-body font-medium tracking-wide hover:bg-blush transition-colors duration-300"
            >
              Solicită o ofertă personalizată
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
