import React from 'react'
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";

  interface WorkspaceCardProps {
    workspace: string;
    description: string;
    noteCount: number;
  }
  
  const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ workspace, description, noteCount }) => {
    return (
      <Card className='p-6 text-center'>
        <CardTitle>{workspace}</CardTitle>
        <CardDescription className='italic'>
            {description && <p>{description}</p>}
        </CardDescription>
        <CardContent className='pt-4 pb-0'>
            {noteCount === 1 ? `${noteCount} note` : `${noteCount} notes`}
        </CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;