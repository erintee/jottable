import React from 'react'
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";

  
  const WorkspaceCard: React.FC = () => {
    return (
      <Card className='p-6 text-center'>
        <CardTitle>New Workspace</CardTitle>
        <CardDescription className='italic'>Add a new workspace</CardDescription>
        <CardContent className='pt-4 pb-0'>
            +
        </CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;