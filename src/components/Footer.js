import React from 'react';
import gdsciub from '../assets/gdsciub.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__gdsc">
                <img src={gdsciub} alt="" />
                <div className="footer__social">
                    <a href="https://instagram.com/gdsciub" target='_blank' rel='noreferrer'><InstagramIcon /></a>
                    <a href="https://twitter.com/gdsciub" target='_blank' rel='noreferrer'><TwitterIcon /></a>
                    <a href="https://github.com/GDSCIUB" target='_blank' rel='noreferrer'><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/company/google-developer-student-club-iub-chapter/" target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                    <a href="https://www.facebook.com/gdsciub/" target='_blank' rel='noreferrer'><FacebookIcon /></a>
                    <a href="https://gdsciub.web.app/" target='_blank' rel='noreferrer'><LanguageIcon /></a>
                    <a href="mailto:iubgdsc@gmail.com" target='_blank' rel='noreferrer'><EmailIcon /></a>
                    <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
