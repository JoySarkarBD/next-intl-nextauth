import Provider from "@/provider";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Poppins, Roboto } from "next/font/google";
import type { ReactNode } from "react";

// The font family for testing purposes
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins--",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto--",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Welcome to Next.js Internationalization",
  description:
    "This is a simple example of using next-intl for internationalization in Next.js",
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const messages = useMessages();

  return (
    <Provider>
      <html lang={params.locale}>
        <body className={`${poppins.className || roboto.className}`}>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </Provider>
  );
}
