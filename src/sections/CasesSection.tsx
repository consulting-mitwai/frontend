import { useTranslation } from 'react-i18next'
import { Activity, FileCheck, Building2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const SECTOR_ICONS: LucideIcon[] = [Activity, FileCheck, Building2]
const SECTOR_COLORS = [
  'bg-emerald-100 text-emerald-700',
  'bg-violet-100 text-violet-700',
  'bg-blue-100 text-blue-700',
]

interface CaseItem {
  sector: string
  title: string
  challenge: string
  solution: string
  result: string
}

export default function CasesSection() {
  const { t } = useTranslation()
  const items = t('cases.items', { returnObjects: true }) as CaseItem[]

  return (
    <section id="cases" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">{t('cases.title')}</h2>
          <p className="section-subtitle mx-auto">{t('cases.subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = SECTOR_ICONS[i]
            return (
              <div key={i} className="card flex flex-col gap-0 overflow-hidden p-0 h-full">

                {/* Card header */}
                <div className="p-6 pb-4">
                  <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${SECTOR_COLORS[i]}`}>
                    <Icon size={13} />
                    {item.sector}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy leading-snug">{item.title}</h3>
                </div>

                {/* Body — flex-1 pushes result to bottom */}
                <div className="px-6 pb-4 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{t('cases.labels.challenge')}</p>
                    <p className="text-gray-500 leading-relaxed">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{t('cases.labels.solution')}</p>
                    <p className="text-gray-500 leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                {/* Result — gradient accent */}
                <div className="mt-auto mx-4 mb-4 rounded-xl bg-brand-gradient p-4 min-h-[7rem] flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">{t('cases.labels.result')}</p>
                  <p className="text-white leading-relaxed font-medium">{item.result}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
