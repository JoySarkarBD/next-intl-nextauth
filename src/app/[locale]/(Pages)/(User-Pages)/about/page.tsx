import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("AboutPage");

  return (
    <div className='min-h-screen bg-gray-100 py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
          {t("title")}
        </h1>
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            {t("missionTitle")}
          </h2>
          <p className='text-gray-600'>{t("missionDescription")}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            {t("visionTitle")}
          </h2>
          <p className='text-gray-600'>{t("visionDescription")}</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md mb-8'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            {t("teamTitle")}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-gray-50 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {t("teamMember1Name")}
              </h3>
              <p className='text-gray-600'>{t("teamMember1Role")}</p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {t("teamMember2Name")}
              </h3>
              <p className='text-gray-600'>{t("teamMember2Role")}</p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {t("teamMember3Name")}
              </h3>
              <p className='text-gray-600'>{t("teamMember3Role")}</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
            {t("contactTitle")}
          </h2>
          <p className='text-gray-600'>{t("contactDescription")}</p>
        </div>
      </div>
    </div>
  );
}
