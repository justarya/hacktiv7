function generateOTP() {
    const digits = '0123456789'
    const otpLength = 4;
    let otpMessage = ''
    for(let i = 0; i < otpLength; i++) {
        let index = Math.floor(Math.random()*digits.length)
        otpMessage += digits[index]
    }
    return otpMessage
}