import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()

export const transporterUser = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: "teamCoffee777@outlook.com",
        pass: process.env.EMAIL_PASSWORD
    }
});