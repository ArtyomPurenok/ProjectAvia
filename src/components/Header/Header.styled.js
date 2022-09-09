
/* eslint-disable prettier/prettier */
import styled, { keyframes } from "styled-components";
import bg1 from './img/BackGroundImage/1.jpg'
import bg2 from './img/BackGroundImage/2.jpg'
import bg3 from './img/BackGroundImage/3.jpg'
import bg4 from './img/BackGroundImage/4.jpg'
import bg5 from './img/BackGroundImage/5.jpg'
const rotate = keyframes`
0%,100%{
  background-image: url(${bg1});
  }
  20%{
    background-image: url(${bg2});
  }  
  40%{  
    background-image: url(${bg3});
  }
  60%{
    background-image: url(${bg4});
  }
  80%{
    background-image: url(${bg5});
} 
`

import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: url() ; */
  /* background-position: 0 0; */
  /* background-repeat: no-repeat; */
  background-size: 100% auto;
  
  /* background-size: cover; */
  animation: ${rotate} 35s ease-in-out infinite;
`

export const NavBar = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 80%;
height: 100px;
margin: 0 auto;
  `;

export const Logo = styled.img`
width: 6%;
float: left;
`;

export const MenuItem = styled.div`
  position: relative;
  padding: 0 18px;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  color: white;
  &:hover {
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }
`;
export const Item = styled.span`
  position: relative;
  z-index: 5;

  font-size: 2em;
`
export const MenuWrapper = styled.div`
display: flex;

`
export const WrapperUserTools = styled.div`
display: flex;
align-items: center;
`

export const Avatar = styled.img`

width: 50px;
height: 50px;
border-radius: 50%;
`;
export const ButtonMenu = styled.button`
border: none;
padding: 0;
margin: 0 18px;
background-color: transparent;
    background-repeat: no-repeat;
`;
export const LoginText = styled.p`
  padding: 0 18px;
  transition: all 0.3s;
  color: white;
  font-size: 2em;
  &:hover {
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }`;
export const Icon = styled.img`

width: 10px;
height: 10px;
  cursor: pointer;
`
export const Section = styled.section`
background-color: aquamarine;
border: 1px solid #000;
width: 100%;
  height: 100vh;

`;

