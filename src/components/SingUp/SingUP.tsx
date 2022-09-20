
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlices';
import { Form } from '../Form/Form';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react';


export const SingUP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSingUp = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth, 'auth');

        createUserWithEmailAndPassword(auth, email, password).then(({ user }: any) => {
            console.table(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));

            navigate("/");


        }).catch(alert);
    };
    return (
        <Form title='registr' handleClick={handleSingUp} />
    );
};
