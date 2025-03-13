import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a task
  const addTask = async (newTask) => {
    try {
      const response = await axios.post("http://localhost:5000/tasks", newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle task status (done/not done)
  const toggleTaskStatus = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToUpdate, done: !taskToUpdate.done };
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  // Edit task with any updates
  const editTask = async (id, updatedTaskDetails) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTaskDetails);
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskStatus, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};
