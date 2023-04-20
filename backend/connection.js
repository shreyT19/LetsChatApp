const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://isprayz49:shreyansh4860@cluster0.xdejbrr.mongodb.net/test
`,
  () => {
    console.log("connected to mongodb");
  }
);
