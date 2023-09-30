import classes from "./team.module.css";
import Image from "next/image";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import Link from "next/link";

export default function Team() {
  return (
    <div className={classes.team} id="Team">
      <h1>Meet Our Team</h1>
      <div className={classes.cards}>
        <div>
          <Image
            src={"/team/rehman.webp"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Abdur Rehman Shafqat</p>
          <p className={classes.dept}>Artificial Intelligence</p>
          <p className={classes.role}>GDSC Lead</p>

          <div>
            <Link
              className="link"
              href={"http://linkedin.com/in/abdurehmanshafqat/"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Huzaifa Nawaz</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Co-Lead / Quantum Lead</p>

          <div>
            <Link
              className="link"
              href={"http://www.linkedin.com/in/huzaifanawaz"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
            </Link>
            <Link
              className="link"
              href={"https://github.com/huzaifanawaz"}
              target="_blank"
            >
              <BiLogoGithub size={20} />
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
          <p className={classes.name}>Dawood Faisal</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Director of Operations</p>

          <div></div>
        </div>

        <div>
          <Image
            src={"/team/jhandir.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Bilal Ilyas Jhandir</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Team Operations</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/bilal-ilyas-75480a222"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Maham Fatima</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Team Operations</p>

          <div>
            <Link
              className="link"
              href={"https://github.com/maham5"}
              target="_blank"
            >
              <BiLogoGithub size={20} />
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
          <p className={classes.name}>Fayez Ahmad</p>
          <p className={classes.dept}>Computer Science </p>
          <p className={classes.role}>Team Operations</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/fayez-ahmad-64b72a272"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Nabeera Fatima</p>
          <p className={classes.dept}>Software Engineering</p>
          <p className={classes.role}>Women in Teach Lead</p>

          <div></div>
        </div>

        <div>
          <Image
            src={"/team/Maryam.jpeg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Maryam Ahmad</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Women in Tech Team</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/maryam-ahmad-1342571b5"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Jannat Javed</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Women in Tech Team</p>

          <div></div>
        </div>

        <div>
          <Image
            src={"/team/abuzar.JPG"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Muhammad Abuzar</p>
          <p className={classes.dept}>Software Engineering</p>
          <p className={classes.role}>Web Development Lead</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/abuzariii"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
            </Link>
            <Link
              className="link"
              href={"https://github.com/Abuzariii"}
              target="_blank"
            >
              <BiLogoGithub size={20} />
            </Link>
            <Link
              className="link"
              href={"https://www.abuzar.social/"}
              target="_blank"
            >
              <BsLink45Deg size={20} />
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/team/Anas.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Ghulam Anas Shahbaz</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Data Science Lead</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/anas-bajwa"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Hamid Mahmood Abbasi</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>UI/UX Lead</p>

          <div>
            <Link
              className="link"
              href={
                "https://www.linkedin.com/in/hamid-mehmood-abbasi-345ba2167"
              }
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
            </Link>
            <Link
              className="link"
              href={"https://www.behance.net/hamidabbasi"}
              target="_blank"
            >
              <BsLink45Deg size={20} />
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
          <p className={classes.name}>Umar Cheema</p>
          <p className={classes.dept}>
            Information and Communication Engineering
          </p>
          <p className={classes.role}>CyberSecurity Lead</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/umarcheema1372"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Tayyab Chaudhary</p>
          <p className={classes.dept}>ENIGMATIX</p>
          <p className={classes.role}>DevOps Lead</p>

          <div></div>
        </div>

        <div>
          <Image
            src={"/team/hamza.jpg"}
            width={170}
            height={170}
            className={classes.img}
          />
          <p className={classes.name}>Muhammad Hamza Zahid</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>App Development Lead</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/hamza-zahid-b6b53b1b3/"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
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
          <p className={classes.name}>Muhammad Ahtasham Mushtaq</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Creative Lead</p>

          <div>
            <Link
              className="link"
              href={"http://linkedin.com/in/muhammad-ahtasham-mushtaq"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
            </Link>
            <Link
              className="link"
              href={"http://behance.net/pubgfans1"}
              target="_blank"
            >
              <BiLogoGithub size={20} />
            </Link>
            <Link
              className="link"
              href={"http://ahtasham.info/"}
              target="_blank"
            >
              <BsLink45Deg size={20} />
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
          <p className={classes.name}>Danish Kareem</p>
          <p className={classes.dept}>Artificial Intelligence</p>
          <p className={classes.role}>Media Lead</p>

          <div>
            <Link
              className="link"
              href={"https://www.linkedin.com/in/danish-kareem-351122238"}
              target="_blank"
            >
              <BiLogoLinkedin size={20} />
            </Link>
            <Link
              className="link"
              href={"https://github.com/DanixKarim"}
              target="_blank"
            >
              <BiLogoGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.prevs}>
        <Link href={"/2022-23"} className="link">
          GDCS IUB Chapter Team 2022-23
        </Link>
        <Link href={"/2021-22"} className="link">
          GDCS IUB Chapter Team 2021-22
        </Link>
      </div>
    </div>
  );
}
