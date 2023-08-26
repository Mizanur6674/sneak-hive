import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth.token);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log("token", req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token?.user.role);

        return token?.user.role === "ADMIN";
      },
    },
  }
);
export const config = { matcher: ["/dashboard/:path*"] };
