import { bearedBarber } from "@/assets";
import PaginationLinks01 from "@/components/ui/pagination-links-01";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  const t = useTranslations();
  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="py-8 text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
            {t("Grooming & Style Blog")}
          </h1>
          <p className="mt-4 text-xl text-gray-600">{t("blog-page-desc")}</p>
        </div>
        {/* <div className="mb-12">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
              <Search />
            </span>
            <input
              className="form-input block w-full resize-none rounded-lg border-gray-300 bg-white py-3 pl-12 pr-4 text-lg text-gray-900 placeholder:text-gray-500 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              placeholder="Search articles"
              type="search"
            />
          </label>
        </div> */}
        <div className="grid gap-12 @container">
          <Link
            href={"/post/1"}
            className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-[1.02] @xl:flex-row"
          >
            <Image
              src={bearedBarber}
              alt="blogpost"
              className="aspect-video object-cover object-center @xl:w-2/5 w-full"
            />
            <div className="flex flex-col justify-center gap-2 p-6 @xl:w-3/5">
              <p className="text-2xl font-bold leading-tight text-gray-900">
                Mastering the Art of the Perfect Fade
              </p>
              <p className="text-lg font-normal text-gray-600">
                Achieve a flawless fade with our expert tips and techniques.
                Learn about the different types of fades and how to choose the
                right one for your hair type and style.
              </p>
            </div>
          </Link>
          <Link
            href={"/post/1"}
            className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-[1.02] @xl:flex-row"
          >
            <Image
              src={bearedBarber}
              alt="blogpost"
              className="aspect-video object-cover object-center @xl:w-2/5 w-full"
            />
            <div className="flex flex-col justify-center gap-2 p-6 @xl:w-3/5">
              <p className="text-2xl font-bold leading-tight text-gray-900">
                Grooming Essentials for the Modern Man
              </p>
              <p className="text-lg font-normal text-gray-600">
                Discover the must-have grooming products and tools to keep your
                hair and beard looking their best. From shampoos and
                conditioners to beard oils and styling waxes, we&apos;ve got you
                covered.
              </p>
            </div>
          </Link>
          <Link
            href={"/post/1"}
            className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-[1.02] @xl:flex-row"
          >
            <Image
              src={bearedBarber}
              alt="blogpost"
              className="aspect-video object-cover object-center @xl:w-2/5 w-full"
            />
            <div className="flex flex-col justify-center gap-2 p-6 @xl:w-3/5">
              <p className="text-2xl font-bold leading-tight text-gray-900">
                The Ultimate Guide to Beard Care
              </p>
              <p className="text-lg font-normal text-gray-600">
                Learn how to maintain a healthy and stylish beard with our
                comprehensive guide. We&apos;ll cover everything from trimming
                and shaping to washing and moisturizing.
              </p>
            </div>
          </Link>
          <Link
            href={"/post/1"}
            className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-[1.02] @xl:flex-row"
          >
            <Image
              src={bearedBarber}
              alt="blogpost"
              className="aspect-video object-cover object-center @xl:w-2/5 w-full"
            />
            <div className="flex flex-col justify-center gap-2 p-6 @xl:w-3/5">
              <p className="text-2xl font-bold leading-tight text-gray-900">
                Choosing the Right Hairstyle for Your Face Shape
              </p>
              <p className="text-lg font-normal text-gray-600">
                Find the perfect hairstyle to complement your face shape and
                enhance your features. Our guide will help you identify your
                face shape and recommend styles that will suit you best.
              </p>
            </div>
          </Link>
          <Link
            href={"/post/1"}
            className="flex flex-col gap-6 overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-transform hover:scale-[1.02] @xl:flex-row"
          >
            <Image
              src={bearedBarber}
              alt="blogpost"
              className="aspect-video object-cover object-center @xl:w-2/5 w-full"
            />
            <div className="flex flex-col justify-center gap-2 p-6 @xl:w-3/5">
              <p className="text-2xl font-bold leading-tight text-gray-900">
                The History of Barbering
              </p>
              <p className="text-lg font-normal text-gray-600">
                Explore the rich history of barbering, from its ancient origins
                to its modern-day resurgence. Learn about the evolution of
                barbering techniques and the cultural significance of the barber
                shop.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <PaginationLinks01
          currentPage={1}
          totalPages={6}
          paginationItemsToDisplay={4}
        />
      </div>
    </main>
  );
};

export default Page;
