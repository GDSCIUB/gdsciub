import classes from "./footer.module.css";
import Image from "next/image";
import {
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Image src={"/footerlogo.png"} width={300} height={50} />
      <div>
        <Link
          className="link"
          href={"https://www.instagram.com/gdsciub/"}
          target="_blank"
        >
          <BiLogoInstagram size={25} />
        </Link>
        <Link
          className="link"
          href={"https://twitter.com/gdsciub"}
          target="_blank"
        >
          <BiLogoTwitter size={25} />
        </Link>

        <Link
          className="link"
          href={"https://www.facebook.com/gdsciub/"}
          target="_blank"
        >
          <BiLogoFacebookSquare size={25} />
        </Link>
        <Link
          className="link"
          href={"https://github.com/GDSCIUB"}
          target="_blank"
        >
          <BiLogoGithub size={25} />
        </Link>
        <Link
          className="link"
          href={
            "https://www.linkedin.com/company/google-developer-student-club-iub-chapter/"
          }
          target="_blank"
        >
          <BiLogoLinkedinSquare size={25} />
        </Link>
        <Link
          className="link"
          href={"mailto:iubgdsc@gmail.com"}
          target="_blank"
        >
          <FiMail size={25} />
        </Link>
      </div>
      <p>Copyright © 2023. All Rights Reserved.</p>
    </div>
  );
}
