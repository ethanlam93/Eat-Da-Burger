// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js")

const burger = {
    selectAll: function() {
      orm.selectAll("burgers", function(res) {
        console.log(res);
      });
    },

    insertOne: function(burgerName){
        orm.insertOne( burgerName, function(res) {
            console.log(res);
          });
    },

    updateOne : function(id){
        orm.updateOne(id, function(res) {
            console.log(res);
          });
    }

}

module.exports = burger;