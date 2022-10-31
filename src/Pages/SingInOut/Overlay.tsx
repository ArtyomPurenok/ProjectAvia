import React, { useState } from 'react';

import { OverlayContainer, OverlayWrapper, Button } from './SingInUp.style';



export const Overlay = () => {
    const [isContainerActive, setIsContainerActive] = useState(false);

    const signInButton = () => {
        setIsContainerActive(!isContainerActive);
    };



    return (
        <OverlayContainer className={`${isContainerActive ? 'right' : 'left'}`} >
            <OverlayWrapper className='overlay'>
                <Button id="signIn" onClick={signInButton}>{`${isContainerActive ? 'Sing up' : 'Sing in'}`}</Button>
            </OverlayWrapper>
        </OverlayContainer>
    );
};
