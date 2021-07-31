import React from 'react';
import community from '../assets/community.png';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import './Overview.css';
import FeatureCard from './FeatureCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons'

const Overview = () => {
    return (
        <div className="gdsc__overview">
            <div className="overview">
                <div className="overview__data">
                    <h1>Google Developer Student Club</h1>
                    <h2>The Islamia University of Bahawalpur</h2>
                    <p>
                        Google Developer Student Clubs is a Google Developers program
                        for university students to learn mobile and web development skills,
                        design thinking skills and leadership skills.
                    </p>
                    <button className="member member__overview"><a href="/"><GroupRoundedIcon />Become a Member</a></button>
                </div>
                <div className="overview__cover">
                    <img src={community} alt="" />
                </div>
            </div>
            <div className="cards">
                <FeatureCard
                    Avatar={<FontAwesomeIcon icon={faRocket} />}
                    title="Concept of GDSC"
                    desc="The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability."
                />
                <FeatureCard
                    Avatar={<FontAwesomeIcon icon={faLightbulb} />}
                    title="Why GDSC?"
                    desc="For students to learn development skills, solve problems through technology and inspire them to be world-class developers and changemakers."
                />
                <FeatureCard
                    Avatar={<FontAwesomeIcon icon={faUsers} />}
                    title="Target audience"
                    desc="GDSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems."
                />
            </div>
            <div className="opertunities">
                <h2>Opportunities GDSCs provide students with</h2>
                <div className="opportunity__cards">
                    <ul className="card">
                        <li>Grow their knowledge on developer technologies and more through peer to peer workshops and events.</li>
                        <br />
                        <li>Showcase their prototypes and solutions to their local community and industry leaders.</li>
                    </ul>
                    <ul className="card">
                        <li>Gain relevant industry experience by solving problems for local organizations with technology based solutions.</li>
                        <br />
                        <li>Getting inspiration to become world-class developers and changemakers from sharing others' success stories.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Overview;
