import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("AdminPage");

  return (
    <div className='min-h-screen bg-gray-100 py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
          {t("title")}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {t("userManagement")}
            </h2>
            <p className='text-gray-600 mb-4'>{t("manageUsers")}</p>
            <Link href='#'>
              <p className='text-blue-600 hover:text-blue-800'>
                {t("manageUsers")}
              </p>
            </Link>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {t("postManagement")}
            </h2>
            <p className='text-gray-600 mb-4'>{t("managePosts")}</p>
            <Link href='#'>
              <p className='text-blue-600 hover:text-blue-800'>
                {t("managePosts")}
              </p>
            </Link>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              {t("settings")}
            </h2>
            <p className='text-gray-600 mb-4'>{t("siteSettings")}</p>
            <Link href='#'>
              <p className='text-blue-600 hover:text-blue-800'>
                {t("siteSettings")}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
