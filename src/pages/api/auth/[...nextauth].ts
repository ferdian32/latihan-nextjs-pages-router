import { signIn } from "@/utils/db/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
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
                password :{label:'password',type:'password',placeholder:'password'}
            },
            async authorize(credentials) {
                const {email,password} = credentials as {
                    email :string;
                    password : string;
                  
                };
                const user:any = await signIn({email,password});
                if(user) {
                    const passwordConfirm = await bcrypt.compare(password,user?.password);
                    if(passwordConfirm){

                   
                        return user;
                    }
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
                token.fullName = user?.fullName,
                token.role = user?.role
            }
            
            return token
        },
        async session({session,token} : any) {
            if("email" in token) {

                session.user.email = token?.email;
            }
            if("fullName" in token) {
                session.user.fullName = token?.fullName;
            }
            if("role" in token) {
                session.user.fullName = token?.role;
            }
           
            return session;
        }
    },
    pages : {
        signIn : '/auth/login',
    }
};
export default NextAuth(authOptions);