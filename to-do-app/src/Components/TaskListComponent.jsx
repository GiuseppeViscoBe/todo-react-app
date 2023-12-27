import { useState } from "react";

function TaskList({ item, handleDelete}) {
  return (
    <div className="taskList" >
      <li style={{display : 'inline-block'}}>{item}</li>
      <button onClick = {handleDelete}>Delete</button>
    </div>
  );
}

export default TaskList;
