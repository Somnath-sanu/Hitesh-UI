"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import HE from "@/assests/hiteshEnglish.jpg";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Sponsors"
        ></MenuItem>

        <MenuItem setActive={setActive} active={active} item="You are here for">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="English Youtube channel"
              href="https://www.youtube.com/hiteshchoudharydotcom"
              src="https://yt3.googleusercontent.com/ytc/AIdro_kPQ2Ek_uYCtVg39wzH--jemMsepAmWi1IcTEjmjg=s176-c-k-c0x00ffffff-no-rj"
              description="Learn a wide range of subjects like programming, what's latest in tech, new frameworks, open-source products etc."
            />
            <ProductItem
              title="Hindi Youtube channel"
              href="https://www.youtube.com/@chaiaurcode"
              src="https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj"
              description="A channel dedicated to chai and coding in HINDI. A lot happens over chai and I am a big-time chai lover. "
            />
            <ProductItem
              title="Open Source Project"
              href="https://freeapi.app/"
              src="https://th.bing.com/th/id/OIG3.A71Ks1_mw_w_sK07yaX7?w=1024&h=1024&rs=1&pid=ImgDetMain"
              description="Learn about API and master them with our new open source project."
            />
            <ProductItem
              title="WhatsApp"
              href="https://www.whatsapp.com/channel/0029Va9F26PFMqrgMdxYkr01"
              src="https://th.bing.com/th/id/OIG2.AgepgdUzeEyNJ9emTZD0?w=1024&h=1024&rs=1&pid=ImgDetMain"
              description="Hitesh Choudhary
              WhatsApp Channel"
            />
            <ProductItem
              title="Discord"
              href="https://discord.com/invite/WDrH3zuWFb"
              src="https://th.bing.com/th/id/OIG3.Jz2ABxvyAaVzCda59dT_?pid=ImgGn"
              description="Hitesh Choudhary Discord"
            />
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
