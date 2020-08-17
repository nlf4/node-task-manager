const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nlfurtado4@gmail.com',
        subject: `We're Sorry To See You Go`,
        text: `We're sorry to see you leave, ${name}. Please let us know if there is anything we can do to make your experience more enjoyable.`
    })
}

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nlfurtado4@gmail.com',
        subject: 'Welcome to the Task Manager App!',
        text: `Welcome to the app, ${name}. Let us know how it's going!`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}