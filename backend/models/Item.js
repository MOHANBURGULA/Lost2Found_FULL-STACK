const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    date: String,
    location: String,
    description: String,
    contact: String,
    image: String, // ✅ NEW
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
