import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function Layout({ children, params }: LayoutProps) {
  const t = useTranslations("Navbar");

  const routes = [
    { name: t("home"), url: `/${params.locale}/` },
    { name: t("blog"), url: `/${params.locale}/blogs` },
    { name: t("about"), url: `/${params.locale}/about` },
    { name: t("adminPage"), url: `/${params.locale}/admin` },
    { name: t("login"), url: `/${params.locale}/login` },
    { name: t("register"), url: `/${params.locale}/register` },
  ];

  return (
    <>
      <Navbar routes={routes} locale={params.locale} />
      {children}
      <Footer />
    </>
  );
}
