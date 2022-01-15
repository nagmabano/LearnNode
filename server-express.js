const express = require('express')
const app = express()
const port = 3000;

app.get('/',(req, res) => {
    res.send('Hello World! Welcome to Node.js');
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})