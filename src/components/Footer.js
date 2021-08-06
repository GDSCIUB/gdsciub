import React from 'react';
import gdsciub from '../assets/gdsciub.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__gdsc">
                <img src={gdsciub} alt="" />
                <div className="footer__social">
                    <a href="/"><InstagramIcon /></a>
                    <a href="/"><GitHubIcon /></a>
                    <a href="/"><LinkedInIcon /></a>
                    <a href="/"><FacebookIcon /></a>
                    <a href="/"><LanguageIcon /></a>
                    <a href="/"><EmailIcon /></a>
                    <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
