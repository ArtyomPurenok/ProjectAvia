import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from './Form';
import { ContainerForm } from './SingInUp.style';
import { useNavigate } from "react-router-dom";
import { setUser } from '../../redux/slices/userSlices';
import { useDispatch } from 'react-redux';
export const SingIN = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(({ user }: any) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));
            navigate("/");
        }).catch(alert);
    };
    return (<ContainerForm className='container--signin'>
        <Form isname='hidden' title='LOGIN' handleClick={handleLogin} />
    </ContainerForm>

    );
}; 
