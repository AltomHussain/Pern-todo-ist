const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
app.use(express.json()); //for req.body
//middle ware
app.use(cors()); //allows us different domain to interact with each other.
//Post method
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "insert into todo_list (description) values($1) returning *",
      [description]
    );
    res.json(newTodo.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//Get all data
app.get("/todos", async (req, res) => {
  try {
    const getTodos = await pool.query("select * from todo_list");
    res.json(getTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get one item
app.get("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneDoto = await pool.query(
      "select * from todo_list where todo_id= $1",
      [id]
    );

    res.json(getOneDoto.rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
//Update oneTodo
app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updated = await pool.query(
      "update todo_list set description = $1 where todo_id = $2 returning *",
      [description, id]
    );
    res.json(
      `Row with id ${id} has been updated successfully to this: ${updated.rows[0].description}`
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});

//Delete todo
app.delete("/todo/:id", async(req, res)=>{
    try {
        const {id} = req.params;
     const deleteTodo = await pool.query("delete from todo_list where todo_id = $1", [id]);
     res.json()
        
    } catch (error) {
        res.status(500).json(error.message)
    }
})
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
