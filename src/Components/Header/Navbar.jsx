import React from "react";
import { NavLink, NavLinks } from "./NavbarStyled";

const Navbar = () => {
  return (
    <React.Fragment>
      <NavLinks>
        <li>
          <NavLink link="/products">Products</NavLink>
        </li>
        <li>
          <NavLink link="/features">Feature</NavLink>
        </li>
        <li>
          <NavLink link="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink link="/customer">Customer Login</NavLink>
        </li>
      </NavLinks>
    </React.Fragment>
  );
};

export default Navbar;
