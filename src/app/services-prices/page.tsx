"use client";
import AppContainer from "@/components/AppContainer";
import { useTranslations } from "next-intl";
import { z } from "zod";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="">
      <main className="flex-1">
        {/* <section className="px-40 py-16 flex justify-center items-center bg-cover bg-center">
          <div className="max-w-3xl text-center flex flex-col items-center gap-6">
            <h1 className="text-gray-900 text-5xl font-bold leading-tight tracking-tighter">
              Crafting Confidence, One Cut at a Time
            </h1>
            <p className="text-gray-700 text-lg font-normal leading-relaxed">
              Experience the art of grooming in a modern setting. Our skilled
              barbers blend classic techniques with contemporary styles to
              create your perfect look.
            </p>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#0f66bd] hover:bg-[#0d5ab0] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Book Your Appointment</span>
            </button>
          </div>
        </section> */}
        <AppContainer className=" py-20 flex flex-col items-center gap-12 bg-[#f9fafb]">
          <div className="text-center max-w-2xl">
            <h2 className="text-gray-900 text-4xl font-bold leading-tight tracking-tighter mb-4">
              {t("Our Services")}
            </h2>
            <p className="text-gray-600 text-lg">{t("service-page-desc")}</p>
          </div>
          <div className="w-full sm:max-w-4xl max-w-xs">
            <div className="divide-y divide-[#e5e7eb]">
              <div className="flex justify-between items-center gap-x-6 py-5">
                <div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    {t("Classic Haircut")}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {t("classic-haircut-desc")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold text-right shrink-0">
                  {`45 ${t("AED")}`}
                </p>
              </div>
              <div className="flex justify-between items-center gap-x-6 py-5">
                <div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    {t("Beard Trim")}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {t("beard-trim-desc")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold text-right shrink-0">
                  {`45 ${t("AED")}`}
                </p>
              </div>
              <div className="flex justify-between items-center gap-x-6 py-5">
                <div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    {t("Hot Towel Shave")}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {t("hot-towel-shave-desc")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold text-right shrink-0">
                  {`45 ${t("AED")}`}
                </p>
              </div>
              <div className="flex justify-between items-center gap-x-6 py-5">
                <div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    {t("Haircut & Shave Combo")}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {t("haircut-shave-combo-desc")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold text-right shrink-0">
                  {`45 ${t("AED")}`}
                </p>
              </div>
              <div className="flex justify-between items-center gap-x-6 py-5">
                <div>
                  <h3 className="text-gray-900 text-lg font-semibold">
                    {t("Kids Haircut (Under 12)")}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {t("kids-haircut-desc")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold text-right shrink-0">
                  {`45 ${t("AED")}`}
                </p>
              </div>
            </div>
          </div>
          {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-transparent border border-gray-300 hover:bg-gray-100 transition-colors text-gray-900 text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">View All Services</span>
          </button> */}
        </AppContainer>
      </main>
    </div>
  );
}
