import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import Slider from 'react-slick'
import Image from 'next/image'

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
                rows: 2,
                gap: 20
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                rows: 2,
                gap: 20
            }
        }
    ]
}

const Donors = () => {
    const { t } = useTranslation()

    const fakeSlider = [
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
                <title>{t('donors.head')}</title>
            </Head>
            <section className="py-8 px-3 md:py-8 md:px-8 lg:py-10">
                <Container className="flex-col">
                    <h1 className="flex-1 text-2xl lg:text-3xl font-bold text-primaryDark uppercase">
                        {t('donors.head')}
                    </h1>
                    <div className="flex max-w-[792px] items-center justify-center shadow-md rounded-[24px] px-12 lg:px-[124px] py-6 lg:py-[36px] mx-auto mt-10 text-center font-bold text-xl lg:text-2xl">
                        Мы реализуем проекты, которые содействуют развитию нашего общества.
                    </div>
                    <div className="flex lg:justify-center gap-6 lg:gap-12 flex-wrap mt-6 lg:mt-12 mb-4 lg:mb-10">
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#AC76E1] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M24 20.1196V40.5196M24 20.1196C24 16.7593 24 15.0791 24.654 13.7957C25.2292 12.6667 26.1474 11.7487 27.2764 11.1735C28.5598 10.5195 30.2393 10.5195 33.5996 10.5195H38.7996C39.9197 10.5195 40.48 10.5195 40.9078 10.7375C41.2841 10.9293 41.5905 11.2352 41.7822 11.6116C42.0002 12.0394 42 12.5994 42 13.7195V31.3195C42 32.4396 42.0002 32.9997 41.7822 33.4276C41.5905 33.8039 41.2841 34.1098 40.9078 34.3015C40.48 34.5195 39.92 34.5195 38.7999 34.5195H33.1377C31.2593 34.5195 30.3203 34.5195 29.4678 34.7784C28.713 35.0076 28.011 35.3834 27.4017 35.8843C26.7133 36.45 26.192 37.2315 25.1501 38.7944L24 40.5196M24 20.1196C24 16.7593 23.9997 15.0791 23.3457 13.7957C22.7705 12.6667 21.8533 11.7487 20.7243 11.1735C19.4409 10.5195 17.7605 10.5195 14.4002 10.5195H9.2002C8.08009 10.5195 7.51962 10.5195 7.0918 10.7375C6.71547 10.9293 6.40973 11.2352 6.21799 11.6116C6 12.0394 6 12.5994 6 13.7195V31.3195C6 32.4396 6 32.9997 6.21799 33.4276C6.40973 33.8039 6.71547 34.1098 7.0918 34.3015C7.51962 34.5195 8.08009 34.5195 9.2002 34.5195H14.8624C16.7409 34.5195 17.6799 34.5195 18.5325 34.7784C19.2872 35.0076 19.9893 35.3834 20.5986 35.8843C21.287 36.45 21.8076 37.2315 22.8496 38.7944L24 40.5196" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">молодежь и образование</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#5E77FB] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M40 20.8491V12.9194V12.9129C40 10.677 40 9.55842 39.5645 8.70361C39.181 7.95096 38.5682 7.339 37.8156 6.95551C36.9599 6.51953 35.8406 6.51953 33.6004 6.51953H14.4004C12.1602 6.51953 11.0392 6.51953 10.1836 6.95551C9.43095 7.339 8.81947 7.95096 8.43597 8.70361C8 9.55926 8 10.6792 8 12.9194V20.8491C8 33.9856 17.9356 39.8752 22.1479 41.7818C22.5945 41.984 22.8183 42.0852 23.3237 42.172C23.6425 42.2267 24.3589 42.2267 24.6777 42.172C25.1803 42.0857 25.4025 41.9851 25.844 41.7853L25.8516 41.7818C30.0639 39.8752 40 33.9857 40 20.8491Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">поддержка социально уязвимых групп</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#5396FC] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M30 38.5195C30 34.1013 24.6274 30.5195 18 30.5195C11.3726 30.5195 6 34.1013 6 38.5195M33.6562 10.8628C34.3991 11.6057 34.9884 12.4876 35.3904 13.4582C35.7925 14.4288 35.9996 15.4689 35.9996 16.5195C35.9996 17.5701 35.7927 18.6104 35.3906 19.581C34.9886 20.5516 34.3991 21.4336 33.6562 22.1764M38 6.51953C39.3132 7.83275 40.3549 9.39177 41.0656 11.1076C41.7763 12.8234 42.1419 14.6622 42.1419 16.5194C42.1419 18.3766 41.7761 20.2157 41.0654 21.9315C40.3547 23.6473 39.3132 25.2065 38 26.5197M18 24.5195C13.5817 24.5195 10 20.9378 10 16.5195C10 12.1013 13.5817 8.51953 18 8.51953C22.4183 8.51953 26 12.1013 26 16.5195C26 20.9378 22.4183 24.5195 18 24.5195Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">вовлечение граждан и эффективное управление</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#59C2AF] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M32 16.5195C32 12.1013 28.4183 8.51953 24 8.51953C19.5817 8.51953 16 12.1013 16 16.5195M42 22.9194V34.1194C42 36.3596 42.0004 37.4799 41.5645 38.3356C41.181 39.0882 40.5682 39.7 39.8156 40.0835C38.9599 40.5195 37.8406 40.5195 35.6004 40.5195H12.4004C10.1602 40.5195 9.03924 40.5195 8.18359 40.0835C7.43095 39.7 6.81947 39.0882 6.43597 38.3356C6 37.4799 6 36.3596 6 34.1194V22.9194C6 20.6792 6 19.5593 6.43597 18.7036C6.81947 17.951 7.43095 17.339 8.18359 16.9555C9.03924 16.5195 10.1602 16.5195 12.4004 16.5195H35.6004C37.8406 16.5195 38.9599 16.5195 39.8156 16.9555C40.5682 17.339 41.181 17.951 41.5645 18.7036C42.0004 19.5593 42 20.6792 42 22.9194Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">укрепление организационного потенциала НПО</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#6EC590] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M34 40.5195C34 37.2058 29.5228 34.5195 24 34.5195C18.4772 34.5195 14 37.2058 14 40.5195M42 34.5193C42 32.0589 39.5318 29.9444 36 29.0186M6 34.5193C6 32.0589 8.46819 29.9444 12 29.0186M36 20.9917C37.2275 19.8931 38 18.2965 38 16.5195C38 13.2058 35.3137 10.5195 32 10.5195C30.4633 10.5195 29.0615 11.0972 28 12.0473M12 20.9917C10.7725 19.8931 10 18.2965 10 16.5195C10 13.2058 12.6863 10.5195 16 10.5195C17.5367 10.5195 18.9385 11.0972 20 12.0473M24 28.5195C20.6863 28.5195 18 25.8332 18 22.5195C18 19.2058 20.6863 16.5195 24 16.5195C27.3137 16.5195 30 19.2058 30 22.5195C30 25.8332 27.3137 28.5195 24 28.5195Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">поддержка социального предпринимательства</h3>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className="flex gap-4 flex-wrap py-6 md:py-8 px-3 lg:px-0 lg:py-12">
                    <div className="max-w-[100%] md:max-w-[49%] lg:max-w-[584px] h-[228px] lg:h-[350px] hover:h-auto relative px-6 py-9 shadow-md rounded-[16px] overflow-hidden">
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, porro? Sed, maxime debitis! Ratione suscipit non ab, maxime provident quis ducimus doloremque dolores nemo, recusandae pariatur eos hic iusto consequatur!
                        </div>
                        <div className='bg-lightBlue h-[100%] w-[100%] flex justify-center items-center text-center hover:opacity-0 duration-500 absolute top-0 left-0'>
                            <div>
                                <h3 className='text-2xl lg:text-3xl font-bold'>1 этап</h3>
                                <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>Оценка потребностей</h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[49%] lg:max-w-[584px] h-[228px] lg:h-[350px] hover:h-auto relative px-6 py-9 shadow-md rounded-[16px] overflow-hidden">
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, porro? Sed, maxime debitis! Ratione suscipit non ab, maxime provident quis ducimus doloremque dolores nemo, recusandae pariatur eos hic iusto consequatur!
                        </div>
                        <div className='bg-lightGreen h-[100%] w-[100%] flex justify-center items-center text-center hover:opacity-0 duration-500 absolute top-0 left-0'>
                            <div>
                                <h3 className='text-2xl lg:text-3xl font-bold'>1 этап</h3>
                                <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>Оценка потребностей</h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[49%] lg:max-w-[384px] h-[228px] lg:h-[350px] hover:h-auto relative px-6 py-9 shadow-md rounded-[16px] overflow-hidden">
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, porro? Sed, maxime debitis! Ratione suscipit non ab, maxime provident quis ducimus doloremque dolores nemo, recusandae pariatur eos hic iusto consequatur!
                        </div>
                        <div className='bg-lightOrange h-[100%] w-[100%] flex justify-center items-center text-center hover:opacity-0 duration-500 absolute top-0 left-0'>
                            <div>
                                <h3 className='text-2xl lg:text-3xl font-bold'>1 этап</h3>
                                <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>Оценка потребностей</h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[49%] lg:max-w-[384px] h-[228px] lg:h-[350px] hover:h-auto relative px-6 py-9 shadow-md rounded-[16px] overflow-hidden">
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, porro? Sed, maxime debitis! Ratione suscipit non ab, maxime provident quis ducimus doloremque dolores nemo, recusandae pariatur eos hic iusto consequatur!
                        </div>
                        <div className='bg-lightPurple h-[100%] w-[100%] flex justify-center items-center text-center hover:opacity-0 duration-500 absolute top-0 left-0'>
                            <div>
                                <h3 className='text-2xl lg:text-3xl font-bold'>1 этап</h3>
                                <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>Оценка потребностей</h4>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[49%] lg:max-w-[384px] h-[228px] lg:h-[350px] hover:h-auto relative px-6 py-9 shadow-md rounded-[16px] overflow-hidden">
                        <div className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, porro? Sed, maxime debitis! Ratione suscipit non ab, maxime provident quis ducimus doloremque dolores nemo, recusandae pariatur eos hic iusto consequatur!
                        </div>
                        <div className='bg-lightPink h-[100%] w-[100%] flex justify-center items-center text-center hover:opacity-0 duration-500 absolute top-0 left-0'>
                            <div>
                                <h3 className='text-2xl lg:text-3xl font-bold'>1 этап</h3>
                                <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>Оценка потребностей</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-12 bg-secondary lg:block hidden">
                <Container className="flex-wrap gap-x-7 gap-y-14">
                    
                </Container>
            </section>
            <section className='px-4'>
                <Container className="py-10 flex-col">
                    <h3 className="flex-1 text-3xl font-bold text-primaryDark uppercase">Отзывы доноров</h3>
                    <Slider 
                        {...settings}
                        className='py-12' 
                    >
                        {fakeSlider.map((item, index) => (
                            <div key={index}>
                                <div className="!flex justify-center items-center">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
            <section className="py-12 px-4">
                <Container className='flex-col gap-x-9 gap-y-7 lg:gap-12'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-primaryDark uppercase'>Наши доноры</h3>
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
export default Donors