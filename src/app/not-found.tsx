export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-5xl font-bold mb-4 text-gray-800'>{t("title")}</h1>
      <p className='text-xl mb-6 text-gray-600'>{t("pageDescription")}</p>
      <Link href='/'>
        <p className='text-blue-500 hover:text-blue-700 border border-blue-500  font-semibold py-2 px-4 rounded transition duration-300'>
          {t("goBackHome")}
        </p>
      </Link>
    </div>
  );
}
