import LogoImg from "./img/LogoPnG.png";
import React, { useState } from "react";
import {
  HeaderContainer,
  NavBar,
  Logo,
  MenuWrapper,
  WrapperUserTools,
  LoginText,
  Avatar,
  Section,
} from "./Header.styled";
import { Navigatebar } from "./Navigatebar/Navigatebar";
import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
// import { PopularDestinationGrid } from "../../../components/PopularDestinationGrid/PopularDestinationGrid";

export const Header = () => {
  const [navBarActiveColor, setNavBarActiveColor] = useState(false);

  const { email } = useAuth();
  window.addEventListener('scroll', () => window.scrollY > 30 ? setNavBarActiveColor(true) : setNavBarActiveColor(false));
  return (
    <>
      <HeaderContainer>
        <NavBar className={navBarActiveColor ? "active" : ''}>
          <Logo src={LogoImg} />
          <MenuWrapper>
            <Navigatebar />
          </MenuWrapper>
          <WrapperUserTools>
            <LoginText>
              <Link to='/login'>Login</Link>
            </LoginText>
            {email && <Avatar src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
            }
          </WrapperUserTools>
        </NavBar>

      </HeaderContainer>


      {/* <Section id="TOURS"><PopularDestinationGrid></PopularDestinationGrid></Section> */}
      {/* <Section id="HOUSING">
      </Section>
      <Section id="AIR TISCRT">AIR TISCRT</Section>
      <Section id="CAR RENTAL">CAR RENTAL</Section> */}
    </>
  );
};
