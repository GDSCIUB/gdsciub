import React from 'react';
import logo from '../assets/dsc-logo.png';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
                <h1>Developer Student Club - IUB Chapter</h1>
            </div>
            <div className="header__list">
                <ul>
                    <li>Overview</li>
                    <li>Technologies</li>
                    <li>Team</li>
                    <li>Faqs</li>
                    <li className="member">
                        <a href="/"><GroupRoundedIcon />Become a Member</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
