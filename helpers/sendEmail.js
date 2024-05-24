import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function sendEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.APP_PASSWORD_SECRET_KEY,
    },
  });
  
  const htmlContent = `
  <div>
    <span>Verification code is: </span>
    <span><b>${token}</b></span>
  </div>
`;

  transporter
    .sendMail({
      from: process.env.GMAIL_ACCOUNT,
      to: email,
      subject: "Welcome to Learn it! Verify your email.",
      html: htmlContent,
    })
    .then((info) => {
      console.log(info);
    })
    .catch((error) => {
      console.log(error);
    });
}
