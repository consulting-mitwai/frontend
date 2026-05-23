import { useTranslation } from 'react-i18next'

const GRADIENTS = [
  'from-emerald-400 to-teal-500',
  'from-amber-400 to-orange-500',
  'from-sky-400 to-blue-500',
  'from-violet-500 to-purple-600',
  'from-rose-400 to-pink-500',
  'from-indigo-500 to-blue-700',
]

const ILLUSTRATIONS = [
  // Salud — corazón + pulso
  <svg key="health" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M50 66C50 66 18 49 18 29C18 20 26 13 36 18C41 21 46 26 50 30C54 26 59 21 64 18C74 13 82 20 82 29C82 49 50 66 50 66Z" fill="white" fillOpacity="0.95"/>
    <polyline points="4,42 20,42 27,24 34,62 41,14 50,42 66,42 80,42 96,42" stroke="white" strokeOpacity="0.55" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // Financiero — barras + flecha
  <svg key="finance" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="8"  y="54" width="14" height="20" rx="3" fill="white" fillOpacity="0.6"/>
    <rect x="28" y="40" width="14" height="34" rx="3" fill="white" fillOpacity="0.75"/>
    <rect x="48" y="26" width="14" height="48" rx="3" fill="white" fillOpacity="0.9"/>
    <rect x="68" y="12" width="14" height="62" rx="3" fill="white"/>
    <polyline points="14,56 34,43 54,30 74,17" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M70,12 L80,17 L70,22" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // Inmobiliario — casa
  <svg key="realestate" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <polygon points="50,8 90,42 10,42" fill="white" fillOpacity="0.9"/>
    <rect x="18" y="42" width="64" height="34" rx="2" fill="white" fillOpacity="0.95"/>
    <rect x="40" y="50" width="20" height="26" rx="2" fill="rgba(56,189,248,0.45)"/>
    <rect x="22" y="49" width="13" height="13" rx="2" fill="rgba(56,189,248,0.4)"/>
    <rect x="65" y="49" width="13" height="13" rx="2" fill="rgba(56,189,248,0.4)"/>
  </svg>,

  // Propiedad Intelectual — bombilla + destellos
  <svg key="ip" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M50 6C35 6 24 18 24 32C24 43 30 51 40 56V65H60V56C70 51 76 43 76 32C76 18 65 6 50 6Z" fill="white" fillOpacity="0.9"/>
    <rect x="40" y="65" width="20" height="5" rx="2.5" fill="white" fillOpacity="0.8"/>
    <rect x="43" y="70" width="14" height="4" rx="2" fill="white" fillOpacity="0.6"/>
    <circle cx="20" cy="18" r="3.5" fill="white" fillOpacity="0.7"/>
    <circle cx="80" cy="14" r="2.5" fill="white" fillOpacity="0.65"/>
    <circle cx="14" cy="50" r="2.5" fill="white" fillOpacity="0.6"/>
    <circle cx="86" cy="52" r="3" fill="white" fillOpacity="0.7"/>
    <line x1="24" y1="8"  x2="28" y2="14" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
    <line x1="76" y1="8"  x2="72" y2="14" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  // Seguros — escudo + check
  <svg key="insurance" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M50 5L14 20V44C14 62 30 74 50 78C70 74 86 62 86 44V20L50 5Z" fill="white" fillOpacity="0.9"/>
    <polyline points="32,41 44,55 68,28" stroke="#f43f5e" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  // Jurídico — balanza
  <svg key="legal" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="50" cy="10" r="4.5" fill="white"/>
    <line x1="50" y1="14" x2="50" y2="70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="86" y2="26" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="8"  y2="44" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="20" y2="44" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6,44 Q14,58 22,44Z" fill="white" fillOpacity="0.8"/>
    <line x1="86" y1="26" x2="80" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="86" y1="26" x2="92" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M78,38 Q86,52 94,38Z" fill="white" fillOpacity="0.8"/>
    <line x1="34" y1="70" x2="66" y2="70" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>,
]

export default function IndustriesStrip() {
  const { t } = useTranslation()
  const items = t('industries.items', { returnObjects: true }) as string[]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-gray-400 font-semibold mb-10">
          {t('industries.title')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((label, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`bg-gradient-to-br ${GRADIENTS[i]} h-36 flex items-center justify-center`}>
                <div className="w-20 h-16">
                  {ILLUSTRATIONS[i]}
                </div>
              </div>
              <div className="bg-white px-4 py-4 text-center">
                <p className="font-bold text-brand-navy">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
