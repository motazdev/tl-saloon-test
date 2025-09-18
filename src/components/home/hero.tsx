"use client";

import {
  heroBg,
  heroBg2,
  heroPerson1,
  heroPerson2,
  saloonHero,
} from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AppContainer from "../AppContainer";
import TLPlayCircle from "../icons/tl-play-circle";
import { Button } from "../ui/button";
import Triangle from "../icons/triangle";
import { useHomeData } from "@/contexts/global/home-data";
import HeroVideoDialog from "../dialogs/hero-video-dialog";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const { homeData } = useHomeData();
  useGSAP(() => {
    gsap.fromTo(
      ".circle-icons",
      { scale: 0 },
      { scale: 1, delay: 0.5, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );
    gsap.fromTo(
      ".data-count",
      {
        opacity: 0,
        scale: 0.8,
      },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );

    gsap.fromTo(
      ".shape1",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
      {
        delay: 0.5,
        duration: 1,
        stagger: 0.8,
        ease: "back.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 130%, 0% 0%)",
      }
    );
    gsap.fromTo(
      ".shape2",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
      {
        delay: 0.8,
        duration: 1,
        stagger: 0.8,
        ease: "circ.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 130%, 0% 0%)",
      }
    );

    gsap.fromTo(
      ".dot",
      { backgroundColor: "#8596A3", scale: 1 },
      {
        backgroundColor: "#8596A3",
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.fromTo(
      ".contact-line",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "back.inOut" }
    );
    gsap.fromTo(
      ".big-header",
      { opacity: 0, filter: "blur(5px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.inOut",
      }
    );
    gsap.fromTo(
      ".paragraph-desc",
      { opacity: 0, filter: "blur(2px)", y: -20 },
      {
        delay: 0.3,
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        stagger: 0,
        ease: "power2.inOut",
      }
    );
    gsap.to(".to-stretch", {
      opacity: 1,
      width: "128px",
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
    });
    gsap.to(".top-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "back.inOut",
    });
    gsap.to(".hero-btns", {
      opacity: 1,
      duration: 0.6,
      stagger: 0.6,
      ease: "back.inOut",
    });

    gsap.fromTo(
      ".hero-person-2",
      { y: -20, x: -20, filter: "drop-shadow(0px 0px 0px #E1AC0F)" },
      {
        y: 0,
        x: 0,
        filter: "drop-shadow(8px 8px 0px #E1AC0F)",
        delay: 0.8,
        duration: 1,
        ease: "back.inOut",
      }
    );
    gsap.fromTo(
      ".hero-chat-text",
      { y: -50, opacity: 0 },
      { y: 0, delay: 1, opacity: 1, duration: 1, ease: "power2.inOut" }
    );

    return () => {
      gsap.killTweensOf(".data-count");
    };
  });
  const t = useTranslations();
  return (
    <AppContainer className="relative my-4 h-full overflow-hidden">
      <div className="relative rounded-3xl overflow-hidden h-[400px]">
        <Image
          src={saloonHero}
          alt="saloon"
          className="w-full h-full object-cover absolute inset-0 z-[1]"
          priority
        />

        <div className="absolute inset-0 bg-black/60 z-[2]"></div>

        <div className="relative z-[3] flex items-center text-center flex-col gap-4 justify-center h-full px-6">
          <h1 className="hero-title ltr:font-secondary text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl">
            {t("Crafting Your Signature Look")}
          </h1>
          <p className="hero-title text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {t("hero-desc")}
          </p>
          <Link href={"/book"} className="block">
            <Button className="bg-main mt-2 hover:bg-[#b59871] duration-500 cursor-pointer">
              {t("Book Your Appointment Now")}
            </Button>
          </Link>
        </div>
      </div>
    </AppContainer>
  );
};

export default Hero;
