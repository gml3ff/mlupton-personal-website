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
      <div className="max-w-6xl mx-auto h-25 sticky top-0 ">
        <h1 className=" text-5xl md:text-9xl text-[#006666] dark:text-[#99ffff] font-bold py-10 text-center md:text-left">
          Projects
        </h1>
      </div>
    <div className="max-w-6xl mx-auto  py-2 md:py-4">
      <div className="flex md:flex-row justify-between items-center">
        <div className="space-x-12 hidden md:block">
          <Link href="/one-knob">
            <a
              id="selection" 
              className={`text-2xl  ${
                router.asPath === "/one-knob"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              One Knob{" "}
              {router.asPath === "/one-knob" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
                
              )}
            </a>
          </Link>
          <Link href="/vacuum-stand">
            <a
              id="selection"
              className={`text-2xl  ${
                router.asPath === "/vacuum-stand"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Vacuum Stand{" "}
              {router.asPath === "/vacuum-stand" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/streaming-remote">
            <a
              id="selection"
              className={`text-2xl  ${
                router.asPath === "/streaming-remote"
                  ? "text-gray-800 font-bold dark:text-gray-400"
                  : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
            >
              Streaming Remote
              {router.asPath === "/streaming-remote" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </a>
          </Link>
        </div>

      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/one-knob">
          <a className="text-2xl font-normal text-gray-600 dark:text-gray-300">
            One Knob
          </a>
        </Link>
        <Link href="/vacuum-stand">
          <a className="text-2xl font-normal text-gray-600 dark:text-gray-300">
            Vacuum Stand
          </a>
        </Link>
        <Link href="/streaming-remote">
          <a className="text-2xl font-normal text-gray-600 dark:text-gray-300">
            Streaming Remote 
          </a>
        </Link>
      </div>
    </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">

        </div>
      </div>
    </section>
  );
}
