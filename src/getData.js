const fetch = require('node-fetch')

async function getData(url) {
    const response = await fetch(url)

    return response.json()
}

module.exports = { getData }