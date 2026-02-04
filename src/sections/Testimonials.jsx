import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { testimonials } from '../data/products'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      let next = prev + newDirection
      if (next < 0) next = testimonials.length - 1
      if (next >= testimonials.length) next = 0
      return next
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000)
    return () => clearInterval(timer)
  }, [paginate])

  return (
    <section id="testimoniale" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-lavender/10 to-cream" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose/20 rounded-full blur-3xl" />

      {/* Floating quotes */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 text-8xl text-lavender/10 font-display"
      >
        "
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-8xl text-rose/10 font-display rotate-180"
      >
        "
      </motion.div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
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
              ✦ Testimoniale ✦
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-6">
            Ce Spun
            <span className="text-gradient italic font-light"> Clienții</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Large Quote Mark */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-burgundy/5 font-display text-[150px] leading-none select-none z-0">
            "
          </div>

          <div className="relative overflow-hidden touch-pan-y">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x
                  if (swipe < -1000 || offset.x < -50) {
                    paginate(1)
                  } else if (swipe > 1000 || offset.x > 50) {
                    paginate(-1)
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-6 h-6 text-rose drop-shadow-sm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-burgundy leading-relaxed mb-10 max-w-3xl mx-auto">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-burgundy flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-display text-xl font-bold text-burgundy">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="font-body text-sm text-burgundy/50">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation - Below the slide */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-burgundy shadow-lg flex items-center justify-center text-cream hover:bg-rose transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-10 h-3 bg-burgundy'
                      : 'w-3 h-3 bg-burgundy/20 hover:bg-burgundy/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-burgundy shadow-lg flex items-center justify-center text-cream hover:bg-rose transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
