const axios = require("axios")
require('dotenv').config()
const {createRequestSignature} = require("../util/util")

const card = "5200 8282 8282 8210"

const createPayout = async () => { 
    const data = {
        "transaction_id": "1",
        "amount": "20.00",
        "currency": "USD",
        "payment_system": "TestCard",
        "note": "Account payout 321",
        "system_fields": {
            "card_number": card,
            "client_phone": "+79008007000",
            "payment_description": "Account deposit 321"
        },
        "url": {
            "callback_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/callback",
            "reversal_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/reversal"
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
