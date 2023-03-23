const PORT = 8000
const axios = require('axios')
const express = require('express')
const app = express()

const url = "https://51a87557-d9fb-46ed-8581-330341293aed-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/highscores/collections/scores?page-size=20"

app.get('/', (req, res) => {
    res.json('this works')
})

app.get('/scores', (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': 'AstraCS:QgfCaDhvkbIYJZPKiWvqRHtL:8dec328175a332aecdc4cd8f25815ebfe29f5e4a3ccd7167ae781b7ca756799f'
        }
    }
    axios(url, options)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json({ message: err }))
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))