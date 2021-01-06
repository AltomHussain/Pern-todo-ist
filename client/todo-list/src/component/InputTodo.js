import React, { useState } from "react";

export default function InputTodo() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    console.log(input);
    setInput(e.target.value)
  };
const handleSubmit = async(e)=>{
e.preventDefault();
try {
    const text = {input};
    await fetch("http")
    
} catch (error) {
    console.log(error.message);
}

}


  return (
    <div>
      <label for="exampleInputEmail1" className="text-center my-4">Email address</label>
      <form className="d-flex mt-3" onSubmit={handleSubmit}>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={input}
          onChange={handleChange}
        />
        <button type="button" class="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
}
