
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center
    relative max:auto py-10 overflow-height md:py-0">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className='p4 relative z-10 w-full text-center'>
      
      <h1 className="text-4xl font-bold">Master The Art Of Music</h1>
     <p className='max-w-lg mx-auto text-base mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati similique minima esse veritatis officia! Modi, 
        molestias? Expedita, necessitatibus?
         Aliquam fugit nam facere mollitia ab, voluptates illum atque 
         laborum natus tempore?</p>

         <div className="mt-4">
            <Button borderRadius='1.75rem'  
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >Explore Courses</Button>

         </div>


      </div>
    </div>
  )
}

export default HeroSection
