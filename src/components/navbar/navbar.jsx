import classes from "./navbar.module.css";
import Image from "next/image";
import { BiSolidGroup } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.left}>
        <Image src={"/gdsc-iub.png"} height={40} width={270} />
      </div>
      <div className={classes.right}>
        <a href="/#Overview" className={classes.links}>
          Overview
        </a>
        <a href="/#Workshops" className={classes.links}>
          Workshops
        </a>
        <a href="/#Technologies" className={classes.links}>
          Technologies
        </a>
        <a href="/#Team" className={classes.links}>
          Team
        </a>
        <a href="/#FAQs" className={classes.links}>
          FAQs
        </a>
        <a
          className={classes.membership}
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAlDEiYNRF6wQUMbt3jZpwncJqg3bpBegcm_RSkzlERItHhQ"
        >
          <BiSolidGroup size={20} />
          Become a Member
        </a>
      </div>
    </nav>
  );
}
