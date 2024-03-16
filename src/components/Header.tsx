"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

import Image from "next/image";

export function Header() {
  return (
    <div className="h-auto md:h-[40rem] w-full relative overflow-hidden mx-auto py-10 md:py-0">
      
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 150 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-[17rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className=" w-full max-w-[13rem] mx-auto z-30 overflow-hidden">
              <img
                src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj"
                alt="Hitesh"
                className="rounded-full"
              />
            </div>
            <div className="overflow-hidden">
              <h2 className="font-bold text-4xl md:text-6xl font-serif mt-4">
                {" "}
                Welcome to my home page ☕️
              </h2>
              <p className="text-xl font-mono p-4 z-30">
                My Name is Hitesh Choudhary and I am a teacher by profession. I
                teach coding to various level of students, right from beginners
                to folks who are already writing great softwares. I have been
                teaching on for more than 10 years now and it is my passion to
                teach people coding. It's a great feeling when you teach someone
                and they get a job or build something on their own. Before you
                ask, all buttons on this website are inspired by Windows 7. In
                past, I have worked with many companies and on various roles
                such as Cyber Security related roles, iOS developer, Tech
                consultant, Backend Developer, Content Creator, CTO and these
                days, I am at full time job as Senior Director at PW (Physics
                Wallah). I have done my fair share of startup too, my last
                Startup was LearnCodeOnline where we served 350,000+ user with
                various courses and best part was that we are able to offer
                these courses are pricing of 299-399 INR, crazy right 😱? But
                that chapter of life is over and I am no longer incharge of that
                platform. I think we have already complicated the front end too
                much, so I am opting for a simpler solution for my home page and
                this is one of the fastest web page on the internet.
              </p>
            </div>
          </motion.h1>
        </LampContainer>
      
    </div>
  );
}


