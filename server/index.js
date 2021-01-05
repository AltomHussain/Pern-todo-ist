const express = require("express");
const cors = require("cors")
const pool  = require("./db")
const app = express()
app.use(express.json());//for req.body
//middle ware
app.use(cors());//allows us different domain to interact with each other.




app.listen(5000, "Server is listening on port 5000");