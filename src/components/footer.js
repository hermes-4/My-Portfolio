import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
    const [recipientEmail, setRecepientEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState("");
    const handleEmailChange = (e) => {
        setRecepientEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const response = axios.await("api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ recipientEmail, message }),
            });
            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            setSubmissionStatus("Email sent successfully");
        } catch (error) {
            console.log("Error sending email: ", error);
            setSubmissionStatus("Error sending email");
        }
    };
    return (
        <div className="footer">
            <div className="caption">
                <p>Send a mail to the creator of this website</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label className="email">
                    Sender's email address:
                    <br />
                    <br />
                    <input
                        type="email"
                        value={recipientEmail}
                        onChange={handleEmailChange}
                        placeholder="email"
                        required
                    />
                </label>
                <br />
                <label className="message">
                    Message:
                    <br />
                    <br />
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Enter your mail here..."
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
                {submissionStatus && alert({ status })}
            </form>
        </div>
    );
};

export default Footer;
