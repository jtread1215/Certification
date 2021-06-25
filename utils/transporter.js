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

// Test script (from https://nodemailer.com/about/):
async function main() {

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Sample Email" <sample_email@example.com>', // sender address
        to: '"Weirdo Email" <target_email@example.com>', // list of receivers
        subject: "Test 10", // Subject line
        text: "You've got this!", // plain text body
        html: `<h1>This is an email</h1>
        <b>This will be where the certificate is located</b>,
        <p style="color:violet;">and we'll also have some ${styling} here.</p>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

main().catch(console.error);

// module.exports = transporter;
