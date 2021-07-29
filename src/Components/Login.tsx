import React from "react";
// @ts-ignore
import { useHistory } from "react-router-dom";

import {login} from "../untils";

const Login = () => {

    const history = useHistory();
    
    const handleLogin = (e: any) => {
        e.preventDefault();
        login();
        history.push('/dashboard');
    };


    return(
        <div>
            <h3> My Login Page </h3>
            <button onClick={handleLogin}> Login </button>
        </div>
    );
};


export default Login;