import mongoose from "mongoose";

export const workspacesData = [
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Personal",
        description: "Personal notes and tasks",
        createdAt: "2024-10-01T10:29:00Z",
        updatedAt: "2024-10-05T08:15:00Z",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Work",
        description: "Work stuff",
        createdAt: "2024-10-02T13:55:00Z",
        updatedAt: "2024-10-07T09:30:00Z",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "School",
        description: "School projects and assignments",
        createdAt: "2024-10-02T15:55:00Z",
        updatedAt: "2024-10-02T15:55:00Z",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        name: "Events",
        createdAt: "2024-10-02T15:56:00Z",
        updatedAt: "2024-10-02T15:56:00Z",
    },
];