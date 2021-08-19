import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import TeamMembers from './TeamMembers';

const Team = () => {
    return (
        <div className="team" id="Team">
            <div className="team__title">
                <h1>Meet Our Team</h1>
                <p>Passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name="Sharjeel Yunus"
                    clas="Computer Science"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fsharjeel.jpg?alt=media&token=17dec942-9b6c-4400-9698-b5d7f299ef63"
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
                />
            </div>
            <div className="teamCards cardsrow2">
                <TeamCard
                    name="Emaan Yaqoob"
                    clas="Computer Science"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2FEman%20Yaqoob1.jpg?alt=media&token=5071923d-59d7-494f-8cd1-1d175af74834"
                    role="App Dev Lead"
                    github="https://github.com/eeimaan"
                    linkedIn="https://www.linkedin.com/in/emaanyaqub/"
                />
                <TeamCard
                    name="Eisha Tir Razia"
                    clas="Information Technology"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2FEisha%20Ejaz1.jpg?alt=media&token=f35ff615-5b59-4fcf-9f7b-6965f3bbd794"
                    role="Publication Lead"
                    web="https://instagram.com/eishaejaz"
                    github="https://github.com/eishaejaz"
                    linkedIn="https://www.linkedin.com/in/eisha-ejaz-2a104821b"
                />
            </div>
            <div className="otherTeamMemebers">
                <h2>Other Team Members</h2>
                <div className="otherMembers">
                    <TeamMembers
                        name="Hamza Bashir"
                        clas="Computer Science"
                        role="Web Dev"
                        github="https://github.com/DEADHEAD652"
                        linkedIn="https://www.linkedin.com/in/hamza-malik-74a06621b"
                    />
                    <TeamMembers
                        name="Saman Mehmood"
                        role="Web Dev"
                        linkedIn="https://www.linkedin.com/in/saman-mahmood-a8187120a/"
                    />
                </div>
            </div>

        </div>
    )
}

export default Team;
