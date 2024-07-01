import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("AccessDenied");

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-5xl font-bold mb-4 text-gray-800'>{t("title")}</h1>
      <p className='text-xl mb-6 text-gray-600'>{t("message")}</p>
      <Link href='/'>
        <p className='text-blue-500 hover:text-blue-700 border border-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded transition duration-300'>
          {t("homeLink")}
        </p>
      </Link>
    </div>
  );
}
