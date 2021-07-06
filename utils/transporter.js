// Trim unnecessary whitespace from email address field
'use strict';

const nodemailer = require('nodemailer');

const email = async () => {
    // Attach cert file to email
    let message = {
        attachments: [
            {
                filename: certificate.html,
                path: '../public/certs/certificate.html'
            }
        ]
    };

    // nodemailer config
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.NODEMAILER_ADDRESS,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    // Email form fields (variables are just placeholders)
    let emailInfo = await transporter.sendMail({
        from: '"Send Email" <sender_email@example.com>',
        to: '"Receive Email" <target_email@example.com>',
        subject: "Test 11",
        text: 'To view your certificate, please enable HTML emails.',
        html: `
            <div>
                <div>
                    <h1>Title</h1>
                    <p style="color: purple">Some text</p>
                </div>
            </div>`
    });
};

email().catch(console.error);

module.exports = email;
