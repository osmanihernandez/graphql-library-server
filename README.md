# 📚 Library App Backend

## Description

This repository contains the backend for the Library App. It provides a GraphQL API that manages books, authors, and user data, supporting features such as authentication, filtering, and real-time updates.

---

## Main Features

- [x] **GraphQL API for books and authors**
  - Query all books and authors
  - Filter books by genre or author

- [x] **User authentication**
  - Users can log in
  - JSON Web Token (JWT) based authentication

- [x] **Create and manage data**
  - Add new books
  - Automatically create authors if they do not exist
  - Update author information

- [x] **Relationships between entities**
  - Books are linked to authors
  - Author data is populated in queries

- [x] **Real-time updates**
  - GraphQL subscriptions notify clients when a new book is added

- [x] **Database integration**
  - Persistent storage using MongoDB

---

## Client

👉 Client repository: **https://github.com/osmanihernandez/graphql-library-client**

---

## Notes

**Challenging parts**:

- Designing GraphQL schema and resolvers
- Managing relationships between books and authors
- Implementing authentication with JWT
- Handling real-time updates with subscriptions

---

## Tech Stack

- Node.js
- Express
- Apollo Server (GraphQL)
- MongoDB / Mongoose
