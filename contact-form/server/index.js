const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is your Express.js server!");
});

app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await contactEmail.verify();

    await contactEmail.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    });

    res.status(200).json({ message: "Email sent successfully!" });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
