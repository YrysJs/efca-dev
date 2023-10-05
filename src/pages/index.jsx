import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Slider from 'react-slick'
import Image from 'next/image'
import { Container } from '@/shared/ui'
import { useTranslation } from 'next-i18next'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Home = () => {
  const { t } = useTranslation() 

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main>
        <section className="hero">
          <Container className="py-[24px] flex-col">
            <div className='flex items-center mb-4'>
              <h1 className='font-bold text-4xl flex-[2]'>
                Заголовок <br />
                в две строки
              </h1>
              <p className='flex-[3] text-lg font-medium leading-[normal]'>
                Наши сферы работы в проектах: поддержка социально уязвимого населения, развитие молодежи через образование и лидерство, развитие социального предпринимательства, вовлечение граждан (и НПО) в решение общественных проблем и эффективное управление.
              </p>
            </div>
            <button className='py-3 px-7 w-fit ml-auto bg-white rounded-[25px] border-2 border-primary text-base font-medium'>{t('main.more')}</button>
          </Container>
        </section>
        <section className="hero-slider"></section>
        <section className="main-stats"></section>
        <section className="main-stats__second"></section>
        <section className="main-report">
          <Container className='flex justify-between'>
            <div>
              <h3>Наш годовой отчет</h3>
              <h6>pdf, 9.0 MB</h6>
            </div>
            <a className='flex bg-primary justify-between items-center gap-2.5 py-3 px-7 rounded-[28px]'>
              <span className='text-base text-white font-semibold'>Скачать</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 14H12M8 2L8 11.3333M8 11.3333L11.3333 8M8 11.3333L4.66667 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </Container>
        </section>
        <section className="main-projects"></section>
        <section className="main-team"></section>
        <section className="main-news"></section>
        <section className="main-logos"></section>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
