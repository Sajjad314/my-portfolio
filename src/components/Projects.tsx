import buzztalk from "../assets/portfolio/buzztalk.png";
import easyBiler from "../assets/portfolio/easybiller.png";
import dojoBlog from "../assets/portfolio/crud.png";
import conversate from "../assets/portfolio/conversate.png";
import game from "../assets/portfolio/game.jpg";
import grpc from "../assets/portfolio/grpc.png";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: buzztalk,
      name: "BuzzTalk",
      description:
        "A social media platform like where users can interact with each other by post and conversations.",
      gitLink: "https://github.com/Sajjad314/DiveIN",
    },
    {
      id: 2,
      src: easyBiler,
      name: "EasyBiller",
      description:
        "An android project for automating the billing process for a restaurent.",
      gitLink: "https://github.com/Sajjad314/Easy-Biller",
    },
    {
      id: 3,
      src: dojoBlog,
      name: "Dojo Blog",
      description: "A simple CRUD blog application using MERN.",
      gitLink: "https://github.com/Sajjad314/CRUD_News_Blog",
    },
    {
      id: 4,
      src: conversate,
      name: "Conversate",
      description:
        "An android chat application like whatsapp where users can talk with each other in real time.",
      gitLink: "https://github.com/Sajjad314/project-250",
    },
    {
      id: 5,
      src: game,
      name: "Adventure of PingPong",
      description: "An endless runner game in C# and unity.",
      gitLink: "https://github.com/Sajjad314/AdventueOfPingpong",
    },
    {
      id: 6,
      src: grpc,
      name: "Multiclient server",
      description:
        "A multiclient-server in gRPC where multiple client can register and login to a server",
      gitLink: "https://github.com/Sajjad314/MultiClient",
    },
  ];
  return (
    <Element name="projects">
      <div className=" bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className=" pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Checkout some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, name, description, gitLink }) => {
              return (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                  <div className=" flex items-center justify-center mb-2">
                    <a href={gitLink}>
                      <button className=" w-1/2 px-6 py-3 duration-200 hover:scale-105">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
