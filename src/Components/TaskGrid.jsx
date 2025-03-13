import React, { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../Context/TasksContext";
import TaskCard from "./TaskCard";

const TasksGrid = () => {
  const { tasks, deleteTask, toggleTaskStatus,editTask } = useContext(TasksContext);

  return (
    <TasksContainer>
      <h2>Stored Tasks</h2>
      {tasks.length === 0 ? (
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        <TaskList>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </TaskList>
      )}
    </TasksContainer>
  );
};

const TasksContainer = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TaskList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Maximum 2 items per row */
  gap: 20px;
  padding: 0;
  list-style: none;
  justify-content: center; /* Centers the grid items horizontally */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr)); /* Single column on smaller screens */
  }
`;

const NoTasksMessage = styled.p`
  color: #888;
  font-size: 1.2rem;
  text-align: center;
`;

export default TasksGrid;
