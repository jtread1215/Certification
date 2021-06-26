// Trim unnecessary whitespace from email address field
'use strict';

const nodemailer = require('nodemailer');

const email = async () => {

    // nodemailer config
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lauren96@ethereal.email',
            pass: 'hSdfHX39XPheuWwbcf'
        }
    });

    // sample variable used in the body of the HTML email
    const styling = 'styling';

    // Email form fields (contains plaintext and HTML as examples. Final code will only use HTML)
    let emailInfo = await transporter.sendMail({
        from: '"Sample Email" <sample_email@example.com>',
        to: '"Weirdo Email" <target_email@example.com>',
        subject: "Test 10",
        text: 'To receive your certificate, please enable HTML emails.',
        html: `<div class='cert-bg'></div>`
    });

    console.log("Message sent: %s", emailInfo.messageId);
};

email().catch(console.error);

module.exports = email;
