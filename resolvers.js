const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    user: async (_event, args) => {
      return prisma.user.findFirst({
        where: { id: args.id },
      });
    },
  },
  Mutation: {
    createUser: async (_event, args) => {
      const createUserInput = args.createUserInput;

      if (!createUserInput) {
        throw new Error("Invalid createUserInput");
      }

      return prisma.user.create({
        data: {
          taskName: createUserInput.taskName,
          title: createUserInput.title,
          description: createUserInput.description,
          completed: createUserInput.completed,
        },
      });
    },
    updateUser: async (_event, args) => {
      const updateUserInput = args.updateUserInput;
      return prisma.user.update({
        where: { id: args.id },
        data: {
          taskName: updateUserInput.taskName,
          title: updateUserInput.title,
          description: updateUserInput.description,
          completed: updateUserInput.completed,
        },
      });
    },
    deleteUser: async (_event, args) => {
      return prisma.user.delete({
        where: { id: args.id },
      });
    },
  },
};

module.exports = { resolvers };
