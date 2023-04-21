import { ListGroup, Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";

const Task = ({ taskName, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {taskName}
      <i className="bi bi-x-circle-fill"></i>
      <Button variant="outline-danger" onClick={() => deleteTask(taskName)}>
        <XCircle />
      </Button>
    </ListGroup.Item>
  );
};

export default Task;
