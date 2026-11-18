const nodemailer = require('nodemailer')
const {EMAIL_USER, EMAIL_PASS} = process.env
// create email
let configOptions = {
    // host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
    tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2'
    },
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
};

// create a reusable transporter
const transporter = nodemailer.createTransport(configOptions)

// export transport config
module.exports = transporter;