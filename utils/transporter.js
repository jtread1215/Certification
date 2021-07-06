// Trim unnecessary whitespace from email address field
'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config();

const email = async () => {
    // Attach cert file to email
    let message = {
        
    };

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
        subject: "Test 11",
        attachments: [
            {
                path: './public/certs/certificate.html'
            }
        ],
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
