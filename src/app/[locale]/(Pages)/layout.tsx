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
    { name: t("home"), url: "/" },
    { name: t("blog"), url: "/blogs" },
    { name: t("about"), url: "/about" },
    { name: t("adminPage"), url: "/admin" },
  ];
  return (
    <>
      <Navbar routes={routes} />
      {children}
      <Footer />
    </>
  );
}
