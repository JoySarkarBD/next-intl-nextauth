import { ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return children;
}
