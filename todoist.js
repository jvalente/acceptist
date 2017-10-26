const request = require('request-promise')

const PROJECT_ID = parseInt(process.env.TD_PROJECT_ID)
const TOKEN = process.env.TD_TOKEN

module.exports = {
    addTask: (content) => {
        const options = {
            uri: `https://beta.todoist.com/API/v8/tasks?token=${ TOKEN }`,
            method: 'POST',
            body: { content, project_id: PROJECT_ID },
            json: true
        }

        return request(options)
    }
}
