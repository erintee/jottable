import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/text-editor/TextEditor";

function AddNoteForm() {
    // const [value, setValue] = useState('');

    // const changeValue = (newValue: string) => {
    //     setValue(newValue);
    // }

    return (
        <Card className='max-w-sm'>
            <CardHeader className='pb-2'>
                <label className='text-sm text-gray-500'>Title</label>
                <Input placeholder="Add a title" className='mb-4 text-sm placeholder:text-sm'></Input>            </CardHeader>
            <CardContent>
                <label className='text-sm text-gray-500'>Content</label>
                <TextEditor/>
            </CardContent>
            <CardFooter>
                <Button className='text-sm'>Save</Button>
            </CardFooter>
        </Card>
    )
}

export default AddNoteForm