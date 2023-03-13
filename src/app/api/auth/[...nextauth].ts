import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, request) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const response = await fetch(`${process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEVHOST : process.env.NEXT_PUBLIC_HOSTNAME}/api/login`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
              username: credentials?.username,
              password: credentials?.password
            }
          ),
        });
        const user = await response.json()
  
        // If no error and we have user data, return it
        if (response.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
    // ...add more providers here
  ],

  session: {strategy: "jwt"},
}

export default NextAuth(authOptions)