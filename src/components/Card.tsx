"use client"

import Image from "next/image"
import { BackgroundGradient } from "./ui/background-gradient"

interface CardProps {
  image : string;
  language : string;
  paragraph : string;
}

export function Card({image , language , paragraph} : CardProps) {
  return (
    <div className="relative flex justify-center items-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt="Hitesh"
          height="400"
          width="400"
          className="object-contain rounded-full blur-sm hover:blur-none transition-all duration-300"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-serif">
          Learn In {language} with Me
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
          {paragraph}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Start Learning </span>
         
        </button>
      </BackgroundGradient>
    </div>
  )
}


