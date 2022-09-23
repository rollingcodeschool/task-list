import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import TaskList from "./TaskList";

const TaskForm = () => {
  let tareasLocalStorage = JSON.parse(localStorage.getItem("taskList")) || [];
  const [taskList, setTaskList] = useState(tareasLocalStorage);
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (nameTask) => {
    let _taskList = taskList.filter((item) => {
      return item !== nameTask;
    });
    setTaskList(_taskList);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTask(e.target.value.trimStart())}
            value={task}
          />
          <Button variant="primary" type="submit">
            <PlusCircle />
          </Button>
        </Form.Group>
      </Form>
      <TaskList taskList={taskList} deleteTask={deleteTask}></TaskList>
    </div>
  );
};

export default TaskForm;
