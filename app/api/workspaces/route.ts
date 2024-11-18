import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const dataFilePath = path.join(process.cwd(), "data", "data.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Read the existing data
    const data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Generate a new ID for the workspace
    const newId = (data.workspaces.length + 1).toString();

    // Create a new workspace object
    const newWorkspace = {
      id: newId,
      name: body.title,
      description: body.description,
    };

    // Add the new workspace to the existing array
    data.workspaces.push(newWorkspace);

    // Write the updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ message: "Workspace added successfully", workspace: newWorkspace });
  } catch (error) {
    console.error("Error writing to data.json:", error);
    return NextResponse.json({ message: "Error saving workspace" }, { status: 500 });
  }
}
