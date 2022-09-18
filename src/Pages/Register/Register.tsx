import React from 'react';
import { Link } from 'react-router-dom';
import { SingUP } from '../../components/SingUp/SingUP';

export const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <SingUP />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
};
