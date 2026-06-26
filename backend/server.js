const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());


const path = require("path");

app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => {
    res.send("Portfolio API Running 🚀");
});




app.post("/contact", (req, res) => {

    console.log("CONTACT ROUTE HIT");
    console.log(req.body);

    res.json({
        success: true,
        message: "Message received"
    });

});




app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});

console.log("END OF FILE");