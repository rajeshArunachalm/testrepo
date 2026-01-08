// import ExclusiveDeals from "@/components/home/ExclusiveDeals";
import ExpertConsultation from "@/components/home/ExpertConsultation";
import FAQ from "@/components/home/FAQ";
import FeaturedDevelopers from "@/components/home/FeaturedDevelopers";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection2 from "@/components/home/HeroSection2";
import NewProjects from "@/components/home/NewProjects";
import NewsArticles from "@/components/home/NewsArticles";
import SunnyPropsConcierge from "@/components/home/SunnyPropsConcierge";
import SunnyPropsShots from "@/components/home/SunnyPropsShots";
import Testimonials2 from "@/components/home/Testimonials2";
import TopLocations from "@/components/home/TopLocations";
import TrendingProjects from "@/components/home/TrendingProjects";

// Force dynamic rendering and disable caching for fresh data on every request
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <main>
      <HeroSection2 />
      <TrendingProjects />
      <SunnyPropsConcierge />
      {/* <ExclusiveDeals /> */}
      <FeaturedProjects />
      <NewProjects />
      <TopLocations />
      <FeaturedDevelopers />
      <NewsArticles />
      <SunnyPropsShots />
      <ExpertConsultation />
      <FAQ />
      <Testimonials2 />
    </main>
  );
}
