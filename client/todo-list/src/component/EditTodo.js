import React, { Fragment, useState } from "react";

export default function EditTodo({todo}) {
    const [description, setDescription] = useState(todo.description)
    
    const editText = async(id)=>{
        try {
            const body = {description}
            const res = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (error) {
            console.log(error.message);
        }
    }
    
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>
                &times; 
              </button>
            </div>

            <div class="modal-body">
              <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={()=> editText(todo.todo_id)}
                >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
