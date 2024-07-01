import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md'>
        <h1 className='text-3xl font-bold text-center mb-6'>{t("title")}</h1>
        <p className='text-lg text-gray-700 text-center'>{t("description")}</p>
      </div>
    </div>
  );
}
