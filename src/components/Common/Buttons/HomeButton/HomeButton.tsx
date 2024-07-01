"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HomeButton() {
  const t = useTranslations("NotFound");
  const { locale } = useParams();

  return (
    <Link
      href={`/${locale}`}
      className='text-blue-500 hover:text-blue-700 border border-blue-500 font-semibold py-2 px-4 rounded transition duration-300'>
      {t("goBackHome")}
    </Link>
  );
}
