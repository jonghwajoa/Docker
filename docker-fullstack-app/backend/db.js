const mysql = require('mysql')
const {DB_USER, DB_PASSWORD, DB_DATABASE} = process.env



const pool = mysql.createPool({
    connectionLimit: 10,
    host : '127.0.0.1',
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_DATABASE
})

module.exports = {
    pool
}