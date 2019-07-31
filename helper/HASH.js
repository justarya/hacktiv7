function generateKey(password) {
    let key = ''
    for (let i = 0; i < password.length; i++){
        key += password[Math.floor(Math.random()*password.length)]
    }
    return key
}

function cryptoPassword(password) {
    const crypto = require('crypto')
    const secret = generateKey(password)
    const hash = crypto.createHmac('sha256', secret)
                        .update(password)
                        .digest('hex')
    return {
        password: hash,
        salt: secret
    }
}
module.exports = cryptoPassword