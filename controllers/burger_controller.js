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


// Export routes for server.js to use.
module.exports = router;
