import React, { useState } from "react";
import { uuid } from 'uuidv4';
import {
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import { tasks } from './data_tasks'

const TaskList = () => {

  const [list, updateList] = useState(tasks);

  const handleRemoveItem = (e) => {
   const task = e.target.getAttribute("task")
    updateList(list.filter(item => item.taskDescription !== task));
  };

  const handleMoveItem = (id,e) => {
    const removeItem = list.filter((item) => item.id !== id);
    const task = e.target.getAttribute("task")
    const newList = removeItem.concat({
      taskDescription: task,
      id: uuid(),
    });
    updateList(newList)
   };

  return (
    <div>
      <ListGroup className="text-left">
        {list.map(item => {
          return (
            <ListGroupItem key={item.id} className="bg-transparent justify-content-between d-inline-flex">
              {item.taskDescription}
              <div className="text-right">
                <Button className="mx-3 pointer" color="success" task={item.taskDescription} onClick={handleRemoveItem}>Done</Button>
                <Button color="info" task={item.taskDescription} onClick={(e) => handleMoveItem(item.id, e)}>
                  Move Task
                </Button>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default TaskList;
