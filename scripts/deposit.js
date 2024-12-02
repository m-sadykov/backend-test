const axios = require("axios")
require('dotenv').config()
const {createRequestSignature} = require("../util/util")

const card = "4111 1111 1111 1111"
const card3ds = "5555 5555 5555 4444"

async function createDeposit () {
    const data = {
        "transaction_id": "1",
        "amount": "100.00",
        "currency": "USD",
        "payment_system": "CardGateTest",
        "note": "Account deposit 321",
        "system_fields": {
            "client_id": "321",
            "card_number": card3ds,
            "card_month": "01",
            "card_year": "2028",
            "cardholder_name": "Mr Cardholder",
            "card_cvv": "345"
        },
        "url": {
            "callback_url": "https://site.com/callback",
            "fail_url": "https://site.com/fail",
            "pending_url": "https://site.com/pending",
            "success_url": "https://site.com/success"
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
