import classes from "./opportunities.module.css";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiInspiration } from "react-icons/gi";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { SiSmartthings } from "react-icons/si";

export default function Opportunities() {
  return (
    <div className={classes.opp}>
      <h1>Opportunities GDSCs provide students with</h1>
      <div className={classes.bullets}>
        <p>
          <SiSmartthings
            className={classes.icons}
            color="rgb(225, 56, 43)"
            size={40}
          />
          Grow their knowledge on developer technologies through peer to peer
          workshops and in-person or online events.
        </p>
        <p>
          <BsFileEarmarkCodeFill
            className={classes.icons}
            color="rgb(47, 91, 231)"
            size={40}
          />
          Gain relevant industry experience by solving problems for local
          organizations with technology.
        </p>
        <p>
          <MdConnectWithoutContact
            className={classes.icons}
            size={50}
            color="rgb(24, 158, 89)"
          />
          Showcase their prototypes and solutions to their local community,
          peers, faculty members and industry leaders.
        </p>
        <p>
          <GiInspiration
            className={classes.icons}
            size={40}
            fill="rgb(251, 187, 6)"
          />
          Get inspiration to become world class developers by listening to
          others' stories and sharing yours.
        </p>
      </div>
    </div>
  );
}
