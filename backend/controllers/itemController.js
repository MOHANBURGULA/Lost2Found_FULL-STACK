const Item = require("../models/Item");

// @desc    Create a new lost item
// @route   POST /api/items
// @access  Public (User only, no auth required for now)
const createItem = async (req, res) => {
  try {
    const { name, category, date, location, description, contact } = req.body;

    if (!name || !category || !date || !location || !description || !contact) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const item = await Item.create({
      name,
      category,
      date,
      location,
      description,
      contact,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    res.status(201).json(item);
  } catch (error) {
    console.error("Create Item Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all lost items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    console.error("Get Items Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createItem,
  getItems,
};
