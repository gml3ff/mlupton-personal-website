import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Projects() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-25 sticky ">
        <h1 className=" text-5xl md:text-9xl text-[#006666] dark:text-[#99ffff] font-bold py-10 text-center md:text-left">
          Projects
        </h1>
      </div>
    <div className="max-w-6xl mx-auto  py-2 md:py-4">
      <div className="flex md:flex-row justify-between items-center">
        <div className="space-x-12 hidden md:block">
          <Link href="#one-knob">
            <a
              className="text-2xl text-[#004d4d] font-bold dark:text-gray-400 hover:border-4 rounded-sm p-2 border-[#008080]">
              MIDI Control Knob{" "}
            </a>
          </Link>
          <Link href="#vacuum-stand">
            <a
              className="text-2xl text-[#004d4d] font-bold dark:text-gray-400 hover:border-4 rounded-sm p-2 border-[#008080]">
              Vacuum Stand{" "}
            </a>
          </Link>
          <Link href="#streaming-remote">
            <a
              className="text-2xl text-[#004d4d] font-bold dark:text-gray-400 hover:border-4 rounded-sm p-2 border-[#008080]">
              Streaming Remote
            </a>
          </Link>
        </div>

      </div>
    </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 py-20 pb-40">
            <div className="grid grid-rows-1 md:grid-rows-2 ">
            <h1 id="one-knob" className="text-3xl md:text-5xl align-baseline text-[#006666]">MIDI Control Knob</h1>
              <p>A simple MIDI device for Ableton Live. Built using Max MSP and using an Arduino Nano as the controller. Automatically maps to any clicked parameters without requiring any sort of MIDI template. Great for quickly adjusting parameters like filter cutoff without requiring any sort of device template. </p> </div>
              <video src="videos/KnobClip_2.mp4" autoplay="autoplay" muted loop id="videoFrame" />    
            <div className="grid grid-rows-1 md:grid-rows-2">
      <h1 id="vacuum-stand" className="text-3xl md:text-5xl text-[#006666]">Vacuum Stand</h1>
              <p>Dissatisfied with the excessive cost of the charging stand for the handheld vacuum I own, I decided to design my own! This model can be 3D printed fairly easily and is <a href="https://www.thingiverse.com/thing:5341293">available for download on Thingiverse</a></p></div>
              <img></img>
          <h1 id="streaming-remote" className="text-3xl md:text-5xl text-[#006666]">Streaming Remote</h1>
            <div className="grid grid-rows-2 md:grid-rows-6">
              <p></p>
              <img></img>
            </div>
        </div>
      </div>
    </section>
  );
}
