import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import Slider from 'react-slick'
import Image from 'next/image'
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import clsx from 'clsx'
import { useEffect } from 'react'

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

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: false,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    rows: 1,
    customPaging: function (i) {
        return <div className="custom-dot2"></div>
    },
    appendDots: dots => (
        <div>
            <ul
            className="custom-dots2"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                top: '10px',
            }}
            >
            {dots}
            </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                rows: 2,
                gap: 20
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2,
                gap: 20
            }
        }
    ]
}
const settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: false,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 1,
    customPaging: function (i) {
        return <div className="custom-dot2"></div>
    },
    appendDots: dots => (
        <div>
            <ul
            className="custom-dots2"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                top: '10px',
            }}
            >
            {dots}
            </ul>
        </div>
    ),
    responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                rows: 1,
                gap: 20
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                gap: 20
            }
        }
    ]
}

const Donors = (data) => {
    const { t } = useTranslation()

    useEffect( () => {
        let windowHeight = window.innerHeight
        const chipAnim = () => {
            const getChips = document.querySelectorAll('.box-item')
            getChips.forEach( (item, index) => {
                if (item.getBoundingClientRect().top < windowHeight / 3 && item.getBoundingClientRect().bottom > windowHeight / 3) {
                    item.children[0].children[0].classList.add('back-anim')
                    item.children[0].children[1].classList.add('front-anim')
                } else {
                    item.children[0].children[0].classList.remove('back-anim')
                    item.children[0].children[1].classList.remove('front-anim')
                }
            })
        }

        if (window.innerWidth < 768) {
            window.addEventListener('scroll', chipAnim)

            return () => {
                window.removeEventListener('scroll', chipAnim)
            }
        }
    }, [])

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
                        {t('donors.title')}
                    </div>
                    <div className="flex lg:justify-center flex-col lg:flex-row gap-6 lg:gap-12 flex-wrap mt-6 lg:mt-12 mb-4 lg:mb-10">
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#AC76E1] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M24 20.1196V40.5196M24 20.1196C24 16.7593 24 15.0791 24.654 13.7957C25.2292 12.6667 26.1474 11.7487 27.2764 11.1735C28.5598 10.5195 30.2393 10.5195 33.5996 10.5195H38.7996C39.9197 10.5195 40.48 10.5195 40.9078 10.7375C41.2841 10.9293 41.5905 11.2352 41.7822 11.6116C42.0002 12.0394 42 12.5994 42 13.7195V31.3195C42 32.4396 42.0002 32.9997 41.7822 33.4276C41.5905 33.8039 41.2841 34.1098 40.9078 34.3015C40.48 34.5195 39.92 34.5195 38.7999 34.5195H33.1377C31.2593 34.5195 30.3203 34.5195 29.4678 34.7784C28.713 35.0076 28.011 35.3834 27.4017 35.8843C26.7133 36.45 26.192 37.2315 25.1501 38.7944L24 40.5196M24 20.1196C24 16.7593 23.9997 15.0791 23.3457 13.7957C22.7705 12.6667 21.8533 11.7487 20.7243 11.1735C19.4409 10.5195 17.7605 10.5195 14.4002 10.5195H9.2002C8.08009 10.5195 7.51962 10.5195 7.0918 10.7375C6.71547 10.9293 6.40973 11.2352 6.21799 11.6116C6 12.0394 6 12.5994 6 13.7195V31.3195C6 32.4396 6 32.9997 6.21799 33.4276C6.40973 33.8039 6.71547 34.1098 7.0918 34.3015C7.51962 34.5195 8.08009 34.5195 9.2002 34.5195H14.8624C16.7409 34.5195 17.6799 34.5195 18.5325 34.7784C19.2872 35.0076 19.9893 35.3834 20.5986 35.8843C21.287 36.45 21.8076 37.2315 22.8496 38.7944L24 40.5196" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-1')}</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#5E77FB] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M40 20.8491V12.9194V12.9129C40 10.677 40 9.55842 39.5645 8.70361C39.181 7.95096 38.5682 7.339 37.8156 6.95551C36.9599 6.51953 35.8406 6.51953 33.6004 6.51953H14.4004C12.1602 6.51953 11.0392 6.51953 10.1836 6.95551C9.43095 7.339 8.81947 7.95096 8.43597 8.70361C8 9.55926 8 10.6792 8 12.9194V20.8491C8 33.9856 17.9356 39.8752 22.1479 41.7818C22.5945 41.984 22.8183 42.0852 23.3237 42.172C23.6425 42.2267 24.3589 42.2267 24.6777 42.172C25.1803 42.0857 25.4025 41.9851 25.844 41.7853L25.8516 41.7818C30.0639 39.8752 40 33.9857 40 20.8491Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-2')}</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#5396FC] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M30 38.5195C30 34.1013 24.6274 30.5195 18 30.5195C11.3726 30.5195 6 34.1013 6 38.5195M33.6562 10.8628C34.3991 11.6057 34.9884 12.4876 35.3904 13.4582C35.7925 14.4288 35.9996 15.4689 35.9996 16.5195C35.9996 17.5701 35.7927 18.6104 35.3906 19.581C34.9886 20.5516 34.3991 21.4336 33.6562 22.1764M38 6.51953C39.3132 7.83275 40.3549 9.39177 41.0656 11.1076C41.7763 12.8234 42.1419 14.6622 42.1419 16.5194C42.1419 18.3766 41.7761 20.2157 41.0654 21.9315C40.3547 23.6473 39.3132 25.2065 38 26.5197M18 24.5195C13.5817 24.5195 10 20.9378 10 16.5195C10 12.1013 13.5817 8.51953 18 8.51953C22.4183 8.51953 26 12.1013 26 16.5195C26 20.9378 22.4183 24.5195 18 24.5195Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-3')}</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#59C2AF] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M32 16.5195C32 12.1013 28.4183 8.51953 24 8.51953C19.5817 8.51953 16 12.1013 16 16.5195M42 22.9194V34.1194C42 36.3596 42.0004 37.4799 41.5645 38.3356C41.181 39.0882 40.5682 39.7 39.8156 40.0835C38.9599 40.5195 37.8406 40.5195 35.6004 40.5195H12.4004C10.1602 40.5195 9.03924 40.5195 8.18359 40.0835C7.43095 39.7 6.81947 39.0882 6.43597 38.3356C6 37.4799 6 36.3596 6 34.1194V22.9194C6 20.6792 6 19.5593 6.43597 18.7036C6.81947 17.951 7.43095 17.339 8.18359 16.9555C9.03924 16.5195 10.1602 16.5195 12.4004 16.5195H35.6004C37.8406 16.5195 38.9599 16.5195 39.8156 16.9555C40.5682 17.339 41.181 17.951 41.5645 18.7036C42.0004 19.5593 42 20.6792 42 22.9194Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-4')}</h3>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-8 lg:max-w-[362px]">
                            <div className="min-w-[68px] lg:min-w-[98px] min-h-[68px] lg:min-h-[98px] rounded-[50%] bg-[#6EC590] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M34 40.5195C34 37.2058 29.5228 34.5195 24 34.5195C18.4772 34.5195 14 37.2058 14 40.5195M42 34.5193C42 32.0589 39.5318 29.9444 36 29.0186M6 34.5193C6 32.0589 8.46819 29.9444 12 29.0186M36 20.9917C37.2275 19.8931 38 18.2965 38 16.5195C38 13.2058 35.3137 10.5195 32 10.5195C30.4633 10.5195 29.0615 11.0972 28 12.0473M12 20.9917C10.7725 19.8931 10 18.2965 10 16.5195C10 13.2058 12.6863 10.5195 16 10.5195C17.5367 10.5195 18.9385 11.0972 20 12.0473M24 28.5195C20.6863 28.5195 18 25.8332 18 22.5195C18 19.2058 20.6863 16.5195 24 16.5195C27.3137 16.5195 30 19.2058 30 22.5195C30 25.8332 27.3137 28.5195 24 28.5195Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-5')}</h3>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className="grid grid-cols-1 md:grid-cols-2 xl:flex flex-wrap gap-4 py-6 md:py-8 px-3 lg:px-0 lg:py-12">
                    <div className="max-w-[100%] md:max-w-[100%] xl:max-w-[584px] h-[478px] xl:h-[390px] relative rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>{t('step-1-content.one')}</li>
                                        <li>{t('step-1-content.two')}</li>
                                        <li>{t('step-1-content.three')}</li>
                                        <li>{t('step-1-content.four')}</li>
                                        <li>{t('step-1-content.five')}</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        {t('step-1-content.text')}
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        {t('step-1-content.date')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-lightBlue h-[100%] w-[100%] shadow-md flex justify-center items-center text-center absolute top-0 left-0 flip-box-front'>
                                <div className="inner">
                                    <h3 className='text-2xl lg:text-3xl font-bold'>1 {t('donors.step')}</h3>
                                    <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>{t('donors.step-1')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[100%] xl:max-w-[584px] h-[478px] xl:h-[390px] relative rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>{t('step-2-content.one')}</li>
                                        <li>{t('step-2-content.two')}</li>
                                        <li>{t('step-2-content.three')}</li>
                                        <li>{t('step-2-content.four')}</li>
                                        <li>{t('step-2-content.five')}</li>
                                        <li>{t('step-2-content.six')}</li>
                                        <li>{t('step-2-content.seven')}</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        {t('step-2-content.text')}
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        {t('step-2-content.date')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-lightGreen h-[100%] w-[100%] shadow-md flex justify-center items-center text-center absolute top-0 left-0 flip-box-front'>
                                <div className="inner">
                                    <h3 className='text-2xl lg:text-3xl font-bold'>2 {t('donors.step')}</h3>
                                    <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>{t('donors.step-2')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[100%] xl:max-w-[384px] h-[358px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>{t('step-3-content.one')}</li>
                                        <li>{t('step-3-content.two')}</li>
                                        <li>{t('step-3-content.three')}</li>
                                        <li>{t('step-3-content.four')}</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        {t('step-3-content.text')}
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        {t('step-3-content.date')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-lightOrange h-[100%] w-[100%] shadow-md flex justify-center items-center text-center absolute top-0 left-0 flip-box-front'>
                                <div className="inner">
                                    <h3 className='text-2xl lg:text-3xl font-bold'>3 {t('donors.step')}</h3>
                                    <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>{t('donors.step-3')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[100%] xl:max-w-[384px] h-[228px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>
                                            {t('step-3-content.one')}
                                        </li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        {t('step-3-content.text')}
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        {t('step-3-content.date')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-lightPurple h-[100%] w-[100%] shadow-md flex justify-center items-center text-center absolute top-0 left-0 flip-box-front'>
                                <div className="inner">
                                    <h3 className='text-2xl lg:text-3xl font-bold'>4 {t('donors.step')}</h3>
                                    <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>{t('donors.step-4')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] md:max-w-[100%] xl:max-w-[384px] h-[278px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>{t('step-3-content.one')}</li>
                                        <li>{t('step-3-content.two')}</li>
                                        <li>{t('step-3-content.three')}</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        {t('step-3-content.text')}
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        {t('step-3-content.date')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-lightPink h-[100%] w-[100%] shadow-md flex justify-center items-center text-center absolute top-0 left-0 flip-box-front'>
                                <div className="inner">
                                    <h3 className='text-2xl lg:text-3xl font-bold'>5 {t('donors.step')}</h3>
                                    <h4 className='pt-4 lg:pt-6 text-xl lg:text-2xl font-medium'>{t('donors.step-5')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="main-stats bg-secondary pb-[24px] sm:pb-[56px] px-3">
                <Container className='pt-[28px] md:pt-[48px] pb-[24px]'>
                <div className={clsx('w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[20px]', {
                    ['lg:grid-cols-2'] : data['annual-report'].stats.length <= 2,
                    ['lg:grid-cols-3'] : data['annual-report'].stats.length > 2
                })}>
                    {data['annual-report'].stats.map( (item, index) => {
                    return (
                        <div key={index} className="flex smd:justify-center items-center gap-[64px] lg:block">
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
                <Container className="pt-[40px]">
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
            <section className='px-4'>
                <Container className="py-10 flex-col md:overflow-hidden">
                    <h3 className="flex-1 text-3xl font-bold text-primaryDark uppercase">{t('donors.donors-review')}</h3>
                    { data.reviews.length % 2 === 0 ? 
                        <Slider 
                            {...settings}
                            className='py-12 md:mx-[-20px]' 
                        >
                            {data.reviews.map((item, index) => (
                                <div key={index} className='relative'>

                                    <div className="!flex flex-col border-r-[0px] smd:border-r-[2px] border-[#EBEBEB] overflow-hidden px-2 sm:px-6 smd:px-10">
                                        <div className='relative max-w-[102px] min-h-[102px]'>
                                            <Image src={item.image} alt='logo' fill={true} objectFit='contain'/>
                                        </div>
                                        <p className='text-lg font-medium py-6'>
                                        <div className='absolute z-[50] mt-[-8px] ml-[-10px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 30 24" fill="none">
                                                <path d="M8.352 0.519531C3.456 3.97553 0 9.63953 0 15.8795C0 20.9675 3.072 23.9435 6.624 23.9435C9.984 23.9435 12.48 21.2555 12.48 18.0875C12.48 14.9195 10.272 12.6155 7.392 12.6155C6.816 12.6155 6.048 12.7115 5.856 12.8075C6.336 9.54353 9.408 5.70353 12.48 3.78353L8.352 0.519531ZM24.864 0.519531C20.064 3.97553 16.608 9.63953 16.608 15.8795C16.608 20.9675 19.68 23.9435 23.232 23.9435C26.496 23.9435 29.088 21.2555 29.088 18.0875C29.088 14.9195 26.784 12.6155 23.904 12.6155C23.328 12.6155 22.656 12.7115 22.464 12.8075C22.944 9.54353 25.92 5.70353 28.992 3.78353L24.864 0.519531Z" fill="#EEEEFF"/>
                                            </svg>
                                        </div>
                                            {item.text} 
                                        </p>
                                        <div className='flex gap-[16px] items-center'>
                                            <div className='relative w-[52px] h-[52px]'>
                                                <Image src={item.people_image} alt='logo' fill={true} className='rounded-[50%]' objectFit='cover'/>
                                            </div>
                                            <div>
                                                <p className='text-base font-medium'>{item.full_name}</p>
                                                <p className='text-base font-medium text-[#696969]'>{item.position}</p>
                                            </div>
                                        </div>
                                        {index % 2 == 0 && <div className="block smd:hidden w-[80%] h-[2px] bg-[#EBEBEB] my-4 mx-auto slider-hr__bottom"></div>}
                                    </div>
                                </div>
                            ))}
                    </Slider> : 
                    <Slider 
                            {...settings2}
                            className='py-12 md:mx-[-20px]' 
                        >
                            {data.reviews.map((item, index) => (
                                <div key={index} className='relative'>
                                    <div className="!flex flex-col border-r-[0px] smd:border-r-[2px] border-[#EBEBEB] overflow-hidden px-2 sm:px-6 smd:px-10">
                                        <div className='relative max-w-[102px] min-h-[102px]'>
                                            <Image src={item.image} alt='logo' fill={true} objectFit='contain'/>
                                        </div>
                                        <p className='text-lg font-medium py-6'>
                                            {item.text} 
                                        </p>
                                        <div className='flex gap-[16px] items-center'>
                                            <div className='relative w-[52px] h-[52px]'>
                                                <Image src={item.people_image} alt='logo' fill={true} className='rounded-[50%]' objectFit='cover'/>
                                            </div>
                                            <div>
                                                <p className='text-base font-medium'>{item.full_name}</p>
                                                <p className='text-base font-medium text-[#696969]'>{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                    }
                </Container>
            </section>
            <section className="py-12 px-4">
                <Container className='flex-col gap-x-9 gap-y-7 lg:gap-12'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-primaryDark uppercase'>{t('donors.our-donors')}</h3>
                    <div className="flex flex-wrap justify-between gap-x-9 lg:gap-x-[90px] gap-y-7 lg:gap-12">
                        { data.company_partners.map( (item, i) => {
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
    const { locale } = context
    const fetchDonors = await api.get('/donors', {
        headers: { 'Accept-Language' : locale }
    })
    const fetchReports = await api.get('/annual-report', {
        headers: { 'Accept-Language' : locale }
    })
    const fetchPartners = await api.get('/partners', {
        headers: { 'Accept-Language' : locale }
    })
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            ...fetchDonors.data,
            ...fetchReports.data,
            ...fetchPartners.data,
        },
    }
}
export default Donors