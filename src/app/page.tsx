import FetuaredCourses from "@/components/FetuaredCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructers from "@/components/Instructers";
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
<Instructers/>
<Footer/>
</main>
  );
}
