const express = require('express')
const bodyParser = require('body-parser')
const Todoist = require('./todoist')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/twist/incoming', function (req, res) {
    const content = req.body

    if (content.thread_title) {
        Todoist.addTask(content.thread_title)
                .then((body) => {
                    console.log(body)
                    res.send(`Added ${content.thread_title} to Todoist.`)
                }).catch(function (err) {
                    console.log(err)
                    res.send('Could not add to Todoist')
                });
    } else {
        res.send('Sorry. Acceptist only works on threads for now.')
    }
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
