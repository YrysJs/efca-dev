import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'

const Contacts = ({ emails, addresses, latitude, longitude }) => {
  const { t } = useTranslation()
  const props = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAUi4XQSNmM2wFnEkgd17dFQcdw9Nix9F0',
  })
  const { isLoaded } = props
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.76076558649143!2d76.90679381323577!3d43.205876384853006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368b7627e0c41%3A0xec685844e5d45321!2z0YPQu9C40YbQsCDQltCw0YDQvtC60L7QstCwLCDQkNC70LzQsNGC0YsgMDUwMDYw!5e0!3m2!1sru!2skz!4v1699008161489!5m2!1sru!2skz" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="mt-6 overflow-hidden rounded-lg">
              {isLoaded && (
                <GoogleMap
                  zoom={16}
                  center={{ lat: Number(latitude), lng: Number(longitude) }}
                  mapContainerStyle={{
                    width: '100%',
                    height: '320px',
                  }}
                  options={{
                    fullscreenControl: false,
                    panControl: false,
                    mapTypeControl: false,
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    zoomControl: false,
                  }}
                >
                  <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} />
                </GoogleMap>
              )}
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
