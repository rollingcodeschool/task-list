import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { XCircle  } from "react-bootstrap-icons";

const Task = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      Tarea de prueba
      <i className="bi bi-x-circle-fill"></i>
      <Button variant="outline-danger"><XCircle/></Button>
    </ListGroup.Item>
  );
};

export default Task;
