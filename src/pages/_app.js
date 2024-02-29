import Head from 'next/head'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { Header, Footer } from '@/widgets/layout'
import { Layout } from '@/shared/ui'
import '@/shared/styles/globals.css'
import '@/shared/styles/custom.css'
import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0006BB",
};

const Loader = () => {
  return (
    <>
      <div className='h-[100vh] w-[100vw]'>
        <div className="absolute top-0 left-0 h-[100vh] w-[100vw] z-[9999] flex items-center justify-center" style={{ background: 'rgba(216, 227, 255, 0.5)' }}>
          <ScaleLoader
            color={'#0006BB'}
            loading={true}
            cssOverride={override}
            height={100}
            width={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </>
  )
}

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter()

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout 
        header={<Header locale={locale} />} 
        content={ loading?<Loader/>:<Component locale={locale} {...pageProps} />} 
        footer={<Footer />} />
    </>
  )
}


export default appWithTranslation(App)