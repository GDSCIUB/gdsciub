import classes from "./about.module.css";
import { BiSolidGroup } from "react-icons/bi";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.top}>
        <div className={classes.concept}>
          <BsRocketTakeoffFill size={50} color="rgb(85, 125, 191)" />
          <h2>Concept of GDSC</h2>
          <p>
            The GDSC program is a grassroot channel through which Google
            provides mobile and web development skills for students towards
            employability.
          </p>
        </div>
        <div className={classes.why}>
          <FaLightbulb size={50} color="rgb(225, 56, 43)" />
          <h2>Why GDSC?</h2>
          <p>
            For students to learn development skills, solve problems through
            technology, lead others and inspire them to be world-class
            developers and changemakers.
          </p>
        </div>
        <div className={classes.audience}>
          <HiUserGroup size={50} color="rgb(24, 158, 89)" />
          <h2>Target audience</h2>
          <p>
            GDSC activities are targeted at University students and any others
            including faculty members who want to learn development skills &
            work to solve real-life problems.
          </p>
        </div>
      </div>
      <div className={classes.btm}>
        <a
          className={classes.membership}
          target="_blank"
          href="https://gdsc.community.dev/the-islamia-university-of-bahawalpur/"
        >
          <BiSolidGroup size={20} />
          Join Community Platform
        </a>
      </div>
    </div>
  );
}
