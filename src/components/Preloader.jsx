import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(onComplete, 600)
    }, 2200)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/30 to-cream" />

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-lavender/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose/30 to-transparent rounded-full blur-3xl" />

          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-16 h-16 border border-lavender/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-rose/20 to-lavender/20 rounded-lg"
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              {/* Logo Circle */}
              <div className="relative inline-block mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-lavender via-rose to-burgundy p-1 shadow-2xl shadow-rose/30"
                >
                  <div className="w-full h-full rounded-full bg-cream flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/logo.JPG"
                      alt="Persida's Cake Logo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="font-display text-5xl font-bold text-gradient hidden items-center justify-center"
                    >
                      P
                    </motion.span>
                  </div>
                </motion.div>

                {/* Spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 border-2 border-transparent border-t-lavender border-r-rose rounded-full"
                />
              </div>

              {/* Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h1 className="font-display text-4xl font-bold text-burgundy tracking-wide">
                  Persida's
                  <span className="text-gradient"> Cake</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="font-body text-sm text-burgundy/50 tracking-[0.3em] uppercase mt-2"
                >
                  Cake Atelier
                </motion.p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-12 w-48 mx-auto"
              >
                <div className="h-1 bg-burgundy/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-burgundy via-rose to-lavender rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <p className="font-body text-xs text-burgundy/40 mt-3">
                  Se încarcă dulciurile...
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
