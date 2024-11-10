"use client"

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/ui/text-editor/TextEditor";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"

function AddNoteForm() {
    // const [value, setValue] = useState('');

    // const changeValue = (newValue: string) => {
    //     setValue(newValue);
    // }

    return (
        <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-10 px-4 py-2">
                + Quick Note
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

        // <Card className='max-w-sm'>
        //     <CardHeader className='pb-2'>
        //         <label className='text-sm text-gray-500'>Title</label>
        //         <Input placeholder="Add a title" className='mb-4 text-sm placeholder:text-sm'></Input>            </CardHeader>
        //     <CardContent>
        //         <label className='text-sm text-gray-500'>Content</label>
        //         <TextEditor/>
        //     </CardContent>
        //     <CardFooter>
        //         <Button className='text-sm'>Save</Button>
        //     </CardFooter>
        // </Card>
    )
}

export default AddNoteForm