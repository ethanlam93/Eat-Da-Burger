# Eat-Da-Burger

In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```
## Requirement
Build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees
  * View departments, roles, employees
  * Update employee roles
  * Additional functions: Update employee by manger,View employee by manager, Remove Employee 


## Process
1. Pseudo coding
2. Create all the folder and file according to directory structure
3. Create db files
4. Work on connection and orm.js
5. Create the models
6. Create the controller
7. Modify server.js for heroku deployment

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Installation
no installation needed

## Screenshot
<img width="1207" alt="Screen Shot 2020-09-10 at 10 12 29 AM" src="https://user-images.githubusercontent.com/64672854/92977564-51374780-f45b-11ea-9574-0a405b045792.png">

## Deployment
https://shrouded-fjord-36704.herokuapp.com/



