import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

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
        <img
          src={imageUrl}
          alt="Изображение"
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
    </div>
    </div>
  )
}

const AnnualReports = () => {
  const { t } = useTranslation()

  const fakeGrid = [1, 2, 3, 4, 5, 6, 7, 8]
  const fakeChips = [1,2,3]


  return (
    <>
      <Head>
        <title>Годовой отчет</title>
      </Head>
      <section className="bg-secondary px-3">
        <Container>
          <div className="px-3 lg:px-0 py-8 w-full flex justify-between items-center">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-2">
                Наш годовой отчет 2021-2022
              </h1>
              <p className="text-sm lg:text-base text-primaryLight">pdf, 9.0 MB</p>
            </div>
            <Link
              className="px-6 py-3 lg:py-3 lg:px-7 border-[2px] border-primary rounded-[40px] text-sm text-base text-primaryDark"
              href="/"
            >
              Скачать
            </Link>
          </div>
        </Container>
        <Container className='pt-[28px] md:pt-[48px] pb-[24px]'>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[20px]">
            {fakeChips.map( (item, index) => {
              return (
                <div key={index} class="flex justify-center items-center gap-[64px] lg:block">
                  <CircularProgressBarWithImage percentage={22*(index+1)} imageUrl={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80'}/>
                  <div className='lg:ml-auto lg:mr-[12%] mt-0 lg:mt-5 lg:w-[150px]'>
                    <h3 className='text-primary text-[36px] sm:text-[64px] font-bold leading-[55px]'>
                      {22*(index+1)}%
                    </h3>
                    <p className='text-sm sm:text-base font-semibold'>
                      долларов в бюджете ФЕЦА. 
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
        <Container className="pt-[40px] pb-[24px] sm:pt-[24px] sm:pb-[48px]">
          <div className="w-full grid gap-3 sm:gap-6 md:gap-10 lg:gap-x-[46px] lg:gap-y-[34px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {fakeGrid.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-5 px-6 lg:py-7 lg:px-10 bg-primary rounded-[16px] flex sm:block items-center gap-[24px]"
                >
                  <div className="flex gap-[24px] justify-between items-center sm:mb-2 flex-row-reverse sm:flex-row">
                    <h3 className="text-[36px] sm:text-[44px] md:text-[58px] lg:text-[64px] font-bold text-white">
                      138
                    </h3>
                    <div className="hidden sm:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61"
                        height="61"
                        viewBox="0 0 61 61"
                        fill="none"
                      >
                        <path
                          d="M30.6934 48C40.3583 48 48.1934 40.165 48.1934 30.5C48.1934 20.835 40.3583 13 30.6934 13C21.0284 13 13.1934 20.835 13.1934 30.5C13.1934 40.165 21.0284 48 30.6934 48Z"
                          fill="white"
                        />
                        <path
                          d="M30.6934 57.9C29.3184 57.9 28.1934 56.875 28.1934 55.5V55.3C28.1934 53.925 29.3184 52.8 30.6934 52.8C32.0684 52.8 33.1934 53.925 33.1934 55.3C33.1934 56.675 32.0684 57.9 30.6934 57.9ZM48.5434 50.85C47.8934 50.85 47.2684 50.6 46.7684 50.125L46.4434 49.8C45.4684 48.825 45.4684 47.25 46.4434 46.275C47.4184 45.3 48.9934 45.3 49.9684 46.275L50.2934 46.6C51.2684 47.575 51.2684 49.15 50.2934 50.125C49.8184 50.6 49.1934 50.85 48.5434 50.85ZM12.8434 50.85C12.1934 50.85 11.5684 50.6 11.0684 50.125C10.0934 49.15 10.0934 47.575 11.0684 46.6L11.3934 46.275C12.3684 45.3 13.9434 45.3 14.9184 46.275C15.8934 47.25 15.8934 48.825 14.9184 49.8L14.5934 50.125C14.1184 50.6 13.4684 50.85 12.8434 50.85ZM55.6934 33H55.4934C54.1184 33 52.9934 31.875 52.9934 30.5C52.9934 29.125 54.1184 28 55.4934 28C56.8684 28 58.0934 29.125 58.0934 30.5C58.0934 31.875 57.0684 33 55.6934 33ZM5.89336 33H5.69336C4.31836 33 3.19336 31.875 3.19336 30.5C3.19336 29.125 4.31836 28 5.69336 28C7.06836 28 8.29336 29.125 8.29336 30.5C8.29336 31.875 7.26836 33 5.89336 33ZM48.2184 15.475C47.5684 15.475 46.9434 15.225 46.4434 14.75C45.4684 13.775 45.4684 12.2 46.4434 11.225L46.7684 10.9C47.7434 9.925 49.3184 9.925 50.2934 10.9C51.2684 11.875 51.2684 13.45 50.2934 14.425L49.9684 14.75C49.4934 15.225 48.8684 15.475 48.2184 15.475ZM13.1684 15.475C12.5184 15.475 11.8934 15.225 11.3934 14.75L11.0684 14.4C10.0934 13.425 10.0934 11.85 11.0684 10.875C12.0434 9.9 13.6184 9.9 14.5934 10.875L14.9184 11.2C15.8934 12.175 15.8934 13.75 14.9184 14.725C14.4434 15.225 13.7934 15.475 13.1684 15.475ZM30.6934 8.1C29.3184 8.1 28.1934 7.075 28.1934 5.7V5.5C28.1934 4.125 29.3184 3 30.6934 3C32.0684 3 33.1934 4.125 33.1934 5.5C33.1934 6.875 32.0684 8.1 30.6934 8.1Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="block sm:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                      >
                        <path
                          d="M21.4997 33.75C28.4262 33.75 34.0413 28.2655 34.0413 21.5C34.0413 14.7345 28.4262 9.25 21.4997 9.25C14.5731 9.25 8.95801 14.7345 8.95801 21.5C8.95801 28.2655 14.5731 33.75 21.4997 33.75Z"
                          fill="white"
                        />
                        <path
                          d="M21.5003 40.68C20.5149 40.68 19.7087 39.9625 19.7087 39V38.86C19.7087 37.8975 20.5149 37.11 21.5003 37.11C22.4857 37.11 23.292 37.8975 23.292 38.86C23.292 39.8225 22.4857 40.68 21.5003 40.68ZM34.2928 35.745C33.827 35.745 33.3791 35.57 33.0207 35.2375L32.7878 35.01C32.0891 34.3275 32.0891 33.225 32.7878 32.5425C33.4866 31.86 34.6153 31.86 35.3141 32.5425L35.547 32.77C36.2457 33.4525 36.2457 34.555 35.547 35.2375C35.2066 35.57 34.7587 35.745 34.2928 35.745ZM8.70783 35.745C8.24199 35.745 7.79408 35.57 7.43574 35.2375C6.73699 34.555 6.73699 33.4525 7.43574 32.77L7.66866 32.5425C8.36741 31.86 9.49616 31.86 10.1949 32.5425C10.8937 33.225 10.8937 34.3275 10.1949 35.01L9.96199 35.2375C9.62158 35.57 9.15574 35.745 8.70783 35.745ZM39.417 23.25H39.2737C38.2882 23.25 37.482 22.4625 37.482 21.5C37.482 20.5375 38.2882 19.75 39.2737 19.75C40.2591 19.75 41.137 20.5375 41.137 21.5C41.137 22.4625 40.4024 23.25 39.417 23.25ZM3.72699 23.25H3.58366C2.59824 23.25 1.79199 22.4625 1.79199 21.5C1.79199 20.5375 2.59824 19.75 3.58366 19.75C4.56908 19.75 5.44699 20.5375 5.44699 21.5C5.44699 22.4625 4.71241 23.25 3.72699 23.25ZM34.0599 10.9825C33.5941 10.9825 33.1462 10.8075 32.7878 10.475C32.0891 9.7925 32.0891 8.69 32.7878 8.0075L33.0207 7.78C33.7195 7.0975 34.8482 7.0975 35.547 7.78C36.2457 8.4625 36.2457 9.565 35.547 10.2475L35.3141 10.475C34.9737 10.8075 34.5257 10.9825 34.0599 10.9825ZM8.94074 10.9825C8.47491 10.9825 8.02699 10.8075 7.66866 10.475L7.43574 10.23C6.73699 9.5475 6.73699 8.445 7.43574 7.7625C8.13449 7.08 9.26324 7.08 9.96199 7.7625L10.1949 7.99C10.8937 8.6725 10.8937 9.775 10.1949 10.4575C9.85449 10.8075 9.38866 10.9825 8.94074 10.9825ZM21.5003 5.82C20.5149 5.82 19.7087 5.1025 19.7087 4.14V4C19.7087 3.0375 20.5149 2.25 21.5003 2.25C22.4857 2.25 23.292 3.0375 23.292 4C23.292 4.9625 22.4857 5.82 21.5003 5.82Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <p class="text-sm lg:text-base font-semibold text-white">
                    реализованных проектов {item}
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
            {fakeGrid.map((item, index) => {
              return (
                <div className="service-item w-full flex items-center px-[48px] py-[16px] justify-between">
                  <div className="flex gap-[24px] items-center">
                    <span className="text-lg font-semibold">2019-2020</span>
                    <span className="text-sm text-primaryLight">pdf, 9.0 MB</span>
                  </div>
                  <div className="w-[32px] h-[32px] rounded-[50%] border-[2px] border-primaryLight flex justify-center items-center">
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
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale } = context

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default AnnualReports
