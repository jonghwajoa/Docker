const express = require('express')
const app = express();
const log = console.log

app.get('/', (req, res) => {
    return res.send('hello world!!!')
})

app.listen(3000, () => {
    log('started app')
})