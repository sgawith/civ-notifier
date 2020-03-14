const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

app.post('/', jsonParser, (req, res) => {
    res.send('Hello World!');
    console.log(JSON.stringify(req.body));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
