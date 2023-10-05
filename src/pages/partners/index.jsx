import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import Image from 'next/image'

const Partners = () => {
    const { t } = useTranslation()

    const fakeHistory = [
        {
            imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            date: '01.01.1999',
            title: 'Lorem ipsum dolor sit amet.'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            date: '01.01.1999',
            title: 'Lorem ipsum dolor sit amet.'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            date: '01.01.1999',
            title: 'Lorem ipsum dolor sit amet.'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            date: '01.01.1999',
            title: 'Lorem ipsum dolor sit amet.'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80',
            date: '01.01.1999',
            title: 'Lorem ipsum dolor sit amet.'
        },
    ]

    const fakePartners = [
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
        {
            imgUrl: 'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png',
            title: 'Chevron',
            url: 'www.chvron.com'
        },
    ]

    return (
        <>
             <Head>
                <title>Партнеры</title>
            </Head>
            <section className="py-6 px-3 md:py-8 md:px-8 lg:py-10">
                <Container>
                    <h1 className="text-2xl/8 lg:text-3xl font-bold text-black uppercase">
                        Партнеры
                    </h1>
                </Container>
            </section>
            <section>
                <div className="flex flex-col gap-12">
                    <div className="flex items-center lg:flex-row flex-col lg:gap-10">
                        <div 
                            className="
                            relative lg:min-w-[592px]
                            min-w-[100vw]
                            min-h-[355px]
                            sm:min-h-[50vh]
                            lg:min-h-[607px] 
                            lg:max-w-[40vw] 
                            lg:max-h-[50vh] 
                            w-[100%] 
                            h-[100%]">
                                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" fill={true} objectFit='cover' alt=""/>
                        </div>
                        <div 
                            className="
                            relative
                            py-4
                            px-3
                            md:py-8
                            md:px-7
                            lg:w-[50vw]
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
                                    Захира Бегалиева / 
                                        <span className="text-lightgray text-base md:text-lg lg:text-lg">
                                            CEO, «Адалдық алаңы»
                                        </span>
                                    </h3>
                            <p className="text-sm sm:text-base font-medium lg:text-lg">
                                У меня инвалидность с детства – проблема с опорно-двигательным аппаратом. После многочисленных операций я стала ходить. Росла в многодетной семье в ауле Туркестанской области. 

                                Так как родители были заняты работой, меня отдали на обучение в специальный интернат, где я увидела других детей с более сложными патологиями. Тогда и осознала, что хочу помогать им
                            </p>
                            <Link href="https://github.com/" className='mt-4 ml-auto lg:absolute right-[0] lg:right-0 lg:bottom-[-160px] flex items-center justify-center gap-2.5 bg-lighterBlue w-[170px] lg:w-[219px] h-[33px] lg:h-[48px]  rounded-[24px]'>
                                <span className="text-sm lg:text-base font-bold text-[#392DCA]">Полная история</span>
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M3.99219 12.5195H21.9922M21.9922 12.5195L16.9922 7.51953M21.9922 12.5195L16.9922 17.5195" stroke="#392DCA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </Link> 
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 px-3 sm:py-10 md:py-16 lg:py-24">
                <Container className='flex flex-col gap-6'>
                    <h3 className="text-2xl/8 lg:text-3xl font-bold text-black uppercase">
                        Истории успеха
                    </h3>
                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start relative">
                        { fakeHistory.map( (item, i) => {
                            return (
                                <Link href="test" key={i} className='w-[378px]'>
                                    <div className='relative w-[100%] h-[216px] rounded-[8px] overflow-hidden'>
                                        <Image src={item.imgUrl} alt={i} fill={true} objectFit='cover'/>
                                    </div>
                                    <div className='py-4 px-5'>
                                        <p className='text-darkGray text-[10px] sm:text-xs'>{item.date}</p>
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
                    <h3 className='text-2xl lg:text-3xl font-bold text-primaryDark uppercase'>Наши партнеры</h3>
                    <div className="flex flex-wrap justify-between gap-x-9 lg:gap-x-[90px] gap-y-7 lg:gap-12">
                        { fakePartners.map( (item, i) => {
                            return (
                                <div key={i} className='w-[150px] md:w-[228px] h-[228px] relative'>
                                    <div className="relative w-[100%] h-[140px]">
                                        <Image src={item.imgUrl} alt={i} fill={true} objectFit='contain'/>
                                    </div>
                                    <div className='pt-4 text-center'>
                                        <h3 className='text-base font-medium pb-2'>{item.title}</h3>
                                        <Link className='block text-xs text-gray' href="https://google.com">{item.url}</Link>
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

export async function getStaticProps(context) {
    const { locale } = context
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}

export default Partners;