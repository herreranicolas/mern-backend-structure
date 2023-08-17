# Initial Backend Structure

This repository contains the initial backend structure for a web application. It is built using Node.js and Express, and includes essential dependencies for handling routing, validation, database operations, and more.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Author](#author)
- [Contact](#contact)

## Description

The **initial-backend-structure** project is designed to provide a solid foundation for building a backend server for your web application. It includes pre-configured dependencies and scripts that simplify the development process.

The main features of this structure are:

- Routing setup using Express
- Request validation using express-validator
- MongoDB integration using mongoose
- CORS support using cors
- Environment variable management using dotenv
- Logging with morgan

## Getting Started

### Installation

1. Clone this repository to your local machine or download the source code.
2. Navigate to the project directory in your terminal.

```
npm install
```

## Usage

The project includes helpful scripts to start and develop your backend server.

To start the server:

```
npm start
```

To run the server in development mode with automatic restart (using nodemon):

```
npm run dev
```

Make sure to configure your environment variables by creating a .env file in the root directory, and define the required variables.

## Dependencies

The project utilizes the following key dependencies:

## Dependencies

The project utilizes the following key dependencies:

- **babel-cli**: Babel command line interface for transpiling ES6+ code.
- **babel-preset-env**: Babel preset for compiling ES6+ syntax and modern JavaScript features.
- **cors**: Express middleware for enabling Cross-Origin Resource Sharing (CORS) support.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **express**: Web application framework for building APIs and handling routes.
- **express-validator**: Middleware for request validation in Express applications.
- **mongoose**: MongoDB object modeling for Node.js applications.
- **morgan**: HTTP request logger middleware for Express.

## Author

This project was authored by Nicolas Herrera.

## Contact

If you have any suggestions, questions, or need assistance, feel free to contact me at [herreranicoo17@gmail.com](mailto:herreranicoo17@gmail.com). Your feedback is greatly appreciated!
