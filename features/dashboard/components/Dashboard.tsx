// Jottable
// Quick note button (opens AddNoteForm as modal)
// -----
// Workspaces in grid | Add workspace icon as last grid item

import React from 'react';
import WorkspaceCard from './WorkspaceCard';

import data from '@/data/data.json';

function Dashboard() {
    const { workspaces, notes } = data;

    // Create a map to count notes for each workspace
    const noteCountMap = notes.reduce((acc: { [key: string]: number }, note) => {
      const workspaceId = note.workspaceId;
      acc[workspaceId] = (acc[workspaceId] || 0) + 1; // Increment count for each note
      return acc;
    }, {});
  
    // Prepare the workspaces array with note counts
    const workspacesWithCounts = workspaces.map((workspace) => ({
      id: workspace.id,
      name: workspace.name,
      description: workspace.description,
      noteCount: noteCountMap[workspace.id] || 0, // Get count or 0 if no notes
    }));
  
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {workspacesWithCounts.map(({ id, name, description, noteCount }) => (
          <WorkspaceCard
            key={id}
            workspace={name}
            description={description}
            noteCount={noteCount}
          />
        ))}
      </div>
    );
}

export default Dashboard