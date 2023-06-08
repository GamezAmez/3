const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/submit", (req, res) => {
  const formData = req.body;

  // Send email
  res.sendStatus(200);

  // sendEmail(formData)
  //   .then(() => {
  //     res.sendStatus(200);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res.sendStatus(500);
  //   });
});

async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    // Replace with your email service configuration
    service: "gmail",
    auth: {
      user: "toddlesdoodles@gmail.com",
      pass: "ResetWord10",
    },
  });

  const mailOptions = {
    from: formData.email,
    to: "ga5453771@gmail.com", // Replace with your private email address
    subject: "New Contact Form Submission",
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  await transporter.sendMail(mailOptions);
}

const port = 5500; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
