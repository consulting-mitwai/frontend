import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle, Mail, Send } from 'lucide-react'

const WA_LINK = 'https://wa.me/573124416686'
const EMAIL   = 'consulting@mitwai.com'

export default function ContactSection() {
  const { t } = useTranslation()
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Contacto desde mitwai.com')
    const body    = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-sky focus:bg-white/15 transition-all duration-200'

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-brand-navy overflow-hidden">

      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-brand-gradient opacity-10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title text-white">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto text-white/60">{t('contact.subtitle')}</p>
        </div>

        {/* Direct contact buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5a] transition-colors duration-200 shadow-lg"
          >
            <MessageCircle size={20} />
            {t('contact.whatsapp')}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            <Mail size={20} />
            {t('contact.email')}
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 border-t border-white/10" />
          <span className="text-white/30 text-sm">o</span>
          <div className="flex-1 border-t border-white/10" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={t('contact.form.placeholder_name')}
              className={inputClass}
            />
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('contact.form.placeholder_email')}
              className={inputClass}
            />
          </div>
          <textarea
            required
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={t('contact.form.placeholder_message')}
            className={`${inputClass} resize-none`}
          />
          <button type="submit" className="btn-primary self-end px-8 py-4 text-base">
            {t('contact.form.submit')}
            <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  )
}
