import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import logoWhite from '../assets/logos/logo-white.svg'
import logoNavy from '../assets/logos/logo-navy.svg'

const OFFSET = -80

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const navLinks = [
    { to: 'services', label: t('nav.services') },
    { to: 'why',      label: t('nav.why') },
    { to: 'cases',    label: t('nav.cases') },
    { to: 'team',     label: t('nav.team') },
    { to: 'contact',  label: t('nav.contact') },
  ]

  const textClass = scrolled
    ? 'text-brand-navy hover:text-brand-purple'
    : 'text-white hover:text-brand-sky'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo — click scrolls to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img
            src={scrolled ? logoNavy : logoWhite}
            alt="MITWAI"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={OFFSET}
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 ${textClass}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={`text-sm font-bold border-2 rounded-full px-3 py-1 transition-all duration-200 ${
              scrolled
                ? 'border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-brand-navy'
            }`}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden transition-colors duration-200 ${textClass}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'bg-white' : 'bg-brand-navy'}`}
      >
        <div className="max-w-6xl mx-auto px-6 pb-6 flex flex-col gap-5 pt-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={OFFSET}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold cursor-pointer transition-colors duration-200 ${
                scrolled ? 'text-brand-navy' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleLang(); setMenuOpen(false) }}
            className={`text-sm font-bold self-start border-2 rounded-full px-3 py-1 transition-all duration-200 ${
              scrolled
                ? 'border-brand-purple text-brand-purple'
                : 'border-white text-white'
            }`}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </header>
  )
}
