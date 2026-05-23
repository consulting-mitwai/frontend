import { useTranslation } from 'react-i18next'
import photoJuan      from '../assets/team/juan-sebastian-parra.png'
import photoSebastian from '../assets/team/sebastian-castelblanco.png'
import photoArdila    from '../assets/team/sebastian-ardila.png'

const PHOTOS = [photoJuan, photoSebastian, photoArdila]

interface TeamMember {
  name: string
  bio: string
}

export default function TeamSection() {
  const { t } = useTranslation()
  const members = t('team.members', { returnObjects: true }) as TeamMember[]

  return (
    <section id="team" className="py-16 md:py-24 bg-[#F5F4FF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">{t('team.title')}</h2>
          <p className="section-subtitle mx-auto">{t('team.subtitle')}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div key={i} className="card flex flex-col items-center text-center gap-4">

              {/* Photo */}
              <img
                src={PHOTOS[i]}
                alt={member.name}
                loading="lazy"
                className="w-36 h-36 object-cover rounded-full"
              />

              {/* Name + role */}
              <div>
                <h3 className="text-xl font-bold text-brand-navy">{member.name}</h3>
                <span className="inline-block mt-1 text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-brand-gradient">
                  {t('team.role')}
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
