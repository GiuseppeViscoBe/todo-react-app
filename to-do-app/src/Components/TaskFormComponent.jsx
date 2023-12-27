

function TaskForm({handleInputChange,handleSubmit,toDoItem}) {
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="nome" placeholder="add item..." value = {toDoItem} onChange={handleInputChange}/>
        </label>
        <br></br>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
