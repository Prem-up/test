const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
// testing gcr integration
app.listen(3003, () => console.log('Example app listening on port 3003!'))