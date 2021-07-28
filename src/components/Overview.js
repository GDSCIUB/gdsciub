import React from 'react';
import community from '../assets/community.png';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import './Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <div className="overview__data">
                <h1>Google Developer Student Club</h1>
                <h2>The Islamia University of Bahawalpur</h2>
                <p>
                    Google Developer Student Clubs is a Google Developers program
                    for university students to learn mobile and web development skills,
                    design thinking skills and leadership skills.
                </p>
                <button className="member"><a href="/"><GroupRoundedIcon />Become a Member</a></button>
            </div>
            <div className="overview__cover">
                <img src={community} alt="" />
            </div>
        </div>
    )
}

export default Overview;
