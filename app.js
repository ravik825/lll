// include express module in our app
const express = require("express");
const path = require("path");

// new create the express server
const app = express();

// require("./db/conn");
const port = process.env.PORT || 5000;

//for production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client","dist", "index.html"));
  });
}
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running at the port ${port}`);
});