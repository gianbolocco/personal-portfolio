import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FloatingSocials = () => {
  return (
    <div className=" fixed top-5 right-5 flex flex-col gap-3 bg-gray-700 p-3 shadow-lg rounded-2xl">
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-white hover:text-gray-300 transition-all" />
      </a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-white hover:text-gray-300 transition-all" />
      </a>
    </div>
  );
};

export default FloatingSocials;
