import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      //@ts-ignore
      async authorize(credentials) {
        // const user = await fetchDataFromApi(
        //   "/api/customers?filters[email][$eq]=" + credentials.email
        // );
        // if (user?.data.length == 0) {
        //   throw new Error("User not found");
        // }
        // if (credentials.password != user?.data[0].attributes.pass) {
        //   throw new Error("Password incorrect");
        // }
        // console.log(user?.data, credentials);
        // // Check if user exists
        // if (!user) {
        //   return null;
        // }
        // // Validate password
        // const isPasswordMatch = await isPasswordValid(
        //   credentials.password,
        //   user.password
        // );
        // if (!isPasswordMatch) {
        //   return null;
        // }
        // return {
        //   name: "user.name",
        //   email: "user.email",
        // };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  callbacks: {
    async jwt({ token, user, profile }: any) {
      const users = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      });
      delete users.password;
      users && (token.user = users);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;

      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {},
  },
});

export { handler as GET, handler as POST };
