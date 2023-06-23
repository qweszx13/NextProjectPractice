import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { password } from "../../../util/jwtPassword";

console.log(password);

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'a16c3b51c3b9c57e15f7',
      clientSecret: '4f64ea82c8852670d75ecc69516a776b5561667f',
    }),
  ],
  secret : password
};
export default NextAuth(authOptions); 