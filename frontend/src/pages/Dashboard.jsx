import React, { useEffect, useState } from "react";
import { apiRequest } from "../utils/api";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await apiRequest("/api/items");
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reported Lost Items</h1>

      {loading ? (
        <p>Loading items...</p>
      ) : items.length === 0 ? (
        <p>No items reported yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow rounded-lg p-4 flex gap-4"
            >
              {item.image && (
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded"
                />
              )}

              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p><b>Category:</b> {item.category}</p>
                <p><b>Lost Date:</b> {item.date}</p>
                <p><b>Location:</b> {item.location}</p>
                <p><b>Details:</b> {item.description}</p>
                <p><b>Contact:</b> {item.contact}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
