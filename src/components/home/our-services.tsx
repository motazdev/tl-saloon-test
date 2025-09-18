"use client";
import { bearedBarber } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import { useHomeData } from "@/contexts/global/home-data";
import React from "react";

const OurServices = () => {
  const t = useTranslations();
  const { homeData } = useHomeData();
  const data = homeData.services;
  useGSAP(() => {
    gsap.fromTo(
      ".mentors-upper-title",
      { opacity: 0, filter: "blur(10px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".mentors-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <section id="services" className="mt-20">
      <AppContainer>
        <div className="flex mentors-section justify-center flex-col items-center">
          <div className="flex mentors-upper-title gap-y-2 relative justify-center flex-col  items-center">
            <h3 className="text-black ltr:font-secondary md:text-5xl text-4xl text-center font-bold">
              {t("Our Services")}
            </h3>
            <p className=" text-lg text-muted-foreground text-center">
              {t("our-best-services-desc")}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="transform rounded-xl bg-white p-6 text-center transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt="Haircut"
                className="h-full w-full object-cover"
                src={bearedBarber}
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              {t("Haircuts")}
            </h3>
            <p className="mt-2 text-[var(--text-secondary)]">
              {t("haircuts-desc")}
            </p>
          </div>
          <div className="transform rounded-xl bg-white p-6 text-center transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt={t("alt-beard-trim")}
                src={bearedBarber}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              {t("Beard Trims")}
            </h3>
            <p className="mt-2 text-[var(--text-secondary)]">
              {t("beard-trims-desc")}
            </p>
          </div>
          <div className="transform rounded-xl bg-white p-6 text-center transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt={t("alt-hair-coloring")}
                src={bearedBarber}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              {t("Coloring")}
            </h3>
            <p className="mt-2 text-[var(--text-secondary)]">
              {t("coloring-desc")}
            </p>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default OurServices;
