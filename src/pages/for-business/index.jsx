import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { api } from '@/shared/api'
import MainMaterials from '@/shared/materials/MainMaterials'

const Business = (data) => {
  return (
    <MainMaterials data={data} translate='materials.head.busy' route='for-business'></MainMaterials>
  )
}

export async function getStaticProps({ locale }) {
  const response = await api.get(`/materials?page=1&type=business`, {
    headers: { 'Accept-Language': locale }
  });

  const fetchMaterialsSlider = await api.get('/materials/sliders?type=business', {
    headers: { 'Accept-Language': locale }
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data: response.data,
      slider: fetchMaterialsSlider.data
    },
    revalidate: 600
  };
}

export default Business;
