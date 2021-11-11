import React from 'react';
import DashboardNav from './DashboardNav';

import "./AdminPanel.css";
import Menu from './Menu';


const AdminPanel = () => {

    return (
        <div className="adminPanel">
            <DashboardNav />
            <Menu />
        </div>
    )
}

export default AdminPanel;
