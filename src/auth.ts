import NextAuth from "next-auth";
import Exaku from "./providers/exaku";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Exaku({
      clientId: "starkhub",
      clientSecret: "exaku_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    }),
  ],
});
