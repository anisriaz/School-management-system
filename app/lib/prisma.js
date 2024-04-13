import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.MONGODB_URI === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

console.log("Prisma client instance created!"); 

export default prisma;
