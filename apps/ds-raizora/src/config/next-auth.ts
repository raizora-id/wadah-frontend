import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Enter username'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                console.log('trigeerd');
                const user = {
                    id: '1',
                    name: 'Admin',
                    email: 'admin@example.com',
                    image: 'https://avatars.githubusercontent.com/u/80968727?v=4',
                    username: 'admin@example.com',
                    password: 'admin'
                };
                if (credentials?.username == user.username && credentials.password == user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.JWT_SECRET!
    },
    pages: {
        signIn: '/auth'
    },
    secret: process.env.AUTH_SECRET!
};
