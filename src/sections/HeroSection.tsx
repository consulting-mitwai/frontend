import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0f0520] overflow-hidden">

      {/* Gradient blobs — decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-48 -top-48 w-[700px] h-[700px] rounded-full bg-brand-gradient opacity-40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-gradient opacity-25 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple opacity-15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow label */}
          <span className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-brand-sky">
            Make it Possible with AI
          </span>

          {/* Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight animate-slide-up">
            {t('hero.tagline')}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed animate-fade-in">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in">
            <Link to="contact" smooth duration={600} offset={-80}>
              <button className="btn-primary text-base px-8 py-4">
                {t('hero.cta_primary')}
                <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="services" smooth duration={600} offset={-80}>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/40 transition-all duration-200 hover:border-white hover:bg-white/10 text-base">
                {t('hero.cta_secondary')}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
