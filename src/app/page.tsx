import HeroSection from "@/components/hero-section";
import RecentBlogSection from "@/components/recent-blog-section";
import RecentPortfolioSection from "@/components/recent-portfolio-section";
import Typing from "@/components/typing";

export default function HomePage() {
  return (
    <div>
      <Typing />
      <HeroSection />
      <RecentBlogSection />
      <RecentPortfolioSection />
    </div>
  );
}
