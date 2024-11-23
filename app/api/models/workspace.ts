import mongoose, { Document, Schema } from "mongoose";

export interface WorkspaceInterface extends Document {
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

const workspaceSchema = new Schema<WorkspaceInterface>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,  
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
});

const Workspace = mongoose.model<WorkspaceInterface>("Workspace", workspaceSchema);

export default Workspace;