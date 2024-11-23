import mongoose from "mongoose";
import Note from "../api/models/note";
import { notesData } from "../data/notesData";

const seedNotes = async () => {
  try {
    // Clear existing notes
    await Note.deleteMany({});
    console.log("Notes collection cleared.");

    // Insert new notes
    await Note.insertMany(notesData);
    console.log("Notes data seeded.");
  } catch (err) {
    console.error("Error seeding notes: ", err);
  } finally {
    mongoose.connection.close();
  }
};

export default seedNotes;
