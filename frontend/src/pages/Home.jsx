import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { apiRequest } from "../utils/api";

const images = [
  {
    src: "https://mvsrec.edu.in/2025/images/gallery/gallery-lg3.jpg",
    alt: "MVSR Campus 1",
  },
  {
    src: "https://pbs.twimg.com/media/DFgjGk-UAAAwoDB.jpg",
    alt: "MVSR Campus 2",
  },
  {
    src: "https://pbs.twimg.com/media/GVA83zhXoAAU-uA?format=jpg&name=large",
    alt: "MVSR Campus 3",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState([]);

  // Carousel logic
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // ✅ Fetch lost items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await apiRequest("/api/items");
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      {/* ===== Carousel ===== */}
      <section className="relative w-full max-w-5xl mx-auto" style={{ height: 500 }}>
        <div className="relative w-full h-full bg-black overflow-hidden rounded-lg shadow-lg">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-contain max-h-full max-w-full mx-auto"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold text-center px-6">
            Bringing the MVSR community together to recover lost belongings.
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 text-white">
            ◀
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 text-white">
            ▶
          </button>
        </div>
      </section>

      {/* ===== Lost Items Section ===== */}
      <section className="max-w-6xl mx-auto mt-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Lost Items</h2>

        {items.length === 0 ? (
          <p className="text-gray-500">No lost items reported yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
