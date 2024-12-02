const crypto = require("crypto")

const createRequestSignature = (request) => {
    const values = Object.values(request)
    const hmacData = values.sort().join('|')
    const hmacKey = Buffer.from(process.env.API_SECRET, 'hex')
    const hmacObj = crypto.createHmac('sha256', hmacKey)
    hmacObj.update(hmacData)
    return hmacObj.digest('hex')
}

module.exports = {
    createRequestSignature
}
