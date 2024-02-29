import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { api } from '@/shared/api'
import MainMaterials from '@/shared/materials/MainMaterials'

const Ngo = (data) => {
  return (
    <MainMaterials data={data} translate='materials.head.ngo' route='for-ngo'></MainMaterials>
  )
}
export async function getStaticProps({ locale }) {
  const materialType = 'npo';

  const response = await api.get(`/materials?page=1&type=${materialType}`, {
    headers: { 'Accept-Language': locale }
  });

  const fetchMaterialsSlider = await api.get(`/materials/sliders?type=${materialType}`, {
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

export default Ngo;
