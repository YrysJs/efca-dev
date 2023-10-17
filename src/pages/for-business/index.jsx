import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { api } from '@/shared/api'
import MainMaterials from '@/shared/materials/MainMaterials'

const Business = (data) => {
  return (
    <MainMaterials data={data} translate='materials.head.busy' route='for-business'></MainMaterials>
  )
}

export async function getServerSideProps(context) {
  const { locale, query } = context
  const response = await api.get(`/materials?page=${query.page || 1}&type=business`, {
    params: query,
    headers: { 'Accept-Language' : locale }
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...response.data
    },
  }
}

export default Business
