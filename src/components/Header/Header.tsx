import LogoImg from "./img/LogoPnG.png";
import React from "react";
import {
  HeaderContainer,
  NavBar,
  Logo,
  MenuItem,
  Item,
  MenuWrapper,
  WrapperUserTools,
  LoginText,
  Avatar,
  Section,
} from "./Header.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { Navigatebar } from "../Navigatebar/Navigatebar";
import { SearchBox } from "../SearchBox";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { TicketCard } from "../TicketCard";



export const Header = () => {

  const { email, id, token } = useSelector((state: any) => state.user);
  // console.log(email, id, token, !!email, 'state');

  const menuList = [
    { id: 1, name: "Home", src: "about" },
    { id: 2, name: "Tours", src: "projects" },
    { id: 3, name: "Blog", src: "blog" },
    { id: 4, name: "Tickers", src: "contact" },
  ];
  return (
    <>
      <HeaderContainer>
        <NavBar>
          <Logo src={LogoImg} />
          <MenuWrapper>
            {menuList.map(({ id, name, src }) => (
              <MenuItem key={id}>
                <Item>{name}</Item>
              </MenuItem>
            ))}
          </MenuWrapper>
          <WrapperUserTools>
            <BurgerMenu />
            <LoginText>
              <Link to='/login'>Login</Link>
            </LoginText>
            <Avatar src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
          </WrapperUserTools>
        </NavBar>
        <Navigatebar />
        <SearchBox />
      </HeaderContainer>

      <Section id="TOURS">TOURS<TicketCard/></Section>
      <Section id="HOUSING">HOUSING</Section>
      <Section id="AIR TISCRT">AIR TISCRT</Section>
      <Section id="CAR RENTAL">CAR RENTAL</Section>
    </>
  );
};
