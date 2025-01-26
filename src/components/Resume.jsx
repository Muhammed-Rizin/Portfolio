import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const Resume = () => {
  return (
    <div className="w-full mx-auto relative">
      <div className="icons-section px-10 px-5">
        <a className="resume-button pointer" href="/assets/rizin_resume.pdf" download>
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
