import classes from "./team.module.css";
import Image from "next/image";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { PiLinkFill } from "react-icons/pi";
import Link from "next/link";

export default function Team() {
  return (
    <div className={classes.team}>
      <h1>Meet Our Team</h1>
      <div className={classes.cards}>
        <div>
          <Image
            src={"/team/rehman.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Abdur Rehman Shafqat</h2>
          <h3>Artificial Intelligence</h3>
          <h4>GDSC Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/huzaifa.JPG"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Huzaifa Nawaz</h2>
          <h3>Information Technology</h3>
          <h4>Co-Lead / Quantum Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/dawood.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Dawood Faisal</h2>
          <h3>Computer Science</h3>
          <h4>Director of Operations</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/jhandir.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Bilal Ilyas Jhandir</h2>
          <h3>Computer Science</h3>
          <h4>Team Operations</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/maham.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Maham Fatima</h2>
          <h3>COmputer Science</h3>
          <h4>Team Operations</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/Fayez.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Fayez Ahmad</h2>
          <h3>Information Technology</h3>
          <h4>Team Operations</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/nabeera.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Nabeera Fatima</h2>
          <h3>Information Technology</h3>
          <h4>Women in Teach Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/Maryam.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Maryam Ahmad</h2>
          <h3>Information Technology</h3>
          <h4>Women in Tech Team</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/jannat.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Jannat Javed</h2>
          <h3>Information Technology</h3>
          <h4>Women in Tech Team</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/huzaifa.JPG"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Muhammad Abuzar</h2>
          <h3>Software Engineering</h3>
          <h4>Web Development Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/anas.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Ghulam Anas Shahbaz</h2>
          <h3>Information Technology</h3>
          <h4>Data Science Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/hamid.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Hamid Mahmood Abbasi</h2>
          <h3>Information Technology</h3>
          <h4>UI/UX Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/umar.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Umar Cheema</h2>
          <h3>Information Technology</h3>
          <h4>CyberSecurity Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/tayyab.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Tayyab Chaudhary</h2>
          <h3>ENIGMATIX</h3>
          <h4>DevOps Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/hamza.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Muhammad Hamza Zahid</h2>
          <h3>Information Technology</h3>
          <h4>App Development Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/ahtasham.JPG"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Muhammad Ahtasham Mushtaq</h2>
          <h3>Information Technology</h3>
          <h4>Creative Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/danish.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <h2>Danish Kareem</h2>
          <h3>Information Technology</h3>
          <h4>Creative Lead</h4>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={30} />
            </Link>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <PiLinkFill size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
