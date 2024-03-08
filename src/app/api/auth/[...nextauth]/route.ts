import checkExistUser from '@/hook/checkExitUser'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import  CredentialsProvider  from 'next-auth/providers/credentials'

const authOptions:NextAuthOptions = {
    providers : [CredentialsProvider({
        name: "credentials",
        type : "credentials",
        credentials: {
            email: { label: "email", type: "text", name: "email" },
            password: { label: "password", type: "password", name: "password" }
        },
    
        async authorize(credentials, req) {
            let { email, password } = credentials || { email: "", password: "" };
            const existedUser = await checkExistUser(email, password);
            return existedUser;
        }
    })],
    session : {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            return true
        },
        async redirect({ url, baseUrl }) {
            // ทำงานเมื่อมีการ redirect (เช่น signIn / signOut)
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },
        async jwt({ token, user,  profile, account}) {

            if (account) {
                token.createdAt = user.createdAt
                token.id = user.id
                token.email = user.email
                token.role = user.role
                token.lastname = user.lastname
                token.phone = user.phone
            }

            return token
        },
        async session({ session, token, user }) {

            session.user.email = token.email ? token.email : "";
            session.user.id = token.id
            session.user.role = token.role
            session.user.lastname = token.lastname
            session.user.phone = token.phone
            return session
        }
    }
    

}

const nextAuthHandler = NextAuth(authOptions)

export {nextAuthHandler as GET, nextAuthHandler as POST}