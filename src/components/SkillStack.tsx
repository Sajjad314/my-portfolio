import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import java from "../assets/Java-Logo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import reactImage from "../assets/react.png";
import clogo from "../assets/clogo.png";
import cpp from "../assets/cpplogo.png";
import spring from "../assets/spring-boot-logo.png";
import postman from "../assets/postman.png";
import node from "../assets/nextjs.png";
import sql from "../assets/sql.png";
import tslogo from "../assets/tslogo.png";
import { Element } from "react-scroll";

const SkillStack = () => {
  const stack = [
    {
      id: 6,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: clogo,
      title: "C",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: cpp,
      title: "CPP",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-orange-500",
    },
    {
      id: 13,
      src: tslogo,
      title: "TypeScript",
      style: "shadow-orange-500",
    },
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "NEXTJS",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: node,
      title: "NodeJS",
      style: "shadow-orange-500",
    },

    {
      id: 9,
      src: spring,
      title: "Spring Boot",
      style: "shadow-orange-500",
    },

    {
      id: 14,
      src: sql,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-orange-500",
    },
  ];

  return (
    <Element name="skill">
      <div className=" bg-gradient-to-b from-gray-800 to-black w-full pt-20">
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skill Stack
            </p>
            <p className=" py-6">These are the technologies I've worked with</p>
          </div>

          <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {stack.map(({ src, title, style }) => {
              return (
                <div
                  key={title}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className=" w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillStack;
