import Hero from "@/components/home/hero";
import LatestBlogPosts from "@/components/home/latest-blog-posts/latest-blog-posts";
import OurServices from "@/components/home/our-services";
import Reviews from "@/components/home/reviews";
import Offers from "@/components/offers/offers";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      <Offers />
      <LatestBlogPosts />
      <Reviews />
      {/* <AdsSection />
      <AboutUsSection />
      <HomeSlider />
      <PartnersSection />
      <TestimonialsSimple />
      <OurPosts />
      <JobApplyAd /> */}
    </div>
  );
}
