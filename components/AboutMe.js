import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-25 sticky top-0 ">
        <h1 className=" text-5xl md:text-9xl text-[#006666] dark:text-[#99ffff] font-bold py-10 text-center md:text-left ">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="text-xl text-[#006666] dark:text-[#99ffff] px-10 py-5 inline-flex flex-col leading-[3em]">
            <ul className="list-square">
              <li>E-mail: <a href="mailto:morgan@lupton.io" id="selection">{userData.email}</a></li>
              <li><a href={userData.resumeUrl} id="selection">Link to Resume</a></li>
              <li><a href={userData.resumeUrl} id="selection">My LinkedIn</a></li>
            </ul>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
