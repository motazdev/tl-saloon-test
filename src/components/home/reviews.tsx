"use client";
import { bearedBarber, doubleQoute, user01 } from "@/assets";
import { useHomeData } from "@/contexts/global/home-data";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import AppContainer from "../AppContainer";
import TLStarFill from "../icons/tl-star-fill";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import TLStar from "../icons/tl-star";
const reviewsMock = [
  {
    id: 1,
    name: "motaz",
    rating: 3.5,
    subtitle: "wen developer",
    description: "CEO",
    image: null,
  },
  {
    id: 2,
    name: "motaz",
    rating: 3.5,
    subtitle: "wen developer",
    description: "CEO",
    image: null,
  },
  {
    id: 3,
    name: "motaz",
    rating: 3.5,
    subtitle: "wen developer",
    description: "CEO",
    image: null,
  },
  {
    id: 4,
    name: "motaz",
    rating: 3.5,
    subtitle: "wen developer",
    description: "CEO",
    image: null,
  },
];
const Reviews = () => {
  const { homeData } = useHomeData();
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    direction: locale === "ar" ? "rtl" : "ltr",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onDragStart = () => setIsDragging(true);
    const onDragEnd = () => setIsDragging(false);

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", onDragStart);
    emblaApi.on("pointerUp", onDragEnd);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onDragStart);
      emblaApi.off("pointerUp", onDragEnd);
    };
  }, [emblaApi]);
  const t = useTranslations();
  const arr = ["", "", "", "", "", "", "", "", "", "", "", ""];
  return (
    <>
      {homeData.customer_feedback.length > 0 && (
        <div className="flex flex-col my-24 gap-5">
          <AppContainer className="lg:mt-0 ">
            <div className="flex mentors-section justify-center flex-col items-center">
              <div className="flex mentors-upper-title gap-y-2 relative justify-center flex-col  items-center">
                <h3 className="text-black ltr:font-secondary md:text-5xl text-4xl text-center font-bold">
                  {t("From Our Clients")}
                </h3>
                <p className=" text-lg text-muted-foreground text-center">
                  {t("clients-reviews-desc")}
                </p>
              </div>
            </div>

            <div
              className="overflow-hidden mt-12 w-full"
              ref={emblaRef}
              style={{
                cursor: isDragging ? "pointer" : "default",
              }}
            >
              <div className="flex gap-x-2">
                {reviewsMock.map((feedback, index) => (
                  <div
                    className="relative border rounded-2xl select-none p-4 w-full  flex-[0_0_100%] md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        alt="Liam Harper"
                        className="h-14 w-14 rounded-full object-cover"
                        src={user01}
                      />
                      <div>
                        <p className="font-bold text-black">Liam Harper</p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          3 months ago
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1 text-[var(--primary-color)]">
                      <TLStarFill className="text-main" />
                      <TLStarFill className="text-main" />
                      <TLStarFill className="text-main" />
                      <TLStarFill className="text-main" />
                      <TLStar className="stroke-main text-transparent stroke-2" />
                    </div>
                    <p className="mt-4 text-[var(--text-primary)]">
                      {`"`}I&apos;ve been going to The Sharp Edge for years, and
                      they never disappoint. Their attention to detail and
                      commitment to customer satisfaction is unmatched. Highly
                      recommend!
                      {`"`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: reviewsMock.length - 2 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "h-2 transition-all duration-300",
                      selectedIndex === index
                        ? "w-8 bg-main rounded-lg"
                        : "w-2 bg-main/40 rounded-full"
                    )}
                  />
                )
              )}
            </div>
          </AppContainer>
        </div>
      )}
    </>
  );
};

export default Reviews;
