// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js")

const burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", cb);
    },

    insertOne: function(burgerName,cb){
        orm.insertOne( burgerName,cb);
    },

    updateOne : function(id){
        orm.updateOne(id, function(res) {
            console.log(res);
          });
    }
}

module.exports = burger;