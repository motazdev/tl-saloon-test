"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import { useHomeData } from "@/contexts/global/home-data";
import React from "react";
import {
  Scissors,
  Users,
  Clock,
  Star,
  Gift,
  Percent,
  Sparkles,
  Tag,
} from "lucide-react";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const offers = [
  {
    id: 1,
    title: "offer-30-off",
    subtitle: "offer-on-haircuts",
    description: "offer-special-discount-new-customers",
    discount: "30",
    validUntil: "valid-until-dec-31",
    conditions: "conditions-new-customers-only",
    icon: Scissors,
    featured: true,
  },
  {
    id: 2,
    title: "offer-3-plus-1",
    subtitle: "offer-free",
    description: "offer-special-haircuts",
    discount: "FREE",
    validUntil: "valid-until-end-of-month",
    conditions: "conditions-when-booking-3-sessions",
    icon: Gift,
    featured: false,
  },
  {
    id: 3,
    title: "offer-friends-discount",
    subtitle: "offer-25",
    description: "offer-bring-friend-discount",
    discount: "25",
    validUntil: "valid-until-always",
    conditions: "conditions-when-attending-with-friend",
    icon: Users,
    featured: false,
  },
  //   {
  //     id: 4,
  //     title: "Gold Membership",
  //     subtitle: "20%",
  //     description: "Discount on all services",
  //     discount: "20",
  //     validUntil: "All year round",
  //     conditions: "For subscribed members",
  //     icon: Star,
  //     featured: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Early Bird",
  //     subtitle: "15%",
  //     description: "For appointments before 10 AM",
  //     discount: "15",
  //     validUntil: "Daily",
  //     conditions: "For bookings before 10:00 AM",
  //     icon: Clock,
  //     featured: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Senior Discount",
  //     subtitle: "40%",
  //     description: "Special appreciation for seniors",
  //     discount: "40",
  //     validUntil: "Permanent",
  //     conditions: "For ages 60+ with ID",
  //     icon: Percent,
  //     featured: false,
  //   },
];

const Offers = () => {
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
              {t("Special Offers")}
            </h3>
            <p className=" text-lg text-muted-foreground text-center">
              {t("special-offers-desc")}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {offers.map((offer) => {
            return (
              <div key={offer.id} className="mb-16 flex">
                {/* Add flex here */}
                <div className="relative bg-white border-main/40 border shadow-main/20 shadow-lg from-main/50 to-main rounded-3xl p-8 md:p-12 overflow-hidden flex-1">
                  {" "}
                  {/* Add flex-1 here */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center gap-8 h-full">
                    {" "}
                    {/* Add h-full */}
                    <div className="text-center items-center justify-center flex flex-col flex-1">
                      <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                        <Star className="w-4 h-4 text-black fill-white" />
                        <span className="text-black font-semibold text-sm">
                          {t("special-offer-badge")}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {t(offer.title)}
                      </h3>
                      <p className="text-xl text-black/90 mb-4">
                        {t(offer.description)}
                      </p>
                      <div className="flex flex-col gap-3 justify-center md:justify-start mt-auto">
                        {/* <Button className="bg-main hover:bg-main/80 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300">
                        </Button> */}
                        <InteractiveHoverButton className="min-w-38">
                          {t("Book Now")}
                        </InteractiveHoverButton>
                        <div className="text-black/80 text-xs self-center">
                          {t("valid-through")} {t(offer.validUntil)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </AppContainer>
    </section>
  );
};

export default Offers;
