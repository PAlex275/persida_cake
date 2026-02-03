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
    // Simulate form submission
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
      details: ["Str. Florilor nr. 25", "București, Sector 1"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      details: ["+40 700 123 456", "+40 21 123 4567"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Program",
      details: ["Luni - Vineri: 09:00 - 20:00", "Sâmbătă: 10:00 - 18:00"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: ["contact@persidascake.ro", "comenzi@persidascake.ro"],
    },
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-burgundy overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lavender/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-lavender/5 rounded-full blur-3xl" />

        {/* Decorative Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <pattern id="contact-dots" patternUnits="userSpaceOnUse" width="40" height="40">
            <circle cx="2" cy="2" r="1" fill="#E8D6CB" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold text-lavender tracking-widest uppercase">
            Contact & Rezervări
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
            Hai să Vorbim
          </h2>
          <p className="font-body text-cream/70 max-w-2xl mx-auto mb-8">
            Ai întrebări sau vrei să plasezi o comandă specială?
            Suntem aici să te ajutăm să creezi momente dulci de neuitat.
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lavender via-rose to-blush rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 bg-cream/5 backdrop-blur-sm rounded-3xl border border-cream/10">
              <h3 className="font-display text-2xl font-bold text-cream mb-6">
                Trimite-ne un mesaj
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender to-rose flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-cream mb-2">
                    Mesaj trimis cu succes!
                  </h4>
                  <p className="font-body text-cream/70">
                    Vom reveni cu un răspuns în cel mai scurt timp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm text-cream/80 mb-2">
                        Nume complet *
                      </label>
                      <input
                        {...register('name', { required: 'Numele este obligatoriu' })}
                        className={`w-full px-4 py-3 bg-cream/10 border rounded-xl font-body text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-lavender/50 transition-all ${
                          errors.name ? 'border-rose' : 'border-cream/20'
                        }`}
                        placeholder="Ion Popescu"
                      />
                      {errors.name && (
                        <p className="mt-1 font-body text-xs text-rose">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block font-body text-sm text-cream/80 mb-2">
                        Telefon *
                      </label>
                      <input
                        {...register('phone', { required: 'Telefonul este obligatoriu' })}
                        className={`w-full px-4 py-3 bg-cream/10 border rounded-xl font-body text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-lavender/50 transition-all ${
                          errors.phone ? 'border-rose' : 'border-cream/20'
                        }`}
                        placeholder="+40 700 000 000"
                      />
                      {errors.phone && (
                        <p className="mt-1 font-body text-xs text-rose">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-sm text-cream/80 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email-ul este obligatoriu',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Adresă de email invalidă',
                        },
                      })}
                      className={`w-full px-4 py-3 bg-cream/10 border rounded-xl font-body text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-lavender/50 transition-all ${
                        errors.email ? 'border-rose' : 'border-cream/20'
                      }`}
                      placeholder="email@exemplu.ro"
                    />
                    {errors.email && (
                      <p className="mt-1 font-body text-xs text-rose">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block font-body text-sm text-cream/80 mb-2">
                      Tip eveniment
                    </label>
                    <select
                      {...register('eventType')}
                      className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-xl font-body text-cream focus:outline-none focus:ring-2 focus:ring-lavender/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-burgundy">Selectează tipul</option>
                      <option value="nunta" className="bg-burgundy">Nuntă</option>
                      <option value="botez" className="bg-burgundy">Botez</option>
                      <option value="aniversare" className="bg-burgundy">Aniversare</option>
                      <option value="corporate" className="bg-burgundy">Eveniment corporate</option>
                      <option value="comanda" className="bg-burgundy">Comandă simplă</option>
                      <option value="altele" className="bg-burgundy">Altele</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm text-cream/80 mb-2">
                      Mesajul tău *
                    </label>
                    <textarea
                      {...register('message', { required: 'Mesajul este obligatoriu' })}
                      rows={4}
                      className={`w-full px-4 py-3 bg-cream/10 border rounded-xl font-body text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-lavender/50 transition-all resize-none ${
                        errors.message ? 'border-rose' : 'border-cream/20'
                      }`}
                      placeholder="Descrie-ne dorințele tale..."
                    />
                    {errors.message && (
                      <p className="mt-1 font-body text-xs text-rose">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-lavender to-rose text-white font-body font-semibold rounded-xl shadow-lg shadow-lavender/20 hover:shadow-xl hover:shadow-lavender/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
                      'Trimite mesajul'
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
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-5 bg-cream/5 rounded-2xl border border-cream/10 hover:border-lavender/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender/20 to-rose/20 flex items-center justify-center text-lavender mb-4">
                    {info.icon}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-cream mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-body text-sm text-cream/70">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-2xl overflow-hidden border border-cream/10"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388557396!2d26.0849731!3d44.4267674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff427bee28c1%3A0x72f25648b8cf0b1b!2sBucharest%2C%20Romania!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Persida's Cake Location"
              />
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 bg-gradient-to-r from-lavender/20 to-rose/20 rounded-2xl border border-cream/10"
            >
              <h4 className="font-display text-lg font-semibold text-cream mb-3">
                Preferi să suni direct?
              </h4>
              <p className="font-body text-sm text-cream/70 mb-4">
                Echipa noastră este disponibilă pentru a răspunde întrebărilor tale.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="tel:+40700123456"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream text-burgundy font-body font-semibold rounded-full hover:bg-blush transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Sună acum
                </motion.a>
                <motion.a
                  href="https://wa.me/40700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-body font-semibold rounded-full hover:bg-[#20bd5a] transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
