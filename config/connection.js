const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lauren96@ethereal.email',
        pass: 'hSdfHX39XPheuWwbcf'
    }
});

module.exports = transporter;
