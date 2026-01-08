import React from "react";

export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      {/* Item Image */}
      {item.image && (
        <img
          src={`http://localhost:5000${item.image}`}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Item Details */}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500">
          <span className="font-medium">Category:</span> {item.category}
        </p>

        <p className="text-sm text-gray-500">
          <span className="font-medium">Lost Date:</span> {item.date}
        </p>

        <p className="text-sm text-gray-500">
          <span className="font-medium">Location:</span> {item.location}
        </p>

        <p className="text-sm text-gray-700 mt-1">
          <span className="font-medium">Details:</span> {item.description}
        </p>

        <p className="text-sm text-gray-800 mt-1 font-semibold">
          📞 Contact: {item.contact}
        </p>
      </div>
    </div>
  );
}
