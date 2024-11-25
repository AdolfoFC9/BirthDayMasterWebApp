# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Birthday Master - Frontend

## Description

**Birthday Master** is a server application built with **Node.js** and **Express**, designed to interact with a **PostgreSQL** database for managing and retrieving information about people and their birthdays.

---

## Main Functionalities

- **Get People List**: Returns a list of all persons in the database.
- **Request People by Month**: Filters and retrieves persons based on the specified month.
- **People Administration**: Enables adding, updating, and deleting records in the database.

---

## Backend Routes

### People Routes
- **GET /people**: Retrieves all persons from the database.
- **GET /people/:month**: Retrieves persons whose birthdays fall in the specified month.
- **POST /person**: Adds a new person to the database.
- **PUT /person/:id**: Updates an existing person's information.
- **DELETE /person/:id**: Deletes a person from the database.

---

## Tools and Technologies

### Languages and Frameworks
- **Node.js**: Runtime environment for building the server.
- **Express.js**: Framework for managing routes, middleware, and server functionality.

### Database
- **PostgreSQL**: Relational database management system used for storing and organizing data.

### Libraries and Middlewares
- **pg**: Library for connecting and executing queries in PostgreSQL.
- **Cors**: Middleware to handle cross-origin requests between client and server.
- **Morgan**: Middleware for logging HTTP requests.
- **Moment.js**: Library for handling and formatting dates.

---

## Future Enhancements

- Add authentication and authorization mechanisms.
- Implement pagination for handling large datasets.
- Improve error management for more informative responses.
- Add dropdown lists to enhance the user experience.
- Standardize visual styles across all pages (consistent colors, fonts, and alignment).

---