import mongoose from 'mongoose';
import { workspacesData } from './workspacesData';
import { notesData } from './notesData';
import Workspace from '../api/models/workspace';
import Note from '../api/models/note';
import connectDB from '../../utils/dbConnect';

const runSeed = async () => {
  try {
    await connectDB(); 
    console.log('Seeding data...');

    // Clear existing data
    await Workspace.deleteMany({});
    await Note.deleteMany({});

    // Insert new data
    await Workspace.insertMany(workspacesData);
    await Note.insertMany(notesData);

    console.log('Data successfully seeded!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.disconnect();
  }
};

runSeed();
