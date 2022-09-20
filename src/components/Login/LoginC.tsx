import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlices';
import { Form } from '../Form/Form';


export const LoginC = () => {
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(console.log).catch(alert);
    };
    return (
        <Form title='sing in' handleClick={handleLogin} />


    );
};
