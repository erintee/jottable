"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface Workspace {
  _id: string;
  name: string;
  description?: string;
  noteCount: number;
}

interface WorkspaceInput {
  name: string;
  description?: string;
}

interface Note {
  _id: string;
  workspaceId: string;
  title: string;
  content: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  isFavourite: boolean;
  colour: string;
}

interface NoteInput {
  workspaceId: string;
  title: string;
  content: string;
  tags?: string[];
  isFavourite?: boolean;
  colour?: string;
}

interface DataContextType {
  workspaces: Workspace[];
  notes: Note[];
  addWorkspace: (workspace: WorkspaceInput) => void;
  addNote: (note: NoteInput) => void;
  updateNoteCount: (workspaceId: string, newCount: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchWorkspaces = async () => {
    try {
        const response = await fetch("/api/workspaces");
        const data = await response.json();
        setWorkspaces(data);
    } catch (error) {
        console.error("Error fetching workspaces:", error);
    }
  };

  // Fetch workspaces on load
  useEffect(() => {
      fetchWorkspaces();
  }, []);

  // Add a new workspace
  const addWorkspace = async (workspace: WorkspaceInput) => {
    try {
      const response = await fetch("/api/workspaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workspace),
      });

      if (!response.ok) {
        throw new Error("Failed to add workspace");
      }

      const data = await response.json();
      const savedWorkspace = data.workspace;
      setWorkspaces((prev) => [...prev, { ...savedWorkspace, noteCount: 0 }]);
      return { success: true, message: "Workspace added successfully" };
    } catch (error: any) {
      console.error("Error adding workspace:", error.message);
      return { success: false, message: error.message || "An unknown error occurred" };
    }
  };

  // Add a new note
  const addNote = async (note: NoteInput) => {
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        throw new Error("Failed to add note");
      }

      const data = await response.json();
      const savedNote = data.note;
      setNotes((prev) => [...prev, { ...savedNote}]);
      fetchWorkspaces();
      return { success: true, message: "Note added successfully" };
    } catch (error: any) {
      console.error("Error adding note: ", error.message);
      return { success: false, message: error.message || "An unknown error occured" };
    }
  };

  // For updating workspace notecount on dashboard after QuickNote add
  const updateNoteCount = (workspaceId: string, newCount: number) => {
    setWorkspaces((prev) =>
      prev.map((workspace) =>
        workspace._id === workspaceId ? { ...workspace, noteCount: newCount } : workspace
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        workspaces,
        notes,
        addWorkspace,
        addNote,
        updateNoteCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Hook to access the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
