"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='text-blue-500 hover:text-blue-700 border border-blue-500 font-semibold py-2 px-4 rounded transition duration-300 mt-4'>
      {t("goBackPrevious")}
    </button>
  );
}
