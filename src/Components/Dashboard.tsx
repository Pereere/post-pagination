import React from 'react';
// @ts-ignore
import { useHistory } from 'react-router-dom';
import { logout } from "../untils";

const Dashboard = () => {

    const history = useHistory();

    const handleLogout = (e:any) => {
        e.preventDefault();
        logout();
        history.push('/login');
    };

    return(
        <div>
            <h3> Subscriber's Dashboard </h3>
            <button onClick={handleLogout}> Logout </button>
        </div>
    );
};

export default Dashboard;