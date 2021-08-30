import React, { useContext } from 'react';
import './TopBarDash.css';
import { ExitToApp } from '@material-ui/icons';
import { userContext } from '../../../App';
import { Tooltip, Zoom } from '@material-ui/core';

const TopBarDash = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleLogOut = () => {
        sessionStorage.removeItem('user');
        setLoggedInUser({})
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="topDashLogo">{loggedInUser.name}</span>
                </div>
                <div className="topRight">
                    <img src={loggedInUser.photo} alt="avatar" className="topAvatar" />
                    <Tooltip className="topbarIconContainer" TransitionComponent={Zoom} title="Log out!">
                        <ExitToApp onClick={handleLogOut} />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default TopBarDash;