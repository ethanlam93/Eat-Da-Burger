const express = require("express");
const burger = require("../models/burger.js")
const router = express.Router();


//main page
router.get("/", function (req, res) {
    burger.selectAll(function(result){
        console.log(result)
    })
});


// Export routes for server.js to use.
module.exports = router;
