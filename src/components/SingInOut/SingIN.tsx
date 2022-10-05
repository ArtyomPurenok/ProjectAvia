import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlices';
import { Form } from './Form';
import { ContainerForm } from './SingInUp.style';

export const SingIN = () => {
    const dispatch = useDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(console.log).catch(alert);
    };
    return (<ContainerForm className='container--signin'>
        <Form isname='false' title='Sing in' handleClick={handleLogin} />
    </ContainerForm>

    );
};
