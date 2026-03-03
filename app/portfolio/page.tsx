import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import ServicesSection from "@/components/portfolio/ServicesSection";

export default function Portfolio() {
  return (
    <div>
      <PortfolioHero />
      <ProjectsGrid />
      <ServicesSection />
    </div>
  );
}
