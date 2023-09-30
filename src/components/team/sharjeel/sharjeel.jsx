import classes from "../aadil/aadil.module.css";
import Image from "next/image";

export default function Sharjeel() {
  return (
    <div className={classes.team} id="Team">
      <h1>Core Team for Term 2021-22</h1>
      <div className={classes.cards}>
        <div>
          <Image
            src={"/team/sharjeel/sharjeel.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Sharjeel Yunus</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>GDSC Lead</p>
        </div>

        <div>
          <Image
            src={"/team/sharjeel/aadil.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Aadil Saeed</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Management Lead</p>
        </div>

        <div>
          <Image
            src={"/team/sharjeel/arbaz.jpeg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Arbaz Sukhera</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Marketing Lead</p>
        </div>

        <div>
          <Image
            src={"/team/sharjeel/Eisha.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Eisha Tir Razia</p>
          <p className={classes.dept}>Information Technology</p>
          <p className={classes.role}>Publication Lead</p>
        </div>

        <div>
          <Image
            src={"/team/sharjeel/Aslam.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Aslam Sarfraz</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Web Dev Lead</p>
        </div>
        <div>
          <Image
            src={"/team/sharjeel/emaan.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Emaan Yaqoob</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>App Dev Lead</p>
        </div>
        <div>
          <Image
            src={"/team/sharjeel/siddiqui.jpg"}
            width={220}
            height={220}
            className={classes.img}
          />
          <p className={classes.name}>Abdul Wahab Siddiqui</p>
          <p className={classes.dept}>Computer Science</p>
          <p className={classes.role}>Graphics Lead</p>
        </div>
      </div>
    </div>
  );
}
