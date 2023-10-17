import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Container, Pagination } from '@/shared/ui'
import Slider from 'react-slick'
import React, { Component } from 'react'
import parse from 'html-react-parser'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  centerMode: false,
  nextArrow: (
    <button className="ml-4 outline-none">
      <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8673 12.5607C13.4531 11.9749 13.4531 11.0251 12.8673 10.4393L3.32136 0.893398C2.73557 0.307611 1.78583 0.307611 1.20004 0.893398C0.614252 1.47919 0.614252 2.42893 1.20004 3.01472L9.68532 11.5L1.20004 19.9853C0.614252 20.5711 0.614252 21.5208 1.20004 22.1066C1.78583 22.6924 2.73557 22.6924 3.32136 22.1066L12.8673 12.5607ZM10.8066 13H11.8066V10H10.8066V13Z" fill="#0006BB"/>
      </svg>
    </button>
  ),
  prevArrow: (
    <button className="mr-4 outline-none">
      <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.745981 12.5607C0.160194 11.9749 0.160194 11.0251 0.745981 10.4393L10.2919 0.893398C10.8777 0.307611 11.8275 0.307611 12.4132 0.893398C12.999 1.47919 12.999 2.42893 12.4132 3.01472L3.92796 11.5L12.4132 19.9853C12.999 20.5711 12.999 21.5208 12.4132 22.1066C11.8275 22.6924 10.8777 22.6924 10.2919 22.1066L0.745981 12.5607ZM2.80664 13H1.80664L1.80664 10H2.80664L2.80664 13Z" fill="#0006BB"/>
      </svg>
    </button>
  ),
}

const MainDetails = ({ data }) => {
  const { t } = useTranslation()
  console.log(data)
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.text} />
      </Head>
      <section className="flex flex-col md:flex-row sm:h-[initial] md:h-[576px]">
        <div className="px-3 py-6 lg:pl-12 lg:pr-6 md:flex-[4] lg:flex-[3] flex flex-col gap-3 justify-center bg-[#F0F0F0]">
          <p>{data.created_at}</p>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold">{data.title}</h1>
        </div>
        <div className="relative h-[308px] md:h-[initial] md:flex-[3] lg:flex-[5]">
          <Image src={data.image} fill={true} alt="text" objectFit="cover" />
        </div>
      </section>
      {data.blocks.map((item, i) => {
        if (item.type === 'statistics') {
          return (
            <section key={i} className="py-[20px] px-3 md:py-10">
              <Container className="px-3 xl:px-0">
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {item.data.map((item, index) => (
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
            </section>
          )
        }
        if (item.type === 'gallery') {
          return (
            <section key={i} className="py-[20px] px-[40px] md:py-10">
              <Container className="flex-col gap-6 md:gap-10">
                <div className="relative h-[384px] rounded-lg overflow-hidden">
                  <div>
                    <Slider {...settings}>
                      {item.data.map( (imageUrl, ind) => {
                        return (
                          <di key={ind} className="relative h-[384px]">
                            <Image
                              src={imageUrl}
                              fill={true}
                              alt="text"
                              objectFit="cover"
                            />
                          </di>
                        )
                      })}
                    </Slider>
                  </div>
                </div>
              </Container>
            </section>
          )
        }
        if (item.type === 'text') {
          return (
            <section key={i} className="py-[20px] px-3 md:py-10">
              <Container className="flex-col gap-6 md:gap-10">
                <ModifiedJSX
                  html={item.data}
                />
                <div className="mx-auto w-[200px] h-[2px] bg-[#C9C9C9]" />
              </Container>
            </section>
          )
        }
        if (item.type === 'list') {
          return (
            <section key={i} className="px-3 lg:px-0 py-10 bg-secondary">
              <Container className="flex-col">
                <ModifiedJSX
                  html={item.html}
                />
              </Container>
            </section>
          )
        }
        if (item.type === 'table') {
          return (
            <section key={i} className="pt-6 sm:pt-10">
            <Container className="flex-col">
              <h3 className="text-lg sm:text-2xl text-center font-semibold pb-6 sm:pb-10">
                В результате отбора победителями грантового конкурса стали:
              </h3>
              <ModifiedJSX
                html={item.data}
              />
            </Container>
          </section>
          )
        }
      })}
      {data.blocks.filter(item => item.type === 'more').length ? (
        <section className="px-3 pt-6 sm:pt-10">
          <Container className="flex-col">
            <h3 className="text-lg sm:text-2xl text-left font-semibold">Читайте также</h3>
            <div className="mt-6 w-full grid grid-cols1 md:grid-cols-2 gap-6">
              {data.blocks
                .filter(item => item.type === 'more')
                .map(item =>
                  item.data.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="overflow-hidden relative w-full h-[212px] rounded-lg">
                        <Image src={item.image} alt={item.title} fill={true} objectFit="cover" />
                      </div>
                      <div className="py-4 px-[20px]">
                        <span className="font-medium text-primaryDark text-base sm:text-lg">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))
                )}
            </div>
          </Container>
        </section>
      ) : (
        ''
      )}
      {data.blocks.filter(item => item.type === 'contacts').length ? (
        <section>
          <Container className="my-6 flex-col px-3 xl:px-0">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl">
              {t('projects.contacts')}:
            </h3>
            <div className="mt-6 flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {data.blocks
                .filter(item => item.type === 'contacts')
                .map(item =>
                  item.data.map((item, index) => (
                    <div key={index} className="flex flex-col justify-start items-center">
                      <div className="relative overflow-hidden border-4 border-white w-[140px] h-[140px] rounded-full duration-150 hover:border-primary">
                        <Image
                          src={item.image}
                          alt={item.full_name}
                          fill={true}
                          objectFit="cover"
                        />
                      </div>
                      <span className="mt-4 font-medium">{item.full_name}</span>
                      <span className="mt-2 text-sm font-medium text-center text-primary">
                        {item.position}
                      </span>
                      <Link href="test.com">link</Link>
                    </div>
                  ))
                )}
            </div>
          </Container>
        </section>
      ) : (
        ''
      )}
    </>
  )
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
      }
    }

    return element
  }
  const jsx = React.Children.map(parsedHTML, applyStyles)
  return <>{jsx}</>
}

export default MainDetails
