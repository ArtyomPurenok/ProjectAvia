import React from 'react';
import { Link } from 'react-router-dom';
import { LoginC } from '../../components/Login/LoginC';
export const Login = () => {
    return (
        <div>Login
            <LoginC />            <p>or</p>
            <Link to='/register'>register</Link>
        </div>
    );
};


