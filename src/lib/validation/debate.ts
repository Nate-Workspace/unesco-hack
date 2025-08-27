import { z } from "zod";

export const DebateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  topic: z.string().min(3, "Topic must be at least 3 characters"),
  date: z.string().nonempty("Please select a debate date"),
  time: z.string().nonempty("Please select a start time"),
  duration: z.string().min(1, "Duration is required"),
  applicationDeadline: z.string().nonempty("Please provide an application deadline"),
  rules: z.string().max(2000).optional(),
  sides: z.array(z.string()).optional(),
});

export type DebateFormData = z.infer<typeof DebateSchema>;
