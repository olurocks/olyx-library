const {users, books} = require('./database')

const resolvers = {
    Query: {
      booksOwnedByOwner: (parent, args) => {
        const ownerId = Number(args.ownerId);
        return books.filter((book) => book.owner === ownerId);
      },
      books: () => books,
      book: (parent, args) => {
        const bookId = Number(args.id);
        return books.find((book) => book.id === bookId);
      },
      users: () => users,
      user: (parent, args) => {
        const userId = Number(args.id);
        return users.find((user) => user.id === userId);
      },
    },
    Mutation: {
      addBook: (parent, args) => {
        const newBook = {
          id: books.length + 1,
          title: args.title,
          owner: Number(args.ownerId),
        };
        books.push(newBook);
        return newBook;
      },
      updateBookOwner: (parent, args) => {
        const bookId = Number(args.bookId);
        const newOwnerId = Number(args.ownerId);
        const bookToUpdate = books.find((book) => book.id === bookId);
        if (bookToUpdate) {
          bookToUpdate.owner = newOwnerId;
        }
        return bookToUpdate;
      },
    },
    Book: {
      owner: (parent) => {
        const ownerId = parent.owner;
        return users.find((user) => user.id === ownerId);
      },
    },
  };
  
  module.exports = {
    resolvers,
  };
  