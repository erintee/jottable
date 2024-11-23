import mongoose, { Document, Schema } from "mongoose";

export interface NoteInterface extends Document {
    workspaceId: mongoose.Types.ObjectId;
    title: string;
    content: string;
    tags: string[];
    isFavourite: boolean;
    colour: string;
    createdAt: Date;
    updatedAt: Date;
}

const noteSchema = new Schema<NoteInterface>({
    workspaceId: {
        type: Schema.Types.ObjectId,
        ref: "Workspace",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    },
    isFavourite: {
        type: Boolean,
        required: true,
    },
    colour: {
        type: String,
        required: true,
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

const Note = mongoose.model<NoteInterface>("Note", noteSchema);

export default Note;