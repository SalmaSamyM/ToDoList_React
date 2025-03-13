import React from "react";
import styled from "styled-components";
import { TasksProvider } from "../Context/TasksContext";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import TasksGrid from "../Components/TaskGrid";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const MainScreen = () => {
  return (
    <TasksProvider>
      <Wrapper>
        <Header />
        <Content>
          <Sidebar />
          <MainContent>
            <TasksGrid />
          </MainContent>
        </Content>
      </Wrapper>
    </TasksProvider>
  );
};

export default MainScreen;