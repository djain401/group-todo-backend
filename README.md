# Sample todo backend

This repository showcases a sample backend with APIs for a **todo** application, written in NodeJS and using ExpressJS for routing.
The backend is built with MongoDB as the data store and Mongoose for connection and model management.
The APIs include endpoints for creating, reading, updating, and deleting todo items.
The code is well-organized and follows best practices for NodeJS and MongoDB development, making it a great starting point for developers who want to build their own todo application.

## Features

- Easy to customise API functions
- Handles errors and exceptions gracefully and provides informative error messages to the user
- Quick setup and deployment steps
- Customisable Cross-origin resource sharing header setting

## Pre-requisites

- A development environment with below tools installed
  - [NodeJs](https://nodejs.org/en) latest stable version
  - [Docker](https://www.docker.com/) latest stable version

## Usage

- Clone the repository to your machine.
- Run mongodb locally using below docker command.

    ```console
    docker run --name todo-db -p 27017:27017 -d mongo:latest
    ```

- Install the npm dependencies using `npm install`.
- Run the app in using `npm start`. APIs are accessible at <http://localhost:3001> by default.

The application works best with this [To-do frontend application](https://github.com/djain401/sample-todo-frontend).

This backend application can be tested through API clients
like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

## Security

- Update the CORS policy for the API server for better security.
- Use a library like [Helmet](https://helmetjs.github.io/) to set common security HTTP headers.

## Backlog

The project is currently just a minimum viable product
and needs below features developed to make it
useful for real-world use-cases.

- [ ] User authentication: Require users to authenticate with the backend to access their todo items, ensuring security and privacy.
- [ ] Input validation: Validate user input to ensure data integrity and prevent malicious attacks, such as SQL injection or cross-site scripting (XSS).
- [ ] Pagination: Allow users to paginate through their todo items to improve performance and usability.
Sorting and filtering: Enable users to sort and filter their todo items based on criteria such as date, priority, or completion status.
- [ ] API documentation: Provide comprehensive documentation for the APIs, including examples and descriptions of request and response structures, to facilitate integration with frontend applications.
