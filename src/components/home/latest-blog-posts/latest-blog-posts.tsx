"use client";
import { bearedBarber, onlineLibrary } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useHomeData } from "@/contexts/global/home-data";
import React from "react";
import AppContainer from "@/components/AppContainer";
import Link from "next/link";

const LatestBlogPosts = () => {
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
              {t("Latest from Our Blog")}
            </h3>
            <p className=" text-lg text-muted-foreground text-center">
              {t("latest-blog-posts-desc")}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="transform rounded-xl bg-white p-6 transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt="Blog Post Image"
                className="h-full w-full object-cover"
                src={bearedBarber}
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              The Ultimate Guide to Beard Care
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Oct 26, 2023</p>
            <p className="mt-4 text-[var(--text-secondary)]">
              Learn how to maintain a healthy and stylish beard with our expert
              tips and product recommendations.
            </p>
            <Link
              className="mt-4 text-main inline-block font-medium "
              href="/post/1"
            >
              {t("Read More")}
            </Link>
          </div>
          <div className="transform rounded-xl bg-white p-6 transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt="Blog Post Image"
                className="h-full w-full object-cover"
                src={bearedBarber}
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              5 Hairstyles to Try This Season
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Oct 19, 2023</p>
            <p className="mt-4 text-[var(--text-secondary)]">
              Looking for a new look? Check out these trendy hairstyles that are
              perfect for the current season.
            </p>
            <Link
              className="mt-4 text-main inline-block font-medium "
              href="/post/1"
            >
              {t("Read More")}
            </Link>
          </div>
          <div className="transform rounded-xl bg-white p-6 transition-transform hover:-translate-y-2">
            <div className="mx-auto h-48 w-full overflow-hidden rounded-lg">
              <Image
                alt="Blog Post Image"
                className="h-full w-full object-cover"
                src={bearedBarber}
              />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-black">
              Why a Professional Shave Matters
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Oct 12, 2023</p>
            <p className="mt-4 text-[var(--text-secondary)]">
              Discover the benefits of getting a professional shave and why its
              a game-changer for your skin.
            </p>
            <Link
              className="mt-4 text-main inline-block font-medium "
              href="/post/1"
            >
              {t("Read More")}
            </Link>
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default LatestBlogPosts;
