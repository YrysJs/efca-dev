import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { api } from '@/shared/api'
import MainDetails from '@/shared/materials/MaterialsDetails'


const BusinessDetails = ({data}) => {
  return <MainDetails data={data}/>
}



export async function getServerSideProps(context) {
  const { locale } = context
  const response = await api.get('/materials/' + context.params.id, {
    headers: { 'Accept-Language': locale },
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data,
    },
  }
}

export default BusinessDetails
