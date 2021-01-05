const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: 123,
    host: "localhost",
    database: "pern_todo",
    port: 5432
});
module.exports = pool;