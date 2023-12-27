import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import TaskForm from "./Components/TaskFormComponent";
import TaskList from "./Components/TaskListComponent";
import { useState } from "react";

function App() {
  const [toDoItemsArray,setToDoItemsArray] = useState([])

  const [toDoItem, setToDoItem] = useState("");

  function handleInputChange(event) {
    setToDoItem(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setToDoItemsArray([...toDoItemsArray,toDoItem])
    setToDoItem('')
    console.log(toDoItem);
  }

  function handleDelete(index){
    
    setToDoItemsArray(toDoItemsArray.filter((_, i) => (i != index)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
        
        <TaskForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} toDoItem={toDoItem}></TaskForm>
        <ul>
          {toDoItemsArray &&
            toDoItemsArray.map((item, index) => (
              <TaskList key={index} item={item} handleDelete={() => handleDelete(index)}></TaskList>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
