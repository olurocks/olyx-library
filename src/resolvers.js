const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    booksOwnedByOwner: (parent, args) => {
      return prisma.book.findMany({
        where: { ownerId: Number(args.ownerId) },
      });
    },
    books: () => {
      return prisma.book.findMany();
    },
    book: (parent, args) => {
      return prisma.book.findUnique({
        where: { id: Number(args.id) },
      });
    },
    users: () => {
      return prisma.user.findMany();
    },
    user: (parent, args) => {
      return prisma.user.findUnique({
        where: { id: Number(args.id) },
      });
    },
  },
  Mutation: {
    addBook: (parent, args) => {
      return prisma.book.create({
        data: {
          title: args.title,
          ownerId: Number(args.ownerId),
        },
      });
    },
    updateBookOwner: async (parent, args) => {
      const { bookId, ownerId } = args;
      const updatedBook = await prisma.book.update({
        where: { id: Number(bookId) },
        data: {
          ownerId: Number(ownerId),
        },
      });
      return updatedBook;
    },
    createOwner: async (parent, args) => {
      const {id, name} = args;
      const newUser = await prisma.user.create({
        data: {
          name: name,
        },
      });
      return newUser;
    },
},


  Book: {
    owner: (parent) => {
      return prisma.user.findUnique({
        where: { id: parent.ownerId },
      });
    },
  },
};

module.exports = {
  resolvers,
};
