import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #47ACFF;
  color: #fff;
  padding: 1% 0;
`;

const Title = styled.h1`
  color: #fff;
  margin: 0 2%;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
`;

const Button = styled.button`
  padding: 4% 3%;
  margin: 1%;
  text-align: center;
  text-decoration: none;
  font-size: 1.1rem;
  width: 120px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Title>Anywhere Fitness</Title>
      <ButtonGroup>
        <Link to='/login'>
          <Button>Log In</Button>
        </Link>
        <Link to='/signup'>
          <Button>Get Started</Button>
        </Link>
      </ButtonGroup>
    </NavbarWrapper>
  )
}

export default Navbar;