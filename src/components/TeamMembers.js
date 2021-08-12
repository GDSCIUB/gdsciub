import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const TeamMembers = ({ name, role, github, linkedIn }) => {
    return (
        <div className="teamMemebers">
            <div className="teamMember__details">
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
            <div className="teamMember__social">
                <a href={github}><GitHubIcon /></a>
                <a href={linkedIn}><LinkedInIcon /></a>
            </div>
        </div>
    )
}

export default TeamMembers;
