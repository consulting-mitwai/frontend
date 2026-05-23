import { useTranslation } from 'react-i18next'
import { GraduationCap, Brain, LineChart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICONS: LucideIcon[] = [GraduationCap, Brain, LineChart]

interface ServiceItem {
  title: string
  description: string
}

export default function ServicesSection() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i} className="card flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
