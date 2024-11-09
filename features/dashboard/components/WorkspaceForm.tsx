// import React from 'react'
// import {
//     Card,
//     CardContent,
//   } from "@/components/ui/card";
// import { Button } from '@/components/ui/button';
  
//   const WorkspaceCard: React.FC = () => {
//     return (
//       <Card className='p-6 text-center'>
//         {/* <Input placeholder='New Workspace' className='placeholder:text-2xl placeholder:text-muted-foreground text-black text-center text-2xl font-semibold leading-tight focus:outline-black'/> */}
//         {/* <Input placeholder='Add a description'className='text-muted-foreground text-center italic text-sm focus:outline-black'/> */}
//         <CardContent className='pt-4 pb-0'>
//             <Button className=' text-3xl'>+</Button>
//         </CardContent>
//       </Card>
//     );
//   }
  
//   export default WorkspaceCard;

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  title: z.string(),
  description: z.string()
})

export function WorkspaceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:"New Workspace",
      description:""
    },
  })
 
  // TODO: submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-column gap-1 p-3 text-center border rounded-lg shadow-sm">
      <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel className="sr-only">Title</FormLabel>
              <FormControl className="font-semibold text-2xl">
                <Input className='h-8 mt-1 text-center border-0' placeholder="New Workspace" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Name your workspace.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Description</FormLabel>
              <FormControl>
                <Input className='h-6 mt-1 italic text-center border-0 text-muted-foreground' placeholder="Add a description" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Describe your workspace.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="m-2" type="submit">+</Button>
      </form>
    </Form>
  )
}