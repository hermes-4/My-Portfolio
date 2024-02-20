const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ebenezeroforia08@gmail.com",
        pass: "scorpionking124",
    },
});

app.use(express.json());

app.post("/sendEmail", (req, res) => {
    const { recipientEmail, message } = req.body;

    const mailOptions = {
        from: "ebenezeroforia08@gmail.com",
        to: recipientEmail,
        subject: "New Message",
        text: message,
    };

    transporter.sendEmail(mailOptions, (error, info) => {
        if (error) {
            console.erro("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent:", info.response);
            res.send("Email sent successfully");
        }
    });
});

module.exports = router;
