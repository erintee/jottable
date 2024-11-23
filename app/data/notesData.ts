import mongoose from "mongoose";
import { workspacesData } from "./workspacesData";

export const notesData = [
    {
        _id: new mongoose.Types.ObjectId(),
        workspaceId: workspacesData[0]._id,
        title: "Grocery List",
        content: "Eggs, Milk, Bread, Butter",
        createdAt: "2024-10-01T10:30:00Z",
        updatedAt: "2024-10-01T10:45:00Z",
        tags: [
            "shopping",
            "chores"
        ],
        isFavourite: true,
        colour: "#FFCC00",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        workspaceId: workspacesData[0]._id,
        title: "Book Recommendations",
        content: "1. The Great Gatsby\n2. To Kill a Mockingbird\n3. 1984",
        createdAt: "2024-10-05T08:00:00Z",
        updatedAt: "2024-10-05T08:15:00Z",
        tags: [
            "books",
            "reading"
        ],
        isFavourite: false,
        colour: "#FF66CC",
    },    
    {
        _id: new mongoose.Types.ObjectId(),
        workspaceId: workspacesData[1]._id,
        title: "Project Meeting Notes",
        content: "Discussed the new marketing strategy and budget allocation.",
        createdAt: "2024-10-02T14:00:00Z",
        updatedAt: "2024-10-02T14:30:00Z",
        tags: [
            "meetings",
            "projects"
        ],
        isFavourite: false,
        colour: "#00CCFF",
    },    
    {
        _id: new mongoose.Types.ObjectId(),
        workspaceId: workspacesData[1]._id,
        title: "Client Feedback",
        content: "Received positive feedback on the latest project deliverables.",
        createdAt: "2024-10-07T09:00:00Z",
        updatedAt: "2024-10-07T09:30:00Z",
        tags: [
            "clients",
            "feedback"
        ],
        isFavourite: true,
        colour: "#FFCC00",
    },
];