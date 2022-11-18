import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: table;
  background-size: 100% auto;
`;

export const NavBar = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 50px;
margin: 0 auto;
position:fixed ;
background-color: transparent;
transition :background-color 1500ms;
z-index:100;
&.active{
  transition :background-color 1500ms;
  background-color:red}
  `;

export const Logo = styled.img`
width: 3%;
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
  font-size: 15px;
`;
export const MenuWrapper = styled.div`
display: flex;

`;
export const WrapperUserTools = styled.div`
display: flex;
align-items: center;
`;

export const Avatar = styled.img`
width: 30px;
height: 30px;
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
  font-size: 20px;
  
  &>*{color: white;
    text-decoration:none ;}
  &:hover {
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }`;

export const Icon = styled.img`
width: 10px;
height: 10px;
  cursor: pointer;
`;

export const Section = styled.section`
/* background-color: aquamarine; */
border: 1px solid #000;
justify-content:center ;
display:flex ;
align-content:center ;
display: flex ;
align-items: center;
width: 100%;

&#TOURS {background-color: white;
  height:100vh}
`;
