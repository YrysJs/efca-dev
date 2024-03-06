import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import moment from 'moment'
import Select from 'react-select'
import InputMask from 'react-input-mask'
import { Container, Pagination } from '@/shared/ui'
import { removeEmpty } from '@/shared/lib'
import { api } from '@/shared/api'
import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    outline: 'none',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    fontWeight: 500
  }),
}

const initialQuery = {
  search: null,
  direction_id: null,
  donor_id: null,
  region_id: null,
  partner_id: null,
  is_active: null,
  date_from: null,
  date_to: null
}

const Projects = ({ data, count, currentPage, regions, donors, partners, directions }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { query } = router
  const [filters, setFilters] = useState(initialQuery)

  const [filterState, setFilterState] = useState(false)
  const [searchField, setSearchFiled] = useState(query.search || '')
  const title = useRef(null)

  const enableFilter = (query) => {
    router.push({ pathname: '/projects', query: removeEmpty({ ...router.query, ...query }) })
  }

  const handleChangeDate = (e) => {
    const date = moment(e.target.value, 'DD.MM.YY')
    if (date.isValid() && e.target.value.trim().length === 8) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [e.target.name]: date.format('YYYY-MM-DD'),
      }));
    } 
    if (e.target.value.trim().length === 0) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [e.target.name]: null,
      }));
    }
  }

  const updateQueryValue = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }

  const handleChangeFilter = () => {
    setFilterState(!filterState);
    title.current.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
  }

  const applyQuery = () => {
    router.push({ pathname: '/projects', query: removeEmpty({ ...router.query, ...filters }) })
  }

  const changeSearch = (e) => {
    setSearchFiled(e.target.value)
  }

  useEffect(() => {
    const { direction_id, donor_id, region_id, partner_id, date_from, date_to, is_active } = query;
    setFilters({
      ...filters,
      direction_id: direction_id ? Number(direction_id) : null,
      donor_id: donor_id ? Number(donor_id) : null,
      region_id: region_id ? Number(region_id) : null,
      partner_id: partner_id ? Number(partner_id) : null,
      date_from: date_from ? moment(date_from, 'YYYY.MM.DD').format('DD.MM.YY') : null,
      date_to: date_to ? moment(date_to, 'YYYY.MM.DD').format('DD.MM.YY') : null,
      is_active: is_active === 'true' ? true : is_active === 'false' ? false : null,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{t('projects.head')}</title>
      </Head>
      <section className="py-8 px-3 md:py-8 md:px-8 lg:py-10">
        <Container className="flex flex-col lg:flex-row">
          <aside className="flex-1 flex flex-col">
            <div className='flex justify-between items-center'>
              <h1 ref={title} className="text-2xl sm:text-3xl text-black font-bold sm:text-primaryDark uppercase">{t('projects.head')}</h1>
              <button onClick={handleChangeFilter} className="block rounded-lg p-2 lg:hidden" style={{boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.08)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M15.1123 5.72753V5.17459C15.1123 4.75455 15.112 4.54456 15.0303 4.38412C14.9584 4.243 14.8442 4.12826 14.7031 4.05635C14.5427 3.97461 14.3321 3.97461 13.912 3.97461H4.31201C3.89197 3.97461 3.68216 3.97461 3.52173 4.05635C3.38061 4.12826 3.26595 4.243 3.19405 4.38412C3.1123 4.54456 3.1123 4.75455 3.1123 5.17459V5.72753C3.1123 5.91098 3.1123 6.00273 3.13303 6.08905C3.1514 6.16558 3.18178 6.23871 3.2229 6.30582C3.26927 6.38148 3.33411 6.44633 3.46374 6.57596L3.46387 6.57608L7.26092 10.3731C7.39063 10.5028 7.45531 10.5677 7.50169 10.6434C7.54282 10.7105 7.57342 10.7837 7.5918 10.8602C7.61231 10.9456 7.61231 11.0363 7.6123 11.2161V11.2216V14.783C7.6123 15.4259 7.6123 15.7473 7.74771 15.9409C7.86595 16.11 8.04836 16.2229 8.25244 16.2531C8.48616 16.2876 8.77384 16.1438 9.34888 15.8563L9.94888 15.5563C10.1897 15.4359 10.3099 15.3757 10.3979 15.2859C10.4757 15.2064 10.535 15.1107 10.5713 15.0056C10.6123 14.8868 10.6123 14.7522 10.6123 14.483V11.2216C10.6123 11.0382 10.6123 10.9465 10.633 10.8602C10.6514 10.7837 10.6818 10.7105 10.7229 10.6434C10.7693 10.5677 10.8341 10.5029 10.9637 10.3733L10.9639 10.3731L14.7609 6.57608C14.8906 6.44637 14.9553 6.3815 15.0017 6.30582C15.0428 6.23871 15.0734 6.16558 15.0918 6.08905C15.1123 6.00361 15.1123 5.91285 15.1123 5.73312V5.72753Z" stroke="#343BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div className={clsx('mt-6 p-3 rounded-lg bg-grayLight flex flex-col', {
              ['hidden lg:flex']: filterState === false,
              ['flex lg:flex']: filterState === true,
            })}>
              <div className="mb-6 flex lg:hidden flex-col">
                <label className="mb-2 font-medium">{t('success-stories.search')}</label>
                <div className="flex shadow-sm pr-3 rounded-lg flex-row items-center bg-white justify-between w-full">
                  <input
                    className="ml-auto w-[100%] py-2 px-3 outline-none placeholder:text-left"
                    type="text"
                    placeholder={t('success-stories.search')}
                    onChange={changeSearch}
                    value={searchField}
                    onKeyDown={ (e) => e.key === 'Enter' ? enableFilter({ search: searchField || null }) : ''}
                  />
                  <div className="cursor-pointer" onClick={ () => enableFilter({ search: searchField || null })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path d="M13.3194 12.2675C12.9289 11.877 12.2957 11.877 11.9052 12.2675C11.5147 12.658 11.5147 13.2912 11.9052 13.6817L13.3194 12.2675ZM16.9052 18.6817C17.2957 19.0722 17.9289 19.0722 18.3194 18.6817C18.7099 18.2912 18.7099 17.658 18.3194 17.2675L16.9052 18.6817ZM8.44564 13.6413C5.77626 13.6413 3.6123 11.4773 3.6123 8.80794H1.6123C1.6123 12.5819 4.67169 15.6413 8.44564 15.6413V13.6413ZM3.6123 8.80794C3.6123 6.13857 5.77626 3.97461 8.44564 3.97461V1.97461C4.67169 1.97461 1.6123 5.034 1.6123 8.80794H3.6123ZM8.44564 3.97461C11.115 3.97461 13.279 6.13857 13.279 8.80794H15.279C15.279 5.034 12.2196 1.97461 8.44564 1.97461V3.97461ZM13.279 8.80794C13.279 11.4773 11.115 13.6413 8.44564 13.6413V15.6413C12.2196 15.6413 15.279 12.5819 15.279 8.80794H13.279ZM11.9052 13.6817L16.9052 18.6817L18.3194 17.2675L13.3194 12.2675L11.9052 13.6817Z" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.direction')}</label>
                <Select 
                  isClearable
                  placeholder={t('projects.select')}
                  options={directions}
                  defaultValue={directions.find(f => f.value === Number(query.direction_ids))}
                  styles={customStyles}
                  onChange={(event) => updateQueryValue('direction_ids', event?.value || null)}
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.donor')}</label>
                <Select 
                  isClearable
                  placeholder={t('projects.select')}
                  options={donors}
                  defaultValue={donors.find(f => f.value === Number(query.donor_ids))}
                  styles={customStyles}
                  onChange={(event) => updateQueryValue('donor_ids', event?.value || null)}
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.region')}</label>
                <Select 
                  isClearable
                  placeholder={t('projects.select')}
                  options={regions}
                  defaultValue={regions.find(f => f.value === Number(query.region_ids))}
                  styles={customStyles}
                  onChange={(event) => updateQueryValue('region_ids', event?.value || null)}
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.partners')}</label>
                <Select 
                  isClearable
                  placeholder={t('projects.select')}
                  options={partners}
                  defaultValue={partners.find(f => f.value === Number(query.partner_ids))}
                  styles={customStyles}
                  onChange={(event) => updateQueryValue('partner_ids', event?.value || null)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.date')}</label>
                <div className="flex items-center">
                  <span className="mr-2">{t('projects.filter.from')}</span>
                  <InputMask
                    name="date_from"
                    mask="99.99.99"
                    maskChar=" "
                    defaultValue={moment(query.date_from, 'YYYY.MM.DD').format('DD.MM.YY') ?? ''}
                    className="outline-none py-2 px-3 w-24 font-medium rounded"
                    onChange={handleChangeDate}
                  />
                  <span className="mx-2">{t('projects.filter.to')}</span>
                  <InputMask
                    name="date_to"
                    mask="99.99.99"
                    maskChar=" "
                    defaultValue={moment(query.date_to, 'YYYY.MM.DD').format('DD.MM.YY') ?? ''}
                    className="outline-none py-2 px-3 w-24 font-medium rounded"
                    onChange={handleChangeDate}
                  />
                </div>
              </div>
              <div className="my-6 h-[1px] w-full bg-gray opacity-25" />
              <div className="flex flex-col">
                <label className="mb-2 font-medium">{t('projects.filter.status')}</label>
                <div className="flex items-center">
                  <input type="checkbox" checked={query.is_active === 'true' || filters.is_active === 'true'} onChange={event => updateQueryValue('is_active', event.target.checked || null )} />
                  <span className="ml-3 font-medium">{t('projects.filter.active')}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <input type="checkbox" checked={query.is_active === 'false' || filters.is_active === 'false'} onChange={event => updateQueryValue('is_active', event.target.checked ? false : null  )} />
                  <span className="ml-3 font-medium">{t('projects.filter.passive')}</span>
                </div>
              </div>
              <button className="bg-primary text-white py-2 px-3 mt-6 mb-2 rounded-lg" onClick={applyQuery}>Применить</button>
            </div>
          </aside>
          <div className="ml-0 lg:ml-12 flex-[3]">
            <div className="hidden lg:block h-[38px]">
              <div className="flex flex-end h-[38px]">
                <div className="ml-auto flex shadow pl-1 pr-3 rounded-lg flex-row items-center justify-between w-fit">
                  <input
                    className="ml-auto w-[100%] mr-1 px-3 outline-none placeholder:text-right"
                    type="text"
                    placeholder={t('success-stories.search')}
                    onChange={changeSearch}
                    value={searchField}
                    onKeyDown={ (e) => e.key === 'Enter' ? enableFilter({ search: searchField || null }) : ''}
                  />
                  <div className="cursor-pointer" onClick={ () => enableFilter({ search: searchField || null })}>
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
            <div className="mt-6 flex flex-col">
              {data.length ? data.map(item => (
                <Link key={item.id} href={`/projects/${item.id}`}>
                  <div className="mb-6 min-h-[264px] flex flex-col smd:flex-row cursor-pointer">
                    <div className="relative h-[188px] sm:h-[240px] smd:h-[340px] smd:flex-1">
                      <Image
                        src={item.image}
                        fill={true}
                        alt={item.title}
                        objectFit='cover'
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex-[2]">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg sm:text-xl lg:text-2xl text-primaryDark font-semibold">{item.title}</h3>
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.0137 8.22664C19.4043 7.83611 19.4043 7.20295 19.0137 6.81242L12.6498 0.448463C12.2593 0.0579391 11.6261 0.0579391 11.2356 0.448463C10.845 0.838988 10.845 1.47215 11.2356 1.86268L16.8924 7.51953L11.2356 13.1764C10.845 13.5669 10.845 14.2001 11.2356 14.5906C11.6261 14.9811 12.2593 14.9811 12.6498 14.5906L19.0137 8.22664ZM0.306641 8.51953L18.3066 8.51953V6.51953L0.306641 6.51953L0.306641 8.51953Z" fill="#0006BB"/>
                        </svg>
                      </div>
                      <p className="mt-4 text-base lg:text-lg font-medium">{item.text}</p>
                      <div className="mt-6 flex justify-end items-center text-xs sm:text-sm xl:text-base">
                        <div className="px-4 xl:px-7 py-2 xl:py-3 rounded-[40px] bg-secondaryDark font-semibold text-primary">
                        {t('success-stories.filter.from')} {item.date_from.split(".").reverse()[0]} {t('success-stories.filter.to')} {item.date_to.split(".").reverse()[0]}
                        </div>
                        <div className={clsx('ml-2 lg:ml-6 px-4 xl:px-7 py-2 xl:py-3 w-fit rounded-[40px] font-semibold', {
                          ['bg-active text-activeDark']: item.is_active,
                          ['bg-passive text-passiveDark']: !item.is_active,
                        })}>
                          {item.is_active ? t('vacancy.active') : t('vacancy.passive')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )) : <h3 className="py-4 font-bold uppercase text-center">Нет результатов</h3>}
            </div>
            <div>
              <Pagination
                totalCount={count}
                currentPage={currentPage}
                pageSize={3}
                onPageChange={(page) => enableFilter({ page})}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale, query } = context
  const response = await api.get('/projects', {
    params: query,
    headers: { 'Accept-Language' : locale }
  })
  if (response.data.pages < query.page) {
    return {
      redirect: {
        destination: `/projects?page=${response.data.pages}`,
        statusCode: 302,
      }
    }
  }
  const [regions, donors, partners, directions] = await Promise.all([
    api.get('/reference/regions', {
      headers: {
        'Accept-Language': locale
      }
    }),
    api.get('/reference/donors', {
      headers: {
        'Accept-Language': locale
      }
    }),
    api.get('/reference/partners', {
      headers: {
        'Accept-Language': locale
      }
    }),
    api.get('/reference/directions', {
      headers: {
        'Accept-Language': locale
      }
    }),
  ]).then(res => res.map(item => item.data.data.map(item => ({ value: item.id, label: item.text }))))
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data,
      regions, donors, partners, directions,
      currentPage: query.page || 1
    }
  }
}

export default Projects
