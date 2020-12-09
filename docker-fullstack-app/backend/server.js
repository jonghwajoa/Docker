require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const db = require('./db')

app.use(bodyParser.json())


app.get('/api/values', (req,res)=> {
    console.log(db.pool);
    db.pool.query('SELECT * FROM lists;', (err,results, fields)=> {
        if(err) {
            return res.status(500).send(err)
        }
        return res.json(results)
    })
})

app.post('/api/value', (req,res)=> {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`, (err,results,fields)=>{
        console.log(req.body)
        if(err) {
            return res.status(500).send(err)
        }
        return res.json({success : true, value : req.body.value})
    })
})

app.listen(3000, () => {
    console.log('start server')
})