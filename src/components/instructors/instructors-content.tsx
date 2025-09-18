"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslations } from "next-intl";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InstructorService from "@/services/instructor";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { emptyCategories } from "@/assets";
import { parseAsInteger, useQueryState } from "nuqs";
import PaginationLinks01 from "../ui/pagination-links-01";
const InstructorsContent = () => {
  const t = useTranslations();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const { data, isLoading } = useQuery({
    queryKey: ["instructors", page],
    queryFn: () => InstructorService.getInstructors(page),
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 60,
  });
  return (
    <>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("Instructors")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {!isLoading && data?.data.data.length === 0 && (
        <div className="flex py-32 justify-center gap-y-6 flex-col items-center">
          <div className="relative size-32">
            <Image
              src={emptyCategories}
              alt="NoCategories"
              className="absolute inset-0 object-cover"
            />
          </div>
          <p className="text-center max-w-xs md:text-base text-sm">
            {t("There are no Courses yet")}
          </p>
        </div>
      )}
      {isLoading && (
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-80 w-full" />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.data.data.map((instructor) => (
          <Link
            key={instructor.id}
            href={`/courses?instructor=${instructor.id}`}
            className="block bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-6 text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-main-yellow mx-auto">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-semibold text-lg">{instructor.name}</div>
              <div className="text-main-yellow text-sm">
                {instructor.overview}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {!isLoading && data && data.data.meta.last_page > 1 && (
        <div className="mt-8">
          <PaginationLinks01
            currentPage={data.data.meta.current_page}
            totalPages={data.data.meta.last_page}
            paginationItemsToDisplay={4}
          />
        </div>
      )}
    </>
  );
};

export default InstructorsContent;
