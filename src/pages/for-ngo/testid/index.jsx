import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Container, Pagination } from '@/shared/ui'
import Slider from 'react-slick'
import { api } from '@/shared/api'
import React, { Component } from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'

const NewsDetails = ({data}) => {
  const { t } = useTranslation()
  console.log(data);
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.text} />
      </Head>
      <section className='flex h-[576px]'>
        <div className='pl-12 pr-6 flex-[3] flex flex-col gap-3 justify-center bg-[#F0F0F0]'>
          <p>01.06.2023</p>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
            Объявление результатов конкурса грантов по проекту «Ваш голос имеет значение»
          </h1>
        </div>
        <div className='relative flex-[5]'>
          <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80' fill={true} alt='text' objectFit='cover'/>
        </div>
      </section>
      <section className='py-10'>
        <Container className='flex-col gap-10'>
          <p className='text-2xl text-left font-medium'>
            Общественное объединение «Keremet jol» запустило сеансы иппотерапии в Акмолинской области. Уроки предназначены для улучшения физического и психического здоровья детей с инвалидностью.
          </p>
          <div className="mx-auto w-[200px] h-[2px] bg-[#C9C9C9]" />
          <p className='text-2xl text-center font-medium'>
            Фонд Евразия Центральной Азии» в Республике Казахстан провел конкурс заявок, направленные на стимулирование гражданской активности на уровне сообществ и участие недостаточно представленных групп в процессах принятия решений на местном уровне в рамках проекта «Ваш голос имеет значение. Гражданское участие в принятии решений посредством технологий» финансируемый Европейским Союзом и осуществляемый в сотрудничестве с ОФ «ITeachMe» центр развития компетенций
          </p>
          <div className="mx-auto w-[200px] h-[2px] bg-[#C9C9C9]" />
          <div className='relative h-[384px] rounded-lg overflow-hidden'>
            <Image src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80' fill={true} alt='text' objectFit='cover'/>
          </div>
        </Container>
      </section>
      <section className='px-3 lg:px-0 mt-6 py-10 bg-secondary'>
        <Container className='flex-col'>
          <ModifiedJSX html={data.blocks[7].html} />
        </Container>
      </section>
      <section className='pt-10'>
        <Container className='flex-col'>
          <h3 className='text-2xl text-center font-semibold pb-10'>
            В результате отбора победителями грантового конкурса стали:
          </h3>
          <ModifiedJSX html={data.blocks[8].data} />
        </Container>
      </section>
      <section className='pt-10'>
        <Container>
        <div className="mt-6 w-full grid grid-cols1 md:grid-cols-2 gap-6">
            {data.blocks[10].data.map((item, index) => (
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
      </section>
      <section>
        <Container className="my-6 flex-col px-3 xl:px-0">
          <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">{t('projects.contacts')}:</h3>
          <div className="mt-6 flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {data.blocks[9].data.map((item, index) => (
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
            {data.blocks[9].data.map((item, index) => (
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
            {data.blocks[9].data.map((item, index) => (
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
      </section>
    </>
  )
}

const ModifiedJSX = ({ html }) => {
  const parsedHTML = parse(html)
  const applyStyles = (element) => {
    if (React.isValidElement(element)) {
      const elementType = element.type
      if (elementType === 'ul') {
        return React.cloneElement(element, { className: 'custom-ul' }, React.Children.map(element.props.children, applyStyles))
      } else if (elementType === 'li') {
        return React.cloneElement(element, { className: 'my-6 text-sm lg:text-lg font-medium flex items-center before:mr-6 before:min-w-[8px] before:lg:min-w-[20px] before:h-[8px] before:lg:h-[20px] before:bg-primaryLight before:rounded-full' })
      } else if (elementType === 'p') {
        return React.cloneElement(element, { className: 'my-3 text-2xl font-semibold' })
      }
    }
  
    return element
  }
  const jsx = React.Children.map(parsedHTML, applyStyles)
  return (
    <>
      {jsx}
    </>
  )
}

export async function getServerSideProps(context) {
  const { locale } = context
  const response = await api.get('/materials/4', {
    headers: { 'Accept-Language': locale },
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data,
    },
  }
}

export default NewsDetails
