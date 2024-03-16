"use client";

import Link from "next/link";
import { Card } from "./Card";
import { Meteors } from "./ui/meteors";

export function Learning() {
  return (
    <div className="relative md:h-[70rem] h-auto w-full overflow-hidden mt-[4rem] ">
      <div className="text-center space-y-3 mb-7">
        <h1 className="font-bold text-2xl md:text-6xl bg-gradient-to-r from-blue-900  via-sky-800 to-indigo-800 w-full bg-clip-text text-transparent font-serif ">
          You are here for...
        </h1>
        <p className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-900  via-sky-600 to-indigo-700 w-full bg-clip-text text-transparent font-serif">
          I think you are here to get to know me. Best way is to start with my
          work.
        </p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden h-full">
        <Link href={'https://hiteshchoudhary.com/hindi.html'} target="_blank" rel="noopener noreferrer">
        <div className="h-full p-5 md:p-0 ">
          <Card
            image={`https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj`}
            language={"Hindi"}
            paragraph = {"Hanji, Hindi Learners , kaise h aap sabhi. Ummid h ache hi honge. Humne b recently hi Hindi me videos banana start kiye hain. Aap sabhi ko bata de ki humare paas English channel me 1500+ videos hain aur hum Hindi me 228 videos bana chuke hain. Aur abhi to sirf shuru hue h.😌"}
          />
        </div>
        </Link>
        <Link href={'https://hiteshchoudhary.com/english.html'} target="_blank" rel="noopener noreferrer">
        <div className="h-full p-5 md:p-0">
          {" "}
          <Card
            image={`https://yt3.googleusercontent.com/ytc/AIdro_kPQ2Ek_uYCtVg39wzH--jemMsepAmWi1IcTEjmjg=s176-c-k-c0x00ffffff-no-rj`}
            language={"English"}
            paragraph = {"Welcome English Learners Over the years, I have created a lot of content on Youtube and a lot more on various paid platforms too, including my last startup LearnCodeOnline. With over 1500+ videos, I am sure there is something for you too. And I am constantly adding more."}
          />
        </div>
        </Link>
        <Meteors number={100} className="h-auto" />
      </div>
    </div>
  );
}
