import React from 'react'
import logo from '../assets/dsc-logo.png';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
function Wraper() {
  return (
    <div className='cover'>
         <nav className="wraper">
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
                <h1>Developer Student Club - IUB Chapter</h1>
            </div>
            <div className="header__list">
                <ul>
                    <a href="/#Overview"><li>Overview</li></a>
                    <a href="/#Workshops"><li>Workshops</li></a>
                    <a href="/#Technology"><li>Technologies</li></a>
                    <a href="/#Team"><li>Team</li></a>
                    <a href="/#Faqs"><li>Faqs</li></a>
                    <li className="member">
                        <a href="https://forms.gle/CRKcGg4GzriJeFSN9" target='_blank' rel='noreferrer'>
                            <GroupRoundedIcon />
                            Become a Member
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Wraper