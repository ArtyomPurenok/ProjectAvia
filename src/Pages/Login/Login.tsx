import React from 'react';
import { Link } from 'react-router-dom';
import { SingIN } from '../../components/SingInOut/SingIN';
export const Login = () => {
    return (
        <div>Login
            <SingIN />            <p>or</p>
            <Link to='/register'>register</Link>
        </div>
    );
};


