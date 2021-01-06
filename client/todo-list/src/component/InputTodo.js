import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(description !== ""){
        console.log(true);
    try {
      const body = { description };
      await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        //You can do this line
        // body: JSON.stringify({"description": description})
        //or
        body: JSON.stringify(body),
      });
      window.location = "/";
      
    } catch (error) {
        console.log(error.message);
    }
}
  };


  return (
    <div className="input-container">
      <h1>List of todos</h1>
      <form className="d-flex mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit} type="button" class="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}
