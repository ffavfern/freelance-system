import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaJsSquare ,
    FaPython,
    FaNodeJs,
    FaReact,
    FaBootstrap,
    FaJava,
    FaPhp,
    FaJs,
  } from "react-icons/fa";
  import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
  import { DiMysql, DiJqueryLogo } from "react-icons/di";
  import CardIcon from "../CardIcon"
  

function Tools() {

  const skillsData = [ // Added '=' to declare the array
    {
      icon: <FaHtml5 />,
      title: "HTML", // Fixed case for better readability
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
    },
    {
      icon: <FaPython />,
      title: "Python",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
    },
    {
      icon: <FaJava />,
      title: "Java",
    },
    {
      icon: <FaPhp />,
      title: "PHP",
    },
    {
      icon: <FaJs />,
      title: "JavaScript", // Removed duplicate entry
    },
    {
      icon: <RiNextjsFill />,
      title: "Next.js",
    },
    {
      icon: <RiTailwindCssFill />,
      title: "TailwindCSS",
    },
    {
      icon: <DiMysql />,
      title: "MySQL",
    },
    {
      icon: <DiJqueryLogo />,
      title: "jQuery",
    },
  ];
  return (
    <>
      {/*toolkit*/}
      <div className="flex flex-row mt-5 pt-5 items-center mb-16 ">
        {/*title toolkit*/}
        <div className="w-1/6 ">
          <h2 className="text-xl uppercase text-start font-bold	">ToolKit</h2>
        </div>
        <div className=" line-tools" />
      </div>
      {/*icon tools */}
      <div className="grid grid-cols-6 gap-y-5 justify-items-center">
        {skillsData.map((skill, index) => (
          <CardIcon
          key={index}
          icon={skill.icon}
          title={skill.title}
          />
         ))}
      </div>
    </>
  );
}

export default Tools;
