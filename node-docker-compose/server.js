const express = require('express')
const redis = require('redis')

const app = express()
const redisClient = redis.createClient({
    host: "redis-server",
    port: 6379
})

redisClient.set('count', 0)

app.get('/', (req, res) => {
    return redisClient.get("count", (err, number) => {
        const count = parseInt(number) + 1
        redisClient.set('count', count)
        return res.send(`count는 ${count}`)
    })
})


app.listen(3000, () => {
    console.log("start server")
})