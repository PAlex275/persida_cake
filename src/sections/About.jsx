import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Calitate Premium",
      description: "Folosim doar ingrediente de cea mai înaltă calitate, selectate cu grijă de la furnizori de încredere."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Pasiune Artizanală",
      description: "Fiecare desert este creat manual, cu dragoste și atenție la cele mai mici detalii."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ingrediente Naturale",
      description: "Zero conservanți, zero aditivi artificiali. Doar ingrediente naturale și proaspete."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Unicitate",
      description: "Creăm deserturi personalizate care reflectă povestea și stilul fiecărui client."
    }
  ]

  return (
    <section id="despre" className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blush/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <svg className="absolute top-20 left-1/4 w-64 h-64 text-burgundy/5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="40" strokeDasharray="20 15" />
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
          <span className="font-body text-sm font-semibold text-rose tracking-widest uppercase">
            Despre Noi
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mt-4 mb-6">
            Povestea Noastră
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lavender via-rose to-blush rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556217477-d325251ece38?w=800&q=80"
                  alt="Artisanal pastry chef"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 lg:-right-12 p-6 bg-white rounded-2xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-lavender to-rose flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-cream">10</span>
                  </div>
                  <div>
                    <span className="font-display text-lg font-semibold text-burgundy block">Ani de experiență</span>
                    <span className="font-body text-sm text-rose">în arta cofetăriei</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-lavender/30 rounded-3xl" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-burgundy/80 leading-relaxed">
              <span className="font-display text-5xl font-bold text-burgundy float-left mr-3 mt-1 leading-none">P</span>
              ersida's Cake s-a născut din dragostea pentru dulciuri și dorința de a crea experiențe memorabile.
              Din 2015, transformăm ingrediente simple în opere de artă comestibile care aduc bucurie în viețile clienților noștri.
            </p>

            <p className="font-body text-burgundy/70 leading-relaxed">
              Fiecare tort, fiecare macaron, fiecare desert este rezultatul orelor de muncă, al rețetelor
              rafinate în timp și al pasiunii noastre necondiționte pentru perfecțiune. Credem că dulciurile
              nu sunt doar mâncare – sunt emoții, amintiri și momente de fericire.
            </p>

            <p className="font-body text-burgundy/70 leading-relaxed">
              Echipa noastră de cofetari talentați combină tehnici tradiționale cu inovația modernă
              pentru a crea deserturi care nu doar arată spectaculos, ci și cuceresc prin gust.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "5000+", label: "Torturi create" },
                { number: "300+", label: "Nunți fericite" },
                { number: "98%", label: "Clienți mulțumiți" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <span className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}
                  </span>
                  <span className="block font-body text-sm text-burgundy/60 mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(93, 46, 70, 0.1)" }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-blush/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lavender/20 to-rose/20 flex items-center justify-center text-burgundy mb-4">
                {value.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-burgundy mb-2">
                {value.title}
              </h3>
              <p className="font-body text-sm text-burgundy/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
