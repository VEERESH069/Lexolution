const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const askrouter = require("./src/Router/router");
const lawyerrouter = require("./src/Router/lawyerrouter");


require("dotenv").config({path:"./src/Config/.env"})

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json())
app.use(express.static("public")); 





app.get("/test", (req, res) => {
  res.send("running test..."); 
});
app.use("/ask", askrouter)
app.use("/lawyer",lawyerrouter)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
