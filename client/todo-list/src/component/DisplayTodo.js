import React, { useState, useEffect } from "react";

export default function DisplayTodo() {
  const [allTodos, setAllTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const todosArray = await res.json();
    setAllTodos(todosArray);
    console.log(todosArray);
  };

  useEffect(() => {
    getTodos();
  }, []);
  const  deleteTodo = async(id)=> {
      
     try {
         fetch(`http://localhost:5000/todo/${id}`, {
             method: "DELETE",
            })
            setAllTodos(allTodos.filter((todo)=> todo.todo_id !==id))
     } catch (error) {
         console.log(error.message);
     }
  }

  return (
    <div className="table-container">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Todo</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allTodos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.description}</td>
                <td>
                  <button type="button" class="btn btn-warning">
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
