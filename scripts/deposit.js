const axios = require("axios")
require('dotenv').config()
const {createRequestSignature} = require("../util/util")

const card = "5200 8282 8282 8210"

async function createDeposit () {
    const data = {
        "transaction_id": "1",
        "amount": "100.00",
        "currency": "USD",
        "payment_system": "CardGateTestS2S",
        "note": "Account deposit 321",
        "system_fields": {
            "client_id": "321",
            "card_number": card,
            "card_month": "01",
            "card_year": "2028",
            "cardholder_name": "Mr Cardholder",
            "card_cvv": "345"
        },
        "url": {
            "callback_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/callback",
            "fail_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/fail",
            "pending_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/pending",
            "success_url": "https://webhook.site/18b883cd-eb94-44ad-8e20-b6d8f526485c/success"
        }
    }

    const res = await axios.post("https://aliumpay.com/api/deposit/create", data, {
        headers: {
            Auth: process.env.AUTH,
            Sign: createRequestSignature(data)
        }
    }).catch(err => {throw err})

    console.log(res.data)
}

createDeposit().catch(err => console.log(err))
