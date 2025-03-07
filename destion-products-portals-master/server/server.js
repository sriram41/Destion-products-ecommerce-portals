const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());




// Routes
app.use("/api/auth", require("./routes/authRoutes"));



app.get("/api/invoices", (req, res) => {
    const filePath = path.join(__dirname, "invoices.json");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading invoices:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      console.log("Invoices from Backend:", JSON.parse(data)); // 🐞 Debugging
      res.json(JSON.parse(data));
    });
  });
  


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





