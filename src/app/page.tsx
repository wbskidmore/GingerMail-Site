import { Hero } from "@/components/sections/Hero";
import { Pitch } from "@/components/sections/Pitch";
import { Features } from "@/components/sections/Features";
import { PrivateAI } from "@/components/sections/PrivateAI";
import { PrivacySecurity } from "@/components/sections/PrivacySecurity";
import { HonestTake } from "@/components/sections/HonestTake";
import { Support } from "@/components/sections/Support";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pitch />
      <Features />
      <PrivateAI />
      <PrivacySecurity />
      <HonestTake />
      <Support />
      <DownloadCTA />
    </>
  );
}
