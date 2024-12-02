const axios = require("axios")
const {format} = require("date-fns")
require('dotenv').config()
const {createRequestSignature} = require("../util/util")

const getStatus = async () => {
    const trxId = "1"
    const date = format(new Date(1733164202 * 1000), "yyyy-MM-dd")

    const res = await axios.get(`https://aliumpay.com/api/status/merchant?id=${trxId}&date=${date}`, {
        headers: {
            Auth: process.env.AUTH,
        }
    }).catch(err => {throw err})

    console.log(res.data)
}

getStatus().catch(err => console.log(err))
