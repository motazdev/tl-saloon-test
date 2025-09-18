import GsapPlugins from "@/components/gsap/gsap-plugins";
import Provider from "@/components/Provider";
import Navbar from "@/components/shared/navbar/navbar";
import FooterStyle12 from "@/components/ui/footer-style-12";
import { HomeDataProvider } from "@/contexts/global/home-data";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Cairo, Playfair_Display, Space_Grotesk, Zain } from "next/font/google";
import appService from "../services/app";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Footer from "@/components/shared/footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";

export const metadata: Metadata = {
  title: "AlYaman Platform",
  description: "AlYaman Platform",
  icons: [
    {
      url: "/icons/logo.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/icons/logo.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

const secondayFont = Playfair_Display({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const mainFont = Space_Grotesk({
  variable: "--font-main",
  subsets: ["latin"],
});

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const homeData = await appService.getHomeData();
  const appSettings = await appService.getAppSettings();
  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <Provider>
        <HomeDataProvider
          appSettings={appSettings.data}
          homeData={homeData.data}
        >
          <NextIntlClientProvider messages={messages}>
            <body
              className={`bg-[#fbfaf5] ${mainFont.variable} ${
                secondayFont.variable
              } ${
                locale == "en" ? mainFont.className : cairo.className
              } antialiased`}
            >
              <NuqsAdapter>
                <GsapPlugins />
                <Toaster />
                <Navbar />

                {children}
                <Footer />
              </NuqsAdapter>
              <WhatsappFloatingButton />
            </body>
          </NextIntlClientProvider>
        </HomeDataProvider>
      </Provider>
    </html>
  );
}
