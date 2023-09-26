import classes from "./banner.module.css";
import { BiSolidGroup } from "react-icons/bi";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.gdsc}>
        <h1>Google Developer Student Club</h1>
        <h2>The Islamia University of Bahawalpur</h2>
        <p>
          Google Developer Student Clubs is a Google Developers program for
          university students to learn mobile and web development skills using
          Google Technologies and explore networking and leadership
          opportunities.
        </p>
        <a
          className={classes.membership}
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAlDEiYNRF6wQUMbt3jZpwncJqg3bpBegcm_RSkzlERItHhQ"
        >
          <BiSolidGroup size={20} />
          Become a Member
        </a>
      </div>
      <div className={classes.community}></div>
    </div>
  );
}
