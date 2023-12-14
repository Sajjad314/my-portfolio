import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md">
          <a
            href="https://www.linkedin.com/in/sajjad314/"
            className=" flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://github.com/Sajjad314"
            className=" flex justify-between items-center w-full text-white"
          >
            <>
              GitHub <FaGithub size={30} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="mailto:hossainsazzad31415@gmail.com"
            className=" flex justify-between items-center w-full text-white"
          >
            <>
              Mail <HiOutlineMail size={30} />
            </>
          </a>
        </li>
        <li className=" flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md">
          <a
            href="/resume.pdf"
            className=" flex justify-between items-center w-full text-white"
            download={true}
            target="_blank"
            rel="noreferrer"
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
