const express = require("express");
const cors = require("cors");
require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);

// Error handler
app.use(errorHandler);

// Start server (NO DB CONNECTION CHECK FOR FIRESTORE)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
