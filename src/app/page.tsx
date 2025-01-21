import FetuaredCourses from "@/components/FetuaredCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {


  return (
<main className="min-h-screen bg-black/[0.96] atialiased bg-grid-white/[0.02]"> 

<HeroSection/>
<FetuaredCourses/>
<WhyChooseUs/>
<TestimonialCards/>
<UpcomingWebinars/>
</main>
  );
}
