const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const db = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());              // ✅ allow all origins
app.use(express.json());      // ✅ parse JSON


app.use(express.json());


app.use("/api/contacts", require("./routes/contactRoutes"));


app.use(errorHandler);


(async () => {
  try {
    const connection = await db.getConnection();
    console.log("MySQL connected successfully");
    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
    process.exit(1);
  }
})();
