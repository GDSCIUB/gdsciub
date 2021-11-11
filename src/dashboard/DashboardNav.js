import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import LogoutIcon from '@mui/icons-material/Logout';

import "./AdminPanel.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        color: 'white',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const DashboardNav = () => {
    const [user] = useAuthState(auth);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    var str = user?.email;
    var nameReplace = str.replace(/@.*$/, "");
    var name = nameReplace !== str ? nameReplace : null;

    return (
        <div className="dashboardNav">
            <nav className="adminNav">
                <ul className="adminNav_list">
                    <li>
                        <a href="/">Home</a>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                </ul>
                <div className="admin_name">
                    <div className={classes.root}>
                        <div>
                            <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                <p>{name}</p>
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <MenuItem onClick={() => auth.signOut()}><LogoutIcon />Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DashboardNav;
