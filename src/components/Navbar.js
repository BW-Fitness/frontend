import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #47ACFF;
  color: #fff;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>Anywhere Fitness</h1>
      <div>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Get Started</Link>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;