import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const SiteLogo = styled(Link)`
  width: 215px;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: min(1210px, 100%);
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;
