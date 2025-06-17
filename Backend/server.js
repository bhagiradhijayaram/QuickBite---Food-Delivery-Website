const express = require("express");
const cors = require("cors");
const initializeDB = require("./config/db");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let db;

const startServer = async () => {
  db = await initializeDB();
  app.locals.db = db;

  // Pass db to routes if needed
  app.use(
    "/api/users",
    (req, res, next) => {
      req.db = db;
      next();
    },
    userRoutes
  );

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

startServer();
