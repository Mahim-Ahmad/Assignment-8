import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(); // uses the database name from the connection string

export const auth = betterAuth({
  database: mongodbAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.CLIENT_URL],

  // Custom Email/Password auth (Login/Register pages)
  emailAndPassword: {
    enabled: true,
  },

  // Extra fields we collect at Register: name is built-in,
  // photo-url is stored via the "image" field better-auth already supports.
  user: {
    additionalFields: {},
  },

  // Google Social Login
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});

export { client as mongoClient, db };
