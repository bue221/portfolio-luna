// import icons
import { ImLinkedin } from "react-icons/im";
import { FiFigma } from "react-icons/fi";
import { useContext } from "react";
import { CursorContext } from "context/cursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4 text-[#28C278]">
        <li>
          <a
            href="https://www.linkedin.com/in/cadelu/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin size={32} />
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/@cadelu"
            target="_blank"
            rel="noreferrer"
          >
            <FiFigma size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
