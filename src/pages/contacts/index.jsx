import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'

const Contacts = ({ emails, addresses, phone_number }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('contacts.head')}</title>
      </Head>
      <section className="py-8 px-3 md:py-8 md:px-8 lg:py-10 flex">
        <Container className="flex-col sm:flex-col md:flex-col lg:flex-row">
          <h1 className="flex-[2] text-2xl/8 lg:text-3xl font-bold text-primaryDark uppercase">{t('contacts.head')}</h1>
          <div className="flex-[3] pt-8 lg:pt-0">
            <div className="flex items-center">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99219 9.51953L19.335 18.5195L30.9921 9.51953M32.4922 12.8195V24.2195C32.4922 25.8996 32.4925 26.7398 32.1655 27.3816C31.8779 27.9461 31.4184 28.4049 30.8539 28.6925C30.2121 29.0195 29.3726 29.0195 27.6925 29.0195H10.2925C8.61232 29.0195 7.77162 29.0195 7.12988 28.6925C6.5654 28.4049 6.10679 27.9461 5.81917 27.3816C5.49219 26.7398 5.49219 25.8996 5.49219 24.2195V12.8195C5.49219 11.1393 5.49219 10.2993 5.81917 9.65759C6.10679 9.09311 6.5654 8.63413 7.12988 8.34651C7.77162 8.01953 8.61232 8.01953 10.2925 8.01953H27.6925C29.3726 8.01953 30.2121 8.01953 30.8539 8.34651C31.4184 8.63413 31.8779 9.09311 32.1655 9.65759C32.4925 10.2993 32.4922 11.1393 32.4922 12.8195Z" stroke="#7C71F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-3 text-lg md:text-xl lg:text-2xl font-semibold">E-mail</span>
            </div>
            {emails.map((item, index) => (
              <div key={index} className="mt-3 flex items-start lg:items-center flex-col sm:flex-row lg:flex-row">
                <span className="mr-2 text-base lg:text-lg font-medium">{item.email_description}</span>
                <Link href={'mailto:' + item.email}>
                  <span className="text-base lg:text-lg font-medium text-primaryLight hover:underline">{item.email}</span>
                </Link>
              </div>
            ))}
            <div className="mt-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 32 33" fill="none">
                <path d="M29.2868 24.9594C29.2868 25.4394 29.1802 25.9327 28.9535 26.4127C28.7268 26.8927 28.4335 27.346 28.0468 27.7727C27.3935 28.4927 26.6735 29.0127 25.8602 29.346C25.0602 29.6794 24.1935 29.8527 23.2602 29.8527C21.9002 29.8527 20.4468 29.5327 18.9135 28.8794C17.3802 28.226 15.8468 27.346 14.3268 26.2394C12.7935 25.1194 11.3402 23.8794 9.95349 22.506C8.58016 21.1194 7.34016 19.666 6.23349 18.146C5.14016 16.626 4.26016 15.106 3.62016 13.5994C2.98016 12.0794 2.66016 10.626 2.66016 9.23937C2.66016 8.3327 2.82016 7.46604 3.14016 6.66604C3.46016 5.8527 3.96682 5.10604 4.67349 4.43937C5.52682 3.59937 6.46016 3.18604 7.44682 3.18604C7.82016 3.18604 8.19349 3.26604 8.52682 3.42604C8.87349 3.58604 9.18016 3.82604 9.42016 4.1727L12.5135 8.5327C12.7535 8.86604 12.9268 9.1727 13.0468 9.46604C13.1668 9.74604 13.2335 10.026 13.2335 10.2794C13.2335 10.5994 13.1402 10.9194 12.9535 11.226C12.7802 11.5327 12.5268 11.8527 12.2068 12.1727L11.1935 13.226C11.0468 13.3727 10.9802 13.546 10.9802 13.7594C10.9802 13.866 10.9935 13.9594 11.0202 14.066C11.0602 14.1727 11.1002 14.2527 11.1268 14.3327C11.3668 14.7727 11.7802 15.346 12.3668 16.0394C12.9668 16.7327 13.6068 17.4394 14.3002 18.146C15.0202 18.8527 15.7135 19.506 16.4202 20.106C17.1135 20.6927 17.6868 21.0927 18.1402 21.3327C18.2068 21.3594 18.2868 21.3994 18.3802 21.4394C18.4868 21.4794 18.5935 21.4927 18.7135 21.4927C18.9402 21.4927 19.1135 21.4127 19.2602 21.266L20.2735 20.266C20.6068 19.9327 20.9268 19.6794 21.2335 19.5194C21.5402 19.3327 21.8468 19.2394 22.1802 19.2394C22.4335 19.2394 22.7002 19.2927 22.9935 19.4127C23.2868 19.5327 23.5935 19.706 23.9268 19.9327L28.3402 23.066C28.6868 23.306 28.9268 23.586 29.0735 23.9194C29.2068 24.2527 29.2868 24.586 29.2868 24.9594Z" stroke="#7C71F6" stroke-width="3" stroke-miterlimit="10"/>
              </svg>
              <span className="ml-3 text-lg md:text-xl lg:text-2xl font-semibold">{t('contacts.phone')}</span>
            </div>
            <div className="mt-3 flex items-start lg:items-center flex-col sm:flex-row lg:flex-row">
                <span className="mr-2 text-base lg:text-lg font-medium">{t('main.head')}:</span>
                <Link href={'tel:' + phone_number}>
                  <span className="text-base lg:text-lg font-medium text-primaryLight hover:underline">{phone_number}</span>
                </Link>
            </div>
            <div className="mt-6 flex items-center">
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.49219 15.4042C8.49219 22.6819 14.8589 28.7003 17.677 31.0077L17.6781 31.0086C18.0822 31.3395 18.2843 31.505 18.5855 31.5898C18.8198 31.6557 19.1644 31.6557 19.3987 31.5898C19.7001 31.5049 19.9028 31.3392 20.3076 31.0077C23.1257 28.7003 29.4921 22.6819 29.4921 15.4041C29.4921 12.65 28.3859 10.0086 26.4168 8.06111C24.4477 6.11362 21.777 5.01953 18.9922 5.01953C16.2075 5.01953 13.5367 6.1136 11.5676 8.0611C9.59843 10.0086 8.49219 12.65 8.49219 15.4042Z" stroke="#7C71F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-3 text-lg md:text-xl lg:text-2xl font-semibold">{t('contacts.address')}</span>
            </div>
            {addresses.map((item, index) => (
              <div key={index} className="mt-3 flex items-center">
                <span className="mr-2 text-base lg:text-lg font-medium">{item.address}</span>
              </div>
            ))}
            
            <div className="mt-6 overflow-hidden rounded-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.76076558649143!2d76.90679381323577!3d43.205876384853006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368b7627e0c41%3A0xec685844e5d45321!2z0YPQu9C40YbQsCDQltCw0YDQvtC60L7QstCwLCDQkNC70LzQsNGC0YsgMDUwMDYw!5e0!3m2!1sru!2skz!4v1699008161489!5m2!1sru!2skz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale } = context
  const response = await api.get('/contact', {
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data
    },
  }
}

export default Contacts
