import { useTranslation } from 'react-i18next'
import { SlidersHorizontal, TrendingUp, FlaskConical } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICONS: LucideIcon[] = [SlidersHorizontal, TrendingUp, FlaskConical]

interface WhyItem {
  title: string
  description: string
}

export default function WhyMitwaiSection() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true }) as WhyItem[]

  return (
    <section id="why" className="py-16 md:py-24 bg-[#F5F4FF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">{t('why.title')}</h2>
          <p className="section-subtitle mx-auto">{t('why.subtitle')}</p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="flex flex-col items-start gap-4">
                {/* Number + icon */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-brand-gradient leading-none">
                    0{i + 1}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
