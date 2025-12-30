const nodemailer = require("nodemailer");

const sendMail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, 
    to: process.env.EMAIL_USER,
    subject: subject,

    html: `
      <div style="
        background:#f2f2f2;
        padding: 24px;
        font-family: Arial, Helvetica, sans-serif;
      ">
        <div style="
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          border-radius: 8px;
          padding: 22px;
          color: #333333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        ">

          <h2 style="
            margin: 0 0 12px 0;
            font-size: 20px;
            font-weight: 600;
            color: #222;
          ">
            New Contact Message
          </h2>

          <hr style="
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 12px 0 16px 0;
          " />

          <p style="margin: 6px 0;">
            <strong>Name:</strong> ${name}
          </p>

          <p style="margin: 6px 0;">
            <strong>Email:</strong>
            <a href="mailto:${email}" style="color:#1a73e8; text-decoration:none;">
              ${email}
            </a>
          </p>

          <p style="margin: 6px 0;">
            <strong>Subject:</strong> ${subject}
          </p>

          <p style="margin: 14px 0 6px 0;">
            <strong>Message:</strong>
          </p>

          <p style="
            margin: 0;
            line-height: 1.6;
            color: #555;
          ">
            ${message}
          </p>

          <hr style="
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 16px 0;
          " />

          <p style="
            font-size: 12px;
            color: #999;
            margin: 0;
          ">
            This message was sent from your portfolio website.
          </p>

        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
