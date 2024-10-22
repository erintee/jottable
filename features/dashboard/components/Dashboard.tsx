// Jottable
// Quick note button (opens AddNoteForm as modal)
// -----
// Workspaces in grid | Add workspace icon as last grid item

import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
import WorkspaceCard from './WorkspaceCard';

import notes from '@/data/notes.json';

function Dashboard() {

// Group notes by workspace and count them
const workspaceCounts = notes.reduce((acc: { [key: string]: number }, note) => {
    acc[note.workspace] = (acc[note.workspace] || 0) + 1;
    return acc;
  }, {});

  // Get an array of workspaces with note counts
  const workspaces = Object.keys(workspaceCounts).map((workspace) => ({
    workspace,
    noteCount: workspaceCounts[workspace],
  }));

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {workspaces.map(({ workspace, noteCount }) => (
        <WorkspaceCard key={workspace} workspace={workspace} noteCount={noteCount} />
      ))}
    </div>
  );
}

export default Dashboard