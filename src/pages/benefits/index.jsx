import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container, Pagination } from '@/shared/ui'
import { api } from '@/shared/api'
import { useRouter } from 'next/router'
import { removeEmpty } from '@/shared/lib'
import { useState, useRef } from 'react'

const Benefits = ({ data, count, currentPage }) => {
  const [searchField, setSearchFiled] = useState('')
  const { t } = useTranslation()
  const router = useRouter()
  let { query } = router
  const enableSearch = (query) => {
    router.push({ pathname: '/benefits', query: removeEmpty({ ...router.query, ...query })})
  }

  const changeSearch = (e) => {
    setSearchFiled(e.target.value)
  }
  const searchWrapper = useRef(null)
  const resizeInputFocus = (e) => {
    searchWrapper.current.style.cssText = 'transition: 1s;'
  }
  const resizeInputBlur = (e) => {
    searchWrapper.current.style.cssText = 'transition: 1s;'
  }
  return (
    <>
      <Head>
        <title>{t('benefits.head')}</title>
      </Head>
      <section className="py-8 px-3 md:py-8 md:px-8 lg:py-10">
        <Container className="flex flex-col">
          <div className="relative w-full flex gap-4 items-center justify-between h-[40px]">
            <h1 className="text-2xl lg:text-3xl font-bold text-primaryDark uppercase">{t('benefits.head')}</h1>
            <div ref={searchWrapper} className="flex flex-end rounded-lg h-[40px]">
              <div className="ml-auto flex shadow pl-1 pr-3 rounded-lg flex-row items-center justify-between w-fit">
                <input
                  className="w-[100%] py-2 mr-1 px-3 outline-none rounded-lg placeholder:text-right"
                  type="text"
                  placeholder={t('success-stories.search')}
                  value={searchField}
                  onChange={changeSearch}
                  onFocus={resizeInputFocus}
                  onBlur={resizeInputBlur}
                  onKeyDown={ (e) => e.key === 'Enter' ? enableSearch({ search: searchField || null }) : ''}
                />
                <div className="cursor-pointer" onClick={ () => enableSearch({ search: searchField || null })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M14.0948 12.3124C13.7043 11.9219 13.0711 11.9219 12.6806 12.3124C12.2901 12.7029 12.2901 13.3361 12.6806 13.7266L14.0948 12.3124ZM17.6806 18.7266C18.0711 19.1172 18.7043 19.1172 19.0948 18.7266C19.4853 18.3361 19.4853 17.7029 19.0948 17.3124L17.6806 18.7266ZM9.22103 13.6862C6.55165 13.6862 4.3877 11.5222 4.3877 8.85286H2.3877C2.3877 12.6268 5.44708 15.6862 9.22103 15.6862V13.6862ZM4.3877 8.85286C4.3877 6.18349 6.55165 4.01953 9.22103 4.01953V2.01953C5.44708 2.01953 2.3877 5.07892 2.3877 8.85286H4.3877ZM9.22103 4.01953C11.8904 4.01953 14.0544 6.18349 14.0544 8.85286H16.0544C16.0544 5.07892 12.995 2.01953 9.22103 2.01953V4.01953ZM14.0544 8.85286C14.0544 11.5222 11.8904 13.6862 9.22103 13.6862V15.6862C12.995 15.6862 16.0544 12.6268 16.0544 8.85286H14.0544ZM12.6806 13.7266L17.6806 18.7266L19.0948 17.3124L14.0948 12.3124L12.6806 13.7266Z"
                      fill="#343BFF"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6  lg:mt-6 lg:ml-auto w-full lg:max-w-[66%]">
            {data ? data.map(item => (
              <div key={item.id} className="mb-6 min-h-[292px] flex flex-col md:flex-row">
                <div className="relative md:flex-1 h-[300px]">
                  <Image
                    src={item.image}
                    fill={true}
                    alt={item.title}
                    objectFit='cover'
                  />
                </div>
                <div className="p-4 md:p-6 flex-[2]">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-primaryDark font-semibold">{item.title}</h3>
                  <p className="mt-4 text-base lg:text-lg font-medium">{item.text}</p>
                  <div className="mt-4 lg:mt-6 text-xs sm:text-sm flex justify-end items-center">
                    <Link href={item.file.path}>
                      <div className="px-4 lg:px-7 py-2 lg:py-3 rounded-[40px] bg-secondaryDark flex items-center">
                        <span className="mr-2 font-semibold text-primary">
                          {item.file.type}, {(item.file.size / 1024).toFixed(1)} MB
                        </span>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.99219 16.2695H13.9922M9.49219 2.76953L9.49219 13.2695M9.49219 13.2695L13.2422 9.51953M9.49219 13.2695L5.74219 9.51953" stroke="#392DCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )) : <h3 className="py-4 font-bold uppercase text-center">Нет результатов</h3>}
            <Pagination 
              totalCount={count}
              currentPage={currentPage}
            />
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale, query } = context
  const response = await api.get(`/benefits?page=${query.page || 1}`, {
    params: query,
    headers: { 'Accept-Language' : locale }
  })
  if (response.data.pages < query.page) {
    return {
      redirect: {
        destination: `/benefits?page=${response.data.pages}`,
        statusCode: 302,
      }
    }
  }
  console.log(response);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data,
      currentPage: query.page || 1
    }
  }
}

export default Benefits
