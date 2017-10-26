const express = require('express')
const app = express()

app.get('/twist/incoming', function (req, res) {
    console.log(req)
    console.log(res)
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
