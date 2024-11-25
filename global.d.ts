// global.d.ts
import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null; // Mongoose connection object
    promise: Promise<mongoose.Connection> | null; // Connection promise
  };
}

export {}; 
