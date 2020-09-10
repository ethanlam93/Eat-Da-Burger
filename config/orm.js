const connection = require("./connection.js")
const orm = {
    selectAll: function(tableName,cb) {
      const queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
   insertOne: function(burgerName,cb) {
      const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,false)";
      connection.query(queryString, [burgerName], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(id, cb) {
      const queryString = "UPDATE burgers SET devoured = true WHERE id = ? ";
      connection.query(queryString, [id], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  };
  
  module.exports = orm;

  