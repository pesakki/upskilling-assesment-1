const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const { decodedToken } = require("./decodeToken");

const prisma = new PrismaClient();
const resolvers = {
  Query: {
    
    // users: async () => {
    //   return prisma.user.findMany();
    // },
    users: async (root, args, { prisma, req }, info) => {
      const decoded = decodedToken(req);
      console.log("id", decoded.userId);

      const user = await prisma.user.findFirst({
        where: { id: decoded.userId },
        select: {
          id: true,
          title: true,
          taskName: true,
          description: true,
          completed: true,
        },
      });
      console.log("user", user);
      return user ? [user] : [];
    },
    user: async (_event, args) => {
      return prisma.user.findFirst({
        where: { id: args.id },
      });
    },
  },

  Mutation: {
    createUser: async (_event, args, { prisma }, info) => {
      const createUserInput = args.createUserInput;

      if (!createUserInput) {
        throw new Error("Invalid createUserInput");
      }
      const createTask = await prisma.user.create({
        data: {
          taskName: createUserInput.taskName,
          title: createUserInput.title,
          description: createUserInput.description,
          completed: createUserInput.completed,
        },
      });
      const token = jwt.sign({ userId: createTask.id }, "Doremon", {
        expiresIn: "120s",
      });

      return {
        ...createTask,
        token: token,
      };
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
