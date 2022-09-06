/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

// eslint-disable-next-line prettier/prettier
import { useState } from 'react';
import { Wrapper, ToggleIcoN, Bar } from './BurgerMenu.styled'
export const BurgerMenu = () => {
    const [menuActive, setmenuActive] = useState(false);
    return (
        <Wrapper>
            <ToggleIcoN
                className={menuActive ? 'pushed' : ''}
                onClick={() => {
                    setmenuActive(!menuActive)
                }}>

                <Bar />
                <Bar />
                <Bar />

            </ToggleIcoN>
        </Wrapper>
    )
}
