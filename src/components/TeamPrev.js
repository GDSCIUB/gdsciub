import React from 'react'
import './TeamPrev.css';
import TeamCard from './TeamCard';
import TeamMembers from './TeamMembers';
const TeamPrev = () => {
  return (
    <div className="team" id="Team">
    <div className="team__title">
        <h1>Meet Our Team 2021</h1>
        <p>Passionate students are driving the success of the program.</p>
    </div>
    <div className="teamCards">
        <TeamCard
            name="Sharjeel Yunus"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fsharjeel-sq.jpg?alt=media&token=a07aee2d-3239-4daf-8f17-f30ae7d14f45"
            role="Community Lead"
            web="https://www.sharjeelyunus.me/"
            github="https://github.com/sharjeelyunus"
            linkedIn="https://www.linkedin.com/in/sharjeel-yunus/"
        />
        <TeamCard
            name="Aadil Saeed"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Faadil.jpg?alt=media&token=57e0cfbc-cc21-4f01-b284-c5c6b408852d"
            role="Mamagement Lead"
            web="https://www.facebook.com/profile.php?id=100005023003882"
            github="https://github.com/aadilsaeed"
            linkedIn="https://www.linkedin.com/in/aadil-saeed-9b255021b"
        />
        <TeamCard
            name="Arbaz Sukhera"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Farbaz2.jpeg?alt=media&token=4413702a-f065-4fbb-acb1-a2c01b3f7512"
            role="Marketing Lead"
            web="https://www.instagram.com/arbaz_sukhera/"
            github="https://github.com/ArbazSukhera"
            linkedIn="https://www.linkedin.com/in/arbaz-sukhera-a9b451220/"
        />
    </div>
    <div className="teamCards cardsrow2">
        <TeamCard
            name="Eisha Tir Razia"
            clas="Information Technology"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2FEisha%20Ejaz1.jpg?alt=media&token=f35ff615-5b59-4fcf-9f7b-6965f3bbd794"
            role="Publication Lead"
            web="https://instagram.com/eishaejaz"
            github="https://github.com/eishaejaz"
            linkedIn="https://www.linkedin.com/in/eisha-ejaz-2a104821b"
        />
        <TeamCard
            name="Aslam Sarfraz"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2FAslam%20Sarfraz.jpg?alt=media&token=735be25a-2763-45b1-9b91-dfcc42bf56f3"
            role="Web Dev Lead"
            web="https://facebook.com/aslambaba91r"
            github="https://github.com/aslambaba"
            linkedIn="https://www.linkedin.com/in/aslamsarfraz"
        />
        <TeamCard
            name="Emaan Yaqoob"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2FEman%20Yaqoob1.jpg?alt=media&token=5071923d-59d7-494f-8cd1-1d175af74834"
            role="App Dev Lead"
            web="https://www.instagram.com/eman.yaqub/"
            github="https://github.com/eeimaan"
            linkedIn="https://www.linkedin.com/in/emaanyaqub/"
        />
        <TeamCard
            name="Abdul Wahab Siddiqui"
            clas="Computer Science"
            img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fdp%20-%20Siddiqui's%20Life.jpg?alt=media&token=0c091828-e645-4754-974e-f75c9abbf47d"
            role="Graphics Lead"
            web="https://www.instagram.com/abdulwahabsdq/"
            github="https://github.com/wahabsiddiqui"
            linkedIn="https://www.linkedin.com/in/abdulwahabsiddiqui9211"
        />
    </div>
    <div className="otherTeamMemebers">
        <h2>Other Team Members</h2>
        <div className="team__members">
            <div className="otherMembers">
                <TeamMembers
                    name="Ali Rehman"
                    clas="Computer Science"
                    role="Publication"
                    github="https://github.com/Thedanreturns"
                    linkedIn="https://www.linkedin.com/in/ali-rehman-23004821b/"
                />
                <TeamMembers
                    name="Hamza Bashir"
                    clas="Computer Science"
                    role="Web Dev"
                    github="https://github.com/DEADHEAD652"
                    linkedIn="https://www.linkedin.com/in/hamza-malik-74a06621b"
                />
            </div>
            <div className="otherMembers">
                <TeamMembers
                    name="Saman Mehmood"
                    role="Web Dev"
                    github="https://github.com/SamanMahmood"
                    linkedIn="https://www.linkedin.com/in/saman-mahmood-a8187120a/"
                />
                <TeamMembers
                    name="Muhammad Soban"
                    role="Web Dev"
                    github="https://github.com/sobankhan12"
                    linkedIn="https://www.linkedin.com/in/muhammad-soban-601570183/"
                />
            </div>
        </div>
        <div className="otherMembers teamrow2">
            <TeamMembers
                name="Rashid Ghafoor"
                clas="Computer Science"
                role="Web Dev"
                github="https://github.com/RashidGhafoor"
                linkedIn="https://www.linkedin.com/in/rashid-ghafoor-0abb40177/"
            />
            <TeamMembers
                name="Abdul Rehman"
                role="Web Dev"
                github="https://github.com/dani-nawaz"
                linkedIn="https://www.linkedin.com/in/abdul-rehman-nawaz-87264421b/"
            />
        </div>
    </div>

</div>
  )
}

export default TeamPrev
