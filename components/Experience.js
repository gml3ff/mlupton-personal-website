import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-auto dark:bg-gray-800 sticky top-0 ">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experience
          </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                tech={exp.tech}
                highlights={exp.highlights}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, tech, highlights, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-[#366363] font-bold dark:text-gray-400">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title} - <a href={companyLink} className="text-[#00b3b3] hover:text-[#ccffff]">{company}</a></h1>
      <h1 className="font-extrabold text-lg text-gray-500">Role Description</h1>
      <p className="text-gray-600 dark:text-gray-400 my-2 pl-8">{desc}</p>
      <h1 className="font-extrabold text-lg text-gray-500">Highlights</h1>
      <ul className="text-gray-600 dark:text-gray-400 my-2 pl-8">
        {Object.keys(highlights).map((key) => (<li className="list-disc">{highlights[key]}</li>))}
      </ul>
      <h1 className="font-extrabold text-lg text-gray-500">Technologies</h1>
      <ul className="text-gray-600 dark:text-gray-400 my-2 pl-8">
        {Object.keys(tech).map((key) => (<li className="list-disc">{tech[key]}</li>))}
      </ul>
    </div>
  );
};
