import classes from "./tech.module.css";
import Image from "next/image";

export default function Tech() {
  return (
    <div className={classes.tech}>
      <h1>Technologies We're Excited About</h1>

      <div className={classes.niches}>
        <Image src={"/webdev.png"} height={300} width={300} />
        <div>
          <h2>Web Development</h2>
          <p>
            Learn the core foundations of web for both users and developers,
            stay up to date with emerging technologies, stacks and trends. Get
            access to guided tutorials and hands-on coding experience whether
            you are a beginner or a seasoned web developer. We cover everything
            from fundamentals to nitty gritty details.
          </p>
        </div>
      </div>

      <div className={`${classes.niches} ${classes.rev}`}>
        <div>
          <h2>Android Development</h2>
          <p>
            Every year Google developers release exciting new updates to the
            world's most popular operating system. We always have sessions to
            keep you updated and help you master the way you develop your
            applications both as a hobbyist and a professional android
            developer.
          </p>
        </div>
        <Image src={"/android.png"} height={300} width={300} />
      </div>

      <div className={classes.niches}>
        <Image src={"/cloud.png"} height={300} width={300} />
        <div>
          <h2>Cloud Computing</h2>
          <p>
            For passionate developers who want to stay relevant in a cloud first
            world where businesses demand for agility and innovation. We help
            you wrap your head around cloud-native technologies and the way
            distributed computing is shaping the modern world.
          </p>
        </div>
      </div>

      <div className={`${classes.niches} ${classes.rev}`}>
        <div>
          <h2>Machine Intelligence</h2>
          <p>
            Learn how to leverage Google technologies to gain insights from data
            and help businesses grow. The rapid advancements in AI makes Machine
            Intelligence one of the most demanding fields in industry. Our aim
            is to equip students with relevant skills to get started with
            Machine Learning and automate day to day tasks.
          </p>
        </div>
        <Image src={"/machine.png"} height={300} width={300} />
      </div>
    </div>
  );
}
