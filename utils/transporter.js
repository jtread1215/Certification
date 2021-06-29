/* Libre Baskerville font (for the certificate):
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap" rel="stylesheet"></link> */

// Trim unnecessary whitespace from email address field
'use strict';

const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const email = async () => {
    let eventName = mongoose.regitstration.event; // Pseudocode: not sure how we'll implement this, yet
    let fName = mongoose.regitstration.attendee.first_name; // Pseudocode: not sure how we'll implement this, yet
    let lName = mongoose.regitstration.attendee.last_name; // Pseudocode: not sure how we'll implement this, yet
    let commaTitle = ', ' + mongoose.regitstration.attendee.title; // Pseudocode: not sure how we'll implement this, yet

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
            user: 'lauren96@ethereal.email',
            pass: 'hSdfHX39XPheuWwbcf'
        }
    });

    // Email form fields (variables are just placeholders)
    let emailInfo = await transporter.sendMail({
        from: '"Send Email" <sender_email@example.com>',
        to: '"Receive Email" <target_email@example.com>',
        subject: "Test 10",
        text: 'To view your certificate, please enable HTML emails.',
        html: `
            <div class='cert-bg container'>
                <div class='card'>
                    <h1 class='event'>${eventName}</h1>
                    <p>${fName} ${lName}${commaTitle}</p>
                </div>
            </div>`
    });

    // console.log('Message sent: %s', emailInfo.messageId);
};

email().catch(console.error);

module.exports = email;
