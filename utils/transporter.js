'use strict';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lauren96@ethereal.email',
        pass: 'hSdfHX39XPheuWwbcf'
    }
});

const styling = 'styling';

// Adapted test script
async function main() {
    let info = await transporter.sendMail({
        from: '"Sample Email" <sample_email@example.com>',
        to: '"Weirdo Email" <target_email@example.com>',
        subject: "Test 10",
        text: "You've got this!",
        html: `<h1>This is an email</h1>
        <b>This will be where the certificate is located</b>,
        <p style="color:violet;">and we'll also have some ${styling} here.</p>`
    });

    console.log("Message sent: %s", info.messageId);
};

main().catch(console.error);

// module.exports = transporter;
