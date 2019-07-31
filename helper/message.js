const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '77c70179',
    apiSecret: 'CwgIztTH1ZmGU3Fh',
});

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
const from = 'Nexmo';
const to = '6285775091791';
const OTP = generateOTP();


nexmo.message.sendSms(from, to, OTP);
