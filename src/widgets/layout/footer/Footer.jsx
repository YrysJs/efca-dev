import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/shared/hooks'
import { validateEmail } from '@/shared/lib'
import { Container, Button, Icon } from '@/shared/ui'
import { api } from '@/shared/api'

const routes = [
  { labelKey: 'fund', path: '/' },
  { labelKey: 'activities.projects', path: '/projects' },
  { labelKey: 'join.partners', path: '/partners' },
  { labelKey: 'materials.for-business', path: '/for-business' },
  { labelKey: 'materials.for-ngo', path: '/for-ngo' },
  { labelKey: 'materials.news', path: '/news' },
  { labelKey: 'join.contacts', path: '/contacts' },
]
const Footer = () => {
  const { pathname } = useRouter()
  const [subFooterState, setSubFooterState] = useState(false)
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [formText, setFormText] = useState('')
  const isEmailValid = useDebounce(validateEmail(email), 500)

  const subFooterPathNames = ['/donors', '/path2', '/path3', '/path4']
  useEffect( () => {
    const isSubFooterPath = subFooterPathNames.some(item => item === pathname);
    setSubFooterState(isSubFooterPath)
  }, [pathname, subFooterPathNames])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post('/mailing', {
      email
    })
    setEmail('')
  }

  const handleForm = async (e) => {
    e.preventDefault()
    await api.post('/fakeForm')
    setEmail('')
    setEmail('')
    setEmail('')
    setEmail('')
  }

  return (
    <>
      { subFooterState ? <section className="py-6 px-4 md:py-8 md:px-6 lg:py-12 bg-secondary">
        <Container className='flex-col lg:flex-row'>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold">
              {t('footer.offer')}
            </h2>
            <p className="mt-3 sm:mt-6 lg:mt-6 text-base sm:text-lg lg:text-lg font-medium">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            </p>
          </div>
          <div className="flex-1 flex flex-col mt-5 lg:mt-0">
            <form className="flex flex-col gap-6 mx-auto w-full max-w-[500px] items-center" onSubmit={handleForm}>
              <input 
                placeholder='ФИО'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="py-3 px-6 w-[100%] text-sm lg:text-base h-fit font-semibold text-base rounded-[40px] outline-none" 
              />
              <input 
                placeholder='Компания'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="py-3 px-6 w-[100%] text-sm lg:text-base h-fit font-semibold text-base rounded-[40px] outline-none" 
              />
              <input 
                placeholder='Контакты'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="py-3 px-6 w-[100%] text-sm lg:text-base h-fit font-semibold text-base rounded-[40px] outline-none" 
              />
              <textarea 
                placeholder='Задайте Ваш вопрос или кратко опишите тему, которую хотите обсудить'
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                className="resize-none py-3 px-6 w-[100%] text-sm lg:text-base h-[134px] font-semibold text-base rounded-[20px] outline-none" 
              ></textarea>
              <Button className="min-w-[100px] sm:w-[initial] lg:w-[initial] ml-auto block text-xs sm:text-sm pl-3 pr-3 sm:px-7 lg:px-7 lg:text-base" disabled={!isEmailValid}>
                {t('footer.cta')}
              </Button>
            </form>
            <span className="mt-2 pl-6 h-[24px] text-[red]">
              {email.length > 3 && !isEmailValid && t('footer.emailError')}
            </span>
          </div>
        </Container>
      </section> : <section className="py-6 px-4 md:py-8 md:px-6 lg:py-12 bg-secondary">
        <Container className='flex-col lg:flex-row'>
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-semibold">
              {t('footer.offer')}
            </h2>
            <p className="mt-3 sm:mt-6 lg:mt-6 text-base sm:text-lg lg:text-lg font-medium">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center mt-5 lg:mt-0">
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input 
                placeholder={t('footer.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-6 min-w-[120px] md:min-w-[250px] text-sm lg:text-base lg:min-w-[394px] h-fit font-semibold text-base rounded-[40px] outline-none" 
              />
              <Button className="min-w-[100px] sm:w-[initial] lg:w-[initial] ml-2 sm:ml-4 lg:ml-6 text-xs sm:text-sm pl-3 pr-3 sm:px-7 lg:px-7 lg:text-base" disabled={!isEmailValid}>
                {t('footer.cta')}
              </Button>
            </form>
            <span className="mt-2 pl-6 h-[24px] text-[red]">
              {email.length > 3 && !isEmailValid && t('footer.emailError')}
            </span>
          </div>
        </Container>
      </section>}
      <footer className="px-[48px] xl:px-0 py-[68px] bg-darkened xl:px-3">
        <Container className="flex flex-col items-start lg:items-center mx-auto max-w-[585px] xl:max-w-[1280px]">
          <div className="w-full flex justify-between">
            <Link href="/">
              <div className="text-base font-bold lg:text-2xl lg:font-semibold text-white">ФЕЦА Казахстан</div>
            </Link>
            <div className='hidden xl:flex'>
              {routes.map(route => (
                <Link key={route.path} href={route.path}>
                  <span className="ml-6 font-medium text-white">{t('menu.' + route.labelKey + '.root')}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 lg:mt-10 w-full flex flex-wrap xl:flex-nowrap justify-between gap-5">
            <span className="text-sm lg:text-base font-bold lg:font-medium text-white">{t('footer.address')}</span>
            <span className="text-sm lg:text-base min-w-[187px] font-bold lg:font-medium text-white">Email: <Link href="mailto:almaty@ef-ca.org"><span className="text-primaryLight hover:underline">almaty@ef-ca.org</span></Link></span>
            <span className="text-sm lg:text-base min-w-[226px] font-bold lg:font-medium text-white">{t('footer.phone')}: <Link href="tel:+77272501810"><span className="text-primaryLight hover:underline">+7 (727) 250-18-10</span></Link></span>
            <div className="flex items-center">
              <span className="text-sm lg:-text-base font-bold lg:font-medium text-white uppercase whitespace-pre-wrap">{t('footer.socials')}</span>
              <Icon src="/assets/ic_facebook.svg" className="ml-10" width={24} height={24} />
              <Icon src="/assets/ic_instagram.svg" className="ml-10" width={24} height={24} />
              <Icon src="/assets/ic_youtube.svg" className="ml-10" width={24} height={24} />
            </div>
          </div>
          <span className="mt-5 lg:mt-10 text-[#B0B0B0] block max-w-[180px] sm:max-w-[240px] lg:max-w-[initial] font-bold lg:font-medium text-xs sm:text-sm">Copyright © 2014 КФ «Фонд Евразия Центральной Азии». All Rights Reserved</span>
        </Container>
      </footer>
    </>
  )
}

export default Footer
