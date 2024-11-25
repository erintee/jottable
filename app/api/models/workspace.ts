import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the workspace
export interface WorkspaceInterface extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema for the workspace
const workspaceSchema = new Schema<WorkspaceInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Check if the model is already defined
const Workspace =
  mongoose.models.Workspace || mongoose.model<WorkspaceInterface>("Workspace", workspaceSchema);

export default Workspace;
