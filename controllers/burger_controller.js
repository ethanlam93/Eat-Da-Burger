const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();


//main page
router.get("/", function (req, res) {
    burger.selectAll(function(data){
        console.log(data);
        res.render("index",{burger: data})
    })
});

router.post("/api/burger", function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.burgerName,function(data){
        console.log(data);
        res.redirect("/")
    })
});



// Export routes for server.js to use.
module.exports = router;
