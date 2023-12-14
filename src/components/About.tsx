import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className=" w-full pt-20 bg-gradient-to-b from-gray-800 to-black text-white">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className=" text-xl mt-10">
            Hello, I'm Sajjad Hossain. I am a Software Engineer undergrad at
            Shahjalal University of Science and Technology. My passion is web
            development and I've been working with web technologies for almost 3
            years now. I have worked at a renowned software company during my
            internship program for 6 months where I have learned the industry
            practices for software development. I am proficient in ReactJS,
            NextJS, NodeJS, Spring, MySQL, MongoDB.
          </p>

          <br />

          <p className="text-xl">
            During my academic years I've participated in many competetive
            programming contest. Also I have earned Gold Badge in problem
            solving at HackerRank. Beside web development and competetive
            programming i have also done some projects is Android development
            and game development.
            <br />
            Currently I'm collaborating with Bengali AI where I am working in
            Bangla OCR system optimization.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
