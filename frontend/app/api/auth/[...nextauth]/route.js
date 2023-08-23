import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchDataFromApi } from "@/utils/api";
const handler = NextAuth({
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
        const user = await fetchDataFromApi(
          "/api/customers?filters[email][$eq]=" + credentials.email
        );

        if (user?.data.length == 0) {
          throw new Error("User not found");
        }
        if (credentials.password != user?.data[0].attributes.pass) {
          throw new Error("Password incorrect");
        }
        console.log(user?.data, credentials);
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

        return {
          name: "user.name",
          email: "user.email",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as POST, handler as GET };
