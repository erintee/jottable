import React from 'react'
import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card";

  interface WorkspaceCardProps {
    workspace: string;
    noteCount: number;
  }
  
  const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace, noteCount }) => {
    return (
      <Card className='p-6'>
        <CardTitle className='text-center'>{workspace}</CardTitle>
        <CardContent className='pt-4 pb-0 text-center'>{noteCount === 1 ? `${noteCount} note` : `${noteCount} notes`}</CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;