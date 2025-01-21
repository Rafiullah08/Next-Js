"use client";
import Link from "next/link";
import React from "react";
import data from "../data/courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

function FetuaredCourses() {
  const FetuaredCoursesData = data.map((courses) => courses);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2>FEATURED COURSES</h2>
        <p className="mt-2 text-3xl sm:text-4xl font-bold leading-8 tracking-light">
          Learn With The Best
        </p>
      </div>

      <div className="mt-10">
        <div className=" grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8 flex justify-center">
          {FetuaredCoursesData.map((courses) => (
            <div key={courses.id} className="flex justify-center ">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] dark:bg-zinc-900 
                 h-full p-4 overflow-hidden max-w-sm text-center"
              >
                <p className="text-2xl">{courses.name}</p>
                <p className="text-sm text-neutral-600">
                  {courses.description}
                </p>
                <p>{courses.price}</p>
                <p>{courses.category}</p>
                <p className="text-sm">Learn More</p>

              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <Link
          href={"/corses"}
          className="bg-white text-black py-3 px-3 rounded font-bold"
        >
          {" "}
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FetuaredCourses;
