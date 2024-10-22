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
        <input placeholder='New Workspace' className='placeholder:text-2xl placeholder:text-muted-foreground text-black text-center text-2xl font-semibold leading-tight focus:outline-black'/>
        <input placeholder='Add a description'className='text-muted-foreground text-center italic text-sm focus:outline-black'/>
        <CardContent className='pt-4 pb-0'>
            +
        </CardContent>
      </Card>
    );
  }
  
  export default WorkspaceCard;