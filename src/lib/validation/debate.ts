import { z } from "zod";

export const DebateSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  topic: z.string().min(3, "Topic must be at least 3 characters"),
  date: z.string().nonempty("Please select a date"),
  time: z.string().nonempty("Please select a time"),
  duration: z
    .string()
    .refine(val => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Duration must be a positive number",
    }),
  applicationDeadline: z.string().nonempty("Please provide an application deadline"),
  maxDebaters: z
    .string()
    .refine(val => !isNaN(Number(val)) && Number(val) >= 2 && Number(val) <= 20, {
      message: "Max debaters must be between 2 and 20",
    }),
  format: z.enum(["oxford", "lincoln-douglas", "parliamentary", "public-forum"], {
    required_error: "Please select a debate format",
  }),
  rules: z.string().max(2000).optional(),
  sides: z.array(z.string()).optional(),
});

// For type inference
export type DebateFormData = z.infer<typeof DebateSchema>;
