import Head from 'next/head'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import React, { Component } from 'react'
import parse from 'html-react-parser'
import { Container } from '@/shared/ui'
import { api } from '@/shared/api'
import clsx from 'clsx'


const ProjectDetails = ({ data }) => {
  const { t } = useTranslation()
  const block = {
    default: () => <></>,
    main: ({ data }) => (
      <>
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.text} />
        </Head>
        <main className="mt-6 lg:mt-0 mb-6">
          <Container className='flex-col smd:flex-row'>
            <div className="flex-[2] smd:mr-8 md:mr-10 lg:mr-12 flex flex-col justify-center px-3 xl:px-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{data.title}</h1>
              <div className="mt-10 flex items-center">
                <span className="mr-1 font-semibold">{t('projects.donor')}:</span>
                <span>{data.donor}</span>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center">
                <span className="mr-1 font-semibold">{t('projects.period')}:</span>
                <span>{data.date_from} - {data.date_to}</span>
              </div>
              <div className="mt-4 sm:mt-6 flex items-center">
                <span className="mr-1 font-semibold">{t('projects.region')}:</span>
                <span>{data.region}</span>
              </div>
              <div className="mt-4 mb-4 sm:mb-0 sm:mt-6 flex items-center">
                <span className="mr-1 font-semibold">{t('projects.socials')}:</span>
                <span>{data.social_media}</span>
              </div>
              <div className="mt-4 mb-4 sm:mb-6 smd:mb-0 sm:mt-10 w-full flex flex-wrap">
                {data.images.map((item, index) => (
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
            <div className="relative smd:flex-[2] md:flex-[3] h-[282px] sm:h-[382px] md:h-[482px] lg:h-[600px]">
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
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
          {data.data.map((item, index) => (
            <div 
              key={index} 
              className='py-2 px-2 h-[138px] pr-3 rounded-lg grid grid-cols-[1fr_2fr] gap-2 items-center'
              style={{ background: item.color }}
            >
              <div className="flex justify-center items-end">
                <span className="mr-1 font-semibold">{item.prefix}</span>
                <span className="text-xl md:text-3xl font-bold">{item.value}</span>
              </div>
              <span className="text-sm md:text-base font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    ),
    paragraph: ({ data }) => {
      const parsedTitle = parse(data.title)
      const parsedText = parse(data.text)
      return (
        <section className='px-3'>
          <Container shrink className="flex-col">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">{parsedTitle.props?.children}</h3>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold">{parsedText}</p>
            {data.images.length && (
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
          <div className="w-[200px] h-[2px] bg-[#C9C9C9]" />
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
              <div key={index} className={clsx('mb-6 flex flex-col', {
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
              </div>
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
