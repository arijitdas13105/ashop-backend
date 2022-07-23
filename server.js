const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/config");
const path = require("path");
const productRoute = require("./routes/ProductRoute");
connectDb();

const app = express();
require("dotenv").config();
//

app.use('https://ashop-server.herokuapp.com/api',productRoute)
// app.use('/api',productRoute)

// app.use("https://a-ecom.herokuapp.com/api", productRoute);
// -------------- deployment ----------
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "/frontend/build" / "index.html"));
//   });
// }

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`server is running bro on---> ${port}`);
});
