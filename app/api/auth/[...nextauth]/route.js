import NextAuth from "next-auth";
import connectDb from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import prisma from "../../../lib/prisma";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        try {
          await connectDb();
          const user = await prisma.ADMIN.findUnique({ where: { email: credentials.email } });
          if (!user || !user.password) {
            return null;
          }
        //   console.log(user)
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          if (isPasswordCorrect) {
            return { ...user, email: user.email }; 
          }
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
















// import NextAuth, { NextAuthOptions } from "next-auth"
// // import { options } from "./options"
// // import { NextAuthOptions } from "next-auth";
// import prisma from "../../../lib/prisma";
// import CredentialsProvider from "next-auth/providers/credentials"


// export const authOptions = {

//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "Enter Email" },
//         password: { label: "Password", type: "password" }
//       },

//       async authorize(credentials) {
//      if(!credentials || !credentials.email || !credentials.password)
//      return null;
//     const user = await prisma.ADMIN.find((item) => item.email === credentials.email);
//     if (user?.password === credentials.password){
//       return user
//     }
//     return null;
//   }
//     })
//   ],
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST}
