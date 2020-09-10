DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);



SELECT * FROM burgers_db;
