const nodemailer = require('nodemailer')
const { EMAIL_USER, EMAIL_PASS } = process.env

// How long a code stays valid (used in the email copy).
const OTP_TTL_MINUTES = Number(process.env.OTP_TTL_MINUTES) || 10

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

// Send a verification code.
// Returns { delivered: boolean }. If EMAIL_USER / EMAIL_PASS aren't set
// we DON'T try to send — we log the code to the console instead, so the
// OTP flow is testable in class without a Gmail App Password.
async function sendOtpEmail(to, code) {
    if (!EMAIL_USER || !EMAIL_PASS) {
        console.log(
            `\n[mail-service] EMAIL_USER/EMAIL_PASS not set — OTP for ${to} ` +
            `is ${code} (valid ${OTP_TTL_MINUTES} minutes)\n`
        )
        return { delivered: false }
    }

    await transporter.sendMail({
        from: "School Hub",
        to,
        subject: 'School Hub Email Verification',
        text: `Hello from School Hub! Your verification code is ${code}. It expires in ${OTP_TTL_MINUTES} minutes.`,
        html: `
          <p>Hello from School Hub!</p>
          <p>Your verification code is:</p>
          <p style="font-size:24px;font-weight:bold;letter-spacing:4px">${code}</p>
          <p>It expires in ${OTP_TTL_MINUTES} minutes. If you didn't request this, ignore this email.</p>
        `,
        signal: AbortSignal.timeout(30_000)
    })

    return { delivered: true }
}

// export transporter + the helper
module.exports = { transporter, sendOtpEmail };