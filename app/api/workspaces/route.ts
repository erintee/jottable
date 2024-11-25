import { NextResponse } from "next/server";
import Workspace from '../models/workspace'; 
import dbConnect from "../../../utils/dbConnect";


// GET Fetch all workspaces
export async function GET() {
  try {
    console.log("GET workspace endpoint")
    await dbConnect();

    // Perform aggregation to include noteCount
    const workspaces = await Workspace.aggregate([
      {
        $lookup: {
          from: "notes",
          localField: "_id",
          foreignField: "workspaceId",
          as: "notes",
        },
      },
      {
        $addFields: {
          noteCount: { $size: "$notes" },
        },
      },
      {
        $project: {
          notes: 0,
        },
      },
    ]);

    return NextResponse.json(workspaces);
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return NextResponse.json({ error: "Failed to fetch workspaces" }, { status: 500 });
  }
}

// POST Add new workspace
export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();

    // Create new workspace
    const newWorkspace = new Workspace({
      name: body.name,
      description: body.description || "",
    });

    // Save to database
    await newWorkspace.save();

    return NextResponse.json({
      message: "Workspace added successfully",
      workspace: newWorkspace,
    });
  } catch (error) {
    console.error("Error saving workspace:", error);
    return NextResponse.json({ message: "Error saving workspace" }, { status: 500 });
  }
}