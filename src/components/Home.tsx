import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Element, Link } from "react-scroll";

const Home = () => {
  return (
    <Element name="home">
      <div className=" w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <p className=" mt-40 text-gray-400 py-4 text-3xl">
              {" "}
              Hey there. This is
            </p>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Sajjad Hossain
            </h2>
            <p className="text-gray-500 py-4">
              An aspirinig Software Engineer and Fullstack developer. Currently,
              I love to work on web application using technologies like React,
              NodeJS, Next JS, Spring Boot and MySQL.
            </p>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mt-10 mx-auto w-2/3 md:w-1/2"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
