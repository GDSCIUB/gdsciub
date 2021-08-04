import { Avatar } from '@material-ui/core';
import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const TeamCard = ({ name, img, role, clas, web, github, linkedIn }) => {
    return (
        <div className="teamCard">
            <Avatar src={img} />
            <div className="team__details">
                <h1>{name}</h1>
                <h2>{role}</h2>
                <h3>{clas}</h3>
            </div>
            <div className="team__social">
                <a href={web}><LanguageIcon /></a>
                <a href={github}><GitHubIcon /></a>
                <a href={linkedIn}><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default TeamCard;
