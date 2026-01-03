import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { CoursesSection } from "@/components/landing/CoursesSection";
import { SampleGallery } from "@/components/landing/SampleGallery";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      <SampleGallery />
      <CTASection />
      <Footer />
    </main>
  );
}

