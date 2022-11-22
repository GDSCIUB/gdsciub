import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';
import './Workshops.css';
// import TeamMembers from './TeamMembers';
import adil from '../assets/images/adil.png';
import tahir from '../assets/images/tahir.png';
import ayshaco from '../assets/images/ayshaco.png';
import manahil from '../assets/images/manahil.jpg';
import aqsa from '../assets/images/aqsa.png';
import ahtesham from '../assets/images/ahtesham.jpg';
import dowd from '../assets/images/dowd.jpg';
import murtaza from '../assets/images/murtaza.jpg';
import ayesha from '../assets/images/ayesha.jpg';
import waleed from '../assets/images/waleed.jpg';
import huzafa from '../assets/images/huzafa.jpg';
import hassan from '../assets/images/hassan.jpg';
import hamna from '../assets/images/hamna.jpg';
import adurrahman from '../assets/images/adurrahman.jpg';
import khadija from '../assets/images/khadija.jpg';
import haroon from '../assets/images/haroon.jpg';
import azba from '../assets/images/azba.jpg';

const Team = () => {
    return (

        <div className="team" id="Team">
            <div className="team__title">

                <h1>Meet Our Team</h1>
                <p>Passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name=" Aadil Hamza"
                    clas="Artificial Intelligence"
                    img={adil}
                    role="GDSC-Lead Chapter 2020-2023"
                    web="http://instagram.com/aadilhamza.digital"
                    linkedIn="https://www.linkedin.com/in/aadilhamzagdsc/"
                />
                <TeamCard
                    name="Ayshaa Javaid"
                    clas="Artificial Intelligence"
                    img={ayshaco}
                    role="Co-Lead"
                />

                <TeamCard
                    name="Tahir Habib"
                    clas="Artificial Intelligence"
                    img={tahir}
                    role="Management Lead"
                    web="https://www.instagram.com/tahirhabibsumra/"
                    github="https://github.com/tahir153"
                    linkedIn="https://www.linkedin.com/in/tahir-habib-0122b6201/"
                />
                <TeamCard
                    name="Manahil Ahmad"
                    clas="Data Science"
                    img={manahil}
                    role="Women in Tech Lead"
                    web="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHpcufIA5gXEwAAAYRRturImd_eQ_fWjvup_gPCFovzKccubXwhO_V5wMG2UvpwkFv4ogt1T3aXlJPDpHXLNeCQpKsZdDQuEt3s1ElpEL_q8xIXZPnMCEz51UuExMjUeekOJKo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanahil-ahmad-83891524b"
                    linkedIn="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHpcufIA5gXEwAAAYRRturImd_eQ_fWjvup_gPCFovzKccubXwhO_V5wMG2UvpwkFv4ogt1T3aXlJPDpHXLNeCQpKsZdDQuEt3s1ElpEL_q8xIXZPnMCEz51UuExMjUeekOJKo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanahil-ahmad-83891524b"
                />
                <TeamCard
                    name="Aqsa Rouf"
                    clas="Information Technology"
                    img={aqsa}
                    role="Team Social Media"
                    web="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fpublic-profile%2Fsettings&trk=login_reg_redirect"
                    linkedIn="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fpublic-profile%2Fsettings&trk=login_reg_redirect"
                />
                <TeamCard
                    name="Muhammad Ahtesham Arshad"
                    clas="Software Engineering"
                    img={ahtesham}
                    role="Web .Dev Lead"
                    web="https://portfolioahtesham.web.app/"
                    github="https://github.com/ahteshamweb"
                    linkedIn="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFVJrLH7gobtgAAAYRRxGvQo8YUsp93RMmz28t5WXOdNVeKC5RISfaHL_35LqLfymHhRNo2KEMaO_jkBlusdzUzOfz78NPl4MfF_CHcyKQTtwLgBhXe8nP64MBdFLiHRRdhsmQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fahtesham-dev-480046250"
                />
                <TeamCard
                    name="Dawood Faisal"
                    clas="Computer Science"
                    img={dowd}
                    role="Graphics Lead"
                    web="http://Instagram.com/hey_dawood"
                    github="https://github.com/heydawood"
                    linkedIn="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHgksCQTAaRnQAAAYRRy3Cw3nYpCzTgsIcnQZhfHVKb978mGW7byhJqQ8b-AVCv05gQy_X2KBDartD8XOmCvhXBey-cd0ukMAW7xKrbuoM5jIMhwvr61dOlP7YlHR_yRf0VSx8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fheydawood"
                />
                <TeamCard
                    name="murtaza Aslam"
                    clas="Computer Science"
                    img={murtaza}
                    role="App .Dev Lead"
                    github="https://github.com/murtaza619"
                />
                <TeamCard
                    name="Ayesha Javed"
                    clas="Management Sciences"
                    img={ayesha}
                    role="Team Management"
                    web="https://www.linkedin.com/in/ayesha-javed-6619041bb"
                    linkedIn="https://www.linkedin.com/in/ayesha-javed-6619041bb"
                />

                <TeamCard
                    name="Muhammad Waleed Hassan"
                    clas="Data Science"
                    img={waleed}
                    role="Data Science & ML Lead"
                    web="https://www.credly.com/users/waleed-hassan.b2bcda95"
                    github="https://github.com/waleedhassan304"
                    linkedIn="https://www.linkedin.com/in/muhammad-waleed-hassan-5329741a3"
                />

                <TeamCard
                    name="Huzaifa Nawaz"
                    clas="Information Technology"
                    img={huzafa}
                    role="Team Social Media"
                    web="https://www.instagram.com/huzaifa1363/"
                    github="https://github.com/huzaifanawaz"
                    linkedIn="https://www.linkedin.com/in/huzaifa-nawaz-542048254"
                />
                <TeamCard
                    name="Hassan Farooq"
                    clas="Information Systems"
                    img={hassan}
                    role="Team Management"
                    web="https://www.instagram.com/ig._hassan/"
                    github=""
                    linkedIn="https://www.linkedin.com/in/hassan-farooq-9a6688250"
                />

                <TeamCard
                    name="Hamna Qaseem"
                    clas="Data Science"
                    img={hamna}
                    role="Associate Women in Tech"
                    web="https://www.Instagram.com/hamna_pythonista"
                    github="https://github.com/Hamna12"
                    linkedIn="https://www.linkedin.com/in/hamna-qaseem-3456bb1b8/"
                />

                <TeamCard
                    name="Abdur Rehman Bin Shafqat"
                    clas="Artificial Intelligence"
                    img={adurrahman}
                    role="Publication Lead"
                    web=""
                    github=""
                    linkedIn=""
                />

                <TeamCard
                    name="Khadija Hashmi"
                    clas="Computer Science"
                    img={khadija}
                    role="Web .Dev Team"
                    web=""
                    github="https://github.com/khadijahashmi2?tab=repositories"
                    linkedIn=""
                />
                <TeamCard
                    name="Muhammad Haroon Arshad"
                    clas="Computer Science"
                    img={haroon}
                    role="Management Team"
                    web="https://www.instagram.com/haroon_malik786"
                    github="https://github.com/Haroon-coding"
                    linkedIn="www.linkedin.com/in/786hacking"
                />

                <TeamCard
                    name="Azba Ramzan"
                    clas="Management Science"
                    img={azba}
                    role="Marketing Lead"
                />
            </div>
            <div className="buttonteam">

                <a href="/TeamPrev" className="teambtntextcolor">
                    <button className="custombtn">
                        GDSC IUB Chapter Team 2020-2021
                    </button>
                </a>

            </div>

        </div>

    )
}

export default Team;
