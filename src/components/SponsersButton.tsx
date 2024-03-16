"use client"

import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function Sponsers(){
  return(
    <div className="relative w-full p-4 mx-auto flex items-center justify-center mt-[4rem]">
      <Link href={'https://hiteshchoudhary.com/sponsorship.html'} target="_blank" rel="noopener noreferrer">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Link for sponsers
      </Button>
      </Link>
    </div>
  )
}