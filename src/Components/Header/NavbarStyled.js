import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  list-style: none;
  li {
    font-size: 16px;
    font-weight: 600;
    color: #053551;
    font-family: Inter;
    line-height: 1;
    letter-spacing: -0.48px;
    text-transform: capitalize;
  }
`;

export const NavLink = styled.a`
  color: #053551;
  &:hover {
    color: #e0764c;
  }
`;
