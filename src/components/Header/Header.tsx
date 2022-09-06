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
} from "./Header.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
export const Header = () => {
  const menuList = [
    { id: 1, name: "Home" },
    { id: 2, name: "Tours" },
    { id: 3, name: "Blog" },
    { id: 4, name: "Tickers" },
  ];
  return (
    <HeaderContainer>
      <NavBar>
        <Logo src={LogoImg} />
        <MenuWrapper>
          {menuList.map(({ id, name }) => (
            <MenuItem key={id}>
              <Item>{name}</Item>
            </MenuItem>
          ))}
        </MenuWrapper>
        <WrapperUserTools>
          <BurgerMenu />
          <LoginText>Login</LoginText>
          <Avatar src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
        </WrapperUserTools>
      </NavBar>
    </HeaderContainer>
  );
};
