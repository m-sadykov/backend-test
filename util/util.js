const md5 = require("md5")

const createRequestSignature = (requestBody) => {
    const objStr = JSON.stringify(requestBody)
    return md5(objStr + process.env.SECRET).toString()
}

module.exports = {
    createRequestSignature
}
