import { NextAuthOptions } from "next-auth";
import Apple from "next-auth/providers/apple";
import Auth0 from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import Slack from "next-auth/providers/slack";
import Spotify from "next-auth/providers/spotify";
import Strava from "next-auth/providers/strava";
import Twitch from "next-auth/providers/twitch";
import Twitter from "next-auth/providers/twitter";
import VK from "next-auth/providers/vk";
import WordPress from "next-auth/providers/wordpress";
import Zoom from "next-auth/providers/zoom";

const users: any[] = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    username: "admin",
    password: "admin",
  },
  {
    id: 2,
    name: "Regular User",
    email: "user@example.com",
    role: "user",
    username: "user",
    password: "user",
  },
];

const options: NextAuthOptions = {
  providers: [
    // List of authentication providers...

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    Apple({
      clientId: process.env.APPLE_ID as string,
      clientSecret: process.env.APPLE_SECRET as string,
    }),
    Auth0({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    Slack({
      clientId: process.env.SLACK_CLIENT_ID as string,
      clientSecret: process.env.SLACK_CLIENT_SECRET as string,
    }),
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
    Strava({
      clientId: process.env.STRAVA_CLIENT_ID as string,
      clientSecret: process.env.STRAVA_CLIENT_SECRET as string,
    }),
    Twitch({
      clientId: process.env.TWITCH_CLIENT_ID as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET as string,
    }),
    VK({
      clientId: process.env.VK_CLIENT_ID as string,
      clientSecret: process.env.VK_CLIENT_SECRET as string,
    }),
    WordPress({
      clientId: process.env.WORDPRESS_CLIENT_ID as string,
      clientSecret: process.env.WORDPRESS_CLIENT_SECRET as string,
      issuer: process.env.WORDPRESS_ISSUER,
    }),
    Zoom({
      clientId: process.env.ZOOM_CLIENT_ID as string,
      clientSecret: process.env.ZOOM_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        // Verify credentials
        const user = users.find(
          (user) =>
            user?.username === credentials?.username &&
            user?.password === credentials?.password
        );

        if (user) {
          return user;
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token) {
        session.user = token as any;
      }
      return session;
    },
  },
};

export default options;
