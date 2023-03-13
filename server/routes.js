const express = require("express");
const router = express.Router();
const contactModel = require("./schemas/contact");

// Get all posts
router.post("/contact", async (req, res) => {
  console.log("here")
  console.log(req.body);
  try {
    const { userName, email, age, phone, experience, country } = req.body;
    const newContact = new contactModel({
      userName,
      email,
      age,
      phone,
      experience,
      country,
    });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all contacts
router.get("/contact", async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get 1 contact
router.get("/contact/:id", async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update 1 contact
router.put("/contact/:id", async (req, res) => {
  try {
    const { userName, email, age, phone, experience, country } = req.body;
    const updatedContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      { userName, email, age, phone, experience, country },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/contact/:id", async (req, res) => {
  try {
    const deletedContact = await contactModel.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
