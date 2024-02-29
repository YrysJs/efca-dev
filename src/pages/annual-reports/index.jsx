import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import clsx from 'clsx'

const CircularProgressBarWithImage = ({ percentage, imageUrl }) => {
  return (
    <div className="flex justify-center">
      <div className='w-[128px] sm:w-[148px] h-[128px] sm:h-[148px] relative'>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: '16px',
          pathColor: `#0006BB`,
          textColor: '#007acc',
          trailColor: '#EEEFFF',
        })}
      />
      <div style={{ transform: 'translate(-50%, -50%)' }} className='absolute top-[50%] left-[50%] w-[108px] sm:w-[130px] h-[108px] sm:h-[130px]'>
        <Image
          src={imageUrl}
          alt="Изображение"
          fill={true}
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
    </div>
    </div>
  )
}

const AnnualReports = (data) => {
  const { t } = useTranslation()


  return (
    <>
      <Head>
        <title>{t('annual-reports.title')}</title>
      </Head>
      <section className="bg-secondary px-3">
        <Container>
          <div className="px-3 lg:px-0 py-8 w-full flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-2">
                {t('annual-reports.year')} {data['annual-report'].main_year.title}
              </h1>
              <p className="text-sm lg:text-base text-primaryLight">{data['annual-report'].main_year.file.type}, { (data['annual-report'].main_year.file.size*0.001).toFixed(2) } MB</p>
            </div>
            <Link
              className="px-6 py-3 lg:py-3 lg:px-7 border-[2px] border-primary rounded-[40px] text-sm text-base text-primaryDark"
              href={data['annual-report'].main_year.file.path}
            >
              {t('annual-reports.download')}
            </Link>
          </div>
        </Container>
        <Container className='pt-[28px] md:pt-[48px] pb-[24px]'>
          <div className={clsx('w-full grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[20px]', {
            ['lg:grid-cols-2'] : data['annual-report'].stats.length <= 2,
            ['lg:grid-cols-3'] : data['annual-report'].stats.length > 2
          })}>
            {data['annual-report'].stats.map( (item, index) => {
              return (
                <div key={index} class="flex smd:justify-center items-center gap-[64px] lg:block">
                  <CircularProgressBarWithImage percentage={item.percent} imageUrl={item.image}/>
                  <div className='lg:ml-[50%] mt-0 lg:mt-5 lg:w-[150px]'>
                    <h3 className='text-primary text-[36px] sm:text-[64px] font-bold leading-[55px]'>
                      {item.percent}%
                    </h3>
                    <p className='text-sm sm:text-base font-semibold'>
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
        <Container className="pt-[40px] pb-[24px] sm:pt-[24px] sm:pb-[48px]">
          <div className="w-full grid gap-3 sm:gap-6 md:gap-10 lg:gap-x-[46px] lg:gap-y-[34px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data['annual-report'].advantages.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-5 px-6 lg:py-7 lg:px-10 bg-primary rounded-[16px] flex sm:block items-center gap-[24px]"
                >
                  <div className="flex gap-[16px] sm:gap-[24px] justify-between items-center sm:mb-2 flex-row-reverse sm:flex-row">
                    <h3 className="text-white flex flex-col sm:flex-row items-center sm:gap-4">
                      <p className="text-[36px] sm:text-[44px] md:text-[58px] w-[40px] lg:text-[64px] font-bold">{item.count}</p>
                    </h3>
                    <div className="hidden sm:block relative w-[50px] h-[50px]">
                      <Image
                        src={item.image}
                        alt="Изображение"
                        fill={true}
                        objectFit='cover'
                      />
                    </div>
                    <div className="block sm:hidden relative w-[40px] h-[40px]">
                      <Image
                        src={item.image}
                        alt="Изображение"
                        fill={true}
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <p className="text-sm lg:text-base font-semibold text-white">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
      <section className="px-3 py-2">
        <Container>
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            {data.lists.map((item, index) => {
              return (
                <div key={index} className="service-item w-full flex items-center px-[48px] py-[16px] justify-between">
                  <div className="flex gap-[24px] items-center">
                    <span className="text-lg font-semibold">{item.title}</span>
                    <span className="text-sm text-primaryLight">{item.file.type}, {(item.file.size*0.001).toFixed(2)} MB</span>
                  </div>
                  <Link href={item.file.path} className="w-[32px] h-[32px] rounded-[50%] border-[2px] border-primaryLight flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M12.6938 14H4.69385M8.69385 2L8.69385 11.3333M8.69385 11.3333L5.36051 8M8.69385 11.3333L12.0272 8"
                        stroke="#0006BB"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  const response = await api.get('/annual-report', {
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data
    },
    revalidate: 3600
  }
}

export default AnnualReports
