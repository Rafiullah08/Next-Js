"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      id: 1,
      title: "Mastering JavaScript: From Beginner to Pro",
      description:
        "Learn the core concepts of JavaScript and dive deep into the language that powers modern web development.",
      link: "https://example.com/webinars/javascript-masterclass",
    },
    {
      id: 2,
      title: "React.js Essentials: Building Dynamic UIs",
      description:
        "Explore React.js and learn how to build interactive user interfaces using one of the most popular JavaScript libraries.",
      link: "https://example.com/webinars/react-essentials",
    },
    {
      id: 3,
      title: "Introduction to Web Development with HTML and CSS",
      description:
        "Get started with web development by learning the basics of HTML and CSS to create beautiful and responsive websites.",
      link: "https://example.com/webinars/html-css-intro",
    },
    {
      id: 4,
      title: "Advanced CSS Techniques: Flexbox and Grid",
      description:
        "Master Flexbox and CSS Grid to build complex and responsive layouts with ease.",
      link: "https://example.com/webinars/advanced-css",
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js and Express",
      description:
        "Learn how to create scalable and efficient RESTful APIs using Node.js and Express.js.",
      link: "https://example.com/webinars/nodejs-rest-api",
    },
    {
      id: 6,
      title: "Exploring Cloud Computing: AWS for Developers",
      description:
        "Dive into AWS and learn how to leverage cloud services for building scalable, reliable, and cost-efficient applications.",
      link: "https://example.com/webinars/aws-cloud",
    },
    {
      id: 7,
      title: "UI/UX Design Fundamentals for Web Developers",
      description:
        "Understand the core principles of UI/UX design and how to implement them into your web development workflow.",
      link: "https://example.com/webinars/ui-ux-design",
    },
    {
      id: 8,
      title: "Machine Learning Basics: Introduction to AI",
      description:
        "Get introduced to the world of machine learning and artificial intelligence with a hands-on approach to basic algorithms.",
      link: "https://example.com/webinars/ml-ai-basics",
    },
    {
      id: 9,
      title: "Introduction to DevOps: Automating Development Workflows",
      description:
        "Learn how to implement DevOps practices to streamline software development, deployment, and monitoring.",
      link: "https://example.com/webinars/devops-intro",
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold ">
            FEATUARED WEBINARS
          </h2>
          <p className="mt-2 text-3xl loading-8 font-extrabold text-white sm-text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect items={featuredWebinars} />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/all-webinars"}
            className="p-3.5 bg-white text-gray-900 font-bold rounded"
          >
            View All Webinars{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
