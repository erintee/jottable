import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import NoteTextarea from "@/components/ui/text-editor/NoteTextarea";

function AddNoteForm() {
    // const [value, setValue] = useState('');

    // const changeValue = (newValue: string) => {
    //     setValue(newValue);
    // }

    return (
        <Card className='max-w-sm'>
            <CardHeader>
                <CardTitle>Create a note</CardTitle>
            </CardHeader>
            <CardContent>
                <label>Title</label>
                <Input placeholder="Add a title"></Input>
                <label>Content</label>
                <NoteTextarea/>
            </CardContent>
            <CardFooter>
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
}

export default AddNoteForm