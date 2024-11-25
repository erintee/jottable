import React from 'react';
import { useData } from "@/app/context/DataContext";
import WorkspaceCard from './components/WorkspaceCard';
import WorkspaceForm from './components/WorkspaceForm';

function Dashboard() {

  const { workspaces } = useData();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {workspaces && workspaces.map(({ _id, name, description, noteCount }) => (
        <WorkspaceCard
          key={_id}
          name={name}
          description={description || ""}
          noteCount={noteCount}
        />
      ))}
      <WorkspaceForm />
    </div>
  );
}

export default Dashboard;
