"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { CarouselDemo } from "./Pjcarausel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
    
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
            My first Project that i Built on the react as frontend and node as Backend.
              </span>{" "}
              “EDUWE” is the learning management system that carries the motive of providing a 
              centralized platform for creating, delivering, and tracking learning materials and activities.
               It also facilitates online learning, tracking progress, and managing resources, contributing to a
                more organized and accessible learning experience for both educators and learners. In this section,
                 problems, motivations, objectives, project scope and limitations will be described in detail.


            </p>
           <CarouselDemo/>
            <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">The Learning Management System (LMS) holds significant importance in the field of education and training, impacting various stakeholders including educators, learners, and administrators.
            <br /><br />
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Centralized Learning Hub:
            </span><br />
“EDUWE” plays a pivotal role in modern education by providing a centralized platform for efficient course delivery, content management, and student engagement.

<br /><br />
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Flexibility in Learning:            </span><br />

The LMS enhances the accessibility, flexibility, and scalability of educational programs, contributing to a more dynamic and inclusive learning environment.
<br /><br />
<span className="font-bold text-neutral-700 dark:text-neutral-200">
Collaborative Learning:           </span><br />

It facilitates anytime, anywhere learning, promotes collaboration among learners, and enables educators to track and assess student progress effectively.
<br />
<br />
In conclusion, the literature on Learning Management Systems reflects their dynamic nature and multifaceted contributions to education. While acknowledging challenges, the overarching narrative is one of optimism, highlighting the transformative potential of LMS in shaping the future of learning and ensuring a more accessible, engaging, and personalized educational experience for all.

 </p>
          </div>
    
    </>
  );
};

const data = [
  {
    category: "Learning Managmenet system",     
    title: "Edu we",
    src: "/img/project_1.jpg  ",
    content: <DummyContent />,
  },
  {
    category: "My biggest project",
    title: "Took me 1 year",
    src: "/img/project_1.jpg ",
    content: <DummyContent />,
  }
  
];
