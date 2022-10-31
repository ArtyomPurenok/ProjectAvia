import React from 'react';
import { Overlay } from './Overlay';
import { SingIN } from './SingIN';
import { Container, Wrapper } from './SingInUp.style';
import { SingUP } from './SingUP';



export const SingInOut = () => {
    return (<Wrapper>
        <Container >
            <SingIN />
            <SingUP />
            <Overlay />
        </Container>
    </Wrapper>
    );
};
