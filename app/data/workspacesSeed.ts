import mongoose from "mongoose";
import Workspace from "../api/models/workspace";
import { workspacesData } from "./workspacesData";

const seedWorkspaces = async () => {
  try {
    // Clear existing workspaces
    await Workspace.deleteMany({});
    console.log("Workspaces collection cleared.");

    // Insert new workspaces
    await Workspace.insertMany(workspacesData);
    console.log("Workspaces data seeded.");
  } catch (err) {
    console.error("Error seeding workspaces: ", err);
  } finally {
    mongoose.connection.close();
  }
};

export default seedWorkspaces;
