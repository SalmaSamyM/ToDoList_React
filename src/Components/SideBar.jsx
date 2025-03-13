import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>Todo</Title>
      <Category>
        <CategoryColor color="#FF5733" /> Work
      </Category>
      <Category>
        <CategoryColor color="#33A1FF" /> Study
      </Category>
      <Category>
        <CategoryColor color="#FF33F6" /> Entertainment
      </Category>
      <Category>
        <CategoryColor color="#33FF57" /> Family
      </Category>
      <FilterCheckbox>
        <input type="checkbox" /> Hide Done Tasks
      </FilterCheckbox>
    </SidebarContainer>
  );
};

// Styled Components with Theme Support
const SidebarContainer = styled.div`
  width: 250px;
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Category = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const CategoryColor = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const FilterCheckbox = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 10px;
  color: ${({ theme }) => theme.secondaryText};

  input {
    accent-color: ${({ theme }) => theme.buttonBg};
  }
`;

export default Sidebar;