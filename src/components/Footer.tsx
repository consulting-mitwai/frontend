import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle } from 'lucide-react'
import logoWhite from '../assets/logos/logo-white.svg'

const WA_LINK = 'https://wa.me/573124416686'
const EMAIL   = 'consulting@mitwai.com'

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { to: 'services', label: t('nav.services') },
    { to: 'why',      label: t('nav.why') },
    { to: 'cases',    label: t('nav.cases') },
    { to: 'team',     label: t('nav.team') },
    { to: 'contact',  label: t('nav.contact') },
  ]

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img src={logoWhite} alt="MITWAI" className="h-8 w-auto self-start" />
            <p className="text-sm text-brand-sky font-light italic leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
              {t('footer.nav_title')}
            </p>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
              {t('footer.contact_title')}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              <MessageCircle size={16} />
              +57 312 441 6686
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
