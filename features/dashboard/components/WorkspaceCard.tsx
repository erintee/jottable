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
      <Card className='p-6'>
        <CardTitle className='text-center'>{workspace}</CardTitle>
        <CardDescription className='text-center'>
            {description && <p>{description}</p>}
        </CardDescription>
        <CardContent className='pt-4 pb-0 text-center'>
            {noteCount === 1 ? `${noteCount} note` : `${noteCount} notes`}
        </CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;