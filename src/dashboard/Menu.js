import React from 'react';

const Menu = () => {

    return (
        <div className="sidebar">
            <div className="sidebar_list">
                <a href="/dashboard/Events">
                    <p>Events / Workshops</p>
                </a>
                <a href="/dashboard/CoreTeam">
                    <p>Core Team</p>
                </a>
                <a href="/dashboard/ExtendedTeam">
                    <p>Extended Team</p>
                </a>
            </div>
        </div>
    )
}

export default Menu;
