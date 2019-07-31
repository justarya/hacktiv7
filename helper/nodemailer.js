const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'adilpr93@gmail.com',
        pass: 'adilpratama1'
    }
});

let helperOption = {
    from: '"Adiel Pratama" <adilpr93@gmail.com>',
    to: 'just1arya@gmail.com',
    subject: "TEST NODEMAILER",
    text: 'MASUK'
};

transporter.sendMail(helperOption, (err, info) => {
    if (err) {
        throw err;
    }
    else {
        console.log("SENT")
        console.log(info)
    }
});