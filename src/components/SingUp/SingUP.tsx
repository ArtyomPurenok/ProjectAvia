
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlices';
import { Form } from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';


export const SingUP = () => {
    const dispatch = useDispatch();

    const handleSingUp = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth, 'auth');

        createUserWithEmailAndPassword(auth, email, password).then(console.log).catch(alert);
    };
    return (
        <Form title='registr' handleClick={handleSingUp} />
    );
};
