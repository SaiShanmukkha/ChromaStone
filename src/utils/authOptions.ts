import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@utils/prismaClient"
import { NextAuthOptions } from "next-auth"

export const authOptions : NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: '/login',
  },
  jwt:{
    maxAge: 1 * 24 * 60 * 60,
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks:{
    async signIn({ user, account, profile }){
      try{
        const existingUser = await prisma.user.findUnique({
          where: { email : user.email! },
          include:{
            accounts: true,
            profile: true
          }
        });

        if(!existingUser){
          const role = await prisma.role.findUnique({
            where: {
              name: "Reader"
            }
          });

          if (!role) {
            console.error("Role not found");
            return false;
          }

          const newUser = await prisma.$transaction(async (prisma) => {
            // Create the user
            const createdUser = await prisma.user.create({
              data: {
                email: user.email,
                name: user.name,
                image: user.image,
                emailVerified: true,
                profile: {
                  create:{
                    themePreference: "System",
                    bio: "",
                    roleId: role.id,
                  }
                }
                },
                include: {
                  profile: true,
                },
            });
    
            // Create the account linked to the user
            return prisma.account.create({
              data: {
                userId: createdUser.id,
                type: account!.type,
                provider: account!.provider,
                providerAccountId: account!.providerAccountId,
                token_type: account!.token_type,
                scope: account!.scope,
              },
            });
          });

          return newUser !== null;
        }else{
          const linkedAccount = existingUser.accounts.find(acc => acc.provider === account!.provider && acc.providerAccountId === account!.providerAccountId);
          if (!linkedAccount) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                type: account!.type,
                provider: account!.provider,
                providerAccountId: account!.providerAccountId,
                token_type: account!.token_type,
                scope: account!.scope,
              },
            });
          }
        }

        return true;

      }catch(e){
        console.log("\n===Sign In Error===\n", e);
        return false;
      }
    },

    // async redirect({ url, baseUrl }) { 
    //   console.log("URL = \n", url);
    //   console.log("BaseURL = \n", baseUrl);
    //   return baseUrl 
    // },

    async session({ session, token, user }) {
      const customUser = await prisma.user.findUnique({
        where: { email: user.email },
        include: {
          profile: true,
          accounts: true
        },
      });
      session.user = customUser;
      return session;
    },

    // async jwt({ token, user, account, profile, trigger, session }) {
    //   return token;
    // },
  }
};