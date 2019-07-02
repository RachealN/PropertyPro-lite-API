## PropertyPro Lite


## Badges

[![Build Status](https://travis-ci.org/RachealN/PropertyPro-lite-API.svg?branch=develop)](https://travis-ci.org/RachealN/PropertyPro-lite-API)
[![Maintainability](https://api.codeclimate.com/v1/badges/06a3edf7c0f6968c556d/maintainability)](https://codeclimate.com/github/RachealN/PropertyPro-lite-API/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/RachealN/PropertyPro-lite-API/badge.svg?branch=develop)](https://coveralls.io/github/RachealN/PropertyPro-lite-API?branch=develop)

## Project Overview
is a platform where people can create and/or search properties for sale or rent.

# Getting Started

Clone the project to your computer using this command

```git clone(https://github.com/RachealN/PropertyPro-lite-API.git)```

# Preprequisites
Make sure you node js and postman installed on your computer.

```Install node .js```

```install npm```

```Install postman```

```Install Vs Code```   or any other text editor of your choice

# Install the dependencies and development dependencies
```npm install --save -dev (name of a dependency) ```
```npm install -D (name for devdependency) ```



# Setting up nodemon for automatic re-running this application
nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

```npm install --save-dev nodemon ```

include this in the your package.json file under scripts

```dev-start:nodemon server.js```

# Running the project

To run this project

Navigate to the directory where the project was cloned and run this command

```npm run dev-start```


# Features

○	Create User account

○	Login a user

○	Create property advert

○	Update property details

○	Mark property as sold

○	Delete property advert

○	View all property adverts

○	View aspecific property advert

○	Get all Users

○	Get aspecific user

○	Update a user

○	Delete a user

○	Patch a user


# API Endpoints
| Methods | Endpoints           |Functionality|
----------|---------------------|-------------------------------|
|  POST| /api/auth/signUp   |  Create user account            ||          
|  POST | /api/auth/signIn   |  login a user            ||          
   POST | /api/property    | create a property advert       | |          
|  PATCH  | /api/property/1    |  Update property details   | |           
|  PATCH  | /api/property/1/sold    |  Mark property as sold | |           
|  DELETE  |/api/property/1   |  Delete property advert          | |           
|  GET  |/api/property   |  View all property adverts |              ||           
|  GET  |/api/property/1   | view aspecific property advert |                     ||            
|  GET  |/api/users   |  Get all users |                    ||           
|  GET  |/api/users/1   |  Get a single user |              | |            
|  DELETE  |/api/users/1   |  Delete a user |               |
|  PATCH  |/api/users/1   |  Edit a user |               |
|  UPDATE  |/api/users/1   |  Update a user |               |


# How to run tests

Run this command

```npm run tests```

# Link to this project

Heroku 
https://propertypro-lite1.herokuapp.com/

github
https://github.com/RachealN/PropertyPro-lite-API/tree/develop

live demo of this project(UI)
https://rachealn.github.io/PropertyPro-Lite-UI/


# Author

Namaara Racheal

# Licencing

The app is opensource hence free to all users




 



