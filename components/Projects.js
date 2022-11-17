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
        <div className="grid grid-cols-2 dark:bg-gray-900 max-w-6xl mx-auto pt-20 gap-x-16 gap-y-32">
          <div className="max-w-4xl max-h-4xl"><h1 id="one-knob" className="text-3xl md:text-5xl align-baseline text-[#006666]">MIDI Control Knob</h1>
          <br></br>
          <br/>
          <br/>
          <p>A simple MIDI device for Ableton Live. Built using Max MSP and using an Arduino Nano as the controller. Automatically maps to any clicked parameters without requiring any sort of MIDI template. Great for quickly adjusting parameters like filter cutoff without requiring any sort of device template. </p></div>
          <div className="max-w-4xl"><video src="videos/KnobClip_2.mp4" autoplay="autoplay" muted loop id="videoFrame" /></div>
          
          <img src="oneknob_diagram.png" id="projectImage" />
          
          <img src="knob_tall.jpg" id="projectImage" />
          <div className="max-w-4xl">
            <h1 id="vacuum-stand" className="text-3xl md:text-5xl text-[#006666]">Vacuum Stand</h1>
            <br/>
            <br/>
            <br/>
            <p>Dissatisfied with the excessive cost of the charging stand for the handheld vacuum I own, I decided to design my own! This model can be 3D printed fairly easily and is <a href="https://www.thingiverse.com/thing:5341293" className="text-[#00b3b3] hover:text-[#ccffff]" id="selection">available for download on Thingiverse</a></p>
          </div>
            
          <img src="vacuumstand_diagram.png" id="projectImage" />
          <img src="vacbottom.jpg" id="projectImage" />
          <img src="vacstand.jpg" id="projectImage" />
          <div className="max-w-4xl"> 
            <h1 id="streaming-remote" className="text-3xl md:text-5xl text-[#006666]">Streaming Remote</h1>
            <br></br>
            <br/>
            <br/>
            <p>An exercise in rendering and more complex modeling techniques in Fusion 360. Taking design cues from the Laserdisc remotes of the early 90s, this streaming remote design also includes a jog wheel for frame-by-frame scrolling. The size and shape was iterated upon by 3D printing multiple prototypes.</p>
          </div>
          <img src="remote_diagram.png" id="projectImage" />
          <img src="remote_hand.jpg" id="projectImage" />
          <img src="remote_angled.png" id="projectImage" />
        </div>
      </div>
    </section>
  );
}
