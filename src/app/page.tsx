"use client"
import { Header } from "@/components/Header";
import { Learning } from "@/components/Learning";
import { Sponsers } from "@/components/SponsersButton";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";


export default function Home() {
  return (
    <FollowerPointerCard
      title={
        <TitleComponent
          title={"Hitesh"}
          avatar={
            "https://yt3.googleusercontent.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj"
          }
        />
      }
    >
      <main className="min-h-screen bg-black/[0.96] antialiased relative overflow-hidden w-full ">
        <Header />

        <Sponsers />
        <Learning />
      </main>
    </FollowerPointerCard>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center overflow-hidden scroll-smooth">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
