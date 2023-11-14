import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import Image from 'next/image'

const Partners = ({ partners, materials, company_partners }) => {
    const { t } = useTranslation()
    console.log(company_partners);
    return (
        <>
             <Head>
                <title>{t('partners.head')}</title>
            </Head>
            <section className="py-6 px-3 md:py-8 md:px-8 lg:py-10">
                <Container>
                    <h1 className="text-2xl/8 lg:text-3xl font-bold text-black uppercase">
                    {t('partners.head')}
                    </h1>
                </Container>
            </section>
            <section>
                <div className="flex flex-col gap-2 sm:gap-6 lg:gap-12">
                    { partners.map( (item, index) => {
                        return (
                            <div key={index} className="flex items-center smd:flex-row flex-col lg:gap-10">
                                <div 
                                    className="
                                    relative lg:min-w-[592px]
                                    min-w-[45vw]
                                    min-h-[355px]
                                    sm:min-h-[50vh]
                                    lg:min-h-[607px] 
                                    lg:max-w-[40vw] 
                                    lg:max-h-[50vh] 
                                    w-[100%] 
                                    h-[100%]">
                                        <Image src={item.image} fill={true} className="object-cover object-top sm:object-scale-down smd:object-cover" alt=""/>
                                </div>
                                <div 
                                    className="
                                    relative
                                    flex flex-col justify-center
                                    py-4
                                    px-3
                                    lg:max-w-[55vw]
                                    md:min-h-[355px]
                                    md:py-8
                                    md:px-7
                                    lg:w-[100%]
                                    lg:min-h-[607px] 
                                    lg:max-h-[50vh]
                                    lg:pr-10">
                                        <h3 className="
                                            text-lg 
                                            md:text-xl 
                                            lg:text-2xl 
                                            pb-4 
                                            sm:pb-6 
                                            md:pb-8 
                                            lg:pb-12 
                                            font-semibold"
                                        >
                                            {item.full_name} / 
                                                <span className="text-lightgray text-base md:text-lg lg:text-lg">
                                                    { item.position }
                                                </span>
                                            </h3>
                                    <p className="text-sm sm:text-base font-medium lg:text-lg">
                                        { item.text }
                                    </p>
                                    <Link href={`/success-stories/${item.id}`} className='mt-4 ml-auto lg:absolute right-[0] lg:right-[48px] lg:bottom-[0px] flex items-center justify-center gap-2.5 bg-lighterBlue w-[170px] lg:w-[219px] h-[33px] lg:h-[48px]  rounded-[24px]'>
                                        <span className="text-sm lg:text-base font-bold text-[#392DCA]">{t('partners.full_history')}</span>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path d="M3.99219 12.5195H21.9922M21.9922 12.5195L16.9922 7.51953M21.9922 12.5195L16.9922 17.5195" stroke="#392DCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                    </Link> 
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </section>
            <section className="py-4 px-3 sm:py-10 md:py-16 lg:py-24">
                <Container className='flex flex-col gap-6'>
                    <h3 className="text-2xl/8 lg:text-3xl font-bold text-black uppercase">
                    {t('partners.history_success')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        { materials.map( (item, i) => {
                            return (
                                <Link href={`/materials/${item.id}`} key={i}>
                                    <div className='relative w-[100%] h-[216px] rounded-[8px] overflow-hidden'>
                                        <Image src={item.image} alt={i} fill={true} objectFit='cover'/>
                                    </div>
                                    <div className='py-4 px-5'>
                                        <p className='text-darkGray text-[10px] sm:text-xs'>{item.date_from}</p>
                                        <h3 className='text-primaryDark text-base font-medium lg:font-semibold md:text-xl lg:text-2xl'>{item.title}</h3>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </Container>
            </section>
            <section className='pb-4 px-3 sm:pb-10 md:pb-16 lg:pb-24'>
            <Container className='flex-col gap-x-9 gap-y-7 lg:gap-12'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-primaryDark uppercase'>{t('partners.our_partners')}</h3>
                    <div className="flex flex-wrap justify-between gap-x-9 lg:gap-x-[90px] gap-y-7 lg:gap-12">
                        { company_partners.map( (item, i) => {
                            return (
                                <div key={i} className='w-[150px] md:w-[228px] h-[228px] relative'>
                                    <div className="relative w-[100%] h-[140px]">
                                        <Image src={item.image} alt={'image' + i} fill={true} objectFit='contain'/>
                                    </div>
                                    <div className='pt-4 text-center'>
                                        <h3 className='text-base font-medium pb-2'>{item.text}</h3>
                                        <Link className='block text-xs text-gray' href={item.link}>{item.link}</Link>
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
    const { locale, query } = context
    const fetchPartners = await api.get('/partners')
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            ...fetchPartners.data,
        },
    }
}

export default Partners;