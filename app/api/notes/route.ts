import { NextResponse } from "next/server";
import Note from '../models/note';
import dbConnect from "../../../utils/dbConnect";

// GET Fetch all notes
export async function GET() {
  try {
    await dbConnect();

    const notes = await Note.find();
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.error();
  }
}

// POST new note
export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();

    // Create new note
    const newNote = new Note({
        workspaceId: body.workspaceId,
        title: body.title,
        content: body.content,
        tags: body.tags || [],
        isFavourite: body.isFavourite || false,
        color: body.colour || "#FFCC00",
    });

    // Save to database
    await newNote.save();
    
    return NextResponse.json({ 
        message: "Note added successfully", 
        note: newNote 
    });
  } catch (error) {
      console.error("Error saving note:", error);
      return NextResponse.json({ message: "Error saving note" }, { status: 500 });
  }
}