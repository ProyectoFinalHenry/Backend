import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.EMAIL_KEY);

export const sendEmailToUsers = async (email, { subject, text, html }) => {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.log(error)
  }
};
