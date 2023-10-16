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

const Donors = (data) => {
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
                    <div className="flex lg:justify-center gap-6 lg:gap-12 flex-wrap mt-6 lg:mt-12 mb-4 lg:mb-10">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="49" viewBox="0 0 48 49" fill="none">
                                    <path d="M34 40.5195C34 37.2058 29.5228 34.5195 24 34.5195C18.4772 34.5195 14 37.2058 14 40.5195M42 34.5193C42 32.0589 39.5318 29.9444 36 29.0186M6 34.5193C6 32.0589 8.46819 29.9444 12 29.0186M36 20.9917C37.2275 19.8931 38 18.2965 38 16.5195C38 13.2058 35.3137 10.5195 32 10.5195C30.4633 10.5195 29.0615 11.0972 28 12.0473M12 20.9917C10.7725 19.8931 10 18.2965 10 16.5195C10 13.2058 12.6863 10.5195 16 10.5195C17.5367 10.5195 18.9385 11.0972 20 12.0473M24 28.5195C20.6863 28.5195 18 25.8332 18 22.5195C18 19.2058 20.6863 16.5195 24 16.5195C27.3137 16.5195 30 19.2058 30 22.5195C30 25.8332 27.3137 28.5195 24 28.5195Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-base lg:text-lg font-medium">{t('donors.chip-5')}</h3>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container className="grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap gap-4 py-6 md:py-8 px-3 lg:px-0 lg:py-12">
                    <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[584px] h-[478px] lg:h-[390px] relative rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>Определяем масштаб и специфику социальной проблемы</li>
                                        <li>Определяем основных потенциальных партнеров</li>
                                        <li>Изучаем местный и международный опыт</li>
                                        <li>Определяем возможные решения проблемы</li>
                                        <li>Определяем риски и подсчитываем бюджет проекта</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        Результат первого этапа: краткий отчет с четким описанием проблемы и рекомендациями по ее решению. С помощью него можно решить, будет ли профинансирован проект или нет.
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        Срок работы: 1-2 недели
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
                    <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[584px] h-[478px] lg:h-[390px] relative rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>Описание проблемы и обоснование для ее решения</li>
                                        <li>Постановка целей и задач для решения проблемы</li>
                                        <li>Определение основных шагов и мероприятий</li>
                                        <li>Определение рисков и поиск способов снижения рисков</li>
                                        <li>Определения графика мониторинга проекта</li>
                                        <li>Определение сроков реализации проекта</li>
                                        <li>Составление детального бюджета</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        Результат второго этапа: детальная проектная заявка, которую можно использовать как план реализации.
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        Срок работы: 2-3 недели
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
                    <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[384px] h-[358px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>Согласование проекта и подписание контракта</li>
                                        <li>Согласование основных мероприятий</li>
                                        <li>Согласование сроков выполнения и отчетности</li>
                                        <li>Подписание контракта</li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        Результат третьего этапа: подписанный контракт
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        Срок работы: 2-3 недели
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
                    <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[384px] h-[228px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>
                                            Реализация проекта согласно контракту
                                        </li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        Результат четвертого этапа: реализованный проект и сдача отчетности.
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        Срок работы: согласно утвержденному плану
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
                    <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[384px] h-[278px] lg:h-[350px] relative  rounded-[16px] box-item">
                        <div className="flip-box">
                            <div className="flip-box-back shadow-md">
                                <div className="inner px-6 py-9">
                                    <ul className='text-base lg:text-lg font-medium leading-normal list-disc ml-6'>
                                        <li>Оценка эффективности проекта</li>
                                        <li>Анализ рекомендаций</li>
                                        <li>Предоставление отчета </li>
                                    </ul>
                                    <p className='text-sm lg:text-base font-semibold leading-[148%] my-6'>
                                        Результат четвертого этапа: реализованный проект и сдача отчетности.
                                    </p>
                                    <p className='text-sm lg:text-base font-semibold'>
                                        Срок работы: согласно утвержденному плану
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
                        <div key={index} className="flex justify-center items-center gap-[64px] lg:block">
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
                        <div className="flex gap-[24px] justify-between items-center sm:mb-2 flex-row-reverse sm:flex-row">
                            <h3 className="text-white flex flex-col sm:flex-row items-center sm:gap-4">
                            <p className="text-[36px] sm:text-[44px] md:text-[58px] lg:text-[64px] font-bold">{item.count}</p>
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
                    <Slider 
                        {...settings}
                        className='py-12 md:mx-[-20px]' 
                    >
                        {fakeSlider.map((item, index) => (
                            <div key={index} className='relative'>
                                <div className="!flex flex-col border-r-[0px] smd:border-r-[2px] border-[#EBEBEB] overflow-hidden px-2 sm:px-6 smd:px-10">
                                    <div className='relative max-w-[102px] min-h-[102px]'>
                                        <Image src={'http://194.4.56.53/storage/donors/August2023/hG5PLHejDXUNlvHaTQr1.png'} alt='logo' fill={true}/>
                                    </div>
                                    <p className='text-lg font-medium py-6'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. 
                                    </p>
                                    <div>
                                        <div className='relative w-[52px] h-[52px]'>
                                            <Image src={'https://plus.unsplash.com/premium_photo-1675484743423-57da4e8011c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9hZHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80'} alt='logo' fill={true} className='rounded-[50%]' objectFit='cover'/>
                                        </div>
                                    </div>
                                    {index % 2 == 0 && <div className="block smd:hidden w-[80%] h-[2px] bg-[#EBEBEB] my-4 mx-auto slider-hr__bottom"></div>}
                                </div>
                            </div>
                        ))}
                    </Slider>
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
                                        <Image src={'https://purepng.com/public/uploads/large/purepng.com-chevron-logologobrand-logoiconslogos-251519938945o1hd7.png'} alt={'image' + i} fill={true} objectFit='contain'/>
                                    </div>
                                    <div className='pt-4 text-center'>
                                        <h3 className='text-base font-medium pb-2'>{item.text}</h3>
                                        <Link className='block text-xs text-gray' href="https://google.com">test</Link>
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