import React, { useState, useEffect, useContext } from "react"; 
import styled from "styled-components";
import { TasksContext } from "../Context/TasksContext";

const TaskForm = ({ setShowForm, taskToEdit }) => {
  const { addTask, updateTask } = useContext(TasksContext);

  const [selectedTags, setSelectedTags] = useState([]);
  const [customTag, setCustomTag] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const predefinedTags = [
    { name: "Work", color: "#FF5733" },
    { name: "Study", color: "#33A1FF" },
    { name: "Entertainment", color: "#FF33F6" },
    { name: "Family", color: "#33FF57" },
  ];

  // Effect to pre-fill the form with task data for editing
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setSelectedTags(taskToEdit.tags);
    }
  }, [taskToEdit]);

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevTags, tag]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const tags = customTag ? [...selectedTags, customTag] : selectedTags;

    if (!title || !description) {
      alert("Please fill out all fields.");
      return;
    }

    const taskData = { title, description, tags, done: false };

    if (taskToEdit) {
      // If editing, update the task
      await updateTask(taskToEdit.id, taskData);
      alert("Task updated successfully!");
    } else {
      // If adding a new task
      await addTask(taskData);
      alert("Task added successfully!");
    }

    setShowForm(false);
  };

  return (
    <Overlay>
      <Modal>
        <h2>{taskToEdit ? "Edit Task" : "Add New Task"}</h2>
        <Form onSubmit={handleSubmit}>
          <Label>
            Title:
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </Label>
          <Label>
            Description:
            <Textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              required
            />
          </Label>
          <Label>
            Tags:
            <TagPreview>
              {predefinedTags.map((tag) => (
                <Tag
                  key={tag.name}
                  color={tag.color}
                  onClick={() => handleTagClick(tag.name)}
                  selected={selectedTags.includes(tag.name)}
                >
                  {tag.name}
                </Tag>
              ))}
              <CustomTagInput
                type="text"
                placeholder="Add custom tag"
                value={customTag}
                onChange={(e) => setCustomTag(e.target.value)}
              />
            </TagPreview>
          </Label>
          <FormButtons>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</Button>
          </FormButtons>
        </Form>
      </Modal>
    </Overlay>
  );
};


// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: #fff;
  color: #333;
  width: 50%;
  max-width: 600px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TagPreview = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: ${({ color, selected }) => (selected ? "#000" : color)};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const CustomTagInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-grow: 1;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default TaskForm;