"use client";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import aiims from "../images/aiims.jpg";
import iit from "../images/iitjammu.jpeg";
import bgsbu from "../images/bgsbu.jpeg";
import iim from "../images/iimjammu.jpeg";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { NavOption } from "@/components/navOption";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import BentoComp from "./bentoComp";
import {images} from "@/app/images"


type EventType = {
  title: string;
  description: string;
  header: JSX.Element; // Assuming JSX.Element is the correct type
  icon: JSX.Element; // Assuming JSX.Element is the correct type
};

type EventsType = {
  [key: string]: EventType[];
};

export default function Home() {
  const colleges: string[] = ["iit", "iim"];
  const backgrounds = [iit, iim, aiims, bgsbu];
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    </div>
  );
  const events: EventsType = {
    "iit": [
      {
        title: "The Dawn of Innovation",
        description:
          "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Power of Communication",
        description:
          "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      },
    ],
    "iim": [
      {
        title: "The Dawn of Innovation",
        description:
          "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Power of Communication",
        description:
          "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      },
    ],
  };
  return (
    <>
      <main className="h-screen z-0 ">
        <NavOption />
        <div className="relative rounded-sm">
          <Card className="relative brightness-50 rounded-sm">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {backgrounds.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="w-screen h-[87.5vh] relative contain "
                  >
                    <Image
                      layout="fill"
                      className="p-0 rounded-lg"
                      src={item}
                      alt=""
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Card>
          <CardTitle className="absolute lg:top-1/4 lg:left-2/4 text-6xl text-center lg:right-8 top-1/3 text-white ">
            Welcome to the official portal for the<br />{" "}
            <span className="text-blue-300">Jammu University cluster</span>
          </CardTitle>
        </div>

        <div className="flex justify-center oui">
          <div className="mt-4 z-0 md:w-10/12 ">
            <CardTitle className=" text-center">Gallery</CardTitle>
            <Carousel>
              <CarouselContent className="m-0 ">
                {colleges.map((item, i) => {
                  return (
                    <CarouselItem key={i} className="p-0">
                      <BentoComp props={events[item]}></BentoComp>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="zamn" />
              <CarouselNext className="zamn" />
            </Carousel>
          </div>
        </div>
          <div className="md:flex-row w-full flex flex-col h-[500px] bg-muted">
            <Card className="flex-1  oui">
              <CardTitle className="text-center pt-3 text-slate-600">Recent Events</CardTitle>
              <CardContent>
                
              </CardContent>
            </Card>
            <Card className="flex-1 oui">
              <CardTitle className="text-center pt-3 text-slate-600">Notifications</CardTitle>
            </Card>
          </div>

          <Card className="h-[300px] bg-black backdrop-blur-lg rounded-none border-0 ">
              <CardTitle className="text-center text-white pt-5">Constituent Colleges</CardTitle>
              <CardContent className="flex gap-2 pt-16 justify-center">

                {images.map((item:any)=>{
                  return <Card className="w-[100px] h-[100px] relative"><Image layout="fill" className="rounded-sm p-0" src={item.second} alt=""/></Card>
                })}
              </CardContent>
              <CardFooter className="text-white font-semibold text-center flex justify-center p-0">"Without collaboration our growth is limited to our own perspectives"</CardFooter>
          </Card>
      </main>
    </>
  );
}
