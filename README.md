# Complete CRUD using Node.js and MongoDB
This project performs the operations of inserting, listing, deleting, and updating data in the database. Here, I will detail how it works and its dependencies.

This project utilizes server-side JavaScript (Node.js) and the MongoDB database. Ensure that you have Node.js installed on your local machine; if not, use the link below to download it.

Link to download Node.js:

# Dependencies and their installation

To install the dependencies, use the Node terminal or your computer's command line.

## Express

Express is often used in conjunction with template engines like EJS to dynamically generate HTML pages based on data from the server. Express can be configured to use EJS as the view engine, allowing you to render EJS templates on the server side and send the resulting HTML to the client.

`npm install express`

## EJS

EJS is a templating engine for JavaScript. It allows you to embed dynamic JavaScript code within your HTML markup.

`npm install ejs`

## Mongoose

Mongoose is a popular object modeling tool for MongoDB, a NoSQL database. It is designed to simplify interactions with MongoDB through a straightforward schema-based approach. Mongoose provides a robust and flexible framework for defining data models, validation rules, and middleware functions.

`npm install mongoose`

After installing the dependencies, access the MongoDB Atlas link, create a free account, and set up your database with collections.

Link to access MongoDB Atlas:

Create a database named "crud" and a collection named "users." Watch the YouTube video on creating collections in MongoDB Atlas and generating the URL to connect to your application.

# How to run the project

Open the terminal and enter the following command:

`node app`

After running this command, open your browser and enter the URL: localhost/5500 to test the project.
