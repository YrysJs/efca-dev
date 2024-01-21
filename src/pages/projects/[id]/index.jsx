import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import React, { Component, useState } from 'react'
import parse from 'html-react-parser'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import clsx from 'clsx'
import Link from 'next/link'

const Galery = ({images, openGalery}) => {
  let [index, setIndex] = useState(0)

  const prevSlide = () => {
    index--
    setIndex(index)

    if (index < 0) {
      setIndex(images.length - 1)
    }
  }

  const nextSlide = () => {
    index++
    setIndex(index)

    if (index > images.length - 1) {
      setIndex(0)
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex items-center justify-between bg-[#301F38] z-[9999] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <button className="absolute right-[30px] top-[30px]" onClick={openGalery}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
          <path d="M26.9999 27.4999L9 9.5M27.0001 9.5L9 27.5001" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div className='flex gap-4 items-center justify-between w-[100%] h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]'>
        <button onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
            <path d="M0.292892 8.20711C-0.0976295 7.81658 -0.0976295 7.18342 0.292892 6.79289L6.65685 0.428932C7.04738 0.0384078 7.68054 0.0384078 8.07107 0.428932C8.46159 0.819457 8.46159 1.45262 8.07107 1.84315L2.41421 7.5L8.07107 13.1569C8.46159 13.5474 8.46159 14.1805 8.07107 14.5711C7.68054 14.9616 7.04738 14.9616 6.65685 14.5711L0.292892 8.20711ZM33 8.5L1 8.5V6.5L33 6.5V8.5Z" fill="white"/>
          </svg>
        </button>
        <div className='relative h-[100%] w-[80vw]'>
          <Image src={images[index]} alt={`image${index}`} fill={true} className="object-contain sm:object-cover"/>
        </div>
        <button onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
            <path d="M32.7071 8.20711C33.0976 7.81658 33.0976 7.18342 32.7071 6.79289L26.3431 0.428932C25.9526 0.0384078 25.3195 0.0384078 24.9289 0.428932C24.5384 0.819457 24.5384 1.45262 24.9289 1.84315L30.5858 7.5L24.9289 13.1569C24.5384 13.5474 24.5384 14.1805 24.9289 14.5711C25.3195 14.9616 25.9526 14.9616 26.3431 14.5711L32.7071 8.20711ZM0 8.5L32 8.5V6.5L0 6.5L0 8.5Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  )
} 

const ProjectDetails = ({ data }) => {
  const { t } = useTranslation()
  const [galeryState, setGaleryState] = useState(false)
  const [images, setImages] = useState(null)
  const openGalery = (data) => {
    setGaleryState(!galeryState)
    setImages(data)
  }

  console.log(data);

  const block = {
    default: () => <></>,
    main: ({ data }) => (
      <>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.text} />
        </Head>
        <main className="mt-6 lg:mt-0 mb-6">
          <Container className='flex-col md:flex-row'>
            <div className="flex-[2] smd:mr-8 md:mr-10 lg:mr-12 flex flex-col justify-center px-3 xl:px-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{data.title}</h1>
              { data.donors !== null && 
                <div className="mt-10 flex items-center">
                  <span className="mr-1 font-semibold">{t('projects.donor')}:</span>
                  <span>{ data.donors.map( item => item.text).join(', ') }</span>
                </div>
              }
              <div className="mt-4 sm:mt-6 flex items-center">
                <span className="mr-1 font-semibold">{t('projects.period')}:</span>
                <span>{data.date_from} - {data.date_to}</span>
              </div>
              {
                data.regions !== null &&
                <div className="mt-4 sm:mt-6 flex items-center">
                  <span className="mr-1 font-semibold">{t('projects.region')}:</span>
                  <span>{ data.regions.join(', ') }</span>
                </div>
              }
              { data.links !== null &&
                <div className="mt-4 mb-4 sm:mb-0 sm:mt-6 flex items-center">
                  <span className="mr-1 font-semibold">{t('projects.socials')}:</span>
                  {data.links.map( (item,index, arr) => {
                    return (
                      <>
                        <Link className='ml-2 hover:underline text-primary' key={index} href={item.url}>{item.title}</Link>{index !== arr.length - 1 && ','}
                      </>
                    )
                  })}
                </div>
              }
              <div className="mt-4 mb-4 sm:mb-6 smd:mb-0 sm:mt-10 w-full flex flex-wrap">
                {data.images !== null && data.images.map((item, index) => (
                  <div key={index} className="mr-8 relative w-[68px] h-[68px]">
                    <Image
                      src={item}
                      fill={true}
                      alt={'image-' + index}
                      objectFit='cover'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative smd:flex-[2] md:w-[400px] md:h-[382px] h-[282px] sm:h-[382px] md:h-[482px] lg:h-[600px]">
              <Image
                src={data.image}
                fill={true}
                alt={data.title}
                objectFit='cover'
              />
            </div>
          </Container>
        </main>
      </>
    ),
    statistics: ({ data }) => (
      <Container className="mb-6 px-3 xl:px-0">
        <div className={clsx('w-full grid grid-cols-2  gap-4', {
          'grid-cols-1': data.data.length ==1,
          'grid-cols-2': data.data.length ==2,
          'lg:grid-cols-3': data.data.length > 2
          
        })}>
          {data.data.map((item, index) => (
            <div 
              key={index} 
              className='py-2 px-2 h-[138px] pr-3 rounded-lg flex flex-col items-center justify-center text-center sm:text-left sm:flex sm:justify-center sm:flex-row gap-2 sm:gap-3 items-center'
              style={{ background: item.color }}
            >
                <span className="mr-1 font-semibold">{item.prefix}</span>
                <span className="text-xl md:text-3xl font-bold">{item.value}</span>
              <span className="text-sm md:text-base font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    ),
    paragraph: ({ data }) => {
      const parsedTitle = parse(data.title)
      const parsedText = data.text ? parse(data.text) : ''
      return (
        <section className='px-3'>
          { galeryState && <Galery images={images} openGalery={openGalery}></Galery> }
          <Container shrink className="flex-col">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium overflow-x-scroll table-scrolles">
              <ModifiedJSX html={data.title}/>
            </div>
            <div className='mt-6 flex justify-between items-center'>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold">{parsedText}</p>
              { data.images !== null &&
                <button className='bg-secondary text-sm smd:text-base text-primary py-2 smd:py-3 font-semibold px-4 smd:px-[28px] flex items-center gap-[10px] rounded-[24px]' onClick={ () => openGalery(data.images)}>
                <span>{t('open-gal')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M10.3879 6C10.9402 6 11.3879 5.55228 11.3879 5C11.3879 4.44772 10.9402 4 10.3879 4V6ZM20.3877 14C20.3877 13.4477 19.94 13 19.3877 13C18.8354 13 18.3877 13.4477 18.3877 14H20.3877ZM18.2955 18.782L17.8415 17.891L18.2955 18.782ZM19.1699 17.908L18.2789 17.454L19.1699 17.908ZM5.60568 17.908L4.71468 18.362H4.71468L5.60568 17.908ZM6.47949 18.782L6.93348 17.891H6.93348L6.47949 18.782ZM6.47949 5.21799L6.93348 6.10899L6.47949 5.21799ZM5.60568 6.09204L6.49669 6.54603L5.60568 6.09204ZM19.3877 9C19.3877 9.55228 19.8354 10 20.3877 10C20.94 10 21.3877 9.55228 21.3877 9H19.3877ZM20.3877 4H21.3877C21.3877 3.44772 20.94 3 20.3877 3V4ZM15.3877 3C14.8354 3 14.3877 3.44772 14.3877 4C14.3877 4.55228 14.8354 5 15.3877 5V3ZM12.6806 10.2929C12.2901 10.6834 12.2901 11.3166 12.6806 11.7071C13.0711 12.0976 13.7043 12.0976 14.0948 11.7071L12.6806 10.2929ZM10.3879 4H8.58789V6H10.3879V4ZM4.3877 8.19995V15.8H6.3877V8.19995H4.3877ZM8.58789 20H16.1879V18H8.58789V20ZM20.3877 15.8V14H18.3877V15.8H20.3877ZM16.1879 20C16.7314 20 17.1992 20.0008 17.5828 19.9694C17.9781 19.9371 18.3712 19.8657 18.7495 19.673L17.8415 17.891C17.792 17.9162 17.6913 17.9539 17.4198 17.9761C17.1366 17.9992 16.7644 18 16.1879 18V20ZM18.3877 15.8C18.3877 16.3767 18.387 16.7489 18.3639 17.0323C18.3417 17.3041 18.304 17.4047 18.2789 17.454L20.0609 18.362C20.2538 17.9835 20.325 17.5902 20.3572 17.1949C20.3885 16.8113 20.3877 16.3435 20.3877 15.8H18.3877ZM18.7495 19.673C19.3134 19.3856 19.773 18.927 20.0609 18.362L18.2789 17.454C18.1833 17.6417 18.0302 17.7948 17.8415 17.891L18.7495 19.673ZM4.3877 15.8C4.3877 16.3435 4.38692 16.8113 4.41826 17.195C4.45056 17.5904 4.52187 17.9836 4.71468 18.362L6.49669 17.454C6.4715 17.4046 6.43382 17.3039 6.41162 17.0322C6.38847 16.7488 6.3877 16.3765 6.3877 15.8H4.3877ZM8.58789 18C8.01136 18 7.63896 17.9992 7.35552 17.9761C7.08367 17.9538 6.98288 17.9161 6.93348 17.891L6.0255 19.673C6.40392 19.8658 6.79728 19.9371 7.19266 19.9694C7.57642 20.0008 8.04432 20 8.58789 20V18ZM4.71468 18.362C5.00222 18.9264 5.46086 19.3853 6.0255 19.673L6.93348 17.891C6.74547 17.7952 6.59264 17.6424 6.49669 17.454L4.71468 18.362ZM8.58789 4C8.04433 4 7.57644 3.99922 7.19268 4.03057C6.79731 4.06286 6.40394 4.13416 6.0255 4.32698L6.93348 6.10899C6.98287 6.08383 7.08364 6.04613 7.35549 6.02393C7.63895 6.00078 8.01135 6 8.58789 6V4ZM6.3877 8.19995C6.3877 7.6234 6.38847 7.25114 6.41162 6.96783C6.43382 6.6962 6.47149 6.59549 6.49669 6.54603L4.71468 5.63805C4.52189 6.01642 4.45057 6.40961 4.41827 6.80495C4.38692 7.18861 4.3877 7.6564 4.3877 8.19995H6.3877ZM6.0255 4.32698C5.46076 4.61473 5.00216 5.07382 4.71468 5.63805L6.49669 6.54603C6.59269 6.35761 6.74558 6.20474 6.93348 6.10899L6.0255 4.32698ZM21.3877 9V4H19.3877V9H21.3877ZM20.3877 3H15.3877V5H20.3877V3ZM14.0948 11.7071L21.0948 4.70711L19.6806 3.29289L12.6806 10.2929L14.0948 11.7071Z" fill="#392DCA"/>
                  </svg>
                </button>
              }
            </div>
            {data.images !== null && data.images.length && (
              <div className="my-6 w-full flex flex-col">
                <div className="overflow-hidden relative w-full sm:h-auto rounded-lg">
                  <Image
                    width={300}
                    height={200}
                    src={data.images[0]}
                    alt={parsedTitle}
                    objectFit='cover'
                    layout="responsive"
                  />
                </div>
                {data.images.length > 1 && (
                  <div className="mt-4 flex flex-wrap">
                    <div className="mr-4 overflow-hidden relative w-[calc(33.3333%-12px)] h-[92px] sm:h-[122px] md:h-[164px] rounded-lg">
                      <Image
                        src={data.images[1]}
                        alt={parsedTitle}
                        fill={true}
                        objectFit='cover'
                      />
                    </div>
                    {data.images[2] && (
                      <div className="mr-4 overflow-hidden relative w-[calc(33.3333%-12px)] h-[92px] sm:h-[122px] md:h-[164px] rounded-lg">
                        <Image
                          src={data.images[2]}
                          alt={parsedTitle}
                          fill={true}
                          objectFit='cover'
                        />
                      </div>
                    )}
                    {data.images[3] && (
                      <div className="overflow-hidden relative w-[calc(33.3333%-12px)] h-[92px] sm:h-[122px] md:h-[164px] rounded-lg">
                        <Image
                          src={data.images[3]}
                          alt={parsedTitle}
                          fill={true}
                          objectFit='cover'
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </Container>
        </section>
      )
    },
    quote: ({ data }) => {
      return (
        <Container shrink className="flex flex-col items-center">
          <div className="mb-9 w-[200px] h-[2px] bg-[#C9C9C9]" />
            { data.image && 
              <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
                <Image src={data.image} fill={true} objectFit="cover"/>
              </div>
            }
            <div className="my-4 sm:my-6 md:my-8 lg:my-9 px-6 text-center">
              <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl">
                {data.text}
              </p>
            </div>
          <div className="w-[200px] h-[2px] bg-[#C9C9C9]" />
        </Container>
      )
    },
    more: ({ data }) => {
      return (
        <Container shrink className="mt-6 flex-col px-3 xl:px-0">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{t('projects.more')}</h3>
          <div className="mt-6 w-full grid grid-cols1 md:grid-cols-2 gap-6">
            {data.data.map((item, index) => (
              <Link href={item.link} key={index} className={clsx('mb-6 flex flex-col', {
                ['ml-6']: index % 2
              })}>
                <div className="overflow-hidden relative w-full h-[212px] rounded-lg">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill={true}
                    objectFit='cover'
                  />
                </div>
                <div className="py-4 px-[20px]">
                  <span className="font-medium text-primaryDark text-lg">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      )
    },
    contacts: ({ data }) => {
      return (
        <Container shrink className="my-6 flex-col px-3 xl:px-0">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{t('projects.contacts')}:</h3>
          <div className="mt-6 flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {data.data.map((item, index) => (
              <div key={index} className="flex flex-col justify-start items-center">
                <div className="relative overflow-hidden border-4 border-white w-[140px] h-[140px] rounded-full duration-150 hover:border-primary">
                  <Image
                    src={item.image}
                    alt={item.full_name}
                    fill={true}
                    objectFit='cover'
                  />
                </div>
                <span className="mt-4 font-medium">{item.full_name}</span>
                <span className="mt-2 text-sm font-medium text-center text-primary">{item.position}</span>
                <Link href={item.link} className='mt-2 text-gray text-sm font-medium'>link</Link>
              </div>
            ))}
          </div>
        </Container>
      )
    }
  }
  return data.blocks.map(item => {
    const Component = block[item.type] || block['default'];
    return <Component data={item} key={item.id} />;
  })
}

const ModifiedJSX = ({ html }) => {
  const parsedHTML = parse(html)
  const applyStyles = element => {
    if (React.isValidElement(element)) {
      const elementType = element.type
      if (elementType === 'ul') {
        return React.cloneElement(
          element,
          { className: 'custom-ul' },
          React.Children.map(element.props.children, applyStyles)
        )
      } else if (elementType === 'li') {
        return React.cloneElement(element, {
          className:
            'my-6 text-sm lg:text-lg font-medium flex items-center before:mr-6 before:min-w-[8px] before:lg:min-w-[20px] before:h-[8px] before:lg:h-[20px] before:bg-primaryLight before:rounded-full',
        })
      } else if (elementType === 'p') {
        return React.cloneElement(element, { className: 'my-3 text-base sm:text-2xl text-left font-medium' })
      } else if (elementType === 'table') {
        return React.cloneElement(element, { className: 'page-tables'})
      }
    }

    return element
  }
  const jsx = React.Children.map(parsedHTML, applyStyles)
  return <>{jsx}</>
}

export async function getStaticPaths(context) {
  const { locale } = context
  const response = await api.get('/projects?need_full=true', {
    headers: { 'Accept-Language' : locale }
  })
  const { i18n } = require('next-i18next.config')
  const locales = i18n.locales
  const paths = locales.flatMap((locale) =>
    response.data.data.map((item) => ({ params: { id: item.id.toString() }, locale }))
  )
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { locale } = context
  const response = await api.get('/projects/' + context.params.id, {
    headers: { 'Accept-Language' : locale }
  })
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: response.data
    },
  }
}

export default ProjectDetails
