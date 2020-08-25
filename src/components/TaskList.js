import React, { useState } from "react";
import { Button } from 'reactstrap'
import { tasks } from './data_tasks'

const TaskList = () => {

  const [list, updateList] = useState(tasks);

  const handleRemoveItem = (e) => {
   const task = e.target.getAttribute("task")
    updateList(list.filter(item => item.taskDescription !== task));
  };

  const handleMoveItem = (e) => {
    const task = e.target.getAttribute("task")
     updateList(list.filter(item => item.taskDescription !== task));
   };

  return (
    <div>
        <ul>
      {list.map(item => {
        return (
          <li>
            <Button task={item.taskDescription} onClick={handleRemoveItem}>
              x
            </Button>
            <span>{item.taskDescription}</span>
            <Button task={item.taskDescription} onClick={handleMoveItem}>
              Move Task
            </Button>
          </li>
        );
      })}
      </ul>
    </div>
  );
};

export default TaskList;