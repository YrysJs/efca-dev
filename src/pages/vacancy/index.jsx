import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container, Pagination } from '@/shared/ui'
import { api } from '@/shared/api'

const Vacancy = ({ data, count, currentPage }) => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{t('vacancy.head')}</title>
      </Head>
      <section className="py-8 px-3 md:py-8 md:px-8 lg:py-10">
        <Container className="flex-col sm:flex-col md:flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-primaryDark uppercase">{t('vacancy.head')}</h1>
          </div>
          <div className="lg:mt-6 lg:ml-auto w-full lg:max-w-[66%]">
            {data.map(item => (
              <div key={item.id} className="mb-6 p-4 lg:p-6">
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-primaryDark font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base lg:text-lg font-medium">{item.text}</p>
                </div>
                <div className="mt-6 flex justify-end items-center">
                  <div className="px-4 lg:px-7 py-2 lg:py-3 rounded-[40px] bg-secondaryDark font-semibold text-primary text-xs sm:text-sm lg:text-base">
                    с {item.date_from} по {item.date_to}
                  </div>
                  <Link href={`/vacancy/${item.id}`} passHref>
                    <div className="ml-2 lg:ml-6 px-4 lg:px-7 py-2 lg:py-3 rounded-[40px] bg-primary text-white font-semibold text-xs sm:text-sm lg:text-base">
                      {t('vacancy.cta')}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
            <Pagination
              totalCount={count}
              currentPage={currentPage}
              onPageChange={(page) => router.push({ pathname: '/vacancy', query: { page } })}
            />
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale, query } = context
  const response = await api.get(`/vacancy?page=${query.page || 1}`, {
    headers: { 'Accept-Language' : locale }
  })
  if (response.data.pages < query.page) {
    return {
      redirect: {
        destination: `/vacancy?page=${response.data.pages}`,
        statusCode: 302,
      }
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data,
      currentPage: query.page || 1
    },
  }
}

export default Vacancy
