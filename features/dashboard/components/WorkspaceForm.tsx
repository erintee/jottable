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
  title: z.string().optional(),
  description: z.string().optional(),
})

function WorkspaceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:"",
      description:""
    },
  })
 
// Submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //TEST
      console.log("Form values:", values);

      const title = values.title?.trim() || "Untitled Workspace";

      const response = await fetch("/api/workspaces", {
        method: "POST",
        headers: {
          "Conttent-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description: values.description,
        }),
      });

    if (response.ok) {
      const data = await response.json();
      console.log("Workspace added:", data.workspace);
      form.reset();
    } else {
      console.error("Failed to add workspace");
    }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
                <Input 
                  className='h-8 mt-1 text-center border-0' 
                  placeholder="New Workspace" {...field} 
                />
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
                <Input 
                  className='h-6 mt-1 italic text-center border-0 text-muted-foreground' 
                  placeholder="Add a description" {...field} 
                />
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

export default WorkspaceForm;