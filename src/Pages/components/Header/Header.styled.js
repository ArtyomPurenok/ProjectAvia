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
height: 70px;
margin: 0 auto;
position:fixed ;

z-index:100;
&.active{background-color:red}
  `;

export const Logo = styled.img`
width: 4%;
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
  font-size: 2em;
`;
export const MenuWrapper = styled.div`
display: flex;

`;
export const WrapperUserTools = styled.div`
display: flex;
align-items: center;
`;

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
  height:80vh}
`;
