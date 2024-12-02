const axios = require("axios")
require('dotenv').config()
const {createRequestSignature} = require("../util/util")

const card = "4111 1111 1111 1111"
const card3ds = "5555 5555 5555 4444"

const createPayout = async () => { 
    const data = {
        "transaction_id": "1",
        "amount": "20.00",
        "currency": "USD",
        "payment_system": "CardGateTest",
        "note": "Account payout 321",
        "system_fields": {
            "card_number": card3ds,
            "client_phone": "+79008007000",
            "payment_description": "Account deposit 321"
        },
        "url": {
            "callback_url": "https://site.com/callback",
            "reversal_url": "https://site.com/reversal"
        }
    }

    const res = await axios.post("https://aliumpay.com/api/deduce/create", data, {
        headers: {
            Auth: process.env.AUTH,
            Sign: createRequestSignature(data)
        }
    }).catch(err => {throw err})

    console.log(res.data)
}

createPayout().catch(err => console.log(err))
