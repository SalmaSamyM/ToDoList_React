import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TaskCard = ({ task, toggleTaskStatus, deleteTask,  editTask }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    editTask(task.id, updatedTask);
  };

  return (
    <Card>
      <TaskTitle>{task.title}</TaskTitle>
      <TaskDescription>{task.description}</TaskDescription>
      <Tag>{task.tag}</Tag>

      <OptionsButton onClick={() => setMenuVisible(!menuVisible)}>⋮</OptionsButton>
      <DropdownMenu visible={menuVisible}>
        <MenuItem onClick={handleEdit}>
          <FaEdit /> Edit
        </MenuItem>
        <MenuItem onClick={() => deleteTask(task.id)}>
          <FaTrashAlt /> Delete
        </MenuItem>
      </DropdownMenu>

      <ColorOptions>
        <ColorCircle color="#87CEEB" title="Blue" />
        <ColorCircle color="#FFB6C1" title="Pink" />
        <ColorCircle color="#D8BFD8" title="Purple" />
      </ColorOptions>

      <TaskStatus>
        <Checkbox
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTaskStatus(task.id)}
        />
        Done
      </TaskStatus>
    </Card>
  );
};

const Card = styled.div`
  background-color: #fff8dc;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  position: relative;
  font-family: "Arial", sans-serif;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem); /* Full width on smaller screens */
  }

  @media (max-width: 480px) {
    width: calc(100% - 1.5rem); /* Slightly smaller margin on mobile */
    padding: 1rem; /* Reduce padding for mobile */
  }
`;

const TaskTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const TaskDescription = styled.p`
  margin: 0.5rem 0 1rem;
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ColorCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;

  @media (max-width: 480px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const OptionsButton = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    font-size: 1rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0.8rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1;

  @media (max-width: 480px) {
    top: 2rem;
    right: 0.6rem;
    padding: 0.6rem;
  }
`;

const MenuItem = styled.div`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const TaskStatus = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 0.8rem;
  gap: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
`;

const Checkbox = styled.input`
  accent-color: #888;

  @media (max-width: 480px) {
    transform: scale(0.9);
  }
`;

export default TaskCard;
