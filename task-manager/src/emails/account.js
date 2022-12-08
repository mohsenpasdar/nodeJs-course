const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohsen.put2@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }).then(() => {
        console.log("Email sent");
    }).catch((e) => {
        console.log(e);
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohsen.put2@gmail.com',
        subject: 'Sry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back soon!`
    }).then(() => {
        console.log("Email sent");
    }).catch((e) => {
        console.log(e);
    })
}

// is there anything we could have done to keep you onboard

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}
// const msg = {
//   to: "mohsen.put2@gmail.com", // Change to your recipient
//   from: "mohsen.put2@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });