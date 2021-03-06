// Trim unnecessary whitespace from email address field
'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config();

const email = async () => {
    // nodemailer config
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });

    // Email form fields (variables are just placeholders)
    let emailInfo = await transporter.sendMail({
        from: '"Send Email" <sender_email@example.com>',
        to: '"Receive Email" <target_email@example.com>',
        subject: "Event Certificate",
        attachments: [
            {
                path: './assets/certificate2.html'
            }
        ],
        text: 'To view your certificate, please enable HTML emails.',
        html: `
            <div>
                <p>Hello,
                    <br><br>
                    Thank you for attending a recent event. Please find attached your certificate.
                    <br><br>
                Thanks!
                Event Staff
            </div>`
    });
};

email().catch(console.error);

module.exports = email;

