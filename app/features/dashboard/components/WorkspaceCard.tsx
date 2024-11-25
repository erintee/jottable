import React from 'react'
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/app/components/ui/card";

  interface WorkspaceCardProps {
    name: string;
    description: string | null;
    noteCount: number;
  }
  
  const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ name, description, noteCount }) => {
    return (
      <Card className='p-6 text-center'>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='italic'>
            {description && <span>{description}</span>}
        </CardDescription>
        <CardContent className='pt-4 pb-0'>
            {noteCount === 1 ? `${noteCount} note` : `${noteCount} notes`}
        </CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;