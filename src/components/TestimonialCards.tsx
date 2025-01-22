'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      id: 1,
      quote: "This product changed my life! I can't imagine going back to the old way of doing things.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "John Doe",
      title: "CEO, TechCorp"
    },
    {
      id: 2,
      quote: "Exceptional service and amazing results! I would highly recommend this to anyone.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Jane Smith",
      title: "Founder, Creativa"
    },
    {
      id: 3,
      quote: "The best decision I made for my business. It's a game-changer! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Emily Johnson",
      title: "Marketing Director, Trendz"
    },
    {
      id: 4,
      quote: "I saw immediate improvements. This is exactly what my team needed.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Michael Brown",
      title: "Product Manager, InnovateX"
    },
    {
      id: 5,
      quote: "Absolutely fantastic! The results exceeded my expectations in every way.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Olivia Green",
      title: "Lead Developer, CodeWorks"
    },
    {
      id: 6,
      quote: "A must-have tool for anyone in the industry. It's a true lifesaver.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "David Lee",
      title: "CTO, FutureTech"
    },
    {
      id: 7,
      quote: "Amazing customer support and a product that truly delivers on its promises.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Sophia Williams",
      title: "Project Manager, ProSolutions"
    },
    {
      id: 8,
      quote: "An invaluable resource. I can't imagine working without it anymore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "James Taylor",
      title: "Operations Head, BusinessEase"
    },
    {
      id: 9,
      quote: "The efficiency and quality are unmatched. Worth every penny.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Daniel Harris",
      title: "Creative Director, Visionary Studios"
    },
    {
      id: 10,
      quote: "This tool has become an essential part of my daily workflow. I highly recommend it.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil eos optio praesentium, repellendus neque debitis eveniet iusto mollitia explicabo",
      name: "Lily Martinez",
      title: "UX Designer, DesignHub"
    }
  ];
  
  
  

function TestimonialCards() {

    
  return (
    <div className="realtive h-[35rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2]   flex
    flex-col items-center justify-center max-auto py-10 overflow-hidden md:py-0">
      <h1 className="text-4xl text-center font-bold mt-5">Hear Our Harmony: Voice Of Success</h1>
      <div className="flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl ">
            <InfiniteMovingCards items={testimonials} />
        </div>
      </div>
     
    </div>
  )
}

export default TestimonialCards
