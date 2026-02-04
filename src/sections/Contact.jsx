import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Locație",
      details: "Str. Florilor nr. 25, București",
      color: "from-lavender to-rose"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      details: "+40 700 123 456",
      color: "from-rose to-burgundy"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: "contact@persidascake.ro",
      color: "from-burgundy to-lavender"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Program",
      details: "Luni - Sâmbătă: 09:00 - 20:00",
      color: "from-lavender to-blush"
    },
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy via-burgundy to-rose/80" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-40 h-40 bg-lavender/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-rose/10 rounded-full blur-3xl" />
      </div>

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-32 text-6xl opacity-10"
      >
        💌
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-32 text-5xl opacity-10"
      >
        🎂
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
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
            className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="font-body text-xs font-semibold text-cream tracking-[0.2em] uppercase">
              ✦ Contact ✦
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Hai să
            <span className="text-blush italic font-light"> Vorbim</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-white/60 max-w-lg mx-auto px-4">
            Ai întrebări sau vrei să plasezi o comandă specială?
            Suntem aici să te ajutăm.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-dark rounded-3xl p-8 shadow-2xl border border-white/10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-lavender to-rose flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">
                    Mesaj trimis! 🎉
                  </h4>
                  <p className="font-body text-white/60">
                    Vom reveni cu un răspuns în cel mai scurt timp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2 font-medium">
                        Nume
                      </label>
                      <input
                        {...register('name', { required: true })}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all duration-300 ${
                          errors.name ? 'border-rose' : 'border-white/10'
                        }`}
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white/70 mb-2 font-medium">
                        Telefon
                      </label>
                      <input
                        {...register('phone', { required: true })}
                        className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all duration-300 ${
                          errors.phone ? 'border-rose' : 'border-white/10'
                        }`}
                        placeholder="+40 700 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-white/70 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                      className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all duration-300 ${
                        errors.email ? 'border-rose' : 'border-white/10'
                      }`}
                      placeholder="email@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm text-white/70 mb-2 font-medium">
                      Mesaj
                    </label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={4}
                      className={`w-full px-5 py-4 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-lavender/50 transition-all duration-300 resize-none ${
                        errors.message ? 'border-rose' : 'border-white/10'
                      }`}
                      placeholder="Descrie-ne dorințele tale..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 rounded-xl bg-cream text-burgundy font-body font-semibold tracking-wide hover:bg-blush hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Se trimite...
                      </span>
                    ) : (
                      'Trimite mesajul ✨'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-dark rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-burgundy/50 flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg">
                    {info.icon}
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-white/50">
                    {info.details}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388557396!2d26.0849731!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff427bee28c1%3A0x72f25648b8cf0b1b!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
