import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaPlus } from "react-icons/fa";
import { darkTheme, GlobalStyles, lightTheme } from "./Theme";
import TaskForm from "./AddTaskForm";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [showForm, setShowForm] = useState(false);

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer>
        <Title>To-Do App</Title>
        <IconContainer>
          <IconButton onClick={toggleForm} title="Add Task">
            <FaPlus />
          </IconButton>
          <ThemeToggleButton onClick={themeToggler} title="Toggle Theme">
            {theme === "light" ? "🌙" : "☀️"}
          </ThemeToggleButton>
        </IconContainer>
      </HeaderContainer>
      {showForm && <TaskForm setShowForm={setShowForm} />}
    </ThemeProvider>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.headerBg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconButton = styled.button`
  background: ${({ theme }) => theme.iconBg};
  border: 1px solid ${({ theme }) => theme.iconBorder};
  border-radius: 50%;
  cursor: pointer;
  font-size: 2.2rem;
  padding: 10px;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.iconHoverBg};
    color: ${({ theme }) => theme.iconHoverColor};
  }
`;

const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBg};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50%;
  font-size: 2.2rem;
  cursor: pointer;
  padding: 10px;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.toggleHoverBg};
    color: ${({ theme }) => theme.toggleHoverColor};
  }
`;

export default Header;