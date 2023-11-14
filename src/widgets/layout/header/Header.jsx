import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { getRootPath } from '@/shared/lib'
import { Container, Icon } from '@/shared/ui'
import clsx from 'clsx'

const routes = [
  { 
    labelKey: 'fund', 
    children: [
      { 
        labelKey: 'about-us', 
        path: '/about-us',
        descKey: 'desc'
      },
      { 
        labelKey: 'team', 
        path: '/team',
        descKey: 'desc' 
      },
      { 
        labelKey: 'annual-reports', 
        path: '/annual-reports',
        descKey: 'desc' 
      },
      { 
        labelKey: 'faq', 
        path: '/faq',
        descKey: 'desc' 
      },
    ]
  },
  { 
    labelKey: 'activities', 
    children: [
      { labelKey: 'projects', path: '/projects' },
      { labelKey: 'success-stories', path: '/success-stories' },
      { labelKey: 'grants-competetions', path: '/grants-competetions' },
    ]
  },
  { 
    labelKey: 'materials', 
    children: [
      { labelKey: 'for-business', path: '/for-business' },
      { labelKey: 'for-ngo', path: '/for-ngo' },
      { labelKey: 'news', path: '/news' },
      { labelKey: 'researches', path: '/researches' },
      { labelKey: 'benefits', path: '/benefits' },
    ]
  },
  { 
    labelKey: 'join', 
    children: [
      { labelKey: 'vacancy', path: '/vacancy' },
      { labelKey: 'donors', path: '/donors' },
      { labelKey: 'partners', path: '/partners' },
      { labelKey: 'contacts', path: '/contacts' },
    ]
  },
]
const Header = ({ locale }) => {
  const router = useRouter()
  const { t } = useTranslation()

  const [mobileState, setMobileState] = useState(false)
  
  useEffect( () => {
    if (mobileState) document.documentElement.style.overflow = 'hidden'
    else document.documentElement.style.overflow = 'auto'
  })

  const handleMobileMenu = (state) => {
    setMobileState(state)
  }

  return (
    <header className="sticky top-0 left-0 bg-white z-[9999] header-fix">
      <Container className="flex items-center justify-between px-3 xl:px-0">
        <Link href="/" className="z-50">
          <div className="py-[8px] lg:py-6 flex items-center">
            <Icon src="/assets/logo.png" width={40} height={58} />
            <span className="min-w-[174px] mr-4 ml-4 leading-5 font-semibold text-black text-xs leading-[normal] lg:text-sm xl:text-base">
              {t('name.first-part')} <br/> {t('name.second-part')} <br/> {t('name.third-part')}
            </span>
          </div>
        </Link>
        <div className="hidden xl:flex items-center gap-[61px]">
          <div className="relative w-[704px] flex justify-between">
            {routes.map(route => (
              <MenuItem key={route.labelKey} route={route} />
            ))}
          </div>
          <div className="flex lg:flex-col xl:flex-row gap-3 xl:gap-5">
            <Link href={router.asPath} locale={'kz'}>
              <span className={clsx('font-medium uppercase', { 
                ['!text-black']: locale === 'kz', 
                ['text-gray']: locale !== 'kz' 
              })}>
                kz
              </span>
            </Link>
            <Link href={router.asPath} locale={'ru'}>
              <span className={clsx('font-medium uppercase', {
                ['!text-black']: locale === 'ru', 
                ['text-gray']: locale !== 'ru' 
              })}>
                ru
              </span>
            </Link>
            <Link href={router.asPath} locale={'en'}>
              <span className={clsx('font-medium uppercase', {
                ['!text-black']: locale === 'en', 
                ['text-gray']: locale !== 'en' 
              })}>
                  eng
              </span>
            </Link>
          </div>
        </div>
        <div className={clsx('fixed top-0 bg-white h-[100vh] z-30 left-0 flex justify-end pt-[80px] px-3 flex-col-reverse xl:hidden mob-menu w-full overflow-y-scroll', {
          ['animate-[menuShow_0.3s_ease-in-out_forwards]']: mobileState === true,
          ['animate-[menuHide_0.3s_ease-in-out_forwards]']: mobileState === false,
        })}>
          <div className="relative min-w-screen flex flex-col overflow-y-scroll">
            {routes.map( (route, index) => (
              <MenuItem key={route.labelKey} route={route} onSetClose={handleMobileMenu}/>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href={router.asPath} locale={'kz'} onClick={() => handleMobileMenu(prev => !prev)}>
              <span className={clsx('font-medium uppercase', { 
                ['!text-black']: locale === 'kz', 
                ['text-gray']: locale !== 'kz' 
              })}>
                Казакша
              </span>
            </Link>
            <Link href={router.asPath} locale={'ru'} onClick={() => handleMobileMenu(prev => !prev)}>
              <span className={clsx('mx-5 font-medium uppercase', {
                ['!text-black']: locale === 'ru', 
                ['text-gray']: locale !== 'ru' 
              })}>
                Русский
              </span>
            </Link>
            <Link href={router.asPath} locale={'en'} onClick={() => handleMobileMenu(prev => !prev)}>
              <span className={clsx('font-medium uppercase', {
                ['!text-black']: locale === 'en', 
                ['text-gray']: locale !== 'en' 
              })}>
                  ENGlish
              </span>
            </Link>
          </div>
        </div>
        <button className='block xl:hidden z-50' onClick={() => handleMobileMenu(prev => !prev)}>
        { mobileState ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M18 18.25L6 6.25M18 6.25L6 18.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          : 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M5 17.25L13 17.25M5 12.25H19M11 7.25L19 7.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }
        </button>
      </Container>
    </header>
  )
}

const MenuItem = ({ route, onSetClose }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const [isHovered, setIsHovered] = useState(false)

  const handleSubMenu = () => {
    setIsHovered(prev => !prev)
  }

  const hideMenu = () => {
    onSetClose(false)
  }

  return (
    <>
    <div 
      className="py-3 hidden xl:block"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="flex items-center cursor-pointer">
        <div className="w-4 h-4 rounded-full border-4 border-primaryDark font-medium">
          <div className={clsx('w-full h-full', {
            ['bg-primaryDark']: routes?.find(f => f.labelKey === route.labelKey)?.children?.find(f => f.path === getRootPath(router.route))
          })} />
        </div>
        <span className="ml-2 text-black uppercase">{t('menu.' + route.labelKey + '.root')}</span>
      </div>
      {isHovered && (
        <div 
          className="z-50 lg:absolute top-12 left-0 right-0 lg:mx-auto min-w-[580px] px-6 py-2 lg:p-6 w-fit bg-white rounded lg:shadow flex flex-col justify-center lg:flex-row animate-[growDown_0.3s_ease-in-out_forwards]"
          style={{ transformOrigin: 'top center' }}
        >
          {route.children.map((child, index) => (
            <Link key={child.path} href={child.path}>
              <div className={clsx('p-3 w-fit rounded lg:bg-secondary whitespace-nowrap flex flex-col', {
                ['lg:ml-6']: index > 0
              })}>
                <span className="pb-px text-sm font-bold uppercase lg:border-b border-black">
                  {t(`menu.${route.labelKey}.${child.labelKey}.root`)}
                </span>
                {child.descKey && (
                  <span className="hidden lg:block mt-2 whitespace-pre-wrap">
                    {t(`menu.${route.labelKey}.${child.labelKey}.${child.descKey}`)}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    <div 
      className="py-3 block xl:hidden"
    >
      <div className="flex items-center cursor-pointer" onClick={handleSubMenu}>
        <div className="w-4 h-4 rounded-full border-4 border-primaryDark font-medium">
          <div className={clsx('w-full h-full', {
            ['bg-primaryDark']: routes?.find(f => f.labelKey === route.labelKey)?.children?.find(f => f.path === getRootPath(router.route))
          })} />
        </div>
        <span className="ml-2 text-black uppercase">{t('menu.' + route.labelKey + '.root')}</span>
      </div>
      {isHovered && (
        <div 
          className="z-50 xl:absolute top-12 left-0 right-0 xl:mx-auto px-6 py-2 lg:p-6 w-fit bg-white rounded lg:shadow flex flex-col lg:flex-row animate-[growDown_0.3s_ease-in-out_forwards]"
          style={{ transformOrigin: 'top center' }}
        >
          {route.children.map((child, index) => (
            <Link key={child.path} href={child.path} onClick={hideMenu}>
              <div className={clsx('p-3 w-fit rounded lg:bg-secondary whitespace-nowrap flex flex-col', {
                ['lg:ml-6']: index > 0
              })}>
                <span className="pb-px text-sm font-bold uppercase lg:border-b border-black">
                  {t(`menu.${route.labelKey}.${child.labelKey}.root`)}
                </span>
                {child.descKey && (
                  <span className="hidden lg:block mt-2 whitespace-pre-wrap">
                    {t(`menu.${route.labelKey}.${child.labelKey}.${child.descKey}`)}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Header
