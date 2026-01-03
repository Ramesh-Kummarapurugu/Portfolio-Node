const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const path = require("path");
const app = express();

app.use(cors()); 
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

const projectRoutes = require("./routes/projectRoutes");
app.use("/api", projectRoutes);

const homeRoutes = require("./routes/homeRoutes");
app.use("/api", homeRoutes);

const aboutRoutes = require("./routes/aboutRoutes");
app.use("/api", aboutRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting DB", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
