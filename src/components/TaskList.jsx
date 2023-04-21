import { ListGroup } from "react-bootstrap";
import Task from "./Task";

const TaskList = ({taskList, deleteTask}) => {
  return (
    <ListGroup>
      {
        taskList.map((task, index)=> <Task key={index} taskName={task} deleteTask={deleteTask}></Task>)
      }
    </ListGroup>
  );
};

export default TaskList;