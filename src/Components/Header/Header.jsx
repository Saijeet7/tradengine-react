import React from "react";
import { Container, HeaderWrapper, SiteLogo } from "./HeaderStyled";
import logo from "../../Images/site-logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Container>
          <HeaderWrapper>
            <SiteLogo to="/">
              <img src={logo} alt="My Image" />
            </SiteLogo>
            <Navbar/>
          </HeaderWrapper>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
