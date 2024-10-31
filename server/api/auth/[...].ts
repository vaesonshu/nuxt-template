import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
  secret: process.env.AUTH_SECRET || 'my-auth-secret',
  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID || 'enter-your-client-id-here',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'enter-your-client-secret-here'
    })
  ]
  // your authentication configuration here!
  // callbacks: {
  //   /* on before signin */
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true
  //   },
  //   /* on redirect to another url */
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl
  //   },
  //   /* on session retrival */
  //   async session({ session, user, token }) {
  //     return session
  //   },
  //   /* on JWT token creation or mutation */
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token
  //   }
  // }
  // your authentication configuration here!
  // pages: {
  //   signIn: '/auth/signIn',
  //   signOut: '/auth/signOut',
  //   error: '/auth/error',
  //   verifyRequest: '/auth/verify-request',
  //   newUser: '/auth/new-user'
  // }
})
