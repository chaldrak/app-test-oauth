import NextAuth from "next-auth";
import Exaku from "./providers/exaku";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Exaku({
      clientId: "EXAKU_CLIENT_ID",
      clientSecret: "EXAKU_CLIENT_SECRET",
    }),
  ],
});
