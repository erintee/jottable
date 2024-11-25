// dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface Cached {
  conn: mongoose.Connection | null;  // Use the Mongoose Connection type
  promise: Promise<mongoose.Connection> | null;  // Correct type for promise
}

// Check if the global `mongoose` object is already set up
let cached: Cached = global.mongoose || { conn: null, promise: null };

// Attach the cached object to the global scope (if not already present)
if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    // Store the promise in the cache
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
      console.log("Database connected 🚀");
      return m.connection; // Accessing the connection object
    });
  }

  try {
    cached.conn = await cached.promise; // Await and store the connection
  } catch (error) {
    cached.promise = null; // Reset promise on failure
    throw error;
  }

  return cached.conn;
}

export default dbConnect;
