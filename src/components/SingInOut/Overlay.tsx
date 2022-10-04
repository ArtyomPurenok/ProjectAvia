import { log } from 'console';
import React, { useState } from 'react';
import { OverlayContainer, OverlayWrapper, Button } from './SingInUp.style';
export const Overlay = () => {
    const [isContainerActive, setIsContainerActive] = useState(false);
    const signUpButton = () => {
        console.log('signUpButton', isContainerActive);
        setIsContainerActive(!isContainerActive);
    };
    const signInButton = () => {
        setIsContainerActive(!isContainerActive);
        console.log('signInButton', isContainerActive);
    };

    return (
        <OverlayContainer className={`${isContainerActive ? 'right' : 'left'}`} >
            <OverlayWrapper className='overlay'>
                <Button id="signIn" onClick={signInButton}>{`${isContainerActive ? 'Sing up' : 'Sing in'}`}</Button>
            </OverlayWrapper>
        </OverlayContainer>
    );
};
