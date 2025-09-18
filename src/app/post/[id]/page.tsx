import { bearedBarber, postDetails, saloonHero } from "@/assets";
import AppContainer from "@/components/AppContainer";
import OurPosts from "@/components/home/our-posts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import postService from "@/services/post";
import { IPost } from "@/utils/types";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const data = await postService.getSinglePost(parseInt(id));

  if (!data.data) return {};

  return {
    description: data.data.meta_description,
    title: data.data.title + "|" + "Alyaman Platform",
    openGraph: {
      title: data.data.title,
      description: data.data.meta_description,
      images: [data.data.image],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const t = await getTranslations();
  const post: IPost = {
    content: `
      <h2>Welcome to Our Grooming Guide</h2>
      <p>Discover tips, techniques, and pro insights to elevate your style and confidence. Whether you prefer a classic look or a modern edge, we have you covered.</p>
      <h3>The Perfect Fade  Key Steps</h3>
      <ol>
        <li>Start with clean, dry hair for consistent blending.</li>
        <li>Map your guard progression before you begin.</li>
        <li>Work in sections and use light, consistent strokes.</li>
        <li>Detail with scissors or trimmers for a polished finish.</li>
      </ol>
      <blockquote>
        Precision and patience turn a good cut into a great one.
      </blockquote>
      <p>Finish with a matte or natural-finish product to enhance texture without weighing hair down.</p>
      <h3>Beard Care Essentials</h3>
      <ul>
        <li>Wash and condition 2,3 times a week.</li>
        <li>Trim stray hairs regularly to maintain shape.</li>
        <li>Use beard oil for softness and a healthy sheen.</li>
      </ul>
      <p>Have questions about products or techniques? Visit our salon for a personalized consultation.</p>
    `,
    image: "",
    id: 1,
    title: "Mastering the Art of the Perfect Fade",
    meta_description: " ",
    short_description: "",
    slug: "",
  };
  // const post = await postService.getSinglePost(parseInt(id));
  // if (!post.data) return notFound();

  return (
    <div>
      <AppContainer className="mt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">{t("Blog")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("Post Details")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </AppContainer>
      <AppContainer>
        <div className="w-full mx-auto min-h-64 pt-12  pb-12">
          <article className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src={saloonHero}
                alt="saloon"
                className="w-full h-full object-cover absolute inset-0 z-[1]"
                priority
              />
            </div>
            <h1 className="text-4xl font-semibold">{post.title}</h1>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>

        {/* <OurPosts /> */}
      </AppContainer>
    </div>
  );
};

export default Page;
