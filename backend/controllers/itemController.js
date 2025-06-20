const Item = require('../models/Item');
const nodemailer = require('nodemailer');

exports.getItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.addItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json({ message: "Item added successfully" });
};

exports.sendEnquiry = async (req, res) => {
  const { name } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New Enquiry for: ${name}`,
    text: `A user enquired about ${name}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Enquiry sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send enquiry", error: err });
  }
};
