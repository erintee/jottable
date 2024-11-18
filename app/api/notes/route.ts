import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "data", "data.json");
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  
        // Add new note id and timestamp
        const newId = (data.notes.length + 1).toString();
        const timestamp = new Date().toISOString();
        
        // New note object
        const newNote = {
            id: newId,
            workspaceId: body.workspaceId,
            title: body.title,
            content: body.content,
            created_at: timestamp,
            updated_at: timestamp,
            tags: body.tags || [],
            is_favorite: false,
            color: "",
        };
  
        data.notes.push(newNote);
  
        // Write the updated data back to the file
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  
        return NextResponse.json({ message: "Note added successfully", note: newNote });
    } catch (error) {
        console.error("Error writing to data.json:", error);
        return NextResponse.json({ message: "Error saving note" }, { status: 500 });
    }
}
  