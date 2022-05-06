import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer';
require('dotenv').config()

// console.log(process.env.MAILTRAP_PASS)

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "c9fef47cfbc721",
        pass: process.env.MAILTRAP_PASS
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        try {
            console.log("")
            await transport.sendMail({
                from: 'Equipe Feedget <oi@feedget.com>',
                to: 'Diego Fernandes <lghiggino@gmail.com',
                subject,
                html: body
            });
        } catch (error) {
            console.error(error)
        }
        
    };
}
