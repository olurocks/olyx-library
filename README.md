# olyx-library



# OLYX Library GraphQL API

This repository contains a GraphQL API implementation for the OLYX library. The API allows you to manage users and books, including querying books owned by a specific owner, updating the owner of a book, creating new owners (users), and creating new books.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL server (v8 or higher)

### Installation

```git clone https://github.com/olurocks/olyx-library.git
cd olyx-library-graphql
npm install
```

Create a new database in your MySQL server named `olyx_library`.

Create a `.env` file in the root directory of the project with the following content:

```dotenv
DATABASE_URL=mysql://db_user:db_password@localhost:3306/olyx_library
```

Replace `db_user` and `db_password` with your MySQL username and password, respectively.

### Running the API

```bash
npm start
```

The server will be running at `http://localhost:9090/`, and you can access the GraphQL Playground from your browser to interact with the API.

## Using the API

### Queries

```graphql
query {
  booksOwnedByOwner(ownerId: 1) {
    id
    title
    owner {
      id
      name
    }
  }
}
```

```graphql
query {
  books {
    id
    title
    owner {
      id
      name
    }
  }
}
```

```graphql
query {
  book(id: 1) {
    id
    title
    owner {
      id
      name
    }
  }
}
```

```graphql
query {
  users {
    id
    name
  }
}
```

```graphql
query {
  user(id: 1) {
    id
    name
  }
}
```

### Mutations

```graphql
mutation {
  addBook(title: "New Book", ownerId: 1) {
    id
    title
    owner {
      id
      name
    }
  }
}
```

```graphql
mutation {
  updateBookOwner(bookId: 1, ownerId: 2) {
    id
    title
    owner {
      id
      name
    }
  }
}
```

```graphql
mutation {
  createOwner(name: "John Doe") {
    id
    name
  }
}
```

```graphql
mutation {
  createBook(title: "New Book", ownerId: 1) {
    id
    title
    owner {
      id
      name
    }
  }
}
```
