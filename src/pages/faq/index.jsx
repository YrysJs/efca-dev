import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'

const Faq = ({ faq }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('faq.head')}</title>
      </Head>
      <section className="py-6 px-3 md:py-8 md:px-8 lg:py-10  px-12 flex">
        <Container className="flex-col sm:flex-col md:flex-col lg:flex-row">
          <h1 className="flex-[2] text-2xl/8 lg:text-3xl font-bold text-primaryDark uppercase">{t('faq.head')}</h1>
          <div className="flex-[6]  ml-0 mt-6 lg:ml-12 lg:mt-0">
            {faq.map((item, index) => (
              <div key={index} className="mb-12 flex flex-col">
                <h3 className="text-lg font-medium text-primaryDark">{item.question}</h3>
                <p className="mt-2 font-medium text-lightgray">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  const response = await api.get('/faq', {
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data
    },
  }
}

export default Faq
