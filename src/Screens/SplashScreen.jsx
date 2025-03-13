import React, { useEffect } from "react"
import styled from "styled-components";
import logo from '../assets/to-do-list.gif';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.body};
`;
const Logo = styled.img`
  max-width: 300px;
`;
const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/MainScreen')
      }, 5000);
      return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <Wrapper>
        <Logo src={logo} alt="To-Do List Logo" />
    </Wrapper>
  )
};

export default SplashScreen;
