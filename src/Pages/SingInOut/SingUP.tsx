import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { setUser } from '../../redux/slices/userSlices';
import { Form } from './Form';
import { ContainerForm } from './SingInUp.style';

export const SingUP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSingUp = (email: string, password: string) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password).then(({ user }: any) => {dispatch(setUser({
                email: user.email,
                id: user.uid,
                name: user.displayName,
                token: user.accessToken
            }));
            navigate("/");
        }).catch(alert);
    };


    
    return (
        <ContainerForm className='container--signup'>

            <Form title='Registr' handleClick={handleSingUp} isname='text' />

        </ContainerForm >
    );
};
