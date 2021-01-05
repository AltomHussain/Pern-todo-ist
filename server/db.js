const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "altom",
    host: "localhost",
    database: "pern_todo_list",
    port: 5432
});
module.exports = pool;