// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");

// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const itemRoutes = require("./routes/itemRoutes");

// dotenv.config();
// connectDB();

// const app = express();

// /* ===== CORS CONFIG (PRODUCTION SAFE) ===== */
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL, // https://lost-to-found.netlify.app
//     credentials: true,
//   })
// );

// /* ===== MIDDLEWARE ===== */
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// /* ===== STATIC FILES ===== */
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// /* ===== ROUTES ===== */
// app.use("/api/auth", authRoutes);
// app.use("/api/items", itemRoutes);

// /* ===== HEALTH CHECK ===== */
// app.get("/", (req, res) => {
//   res.send("Lost2Found Backend Running 🚀");
// });

// /* ===== SERVER ===== */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });





const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();

/* ✅ LOCAL CORS ONLY */
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend running locally ✅");
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
