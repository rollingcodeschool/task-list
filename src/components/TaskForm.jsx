import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import TaskList from "./TaskList";

const TaskForm = () => {
  return (
    <div>
      <Form >
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea"/>
          <Button variant="primary" type="submit">
            <PlusCircle/> 
          </Button>
        </Form.Group>
      </Form>
      <TaskList></TaskList>
    </div>
  );
};

export default TaskForm;
