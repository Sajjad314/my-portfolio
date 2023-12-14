import { Element } from "react-scroll";
import kaz from "../assets/kaz.png";
import acm from "../assets/acm.jpeg";
import bengalai from "../assets/benglaai.jpeg";

export const Experience = () => {
  const experienceList = [
    {
      id: 1,
      image: bengalai,
      name: "BengaliAI",
      duration: "10 Octover 2023 - Present",
      position: "Research Assistant",
      description:
        "Bengali.AI is a non-profit initiative working to solve the absence of open-sourced datasets for Bengali Computer Vision/Natural Language Processing research.",
    },
    {
      id: 2,
      image: kaz,
      name: "Kaz Software Limited",
      duration: "5 February 2023 - 30 July 2023",
      position: "Software Engineer Intern",
      description:
        "Kaz is a custom software company in Bangladesh.For the clients, it finds technical solutions. Usually, this means it creates software products for the clients, but occasionally it could be doing something entirely different, like gathering company data or configuring their firewall. It has a team of content experts, developers, and designers.",
    },
    {
      id: 3,
      image: acm,
      name: "SUST ACM Student Chapter",
      duration: "3 November 2021 - 31 May 2022",
      position: "Operational Executive",
      description:
        "SUST ACM Student Chapter serve as a node of activity for ACM members and the computing community at large, offering seminars, lectures, and the opportunity to meet peers and experts in many fields of interest. It started it's operation from 13th December of 2019 in association with two departments of Shahjalal University of Science and Technology, Sylhet (Department of Computer Science and Engineering (CSE) and Department of Software Engineering (SWE) under the Institute of Information and Communication Technology (IICT)).",
    },
  ];

  return (
    <Element name="work">
      <div className=" bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className=" pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Experience
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
            {experienceList.map(
              ({ id, image, name, description, duration, position }) => {
                return (
                  <div
                    key={id}
                    className="shadow-md shadow-gray-600 rounded-lg"
                  >
                    <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col p-4">
                      <img
                        src={image}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="text-gray-400">{position}</p>
                        <p className="text-gray-400">{duration}</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};
