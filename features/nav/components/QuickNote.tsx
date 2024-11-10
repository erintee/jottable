"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import data from '@/data/data.json';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/components/ui/text-editor/TextEditor"), {
  ssr: false,
});

// Define the schema
const formSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  workspace: z.string().min(1, "Please select a workspace"),
});

function QuickNote() {
  const { workspaces } = data;

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      workspace: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const noteData = {
      ...values,
      title: values.title?.trim() || "Untitled Note",
    };
    console.log(noteData);
  }

  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-10 px-4 py-2">
        + Quick Note
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Quick Note</DialogTitle>
            <DialogDescription>Add a new note</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
            
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Note Content</FormLabel>
                  <FormControl>
                    <TextEditor
                      value={field.value || ""}
                      onChange={field.onChange} // Handle editor's change events
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            {/* Workspace Selection */}
            <FormField
              control={form.control}
              name="workspace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Workspace</FormLabel>
                  <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a workspace" />
                    </SelectTrigger>
                    <SelectContent>
                      {workspaces.map((workspace) => (
                        <SelectItem key={workspace.id} value={workspace.name}>
                          {workspace.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />

            {/* Submit Button */}
            <Button type="submit">Save Note</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default QuickNote;