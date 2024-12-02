const express = require('express');
const bodyParser = require('body-parser');
const crypto = require("node:crypto")
require('dotenv').config()
const axios = require("axios")
const {createRequestSignature} = require("./util")

const app = express();

app.use(bodyParser.json());

app.post('/card/token', async(req, res) => {
   try {
        const {status, data} = await axios.post(`${process.env.API_BASE_URL}/dev/card/getToken`, req.body)

        res.status(status).send(data)
   } catch (error) {
        console.error(error)
        res.status(500).send({message: "Internal Server Error"})
   }
})

app.post("/transaction/process", async (req, res) => {
    try {
        const body = req.body
        body.signature = createRequestSignature(body)

        const {status, data} = await axios.post(`${process.env.API_BASE_URL}/dev/card/process`, body)

        res.status(status).send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "Internal Server Error"})
    }
})


app.post("/transaction/status", async (req, res) => {
    try {
        const body = req.body
        body.signature = createRequestSignature(data)

        const {status, data} = await axios.post(`${process.env.API_BASE_URL}/dev/transaction/status`, body)

        res.status(status).send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = app;
