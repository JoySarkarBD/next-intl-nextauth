export const dynamic = "force-dynamic";

import BackButton from "@/components/Common/Buttons/BackButton/BackButton";
import HomeButton from "@/components/Common/Buttons/HomeButton/HomeButton";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-5xl font-bold mb-4 text-gray-800'>{t("title")}</h1>
      <p className='text-xl mb-6 text-gray-600'>{t("pageDescription")}</p>

      <HomeButton />
      <BackButton />
    </div>
  );
}
