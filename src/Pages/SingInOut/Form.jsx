import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlices';
import {Forma,Title,Input,Button,ContainerButtonAuth}from './SingInUp.style';
import { googleprovider,gitprovider } from '../../AuthProvider/authMetod';
import { getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


import { BsGithub ,BsGoogle} from "react-icons/bs";

export const Form = ({title,handleClick,isname}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleAuth = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                dispatch(setUser({
                    email: result.user.email,
                    id: result.user.uid,
                    name: result.user.displayName,
                    token: result.user.accessToken,
                }));
                navigate("/");
            }).catch((error) => {
       alert(error);
            });
    };
    const gitAuth=()=>{
        const auth = getAuth();
        signInWithPopup(auth, gitprovider)
            .then((result) => {dispatch(setUser({
                    email: result.user.email,
                    id: result.user.uid,
                    name: result.user.displayName,
                    token: result.user.accessToken,
                }));
                navigate("/");
            }).catch((error) => {
                alert(error);
            });
    };



  return (
    <Forma className='container--signUp'>
        <Title>{title}</Title>

         <Input
        type={isname}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        
    />
    <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
    />
    <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
    /> 
    <ContainerButtonAuth>
    <BsGoogle  onClick={googleAuth}/>
    <BsGithub onClick={gitAuth}/>
    </ContainerButtonAuth>
    <Button text={title} 
        onClick={() =>handleClick(email, password,name) }
    >
        {title}
    </Button>
</Forma>
  );
};

