import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
const authOptions:NextAuthOptions = {
    session :{
        strategy:'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers :[
        CredentialsProvider({
            type : 'credentials',
            name : 'Credentials',
            credentials: {
                email :{label:'email',type:'email',placeholder:'email'},
                fullName :{label:'Full Name',type:'text',placeholder:'Full Name'},
                password :{label:'password',type:'password',placeholder:'password'}
            },
            async authorize(credentials) {
                const {email,password,fullName} = credentials as {
                    email :string;
                    password : string;
                    fullName:string;
                };
                const user:any = {id:1,email,password,fullName};
                if(user) {
                    console.log(user);
                    return user;
                }else {
                    return null;
                };
            },
        }),
    ],
    callbacks: {
        jwt({token,account,profile,user}:any) {
            if(account?.provider === 'credentials') {
                token.email = user.email;
                token.fullName = user?.fullName
            }
            console.log({token,account,user})
            return token
        },
        async session({session,token} : any) {
            if("email" in token) {

                session.user.email = token?.email;
            }
            if("fullName" in token) {
                session.user.fullName = token?.fullName;
            }
            console.log(session,token);
            return session;
        }
    }
};
export default NextAuth(authOptions);