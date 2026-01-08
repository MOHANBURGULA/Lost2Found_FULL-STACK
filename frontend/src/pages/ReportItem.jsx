import React, { useState } from "react";

export default function ReportItem() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    description: "",
    contact: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("date", formData.date);
      data.append("location", formData.location);
      data.append("description", formData.description);
      data.append("contact", formData.contact);
      if (image) data.append("image", image);

      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        body: data, // ✅ DO NOT add headers
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Failed to report item");
        return;
      }

      alert("Item reported successfully ✅");

      setFormData({
        name: "",
        category: "",
        date: "",
        location: "",
        description: "",
        contact: "",
      });
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Report Lost Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <textarea
          className="w-full border p-2 rounded"
          name="description"
          placeholder="Details"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          className="w-full border p-2 rounded"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
