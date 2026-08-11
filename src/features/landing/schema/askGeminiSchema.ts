import { z } from "zod";

export const askGeminiSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, "Please enter a prompt to consult the AI Stylist")
    .max(1000, "Prompt cannot exceed 1000 characters"),
  occasion: z.string().trim().optional(),
  city: z.string().trim().optional(),
});

export type AskGeminiFormValues = z.infer<typeof askGeminiSchema>;

export default askGeminiSchema;
