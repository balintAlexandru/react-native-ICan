require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRoutes = require("./routes/category");
const tasksRoutes = require("./routes/tasks");

//express app
const app = express();
app.use(cors());

//middleware
//Acest middleware este o functie care se apeleaza de fiecare data cand se face un request.
app.use(express.json({ limit: "5mb" }));

app.use((req, res, next) => {
  next();
});

//routes
app.use("/api/categorys", categoryRoutes);
app.use("/api/tasks", tasksRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
